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
 * `highlights` es el resumen corto que usa el acordeón del inicio.
 * `fullBenefits` es el listado completo oficial que muestran las tarjetas de
 * la página /planes (extraído de los PDF de cada plan en public/pdfs/).
 *
 * Los ítems marcados con * en `highlightsText` remiten a la nota de términos.
 */

export interface Plan {
  id: 'elite' | 'plus' | 'premium'
  name: string
  /** Precio mensual aprobado por SIM. */
  price: string
  /** Periodicidad mostrada junto al precio. */
  period: string
  /** Descripción corta del plan. */
  tagline: string
  /** Diferenciadores del plan (lo que lo distingue de los otros). */
  highlights: string[]
  /** Listado completo de beneficios oficiales (página /planes). */
  fullBenefits: string[]
  /** Marca el plan destacado (Más vendido). */
  featured?: boolean
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
    name: 'Élite',
    price: '$63.000',
    period: '/mes',
    tagline:
      'Asistencia veterinaria esencial para su bienestar.',
    highlights: [
      'Inyectología de estabilización hasta $20.000',
      'Consulta especialista 10% dcto.',
      'Exámenes de laboratorio 5%–20% · rayos X y ecografías 5%–10% dcto.',
      'Hospitalización y procedimientos y cirugías 5%–10% dcto.',
    ],
    fullBenefits: [
      'Consultas por urgencias vitales 24/7 gratuitas en IPS aliadas (no aplica a domicilio)',
      'Consultas domiciliarias gratuitas e ilimitadas',
      'Consultas en IPS autorizadas gratuitas e ilimitadas por medicina general',
      'Consultas virtuales gratuitas e ilimitadas (videollamada, llamada o chat)',
      'Controles veterinarios gratuitos derivados de consultas previas',
      'Chequeos preventivos de promoción y prevención gratuitos cada 3 meses',
      'Campañas preventivas de bienestar y tenencia responsable',
      'Cobertura del 100% en consultas por urgencias vitales a nivel nacional',
      'Acceso exclusivo a la APP de SIM (historial médico, citas y recordatorios)',
      'Servicio funerario incluido sin costo adicional (cobertura según ciudad)',
      'Inyectología requerida para la estabilización durante la consulta',
      'Consulta con especialistas: 5%–10% de descuento',
      'Exámenes de laboratorio: 5%–10% de descuento',
      'Rayos X y ecografía: 5%–10% de descuento',
      'Hospitalización: 5%–10% de descuento',
      'Procedimientos y cirugías: 5%–10% de descuento',
      'Acompañamiento continuo por canales oficiales en horario laboral',
    ],
  },
  {
    id: 'plus',
    name: 'Plus',
    price: '$102.000',
    period: '/mes',
    featured: true,
    tagline:
      'Bienestar y prevención para una vida saludable.',
    highlights: [
      'Inyectología de estabilización hasta $30.000 · consulta especialista 20% dcto.',
      'Exámenes de laboratorio 20%–70% · rayos X y ecografías 10%–20% dcto.',
      'Hospitalización y procedimientos y cirugías 10%–20% dcto.',
      'Desparasitación externa e interna* y refuerzo anual de vacunación*',
    ],
    fullBenefits: [
      'Consultas por urgencias vitales 24/7 gratuitas en IPS aliadas (no aplica a domicilio)',
      'Consultas domiciliarias gratuitas e ilimitadas',
      'Consultas en IPS autorizadas gratuitas e ilimitadas por medicina general',
      'Consultas virtuales gratuitas e ilimitadas (videollamada, llamada o chat)',
      'Controles veterinarios gratuitos derivados de consultas previas',
      'Chequeos preventivos de promoción y prevención gratuitos cada 3 meses',
      'Campañas preventivas de bienestar y tenencia responsable',
      'Cobertura del 100% en consultas por urgencias vitales a nivel nacional',
      'Acceso exclusivo a la APP de SIM (historial médico, citas y recordatorios)',
      'Servicio funerario incluido sin costo adicional (cobertura según ciudad)',
      'Inyectología requerida para la estabilización durante la consulta',
      'Consulta con especialistas: 10%–20% de descuento',
      'A partir de los 90 días: desparasitación externa periódica, vacunación anual completa y 70% en exámenes de laboratorio clave',
      'Exámenes de laboratorio no incluidos: 5%–20% de descuento',
      'Rayos X y ecografía: 10%–20% de descuento',
      'Hospitalización: 10%–20% de descuento',
      'Procedimientos y cirugías: 5%–20% de descuento',
      'Acompañamiento continuo por canales oficiales en horario laboral',
      'Certificado médico de viajes: 50% de descuento',
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '$220.000',
    period: '/mes',
    tagline:
      'Protección integral con el mayor nivel de beneficios.',
    highlights: [
      'Inyectología de estabilización hasta $40.000 · consulta especialista 60% cobertura',
      'Medicamentos, primovacunación y refuerzo anual de vacunación*',
      'Desparasitación externa e interna* incluida',
      'Exámenes de laboratorio, rayos X y ecografías, hospitalización y cirugías*',
    ],
    fullBenefits: [
      'Consultas por urgencias vitales 24/7 gratuitas en IPS aliadas (no aplica a domicilio)',
      'Consultas domiciliarias gratuitas e ilimitadas',
      'Consultas en IPS autorizadas gratuitas e ilimitadas por medicina general',
      'Consultas virtuales gratuitas e ilimitadas (videollamada, llamada o chat)',
      'Controles veterinarios gratuitos derivados de consultas previas',
      'Chequeos preventivos de promoción y prevención gratuitos cada 3 meses',
      'Campañas preventivas de bienestar y tenencia responsable',
      'Cobertura del 100% en consultas por urgencias vitales a nivel nacional',
      'Acceso exclusivo a la APP de SIM (historial médico, citas y recordatorios)',
      'Servicio funerario incluido sin costo adicional (cobertura según ciudad)',
      'Inyectología requerida para la estabilización durante la consulta',
      'Consulta con especialistas: pagas solo el 40% del valor y terapias derivadas',
      'Exámenes de laboratorio: copagos preferenciales y descuentos en estudios no incluidos',
      'Rayos X y ecografía: cubiertos (toma previa al diagnóstico y 1 control por evento)',
      'Hospitalización: hasta 4 noches en IPS aliadas',
      'Procedimientos y cirugías: hasta $600.000 COP; 10%–20% de descuento si es externo',
      'Desparasitación interna y externa incluida',
      'Vacunación: primovacunación y refuerzos anuales incluidos',
      'Medicamentos del Anexo POS de SIM incluidos',
      'Acompañamiento continuo por canales oficiales en horario laboral',
    ],
  },
]

/** Nota legal para los ítems marcados con *. */
export const plansFootnote = '*Aplican términos y condiciones del plan.'
