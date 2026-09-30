# BELENTANI — Máquina viva

Sitio principal del proyecto artístico de Pedro Belentani. Música, narrativa y código
tratados como un mismo material.

En línea: <https://belentani.es> · espejo: <https://belentani7.github.io/belentani-artista-unified/>

## Qué es

No es un índice de enlaces. Es el sitio: una portada con núcleo WebGL, un terminal que
arranca solo, el Protocolo de los 5 Elementos, la música y un archivo visual con las
piezas reales del universo.

## Concepto visual

**Neoglassmorfismo — vidrio rojo neón grueso, máquina viva, terminal vivo.**

Vive en `assets/neoglass.css` y es **compartido**: se copia tal cual en cualquier otro
repo del universo para que todas las webs hablen el mismo idioma. Ver `docs/NEOGLASS.md`.

| Elemento | Valor |
|---|---|
| Negro vacío | `#05030a` |
| Rojo neón | `#ff073a` |
| Dorado Zion | `#d4af37` |
| Cyan señal | `#4de8e0` |
| Tipografías | Orbitron + Share Tech Mono |
| Latido | 432 Hz → un ciclo cada 4,32 s |

## Estructura

| Ruta | Contenido |
|---|---|
| `index.html` | El sitio |
| `style.css` | Hoja de página (depende de neoglass) |
| `assets/neoglass.css` | **Sistema de diseño compartido** |
| `js/omega-core.js` | Núcleo WebGL2 — la máquina que respira |
| `app.js` | Terminal vivo, galería, lightbox, revelados |
| `assets/thumbs/` | Capturas reales de cada pieza (WebP) |
| `archive/` | Piezas originales preservadas, intactas |
| `docs/` | Documentación del sistema |

## Decisiones técnicas

- **Cero dependencias.** Sin build, sin CDN de JS, sin framework. Se despliega copiando.
- **El WebGL se degrada solo.** Sin GPU o sin WebGL2 cae a un degradado CSS equivalente.
  Se pausa fuera de pantalla y con la pestaña oculta.
- **`prefers-reduced-motion` se respeta** en todo: grano, barrido, tecleo y núcleo.
- **Spotify bajo demanda.** El reproductor sólo se carga al pulsar: ninguna cookie de
  terceros antes del consentimiento.
- **Imágenes reales.** Las miniaturas son capturas de las piezas, no degradados falsos.
  WebP + `srcset` + placeholder borroso en línea. 12 piezas ≈ 400 KB en total.

## Licencia

Código MIT (`LICENSE`). Obra y contenido © Belentani.
