# `src/components/sections/` — Secciones de Inicio

Orden de construccion segun `sim-arquitectura` §3:
**Hero → Planes resumidos → Nosotros → Indicadores → Aliados → Noticias → CTA final.**

## Archivos previstos

| Archivo            | Seccion | Contenido                                                        |
| ------------------ | ------- | ---------------------------------------------------------------- |
| `PlansSummary.tsx` | 3.2     | Tarjetas de planes con 3–5 beneficios y CTA "Ver plan"           |
| `About.tsx`        | 3.3     | Texto de presentacion (EPS para mascotas) + foto autorizada      |
| `Indicators.tsx`   | 3.4     | "Conoce a la manada": +4.000 / +250 / +3.500                     |
| `Allies.tsx`       | 3.5     | Franja de logos con movimiento pausado y controlable             |
| `News.tsx`         | 3.6     | Tres noticias destacadas (imagen 16:9, categoria, titulo, fecha) |
| `FinalCta.tsx`     | 3.7     | Franja azul con "Explorar planes" y "Solicitar informacion"      |

## Reglas comunes

- Tarjetas blancas, borde `#D9E5EF`, radio 20–24 px, sombra muy suave.
- Hover: elevar 3–5 px, intensificar la sombra, cambiar el borde (180–240 ms).
- No inventar coberturas, topes, descuentos, carencias ni precios.
- No marcar un plan como "mejor" sin un criterio comercial aprobado.
- Confirmar vigencia de las cifras antes de publicar.
- Aliados y fotografias: solo con autorizacion. Pausar el carrusel en hover/focus
  y permitir navegacion por teclado.
- Copy del CTA final: "Ellos hacen parte de tu familia. Su bienestar tambien
  merece un plan."
