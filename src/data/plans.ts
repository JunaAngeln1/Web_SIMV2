/**
 * src/data/plans.ts
 *
 * Planes de atención aprobados por SIM (precios mensuales, coberturas y
 * descuentos oficiales). Es la fuente única de verdad: la consume la sección
 * de resumen del inicio y la página /planes.
 *
 * Regla crítica (data/README.md): no inventar precios, coberturas, topes ni
 * descuentos. Cualquier cambio pasa por aquí, nunca por los componentes.
 *
 * Los ítems marcados con * en `highlightsText` remiten a la nota de términos.
 */

export interface Plan {
  id: 'elite' | 'plus' | 'super-premium'
  name: string
  /** Precio mensual aprobado por SIM. */
  price: string
  /** Periodicidad mostrada junto al precio. */
  period: string
  /** Descripción corta del plan. */
  tagline: string
  /** Diferenciadores del plan (lo que lo distingue de los otros). */
  highlights: string[]
}

/**
 * Beneficios comunes a los tres planes: se declaran una sola vez para no
 * repetir 10 ítems por tarjeta.
 */
export const commonBenefits = [
  'Urgencias 24/7 gratuitas e ilimitadas',
  'Consulta a domicilio, virtual y en IPS aliadas ilimitadas',
  'Controles derivados y chequeos trimestrales de prevención',
  'Campañas de bienestar preventivas y acceso exclusivo a la APP de SIM',
  '100% cobertura servicio funerario*',
  'Línea de orientación preventiva 24/7',
]

export const plans: Plan[] = [
  {
    id: 'elite',
    name: 'Plan Elite',
    price: '$63.000',
    period: '/mes',
    tagline:
      'Protege a tu peludito ante eventos inesperados y accede a descuentos en servicios veterinarios.',
    highlights: [
      'Inyectología de estabilización hasta $20.000',
      'Consulta especialista 10% dcto.',
      'Exámenes de laboratorio 5%–20% · rayos X y ecografías 5%–10% dcto.',
      'Hospitalización y procedimientos y cirugías 5%–10% dcto.',
    ],
  },
  {
    id: 'plus',
    name: 'Plan Plus',
    price: '$102.000',
    period: '/mes',
    tagline:
      'La solución ideal para prevenir enfermedades en tu peludito antes de que ocurran y sin pagar de más.',
    highlights: [
      'Inyectología de estabilización hasta $30.000 · consulta especialista 20% dcto.',
      'Exámenes de laboratorio 20%–70% · rayos X y ecografías 10%–20% dcto.',
      'Hospitalización y procedimientos y cirugías 10%–20% dcto.',
      'Desparasitación externa y interna* y refuerzo anual de vacunación*',
    ],
  },
  {
    id: 'super-premium',
    name: 'Plan Super Premium',
    price: '$220.000',
    period: '/mes',
    tagline:
      'El primer sistema de salud para perros y gatos, con medicamentos del POS de SIM incluidos.',
    highlights: [
      'Inyectología de estabilización hasta $40.000 · consulta especialista 60% cobertura',
      'Medicamentos, primovacunación y refuerzo anual de vacunación*',
      'Desparasitación externa y interna* incluida',
      'Exámenes de laboratorio, rayos X y ecografías, hospitalización y cirugías*',
    ],
  },
]

/** Nota legal para los ítems marcados con *. */
export const plansFootnote = '*Aplican términos y condiciones del plan.'
