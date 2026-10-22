# `public/assets/icons/` — Iconografia oficial

Los cuatro iconos/badge de la ruleta de beneficios, entregados por SIM.

## Archivos finales (desplegados)

| Archivo               | Icono             | Tamano | Estado                           |
| --------------------- | ----------------- | ------ | -------------------------------- |
| `allies.svg`          | Aprieto de manos  | 5.4 KB | Limpio (metadata C2PA eliminada) |
| `veterinary-care.svg` | Estetoscopio      | 0.9 KB | Limpio                           |
| `pet-plans.svg`       | Huella            | 0.7 KB | Limpio                           |
| `support.svg`         | Corazon con pulso | 1.4 KB | Limpio                           |

## Caracteristicas tecnicas

- SVG con `viewBox="0 0 96 96"`, sin dimensiones `width`/`height` declaradas
  (se controlan desde CSS).
- Fondo azul institucional (`#0960A1`) + glifo blanco (`#fff`) dentro de un
  circulo mas claro (`#F2F6FA`).
- Ninguno usa `url(#...)` ni degradados: son colores planos, faciles de pintar
  con `currentColor` si se desea.
- Tamano renderizado recomendado: **28–36 px** en tarjetas de beneficios.

## Qué NO va aqui

- No se añaden iconos lineales de `lucide-react` para reemplazar estos.
- La regla de "no mezclar estilos de iconos" de `sim-diseno` se cumple: estos
  badges se usan en la ruleta; Lucide se reserva para navegacion y acciones.
