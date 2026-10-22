# `src/lib/` — Utilidades puras

Funciones sin React y sin efectos secundarios. Facilitan testear y reutilizar.

## Utilidades previstas

| Archivo         | Proposito                                                     |
| --------------- | ------------------------------------------------------------- |
| `format.ts`     | Formateo de cifras y fechas en es-CO (`4.000`, `marzo 2026`)  |
| `validation.ts` | Esquemas de validacion del formulario de contacto (con `zod`) |
| `raf.ts`        | Ayudas para `requestAnimationFrame` y normalizacion de rangos |

## Que NO va aqui

- Nada de JSX.
- Nada que dependa de `window` en el momento del modulo: solo dentro de funciones
  que se ejecutan en el cliente.
- Nada de acceso a red.

## Convenciones

- Funciones puras y deterministas.
- Sin estado global. Si algo necesita estado compartido, va en `data/` (contenido)
  o en un componente (estado de UI).
