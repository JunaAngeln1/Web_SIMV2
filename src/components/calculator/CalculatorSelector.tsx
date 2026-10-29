/**
 * src/components/calculator/CalculatorSelector.tsx
 * Selector de planes para la calculadora de ahorro SIM.
 * Solo permite cambiar de plan (dropdown visual con botones tarjeta).
 * Estilo: colores azules institucionales y verdes de éxito.
 * Componente reutilizable y exportable.
 */

import { useState } from 'react'
import type { PlanOption } from '@/components/calculator/CalculatorTypes'
import Button from '@/components/ui/Button'
import Container from '@/components/layout/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import { CalculatorDisplay } from '@/components/calculator/CalculatorDisplay'

/**
 * Props:
 *  - plans: PlanOption[] — datos de src/data/plans.ts
 *  - onSelect?: (plan: PlanOption) => void — callback cuando el usuario elige un plan
 */
export interface CalculatorSelectorProps {
  plans: PlanOption[]
  onSelect?: (plan: PlanOption) => void
}

/**
 * Selector visual: botones tarjeta para cada plan.
 * Al hacer clic en un plan se actualiza el estado padre y se muestra el ahorro.
 */
export function CalculatorSelector({ plans, onSelect }: CalculatorSelectorProps) {
  const [selectedPlan, setSelectedPlan] = useState<PlanOption | null>(null)

  const handleSelect = (plan: PlanOption) => {
    setSelectedPlan(plan)
    onSelect?.(plan)
  }

  return (
    <Container className="mt-12">
      <SectionHeading
        title="Calculadora de ahorro estimado"
        subtitle="Selecciona un plan para ver cuánto podrías ahorrar con SIM"
        align="center"
      />

      {/* Selector visual: botones tarjeta para cada plan */}
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {plans.map((plan) => (
          <Button
            key={plan.id}
            variant="secondary"
            size="lg"
            onClick={() => handleSelect(plan)}
            className={[
              'w-full',
              'justify-center',
              'rounded-[var(--radius-tarjeta)]',
              'border',
              'border-borde-suave',
              'hover:bg-[--color-azul-muy-claro]',
              'hover:border-[--color-azul-cielo]',
              'transition-colors duration-300',
              'shadow-suave',
              selectedPlan?.id === plan.id
                ? 'ring-2 ring-[--color-azul-institucional] bg-[--color-azul-muy-claro]'
                : '',
            ].filter(Boolean).join(' ')}
          >
            <span className="flex flex-col items-center gap-2">
              <span className="font-medium text-texto-principal">{plan.name}</span>
              <span className="text-lg font-bold text-azul-institucional">
                {plan.price} {plan.period}
              </span>
            </span>
          </Button>
        ))}
      </div>

      {/* Área de resultado: solo visible cuando hay un plan seleccionado */}
      {selectedPlan && <CalculatorDisplay plan={selectedPlan} />}
    </Container>
  )
}