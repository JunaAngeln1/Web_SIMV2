/**
 * src/components/sections/PlansSummary.tsx
 *
 * Sección de planes resumidos del inicio: 3 tarjetas compactas (nombre,
 * precio mensual y descripción) que se despliegan con «Ver más información»
 * para mostrar sus diferenciadores. Los beneficios comunes se declaran una
 * sola vez. Datos aprobados por SIM desde @/data/plans.
 */
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Check, ChevronDown, ChevronUp } from 'lucide-react'
import Card from '@/components/ui/Card'
import Container from '@/components/layout/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import { plans, commonBenefits, plansFootnote, type Plan } from '@/data/plans'

/**
 * Tarjeta individual de plan: colapsada muestra nombre, precio y descripción;
 * el botón alterna la lista de diferenciadores (acordeón inline).
 */
function PlanCard({ plan }: { plan: Plan }) {
  const [open, setOpen] = useState(false)
  const listId = `plan-benefits-${plan.id}`

  // Sin h-full: cada tarjeta crece solo con su propio contenido
  return (
    <Card hover className="flex flex-col">
      <h3
        data-purpose="plan-name"
        className="font-titulos font-semibold text-lg text-azul-institucional mb-1"
      >
        {plan.name}
      </h3>
      <p data-purpose="plan-price" className="mb-3">
        <span className="font-titulos text-2xl font-bold text-texto-principal">{plan.price}</span>
        <span className="text-sm text-gris-azulado"> {plan.period}</span>
      </p>
      <p data-purpose="plan-tagline" className="text-sm text-gris-azulado mb-4">
        {plan.tagline}
      </p>
      <ul
        id={listId}
        data-purpose="plan-benefits"
        className={['flex-1 space-y-2 text-sm text-gris-azulado mb-6', open ? '' : 'hidden'].join(
          ' ',
        )}
      >
        {plan.highlights.map((b) => (
          <li key={b} data-purpose="plan-benefit" className="flex items-start gap-2">
            <Check className="mt-0.5 w-4 h-4 shrink-0 text-verde-sim" aria-hidden="true" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <Button
        variant="secondary"
        data-purpose="cta-ver-mas"
        aria-expanded={open}
        aria-controls={listId}
        className="mt-auto w-full"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? 'Ver menos' : 'Ver más información'}
        {open ? (
          <ChevronUp className="ml-2 w-4 h-4" aria-hidden="true" />
        ) : (
          <ChevronDown className="ml-2 w-4 h-4" aria-hidden="true" />
        )}
      </Button>
    </Card>
  )
}

export default function PlansSummary() {
  const navigate = useNavigate()

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

        {/* items-start: cada tarjeta toma su propio alto. Sin esto, al abrir
            una la grilla estira las demás a su altura y parece que se abren
            todas a la vez. */}
        <div data-purpose="plans-grid" className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>

        {/* Beneficios comunes a los tres planes (declarados una sola vez) */}
        <div data-purpose="plans-common" className="mt-8 border-t border-borde-suave pt-4">
          <p className="text-xs font-semibold text-azul-institucional mb-1">
            Todos los planes incluyen:
          </p>
          <p className="text-xs text-gris-azulado leading-relaxed">{commonBenefits.join(' · ')}</p>
          <p className="mt-2 text-xs text-gris-azulado">{plansFootnote}</p>
        </div>

        <div className="mt-10 text-center">
          <Button
            variant="ghost"
            data-purpose="cta-explorar-planes"
            onClick={() => navigate('/planes')}
          >
            Explorar todos los planes
          </Button>
        </div>
      </Container>
    </section>
  )
}
