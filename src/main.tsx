import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

/**
 * Punto de entrada de la aplicacion.
 *
 * FASE 0 (andamiaje): monta una raiz vacia. El router, los tokens y los
 * componentes se incorporan en la Fase 1, siguiendo el orden definido en
 * ESTRUCTURA.md.
 *
 * Este archivo es la unica pieza de codigo que existe hoy a proposito: sin el,
 * `index.html` no tiene entry point y ni `vite build` ni `vite dev` funcionan.
 */
const container = document.getElementById('root')

if (container) {
  createRoot(container).render(<StrictMode>{null}</StrictMode>)
}
