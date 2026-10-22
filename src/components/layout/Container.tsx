/**
 * src/components/layout/Container.tsx
 *
 * Ancho máximo de contenido (1280-1360 px en escritorio) y retícula de secciones.
 * (sim-diseno §3)
 */

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  narrow?: boolean
}

export default function Container({ children, className, narrow = false }: ContainerProps) {
  return (
    <div
      className={[
        'mx-auto',
        narrow ? 'max-w-[768px]' : 'max-w-[1360px] px-4',
        'sm:px-6 lg:px-8',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  )
}
