/**
 * src/components/ui/PawPattern.tsx
 *
 * Patrón de huellas de mascota como fondo decorativo.
 * Se coloca dentro de una sección con `relative overflow-hidden`; el color y
 * la opacidad se controlan por props para adaptarlo a fondos claros u oscuros.
 */

interface PawPatternProps {
  className?: string
  /** Color de las huellas. */
  color?: string
  /** Opacidad global del patrón (0–1). */
  opacity?: number
}

export default function PawPattern({
  className,
  color = '#054564',
  opacity = 0.04,
}: PawPatternProps) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160"><g fill="${color}" opacity="${opacity}"><g transform="translate(18,18) rotate(-15 24 24)"><ellipse cx="24" cy="34" rx="12" ry="9"/><ellipse cx="10" cy="20" rx="5" ry="7"/><ellipse cx="22" cy="12" rx="5" ry="7"/><ellipse cx="35" cy="14" rx="5" ry="7"/><ellipse cx="44" cy="26" rx="5" ry="7"/></g><g transform="translate(92,82) rotate(20 24 24)"><ellipse cx="24" cy="34" rx="12" ry="9"/><ellipse cx="10" cy="20" rx="5" ry="7"/><ellipse cx="22" cy="12" rx="5" ry="7"/><ellipse cx="35" cy="14" rx="5" ry="7"/><ellipse cx="44" cy="26" rx="5" ry="7"/></g></g></svg>`
  const encoded = encodeURIComponent(svg)

  return (
    <div
      className={['absolute inset-0 pointer-events-none', className].filter(Boolean).join(' ')}
      style={{
        backgroundImage: `url("data:image/svg+xml,${encoded}")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '160px 160px',
      }}
      aria-hidden="true"
    />
  )
}
