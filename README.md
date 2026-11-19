# Web S.I.M. · Servicios Integrales para Mascotas

Landing page institucional de S.I.M. — Servicios Integrales para Mascotas. Presenta
los servicios de asistencia veterinaria y busca convertir a los visitantes en
afiliados siguiendo un recorrido visual de 10 secciones: navegación, hero,
franja de beneficios, planes, Personal Pet Manager, red de atención, por qué
elegir SIM, preguntas frecuentes, banner de afiliación y footer.

> **Estado actual: v1 implementada.** La landing page está completa con los
> componentes de la guía de diseño (Hero, Beneficios, Planes, Pet Manager,
> Red de atención, ¿Por qué elegir SIM?, FAQ, Banner de afiliación y Footer).
> Los componentes se reutilizan desde `src/components/` y el contenido editable
> vive en `src/data/`.

## Requisitos

- Node.js `^20.19.0 || ^22.13.0 || >=24` (desarrollado con Node 26)
- npm 10 o superior

## Puesta en marcha

```bash
npm install
npm run dev        # http://localhost:5173
```

## Scripts

| Script                 | Descripcion                                            |
| ---------------------- | ------------------------------------------------------ |
| `npm run dev`          | Servidor de desarrollo con HMR                         |
| `npm run build`        | Verifica tipos (`tsc -b`) y genera el build en `dist/` |
| `npm run preview`      | Sirve el build de `dist/` localmente                   |
| `npm run typecheck`    | Solo verificacion de tipos                             |
| `npm run lint`         | ESLint (flat config) sobre todo el proyecto            |
| `npm run lint:fix`     | ESLint con correccion automatica                       |
| `npm run format`       | Prettier escribe los cambios de formato                |
| `npm run format:check` | Verifica formato sin escribir (ideal para CI)          |

## Stack

| Tecnologia        | Version        | Uso                                               |
| ----------------- | -------------- | ------------------------------------------------- |
| React             | 19.3.1         | Componentes de interfaz                           |
| TypeScript        | 5.9.3          | Tipado estricto                                   |
| Vite              | 8.3.5          | Servidor de desarrollo y build (bundler Rolldown) |
| Tailwind CSS      | 4.3.3          | Utilidades sobre tokens CSS                       |
| React Router      | 7.18.4         | Rutas del sitio                                   |
| lucide-react      | 1.61.0         | Iconografia lineal                                |
| Fontsource        | 5.3.0          | Poppins y Manrope autoalojados                    |
| Zod               | 4.6.7          | Validacion del formulario de contacto             |
| ESLint + Prettier | 10.13 / 3.9.10 | Calidad y formato                                 |

## Variables de entorno

Copia `.env.example` a `.env.local` (no se versiona).

| Variable             | Descripcion                                                                                |
| -------------------- | ------------------------------------------------------------------------------------------ |
| `VITE_FORM_ENDPOINT` | Endpoint del servicio de formularios. Vacio = el formulario avisa que no esta configurado. |

## Documentacion

| Documento                 | Contenido                                                                     |
| ------------------------- | ----------------------------------------------------------------------------- |
| `GUIA-DISENO.md`          | Guía de estructura, diseño y organización de la landing page (colores, tipografía, componentes, reglas visuales y responsive) |
| `ESTRUCTURA.md`           | Mapa completo de carpetas, skills que las gobiernan y orden de implementacion |
| `src/*/README.md`         | Que va en cada carpeta, que no, y con que convenciones                        |
| `public/assets/README.md` | Inventario de assets pendientes de SIM                                        |
| `Agentes/`                | Skills del sistema S.I.M. (especificacion, arquitectura, diseno)              |

## Estado de los assets

Todos los assets obligatorios para la v1 estan cubiertos:

| Categoria            | Estado      | Detalle                                                                    |
| -------------------- | ----------- | -------------------------------------------------------------------------- |
| Logo                 | Recibido    | Simbolo oficial (cruz + mascotas) en `public/assets/sim-logo.svg`          |
| Gato protagonista    | Recibido    | Con transparencia real en `public/assets/sim-hero-cat.webp`                |
| Iconos de la ruleta  | Recibidos   | 4 badges oficiales en `public/assets/icons/`                               |
| Fotografias Nosotros | Recibidas   | 2 fotos (frame 0 estatico) en `public/assets/images/`                      |
| Imagenes noticias    | Placeholder | 3 SVG 16:9 en `public/assets/images/news/` (a reemplazar con fotos de SIM) |
| Favicons             | Generados   | `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png`                    |
| Fondos decorativos   | Recibido    | `fondo_verde_azul_azul_turquesa.svg` en `public/assets/`                   |
| Componentes UI nuevos| Implementado| `NewsCard`, `PageHero`, `PawPattern`, `PromoModal`, `SectionWave` en `src/components/ui/` |
| Secciones nuevas     | Implementado| `FeaturedNewsCarousel` en `src/components/sections/`                       |
| Datos de noticias    | Implementado| `src/data/news.ts` y `src/data/promos.ts`                                  |
| Página detalle noticia| Implementado| `src/pages/NoticiaDetalle.tsx` y `src/pages/noticiaDetalleLoader.ts`       |

Material derivado de los originales, que se conservan en `assets-original/` y no
se desplegan en produccion.

## Material pendiente de SIM

Antes de publicar hacen falta: **tarifas aprobadas** (para la calculadora de
ahorro), confirmacion de las cifras (+4.000 / +250 / +3.500), canales oficiales
de contacto, textos legales y enlace oficial de afiliacion. El detalle esta en
`public/assets/README.md` y `src/data/README.md`.

Sustituir los recursos de referencia por fotografías autorizadas y definitivas,
confirmar el logo oficial y sus versiones, verificar teléfonos, correo, WhatsApp
y enlaces sociales, incorporar respuestas reales a las preguntas frecuentes,
confirmar la información de cobertura, planes, beneficios y condiciones, y
comprobar accesibilidad, contraste, carga de imágenes y funcionamiento en móviles.
