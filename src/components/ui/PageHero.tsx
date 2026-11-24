/**
 * src/components/ui/PageHero.tsx
 *
 * Banda de encabezado común para las páginas internas.
 * Fondo azul muy claro con título/subtítulo (o contenido propio).
 */

import type { ReactNode } from 'react'
import Container from '@/components/layout/Container'

interface PageHeroProps {
  title?: string
  /** Texto opcional del título que se resalta en verde. */
  accent?: string
  subtitle?: string
  align?: 'left' | 'center'
  /** Usa el ancho angosto (768 px) para páginas de lectura. */
  narrow?: boolean
  /** Contenido propio en lugar del título/subtítulo estándar. */
  children?: ReactNode
}

export default function PageHero({
  title,
  accent,
  subtitle,
  align = 'left',
  narrow = false,
  children,
}: PageHeroProps) {
  return (
    <div className="relative overflow-hidden bg-azul-muy-claro">
      <div className="relative pt-8 sm:pt-10 pb-8 sm:pb-10">
        <Container narrow={narrow}>
          {children ?? (title ? (
            <header className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'text-left'}>
              <h1 className="font-titulos text-[30px] font-bold leading-tight tracking-tight text-azul-petroleo sm:text-[44px]">
                {accent && title.includes(accent) ? (
                  <>{title.slice(0, title.indexOf(accent))}<span className="text-verde-interactivo">{accent}</span>{title.slice(title.indexOf(accent) + accent.length)}</>
                ) : title}
              </h1>
              <span
                className={`mt-3 block h-1 w-16 rounded-full bg-verde-corporativo ${align === 'center' ? 'mx-auto' : ''}`}
                aria-hidden="true"
              />
              {subtitle && (
                <p className="mt-3 mb-0 text-base leading-relaxed text-texto-principal sm:text-lg">
                  {subtitle}
                </p>
              )}
            </header>
          ) : null)}
        </Container>
      </div>
    </div>
  )
}
