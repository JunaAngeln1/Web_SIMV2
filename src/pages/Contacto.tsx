import Card from '@/components/ui/Card'
import Container from '@/components/layout/Container'
import SectionHeading from '@/components/ui/SectionHeading'

export default function Contacto() {
  return (
    <main data-page="contacto" className="py-16 sm:py-20">
      <Container narrow>
        <SectionHeading
          title="Contacto y afiliación"
          subtitle="Canales oficiales, formulario de solicitud de información y enlace al proceso de afiliación."
        />

        <section data-section="contacto-formulario" aria-label="Contacto" className="mt-10">
          <Card padded>
            <div data-purpose="contacto-canales" className="mb-6">
              <h3 className="font-titulos font-semibold text-lg text-azul-institucional mb-3">
                Canales oficiales
              </h3>
              <ul data-purpose="canales-list" className="space-y-2 text-sm text-gris-azulado">
                <li data-pending="true">Teléfono: pendiente de SIM</li>
                <li data-pending="true">Correo: pendiente de SIM</li>
                <li data-pending="true">WhatsApp: pendiente de SIM</li>
                <li data-pending="true">Dirección: pendiente de SIM</li>
              </ul>
            </div>

            <form data-purpose="formulario-contacto" noValidate className="space-y-4">
              <p data-pending="true" className="text-gris-azulado">
                Formulario de solicitud de información pendiente de configuración de endpoint
                (VITE_FORM_ENDPOINT) y aviso de privacidad aprobado por SIM.
              </p>
            </form>

            <div data-purpose="enlace-afiliacion" className="mt-6 pt-6 border-t border-borde-suave">
              <p data-pending="true" className="text-gris-azulado text-sm">
                Enlace al proceso oficial de afiliación: pendiente de SIM.
              </p>
            </div>
          </Card>
        </section>
      </Container>
    </main>
  )
}
