/**
 * src/components/hero/Hero.tsx
 *
 * Hero con diseño aplicado (sin animaciones de mouse todavía).
 * Composición: fondo exterior azul pálido, contenedor blanco redondeado,
 * panel azul degradado con gato a la derecha, texto a la izquierda,
 * beneficios en órbita estática alrededor del gato.
 *
 * Copy sugerido (requiere aprobación de SIM).
 */
import Button from '@/components/ui/Button'

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

export default function Hero() {
  return (
    <section
      data-section="hero"
      role="region"
      aria-label="Hero principal"
      className="relative min-h-[700px] sm:min-h-[760px] bg-azul-muy-claro overflow-hidden"
    >
      {/* Fondo exterior con formas orgánicas suaves */}
      <div className="absolute inset-0 opacity-40 pointer-events-none" aria-hidden="true">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 760">
          <path
            d="M0 0 C 600 100 1440 200 1440 400 C 1440 600 800 760 0 760 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div
        data-purpose="hero-inner"
        className="relative z-10 mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 h-full"
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center h-full min-h-[700px] sm:min-h-[760px]">
          {/* Columna de texto (42-48%) */}
          <div data-purpose="hero-text" className="lg:col-span-1 flex flex-col justify-center">
            <h1
              data-purpose="hero-title"
              className="font-titulos font-semibold text-azul-institucional text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] mb-6"
            >
              El bienestar de tu mascota, nuestra prioridad.
            </h1>
            <p
              data-purpose="hero-description"
              className="text-lg sm:text-xl text-gris-azulado leading-relaxed mb-8 max-w-lg"
            >
              Planes de atención veterinaria para perros y gatos, con el respaldo que tu familia
              necesita.
            </p>
            <div data-purpose="hero-ctas" className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="lg"
                data-purpose="cta-principal"
                className="w-full sm:w-auto"
              >
                Conoce nuestros planes
              </Button>
              <Button
                variant="secondary"
                size="lg"
                data-purpose="cta-secundario"
                className="w-full sm:w-auto"
              >
                Contáctanos
              </Button>
            </div>
          </div>

          {/* Columna de mascota e interacción (52-58%) */}
          <div
            data-purpose="hero-mascot"
            className="lg:col-span-1 relative flex items-center justify-center"
          >
            {/* Panel azul degradado */}
            <div className="absolute inset-0 bg-gradient-to-tr from-azul-institucional to-azul-cielo rounded-[var(--radius-contenedor)] shadow-medio opacity-90" />
            {/* Gato */}
            <img
              src="/assets/sim-hero-cat.webp"
              alt="Gato protagonista del hero"
              data-purpose="hero-cat"
              className="relative z-10 w-full max-w-[520px] h-auto object-contain"
            />

            {/* Órbita estática de beneficios */}
            <div
              data-purpose="benefits-orbit"
              role="region"
              aria-label="Ruleta de beneficios"
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              {benefits.map((b, i) => {
                const angle = i * 90 * (Math.PI / 180)
                const radius = 150
                const x = Math.cos(angle) * radius
                const y = Math.sin(angle) * radius
                return (
                  <button
                    key={b.id}
                    type="button"
                    data-purpose="benefit"
                    data-benefit={b.id}
                    aria-label={b.label}
                    className="absolute flex flex-col items-center gap-1.5 w-16 h-16 bg-blanco/90 backdrop-blur-sm border border-borde-suave rounded-full shadow-suave transition-transform duration-200 hover:scale-105"
                    style={{
                      transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                    }}
                  >
                    <img src={b.icon} alt="" className="w-5 h-5 text-azul-institucional" />
                    <span
                      data-purpose="benefit-label"
                      className="text-[10px] font-medium text-texto-principal whitespace-nowrap"
                    >
                      {b.label}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
