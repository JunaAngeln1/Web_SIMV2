/**
 * src/components/sections/About.tsx
 *
 * Nosotros / ¿EPS para mascotas? con diseño aplicado.
 * Dos columnas: texto izquierda, fotografía derecha. En móvil, apilar.
 */
import Container from '@/components/layout/Container'
import SectionHeading from '@/components/ui/SectionHeading'

export default function About() {
  return (
    <section
      data-section="nosotros"
      aria-label="Nosotros"
      className="py-16 sm:py-20 bg-azul-muy-claro"
    >
      <Container>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div data-purpose="about-text">
            <SectionHeading title="¿EPS para mascotas?" subtitle="" />
            <p
              data-purpose="about-description"
              className="mt-6 text-lg text-gris-azulado leading-relaxed"
            >
              Sí. Somos una Empresa Promotora de Servicios de Salud para perros y gatos. Nuestra
              misión es garantizar la prestación de servicios veterinarios a través de nuestros
              planes de atención y promover los diferentes servicios que se prestan en el sector
              veterinario del país. Sin importar su edad, raza ni preexistencias.
            </p>
          </div>

          <div data-purpose="about-image" className="relative">
            <img
              src="/assets/images/about-team.webp"
              alt="Mascota y equipo veterinario"
              data-purpose="about-photo"
              className="w-full h-auto rounded-[var(--radius-contenedor)] shadow-medio object-cover"
              style={{ aspectRatio: '4 / 3' }}
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
