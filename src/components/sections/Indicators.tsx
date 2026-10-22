/**
 * src/components/sections/Indicators.tsx
 *
 * Indicadores "Conoce a la manada" con diseño aplicado.
 * Tres bloques con cifra grande en azul institucional y etiqueta corta.
 * Cifras sujetas a verificación con SIM antes de publicar.
 */
import Container from '@/components/layout/Container'
import IconBadge from '@/components/ui/IconBadge'
import SectionHeading from '@/components/ui/SectionHeading'

const indicators = [
  { label: 'mascotas afiliadas', value: '+4.000' },
  { label: 'convenios estratégicos', value: '+250' },
  { label: 'familias satisfechas', value: '+3.500' },
]

export default function Indicators() {
  return (
    <section
      data-section="indicadores"
      aria-label="Conoce a la manada"
      className="py-16 sm:py-20 bg-blanco"
    >
      <Container>
        <SectionHeading title="Conoce a la manada" subtitle="" />
        <div data-purpose="indicators-grid" className="grid md:grid-cols-3 gap-6">
          {indicators.map((ind) => (
            <IconBadge
              key={ind.label}
              icon="/assets/icons/support.svg"
              label={ind.label}
              value={ind.value}
              className="bg-azul-niebla border border-borde-suave rounded-[var(--radius-tarjeta)] p-6"
            />
          ))}
        </div>
        <p data-purpose="indicators-note" className="mt-8 text-sm text-gris-azulado">
          Cifras sujetas a verificación con SIM antes de publicar.
        </p>
      </Container>
    </section>
  )
}
