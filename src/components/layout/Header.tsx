/**
 * Header — Estructura de navegación (sin estilos de diseño).
 * Contenido pendiente de datos oficiales de SIM: teléfonos, WhatsApp, enlace de afiliación.
 */

export default function Header() {
  return (
    <header data-section="header" role="banner">
      <div data-purpose="header-inner">
        <a href="/" data-purpose="logo" aria-label="S.I.M. — Inicio">
          <img src="/assets/sim-logo.svg" alt="S.I.M. — Servicios Integrales para Mascotas" />
        </a>

        <nav data-purpose="nav" aria-label="Navegación principal">
          <ul data-purpose="nav-list">
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/planes">Planes</a>
            </li>
            <li>
              <a href="/nosotros">Nosotros</a>
            </li>
            <li>
              <a href="/noticias">Noticias</a>
            </li>
          </ul>
        </nav>

        <div data-purpose="header-actions">
          <a
            href="https://wa.me/"
            data-purpose="whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp oficial
          </a>
          <button data-purpose="cta-afiliar" type="button">
            Afiliar a mi mascota
          </button>
        </div>
      </div>
    </header>
  )
}
