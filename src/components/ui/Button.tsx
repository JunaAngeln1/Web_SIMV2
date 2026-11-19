/**
 * src/components/ui/Button.tsx
 *
 * Botones del sistema S.I.M. (sim-diseno §7.1).
 * Solo estética: colores, radios, padding, hover, focus visible.
 * Sin animaciones de entrada/salida complejas.
 */

import { type VariantProps, cva } from 'class-variance-authority'

const buttonVariants = cva(
  // Base común: forma píldora (radio 9999px), fuente Inter, verbo de acción
  'inline-flex items-center justify-center rounded-[var(--radius-pildora)] font-semibold text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        // Primario: verde corporativo #659D0D, texto blanco, radio píldora
        primary:
          'bg-verde-corporativo text-white hover:bg-[#528d0a] focus-visible:ring-verde-corporativo px-6 py-2.5',
        // Secundario: blanco, borde azul petróleo #054564, texto azul petróleo
        secondary:
          'bg-blanco border border-azul-petroleo text-azul-petroleo hover:bg-azul-petroleo hover:text-white focus-visible:ring-azul-petroleo px-6 py-2.5',
        // Terciario: texto azul petróleo con flecha/texto, sin fondo
        tertiary:
          'bg-transparent text-azul-petroleo hover:underline focus-visible:ring-azul-petroleo px-2 py-1.5',
        // Fantasma: solo texto, para acciones secundarias ligeras
        ghost:
          'bg-transparent text-gris-azulado hover:bg-gris-claro hover:text-azul-petroleo focus-visible:ring-azul-petroleo px-4 py-2',
      },
      size: {
        default: 'h-[48px] px-6',
        sm: 'h-[40px] px-4 text-xs',
        lg: 'h-[52px] px-8 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
)

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

export default function Button({ className, variant, size, children, ...props }: ButtonProps) {
  return (
    <button className={buttonVariants({ variant, size, className })} {...props}>
      {children}
    </button>
  )
}
