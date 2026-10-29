/**
 * src/components/calculator/CalculatorDisplay.tsx
 * Área de muestra del ahorro estimado después de seleccionar un plan.
 * Muestra: precio mensual, ahorro estimado, beneficios con descuentos.
 * Diseño estético con tokens azules y verdes del sistema.
 * Componente reutilizable y exportable.
 */

import Card from '@/components/ui/Card'
import Container from '@/components/layout/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import type { PlanOption } from '@/components/calculator/CalculatorTypes'

/**
 * Configuración de ejemplos de ahorro por plan.
 * Fácil de cambiar para precios reales cuando SIM los apruebe.
 */
const SAVINGS_EXAMPLES: Record<PlanOption['id'], { monthlyOutOfPocket: number; description: string }> = {
  elite: {
    monthlyOutOfPocket: 150000,
    description: 'Ejemplo: consultas y procedimientos sueltos sin plan.',
  },
  plus: {
    monthlyOutOfPocket: 200000,
    description: 'Ejemplo: gastos veterinarios típicos con beneficios Plus.',
  },
  'super-premium': {
    monthlyOutOfPocket: 300000,
    description: 'Ejemplo: cobertura amplia con medicamentos y cirugías incluidas.',
  },
}

/**
 * Calcula el ahorro estimado basado en ejemplos genéricos y descuentos del plan.
 * Los números son ilustrativos, no valores comerciales reales.
 */
function calcularAhorro(plan: PlanOption): { texto: string; esConveniente: boolean } {
  const example = SAVINGS_EXAMPLES[plan.id]

  // Precio del plan (quitar $ y puntos para obtener número)
  const precioPlan = parseInt(plan.price.replace('$', '').replace('.', ''))

  // Ahorro estimado = gasto sin plan - precio del plan
  const ahorroNeto = Math.round(example.monthlyOutOfPocket - precioPlan)

  const esConveniente = ahorroNeto > 0
  const textoAhorro = esConveniente
    ? `Ahorras approx. $${ahorroNeto.toLocaleString()} al mes`
    : 'Consultar casos particulares'

  return { texto: textoAhorro, esConveniente }
}

/**
 * Componente de display de la calculadora.
 * Recibe un PlanOption y muestra ahorro estimado + beneficios.
 */
export function CalculatorDisplay({ plan }: { plan: PlanOption }) {
  const { texto: ahorroTexto, esConveniente } = calcularAhorro(plan)

  return (
    <Container className="mt-16 p-8 bg-[--color-azul-muy-claro] rounded-[var(--radius-tarjeta)] shadow-suave">
      <SectionHeading
        title={plan.name}
        subtitle={`${plan.price} ${plan.period}`}
        align="center"
      />

      {/* Badge de conveniencia usando span con clases (no existe Badge component) */}
      <div className="mt-6 text-center">
        <span
          className={[
            'inline-block px-6 py-2 rounded-full text-sm font-medium',
            esConveniente
              ? 'text-verde-sim bg-verde-sim/15 border border-verde-sim/30'
              : 'text-azul-institucional bg-azul-institucional/15 border border-azul-institucional/30',
          ].filter(Boolean).join(' ')}
        >
          {esConveniente ? '¿Te conviene? Sí' : '¿Te conviene? Consular'}
        </span>
      </div>

      {/* Texto del ahorro estimado */}
      <p className="mt-4 text-lg text-gris-azulado leading-relaxed text-center">
        {ahorroTexto}
      </p>

      {/* Beneficios con descuentos (usando highlights reales de plans.ts) */}
      <Card padded className="mt-6">
        <SectionHeading
          title="Beneficios con descuentos incluidos"
          subtitle="Según los datos oficiales de cada plan"
          align="center"
        />
        <ul className="mt-4 space-y-2">
          {plan.highlights.map((highlight, i) => (
            <li key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white border border-borde-suave shadow-suave">
              <span className="w-3 h-3 rounded-full bg-[--color-verde-sim] shrink-0"></span>
              <span className="text-sm text-gris-azulado leading-relaxed">
                {highlight}
              </span>
            </li>
          ))}
        </ul>
      </Card>
    </Container>
  )
}