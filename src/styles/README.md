# `src/styles/` — Tokens y estilos globales

## Que va aqui

- `tokens.css` — **fuente de verdad** del sistema visual. Define las custom
  properties CSS y las reexpone en `@theme` de Tailwind v4.
- `globals.css` — reset, tipografia base, `:focus-visible`, soporte de
  `prefers-reduced-motion`, utilidades de layout compartidas.

## Valores del sistema de color (segun la Guía de Diseño de SIM)

La identidad combina azul petróleo y verde. El azul comunica confianza y respaldo
profesional; el verde se utiliza para destacar acciones, protección y bienestar.
Los fondos blancos y grises suaves mantienen la página luminosa y facilitan la
lectura.

| Token                     | Valor       | Uso recomendado                                |
| ------------------------- | ----------- | ---------------------------------------------- |
| `--color-azul-petroleo`   | `#054564`   | Títulos, navegación, iconos y textos destacados |
| `--color-verde-corporativo` | `#659D0D` | Acentos decorativos, iconos y texto grande   |
| `--color-verde-interactivo` | `#4F7D0A` | Botones y badges con texto blanco (cumple AA) |
| `--color-verde-interactivo-hover` | `#3F6408` | Hover de botones y badges verdes      |
| `--color-verde-claro`     | `#A5C46C`   | Detalles secundarios y elementos decorativos   |
| `--color-verde-pastel`    | `#E9F2DC`   | Fondos suaves de beneficios y paneles          |
| `--color-gris-claro`      | `#F4F5F6`   | Tarjetas y superficies alternas                |
| `--color-blanco`          | `#FFFFFF`   | Fondo principal y botones secundarios          |
| `--color-azul-grisaceo`   | `#D3E4E9`   | Fondos y detalles decorativos                  |
| `--color-azul-oscuro`     | `#003047`   | Footer y zonas de alto contraste               |

Los valores son aproximados y pueden ajustarse al manual de marca oficial si existe uno.

> **Contraste:** el verde de marca `#659D0D` con texto blanco da 3.3:1 y no cumple
> WCAG AA. Por eso las superficies interactivas con texto blanco (botones, badges)
> usan `--color-verde-interactivo` (`#4F7D0A`, hover `#3F6408`). El verde de marca
> se conserva para decoración y texto grande (≥ 24 px o ≥ 18.66 px bold).

### Proporción visual sugerida

- 65 %: blanco y fondos claros.
- 20 %: azul petróleo y azul oscuro.
- 10 %: verde corporativo.
- 5 %: tonos complementarios y decoración.

No es una medición exacta de la captura de referencia, sino una guía para mantener
el equilibrio visual.

## Tipografia

La captura utiliza una tipografía sans-serif moderna, de apariencia geométrica y
legible. Alternativas recomendadas:

- **Poppins**: títulos y encabezados.
- **Inter**: párrafos, navegación y textos de interfaz.
- **Nunito Sans**: textos secundarios con un tono cercano.

### Jerarquía orientativa de tamaños

| Elemento                 | Tamaño sugerido |
| ------------------------ | --------------- |
| Título principal del Hero| 40–44 px        |
| Título de sección        | 28–32 px        |
| Subtítulo                | 20–24 px        |
| Título de tarjeta        | 20–24 px        |
| Texto normal             | 14–16 px        |
| Texto auxiliar           | 12–13 px        |

Nunca usar más de dos familias tipográficas.

## Tokens de componentes

| Token                    | Valor                              | Uso                      |
| ------------------------ | ---------------------------------- | ------------------------ |
| `--radius-tarjeta`       | `20px`                             | Bordes redondeados de tarjetas |
| `--radius-pildora`       | `9999px`                           | Botones forma de píldora   |
| `--shadow-suave`         | `0 4px 18px rgba(5, 69, 100, .06)` | Sombras suaves de tarjetas |

## Reglas visuales de los componentes

### Botones
- Forma de píldora, bordes completamente redondeados (`999px`).
- Botón principal con `verde-interactivo` y texto blanco (contraste AA).
- Botón secundario blanco con borde azul y texto azul.
- Usar verbos de acción claros: "Conoce", "Habla", "Ver" y "Afiliarme".

### Tarjetas
- Fondo blanco o gris azulado muy claro.
- Bordes redondeados de aproximadamente 14–24 px.
- Sombras suaves, sin exceso de profundidad.
- Imágenes de mascotas como elemento visual principal.
- Mantener títulos, descripciones y botones alineados.

### Iconos y decoración
- Iconos lineales, sencillos y fáciles de reconocer.
- Verde para beneficios y acciones positivas.
- Azul para información, contacto y confianza.
- Sin decoración de huellas ni ondas: el fondo plano y el espaciado jerarquizan.

### Espaciado y composición
- Separación generosa entre secciones.
- Contenido centrado en un contenedor de ancho máximo aproximado de 1200 px en escritorio.
- Evitar párrafos demasiado largos.
- Alternar secciones blancas y fondos gris claro para separar visualmente los contenidos.
- En pantallas pequeñas, apilar columnas y tarjetas verticalmente.

## Que NO va aqui

- Estilos de componentes: van junto a su componente o en `components/ui/`.
- Colores literales nuevos: primero se agrega como token.
- Animaciones que animen `width`, `height`, `top` o `left`. Solo `transform` y `opacity`.

## Convenciones

- Tailwind v4 es CSS-first: se configura en `tokens.css`, no en `tailwind.config.js`.
- Los breakpoints de la skill son 360, 390, 768, 1024 y 1440 px.
