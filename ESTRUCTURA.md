# Estructura del proyecto · Web S.I.M.

Indice de la organizacion del codigo. Cada carpeta lleva su propio `README.md`
con el detalle de su contenido; esta es la vista general.

## Raiz

| Ruta             | Contenido                                                        |
| ---------------- | ---------------------------------------------------------------- |
| `src/`           | Codigo fuente de la aplicacion                                   |
| `public/assets/` | Assets oficiales de S.I.M. (logo, banners, iconos, fotos)        |
| `Agentes/`       | Skills del sistema S.I.M. (especificacion, arquitectura, diseno) |

## `src/`

| Ruta                       | Que va ahi                                                                              | Skill que la gobierna   |
| -------------------------- | --------------------------------------------------------------------------------------- | ----------------------- |
| `src/styles/`              | `tokens.css` (fuente de verdad del color, tipografia, radios y sombras) y `globals.css` | `sim-diseno`            |
| `src/data/`                | Contenido editable: `plans`, `news`, `promos`                                           | `sim-arquitectura`      |
| `src/hooks/`               | `useInView` (entrada escalonada con IntersectionObserver)                               | `sim-diseno`            |
| `src/lib/`                 | Utilidades puras: formateo, validacion (zod), ayudas diversas                           | `sim-especificacion`    |
| `src/components/layout/`   | `Header`, `Footer`, `Container`, `SiteLayout` (Footer global compartido en todas las rutas) | `sim-arquitectura` |
| `src/components/hero/`     | `Hero` (carrusel de banners)                                                            | `sim-diseno`            |
| `src/components/ui/`       | `Button`, `Card`, `SectionHeading`, `NewsCard`, `PageHero`, `PlanCard`, `PromoModal` | `sim-diseno` |
| `src/components/sections/` | `Benefits`, `PlansSummary`, `PetManager`, `Allies`, `WhyChooseUs`, `FAQBanner`, `FeaturedNewsCarousel` | `sim-arquitectura` |
| `src/pages/`               | `Inicio`, `Planes`, `Nosotros`, `Noticias`, `NoticiaDetalle`, `Contacto`, `Cobertura`   | `sim-arquitectura`      |

## `public/assets/`

| Ruta                         | Que va ahi                                 |
| ---------------------------- | ------------------------------------------ |
| `public/assets/`             | Logo oficial, favicons, fondos decorativos |
| `public/assets/icons/`       | 4 badges SVG oficiales de los beneficios   |
| `public/assets/images/hero-banners/` | Banners del hero (Animales, Familia) |
| `public/assets/images/plans/`| Recortes de mascota por plan               |
| `public/assets/images/about/`| Fotografias de Nosotros                    |
| `public/assets/images/news/` | Placeholders 16:9 SVG de las noticias      |
| `public/pdfs/`               | PDF oficiales de cada plan                 |
| `assets-original/`           | Material entregado por SIM (no desplegado) |
| `scripts/`                   | Pipeline de optimizacion de assets         |

## Composicion de Inicio

`Header → Hero (carrusel de banners) → Benefits → PlansSummary → PetManager →
Allies → WhyChooseUs → FAQBanner (FAQ + banner de afiliacion) → Footer`. No hay
separadores de onda ni fondos de huellas: las secciones se distinguen por su
fondo y su espaciado.

## Reglas permanentes

- **No inventar contenido comercial.** Precios, coberturas, contactos, exclusiones
  y cifras requieren aprobacion de SIM. Si falta el dato, se marca como pendiente
  (`PENDIENTE_SIM` / `data-pending`) y se avisa; nunca se sustituye en silencio.
- **No sustituir assets oficiales.** Si falta un archivo, se deja la ruta
  identificada y se solicita a SIM.
- **Solo `transform` y `opacity`** en animaciones. Respetar `prefers-reduced-motion`.
- **Foco de teclado visible** en todo control. Toda imagen informativa lleva
  alt util; la decorativa, alt vacio.
- El color, la tipografia y el espaciado salen siempre de los tokens, nunca de
  valores literales sueltos en componentes.
- **Contraste WCAG AA.** El verde de marca `#659D0D` con texto blanco da 3.3:1 y
  no cumple AA; para superficies interactivas con texto blanco se usa
  `--color-verde-interactivo` (`#4F7D0A`, hover `#3F6408`). El verde de marca se
  conserva para elementos decorativos y texto grande.
