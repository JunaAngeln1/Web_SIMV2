# `src/components/sections/` — Secciones de la página

Secciones que componen la página de Inicio y la página de Noticias. El orden de
Inicio es: **Header → Hero → Benefits → PlansSummary → PetManager → Allies →
WhyChooseUs → FAQBanner → Footer** (Header, Hero y Footer viven en `layout/` y
`hero/`). Entre secciones no hay separadores de onda: el ritmo lo dan el fondo
y el espaciado de cada banda.

## Archivos implementados

| Archivo                    | Usada en | Contenido                                                                 |
| -------------------------- | -------- | ------------------------------------------------------------------------- |
| `Benefits.tsx`             | Inicio   | Franja compacta de cuatro beneficios, inmediatamente después del Hero    |
| `PlansSummary.tsx`         | Inicio   | Tres tarjetas de planes (Élite, Plus, Premium); entrada escalonada con `useInView` |
| `PetManager.tsx`           | Inicio   | Banda panorámica de Personal Pet Manager: asesora, explicación y panel integrado de beneficios |
| `Allies.tsx`               | Inicio   | Banda de red de atención: texto, mapa departamental de Colombia, características e imagen de referencia pendiente |
| `WhyChooseUs.tsx`          | Inicio   | Banda gris con título orgánico y cuatro argumentos para confiar en SIM    |
| `FAQBanner.tsx`            | Inicio   | Preguntas frecuentes (acordeón) + banner de afiliación con CTA            |
| `FeaturedNewsCarousel.tsx` | Noticias | Carrusel de noticias destacadas con botón de pausa, dots y controles      |

## Reglas comunes (según Guía de Diseño §5)

- Tarjetas blancas o gris azulado muy claro, borde con radio 14–24 px, sombra suave.
- Hover: elevar 3–5 px, intensificar la sombra, cambiar el borde (180–240 ms).
- Botones: forma de píldora (radio 999px). Principal con `verde-interactivo` y
  texto blanco (cumple contraste AA); secundario blanco con borde azul y texto azul.
- Verbos de acción: "Conoce", "Habla", "Ver", "Afiliarme".
- Iconos lineales: verde para beneficios y acciones positivas, azul para información y confianza.
- Sin fondos de huellas ni ondas decorativas en las secciones.
- No inventar coberturas, topes, descuentos, carencias ni precios.
- No marcar un plan como "mejor" sin un criterio comercial aprobado.
- Aliados y fotografías: solo con autorización.
- En pantallas pequeñas: apilar columnas y tarjetas verticalmente.
- La franja `Benefits` se mantiene como una sola superficie continua (no cuatro
  tarjetas), con cuatro elementos en escritorio y cuadrícula 2×2 en móvil/tablet.
- Carruseles con auto-avance: botón de pausa/reanudar (WCAG 2.2.2), pausa al pasar
  el cursor y área táctil de los dots ≥ 44 px.
