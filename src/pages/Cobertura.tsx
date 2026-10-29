import Card from '@/components/ui/Card'
import Container from '@/components/layout/Container'
import Header from '@/components/layout/Header'
import SectionHeading from '@/components/ui/SectionHeading'

export default function Cobertura() {
  return (
    <main data-page="cobertura" className="pt-[80px] sm:pt-[96px] pb-16 sm:pb-20">
      <Header />
      <Container>
        <SectionHeading title="Cobertura" subtitle="Zonas y alcance de los planes de S.I.M." />

        <section data-section="cobertura-detalle" aria-label="Cobertura" className="mt-10">
          <Card padded>
            <h3 className="font-titulos font-semibold text-lg text-azul-institucional mb-3">
              Zonas cubiertas
            </h3>
            <p data-pending="true" className="text-gris-azulado text-sm">
              Información de zonas de cobertura pendiente de confirmación por SIM.
            </p>
          </Card>

          <Card padded className="mt-6">
            <h3 className="font-titulos font-semibold text-lg text-azul-institucional mb-3">
              Tipo de establecimientos
            </h3>
            <p data-pending="true" className="text-gris-azulado text-sm">
              Listado de establecimientos veterinarios incluidos en cada plan pendiente de revisión
              por SIM.
            </p>
          </Card>

          <Card padded className="mt-6">
            <h3 className="font-titulos font-semibold text-lg text-azul-institucional mb-3">
              Condiciones y exclusiones
            </h3>
            <p data-pending="true" className="text-gris-azulado text-sm">
              Condiciones de uso, topes y exclusiones de cada plan pendientes de aprobación de SIM.
            </p>
          </Card>

          <p className="mt-6 text-xs text-gris-azulado text-center">
            Toda la información de cobertura requiere aprobación de SIM antes de publicarse.
          </p>
        </section>
      </Container>
    </main>
  )
}
