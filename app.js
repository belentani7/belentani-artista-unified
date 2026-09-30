/* ============================================================
   BELENTANI — máquina viva. Lógica de página. Sin dependencias.
   ============================================================ */
(function () {
  'use strict';
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]; }); };

  /* ---------- 1. ARCHIVO VISUAL ---------- */
  var PIECES = [{"s": "omega", "t": "BELENTANI / OMEGA", "k": "Origen · Portada", "h": "belentani7.github.io/index.html", "q": "data:image/webp;base64,UklGRjQAAABXRUJQVlA4ICgAAACwAgCdASoYAA8APxFysFAsJqSisAgBgCIJZwAAeyAA/vBVj04jgAAA"}, {"s": "ecosistema", "t": "ECOSISTEMA", "k": "Mapa · Universo", "h": "Belentani/ecosistema.html", "q": "data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAABwAwCdASoYAA8APxFysFAsJqSisAgBgCIJaQAAXKz8ULb+GoAA/uoxspQ1KcymTzGIhh6ZLP42oZWj7yZAE7ESK71Ndbck5AAAAA=="}, {"s": "judas-galactic", "t": "JUDAS / GALACTIC", "k": "Experiencia · Visual", "h": "judas-experience-galactic/index.html", "q": "data:image/webp;base64,UklGRloAAABXRUJQVlA4IE4AAACQAwCdASoYAA8APxFwsFAsJiSisAgBgCIJbAAAYf+tqBDBEodQAP7sGkmI84rEjftzoR7NEPxY5n4r1DMCX8OsesJZ7G2d1BKOnSmwAAA="}, {"s": "judas-static", "t": "JUDAS / STATIC", "k": "Storyboard · Archivo", "h": "judas-omega-static/index.html", "q": "data:image/webp;base64,UklGRnoAAABXRUJQVlA4IG4AAADwAwCdASoYAA8APxFysFAsJqSisAgBgCIJbACdMoACrfD7ieQazTuAAP7NdkogMhRA1LNG2r2QFrNXyiKg/PFKMZPA/wxvTp1UcvGdhTR8STn399ulBhf2Km4MWGp7jUo03V5eIKzsoxnp1uUAAA=="}, {"s": "judas-experience", "t": "THE JUDAS EXPERIENCE", "k": "Música · Interfaz", "h": "the-judas-experience/web/index.html", "q": "data:image/webp;base64,UklGRlgAAABXRUJQVlA4IEwAAABwAwCdASoYAA8APxF8tFGsKCUisAgBgCIJbAAAW+vbXIT5mfAA/uvg+hrQio68YZf1wucZxpIJz20pwBIclj7ao3SH+KcTu6tRXgAA"}, {"s": "omega-immersive", "t": "OMEGA IMMERSIVE", "k": "Magic · Inmersivo", "h": "belentani_Omega/magic/immersive.html", "q": "data:image/webp;base64,UklGRmYAAABXRUJQVlA4IFoAAADwAwCdASoYAA8APxFysVCsJqSisAgBgCIJbACdMoR4GCAWX4PckvcAAP7kIvW1HHVX9bTb/QOi3jtquF5rpNKy6n/TZ04jLoIk753vaDFit3hmEmmHgI6AAAA="}, {"s": "shader-signal", "t": "SHADER / SIGNAL", "k": "Magic · Visual", "h": "Belentani/magic/shader.html", "q": "data:image/webp;base64,UklGRnAAAABXRUJQVlA4IGQAAAAQBACdASoYAA8APxF0sFCsJqSisAgBgCIJbACdMoACtZmC1UX7WUicAAD+5CL13snTyOrcoao/2O5ZYFNfVmMvam/NlSfapcyvZd5S236Fe+QbuvyLnOcOvd4ZhJ054wkSAAAA"}, {"s": "sfx-lab", "t": "SFX / LAB", "k": "Magic · Sonido", "h": "Belentani/magic/sfx.html", "q": "data:image/webp;base64,UklGRjYAAABXRUJQVlA4ICoAAADwAgCdASoYAA8APxFysFAsJqSisAgBgCIJZwDLLC0kAAD+8DrLMFnAAAA="}, {"s": "duck-omega", "t": "DUCK OMEGA", "k": "Duck · Portal", "h": "Duck-Omega/index.html", "q": "data:image/webp;base64,UklGRloAAABXRUJQVlA4IE4AAADQAwCdASoYAA8APxFysFAsJqSisAgBgCIJYwAAXjDC9ouWfFesgAAA/uowqCVqE4fcLWHdH5LN83si99ycPARuzROT6Jz7B9gGQlcgAAA="}, {"s": "duck-html", "t": "DUCK HTML", "k": "Experimento · HTML", "h": "DuckHTML/index.html", "q": "data:image/webp;base64,UklGRlgAAABXRUJQVlA4IEwAAAAQAwCdASoYAA8APxF2sVCsJySisAgBgCIJaQAAW+ll18AA/vDQyKRzasW6OL3L3GEl5at2SOXm6M86+yCHwvgzy3750/VF3lSuAAAA"}, {"s": "heyduck", "t": "HEYDUCK", "k": "Hub · Ecosistema", "h": "heyduck/index.html", "q": "data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAABQAwCdASoYAA8APxFysVAsJqSisAgBgCIJZwAAW+s26GmfAAD+7C4mmSVVe/dilZecx2m9jPAAAA=="}, {"s": "duck-integrado", "t": "DUCK INTEGRADO", "k": "Archive · Integrado", "h": "belentani-the-judas-experience-archive/drive-materials/DUCK-INTEGRADO.html", "q": "data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAACQAwCdASoYAA8APxFysVAsJqSisAgBgCIJZwDE2CHftP/1EqsAAP7pVi/ll4DLM7oMQt5gbyb/KkumAAA="}];

  var gal = $('#gal');
  if (gal) {
    gal.innerHTML = PIECES.map(function (p, i) {
      return '<li class="gal__i">' +
        '<button class="gal__b" type="button" data-i="' + i + '">' +
          '<img src="assets/thumbs/' + p.s + '.webp" srcset="assets/thumbs/' + p.s + '@sm.webp 600w, assets/thumbs/' + p.s + '.webp 1200w" sizes="(max-width:760px) 92vw,(max-width:1080px) 46vw,31vw"' +
          ' width="1200" height="750" loading="' + (i < 3 ? 'eager' : 'lazy') + '" decoding="async" alt="Captura de la pieza ' + esc(p.t) + '"' +
          ' style="background:url(' + p.q + ') center/cover">' +
          '<span class="gal__m"><h3>' + esc(p.t) + '</h3><small>' + esc(p.k) + '</small></span>' +
        '</button>' +
        '<a class="gal__x" href="archive/' + p.h + '" target="_blank" rel="noopener">Abrir original ↗</a>' +
      '</li>';
    }).join('');
    var sp = $('#stat-pieces'); if (sp) sp.textContent = String(PIECES.length).padStart(2, '0');
  }

  /* ---------- 2. LIGHTBOX ---------- */
  var lb = $('#lb'), lbImg = $('#lb-img'), lbCap = $('#lb-cap');
  if (lb && gal) {
    var open = function (i) {
      var p = PIECES[i]; if (!p) return;
      lbImg.src = 'assets/thumbs/' + p.s + '.webp';
      lbImg.alt = 'Pieza ' + p.t;
      lbCap.textContent = p.t + ' — ' + p.k;
      if (typeof lb.showModal === 'function') lb.showModal(); else lb.setAttribute('open', '');
    };
    gal.addEventListener('click', function (e) {
      var b = e.target.closest('.gal__b'); if (b) open(+b.dataset.i);
    });
    $('#lb-x').addEventListener('click', function () { lb.close(); });
    lb.addEventListener('click', function (e) { if (e.target === lb) lb.close(); });
  }

  /* ---------- 3. TERMINAL VIVO ---------- */
  var out = $('#term-out'), form = $('#term-form'), cmd = $('#term-cmd');
  if (out) {
    var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    var queue = [], typing = false;

    function push(html) { queue.push(html); if (!typing) drain(); }
    function drain() {
      if (!queue.length) { typing = false; return; }
      typing = true;
      var line = queue.shift(), el = document.createElement('div');
      out.appendChild(el);
      var plain = line.replace(/<[^>]+>/g, '');
      if (reduce || plain.length > 160) { el.innerHTML = line; out.scrollTop = out.scrollHeight; setTimeout(drain, 40); return; }
      var i = 0;
      (function tick() {
        i += 2;
        el.innerHTML = line.slice(0, i) + (i < line.length ? '<b>▌</b>' : '');
        out.scrollTop = out.scrollHeight;
        if (i < line.length) setTimeout(tick, 9); else setTimeout(drain, 90);
      })();
    }

    var BOOT = [
      '<span class="dim">belentani@omega · núcleo v3.0 · 432 Hz</span>',
      'Inicializando <b>PROTOCOLO_OMNIPRESENCIA</b>…',
      '  <u>PEDRO</u> · la roca .......... <i>OK</i>',
      '  <u>MARCOS</u> · el cronista ..... <i>OK</i>',
      '  <u>SANTOS</u> · la antena ....... <i>OK</i>',
      '  <u>BELENTANI</u> · el artefacto . <i>OK</i>',
      '  <u>THE HUMAN</u> · la interfaz .. <b>CONECTADA</b>',
      '<span class="dim">Los 5 elementos responden. La máquina está viva.</span>',
      'Escribe <b>ayuda</b> para ver qué sabe hacer.'
    ];

    var CMDS = {
      ayuda: ['Comandos: <b>quien</b> · <b>protocolo</b> · <b>musica</b> · <b>archivo</b> · <b>contacto</b> · <b>432</b> · <b>limpiar</b>'],
      quien: [
        '<b>BELENTANI</b> — proyecto artístico de Pedro Belentani, Barcelona.',
        'Música, narrativa y código tratados como un mismo material.',
        'Brasileño en Barcelona. Cuatro idiomas. Una obra que no para de mutar.'
      ],
      protocolo: [
        'El <b>Protocolo de los 5 Elementos</b> es la arquitectura de la obra:',
        '  <i>PEDRO</i> sostiene · <i>MARCOS</i> recuerda · <i>SANTOS</i> escucha',
        '  <i>BELENTANI</i> es la obra · <u>THE HUMAN</u> eres tú, mirando.'
      ],
      musica: ['Single <b>JUDAS</b> — dark pop. Producción: <i>Duck Prod</i>.', 'Baja a la sección <b>Música</b> y dale al play.'],
      archivo: ['<b>' + PIECES.length + '</b> piezas visuales preservadas, con sus originales intactos.', 'Están abajo, en <b>Archivo visual</b>.'],
      contacto: ['<b>hola@belentani.es</b> — dirección de arte, web inmersiva, sistemas de IA creativos.'],
      '432': ['La máquina late a <i>432 Hz</i>. Un ciclo cada <b>4,32 s</b>. Todo el sitio respira ahí.'],
      judas: ['<b>JUDAS</b>: la traición como acto de amor. El núcleo narrativo de la era Omega.'],
      limpiar: null
    };

    function run(raw) {
      var k = raw.trim().toLowerCase();
      push('<span class="dim">❯ ' + esc(raw) + '</span>');
      if (!k) return;
      if (k === 'limpiar' || k === 'clear') { queue.length = 0; out.innerHTML = ''; typing = false; return; }
      var r = CMDS[k];
      if (r) r.forEach(push);
      else push('<b>?</b> «' + esc(raw) + '» no está en el núcleo. Prueba <b>ayuda</b>.');
    }

    form.addEventListener('submit', function (e) { e.preventDefault(); run(cmd.value); cmd.value = ''; });

    // El arranque espera a que la terminal se vea: no se habla al vacío.
    var booted = false;
    var boot = function () { if (booted) return; booted = true; BOOT.forEach(push); };
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (es) { if (es[0].isIntersecting) { boot(); io.disconnect(); } }, { threshold: .25 });
      io.observe(out);
    } else boot();
  }

  /* ---------- 4. REVELADO ---------- */
  var rev = document.querySelectorAll('.ng-reveal');
  if ('IntersectionObserver' in window && rev.length) {
    var ro = new IntersectionObserver(function (es) {
      es.forEach(function (e, n) {
        if (!e.isIntersecting) return;
        setTimeout(function () { e.target.classList.add('is-in'); }, n * 70);
        ro.unobserve(e.target);
      });
    }, { threshold: .12, rootMargin: '0px 0px -8% 0px' });
    rev.forEach(function (el) { ro.observe(el); });
  } else rev.forEach(function (el) { el.classList.add('is-in'); });

  /* ---------- 5. SPOTIFY BAJO DEMANDA (sin cookies previas) ---------- */
  var spBtn = $('#sp-load');
  if (spBtn) spBtn.addEventListener('click', function () {
    var f = document.createElement('iframe');
    f.src = 'https://open.spotify.com/embed/artist/2bU5Ir70YHHuUnq2f3WCYl?utm_source=generator&theme=0';
    f.title = 'Reproductor de Spotify — Belentani';
    f.loading = 'lazy';
    f.allow = 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture';
    f.referrerPolicy = 'strict-origin-when-cross-origin';
    var w = $('#sp-facade'); w.innerHTML = ''; w.appendChild(f);
  });

  /* ---------- 6. VARIOS ---------- */
  var y = $('#year'); if (y) y.textContent = new Date().getFullYear();
})();
