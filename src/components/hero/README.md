# `src/components/hero/` — Hero principal

Componente de mayor peso visual del sitio. Se construye y se valida **primero**.

## Componentes previstos

| Archivo             | Proposito                                                                |
| ------------------- | ------------------------------------------------------------------------ |
| `Hero.tsx`          | Panel azul con texto a la izquierda, mascota a la derecha, CTAs y orbita |
| `BenefitsOrbit.tsx` | Orbita circular/eliptica con las etiquetas de beneficios                 |

## Composicion (segun `sim-diseno` §4)

- Altura visual objetivo: `100svh` o al menos 680–760 px en escritorio, sin
  ocultar los CTA bajo el pliegue.
- Columna de texto ~42–48 % · columna de mascota e interaccion ~52–58 %.
- Fondo exterior azul palido (`#E8F3FC`) con formas abstractas; marco blanco
  radio 24–32 px; panel interior azul degradado radio 22–28 px.
- Degradado de referencia: `linear-gradient(115deg, #03497D 0%, #48AFE8 100%)`.

## Reglas de la ruleta (segun `sim-diseno` §5–6)

- Beneficios: **Red de aliados, Atencion veterinaria, Planes para tu mascota y
  Acompanamiento** (configurables en `src/data/benefits.ts`).
- El movimiento es **bidireccional** segun la posicion vertical del puntero.
- Se suaviza con interpolacion: sin saltos ni sensibilidad excesiva.
- El beneficio mas cercano a la posicion activa sube a opacidad 1.0 y escala
  1.00–1.04; los demas bajan a opacidad 0.45–0.75 y escala 0.94–0.98.
- Solo se animan `transform` y `opacity`.
- El rostro del gato nunca queda tapado por textos, orbitas gruesas ni botones.
- En movil se permite swipe o controles accesibles; no depende del hover.
- Con `prefers-reduced-motion` la orbita ligada al mouse se desactiva.

## Copy (propuesta, requiere aprobacion de SIM)

- Titulo: "El bienestar de tu mascota, nuestra prioridad."
- Descripcion: "Planes de atencion veterinaria para perros y gatos, con el
  respaldo que tu familia necesita."
- CTA principal: "Conoce nuestros planes" · CTA secundario: "Contactanos"
