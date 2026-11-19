/**
 * src/components/ui/Card.tsx
 *
 * Superficie base de tarjeta según Guía de Diseño §5.
 * Fondo blanco o gris claro (#F4F5F6), borde suave, radio 14-24 px,
 * sombra suave sin exceso de profundidad. Imágenes de mascotas como
 * elemento visual principal.
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
        hover
          ? 'hover:shadow-suave hover:-translate-y-1 hover:border-verde-corporativo/40'
          : '',
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
