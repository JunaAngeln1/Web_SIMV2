import Card from '@/components/ui/Card'
import Container from '@/components/layout/Container'
import SectionHeading from '@/components/ui/SectionHeading'

export default function Nosotros() {
  return (
    <main data-page="nosotros" className="py-16 sm:py-20 bg-azul-muy-claro">
      <Container>
        <SectionHeading
          title="Nosotros"
          subtitle="Qué es S.I.M., nuestra misión, propuesta de valor y cifras institucionales."
        />

        <section data-section="nosotros-institucional" aria-label="Nosotros" className="mt-10">
          <div data-purpose="nosotros-contenido">
            <Card padded>
              <p data-pending="true" className="text-gris-azulado">
                Contenido institucional pendiente de material aprobado por SIM: historia, equipo,
                cifras verificadas y fotografías autorizadas.
              </p>
            </Card>
          </div>
        </section>
      </Container>
    </main>
  )
}
