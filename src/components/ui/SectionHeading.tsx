/**
 * src/components/ui/SectionHeading.tsx
 *
 * Título y subtítulo de sección con alineación consistente.
 * (sim-diseno §3, §8)
 */

interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({ title, subtitle, align = 'left' }: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'
  const barClass = align === 'center' ? 'mx-auto' : ''

  return (
    <div
      className={['mb-8', align === 'center' ? 'max-w-2xl mx-auto' : ''].filter(Boolean).join(' ')}
    >
      <h2
        className={[
          'text-3xl font-titulos font-semibold text-azul-institucional tracking-tight',
          alignClass,
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {title}
      </h2>
      <span
        className={['mt-4 block h-1 w-16 rounded-full bg-verde-acento', barClass]
          .filter(Boolean)
          .join(' ')}
        aria-hidden="true"
      />
      {subtitle && (
        <p className={['mt-4 text-lg text-gris-azulado', alignClass].filter(Boolean).join(' ')}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
