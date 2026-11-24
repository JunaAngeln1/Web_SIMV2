# `src/components/hero/` — Hero principal

Componente de mayor peso visual del sitio, en la página de Inicio.

## Componentes implementados

| Archivo    | Proposito                                                                |
| ---------- | ------------------------------------------------------------------------ |
| `Hero.tsx` | Carrusel de 2 banners a ancho completo, con texto superpuesto y dos CTAs |

## Composicion actual

- Carrusel de 2 slides (`Banner Animales.webp` y `Banner Familia.webp`, en
  `public/assets/images/hero-banners/`). Cada slide es una imagen de banner con
  un degradado blanco a la izquierda para legibilidad del texto.
- Auto-avance cada 5 s, con **botón de pausa/reanudar** (WCAG 2.2.2) y pausa al
  pasar el cursor. Controles anterior/siguiente y dots con área táctil ≥ 44 px.
- Texto: título (`h1`) + descripción a la izquierda; dos CTAs fijos:
  **"Conoce nuestros planes"** → `/planes` y **"Habla con un asesor"** → `/contacto`.
- La primera imagen carga `eager` con `fetchPriority="high"`; las demás `lazy`.
- Las imágenes de banner son decorativas (`alt=""`): el texto transmite el mensaje.
- Los slides inactivos llevan `inert` + `aria-hidden` para que no reciban foco.
- Solo se animan `transform` y `opacity`; con `prefers-reduced-motion` se desactiva
  el movimiento.

## Reglas

- El rostro de las mascotas nunca queda tapado por textos ni botones (el
  degradado protege el lado del texto).
- En móvil los controles son accesibles y no dependen del hover.
- No inventar el copy: los textos actuales son propuesta pendiente de aprobación
  de SIM.
- El gato protagonista (`sim-hero-cat.webp`) y la órbita de beneficios de la
  referencia original ya no se usan; el hero actual es el carrusel de banners.
