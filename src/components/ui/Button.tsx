/**
 * src/components/ui/Button.tsx
 *
 * Botones del sistema S.I.M. (sim-diseno §7.1).
 * Solo estética: colores, radios, padding, hover, focus visible.
 * Sin animaciones de entrada/salida complejas.
 *
 * Soporta dos formas:
 * - `<Button onClick={...}>`  -> renderiza <button type="button">.
 * - `<Button href="/planes">` -> renderiza un enlace con el mismo estilo.
 *   Si la ruta es interna (empieza por "/") usa <Link> de React Router
 *   (navegación SPA sin recarga); si es externa, un <a> normal.
 */

import { type VariantProps, cva } from 'class-variance-authority'
import { Link } from 'react-router-dom'

const buttonVariants = cva(
  // Base común: forma píldora (radio 9999px), fuente Inter, verbo de acción.
  // `group` permite que los iconos hijos animen con group-hover.
  'group inline-flex items-center justify-center rounded-[var(--radius-pildora)] font-semibold text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        // Primario: verde interactivo (cumple contraste con texto blanco), radio píldora
        primary:
          'bg-verde-interactivo text-white hover:bg-verde-interactivo-hover focus-visible:ring-verde-interactivo px-6 py-2.5',
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

type CommonProps = VariantProps<typeof buttonVariants> & {
  className?: string
  children?: React.ReactNode
}

export type ButtonProps =
  | (CommonProps &
      Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & { href?: never })
  | (CommonProps &
      Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & { href: string })

export default function Button(props: ButtonProps) {
  const { className, variant, size, children, ...rest } = props
  const classes = buttonVariants({ variant, size, className })

  if (rest.href !== undefined) {
    const { href, ...anchorRest } = rest
    const anchorProps = anchorRest as React.AnchorHTMLAttributes<HTMLAnchorElement>

    // Ruta interna: navegación SPA con Link (sin recarga de página).
    if (href.startsWith('/')) {
      return (
        <Link to={href} className={classes} {...anchorProps}>
          {children}
        </Link>
      )
    }

    // Ruta externa: enlace normal.
    return (
      <a href={href} className={classes} {...anchorProps}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}
