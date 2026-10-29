/**
 * src/components/ui/IconBadge.tsx
 *
 * Cápsula con icono dentro de círculo blanco y número animable.
 * Usada para indicadores (sim-diseno §7.2, §8).
 */

import type { RefObject } from 'react'

interface IconBadgeProps {
  icon: string
  label: string
  value?: string
  className?: string
  /** Nombre del token de color sin prefijo `--color-` (ej. "verde-sim"). */
  accent?: string
  /** Ref opcional para el elemento del valor (useCountUp lo anima por fuera). */
  valueRef?: RefObject<HTMLSpanElement | null>
}

export default function IconBadge({
  icon,
  label,
  value,
  className,
  accent,
  valueRef,
}: IconBadgeProps) {
  const accentText = accent ? `text-${accent}` : 'text-azul-institucional'
  const accentBg = accent ? `bg-${accent}/15` : 'bg-transparent'

  return (
    <div className={['flex flex-col items-center gap-3', className].filter(Boolean).join(' ')}>
      <div className="relative flex items-center justify-center w-13 h-13">
        {/* Halo de color de acento detrás del círculo del icono */}
        {accent && (
          <div
            className={`absolute inset-0 rounded-full blur-[24px] pointer-events-none ${accentBg}`}
            aria-hidden="true"
          />
        )}
        <div className="relative z-10 flex items-center justify-center w-11 h-11 rounded-full bg-white border border-borde-suave shadow-suave">
          <img src={icon} alt="" className="w-10 h-10" />
        </div>
      </div>
      <span className="text-base font-medium text-texto-principal">{label}</span>
      {value && (
        <span ref={valueRef} className={`text-lg font-bold text-azul-institucional ${accentText}`}>
          {value}
        </span>
      )}
    </div>
  )
}
