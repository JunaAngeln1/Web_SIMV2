# `public/assets/` — Assets oficiales de S.I.M.

Todo lo que se sirve directamente desde la raiz del sitio (`/assets/...`).
**Los archivos binarios de aqui son derivados optimizados**; los originales
entregados por SIM viven en `assets-original/` (versionados, pero no desplegados).

## Regla critica: nada se sustituye en silencio

Si falta un asset oficial, se deja la ruta claramente identificada y se solicita
el archivo a SIM. No se redibuja el logo con texto, no se genera un icono
parecido y no se reemplaza una foto por un marcador de posicion sin avisar.

## Inventario final de assets

| Asset                        | Ruta                                 | Tamano       | Estado                      | Procedencia                                   |
| ---------------------------- | ------------------------------------ | ------------ | --------------------------- | --------------------------------------------- |
| Logotipo oficial             | `sim-logo.svg`                       | 4.1 KB       | Derivado (limpio)           | `assets-original/Logotipo oficial.svg`        |
| Favicon                      | `favicon.svg`                        | 4.1 KB       | Derivado                    | `assets-original/Logotipo oficial.svg`        |
| Favicon 32x32                | `favicon-32.png`                     | 0.9 KB       | Derivado                    | `assets-original/Logotipo oficial.svg`        |
| Apple touch icon 180x180     | `apple-touch-icon.png`               | 3.4 KB       | Derivado                    | `assets-original/Logotipo oficial.svg`        |
| Gato protagonista            | `sim-hero-cat.webp`                  | 190.2 KB     | Derivado (WebP, alpha)      | `assets-original/sim-hero-cat.png`            |
| Icono: aliados               | `icons/allies.svg`                   | 5.4 KB       | Derivado (limpio)           | `assets-original/icons/allies.svg`            |
| Icono: atencion veterinaria  | `icons/veterinary-care.svg`          | 0.9 KB       | Derivado (limpio)           | `assets-original/icons/veterinary-care.svg`   |
| Icono: planes                | `icons/pet-plans.svg`                | 0.7 KB       | Derivado (limpio)           | `assets-original/icons/pet-plans.svg`         |
| Icono: acompanamiento        | `icons/support.svg`                  | 1.4 KB       | Derivado (limpio)           | `assets-original/icons/support.svg`           |
| Foto Nosotros (equipo)       | `images/about-team.webp`             | 16.3 KB      | Derivado (frame 0 estatico) | `assets-original/about-veterinary-team.webp`  |
| Foto Nosotros (mascota)      | `images/about-pet.webp`              | 31.9 KB      | Derivado (frame 0 estatico) | `assets-original/about-veterinary-team2.webp` |
| Imagen noticia: prevencion   | `images/news/noticia-prevencion.svg` | 5.5 KB       | Placeholder SVG             | Generado por script                           |
| Imagen noticia: cuidado      | `images/news/noticia-cuidado.svg`    | 5.5 KB       | Placeholder SVG             | Generado por script                           |
| Imagen noticia: bienestar    | `images/news/noticia-bienestar.svg`  | 5.5 KB       | Placeholder SVG             | Generado por script                           |
| **Total assets desplegados** |                                      | **281.3 KB** |                             |                                               |

Los originales pesaban **5,091 KB**; el sitio desplegado usa **281.3 KB** (-94.5%).

## Datos de marca resueltos de los assets oficiales

| Token               | Valor     | Fuente                       |
| ------------------- | --------- | ---------------------------- |
| `--color-verde-sim` | `#77c100` | El logo oficial (cruz verde) |

## Pendiente de SIM

| Falta                                       | Por que lo necesita el sitio                        |
| ------------------------------------------- | --------------------------------------------------- |
| **Lockup con wordmark** "S.I.M."            | El header necesita el nombre junto al simbolo       |
| **Tarifas aprobadas**                       | La calculadora de ahorro no es publicable sin ellas |
| **Telefonos, correos, WhatsApp, redes**     | Footer y seccion Contacto                           |
| **Textos legales** (T&C, privacidad, datos) | Footer y aviso del formulario                       |
| **Enlace oficial de afiliacion**            | CTA "Afiliar a mi mascota"                          |
| **Fotos de planes** (si hacen falta)        | Seccion Planes                                      |

## Scripts de pipeline

| Script                                   | Comando                       | Que hace                                                                                    |
| ---------------------------------------- | ----------------------------- | ------------------------------------------------------------------------------------------- |
| `scripts/optimize-assets.mjs`            | `npm run assets:optimize`     | Limpia SVG, convierte el gato a WebP, extrae frame 0 de las fotos animadas, deriva favicons |
| `scripts/generate-news-placeholders.mjs` | `npm run assets:placeholders` | Genera los 3 placeholders 16:9 de noticias                                                  |

Ambos son idempotentes y leen de `assets-original/` (originales) hacia `public/assets/` (desplegable).
