# `src/components/sections/` — Secciones de Inicio

Orden de construccion segun la **Guía de Diseño de SIM** §4, con las 10 secciones
de la landing page: **Header → Hero → Franja de beneficios → Planes → Personal Pet Manager → Red de atención → ¿Por qué elegir SIM? → FAQ → Banner de afiliación → Footer.**

## Archivos implementados

| Archivo                      | Seccion | Contenido                                                                 |
| ---------------------------- | ------- | ------------------------------------------------------------------------- |
| `Hero.tsx`                   | 4.2     | Hero principal: texto a la izquierda, foto de familia con mascotas a la derecha |
| `PlansSummary.tsx`           | 4.4     | Tres tarjetas de planes (Élite, Plus, Premium); Plus destacado con borde verde |
| `About.tsx`                  | —       | Seccion "Quienes somos"                                                   |
| `Allies.tsx`                 | 4.6     | Red de atencion: texto, mapa ilustrado y fotografia veterinaria           |
| `News.tsx`                   | 4.8     | Preguntas frecuentes tipo acordeon + enlace "Ver mas preguntas"           |
| `FinalCta.tsx`               | 4.9     | Banner de afiliacion: "Tu mascota merece estar protegida" + CTA "Quiero afiliarme" |
| `FeaturedNewsCarousel.tsx`   | 4.8     | Carrusel de noticias destacadas                                           |

## Reglas comunes (según Guía de Diseño §5)

- Tarjetas blancas o gris azulado muy claro, borde rojo 14–24 px, sombra suave.
- Hover: elevar 3–5 px, intensificar la sombra, cambiar el borde (180–240 ms).
- Botones: forma de píldora (radio 999px), principal verde con texto blanco, secundario blanco con borde azul y texto azul.
- Verbos de acción: "Conoce", "Habla", "Ver", "Afiliarme".
- Iconos lineales: verde para beneficios y acciones positivas, azul para información y confianza.
- Huellas de mascotas como decoración secundaria, sin competir con el contenido.
- No inventar coberturas, topes, descuentos, carencias ni precios.
- No marcar un plan como "mejor" sin un criterio comercial aprobado.
- Confirmar vigencia de las cifras antes de publicar.
- Aliados y fotografias: solo con autorizacion.
- En pantallas pequeñas: apilar columnas y tarjetas verticalmente.
