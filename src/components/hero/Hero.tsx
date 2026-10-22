/**
 * Hero principal — Estructura de contenido (sin estilos de diseño).
 * Copy sugerido, requiere aprobación de SIM.
 * Gato protagonista: /assets/sim-hero-cat.webp (pendiente de validación visual final).
 */

export default function Hero() {
  const benefits = [
    { id: 'aliados', label: 'Red de aliados', icon: '/assets/icons/allies.svg' },
    {
      id: 'veterinary-care',
      label: 'Atención veterinaria',
      icon: '/assets/icons/veterinary-care.svg',
    },
    { id: 'pet-plans', label: 'Planes para tu mascota', icon: '/assets/icons/pet-plans.svg' },
    { id: 'support', label: 'Acompañamiento', icon: '/assets/icons/support.svg' },
  ]

  return (
    <section data-section="hero" role="region" aria-label="Hero principal">
      <div data-purpose="hero-inner">
        <aside data-purpose="hero-text" aria-hidden="false">
          <h1 data-purpose="hero-title">El bienestar de tu mascota, nuestra prioridad.</h1>
          <p data-purpose="hero-description">
            Planes de atención veterinaria para perros y gatos, con el respaldo que tu familia
            necesita.
          </p>

          <div data-purpose="hero-ctas">
            <button data-purpose="cta-principal" type="button">
              Conoce nuestros planes
            </button>
            <button data-purpose="cta-secundario" type="button">
              Contáctanos
            </button>
          </div>
        </aside>

        <div data-purpose="hero-mascot">
          <img
            src="/assets/sim-hero-cat.webp"
            alt="Gato protagonista del hero"
            data-purpose="hero-cat"
          />
          <div data-purpose="benefits-orbit" role="region" aria-label="Ruleta de beneficios">
            {benefits.map((b) => (
              <button
                key={b.id}
                type="button"
                data-purpose="benefit"
                data-benefit={b.id}
                aria-label={b.label}
              >
                <img src={b.icon} alt="" />
                <span data-purpose="benefit-label">{b.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
