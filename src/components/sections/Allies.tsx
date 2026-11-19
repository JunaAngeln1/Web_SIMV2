/**
 * src/components/sections/Allies.tsx
 *
 * Red de atención según Guía de Diseño §4.6.
 * Informa que SIM cuenta con IPS veterinarias aliadas en Bogotá, Soacha, Chía,
 * Funza, Mosquera, Madrid y Facatativá.
 * Organización visual: texto a la izquierda, mapa ilustrado con marcadores
 * en el centro y fotografía veterinaria a la derecha.
 */
import Button from '@/components/ui/Button'
import Container from '@/components/layout/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import PawPattern from '@/components/ui/PawPattern'

const CIUDADES = [
  'Bogotá',
  'Soacha',
  'Chía',
  'Funza',
  'Mosquera',
  'Madrid',
  'Facatativá',
]

export default function Allies() {
  return (
    <section
      data-section="red-atencion"
      aria-label="Red de atención"
      className="py-16 sm:py-20 bg-blanco relative overflow-hidden"
    >
      <PawPattern color="#054564" opacity={0.03} className="inset-0" />
      <Container className="relative">
        <SectionHeading
          title="Red de atención veterinaria"
          subtitle="IPS veterinarias aliadas en tu ciudad y alrededores."
        />

        <div
          data-purpose="red-atencion-content"
          className="grid md:grid-cols-3 gap-8 lg:gap-12 items-center"
        >
          {/* Texto a la izquierda */}
          <div data-purpose="red-texto" className="md:col-span-1 lg:col-span-1">
            <h3 className="font-titulos font-semibold text-azul-petroleo text-lg sm:text-xl mb-4">
              Cobertura regional
            </h3>
            <p className="text-gris-azulado leading-relaxed mb-6">
              SIM cuenta con una red de IPS veterinarias aliadas que garantizan
              atención cercana y confiable para tu mascota. Contamos con diversas
              especialidades y cobertura regional para que siempre encuentres
              el cuidado que necesitas.
            </p>
            <ul className="space-y-2 text-sm text-gris-azulado">
              {CIUDADES.map((ciudad) => (
                <li key={ciudad} className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-verde-corporativo" />
                  {ciudad}
                </li>
              ))}
            </ul>
          </div>

          {/* Mapa ilustrado con marcadores (centro) */}
          <div data-purpose="red-mapa" className="flex items-center justify-center">
            <div
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-verde-pastel border-4 border-verde-claro"
              aria-label="Mapa ilustrado de cobertura"
            >
              {CIUDADES.map((_, i) => (
                <div
                  key={i}
                  className="absolute w-3 h-3 rounded-full bg-verde-corporativo border-2 border-white shadow-suave"
                  style={{
                    top: `${30 + (i * 13) % 50}%`,
                    left: `${25 + (i * 17) % 60}%`,
                  }}
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>

          {/* Fotografía veterinaria a la derecha */}
          <div data-purpose="red-foto" className="md:col-span-1 lg:col-span-1">
            <img
              src="/assets/images/about-pet.webp"
              alt="Atención veterinaria en IPS aliada"
              data-purpose="red-foto-veterinaria"
              className="w-full h-auto rounded-[24px] shadow-suave object-cover"
              style={{ aspectRatio: '4 / 3' }}
            />
          </div>
        </div>

        <div className="mt-10 text-center">
          <Button variant="secondary" data-purpose="cta-conoce-red">
            Conoce nuestra red de atención
          </Button>
        </div>
      </Container>
    </section>
  )
}
