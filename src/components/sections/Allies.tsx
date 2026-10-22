/**
 * src/components/sections/Allies.tsx
 *
 * Nuestros aliados con diseño aplicado.
 * Franja de logotipos autorizados (pendiente de envío por SIM).
 * Movimiento pausado estático (sin carousel animado todavía).
 */
import Button from '@/components/ui/Button'
import Container from '@/components/layout/Container'
import SectionHeading from '@/components/ui/SectionHeading'

export default function Allies() {
  return (
    <section
      data-section="aliados"
      aria-label="Nuestros aliados"
      className="py-16 sm:py-20 bg-azul-muy-claro"
    >
      <Container>
        <SectionHeading
          title="Una red que trabaja por su bienestar"
          subtitle="Accede a una red veterinaria comprometida con la salud de tu mascota."
        />

        <div
          data-purpose="allies-franja"
          role="region"
          aria-label="Logotipos de aliados"
          className="my-10 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-16"
        >
          {[1, 2, 3, 4].map((i) => (
            <span
              key={i}
              data-purpose="ally-placeholder"
              className="flex items-center justify-center w-24 h-16 bg-blanco border border-borde-suave rounded-[var(--radius-tarjeta)] shadow-suave text-gris-azulado text-sm font-medium"
            >
              Logo aliado {i}
            </span>
          ))}
        </div>

        <div className="text-center">
          <Button variant="secondary" data-purpose="cta-conoce-alidos">
            Conoce nuestra red de aliados
          </Button>
        </div>
      </Container>
    </section>
  )
}
