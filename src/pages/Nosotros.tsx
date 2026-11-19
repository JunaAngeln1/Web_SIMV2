import Container from '@/components/layout/Container'
import Header from '@/components/layout/Header'
import PageHero from '@/components/ui/PageHero'
import PawPattern from '@/components/ui/PawPattern'

export default function Nosotros() {
  return (
    <main data-page="nosotros" className="pt-[80px] sm:pt-[96px] pb-16 sm:pb-20">
      <Header />
      <PageHero
        title="Nosotros"
        subtitle="Qué es S.I.M., nuestra misión, propuesta de valor y cifras institucionales."
      />
      <div className="relative overflow-hidden">
        <PawPattern color="#03497D" opacity={0.025} />
        <Container>
          <section
            data-section="nosotros-institucional"
            aria-label="Nosotros"
            className="relative mt-10"
          >
            <div data-purpose="nosotros-contenido">
              <p className="text-gris-azulado">S.I.M.</p>
              <p className="mt-2 text-lg font-titulos text-azul-institucional">
                Servicios Integrales para Mascotas
              </p>
              <p className="mt-4 text-base text-gris-azulado">¿EPS para mascotas?</p>
              <p className="mt-6 leading-relaxed text-lg text-gris-azulado">
                Sí. Somos una Empresa Promotora de Servicios de Salud para perros y gatos. Nuestra
                misión es garantizar la prestación de servicios veterinarios a través de nuestros
                planes de atención y promover los diferentes servicios que se prestan en el sector
                veterinario del país. Sin importar su edad, raza ni preexistencias.
              </p>
            </div>
          </section>
        </Container>
      </div>
    </main>
  )
}
