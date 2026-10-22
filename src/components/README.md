# `src/components/` — Componentes de interfaz

## Subcarpetas

| Carpeta     | Alcance                                       |
| ----------- | --------------------------------------------- |
| `layout/`   | Elementos globales: Header, Footer, Container |
| `hero/`     | Hero principal y su interaccion               |
| `ui/`       | Primitivas visuales reutilizables             |
| `sections/` | Secciones de la pagina de Inicio              |

## Que NO va aqui

- Los componentes de ruta van en `src/pages/`.
- El contenido (textos, precios, aliados, noticias) va en `src/data/`.
- Un componente no lee `localStorage`, `window` ni hace fetch en la v1.

## Convenciones

- Un componente por archivo, el nombre del archivo coincide con el componente.
- Las props se tipan con `interface` exportada desde el mismo archivo.
- Todos los controles interactivos deben funcionar con teclado y tener foco visible.
- Las imagenes decorativas llevan `alt=""`; las informativas, alt util.
- Todo componente que renderice texto de negocio recibe los datos por props,
  nunca los importa directamente de `data/`, salvo que sean estaticos.
