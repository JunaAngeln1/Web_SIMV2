# Web S.I.M. · Servicios Integrales para Mascotas

Web institucional de S.I.M. (Empresa Promotora de Servicios de Salud para perros
y gatos). Objetivo comercial: conseguir nuevas afiliaciones y facilitar las
solicitudes de informacion.

> **Estado actual: Fase 0 (andamiaje).** La estructura de carpetas, el stack y
> las dependencias estan listos. **Todavia no hay componentes implementados**: el
> sitio se construye a partir de la Fase 1 segun el orden de `ESTRUCTURA.md`.

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

Material derivado de los originales, que se conservan en `assets-original/` y no
se desplegan en produccion.

## Material pendiente de SIM

Antes de publicar hacen falta: **tarifas aprobadas** (para la calculadora de
ahorro), confirmacion de las cifras (+4.000 / +250 / +3.500), canales oficiales
de contacto, textos legales y enlace oficial de afiliacion. El detalle esta en
`public/assets/README.md` y `src/data/README.md`.
