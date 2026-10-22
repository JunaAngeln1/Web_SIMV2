export default function Contacto() {
  return (
    <main data-page="contacto">
      <section data-section="contacto-formulario" aria-label="Contacto">
        <div data-purpose="section-inner">
          <h1 data-purpose="page-title">Contacto y afiliación</h1>
          <p data-purpose="page-intro">
            Canales oficiales, formulario de solicitud de información y enlace al proceso de
            afiliación.
          </p>

          <div data-purpose="contacto-canales">
            <ul data-purpose="canales-list">
              <li data-pending="true">Teléfono: pendiente de SIM</li>
              <li data-pending="true">Correo: pendiente de SIM</li>
              <li data-pending="true">WhatsApp: pendiente de SIM</li>
              <li data-pending="true">Dirección: pendiente de SIM</li>
            </ul>
          </div>

          <form data-purpose="formulario-contacto" noValidate>
            <p data-pending="true">
              Formulario de solicitud de información pendiente de configuración de endpoint
              (VITE_FORM_ENDPOINT) y aviso de privacidad aprobado por SIM.
            </p>
          </form>

          <div data-purpose="enlace-afiliacion">
            <p data-pending="true">Enlace al proceso oficial de afiliación: pendiente de SIM.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
