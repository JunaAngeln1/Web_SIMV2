# `assets-original/` — Material entregado por SIM (originales)

Los archivos entregados por SIM se conservan aqui tal como llegaron.
**Nada se modifica ni se borra de esta carpeta.** Los derivados desplegables se
generan desde aqui hacia `public/assets/` con los scripts del pipeline.

## Archivos originales

| Archivo                       | Tamano     | Notas                                                                                  |
| ----------------------------- | ---------- | -------------------------------------------------------------------------------------- |
| `Logotipo oficial.svg`        | 4.5 KB     | Simbolo oficial (cruz verde con mascotas). Sin wordmark "S.I.M.". Verde `#77c100`.     |
| `sim-hero-cat.png`            | 1,528.3 KB | Gato gris/blanco, ojos azules, mirando arriba-izquierda. PNG 32bppArgb con alpha real. |
| `about-veterinary-team.webp`  | 1,070.3 KB | WebP animado, 81 frames, 800x800, con alpha. Contiene un bulldog frances.              |
| `about-veterinary-team2.webp` | 2,449.8 KB | WebP animado, 86 frames, 800x800, con alpha. Contiene un gato atigrado.                |
| `icons/allies.svg`            | 13 KB      | Badge azul con glifo blanco: apretón de manos. Metadata C2PA de ~8 KB.                 |
| `icons/veterinary-care.svg`   | 8.5 KB     | Badge azul con glifo blanco: estetoscopio. Metadata C2PA.                              |
| `icons/pet-plans.svg`         | 8.3 KB     | Badge azul con glifo blanco: huella. Metadata C2PA.                                    |
| `icons/support.svg`           | 9 KB       | Badge azul con glifo blanco: corazon con pulso. Metadata C2PA.                         |

## Datos observados al recibir

- El logo es solo el **simbolo**, no el lockup completo con "S.I.M.".
- El verde real del logo es **`#77c100`** (no `#7AB929` como sugiere la skill de diseno).
- Los iconos son badges circulares, no iconos lineales.
- Los dos WebP de "Nosotros" son animados (81 y 86 frames) y pesan 3.5 MB combinados.
- `images/iconeSIM/` era una copia exacta (SHA256 idéntico) de `icons/`; se elimina del despliegue.

## Trazabilidad del pipeline

| Original                      | Derivado                               | Proceso                           |
| ----------------------------- | -------------------------------------- | --------------------------------- |
| `Logotipo oficial.svg`        | `public/assets/sim-logo.svg`           | Metadata limpiada                 |
| `Logotipo oficial.svg`        | `public/assets/favicon.svg`            | Recortado a caja de contenido     |
| `Logotipo oficial.svg`        | `public/assets/favicon-32.png`         | Rasterizado 32x32                 |
| `Logotipo oficial.svg`        | `public/assets/apple-touch-icon.png`   | Rasterizado 180x180, fondo blanco |
| `sim-hero-cat.png`            | `public/assets/sim-hero-cat.webp`      | WebP 1400px, alpha conservada     |
| `about-veterinary-team.webp`  | `public/assets/images/about-team.webp` | Frame 0 extraído a WebP estático  |
| `about-veterinary-team2.webp` | `public/assets/images/about-pet.webp`  | Frame 0 extraído a WebP estático  |
| `icons/*.svg`                 | `public/assets/icons/*.svg`            | Metadata C2PA/Inkscape limpiada   |
