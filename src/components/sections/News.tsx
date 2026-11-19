/**
 * src/components/sections/News.tsx
 *
 * Sección de noticias para el Inicio (Fase 1, ítem 3.6).
 * Muestra únicamente el carrusel de noticias destacadas y un botón
 * de "Más información" que lleva a la página /noticias.
 *
 * Imágenes: placeholders SVG (pendiente de fotos de SIM).
 */

import Container from '@/components/layout/Container'
import PawPattern from '@/components/ui/PawPattern'
import FeaturedNewsCarousel from '@/components/sections/FeaturedNewsCarousel'

export default function News() {
  return (
    <section
      data-section="noticias"
      aria-label="Noticias y consejos"
      className="py-16 sm:py-20 bg-blanco relative overflow-hidden"
    >
      <PawPattern color="#03497D" opacity={0.03} />
      <Container className="relative">
        <FeaturedNewsCarousel />
      </Container>

      <div className="relative mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <a
          href="/noticias"
          data-purpose="cta-ver-todas-noticias"
          className="mx-auto inline-flex items-center justify-center px-8 py-3.5 rounded-[12px] bg-verde-acento text-blanco font-semibold text-sm sm:text-base transition-colors duration-200 hover:bg-[#7a8d2a]"
        >
          Ver todas las noticias
        </a>
      </div>
    </section>
  )
}
