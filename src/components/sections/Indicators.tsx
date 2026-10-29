/**
 * src/components/sections/Indicators.tsx
 *
 * Indicadores "Conoce a la manada" con diseño aplicado.
 * Tres bloques con cifra grande, conteo progresivo al entrar en pantalla
 * (sim-diseno §8, fila "Indicadores", 700–1200 ms) y color de acento por
 * tarjeta. Cifras sujetas a verificación con SIM antes de publicar.
 */

import { useEffect, useState } from 'react'
import Container from '@/components/layout/Container'
import IconBadge from '@/components/ui/IconBadge'
import SectionHeading from '@/components/ui/SectionHeading'
import { useCountUp } from '@/hooks/useCountUp'

const indicators = [
  {
    label: 'mascotas afiliadas',
    value: 4000,
    icon: '/assets/icons/pet-plans.svg',
    accent: 'verde-sim',
  },
  {
    label: 'convenios estratégicos',
    value: 250,
    icon: '/assets/icons/allies.svg',
    accent: 'azul-cielo',
  },
  {
    label: 'familias satisfechas',
    value: 3500,
    icon: '/assets/icons/support.svg',
    accent: 'coral-suave',
  },
]

type IndicatorProps = {
  ind: (typeof indicators)[number]
  index: number
  visible: boolean
}

function IndicatorCard({ ind, index, visible }: IndicatorProps) {
  const ref = useCountUp({ finalValue: ind.value, duration: 900 })
  const delay = index * 120

  return (
    <div
      data-purpose="indicator-card"
      className={[
        'flex flex-col items-center rounded-[var(--radius-tarjeta)] border border-borde-suave bg-white p-6 shadow-suave',
        'transition-all duration-500 ease-out',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16',
      ].join(' ')}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <IconBadge icon={ind.icon} label={ind.label} value="0" accent={ind.accent} valueRef={ref} />
      <div className="mt-2 w-full" />
    </div>
  )
}

export default function Indicators() {
  const [visible, setVisible] = useState(false)

  // Entrada de las tarjetas: fade + translateY, una sola vez al montar.
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 50)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      data-section="indicadores"
      aria-label="Conoce a la manada"
      className="py-16 sm:py-20 bg-blanco relative overflow-hidden"
    >
      {/* Huellas de fondo sutiles (toque divertido, sin interacción) */}
      <div
        className="absolute -top-20 -right-20 w-64 h-64 opacity-6 pointer-events-none"
        aria-hidden="true"
      >
        <img src="/assets/icons/pet-plans.svg" alt="" className="w-full h-full rotate-12" />
      </div>
      <div
        className="absolute bottom-16 left-16 w-48 h-48 opacity-4 pointer-events-none"
        aria-hidden="true"
        style={{ transform: 'scale(0.8) rotate(-8deg)' }}
      >
        <img src="/assets/icons/pet-plans.svg" alt="" className="w-full h-full" />
      </div>

      <Container>
        <SectionHeading title="Conoce a la manada" subtitle="" align="center" />
        <div data-purpose="indicators-grid" className="grid md:grid-cols-3 gap-6">
          {indicators.map((ind, i) => (
            <IndicatorCard key={ind.label} ind={ind} index={i} visible={visible} />
          ))}
        </div>
        <p data-purpose="indicators-note" className="mt-12 text-center text-sm text-gris-azulado">
          Cifras sujetas a verificación con SIM antes de publicar.
        </p>
      </Container>
    </section>
  )
}
