import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

/**
 * Estilos del sistema visual S.I.M.
 * 1. tokens.css  -> custom properties + @theme de Tailwind v4
 * 2. globals.css -> reset, tipografía, focus-visible, reduced-motion
 * 3. Fuentes autoalojadas vía Fontsource
 */
import './styles/tokens.css'
import './styles/globals.css'
import '@fontsource/poppins'
import '@fontsource-variable/manrope'

const container = document.getElementById('root')

if (container) {
  createRoot(container).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
