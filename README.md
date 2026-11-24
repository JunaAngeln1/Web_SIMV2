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

## Despliegue en Vercel

El proyecto está configurado como aplicación estática Vite. `vercel.json` define
la instalación reproducible (`npm ci`), el build (`npm run build`), la salida
(`dist`) y la regla SPA para que las rutas de React Router funcionen al abrirlas
directamente o recargar la página.

1. Sube el repositorio a GitHub/GitLab/Bitbucket y en Vercel selecciona **Add New → Project**.
2. Importa el repositorio. Usa la raíz del proyecto como **Root Directory**; los
   comandos y la carpeta de salida ya están definidos en `vercel.json`.
3. En **Environment Variables**, agrega `VITE_GOOGLE_MAPS_API_KEY` si activarás
   el mapa. Restringe esa clave en Google Cloud por dominio y API; al ser `VITE_`,
   se incluye en el JavaScript público del navegador y no debe ser una clave secreta.
4. No configures `GOOGLE_MAPS_GEOCODING_KEY` en el despliegue: es una clave secreta
   solo para el script local de geocodificación. No se necesita para compilar ni
   servir el sitio.
5. Pulsa **Deploy**. Para validar localmente antes de subir cambios ejecuta
   `npm ci`, `npm run typecheck`, `npm run lint` y `npm run build`.

`VITE_FORM_ENDPOINT` se puede configurar solo cuando el formulario tenga un
endpoint aprobado y operativo. La variable vacía no impide el despliegue. Sin la
clave de Maps, el resto del sitio seguirá disponible y la sección mostrará el
aviso de configuración del mapa.

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
| React Router      | 7.18.4         | Rutas del sitio (navegación SPA)                  |
| lucide-react      | 1.61.0         | Iconografia lineal                                |
| Fontsource        | 5.3.0          | Poppins y Manrope autoalojadas                    |
| Zod               | 4.6.7          | Validacion prevista del formulario de contacto    |
| ESLint + Prettier | 10.13 / 3.9.10 | Calidad y formato                                 |

## Variables de entorno

El formulario de contacto y su endpoint (`VITE_FORM_ENDPOINT`) están **pendientes
de implementación y de aprobación por SIM**. Cuando se habilite el formulario, se
copiará `.env.example` a `.env.local` (no se versiona) con el endpoint del servicio
de formularios. Hoy la página `/contacto` muestra contenido marcador `data-pending`.

## Documentacion

| Documento                 | Contenido                                                                     |
| ------------------------- | ----------------------------------------------------------------------------- |
| `ESTRUCTURA.md`           | Mapa completo de carpetas, skills que las gobiernan y orden de implementacion |
| `src/styles/tokens.css`   | Fuente de verdad del color, tipografia, radios y sombras (sistema visual)     |
| `src/*/README.md`         | Que va en cada carpeta, que no, y con que convenciones                        |
| `public/assets/README.md` | Inventario de assets pendientes de SIM                                        |
| `Agentes/`                | Skills del sistema S.I.M. (especificacion, arquitectura, diseno)              |

## Estado de los assets

Todos los assets obligatorios para la v1 estan cubiertos:

| Categoria             | Estado      | Detalle                                                                    |
| --------------------- | ----------- | -------------------------------------------------------------------------- |
| Logo                  | Recibido    | Simbolo oficial (cruz + mascotas) en `public/assets/sim-logo.svg`          |
| Banners / asesora     | Recibidos   | `Banner Animales.webp`, `Banner Familia.webp` y `Asesora-veterinaria-con-huellas-pastel.webp` en `public/assets/images/hero-banners/` |
| Mapa Colombia         | Derivado    | Mapa departamental en `public/assets/images/maps/`, con atribución/licencia CC BY-SA 4.0 en su README |
| Iconos de beneficios  | Recibidos   | 4 badges oficiales en `public/assets/icons/`                               |
| Imagenes de planes    | Recibidas   | 3 recortes (perro/gato) en `public/assets/images/plans/`                   |
| Fotografias Nosotros  | Recibidas   | `about-team.webp` y `about-pet.webp` en `public/assets/images/about/`      |
| Imagenes noticias     | Placeholder | 3 SVG 16:9 en `public/assets/images/news/` (a reemplazar con fotos de SIM) |
| Favicons              | Generados   | `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png`                    |
| Fondos decorativos    | Recibido    | `fondo_verde_azul_turquesa.svg` y `fondo_sim_vector.svg` (disponibles; el hero usa banners) |
| Componentes UI        | Implementado| `Button`, `Card`, `NewsCard`, `PageHero`, `PlanCard`, `PromoModal`, `SectionHeading` |
| Secciones             | Implementado| `Benefits`, `PlansSummary`, `PetManager`, `Allies`, `WhyChooseUs`, `FAQBanner`, `FeaturedNewsCarousel` |
| Datos                 | Implementado| `src/data/plans.ts`, `src/data/news.ts` y `src/data/promos.ts`             |
| Página detalle noticia| Implementado| `src/pages/NoticiaDetalle.tsx` y `src/pages/noticiaDetalleLoader.ts`       |

Material derivado de los originales, que se conservan en `assets-original/` y no
se desplegan en produccion. El gato protagonista (`sim-hero-cat.webp`) se conserva
como asset de referencia; el hero actual usa los banners.

## Material pendiente de SIM

Antes de publicar hacen falta: **tarifas aprobadas**, canales oficiales de contacto
(teléfono, correo, WhatsApp), textos legales, enlace oficial de afiliación,
respuestas reales a las preguntas frecuentes y confirmación de la información de
cobertura. El detalle esta en `public/assets/README.md` y `src/data/README.md`.

Sustituir los recursos de referencia por fotografías autorizadas y definitivas,
confirmar el logo oficial y sus versiones, verificar teléfonos, correo, WhatsApp
y enlaces sociales, incorporar respuestas reales a las preguntas frecuentes,
confirmar la información de cobertura, planes, beneficios y condiciones, y
comprobar accesibilidad, contraste, carga de imágenes y funcionamiento en móviles.
La fotografía de veterinaria atendiendo un perro en la sección de red de atención
está pendiente de recibir un asset que corresponda a la escena solicitada.
