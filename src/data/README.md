# `src/data/` — Contenido editable de la web

Todo el contenido que el equipo de SIM puede cambiar **sin tocar componentes**
vive aqui como datos tipados.

## Archivos implementados

| Archivo     | Contenido                                                    |
| ----------- | ------------------------------------------------------------ |
| `plans.ts`  | Tres planes: Élite, Plus y Premium con precio, descripción, beneficios y descuentos aprobados por SIM. Fuente única de verdad que consumen el inicio y `/planes`. |
| `news.ts`   | Noticias y consejos (carrusel destacado + listado). Contenido de ejemplo claramente identificable hasta que SIM apruebe las publicaciones oficiales. |
| `promos.ts` | Promoción del popup de entrada (`PromoModal`), marcada `PENDIENTE_SIM`. |

## Regla critica: no inventar

Los precios, coberturas, topes, carencias, descuentos, exclusiones, telefonos,
correos, direcciones y perfiles sociales **no se escriben sin aprobacion de SIM**.
Mientras no exista dato aprobado:

- El campo se marca como pendiente con un valor explicito (por ejemplo
  `PENDIENTE_SIM` con un motivo).
- El componente que lo consume muestra un aviso visible en desarrollo
  (`data-pending`).
- Nunca se sustituye en silencio por un valor plausible.

## Convenciones

- Exportar `const` tipados con `as const` o interfaces explicitas.
- Los beneficios de cada plan en `plans.ts` salen de los PDF oficiales en
  `public/pdfs/`; no se redactan ni resumen de forma que alteren su alcance.
- Los iconos de beneficios usan los nombres de archivo de `public/assets/icons/`:
  `allies.svg`, `veterinary-care.svg`, `pet-plans.svg`, `support.svg`.
- Los datos de `news.ts` y `promos.ts` se muestran en la sección de noticias y en
  el popup de entrada, respectivamente.
