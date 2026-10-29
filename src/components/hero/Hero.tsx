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

/**
 * Chips de beneficios del hero: disposición en arco suave alrededor del gato,
 * sin elipses ni puntos decorativos. Posiciones en % sobre el panel del hero.
 */
const benefits = [
  {
    id: 'aliados',
    label: 'Red de aliados',
    icon: '/assets/icons/allies.svg',
    left: '62%',
    top: '14%',
  },
  {
    id: 'veterinary-care',
    label: 'Atención veterinaria',
    icon: '/assets/icons/veterinary-care.svg',
    left: '54%',
    top: '36%',
  },
  {
    id: 'pet-plans',
    label: 'Planes para tu mascota',
    icon: '/assets/icons/pet-plans.svg',
    left: '54%',
    top: '62%',
  },
  {
    id: 'support',
    label: 'Acompañamiento',
    icon: '/assets/icons/support.svg',
    left: '62%',
    top: '84%',
  },
]

export default function Hero() {
  return (
    <section
      data-section="hero"
      role="region"
      aria-label="Hero principal"
      className="relative w-full max-w-[1440px] min-h-[520px] mx-auto rounded-[24px] overflow-hidden bg-hero-verde-medio shadow-suave mb-12"
    >
      {/*
        Fondo vectorial (fondo_sim_vector.svg, 1800×900) cubriendo el panel.
        object-cover recorta arriba/abajo para llenar 1440×520 sin deformarse;
        bg-hero-verde-medio queda debajo como respaldo mientras carga.
      */}
      <img
        src="/assets/fondo_sim_vector.svg"
        alt=""
        data-purpose="hero-bg"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
      />
      {/* Halo claro alrededor de la cabeza del gato (x≈75 %, y≈40 %) */}
      <div
        className="absolute top-[35%] left-[65%] w-[220px] h-[220px] rounded-full bg-white/10 blur-[60px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Columna de texto (izquierda, ≈ 0–48 %) */}
      <div
        data-purpose="hero-text"
        className="absolute left-[5%] top-[15%] w-[110%] z-20 text-blanco"
      >
        <h1
          data-purpose="hero-title"
          className="max-w-[45%] font-titulos font-semibold text-5xl sm:text-6xl lg:text-8xl tracking-tight leading-[1.05] mb-4"
        >
          <span className="block text-blanco">El bienestar de tu mascota,</span>
          <span className="block text-[#07345B]">nuestra prioridad.</span>
        </h1>
        <p
          data-purpose="hero-description"
          className="text-[#07345B] text-lg sm:text-xl font-normal leading-relaxed mb-16 max-w-[35%]"
        >
          Planes de atención veterinaria para perros y gatos, con el respaldo que tu familia
          necesita.
        </p>
        <div data-purpose="hero-ctas" className="flex flex-col sm:flex-row gap-2 sm:gap-4 ">
          <Button
            variant="primary"
            size="lg"
            data-purpose="cta-principal"
            className="group w-full sm:w-auto bg-verde-sim hover:bg-[#6aa112]! focus-visible:ring-verde-sim shadow-[0_4px_14px_rgba(119,193,0,0.35)] hover:shadow-[0_6px_18px_rgba(119,193,0,0.45)]"
          >
            Conoce nuestros planes{' '}
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            variant="secondary"
            size="lg"
            data-purpose="cta-secundario"
            className="w-full sm:w-auto border-white! text-white! hover:bg-white! hover:text-azul-institucional! focus-visible:ring-white"
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

      {/* Chips de beneficios (z-index 3, sobre la órbita) */}
      {benefits.map((b) => (
        <button
          key={b.id}
          type="button"
          data-purpose="benefit"
          data-benefit={b.id}
          aria-label={b.label}
          lang="es"
          className={[
            'absolute z-30 flex items-center rounded-full bg-white/95 border border-borde-suave shadow-suave w-[180px] h-13 pl-[40px] pr-5 text-[10px] sm:text-xs font-semibold text-[#07345B] text-center leading-tight break-words hyphens-auto',
          ].join(' ')}
          style={{
            left: b.left,
            top: b.top,
          }}
        >
          <img
            src={b.icon}
            alt=""
            className="absolute top-1/2 -translate-y-1/2 -left-5 w-14 h-14 drop-shadow-md"
          />
          <span data-purpose="benefit-label">{b.label}</span>
        </button>
      ))}
    </section>
  )
}
