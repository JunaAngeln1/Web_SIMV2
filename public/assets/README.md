# `public/assets/` — Assets oficiales de S.I.M.

Todo lo que se sirve tal cual desde la raiz del sitio (`/assets/...`).
**Los archivos de aqui se referencian con ruta absoluta**: `/assets/icons/...`.

## Regla critica: nada se sustituye en silencio

Si falta un asset oficial, se deja la ruta claramente identificada y se solicita
el archivo a SIM. No se redibuja el logo con texto, no se genera un icono
parecido y no se reemplaza una foto por un marcador de posicion sin avisar.

## Inventario de material pendiente (SIM)

| Asset                      | Ruta objetivo                       | Estado        | Nota                                                                                                    |
| -------------------------- | ----------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------- |
| Logotipo oficial           | `sim-logo.svg`                      | **Pendiente** | SVG preferible; si no, PNG transparente alta resolucion. Sin deformar.                                  |
| Gato protagonista          | `sim-hero-cat.webp`                 | **Pendiente** | Fotografia realista, gato gris/blanco, ojos azules, mirada al centro/izquierda, **transparencia real**. |
| Icono aliados              | `icons/allies.svg`                  | **Pendiente** | Apreton de manos. Alternativa Lucide: `Handshake`.                                                      |
| Icono atencion veterinaria | `icons/veterinary-care.svg`         | **Pendiente** | Estetoscopio. Alternativa Lucide: `Stethoscope`.                                                        |
| Icono planes               | `icons/pet-plans.svg`               | **Pendiente** | Huella. Alternativa Lucide: `PawPrint`.                                                                 |
| Icono acompanamiento       | `icons/support.svg`                 | **Pendiente** | Corazon. Alternativa Lucide: `Heart`.                                                                   |
| Foto equipo/veterinario    | `images/about-veterinary-team.webp` | **Pendiente** | Seccion Nosotros. Autorizada.                                                                           |
| Fotos de noticias          | `images/news/...`                   | **Pendiente** | 3 imagenes 16:9, distintas entre si.                                                                    |
| Favicon                    | `favicon.svg`                       | **Pendiente** | Derivado del logo oficial.                                                                              |

## Optimizacion

- Preferir `.webp` con calidad alta; PNG solo cuando haga falta transparencia real.
- Declarar `width`/`height` en las imagenes para evitar saltos de layout.
- El gato del hero debe tener el rostro despejado: nunca se recorta ojos ni orejas.
