# `src/components/ui/` — Primitivas visuales

Componentes sin contenido de negocio. Se reutilizan en todas las secciones.

## Componentes previstos

| Archivo              | Proposito                                                                  | Referencia        |
| -------------------- | -------------------------------------------------------------------------- | ----------------- |
| `Button.tsx`         | Boton primario / secundario / terciario / icono, con estados hover y focus | `sim-diseno` §7.1 |
| `Card.tsx`           | Superficie base de tarjeta (fondo, borde, radio, sombra jerarquica)        | `sim-diseno` §7.2 |
| `SectionHeading.tsx` | Titulo y subtitulo de seccion, con alineacion consistente                  | `sim-diseno` §3   |
| `IconBadge.tsx`      | Circulo o cuadro redondeado con icono, para beneficios e indicadores       | `sim-diseno` §7.4 |

## Especificaciones clave

- Boton estandar: 46–52 px de alto, minimo 44 px de area tactil en movil,
  padding horizontal 20–26 px, peso 600, tamano 14–16 px, transicion 180–240 ms.
- Primario: verde `#7AB929`, texto blanco, radio pildora.
- Secundario: transparente o azul claro, borde blanco/azul.
- Terciario: texto azul con flecha o icono.
- Foco de teclado **visible** y nunca eliminado.
- Iconografia **linear y coherente**: solo `lucide-react`. No mezclar emojis,
  iconos 3D y lineales. Tamano 18–24 px en botones, 28–36 px en beneficios.
