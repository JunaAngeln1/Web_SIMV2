# Estructura del proyecto · Web S.I.M.

Indice de la organizacion del codigo. Cada carpeta lleva su propio `README.md`
con el detalle de su contenido; esta es la vista general.

## Raiz

| Ruta             | Contenido                                                        |
| ---------------- | ---------------------------------------------------------------- |
| `src/`           | Codigo fuente de la aplicacion                                   |
| `public/assets/` | Assets oficiales de S.I.M. (logo, gato, iconos, fotos)           |
| `Agentes/`       | Skills del sistema S.I.M. (especificacion, arquitectura, diseno) |

## `src/`

| Ruta                       | Que va ahi                                                                              | Skill que la gobierna   |
| -------------------------- | --------------------------------------------------------------------------------------- | ----------------------- |
| `src/styles/`              | `tokens.css` (fuente de verdad del color, tipografia, radios y sombras) y `globals.css` | `sim-diseno` §1–3       |
| `src/data/`                | Contenido editable: `site`, `benefits`, `plans`, `allies`, `news`, `indicators`         | `sim-arquitectura` §3   |
| `src/hooks/`               | `useOrbitInteraction`, `useCountUp`, `useReducedMotion`                                 | `sim-diseno` §5–6       |
| `src/lib/`                 | Utilidades puras: formateo, validacion (zod), ayudas de rAF                             | `sim-especificacion` §4 |
| `src/components/layout/`   | `Header`, `Footer`, `Container`                                                         | `sim-arquitectura` §2   |
| `src/components/hero/`     | `Hero`, `BenefitsOrbit`                                                                 | `sim-diseno` §4–6       |
| `src/components/ui/`       | `Button`, `Card`, `SectionHeading`, `IconBadge`                                         | `sim-diseno` §7         |
| `src/components/sections/` | `PlansSummary`, `About`, `Indicators`, `Allies`, `News`, `FinalCta`                     | `sim-arquitectura` §3   |
| `src/pages/`               | `Inicio`, `Planes`, `Nosotros`, `Noticias`, `Contacto`                                  | `sim-arquitectura` §1   |

## `public/assets/`

| Ruta                         | Que va ahi                                   |
| ---------------------------- | -------------------------------------------- |
| `public/assets/`             | Logo oficial, gato protagonista, favicon     |
| `public/assets/icons/`       | 4 iconos SVG de los beneficios de la ruleta  |
| `public/assets/images/`      | Fotografias autorizadas de Nosotros y Planes |
| `public/assets/images/news/` | Imagenes 16:9 de las noticias                |

## Orden de implementacion (Fase 1 en adelante)

1. **Andamiaje** — _(hecho, Fase 0)_ estructura, dependencias, tokens de arquitectura.
2. **Sistema visual** — `src/styles/tokens.css`, `src/styles/globals.css`, `src/components/ui/`.
3. **Hero** — `src/components/hero/` y `src/components/layout/`, validado contra la referencia.
4. **Resto de Inicio** — `src/components/sections/` en orden: Planes → Nosotros →
   Indicadores → Aliados → Noticias → CTA final.
5. **Paginas internas** — `src/pages/Planes`, `Nosotros`, `Noticias`, `Contacto`.
6. **Formulario** — validacion con `zod` y envio a `VITE_FORM_ENDPOINT`.
7. **SEO basico** — metadatos por ruta, `sitemap.xml`, `robots.txt`, Open Graph.
8. **QA** — 360 / 390 / 768 / 1024 / 1440 px, teclado, reduced-motion, consola.

## Reglas permanentes

- **No inventar contenido comercial.** Precios, coberturas, contactos, exclusiones
  y cifras requieren aprobacion de SIM. Si falta el dato, se marca como pendiente
  y se avisa; nunca se sustituye en silencio.
- **No sustituir assets oficiales.** Si falta un archivo, se deja la ruta
  identificada y se solicita a SIM.
- **Solo `transform` y `opacity`** en animaciones. Respetar `prefers-reduced-motion`.
- **Foco de teclado visible** en todo control. Toda imagen informativa lleva
  alt util; la decorativa, alt vacio.
- El color, la tipografia y el espaciado salen siempre de los tokens, nunca de
  valores literales sueltos en componentes.
