/**
 * src/components/ui/Card.tsx
 *
 * Superficie base de tarjeta (sim-diseno §7.2).
 * Fondo blanco, borde #D9E5EF, radio 20-24 px, sombra muy suave.
 * La profundidad es jerárquica: no sombra intensa en todas las tarjetas.
 */

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  padded?: boolean
  hover?: boolean
}

export default function Card({ className, children, padded = true, hover = true }: CardProps) {
  return (
    <div
      className={[
        'bg-blanco border border-borde-suave rounded-[var(--radius-tarjeta)]',
        'shadow-suave transition-shadow duration-200 ease-out',
        hover ? 'hover:shadow-medio' : '',
        padded ? 'p-6' : 'p-4',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  )
}
