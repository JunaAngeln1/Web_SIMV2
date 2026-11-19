/**
 * src/data/promos.ts
 *
 * Promoción que se muestra en el popup de entrada.
 *
 * Regla crítica (src/data/README.md): no inventar ofertas reales.
 * Mientras SIM no apruebe una promoción, el contenido de este archivo es de
 * ejemplo y debe marcarse como PENDIENTE_SIM. Para desactivar el popup basta
 * con poner `enabled: false` o dejar `promoActiva` en `null`.
 */

export interface Promo {
  id: string
  enabled: boolean
  badge: string
  title: string
  description: string
  ctaLabel: string
  ctaHref: string
}

/** Clave de localStorage para mostrar la promo una vez por día. */
export const PROMO_STORAGE_KEY = 'sim-promo-ultima-visualizacion'

/**
 * PENDIENTE_SIM: reemplazar por la oferta o promoción aprobada por SIM.
 * El texto actual es un ejemplo y no debe publicarse sin validación.
 */
export const promoActiva: Promo | null = {
  id: 'promo-afiliacion-ejemplo',
  enabled: true,
  badge: 'Promoción',
  title: 'Aprovecha nuestra promoción de afiliación',
  description:
    'Contenido de ejemplo pendiente de aprobación por SIM. Aquí se mostrará la oferta o promoción vigente para nuevos afiliados.',
  ctaLabel: 'Ver planes',
  ctaHref: '/planes',
}
