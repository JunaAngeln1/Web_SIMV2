# `src/components/ui/` — Primitivas visuales

Componentes sin contenido de negocio. Se reutilizan en todas las secciones.

## Componentes implementados

| Archivo              | Proposito                                                                  | Referencia        |
| -------------------- | -------------------------------------------------------------------------- | ----------------- |
| `Button.tsx`         | Boton primario / secundario / terciario / icono, con estados hover y focus | Guia de diseno §5 |
| `Card.tsx`           | Superficie base de tarjeta (fondo, borde, radio, sombra jerarquica)        | Guia de diseno §5 |
| `SectionHeading.tsx` | Titulo y subtitulo de seccion, con alineacion consistente                  | Guia de diseno §4 |
| `IconBadge.tsx`      | Circulo o cuadro redondeado con icono, para beneficios e indicadores       | Guia de diseno §5 |
| `NewsCard.tsx`       | Tarjeta de noticia con imagen, categoria, titulo y fecha                   | Nueva seccion     |
| `PageHero.tsx`       | Encabezado de pagina con titulo y subtitulo                                | Nueva seccion     |
| `PawPattern.tsx`     | Patron decorativo de huellas de mascota                                    | Nueva seccion     |
| `PromoModal.tsx`     | Modal de promocion o popup de entrada                                      | Nueva seccion     |
| `SectionWave.tsx`    | Separador decorativo de onda entre secciones                               | Nueva seccion     |

## Especificaciones clave (según Guía de Diseño §5)

- Boton estandar: 46–52 px de alto, minimo 44 px de area tactil en movil,
  padding horizontal 20–26 px, peso 600, tamano 14–16 px, transicion 180–240 ms.
- Primario: verde corporativo `#659D0D`, texto blanco, radio pildora (999px).
- Secundario: blanco, borde azul petróleo `#054564`, texto azul petróleo.
- Terciario: texto azul con flecha o icono.
- Foco de teclado **visible** y nunca eliminado.
- Iconografia **linear y coherente**: solo `lucide-react`. No mezclar emojis,
  iconos 3D y lineales. Tamano 18–24 px en botones, 28–36 px en beneficios.
- Verde para beneficios y acciones positivas; azul para información, contacto y confianza.
- Huellas de mascotas como decoración secundaria, sin competir con el contenido.
