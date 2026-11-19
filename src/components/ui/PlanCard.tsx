/**
 * src/components/ui/PlanCard.tsx
 *
 * Tarjeta de plan con diseño de dos columnas (Guía de diseño).
 * Columna izquierda (50%): fotografía de la mascota recortada.
 * Columna derecha (50%): información del plan organizada verticalmente.
 * Bordes redondeados 22–26 px, fondo gris azulado claro, sombras suaves.
 * Plus: borde grueso verde y botón verde. Élite/Premium: sombra suave y botón blanco con borde azul.
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

  return (
    <article
      data-purpose="plan-card"
      className={[
        'relative flex flex-col lg:flex-row gap-0 rounded-[24px] overflow-hidden transition-all duration-300',
        // Todas las tarjetas mismo tamaño: altura completa
        'h-full flex flex-col',
        // Fondo según plan
        isPlus
          ? // Plus: fondo degradado verde a blanco suave, borde grueso verde
            'bg-gradient-to-b from-verde-corporativo/10 to-blanco border-4 border-verde-corporativo shadow-[0_4px_18px_rgba(101,157,13,0.15)] hover:shadow-[0_6px_24px_rgba(101,157,13,0.25)]'
          : // Élite y Premium: fondo gris azulado claro, sombra suave
            'bg-gris-claro shadow-suave hover:shadow-medio border border-transparent hover:border-azul-petroleo/30',
      ].join(' ')}
    >
      {/* Columna izquierda: fotografía (50% - mitad de la tarjeta) */}
      <div
        data-purpose="plan-image"
        className="relative w-full h-[320px] lg:w-[50%] lg:h-full overflow-hidden flex-shrink-0"
      >
        <img
          src={plan.image}
          alt={`Mascota del plan ${plan.name}`}
          data-purpose="plan-photo"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Columna derecha: información (50%) */}
      <div
        data-purpose="plan-info"
        className="w-full lg:w-[50%] lg:h-full p-8 sm:p-10 lg:p-12 flex flex-col justify-between"
      >
        <div data-purpose="plan-content" className="flex flex-col gap-4">
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
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-verde-corporativo text-white text-[11px] font-bold uppercase tracking-wider"
            >
              Más completo
            </span>
          )}

          {/* Nombre del plan: grande, negrita, azul petróleo */}
          <h3
            data-purpose="plan-name"
            className="font-titulos font-bold text-3xl sm:text-4xl text-azul-petroleo leading-tight"
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

        {/* Botón: "Ver beneficios" con flecha, texto en una sola línea */}
        <div className="mt-auto pt-8 sm:pt-10">
          <Button
            variant={isPlus ? 'primary' : 'secondary'}
            size="lg"
            data-purpose="cta-ver-beneficios"
            className="w-full px-12 whitespace-nowrap"
          >
            {'Ver beneficios'}
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </article>
  )
}
