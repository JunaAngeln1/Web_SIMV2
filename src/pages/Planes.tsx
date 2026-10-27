/**
 * src/pages/Planes.tsx
 *
 * Página /planes: comparativa de los 3 planes aprobados por SIM
 * (datos desde @/data/plans) + calculadora (pendiente de tarifas).
 */
import { Check } from 'lucide-react'
import Card from '@/components/ui/Card'
import Container from '@/components/layout/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import { plans, commonBenefits, plansFootnote } from '@/data/plans'

export default function Planes() {
  return (
    <main data-page="planes" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          title="Planes de atención"
          subtitle="Compara los planes Elite, Plus y Super Premium: qué incluye cada uno y sus descuentos en servicios veterinarios."
        />

        <section
          data-section="planes-comparativa"
          aria-label="Comparativa de planes"
          className="mt-10"
        >
          <div data-purpose="plans-grid" className="grid md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <Card key={plan.id} hover className="flex flex-col h-full">
                <h3
                  data-purpose="plan-name"
                  className="font-titulos font-semibold text-lg text-azul-institucional mb-1"
                >
                  {plan.name}
                </h3>
                <p data-purpose="plan-price" className="mb-3">
                  <span className="font-titulos text-2xl font-bold text-texto-principal">
                    {plan.price}
                  </span>
                  <span className="text-sm text-gris-azulado"> {plan.period}</span>
                </p>
                <p data-purpose="plan-tagline" className="text-sm text-gris-azulado mb-4">
                  {plan.tagline}
                </p>
                <ul
                  data-purpose="plan-benefits"
                  className="flex-1 space-y-2 text-sm text-gris-azulado mb-6"
                >
                  {plan.highlights.map((b) => (
                    <li key={b} data-purpose="plan-benefit" className="flex items-start gap-2">
                      <Check
                        className="mt-0.5 w-4 h-4 shrink-0 text-verde-sim"
                        aria-hidden="true"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          {/* Beneficios comunes a los tres planes (declarados una sola vez) */}
          <div data-purpose="plans-common" className="mt-8 border-t border-borde-suave pt-4">
            <p className="text-sm font-semibold text-azul-institucional mb-1">
              Todos los planes incluyen:
            </p>
            <p className="text-sm text-gris-azulado leading-relaxed">
              {commonBenefits.join(' · ')}
            </p>
            <p className="mt-2 text-xs text-gris-azulado">{plansFootnote}</p>
          </div>
        </section>

        <div
          data-purpose="calculadora"
          aria-label="Calculadora de ahorro estimado"
          className="mt-12"
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
      </Container>
    </main>
  )
}
