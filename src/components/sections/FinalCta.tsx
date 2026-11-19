/**
 * src/components/sections/FinalCta.tsx
 *
 * Banner de afiliación según Guía de Diseño §4.9.
 * Título: "Tu mascota merece estar protegida."
 * Descripción: "Empieza hoy a cuidar su bienestar con SIM."
 * Acción: "Quiero afiliarme".
 * Organización visual: fotografía emocional de una persona con su perro,
 * texto blanco y botón verde sobre una imagen de ambiente natural.
 */
import Button from '@/components/ui/Button'
import Container from '@/components/layout/Container'
import PawPattern from '@/components/ui/PawPattern'

export default function FinalCta() {
  return (
    <section
      data-section="banner-afiliacion"
      aria-label="Banner de afiliación"
      className="py-16 sm:py-24 relative overflow-hidden"
    >
      {/* Fondo de ambiente natural con superposición verde oscuro */}
      <div className="absolute inset-0 bg-azul-oscuro/90">
        <img
          src="/assets/images/about-pet.webp"
          alt=""
          data-purpose="banner-bg"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-azul-oscuro via-azul-oscuro/80 to-transparent" />
      </div>

      {/* Huella decorativa */}
      <PawPattern color="#A5C46C" opacity={0.1} className="inset-0" />

      <Container className="relative z-10 text-center">
        <div data-purpose="banner-content" className="pt-6 sm:pt-10 pb-8 sm:pb-12">
          <h2
            data-purpose="banner-title"
            className="font-titulos font-semibold text-2xl sm:text-3xl lg:text-4xl text-blanco leading-[1.1] mb-6 tracking-tight"
          >
            Tu mascota merece estar protegida.
          </h2>
          <p
            data-purpose="banner-description"
            className="text-blanco/90 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            Empieza hoy a cuidar su bienestar con SIM.
          </p>
          <Button
            variant="primary"
            size="lg"
            data-purpose="cta-afiliarme"
            className="mx-auto"
          >
            Quiero afiliarme
          </Button>
        </div>
      </Container>
    </section>
  )
}
