# `public/assets/icons/` — Iconografia oficial

## Que va aqui

Los cuatro iconos de la ruleta de beneficios:

| Archivo               | Icono            | Uso                                |
| --------------------- | ---------------- | ---------------------------------- |
| `allies.svg`          | Apreton de manos | Beneficio "Red de aliados"         |
| `veterinary-care.svg` | Estetoscopio     | Beneficio "Atencion veterinaria"   |
| `pet-plans.svg`       | Huella           | Beneficio "Planes para tu mascota" |
| `support.svg`         | Corazon          | Beneficio "Acompanamiento"         |

## Estado

**Todos pendientes de SIM.** Si no llegan, la alternativa inmediata es el set
lineal de `lucide-react` (`Handshake`, `Stethoscope`, `PawPrint`, `Heart`), que
cumple la regla de iconografia coherente y no requiere instalacion adicional.

## Convenciones

- SVG con `stroke` linear, grosor visual similar, sin relleno solido.
- `currentColor` en los trazos para que hereden el color del contexto.
- Tamano renderizado: 28–36 px en tarjetas de beneficios, 18–24 px en botones.
- No mezclar emojis, iconos 3D y lineales en la misma interfaz.
