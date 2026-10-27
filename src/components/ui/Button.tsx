/**
 * src/components/ui/Button.tsx
 *
 * Botones del sistema S.I.M. (sim-diseno §7.1).
 * Solo estética: colores, radios, padding, hover, focus visible.
 * Sin animaciones de entrada/salida complejas.
 */

import { type VariantProps, cva } from 'class-variance-authority'

const buttonVariants = cva(
  // Base común
  'inline-flex items-center justify-center rounded-md font-semibold text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        // Primario: verde #80bcdf, texto blanco, radio píldora
        primary:
          'bg-verde-sim text-white hover:bg-[#3a8bc8] focus-visible:ring-verde-sim px-6 py-2.5 rounded-full',
        // Secundario: transparente, borde azul institucional
        secondary:
          'bg-transparent border border-azul-institucional text-azul-institucional hover:bg-azul-institucional hover:text-white focus-visible:ring-azul-institucional px-6 py-2.5 rounded-md',
        // Terciario: texto azul con flecha/texto, sin fondo
        tertiary:
          'bg-transparent text-azul-institucional hover:underline focus-visible:ring-azul-cielo px-2 py-1.5 rounded-md',
        // Fantasma: solo texto, para acciones secundarias ligeras
        ghost:
          'bg-transparent text-gris-azulado hover:bg-azul-niebla hover:text-azul-institucional focus-visible:ring-azul-cielo px-4 py-2 rounded-md',
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
