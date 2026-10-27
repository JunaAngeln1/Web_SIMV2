/**
 * src/components/sections/About.tsx
 *
 * Nosotros / nombre completo de la marca con diseño aplicado.
 * Dos columnas: texto izquierda, fotografía derecha. En móvil, apilar.
 */
import Container from '@/components/layout/Container'

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
            {/* Titular: nombre completo de la marca a dos niveles (sim-diseno §2,
                h2 en azul institucional sobre fondo azul muy claro) */}
            <div data-purpose="about-heading" className="mb-8">
              <p className="text-verde-sim uppercase tracking-wider text-xs font-semibold mb-2">
                Nosotros
              </p>
              <h2 className="font-titulos tracking-tight leading-[1.15]">
                <span className="block text-4xl sm:text-5xl font-bold text-azul-institucional">
                  S.I.M.
                </span>
                <span className="block text-2xl sm:text-3xl font-semibold text-texto-principal">
                  Servicios Integrales para Mascotas
                </span>
              </h2>
              <p className="mt-3 text-lg text-gris-azulado">¿EPS para mascotas?</p>
            </div>
            <p
              data-purpose="about-description"
              className="text-lg text-gris-azulado leading-relaxed"
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
