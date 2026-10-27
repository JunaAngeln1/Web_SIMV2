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
 * Posiciones calculadas para que el CENTRO de cada icono caiga exactamente
 * sobre la órbita (elipse centrada en el gato: cx=1120, cy=280, rx=380, ry=250
 * en el sistema de referencia 1440×520).
 *
 * Centro del icono = (left del chip + 8px, top del chip + 26px), porque el
 * icono está en `-left-5` (-20px) con ancho `w-14` (56px) y centrado vertical.
 *
 * Ángulos usados sobre la elipse: 230°, 195°, 165°, 130° (arco izquierdo).
 */
const benefits = [
  {
    id: 'aliados',
    label: 'Red de aliados',
    icon: '/assets/icons/allies.svg',
    // θ=230° → icono (875.7, 88.5) → chip (867.7, 62.5) = (60.3%, 12%)
    left: '60.3%',
    top: '12%',
  },
  {
    id: 'veterinary-care',
    label: 'Atención veterinaria',
    icon: '/assets/icons/veterinary-care.svg',
    // θ=195° → icono (753, 215.3) → chip (745, 189.3) = (51.7%, 36.4%)
    left: '51.7%',
    top: '36.4%',
  },
  {
    id: 'pet-plans',
    label: 'Planes para tu mascota',
    icon: '/assets/icons/pet-plans.svg',
    // θ=165° → icono (753, 344.7) → chip (745, 318.7) = (51.7%, 61.3%)
    left: '51.7%',
    top: '61.3%',
  },
  {
    id: 'support',
    label: 'Acompañamiento',
    icon: '/assets/icons/support.svg',
    // θ=130° → icono (875.7, 471.5) → chip (867.7, 445.5) = (60.3%, 85.7%)
    left: '60.3%',
    top: '85.7%',
  },
]

/**
 * Puntos decorativos sobre las dos elipses (centro 1120,280 en 1440×520).
 * Posición = centro del punto en px sobre el sistema de referencia, convertida
 * a % (x/1440, y/520). Ángulos elegidos fuera de las zonas ocupadas por chips:
 * elipse principal (rx=380, ry=250) e interior (rx=290, ry=190).
 */
const orbitDots = [
  // Elipse principal — arco superior (lejos de los chips)
  { left: '70.9%', top: '7.4%', size: 'w-2 h-2', tone: 'bg-white/90' }, // θ=255°
  { left: '77.8%', top: '5.8%', size: 'w-2.5 h-2.5', tone: 'bg-[#b7e36b]' }, // θ=270°
  { left: '84.6%', top: '7.4%', size: 'w-2 h-2', tone: 'bg-[#8fd0ef]' }, // θ=285°
  // Elipse principal — flanco izquierdo (entre chips 2/3 y bordes)
  { left: '54.9%', top: '29.8%', size: 'w-1.5 h-1.5', tone: 'bg-white/70' }, // θ=210°
  { left: '54.9%', top: '77.9%', size: 'w-1.5 h-1.5', tone: 'bg-white/70' }, // θ=150°
  // Elipse principal — arco inferior
  { left: '64.6%', top: '95.5%', size: 'w-2 h-2', tone: 'bg-[#8fd0ef]' }, // θ=120°
  { left: '91%', top: '95.5%', size: 'w-2 h-2', tone: 'bg-white/90' }, // θ=60°
  // Elipse interior
  { left: '77.8%', top: '17.3%', size: 'w-1.5 h-1.5', tone: 'bg-white/80' }, // θ=270°
  { left: '87.8%', top: '22.2%', size: 'w-2 h-2', tone: 'bg-[#b7e36b]' }, // θ=300°
  { left: '77.8%', top: '90.4%', size: 'w-1.5 h-1.5', tone: 'bg-white/80' }, // θ=90°
  { left: '62.4%', top: '30.3%', size: 'w-1.5 h-1.5', tone: 'bg-[#8fd0ef]/80' }, // θ=220°
  { left: '62.4%', top: '77.3%', size: 'w-1.5 h-1.5', tone: 'bg-[#8fd0ef]/80' }, // θ=140°
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

      {/*
        Órbitas alrededor del gato (centro ≈ 1120,280 sobre 1440×520).
        La elipse principal (rx=380, ry=250) pasa por el centro de los iconos;
        la interior (rx=290, ry=190) es decorativa. preserveAspectRatio="none"
        para que escale con el panel igual que los chips (%).
      */}
      <svg
        data-purpose="benefits-orbit"
        className="absolute inset-0 w-full h-full z-20 pointer-events-none"
        viewBox="0 0 1440 520"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <ellipse
          cx="1120"
          cy="280"
          rx="380"
          ry="250"
          fill="none"
          stroke="white"
          strokeOpacity="0.5"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <ellipse
          cx="1120"
          cy="280"
          rx="290"
          ry="190"
          fill="none"
          stroke="white"
          strokeOpacity="0.3"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/*
        Puntos decorativos sobre las órbitas.
        Se dibujan como divs (no círculos SVG) porque preserveAspectRatio="none"
        deformaría los círculos. Posiciones = puntos de cada elipse en el sistema
        1440×520 convertidos a %, elegidos fuera de las zonas ocupadas por chips.
      */}
      {orbitDots.map((d, i) => (
        <div
          key={`orbit-dot-${i}`}
          aria-hidden="true"
          className={[
            'absolute z-20 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none',
            d.size,
            d.tone,
          ].join(' ')}
          style={{ left: d.left, top: d.top }}
        />
      ))}
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
