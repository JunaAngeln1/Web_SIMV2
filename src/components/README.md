# `src/components/` — Componentes de interfaz

## Subcarpetas

| Carpeta     | Alcance                                       |
| ----------- | --------------------------------------------- |
| `layout/`   | Elementos globales: Header, Footer, Container |
| `hero/`     | Hero principal (carrusel de banners)          |
| `ui/`       | Primitivas visuales reutilizables             |
| `sections/` | Secciones de Inicio y de Noticias             |

## Que NO va aqui

- Los componentes de ruta van en `src/pages/`.
- El contenido (textos, precios, aliados, noticias) va en `src/data/`.
- Evitar acceso a `localStorage` / `window` salvo que este justificado (p. ej.
  `PromoModal` limita su frecuencia con `localStorage`, y los carruseles usan
  temporizadores de `window` que se limpian al desmontar).

## Convenciones

- Un componente por archivo, el nombre del archivo coincide con el componente.
- Las props se tipan con `interface` exportada desde el mismo archivo.
- Todos los controles interactivos deben funcionar con teclado y tener foco visible.
- Las imagenes decorativas llevan `alt=""`; las informativas, alt util.
- Todo componente que renderice texto de negocio recibe los datos por props,
  nunca los importa directamente de `data/`, salvo que sean estaticos.
- La navegacion interna usa `Link` / `NavLink` de React Router (SPA), no
  `<a href>` que recarga la pagina.
