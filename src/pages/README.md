# `src/pages/` — Componentes de ruta

## Paginas

| Archivo        | Ruta        | Contenido                                                                                  |
| -------------- | ----------- | ------------------------------------------------------------------------------------------ |
| `Inicio.tsx`   | `/`         | Hero, nosotros, planes resumidos, indicadores, aliados, noticias, CTA final                |
| `Planes.tsx`   | `/planes`   | Comparativa de los planes Elite, Plus y Super Premium y calculadora de ahorro              |
| `Nosotros.tsx` | `/nosotros` | Que es SIM, mision, propuesta de valor, cifras, equipo o historia si hay material aprobado |
| `Noticias.tsx` | `/noticias` | Consejos de cuidado, prevencion, novedades y contenido educativo                           |
| `Contacto.tsx` | `/contacto` | Canales oficiales, formulario de informacion y enlace al proceso de afiliacion             |

## Que NO va aqui

- Nada de logica de negocio: se extrae a `hooks/`, `lib/` o `data/`.
- Nada de componentes de interfaz reutilizables: van en `components/ui/`.
- Las secciones de Inicio se componen desde `components/sections/`, no se
  escriben dentro de la pagina.

## Convenciones

- Un componente por pagina, con el mismo nombre del archivo.
- Cada pagina define su `title` y `description` para SEO.
- La calculadora de ahorro solo se publica con **tarifas aprobadas por SIM**;
  su resultado es una estimacion con supuestos visibles, nunca una garantia.
- El formulario de contacto valida en cliente con `zod` y expone el estado
  de envio, exito y error.
