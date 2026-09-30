/* ============================================================
   OMEGA CORE — el núcleo visual de la máquina viva.
   WebGL2 puro, cero dependencias, ~7 KB. Se degrada solo.
   ============================================================ */
(function () {
  'use strict';
  var canvas = document.getElementById('core');
  if (!canvas) return;

  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var gl = canvas.getContext('webgl2', { antialias: false, alpha: true, powerPreference: 'high-performance', depth: false, stencil: false });
  if (!gl) { document.documentElement.classList.add('no-webgl'); return; }
  document.documentElement.classList.add('has-webgl');

  var VERT = '#version 300 es\nin vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';

  var FRAG = `#version 300 es
  precision highp float;
  out vec4 O;
  uniform vec2 R;      // resolución
  uniform float T;     // tiempo
  uniform vec2 M;      // puntero suavizado (-1..1)
  uniform float E;     // energía (0..1) — sube con la interacción

  // --- ruido ---
  vec2 h2(vec2 p){p=vec2(dot(p,vec2(127.1,311.7)),dot(p,vec2(269.5,183.3)));return fract(sin(p)*43758.5453)*2.-1.;}
  float nse(vec2 p){
    vec2 i=floor(p),f=fract(p);vec2 u=f*f*(3.-2.*f);
    return mix(mix(dot(h2(i),f),dot(h2(i+vec2(1,0)),f-vec2(1,0)),u.x),
               mix(dot(h2(i+vec2(0,1)),f-vec2(0,1)),dot(h2(i+vec2(1,1)),f-vec2(1,1)),u.x),u.y);
  }
  float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<3;i++){v+=a*nse(p);p*=2.17;a*=.52;}return v;}

  // Campo de la máquina: pliegue de dominio + corazón que late
  float field(vec2 uv,float t){
    vec2 q=vec2(fbm(uv+vec2(0.,t*.06)),fbm(uv+vec2(5.2,1.3)-t*.04));
    return fbm(uv+2.9*q+vec2(1.7,9.2)+t*.05);
  }

  void main(){
    vec2 uv=(gl_FragCoord.xy*2.-R)/min(R.x,R.y);
    vec2 puv=uv;
    uv+=M*.13;                                   // paralaje del puntero

    float t=T;
    float pulse=.5+.5*sin(t*1.4544);             // 432 Hz -> 4.32 s
    float f=field(uv*1.25,t);

    // Corazón: anillo de vidrio incandescente
    float d=length(uv*vec2(1.,1.08));
    float core=exp(-3.1*abs(d-(.42+.05*pulse+.08*E)))*(1.1+.6*pulse);
    float halo=exp(-1.55*d)*.55;

    // Venas de plasma
    float veins=smoothstep(.16,.62,f+.22*pulse);
    float fil=pow(1.-abs(f*1.9),7.)*1.35;

    // Paleta canónica
    vec3 red=vec3(1.,.027,.227);
    vec3 gold=vec3(.831,.686,.216);
    vec3 cyan=vec3(.302,.910,.878);

    vec3 c=vec3(0.);
    c+=red*(core*0.42+halo*0.30);
    c+=red*veins*.055;
    c+=gold*fil*.035*(.4+.6*pulse);
    c+=cyan*pow(max(0.,f),3.)*.030;
    c+=red*E*.07;

    // Dispersion cromatica: el vidrio parte la luz en los bordes
    float ca=length(puv)*.0055;
    c.r+=core*ca*10.; c.b+=halo*ca*7.;

    // Grano termico + vineta profunda
    c+=(fract(sin(dot(gl_FragCoord.xy,vec2(12.99,78.23)))*43758.55)-.5)*.014;
    c*=1.-.80*pow(clamp(length(puv)*.60,0.,1.),1.5);

    c=c/(c+1.55);                                 // tonemap
    c=pow(max(c,0.),vec3(.4545));                 // gamma
    c*=0.88;
    float a=clamp(max(max(c.r,c.g),c.b)*1.15,0.,.92);
    O=vec4(c,a);
  }`;

  function sh(type, src) {
    var s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) { console.warn(gl.getShaderInfoLog(s)); return null; }
    return s;
  }
  var vs = sh(gl.VERTEX_SHADER, VERT), fs = sh(gl.FRAGMENT_SHADER, FRAG);
  if (!vs || !fs) { document.documentElement.classList.add('no-webgl'); return; }
  var prog = gl.createProgram();
  gl.attachShader(prog, vs); gl.attachShader(prog, fs); gl.linkProgram(prog); gl.useProgram(prog);

  var buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  var loc = gl.getAttribLocation(prog, 'p');
  gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

  var uR = gl.getUniformLocation(prog, 'R'), uT = gl.getUniformLocation(prog, 'T'),
      uM = gl.getUniformLocation(prog, 'M'), uE = gl.getUniformLocation(prog, 'E');

  // Resolución adaptativa: nunca más de 1.5x ni más de ~2.2 Mpx
  var dpr = 1;
  function resize() {
    var w = canvas.clientWidth || innerWidth, h = canvas.clientHeight || innerHeight;
    dpr = Math.min(devicePixelRatio || 1, 1.25) * 0.7;
    var px = w * h * dpr * dpr;
    if (px > 1100000) dpr *= Math.sqrt(1100000 / px);
    canvas.width = Math.max(1, Math.round(w * dpr));
    canvas.height = Math.max(1, Math.round(h * dpr));
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.uniform2f(uR, canvas.width, canvas.height);
  }
  addEventListener('resize', resize, { passive: true }); resize();

  var mx = 0, my = 0, tx = 0, ty = 0, energy = 0, tEnergy = 0;
  addEventListener('pointermove', function (e) {
    tx = (e.clientX / innerWidth) * 2 - 1;
    ty = 1 - (e.clientY / innerHeight) * 2;
    tEnergy = 1;
  }, { passive: true });
  addEventListener('pointerdown', function () { tEnergy = 2.2; }, { passive: true });

  // La máquina duerme si no se la mira
  var visible = true, running = true;
  document.addEventListener('visibilitychange', function () { visible = !document.hidden; if (visible) last = performance.now(); });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (es) { running = es[0].isIntersecting; if (running) last = performance.now(); }, { threshold: 0 }).observe(canvas);
  }

  var clock = 0, last = performance.now();
  function frame(now) {
    requestAnimationFrame(frame);
    if (!visible || !running) return;
    var dt = Math.min((now - last) / 1000, .05); last = now;
    clock += reduce ? dt * .12 : dt;
    mx += (tx - mx) * .045; my += (ty - my) * .045;
    tEnergy *= .965; energy += (tEnergy - energy) * .07;
    gl.uniform1f(uT, clock); gl.uniform2f(uM, mx, my); gl.uniform1f(uE, Math.min(energy, 1.4));
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  }
  requestAnimationFrame(frame);

  // Pérdida de contexto: no dejamos un lienzo negro
  canvas.addEventListener('webglcontextlost', function (e) { e.preventDefault(); running = false; document.documentElement.classList.add('no-webgl'); });
})();
