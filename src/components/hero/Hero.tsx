/**
 * src/components/hero/Hero.tsx
 *
 * Hero con fondo azul al 100% del panel, texto a la izquierda y gato a la derecha.
 * Posicionamiento porcentual sobre el panel azul (≈ 100 % ancho × 100 % alto,
 * proporción cercana a 2:1), medido desde la esquina superior izquierda.
 *
 * Copy sugerido (requiere aprobación de SIM).
 */
import Button from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'

const benefits = [
  {
    id: 'aliados',
    label: 'Red de aliados',
    icon: '/assets/icons/allies.svg',
    left: '64%',
    top: '14%',
  },
  {
    id: 'veterinary-care',
    label: 'Atención veterinaria',
    icon: '/assets/icons/veterinary-care.svg',
    left: '54%',
    top: '37%',
    lines: 2,
  },
  {
    id: 'pet-plans',
    label: 'Planes para tu mascota',
    icon: '/assets/icons/pet-plans.svg',
    left: '53%',
    top: '59%',
    lines: 2,
  },
  {
    id: 'support',
    label: 'Acompañamiento',
    icon: '/assets/icons/support.svg',
    left: '59%',
    top: '83%',
  },
]

export default function Hero() {
  return (
    <section
      data-section="hero"
      role="region"
      aria-label="Hero principal"
      className="relative w-full max-w-[1440px] min-h-[760px] mx-auto rounded-[24px] overflow-hidden bg-gradient-to-tr from-hero-verde-oscuro via-hero-verde-medio to-hero-verde-claro shadow-suave mb-12"
    >
      {/* Halo claro alrededor de la cabeza del gato (x≈75 %, y≈40 %) */}
      <div
        className="absolute top-[35%] left-[65%] w-[220px] h-[220px] rounded-full bg-white/10 blur-[60px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Columna de texto (izquierda, ≈ 0–48 %) */}
      <div
        data-purpose="hero-text"
        className="absolute left-[5%] top-[15%] w-[42%] z-20 text-blanco"
      >
        <h1
          data-purpose="hero-title"
          className="font-titulos font-semibold text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.05] mb-4"
        >
          <span className="block text-blanco">El bienestar de tu</span>
          <span className="block text-blanco">mascota,</span>
          <span className="block text-[#07345B]">nuestra prioridad.</span>
        </h1>
        <p
          data-purpose="hero-description"
          className="text-[#07345B] text-lg sm:text-xl font-normal leading-relaxed mb-8 max-w-[30%]"
        >
          Planes de atención veterinaria para perros y gatos, con el respaldo que tu familia
          necesita.
        </p>
        <div data-purpose="hero-ctas" className="flex flex-col sm:flex-row gap-2 sm:gap-4">
          <Button
            variant="primary"
            size="lg"
            data-purpose="cta-principal"
            className="w-full sm:w-auto bg-[#7AB929] hover:bg-[#6aa112] focus-visible:ring-[#7AB929]"
          >
            Conoce nuestros planes <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button
            variant="secondary"
            size="lg"
            data-purpose="cta-secundario"
            className="w-full sm:w-auto border-white text-white hover:bg-white/10 focus-visible:ring-white"
          >
            Contáctanos
          </Button>
        </div>
      </div>

      {/* Gato (derecha, ≈ 48–100 %) */}
      <img
        src="/assets/sim-hero-cat.webp"
        alt="Gato protagonista del hero"
        data-purpose="hero-cat"
        className="absolute right-0 bottom-0 z-10 w-full max-w-[720px] h-[92%] object-contain object-right object-bottom"
      />

      {/* Órbita (SVG, izquierda del gato) */}
      <div
        data-purpose="benefits-orbit"
        role="region"
        aria-label="Ruleta de beneficios"
        className="absolute left-[45%] top-[10%] w-[55%] h-[80%] z-20 pointer-events-none"
      >
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
          {/* Arco elíptico blanco fino, semitransparente */}
          <path
            d="M 50 10 A 40 50 0 0 1 10 50 A 40 50 0 0 1 50 90"
            fill="none"
            stroke="white"
            stroke-width="1.5"
            stroke-opacity="0.5"
            className="pointer-events-none"
          />
          {/* Puntos blancos sobre el arco */}
          <circle cx="82" cy="45" r="2" fill="white" fill-opacity="0.7" />
          <circle cx="20" cy="50" r="2" fill="white" fill-opacity="0.7" />
          <circle cx="50" cy="85" r="2" fill="white" fill-opacity="0.7" />
        </svg>
      </div>

      {/* Chips de beneficios (z-index 3, sobre la órbita) */}
      {benefits.map((b) => (
        <button
          key={b.id}
          type="button"
          data-purpose="benefit"
          data-benefit={b.id}
          aria-label={b.label}
          className={[
            'absolute z-30 flex items-center gap-2 rounded-full bg-white/95 border border-borde-suave shadow-suave px-3 py-1.5 text-xs sm:text-sm font-semibold text-[#07345B] whitespace-nowrap',
            b.lines === 2 ? 'max-w-[120px] leading-tight' : '',
          ]
            .filter(Boolean)
            .join(' ')}
          style={{
            left: b.left,
            top: b.top,
          }}
        >
          <div className="flex items-center justify-center w-5 h-5 rounded-full bg-azul-institucional text-white">
            <img src={b.icon} alt="" className="w-2.5 h-2.5" />
          </div>
          <span data-purpose="benefit-label">{b.label}</span>
        </button>
      ))}
    </section>
  )
}
