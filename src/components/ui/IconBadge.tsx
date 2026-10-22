/**
 * src/components/ui/IconBadge.tsx
 *
 * Cápsula compacta con icono dentro de círculo azul y texto de una o dos líneas.
 * Usada para beneficios e indicadores (sim-diseno §7.2).
 */

interface IconBadgeProps {
  icon: string
  label: string
  value?: string
  className?: string
}

export default function IconBadge({ icon, label, value, className }: IconBadgeProps) {
  return (
    <div className={['flex flex-col items-center gap-2', className].filter(Boolean).join(' ')}>
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-azul-niebla border border-borde-suave">
        <img src={icon} alt="" className="w-5 h-5" />
      </div>
      <span className="text-sm font-medium text-texto-principal">{label}</span>
      {value && (
        <span className="text-[1.25rem] font-titulos font-semibold text-azul-institucional">
          {value}
        </span>
      )}
    </div>
  )
}
