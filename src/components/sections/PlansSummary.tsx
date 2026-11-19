/**
 * src/components/sections/PlansSummary.tsx
 *
 * Sección de planes del inicio: 3 tarjetas con diseño de dos columnas
 * (fotografía a la izquierda, información a la derecha). Los datos vienen
 * de @/data/plans (aprobados por SIM).
 */
import { useNavigate } from 'react-router-dom'
import PlanCard from '@/components/ui/PlanCard'
import Container from '@/components/layout/Container'
import PawPattern from '@/components/ui/PawPattern'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import { plans, commonBenefits, plansFootnote, type Plan } from '@/data/plans'

/** Color de acento por plan (tokens del sistema, sin literales sueltos). */
const ACCENT: Record<Plan['id'], string> = {
  elite: 'azul-petroleo',
  plus: 'verde-corporativo',
  premium: 'azul-petroleo',
}

export default function PlansSummary() {
  const navigate = useNavigate()

  return (
    <section
      data-section="planes-resumidos"
      aria-label="Planes de atención"
      className="py-16 sm:py-20 bg-blanco relative overflow-hidden"
    >
      <PawPattern color="#054564" opacity={0.03} />
      <Container className="relative">
        <SectionHeading
          title="Planes de atención para tu mascota"
          subtitle="Elige el plan que mejor se adapte a las necesidades de tu perro o gato."
        />

        {/* Tres tarjetas en fila en escritorio, una columna en móvil */}
        <div
          data-purpose="plans-grid"
          className="grid md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
        >
          {plans.map((plan, i) => (
            <div
              key={plan.id}
              data-purpose="plan-card-wrapper"
              className={[
                'relative group',
                'transition-all duration-500 ease-out',
                'opacity-0 translate-y-16',
                'sm:opacity-100 sm:translate-y-0',
              ].join(' ')}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <PlanCard
                plan={{
                  id: plan.id,
                  name: plan.name,
                  tagline: plan.tagline,
                  image: plan.image,
                  featured: plan.featured,
                  accent: ACCENT[plan.id],
                }}
              />
            </div>
          ))}
        </div>

        {/* Beneficios comunes a los tres planes (declarados una sola vez) */}
        <div data-purpose="plans-common" className="mt-10 border-t border-borde-suave pt-6">
          <p className="text-xs font-semibold text-azul-petroleo mb-1">
            Todos los planes incluyen:
          </p>
          <p className="text-xs sm:text-sm text-gris-azulado leading-relaxed">
            {commonBenefits.join(' · ')}
          </p>
          <p className="mt-2 text-xs text-gris-azulado">{plansFootnote}</p>
        </div>

        <div className="mt-12 text-center">
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
