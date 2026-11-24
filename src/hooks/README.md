# `src/hooks/` — Logica reutilizable de React

## Hooks implementados

| Hook        | Proposito                                                                                                    |
| ----------- | ------------------------------------------------------------------------------------------------------------ |
| `useInView` | Detecta si un elemento entro en el viewport (IntersectionObserver) y devuelve `ref` + `visible`. Se dispara una sola vez; con `prefers-reduced-motion` devuelve `visible: true` de inmediato. Se usa para la entrada escalonada de tarjetas. |

## Que NO va aqui

- Nada de JSX ni componentes.
- Nada de fetch o llamadas de red en la v1 (no hay backend).
- Nada de animaciones que usen `width`, `height`, `top` o `left`.

## Convenciones

- Todo hook que anime debe escribir solo en `transform` y `opacity`.
- Si el hook depende del scroll, del puntero o de un observer, se limpia en el
  `cleanup` del `useEffect` (se cancela el `requestAnimationFrame` o se
  desconecta el observer).
- Con `prefers-reduced-motion` activo, el contenido debe ser visible de inmediato
  (sin esperar a la animacion de entrada).
