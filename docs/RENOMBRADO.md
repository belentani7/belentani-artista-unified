# Plan de renombrado de repositorios

## La regla

`familia-obra-rol`, todo en **minúsculas y kebab-case**, sin acentos, sin frases,
sin nombres autogenerados. Familias: `belentani-` (artista), `duck-` (estudio),
`edu-` (educación), `lab-` (experimentos).

## Cambios propuestos

| Ahora | Propuesto | Motivo |
|---|---|---|
| `belentani-artista-unified` | `belentani-web` | Es el sitio principal, no un "unificado" |
| `belentani-judas-web` | `belentani-judas` | La obra, sin sufijo técnico |
| `BELENTANI-JUDAS-ERA-FULLSTACK` | `belentani-judas-era` | Mayúsculas y "fullstack" no aportan |
| `Duck-Omega` | `duck-omega` | Coherencia de familia |
| `Belentanislide` | `belentani-slide` | Legibilidad |
| `WILLIAMSCHOOL` | `edu-william-school` | Familia + legibilidad |
| `Crear-un-Prompt-para-Rellenar-Vac-os-en-el-Plan` | `lead-engine` | Nombre autogenerado, ilegible |
| `aPlan-de-Adquisici-n-de-Informaci-n-y-Ejecuci-n-Automatizada` | *(archivar)* | Duplica `superpowers-plan` |
| `Construye-Belentani_-Coder-Local-Independiente-de-API-y-IA` | `belentani-coder` | Igual |

## AVISO IMPORTANTE antes de renombrar

GitHub redirige la **URL del repo**, pero **GitHub Pages no**: al renombrar,
`belentani7.github.io/viejo-nombre/` deja de existir y pasa a ser
`belentani7.github.io/nuevo-nombre/`. Eso rompe:

- los enlaces de `UNIVERSO-ARTISTICO.md`
- cualquier enlace compartido en redes, bio de Spotify, etc.
- los `CNAME` si el dominio apunta al repo

Por eso: **renombra primero los repos sin tráfico** y deja para el final los que
tengan enlaces publicados. Para `belentani-artista-unified`, si `belentani.es` ya
apunta ahí por CNAME, el dominio no se rompe — sólo la URL `.github.io`.

## Comandos

```bash
gh auth login                     # una vez
gh repo rename belentani-web      --repo belentani7/belentani-artista-unified
gh repo rename belentani-judas    --repo belentani7/belentani-judas-web
gh repo rename belentani-judas-era --repo belentani7/BELENTANI-JUDAS-ERA-FULLSTACK
gh repo rename duck-omega         --repo belentani7/Duck-Omega
gh repo rename belentani-slide    --repo belentani7/Belentanislide
```

Después, actualiza los enlaces:

```bash
grep -rl "belentani-artista-unified" . | xargs sed -i 's#belentani-artista-unified#belentani-web#g'
```
