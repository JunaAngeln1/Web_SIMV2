/**
 * src/pages/Planes.tsx
 * Página /planes: comparativa de los 3 planes aprobados por SIM
 * (datos desde @/data/plans). Cada tarjeta lleva su color de acento,
 * entrada escalonada y el plan Plus destaca como "Más completo".
 * El botón "Conocer el plan" abre el PDF oficial de cada plan.
 */

import { ArrowRight, Check } from 'lucide-react'
import Container from '@/components/layout/Container'
import Header from '@/components/layout/Header'
import PageHero from '@/components/ui/PageHero'
import { plans, commonBenefits, plansFootnote } from '@/data/plans'
import { useInView } from '@/hooks/useInView'

/** Colores por plan según identidad visual SIM (tokens del sistema). */
const PLAN_COLORS: Record<
  (typeof plans)[number]['id'],
  { nombre: string; precio: string; icono: string; borde: string; boton: string }
> = {
  elite: {
    nombre: 'text-azul-petroleo',
    precio: 'text-azul-petroleo',
    icono: 'text-azul-petroleo',
    borde: 'border-azul-petroleo/50 border',
    boton: 'bg-white border border-azul-petroleo text-azul-petroleo hover:bg-azul-petroleo hover:text-white',
  },
  plus: {
    nombre: 'text-azul-petroleo',
    precio: 'text-verde-interactivo',
    icono: 'text-verde-corporativo',
    borde: 'border-verde-corporativo border-2',
    boton: 'bg-verde-interactivo text-white hover:bg-verde-interactivo-hover',
  },
  premium: {
    nombre: 'text-azul-petroleo',
    precio: 'text-azul-petroleo',
    icono: 'text-azul-petroleo',
    borde: 'border-azul-petroleo/50 border',
    boton: 'bg-white border border-azul-petroleo text-azul-petroleo hover:bg-azul-petroleo hover:text-white',
  },
}

/** PDF oficial de cada plan (el de Premium se llama super-premium.pdf). */
const PLAN_PDF: Record<(typeof plans)[number]['id'], string> = {
  elite: '/pdfs/elite.pdf',
  plus: '/pdfs/plus.pdf',
  premium: '/pdfs/super-premium.pdf',
}

/** Síntesis breve de los diferenciadores aprobados en los datos de cada plan. */
const PLAN_SUMMARIES: Record<(typeof plans)[number]['id'], string[]> = {
  elite: [
    'Inyectología de estabilización hasta $20.000',
    '10% de descuento en consulta con especialista',
    'Descuentos en exámenes, imágenes, hospitalización y cirugía',
  ],
  plus: [
    'Inyectología hasta $30.000 y descuento en especialistas',
    'Hasta 70% de descuento en exámenes de laboratorio',
    'Desparasitación y refuerzo anual de vacunación*',
  ],
  premium: [
    'Inyectología hasta $40.000 y cobertura en especialistas',
    'Vacunación, desparasitación y medicamentos incluidos*',
    'Hospitalización hasta 4 noches y cirugías hasta $600.000',
  ],
}

function PlanCard({ plan, delay }: { plan: (typeof plans)[number]; delay: number }) {
  const { ref, visible } = useInView()
  const colors = PLAN_COLORS[plan.id]
  const isPlus = plan.id === 'plus'

  return (
    <div
      ref={ref}
      className={[
        'group relative h-full transition-all duration-300 ease-out',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
        'hover:-translate-y-1',
      ].join(' ')}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Etiqueta "Recomendado" solo en Plan Plus */}
      {isPlus && (
        <span
          data-purpose="plan-badge"
          className="absolute -right-2.5 -top-3 z-20 rounded-full bg-verde-interactivo px-3.5 py-1.5 text-[10px] font-semibold leading-none text-white shadow-suave sm:text-[11px]"
        >
          Más completo
        </span>
      )}

      <article
        data-purpose="plan-card"
        data-plan={plan.id}
        className={[
          'h-full overflow-hidden rounded-[24px] border bg-gris-plan shadow-suave transition-shadow duration-300 group-hover:shadow-medio',
          colors.borde,
          isPlus ? 'ring-2 ring-verde-corporativo/20' : '',
        ].join(' ')}
      >
        {/* Cabecera tipo Home: fotografía y resumen horizontal */}
        <div className="flex min-h-[190px] sm:min-h-[205px]">
          <div className="w-[40%] shrink-0 overflow-hidden sm:w-[42%]">
            <img
              src={plan.image}
              alt={`Mascota del plan ${plan.name}`}
              className="h-full min-h-[205px] w-full object-cover object-center"
              loading="lazy"
            />
          </div>
          <div className="flex min-w-0 flex-1 flex-col items-start p-4 sm:p-5">
            <span className="text-xs leading-none text-azul-petroleo">Plan</span>
            <h2 data-purpose="plan-name" className={`mt-1.5 font-titulos text-[24px] font-bold leading-tight sm:text-[28px] ${colors.nombre}`}>
              {plan.name}
            </h2>
            <p className="mt-2 line-clamp-3 text-[13px] leading-relaxed text-texto-principal">
              {plan.tagline}
            </p>
            <div className="mt-auto pt-3">
              <span className={`font-titulos text-xl font-bold sm:text-2xl ${colors.precio}`}>{plan.price}</span>
              <span className="ml-1 text-[11px] text-gris-azulado">COP / mes</span>
            </div>
            <a
              data-purpose="cta-conocer-plan"
              href={PLAN_PDF[plan.id]}
              target="_blank"
              rel="noopener noreferrer"
              className={`group/cta mt-3 inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-full px-3 text-xs font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-azul-petroleo focus-visible:ring-offset-2 sm:text-sm ${colors.boton}`}
            >
              Ver plan completo (PDF)
              <ArrowRight className="h-4 w-4 transition-transform group-hover/cta:translate-x-1" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="border-t border-borde-suave bg-white p-5 sm:p-6">
          <h3 className="mb-4 font-titulos text-base font-semibold text-azul-petroleo">Beneficios destacados</h3>
          <ul data-purpose="plan-benefits" className="space-y-3">
            {PLAN_SUMMARIES[plan.id].map((benefit) => (
              <li key={benefit} data-purpose="plan-benefit" className="flex items-start gap-2.5">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-verde-interactivo" aria-hidden="true" />
                <span className="text-[13px] leading-relaxed text-gris-azulado">{benefit}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 mb-0 border-t border-borde-suave pt-4 text-xs leading-relaxed text-gris-azulado">
            Consulta el PDF adjunto para conocer el detalle completo y las condiciones del plan.
            {plan.id !== 'elite' && <span> *Aplican términos y condiciones.</span>}
          </p>
        </div>
      </article>
    </div>
  )
}

export default function Planes() {
  return (
    <main data-page="planes" className="pt-[80px] sm:pt-[96px] pb-16 sm:pb-20">
      <Header />
      <PageHero
        title="Nuestros planes"
        subtitle="Elige la protección que mejor se adapta a las necesidades de tu mascota. Compara sus beneficios y encuentra el plan para tu familia."
      />
      <div className="relative">
        <Container>
          <section
            data-section="planes-comparativa"
            aria-label="Comparativa de planes"
            className="relative mt-8 sm:mt-10"
          >
            {/* Tres tarjetas en fila en desktop, dos en tablet, una en móvil */}
            <div
              data-purpose="plans-grid"
              className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-5 xl:gap-6"
            >
              {plans.map((plan, i) => (
                <PlanCard key={plan.id} plan={plan} delay={i * 120} />
              ))}
            </div>

            {/* Beneficios comunes a los tres planes (declarados una sola vez) */}
            <div data-purpose="plans-common" className="mt-[26px] border-t border-borde-suave pt-4">
              <p className="text-sm font-semibold text-azul-petroleo mb-1">
                Todos los planes incluyen:
              </p>
              <p className="text-sm text-gris-azulado leading-[1.5]">
                {commonBenefits.join(' · ')}
              </p>
              <p className="mt-[24px] text-xs text-gris-azulado">{plansFootnote}</p>
            </div>
          </section>
        </Container>
      </div>
    </main>
  )
}
