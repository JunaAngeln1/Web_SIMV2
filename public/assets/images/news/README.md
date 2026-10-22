# `public/assets/images/news/` — Imagenes de noticias

## Que va aqui

Una imagen por noticia destacada. La pagina Inicio muestra **tres** noticias y
la pagina Noticias muestra el listado completo.

## Archivos actuales (placeholders SVG)

| Archivo                  | Tema                 | Tamano | Notas                                                   |
| ------------------------ | -------------------- | ------ | ------------------------------------------------------- |
| `noticia-prevencion.svg` | Prevencion y cuidado | 5.5 KB | Placeholder con degradado azul y marca de agua del logo |
| `noticia-cuidado.svg`    | Cuidado responsable  | 5.5 KB | Placeholder con degradado azul y marca de agua del logo |
| `noticia-bienestar.svg`  | Bienestar animal     | 5.5 KB | Placeholder con degradado azul y marca de agua del logo |

## Convenciones

- Proporcion **16:9**, degradado institucional azul (`#03497D` → `#48AFE8`).
- **No son fotografias**: son marcadores de posicion generados por script
  (`scripts/generate-news-placeholders.mjs`). Cuando SIM entregue las
  imagenes autorizadas, se sustituyen con el mismo nombre y el codigo no
  cambia.
- No reutilizar la misma imagen en todas las tarjetas.
- Los titulos, categorias y fechas van en `src/data/news.ts`, no en el nombre
  del archivo.

## Estado

**Pendiente de reemplazo** con fotografias autorizadas de SIM.
