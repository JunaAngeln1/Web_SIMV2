/**
 * Footer — Estructura de contenido (sin estilos de diseño).
 * Contenido pendiente de SIM: teléfonos, correos, dirección, enlaces legales, redes sociales.
 */

export default function Footer() {
  return (
    <footer data-section="footer" role="contentinfo">
      <div data-purpose="footer-inner">
        <div data-purpose="footer-brand">
          <img src="/assets/sim-logo.svg" alt="S.I.M. — Servicios Integrales para Mascotas" />
          <p data-purpose="footer-description">
            Servicios Integrales para Mascotas. Planes de atención veterinaria para perros y gatos.
          </p>
        </div>

        <nav data-purpose="footer-nav" aria-label="Navegación del footer">
          <h3 data-purpose="footer-nav-title">Navegación</h3>
          <ul data-purpose="footer-nav-list">
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
            <li>
              <a href="/contacto">Contacto</a>
            </li>
          </ul>
        </nav>

        <div data-purpose="footer-contacto">
          <h3 data-purpose="footer-contacto-title">Contacto oficial</h3>
          <ul data-purpose="footer-contacto-list">
            <li data-pending="true">Teléfono: pendiente de SIM</li>
            <li data-pending="true">Correo: pendiente de SIM</li>
            <li data-pending="true">Dirección: pendiente de SIM</li>
          </ul>
        </div>

        <div data-purpose="footer-legales">
          <h3 data-purpose="footer-legales-title">Legales</h3>
          <ul data-purpose="footer-legales-list">
            <li>
              <a href="#">Términos y condiciones</a>
            </li>
            <li>
              <a href="#">Política de privacidad</a>
            </li>
            <li>
              <a href="#">Tratamiento de datos personales</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
