/**
 * src/components/sections/PetManager.tsx
 *
 * Personal Pet Manager según Guía de Diseño §4.5.
 * Explica el acompañamiento cercano y personalizado para orientar, coordinar
 * servicios y resolver inquietudes del afiliado.
 *
 * Incluye:
 * - Orientación permanente.
 * - Coordinación de servicios.
 * - Seguimiento de atenciones.
 * - Apoyo durante toda la afiliación.
 *
 * Organización visual: fotografía de la asesora a la izquierda, explicación
 * en el centro y panel verde pastel con la lista de beneficios a la derecha.
 */
import Container from '@/components/layout/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import PawPattern from '@/components/ui/PawPattern'

const BENEFICIOS_PM = [
  'Orientación permanente',
  'Coordinación de servicios',
  'Seguimiento de atenciones',
  'Apoyo durante toda la afiliación',
]

export default function PetManager() {
  return (
    <section
      data-section="pet-manager"
      aria-label="Personal Pet Manager"
      className="py-16 sm:py-20 bg-blanco relative overflow-hidden"
    >
      <PawPattern color="#054564" opacity={0.03} className="inset-0" />
      <Container className="relative">
        <SectionHeading
          title="Personal Pet Manager"
          subtitle="Acompañamiento humano y personalizado en cada etapa de la afiliación."
        />

        <div
          data-purpose="pet-manager-content"
          className="grid md:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          {/* Fotografía de la asesora (izquierda) */}
          <div
            data-purpose="pm-foto"
            className="md:col-span-4 lg:col-span-4 relative"
          >
            <img
              src="/assets/images/about-team.webp"
              alt="Asesora Personal Pet Manager"
              data-purpose="pm-foto-asesora"
              className="w-full h-auto rounded-[24px] shadow-medio object-cover"
              style={{ aspectRatio: '4 / 3' }}
            />
          </div>

          {/* Explicación (centro) */}
          <div data-purpose="pm-texto" className="md:col-span-4 lg:col-span-4">
            <h3 className="font-titulos font-semibold text-azul-petroleo text-lg sm:text-xl mb-4">
              Siempre a tu lado
            </h3>
            <p className="text-gris-azulado leading-relaxed mb-6">
              El afiliado cuenta con un acompañamiento cercano y personalizado
              para orientarlo, coordinar servicios y resolver inquietudes en
              cada momento de la afiliación.
            </p>
          </div>

          {/* Panel verde pastel con lista de beneficios (derecha) */}
          <div
            data-purpose="pm-panel"
            className="md:col-span-4 lg:col-span-4 rounded-[24px] bg-verde-pastel p-6 sm:p-8 shadow-suave"
          >
            <h4 className="font-titulos font-semibold text-azul-petroleo text-sm sm:text-base mb-4">
              Tu Personal Pet Manager te acompaña con:
            </h4>
            <ul className="space-y-3 text-sm text-azul-petroleo">
              {BENEFICIOS_PM.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-verde-corporativo mt-0.5 shrink-0" />
                  <span className="leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
