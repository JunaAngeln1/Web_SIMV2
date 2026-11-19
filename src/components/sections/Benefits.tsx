/**
 * src/components/sections/Benefits.tsx
 *
 * Franja de beneficios según Guía de Diseño §4.3.
 * Cuatro beneficios con iconos verdes dentro de círculos y separadores verticales.
 * Resume rápidamente los servicios más importantes.
 */
import Container from '@/components/layout/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import PawPattern from '@/components/ui/PawPattern'

const BENEFICIOS = [
  {
    id: 'atencion-veterinaria',
    title: 'Atención veterinaria',
    description: 'Consultas y orientación.',
    icon: '/assets/icons/veterinary-care.svg',
  },
  {
    id: 'asistencia-urgencias',
    title: 'Asistencia y urgencias',
    description: 'Cuando más se necesita.',
    icon: '/assets/icons/allies.svg',
  },
  {
    id: 'prevencion-bienestar',
    title: 'Prevención y bienestar',
    description: 'Vacunas, controles y más.',
    icon: '/assets/icons/pet-plans.svg',
  },
  {
    id: 'acompanamiento',
    title: 'Acompañamiento personalizado',
    description: 'Con el Personal Pet Manager.',
    icon: '/assets/icons/support.svg',
  },
]

export default function Benefits() {
  return (
    <section
      data-section="beneficios"
      aria-label="Franja de beneficios"
      className="py-16 sm:py-20 bg-azul-muy-claro relative overflow-hidden"
    >
      <PawPattern color="#054564" opacity={0.03} className="inset-0" />
      <Container className="relative">
        <SectionHeading
          title="Beneficios de afiliarte a SIM"
          subtitle="Todo lo que tu mascota necesita para estar protegida y feliz."
        />

        <div
          data-purpose="beneficios-grid"
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-center"
        >
          {BENEFICIOS.map((b) => (
            <div
              key={b.id}
              data-purpose="beneficio"
              className="flex flex-col items-center text-center gap-4"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blanco border border-verde-corporativo/30 shadow-suave">
                <img
                  src={b.icon}
                  alt=""
                  className="w-8 h-8 drop-shadow-md"
                  aria-hidden="true"
                />
              </div>
              <h4
                className="font-titulos font-semibold text-azul-petroleo text-sm sm:text-base"
              >
                {b.title}
              </h4>
              <p className="text-xs sm:text-sm text-gris-azulado leading-relaxed">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
