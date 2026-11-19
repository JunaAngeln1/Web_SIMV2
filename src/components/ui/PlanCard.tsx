/**
 * src/components/ui/PlanCard.tsx
 *
 * Tarjeta de plan con diseño de dos columnas (Guía de diseño).
 * Columna izquierda (45%): fotografía de la mascota recortada.
 * Columna derecha (55%): información del plan organizada verticalmente.
 * Bordes redondeados 22–26 px, fondo gris azulado claro, sin sombras fuertes.
 */

import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'

interface PlanCardProps {
  plan: {
    id: string
    name: string
    tagline: string
    image: string
    featured?: boolean
    accent: string
  }
}

export default function PlanCard({ plan }: PlanCardProps) {
  const isPlus = plan.featured
  const accentColor = plan.accent // 'azul-petroleo' | 'verde-corporativo'

  return (
    <article
      data-purpose="plan-card"
      className={[
        'relative flex flex-col lg:flex-row gap-0 rounded-[24px] border overflow-hidden bg-gris-claro transition-colors duration-300',
        isPlus
          ? 'border-2 border-verde-corporativo bg-gris-claro hover:bg-gris-claro/90'
          : `border-${accentColor} hover:border-${accentColor}/60`,
      ].join(' ')}
    >
      {/* Columna izquierda: fotografía (45%) */}
      <div
        data-purpose="plan-image"
        className="relative w-full h-[320px] lg:w-[45%] lg:h-full overflow-hidden flex-shrink-0"
      >
        <img
          src={plan.image}
          alt={`Perro del plan ${plan.name}`}
          data-purpose="plan-photo"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Columna derecha: información (55%) */}
      <div data-purpose="plan-info" className="w-full lg:w-[55%] p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
        <div data-purpose="plan-content" className="flex flex-col gap-3">
          {/* Texto pequeño: "Plan" */}
          <span
            data-purpose="plan-label"
            className="text-[11px] uppercase tracking-wider font-semibold text-azul-petroleo"
          >
            Plan
          </span>

          {/* Insignia "Más completo" solo en Plus */}
          {isPlus && (
            <span
              data-purpose="plan-badge"
              className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-verde-corporativo text-white text-[10px] font-bold uppercase tracking-wider"
            >
              Más completo
            </span>
          )}

          {/* Nombre del plan: grande, negrita, azul petróleo */}
          <h3
            data-purpose="plan-name"
            className="font-titulos font-bold text-2xl sm:text-3xl text-azul-petroleo leading-tight"
          >
            {plan.name}
          </h3>

          {/* Descripción: breve, máximo 2-3 líneas */}
          <p
            data-purpose="plan-description"
            className="text-sm sm:text-base text-gris-azulado leading-relaxed line-clamp-3"
          >
            {plan.tagline}
          </p>
        </div>

        {/* Botón: "Ver beneficios" con flecha, blanco con borde azul */}
        <div className="mt-auto pt-6 sm:pt-8">
          <Button
            variant="secondary"
            size="lg"
            data-purpose="cta-ver-beneficios"
            className="w-full px-10"
          >
            Ver beneficios{' '}
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </article>
  )
}
