# `src/components/layout/` — Elementos globales

## Componentes implementados

| Archivo         | Proposito                                                                                 |
| --------------- | ----------------------------------------------------------------------------------------- |
| `Header.tsx`    | Header fijo (80 px) con logo, navegación SPA (`NavLink`), menú móvil hamburguesa y CTA     |
| `Footer.tsx`    | Pie global azul petróleo `#004563` con cinco columnas y derechos reservados               |
| `Container.tsx` | Ancho máximo de contenido (1360 px, o 768 px en modo `narrow`) con padding horizontal     |
| `SiteLayout.tsx`| Layout de rutas que monta el contenido (`Outlet`) y el Footer compartido                 |

## Reglas

- El Header es blanco, fijo arriba (`fixed`, `z-40`), alto 80 px.
- Enlaces de navegación: **Inicio, Nosotros, Planes, Noticias, Cobertura**.
- CTA principal: **"Afiliar a mi mascota"** → `/contacto`, con `verde-interactivo`.
- El enlace activo se marca con subrayado azul, **no solo con color**.
- En móvil el Header muestra un botón hamburguesa que despliega un panel con los
  enlaces; se cierra con Escape, al navegar o al pulsar un enlace.
- El Footer es parte de `SiteLayout`, por lo que aparece una sola vez en todas las rutas.
- El Footer **no inventa** teléfonos, correos, direcciones ni redes sociales; los canales y perfiles sin confirmar quedan `data-pending`.
- Redes sociales solo si SIM tiene perfiles oficiales vigentes.
- Los enlaces legales son marcadores `data-pending` hasta que SIM entregue los textos.
- `Container` aplica `px-4` también en modo `narrow` para que el contenido no toque
  los bordes en móvil.
