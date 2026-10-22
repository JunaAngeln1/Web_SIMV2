import Card from '@/components/ui/Card'
import Container from '@/components/layout/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'

const plans = [
  {
    id: 'plan-1',
    name: 'Plan Básico',
    benefits: ['Consultas veterinarias', 'Vacunación', 'Desparasitación'],
  },
  {
    id: 'plan-2',
    name: 'Plan Estándar',
    benefits: ['Consultas ilimitadas', 'Vacunación', 'Desparasitación', 'Estudios de laboratorio'],
  },
  {
    id: 'plan-3',
    name: 'Plan Premium',
    benefits: [
      'Consultas ilimitadas',
      'Vacunación',
      'Desparasitación',
      'Estudios de laboratorio',
      'Hospitalización',
    ],
  },
]

export default function PlansSummary() {
  return (
    <section
      data-section="planes-resumidos"
      aria-label="Planes resumidos"
      className="py-16 sm:py-20 bg-blanco"
    >
      <Container narrow>
        <SectionHeading
          title="Planes de atención para tu mascota"
          subtitle="Elige el plan que mejor se adapte a las necesidades de tu perro o gato."
        />

        <div data-purpose="plans-grid" className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <Card key={plan.id} hover className="flex flex-col h-full">
              <h3
                data-purpose="plan-name"
                className="font-titulos font-semibold text-lg text-azul-institucional mb-3"
              >
                {plan.name}
              </h3>
              <ul
                data-purpose="plan-benefits"
                className="flex-1 space-y-2 text-sm text-gris-azulado mb-6"
              >
                {plan.benefits.map((b) => (
                  <li key={b} data-purpose="plan-benefit" className="flex items-center gap-2">
                    <span className="text-verde-sim">●</span> {b}
                  </li>
                ))}
              </ul>
              <Button variant="secondary" data-purpose="cta-ver-plan" className="w-full">
                Ver plan
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button variant="ghost" data-purpose="cta-explorar-planes">
            Explorar todos los planes
          </Button>
        </div>
      </Container>
    </section>
  )
}
