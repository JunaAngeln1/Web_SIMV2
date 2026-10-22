# `src/styles/` — Tokens y estilos globales

## Que va aqui

- `tokens.css` — **fuente de verdad** del sistema visual. Define las custom
  properties CSS y las reexpone en `@theme` de Tailwind v4.
- `globals.css` — reset, tipografia base, `:focus-visible`, soporte de
  `prefers-reduced-motion`, utilidades de layout compartidas.

## Valores del sistema de color (segun `sim-diseno` §1)

| Token                        | Valor         | Uso                           |
| ---------------------------- | ------------- | ----------------------------- |
| `--color-azul-profundo`      | `#07345B`     | Fondos oscuros, footer        |
| `--color-azul-institucional` | `#03497D`     | Titulos, navegacion, iconos   |
| `--color-azul-cielo`         | `#48AFE8`     | Detalles, acentos secundarios |
| `--color-verde-sim`          | **`#77c100`** | CTA principal, indicadores    |
| `--color-blanco`             | `#FFFFFF`     | Contenedores, tarjetas        |
| `--color-azul-muy-claro`     | `#F1F7FC`     | Fondos alternos               |
| `--color-azul-niebla`        | `#E8F3FC`     | Fondos de iconos, chips       |
| `--color-gris-azulado`       | `#64748B`     | Texto secundario              |
| `--color-texto-principal`    | `#172B3A`     | Texto de lectura              |
| `--color-borde-suave`        | `#D9E5EF`     | Bordes y divisores            |

### Nota sobre el verde

La skill de diseno indica `#7AB929`, pero el **logo oficial entregado usa
`#77c100`**. Se adopta el valor del activo oficial y se deja documentado como
discrepancia a confirmar contra el manual de marca antes de producción.

## Tipografia

- Texto, navegacion y botones: **Poppins** (400/500/600/700).
- Titulos: **Manrope** (o **Montaser Arabic** si SIM entrega la fuente autorizada
  con licencia web). Nunca mas de dos familias.

## Que NO va aqui

- Estilos de componentes: van junto a su componente o en `components/ui/`.
- Colores literales nuevos: primero se agrega como token.
- Animaciones que animen `width`, `height`, `top` o `left`. Solo `transform` y `opacity`.

## Convenciones

- Tailwind v4 es CSS-first: se configura en `tokens.css`, no en `tailwind.config.js`.
- Los breakpoints de la skill son 360, 390, 768, 1024 y 1440 px.
