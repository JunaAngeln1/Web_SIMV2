/**
 * src/components/sections/PlansSummary.tsx
 *
 * Sección de planes resumidos del inicio: 3 tarjetas con color de acento
 * distinto, entrada escalonada al entrar en pantalla y acordeón de
 * diferenciadores. Los datos vienen de @/data/plans (aprobados por SIM);
 * el plan Plus lleva la insignia "Más vendido".
 */

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Check, ChevronDown, ChevronUp } from 'lucide-react'
import Card from '@/components/ui/Card'
import Container from '@/components/layout/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import { plans, commonBenefits, plansFootnote, type Plan } from '@/data/plans'
import { useInView } from '@/hooks/useInView'

/** Color de acento por plan (tokens del sistema, sin literales sueltos). */
const ACCENT: Record<Plan['id'], string> = {
  elite: 'azul-cielo',
  plus: 'verde-sim',
  'super-premium': 'azul-institucional',
}

type PlanCardProps = {
  plan: Plan
  delay: number
}

function PlanCard({ plan, delay }: PlanCardProps) {
  const { ref, visible } = useInView()
  const [open, setOpen] = useState(false)
  const listId = `plan-benefits-${plan.id}`
  const accent = ACCENT[plan.id]
  const featured = plan.featured

  return (
    <Card
      ref={ref}
      hover
      className={[
        'flex flex-col group relative z-0 border-borde-suave',
        `border-${accent}`,
        'transition-all duration-500 ease-out',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16',
        featured ? 'ring-2 ring-verde-sim/20 sm:hover:scale-[1.02]' : '',
      ].join(' ')}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Insignia "Más vendido" solo en Plus */}
      {featured && (
        <span
          data-purpose="plan-badge"
          className="absolute -top-[6px] left-1/2 -translate-x-1/2 z-10 bg-verde-sim text-white text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap"
        >
          Más vendido
        </span>
      )}

      <h3
        data-purpose="plan-name"
        className="relative z-10 font-titulos font-semibold text-lg text-azul-institucional mb-1 pt-4"
      >
        {plan.name}
      </h3>
      <p data-purpose="plan-price" className="mb-3">
        <span className={`font-titulos text-2xl font-bold text-${accent}`}>{plan.price}</span>
        <span className="text-sm text-gris-azulado"> {plan.period}</span>
      </p>
      <p data-purpose="plan-tagline" className="text-sm text-gris-azulado mb-4 relative z-10">
        {plan.tagline}
      </p>
      <ul
        id={listId}
        data-purpose="plan-benefits"
        className={[
          'flex-1 space-y-2 text-sm text-gris-azulado mb-6 relative z-10',
          open ? '' : 'hidden',
        ].join(' ')}
      >
        {plan.highlights.map((b) => (
          <li key={b} data-purpose="plan-benefit" className="flex items-start gap-2">
            <Check className={`mt-0.5 w-4 h-4 shrink-0 text-${accent}`} aria-hidden="true" />
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
        <span className="ml-2 w-4 h-4 shrink-0 transition-transform duration-300 ease-out">
          {open ? (
            <ChevronUp className="rotate-180" aria-hidden="true" />
          ) : (
            <ChevronDown aria-hidden="true" />
          )}
        </span>
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
      className="py-16 sm:py-20 bg-blanco relative overflow-hidden"
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
          {plans.map((plan, i) => (
            <PlanCard key={plan.id} plan={plan} delay={i * 120} />
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
