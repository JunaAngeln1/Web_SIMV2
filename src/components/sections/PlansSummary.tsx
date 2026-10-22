/**
 * Planes resumidos — Estructura de contenido (sin estilos de diseño).
 * Se coloca inmediatamente después del hero.
 * No inventar precios, coberturas, topes, descuentos, tiempos de carencia ni precios.
 */

const plans = [
  {
    id: 'plan-1',
    name: 'Plan Básico',
    benefits: ['Consultas veterinarias', 'Vacunación', 'Desparasitación'],
  },
  {
    id: 'plan-2',
    name: 'Plan Estándar',
    benefits: ['Consultas ilimitadas', 'Vacunación', 'Desparasitación', 'Estudios de laboratorio'],
  },
  {
    id: 'plan-3',
    name: 'Plan Premium',
    benefits: [
      'Consultas ilimitadas',
      'Vacunación',
      'Desparasitación',
      'Estudios de laboratorio',
      'Hospitalización',
    ],
  },
]

export default function PlansSummary() {
  return (
    <section data-section="planes-resumidos" aria-label="Planes resumidos">
      <div data-purpose="section-inner">
        <header data-purpose="section-header">
          <h2 data-purpose="section-title">Planes de atención para tu mascota</h2>
          <p data-purpose="section-subtitle">
            Elige el plan que mejor se adapte a las necesidades de tu perro o gato.
          </p>
        </header>

        <div data-purpose="plans-grid">
          {plans.map((plan) => (
            <article key={plan.id} data-purpose="plan-card" data-plan={plan.id}>
              <h3 data-purpose="plan-name">{plan.name}</h3>
              <ul data-purpose="plan-benefits">
                {plan.benefits.map((b) => (
                  <li key={b} data-purpose="plan-benefit">
                    {b}
                  </li>
                ))}
              </ul>
              <button data-purpose="cta-ver-plan" type="button">
                Ver plan
              </button>
            </article>
          ))}
        </div>

        <button data-purpose="cta-explorar-planes" type="button">
          Explorar todos los planes
        </button>
      </div>
    </section>
  )
}
