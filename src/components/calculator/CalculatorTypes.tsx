/**
 * src/components/calculator/CalculatorTypes.tsx
 * Tipos e interfaces compartidas para la calculadora de ahorro SIM.
 * Alineados con la estructura real de src/data/plans.ts.
 */

export interface PlanOption {
  /** Identificador único del plan */
  id: 'elite' | 'plus' | 'super-premium'
  /** Nombre comercial del plan */
  name: string
  /** Precio mensual aprobado por SIM (ej. '$63.000') */
  price: string
  /** Periodicidad (ej. '/mes') */
  period: string
  /** Beneficios y descuentos del plan (strings de highlights) */
  highlights: string[]
  /** Marca el plan como más vendido */
  featured?: boolean
}

/** Estado de la calculadora */
export interface CalculatorState {
  /** Plan actualmente seleccionado (null si ninguno) */
  selectedPlan: PlanOption | null
  /** Texto del ahorro estimado */
  savingsText: string
  /** Si el plan conviene según la lógica */
  isConvenient: boolean
}

/** Configuración de ejemplos de ahorro (fácil de cambiar para precios reales) */
export interface SavingsExample {
  /** Gasto típico mensual sin plan (ejemplo ilustrativo) */
  monthlyOutOfPocket: number
  /** Porcentaje estimado de cobertura por el plan */
  coveragePercent: number
  /** Texto descriptivo del ahorro */
  description: string
}