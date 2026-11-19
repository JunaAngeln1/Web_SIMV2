/**
 * src/components/ui/PageHero.tsx
 *
 * Banda de encabezado común para las páginas internas.
 * Fondo azul muy claro con patrón de huellas, título/subtítulo (o contenido
 * propio) y una onda que funde la banda con el contenido blanco inferior.
 */

import type { ReactNode } from 'react'
import Container from '@/components/layout/Container'
import PawPattern from '@/components/ui/PawPattern'
import SectionHeading from '@/components/ui/SectionHeading'
import SectionWave from '@/components/ui/SectionWave'

interface PageHeroProps {
  title?: string
  subtitle?: string
  align?: 'left' | 'center'
  /** Usa el ancho angosto (768 px) para páginas de lectura. */
  narrow?: boolean
  /** Contenido propio en lugar del título/subtítulo estándar. */
  children?: ReactNode
}

export default function PageHero({
  title,
  subtitle,
  align = 'left',
  narrow = false,
  children,
}: PageHeroProps) {
  return (
    <>
      <div className="relative overflow-hidden bg-azul-muy-claro">
        <PawPattern color="#03497D" opacity={0.04} />
        <div className="relative pt-8 sm:pt-10">
          <Container narrow={narrow} className={narrow ? 'px-4' : undefined}>
            {children ??
              (title ? <SectionHeading title={title} subtitle={subtitle} align={align} /> : null)}
          </Container>
        </div>
      </div>
      <SectionWave from="#f1f7fc" to="#ffffff" />
    </>
  )
}
