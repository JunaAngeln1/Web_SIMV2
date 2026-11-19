/**
 * src/components/ui/Card.tsx
 *
 * Superficie base de tarjeta (sim-diseno §7.2).
 * Fondo blanco, borde #D9E5EF, radio 20-24 px, sombra muy suave.
 * La profundidad es jerárquica: no sombra intensa en todas las tarjetas.
 */

import React from 'react'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  padded?: boolean
  hover?: boolean
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, padded = true, hover = true }, ref) => (
    <div
      ref={ref}
      className={[
        'bg-blanco border border-borde-suave rounded-[var(--radius-tarjeta)]',
        'shadow-suave transition-all duration-200 ease-out',
        hover ? 'hover:shadow-verde hover:-translate-y-1 hover:border-verde-acento/40' : '',
        padded ? 'p-6' : 'p-4',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  ),
)

Card.displayName = 'Card'

export default Card
