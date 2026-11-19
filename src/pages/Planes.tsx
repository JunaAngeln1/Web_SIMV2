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
import PageHero from '@/components/ui/PageHero'
import PawPattern from '@/components/ui/PawPattern'
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
    precio: 'text-verde-corporativo',
    icono: 'text-verde-corporativo',
    borde: 'border-verde-corporativo border-2',
    boton: 'bg-verde-corporativo text-white hover:bg-[#528d0a]',
  },
  premium: {
    nombre: 'text-azul-petroleo',
    precio: 'text-azul-petroleo',
    icono: 'text-azul-petroleo',
    borde: 'border-azul-petroleo/50 border',
    boton: 'bg-white border border-azul-petroleo text-azul-petroleo hover:bg-azul-petroleo hover:text-white',
  },
}

/** Iconos minimalistas de protección/salud animal por plan. */
const PLAN_ICONS: Record<(typeof plans)[number]['id'], React.ElementType> = {
  elite: ShieldCheck,
  plus: Heart,
  premium: Shield,
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
        'bg-blanco rounded-[var(--radius-tarjeta)] shadow-suave p-[26px]',
        colors.borde,
        'transition-all duration-200 ease-out',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16',
        'group-hover:shadow-suave group-hover:-translate-y-1',
        isPlus
          ? 'lg:scale-[1.04] lg:z-10 shadow-suave ring-2 ring-verde-corporativo/30 bg-verde-pastel/30'
          : '',
      ].join(' ')}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Etiqueta "Recomendado" solo en Plan Plus */}
      {isPlus && (
        <span
          data-purpose="plan-badge"
          className="absolute -top-[10px] left-1/2 -translate-x-1/2 z-20 bg-verde-corporativo text-white text-[11px] font-bold px-4 py-1 rounded-full whitespace-nowrap shadow-suave tracking-wide uppercase"
        >
          Más completo
        </span>
      )}

      {/* Icono minimalista de protección o salud */}
      <div
        className={[
          'flex items-center justify-center w-[34px] h-[34px] rounded-full mb-[18px]',
          isPlus ? 'bg-verde-corporativo/15' : 'bg-azul-niebla',
        ].join(' ')}
      >
        <Icon className={['w-[20px] h-[20px]', colors.icono].join(' ')} aria-hidden="true" />
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
        <span className={['font-titulos text-[28px] font-bold', colors.precio].join(' ')}>
          {plan.price}
        </span>
        <span className="text-[13px] text-azul-grisaceo ml-[2px]">COP / mes</span>
      </div>

      {/* Lista de beneficios con iconos de verificación */}
      <ul data-purpose="plan-benefits" className="flex-1 space-y-[11px] mb-[24px]">
        {plan.fullBenefits.map((b) => (
          <li key={b} data-purpose="plan-benefit" className="flex items-start gap-[8px]">
            <Check
              className="mt-[1px] w-[14px] h-[14px] shrink-0 text-verde-corporativo"
              aria-hidden="true"
            />
            <span className="text-sm leading-[1.5] text-gris-azulado">{b}</span>
          </li>
        ))}
      </ul>

      {/* Botón inferior */}
      <button
        data-purpose="cta-conocer-plan"
        className={[
          'w-full h-[48px] rounded-[var(--radius-pildora)] font-semibold text-sm flex items-center justify-center transition-all duration-200 ease-out',
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
      <PageHero
        title="Planes de atención"
        subtitle="Compara los planes Élite, Plus y Premium: qué incluye cada uno y sus descuentos en servicios veterinarios."
      />
      <div className="relative overflow-hidden">
        <PawPattern color="#054564" opacity={0.025} />
        <Container>
          <section
            data-section="planes-comparativa"
            aria-label="Comparativa de planes"
            className="relative mt-10"
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
