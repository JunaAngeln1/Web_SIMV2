# `src/components/ui/` — Primitivas visuales

Componentes sin contenido de negocio. Se reutilizan en todas las secciones.

## Componentes implementados

| Archivo              | Proposito                                                                  |
| -------------------- | -------------------------------------------------------------------------- |
| `Button.tsx`         | Boton primario / secundario / terciario / ghost; renderiza `<button>` o `<a>` si recibe `href` |
| `Card.tsx`           | Superficie base de tarjeta (fondo, borde, radio, sombra); incluye `group` para hover de hijos |
| `SectionHeading.tsx` | Titulo y subtitulo de seccion, con alineacion consistente                  |
| `PlanCard.tsx`       | Tarjeta de plan de dos columnas (foto + informacion) usada en el inicio    |
| `NewsCard.tsx`       | Tarjeta de noticia con imagen, categoria, titulo, fecha y enlace "Leer más" |
| `PageHero.tsx`       | Encabezado de pagina interna con titulo/subtitulo (sin decoracion de fondo)|
| `PromoModal.tsx`     | Modal de promocion de entrada (una vez por dia, trampa de foco, Escape)    |

## Especificaciones clave (según Guía de Diseño §5)

- Boton estandar: 46–52 px de alto, minimo 44 px de area tactil en movil,
  padding horizontal 20–26 px, peso 600, tamano 14–16 px, transicion 180–240 ms.
- Primario: `verde-interactivo` `#4F7D0A` (hover `#3F6408`), texto blanco, radio
  pildora (999px). Se usa este verde oscuro porque el de marca `#659D0D` con
  blanco da 3.3:1 y no cumple WCAG AA.
- Secundario: blanco, borde azul petróleo `#054564`, texto azul petróleo.
- Terciario / ghost: texto azul o gris, sin fondo.
- `Button` es polimorfico: con `href` renderiza un `<a>` (navegacion), sin `href`
  renderiza `<button type="button">`. La base incluye `group` para que los iconos
  hijos animen con `group-hover`.
- Foco de teclado **visible** y nunca eliminado.
- Iconografia **lineal y coherente**: solo `lucide-react`. No mezclar emojis,
  iconos 3D y lineales. Tamano 18–24 px en botones, 28–36 px en beneficios.
- Verde para beneficios y acciones positivas; azul para información, contacto y confianza.
- Sin separadores de onda (`SectionWave`) ni fondos de huellas (`PawPattern`):
  ambos componentes se retiraron; las secciones se separan por fondo y espaciado.
