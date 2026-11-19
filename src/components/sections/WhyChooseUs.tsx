/**
 * src/components/sections/WhyChooseUs.tsx
 *
 * ¿Por qué elegir SIM? según Guía de Diseño §4.7.
 * Cuatro argumentos para reforzar la confianza y resumir las ventajas de la marca.
 * Organización visual: banda horizontal de fondo claro, título destacado y
 * cuatro bloques con iconos.
 */
import Container from '@/components/layout/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import PawPattern from '@/components/ui/PawPattern'

const ARGUMENTOS = [
  {
    id: 'respaldo',
    title: 'Respaldo veterinario de calidad',
    description: 'Atención respaldada por profesionales y una red de IPS aliadas.',
    icon: '/assets/icons/veterinary-care.svg',
  },
  {
    id: 'planes',
    title: 'Planes según sus necesidades',
    description: 'Opciones de Élite, Plus y Premium para cada tipo de mascota y familia.',
    icon: '/assets/icons/pet-plans.svg',
  },
  {
    id: 'atencion',
    title: 'Atención cercana y confiable',
    description: 'Acompañamiento personalizado con tu Personal Pet Manager.',
    icon: '/assets/icons/support.svg',
  },
  {
    id: 'bienestar',
    title: 'Experiencia integral de bienestar',
    description: 'Prevención, vacunas, controles y servicios para una vida saludable.',
    icon: '/assets/icons/allies.svg',
  },
]

export default function WhyChooseUs() {
  return (
    <section
      data-section="por-que-elegir-sim"
      aria-label="¿Por qué elegir SIM?"
      className="py-16 sm:py-20 bg-gris-claro relative overflow-hidden"
    >
      <PawPattern color="#054564" opacity={0.03} className="inset-0" />
      <Container className="relative">
        <SectionHeading
          title="¿Por qué elegir SIM?"
          subtitle="Cuatro razones para confiar en el cuidado de tu mascota."
        />

        <div
          data-purpose="argumentos-grid"
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-center"
        >
          {ARGUMENTOS.map((a) => (
            <div
              key={a.id}
              data-purpose="argumento"
              className="flex flex-col items-center text-center gap-4 p-4 rounded-[20px] bg-blanco border border-borde-suave shadow-suave"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-verde-corporativo">
                <img
                  src={a.icon}
                  alt=""
                  className="w-6 h-6 drop-shadow-md"
                  aria-hidden="true"
                />
              </div>
              <h4 className="font-titulos font-semibold text-azul-petroleo text-sm sm:text-base">
                {a.title}
              </h4>
              <p className="text-xs sm:text-sm text-gris-azulado leading-relaxed">
                {a.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
