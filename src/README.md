# `src/` — Codigo fuente de la aplicacion

Raiz del codigo de la web de S.I.M. (Servicios Integrales para Mascotas).

## Que va aqui

| Carpeta       | Responsabilidad                                        |
| ------------- | ------------------------------------------------------ |
| `styles/`     | Tokens de diseño y estilos globales                    |
| `data/`       | Contenido editable (textos, planes, aliados, noticias) |
| `hooks/`      | Logica reutilizable de React                           |
| `lib/`        | Utilidades puras sin React                             |
| `components/` | Componentes de interfaz                                |
| `pages/`      | Componentes de ruta                                    |

## Que NO va aqui

- Nada de logica de negocio suelta: va en `data/`, `hooks/` o `lib/`.
- Nada de assets binarios: van en `public/assets/`.
- Nada de configuracion de build: esta en la raiz (`vite.config.ts`, `tsconfig.*.json`).

## Convenciones

- Alias `@/` apunta aqui (`@/components/ui/Button`).
- Un componente por archivo. El nombre del archivo coincide con el componente.
- Toda hoja de estilos nueva importa los tokens de `styles/tokens.css`; nunca
  se escribe un color literal suelto en un componente.

## Skills de referencia

- `sim-diseno` — sistema visual, color, tipografia, componentes.
- `sim-arquitectura` — estructura del sitio y secciones de Inicio.
- `sim-especificacion` — reglas de contenido, accesibilidad y stack.
