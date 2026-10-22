# `src/hooks/` — Logica reutilizable de React

## Hooks previstos

| Hook                  | Proposito                                                                                                    | Referencia        |
| --------------------- | ------------------------------------------------------------------------------------------------------------ | ----------------- |
| `useOrbitInteraction` | Normaliza la posicion del puntero en el hero, la suaviza y la aplica a la orbita con `requestAnimationFrame` | `sim-diseno` §5–6 |
| `useCountUp`          | Conteo progresivo de las cifras de Indicadores, una sola vez al entrar en pantalla                           | `sim-diseno` §8   |
| `useReducedMotion`    | Detecta `prefers-reduced-motion` y desactiva el movimiento ligado al mouse                                   | `sim-diseno` §6   |

## Que NO va aqui

- Nada de JSX ni componentes.
- Nada de fetch o llamadas de red en la v1 (no hay backend).
- Nada de animaciones que usen `width`, `height`, `top` o `left`.

## Convenciones

- Todo hook que anime debe escribir solo en `transform` y `opacity`.
- Si el hook depende del scroll o del puntero, se limpia en el `cleanup` del
  `useEffect` y se cancela el `requestAnimationFrame` pendiente.
- El movimiento ligado al mouse es **bidireccional**: subir y bajar el puntero
  producen desplazamientos opuestos.
- Con `prefers-reduced-motion` activo, la orbita se desactiva o se sustituye por
  una seleccion discreta.
