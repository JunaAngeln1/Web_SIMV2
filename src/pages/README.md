# `src/pages/` — Componentes de ruta

## Paginas

| Archivo               | Ruta             | Contenido                                                                                  |
| --------------------- | ---------------- | ------------------------------------------------------------------------------------------ |
| `Inicio.tsx`          | `/`              | Hero, beneficios, planes resumidos, Pet Manager, red de atención, por qué elegir SIM, FAQ + banner |
| `Planes.tsx`          | `/planes`        | Comparativa de los planes Élite, Plus y Premium; el botón de cada plan abre su PDF oficial |
| `Nosotros.tsx`        | `/nosotros`      | Qué es SIM, misión y propuesta de valor (contenido institucional pendiente de ampliación)  |
| `Noticias.tsx`        | `/noticias`      | Carrusel destacado, filtros por categoría y cuadrícula de tarjetas de noticias             |
| `NoticiaDetalle.tsx`  | `/noticias/:slug`| Contenido completo de una noticia; usa `noticiaDetalleLoader.ts` (redirige si no existe)   |
| `Contacto.tsx`        | `/contacto`      | Canales oficiales y formulario de afiliación (marcadores `data-pending`, pendiente de SIM) |
| `Cobertura.tsx`       | `/cobertura`     | Directorio de aliados, filtros, geolocalización, mapa Google Maps y contacto para agendar |

## Que NO va aqui

- Nada de logica de negocio: se extrae a `hooks/`, `lib/` o `data/`.
- Nada de componentes de interfaz reutilizables: van en `components/ui/`.
- Las secciones de Inicio se componen desde `components/sections/`, no se
  escriben dentro de la pagina.

## Convenciones

- Un componente por pagina, con el mismo nombre del archivo.
- Cada pagina define su `title` y `description` para SEO.
- El formulario de contacto se implementara con validacion `zod` y envio a
  `VITE_FORM_ENDPOINT` cuando SIM apruebe los canales; hoy es contenido pendiente.
- Los PDF de planes viven en `public/pdfs/` (`elite.pdf`, `plus.pdf`,
  `super-premium.pdf`); el plan `premium` mapea a `super-premium.pdf`.
- Cobertura usa `clinicas_sim.json`. El mapa requiere `VITE_GOOGLE_MAPS_API_KEY`
  restringida por dominio/API; el geocodificador inicial está separado en
  `scripts/geocode-clinics.mjs` y requiere confirmación explícita de facturación.
  No se calculan distancias hasta que las coordenadas sean verificadas.
