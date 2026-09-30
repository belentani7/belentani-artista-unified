# NEOGLASS // MÁQUINA VIVA — sistema de diseño

Un único concepto para **todas** las webs del universo Belentani:
vidrio rojo neón grueso, máquina viva, terminal vivo.

## Cómo aplicarlo a otro repo

1. Copia `assets/neoglass.css` al repo destino.
2. Enlázalo **antes** de la hoja propia del proyecto:

```html
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;800;900&family=Share+Tech+Mono&display=swap">
<link rel="stylesheet" href="assets/neoglass.css">
<link rel="stylesheet" href="style.css">
```

3. Añade la atmósfera justo tras `<body>`:

```html
<div class="ng-grain" aria-hidden="true"></div>
<div class="ng-scan" aria-hidden="true"></div>
```

Eso ya te deja el repo dentro del sistema. Todo lo demás son piezas sueltas.

## Piezas

| Clase | Qué hace |
|---|---|
| `.ng-glass` | Vidrio grueso: bisel interior, dispersión cromática, halo rojo |
| `.ng-glass--slab` | Más grueso (paneles grandes) |
| `.ng-glass--thin` | Más fino (chips, listas, barras) |
| `.ng-btn` | Botón de vidrio. Variantes `--solid` y `--ghost` |
| `.ng-neon` | Texto neón blanco. Variantes `--red`, `--gold`, `--cyan` |
| `.ng-flicker` | Parpadeo de tubo, sutil, al ritmo de 432 Hz |
| `.ng-led` | Piloto que respira. Variantes `--gold`, `--cyan` |
| `.ng-title` / `.ng-eyebrow` | Titular Orbitron / antetítulo mono |
| `.ng-wrap` / `.ng-section` / `.ng-rule` | Contenedor, sección y regla numerada |
| `.ng-reveal` | Aparece al hacer scroll (añade `.is-in` con un IntersectionObserver) |
| `.ng-grain` / `.ng-scan` | Grano de película y barrido de monitor |
| `.ng-skip` | Enlace de salto al contenido (accesibilidad) |

## Reglas del concepto

1. **El fondo nunca gana al texto.** Si añades un fondo animado, pon encima un velo
   (`body::before` con degradado a `--ng-void`). El shader es atmósfera, no protagonista.
2. **El rojo es acento, no relleno.** Superficie negra, filo rojo. Si todo brilla, nada brilla.
3. **Dorado y cyan, a cuentagotas.** Marcan jerarquía (dorado = valor, cyan = señal).
4. **Todo late a 432 Hz.** `--ng-pulse: 4.32s`. Usa esa variable, no números sueltos.
5. **El vidrio tiene canto.** Sin bisel interior no es vidrio, es una caja translúcida.
6. **Movimiento con freno.** Todo bajo `prefers-reduced-motion`.

## Tokens

Todos en `:root` con prefijo `--ng-`. Sobrescribe en el repo destino si una pieza
necesita otro grosor o radio; no edites `neoglass.css` por proyecto — así se mantiene
igual en todos.
