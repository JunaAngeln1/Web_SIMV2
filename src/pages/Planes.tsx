/**
 * src/pages/Planes.tsx
 * Página /planes: comparativa de los 3 planes aprobados por SIM
 * (datos desde @/data/plans) + calculadora de ahorro estimado.
 * Cada tarjeta lleva su color de acento, entrada escalonada y el plan
 * Plus destaca como "Recomendado".
 * Incluye calculadora interactiva: selector de planes y muestra
 * ahorro estimado + beneficios con descuentos reales.
 */

import { Check, ShieldCheck, Heart, Shield } from 'lucide-react'
import Container from '@/components/layout/Container'
import Header from '@/components/layout/Header'
import SectionHeading from '@/components/ui/SectionHeading'
import { plans, commonBenefits, plansFootnote } from '@/data/plans'
import { useInView } from '@/hooks/useInView'
import { LandingCalculator } from '@/components/calculator/LandingCalculator'

/** Colores por plan según identidad visual SIM. */
const PLAN_COLORS: Record<(typeof plans)[number]['id'], { nombre: string; precio: string; icono: string; borde: string; boton: string }> = {
  elite: {
    nombre: 'text-[#03497D]',
    precio: 'text-[#03497D]',
    icono: 'text-[#03497D]',
    borde: 'border-[#7F9DB8]/50 border',
    boton: 'bg-white border border-[#03497D] text-[#03497D] hover:bg-[#03497D] hover:text-white',
  },
  plus: {
    nombre: 'text-[#03497D]',
    precio: 'text-[#8BA533]',
    icono: 'text-[#8BA533]',
    borde: 'border-[#8BA533] border-2',
    boton: 'bg-[#8BA533] text-white hover:bg-[#7a8a2a]',
  },
  'super-premium': {
    nombre: 'text-[#03497D]',
    precio: 'text-[#03497D]',
    icono: 'text-[#03497D]',
    borde: 'border-[#7F9DB8]/50 border',
    boton: 'bg-white border border-[#03497D] text-[#03497D] hover:bg-[#03497D] hover:text-white',
  },
}

/** Iconos minimalistas de protección/salud animal por plan. */
const PLAN_ICONS: Record<(typeof plans)[number]['id'], React.ElementType> = {
  elite: ShieldCheck,
  plus: Heart,
  'super-premium': Shield,
}

function PlanCard({ plan, delay }: { plan: (typeof plans)[number]; delay: number }) {
  const { ref, visible } = useInView()
  const colors = PLAN_COLORS[plan.id]
  const Icon = PLAN_ICONS[plan.id]
  const isPlus = plan.id === 'plus'

  return (
    <div
      ref={ref}
      className={[
        'flex flex-col group relative h-full',
        'bg-blanco rounded-[16px] shadow-suave p-[26px]',
        colors.borde,
        'transition-all duration-200 ease-out',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16',
        'group-hover:shadow-medio',
      ].join(' ')}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Etiqueta "Recomendado" solo en Plan Plus */}
      {isPlus && (
        <span
          data-purpose="plan-badge"
          className="absolute -top-[6px] left-1/2 -translate-x-1/2 z-10 bg-[#8BA533] text-white text-[11px] font-semibold px-3 py-0.5 rounded-full whitespace-nowrap"
        >
          Recomendado
        </span>
      )}

      {/* Icono minimalista de protección o salud */}
      <div className="flex items-center justify-center w-[34px] h-[34px] rounded-full bg-[#E8EEF3] mb-[18px]">
        <Icon className="w-[20px] h-[20px]" aria-hidden="true" />
      </div>

      {/* Nombre del plan */}
      <h3
        data-purpose="plan-name"
        className={[
          'font-titulos font-semibold text-[19px] mb-[10px] leading-tight',
          colors.nombre,
        ].join(' ')}
      >
        {plan.name}
      </h3>

      {/* Precio mensual */}
      <div className="mb-[24px]">
        <span
          className={[
            'font-titulos text-[28px] font-bold',
            colors.precio,
          ].join(' ')}
        >
          {plan.price}
        </span>
        <span className="text-[13px] text-[#7F9DB8] ml-[2px]">COP / mes</span>
      </div>

      {/* Lista de beneficios con iconos de verificación */}
      <ul
        data-purpose="plan-benefits"
        className="flex-1 space-y-[11px] mb-[24px]"
      >
        {plan.highlights.map((b) => (
          <li key={b} data-purpose="plan-benefit" className="flex items-start gap-[8px]">
            <Check
              className="mt-[1px] w-[14px] h-[14px] shrink-0 text-[#8BA533]"
              aria-hidden="true"
            />
            <span className="text-[14px] leading-[1.5] text-[#64748b]">{b}</span>
          </li>
        ))}
      </ul>

      {/* Botón inferior */}
      <button
        data-purpose="cta-conocer-plan"
        className={[
          'w-full h-[44px] rounded-[10px] font-semibold text-[14px] flex items-center justify-center transition-all duration-200 ease-out',
          colors.boton,
        ].join(' ')}
        onClick={() => window.open(`/pdfs/${plan.id}.pdf`, '_blank')}
      >
        Conocer el plan
      </button>
    </div>
  )
}

export default function Planes() {
  return (
    <main data-page="planes" className="pt-[80px] sm:pt-[96px] pb-16 sm:pb-20">
      <Header />
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
          {/* Tres tarjetas en fila en desktop, dos en tablet, una en móvil */}
          <div
            data-purpose="plans-grid"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[22px] items-start"
          >
            {plans.map((plan, i) => (
              <PlanCard key={plan.id} plan={plan} delay={i * 120} />
            ))}
          </div>

          {/* Beneficios comunes a los tres planes (declarados una sola vez) */}
          <div data-purpose="plans-common" className="mt-[26px] border-t border-borde-suave pt-4">
            <p className="text-sm font-semibold text-azul-institucional mb-1">
              Todos los planes incluyen:
            </p>
            <p className="text-sm text-gris-azulado leading-[1.5]">
              {commonBenefits.join(' · ')}
            </p>
            <p className="mt-[24px] text-xs text-gris-azulado">{plansFootnote}</p>
          </div>
        </section>

        {/* Calculadora de ahorro estimado: Landing Calculator */}
        <LandingCalculator className="mt-12" />
      </Container>
    </main>
  )
}
