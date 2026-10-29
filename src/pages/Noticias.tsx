import Card from '@/components/ui/Card'
import Container from '@/components/layout/Container'
import Header from '@/components/layout/Header'
import SectionHeading from '@/components/ui/SectionHeading'

export default function Noticias() {
  return (
    <main data-page="noticias" className="pt-[80px] sm:pt-[96px] pb-16 sm:pb-20">
      <Header />
      <Container>
        <SectionHeading
          title="Noticias y consejos"
          subtitle="Prevención, cuidado responsable, bienestar animal y novedades de S.I.M."
        />

        <section data-section="noticias-listado" aria-label="Noticias" className="mt-10">
          <div data-purpose="noticias-grid" className="grid md:grid-cols-3 gap-6">
            <Card padded>
              <p data-pending="true" className="text-gris-azulado">
                Listado de noticias pendiente de artículos revisados y aprobados por SIM.
              </p>
            </Card>
          </div>
        </section>
      </Container>
    </main>
  )
}
