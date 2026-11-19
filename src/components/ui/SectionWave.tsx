/**
 * src/components/ui/SectionWave.tsx
 *
 * Transición ondulada entre dos secciones.
 * `from` es el color de fondo de la sección anterior y `to` el de la siguiente;
 * el SVG dibuja la onda con el color de destino para fundir ambas secciones.
 */

interface SectionWaveProps {
  /** Color de fondo de la sección anterior. */
  from?: string
  /** Color de la onda (sección siguiente). */
  to?: string
  /** Invierte la onda (útil para alternar el sentido). */
  flip?: boolean
  className?: string
}

export default function SectionWave({
  from = '#ffffff',
  to = '#f1f7fc',
  flip = false,
  className,
}: SectionWaveProps) {
  return (
    <div
      className={['relative w-full overflow-hidden leading-[0] pointer-events-none', className]
        .filter(Boolean)
        .join(' ')}
      style={{ backgroundColor: from }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className={['block w-full h-[48px] sm:h-[72px]', flip ? 'rotate-180' : ''].join(' ')}
      >
        <path d="M0,48 C240,90 480,6 720,42 C960,78 1200,18 1440,54 L1440,90 L0,90 Z" fill={to} />
      </svg>
    </div>
  )
}
