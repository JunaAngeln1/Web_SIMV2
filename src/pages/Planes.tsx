import Card from '@/components/ui/Card'
import Container from '@/components/layout/Container'
import SectionHeading from '@/components/ui/SectionHeading'

export default function Planes() {
  return (
    <main data-page="planes" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          title="Planes de atención"
          subtitle="Compara nuestros planes, beneficios, condiciones, términos, exclusiones y usa la calculadora de ahorro estimado."
        />

        <section
          data-section="planes-comparativa"
          aria-label="Comparativa de planes"
          className="mt-10"
        >
          <div data-purpose="plans-detail">
            <Card padded>
              <p data-pending="true" className="text-gris-azulado">
                Contenido de planes pendiente de información aprobada por SIM. No se inventan
                precios, coberturas, topes, descuentos ni tiempos de carencia.
              </p>
            </Card>
          </div>

          <div
            data-purpose="calculadora"
            aria-label="Calculadora de ahorro estimado"
            className="mt-8"
          >
            <Card padded>
              <h2
                data-purpose="calc-title"
                className="font-titulos font-semibold text-lg text-azul-institucional mb-4"
              >
                Calculadora de ahorro estimado
              </h2>
              <p data-pending="true" className="text-gris-azulado">
                Calculadora pendiente de tarifas aprobadas por SIM. El resultado será una estimación
                con supuestos visibles, nunca una garantía.
              </p>
            </Card>
          </div>
        </section>
      </Container>
    </main>
  )
}
