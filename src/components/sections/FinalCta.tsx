/**
 * src/components/sections/FinalCta.tsx
 *
 * CTA final con diseño aplicado.
 * Franja de fondo azul profundo con título emocional y dos acciones.
 * El CTA de afiliación sigue siendo el principal.
 * Copy sugerido: "Ellos hacen parte de tu familia. Su bienestar también merece un plan."
 */
import Button from '@/components/ui/Button'
import Container from '@/components/layout/Container'

export default function FinalCta() {
  return (
    <section
      data-section="cta-final"
      aria-label="Llamada a la acción final"
      className="py-16 sm:py-20 bg-azul-profundo text-blanco"
    >
      <Container narrow>
        <div data-purpose="cta-content" className="text-center pt-6 sm:pt-10 pb-8 sm:pb-12">
          <h2
            data-purpose="cta-title"
            className="font-titulos font-semibold text-2xl sm:text-3xl lg:text-4xl text-blanco leading-[1.1] mb-6 tracking-tight"
          >
            Ellos hacen parte de tu familia. Su bienestar también merece un plan.
          </h2>
          <div
            data-purpose="cta-actions"
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="primary" size="lg" data-purpose="cta-planes">
              Explorar planes
            </Button>
            <Button variant="secondary" size="lg" data-purpose="cta-informacion">
              Solicitar información
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
