# `src/data/` — Contenido editable de la web

Todo el contenido que el equipo de SIM puede cambiar **sin tocar componentes**
vive aqui como datos tipados.

## Archivos previstos

| Archivo         | Contenido                                                    | Origen                  |
| --------------- | ------------------------------------------------------------ | ----------------------- |
| `site.ts`       | Datos de la institucion, navegacion, pie de pagina, contacto | `sim-arquitectura` §1–2 |
| `benefits.ts`   | Beneficios de la ruleta del hero                             | `sim-diseno` §5         |
| `plans.ts`      | Planes y caracteristicas de cada plan                        | `sim-arquitectura` §3.2 |
| `allies.ts`     | Aliados y red veterinaria                                    | `sim-arquitectura` §3.5 |
| `news.ts`       | Noticias y consejos                                          | `sim-arquitectura` §3.6 |
| `indicators.ts` | Cifras institucionales                                       | `sim-arquitectura` §3.4 |

## Regla critica: no inventar

Los precios, coberturas, topes, carencias, descuentos, exclusiones, telefonos,
correos, direcciones y perfiles sociales **no se escriben sin aprobacion de SIM**.
Mientras no exista dato aprobado:

- El campo se marca como pendiente con un valor explicito (por ejemplo
  `PENDIENTE_SIM` con un motivo).
- El componente que lo consume muestra un aviso visible en desarrollo.
- Nunca se sustituye en silencio por un valor plausible.

## Convenciones

- Exportar `const` tipados con `as const` o interfaces explicitas.
- Las cifras de `indicators.ts` son las de la skill (+4.000 / +250 / +3.500);
  **confirmar vigencia antes de publicar**.
- Los beneficios de `benefits.ts` llevan los nombres de archivo de icono de
  `public/assets/icons/`: `allies.svg`, `veterinary-care.svg`, `pet-plans.svg`,
  `support.svg`.
