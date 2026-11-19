/**
 * src/components/sections/FeaturedNewsCarousel.tsx
 *
 * Carrusel de noticias destacadas para el inicio.
 * Auto-play con intervalo suave, puntos de navegación (dots) debajo y
 * controles manuales de anterior/siguiente. Cada slide muestra imagen,
 * categoría, título, descripción, fecha, tiempo de lectura y enlace.
 *
 * Imágenes: placeholders SVG (pendiente de fotos de SIM).
 */

import { useCallback, useEffect, useRef, useState } from 'react'
import { news } from '@/data/news'

interface Props {
  items?: typeof news
}

export default function FeaturedNewsCarousel({ items = news }: Props) {
  const [activeIndex, setActiveIndex] = useState(0)
  const timerRef = useRef<number | null>(null)

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % items.length)
  }, [items.length])

  const prev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length)
  }, [items.length])

  const goTo = (index: number) => {
    setActiveIndex(index)
  }

  useEffect(() => {
    timerRef.current = window.setInterval(next, 5000)
    return () => {
      if (timerRef.current !== null) window.clearInterval(timerRef.current)
    }
  }, [next])

  const current = items[activeIndex]

  return (
    <section
      data-section="featured-news-carousel"
      aria-label="Carrusel de noticias destacadas"
      className="bg-transparent py-16 sm:py-24"
    >
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[16px] overflow-hidden shadow-suave border border-borde-suave">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Imagen */}
            <div className="relative h-64 md:h-80 lg:h-96 bg-azul-niebla">
              <img
                src={current.image}
                alt={`Imagen referencial: ${current.title}`}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>

            {/* Contenido */}
            <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
              <span className="inline-block mb-3 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-verde-acento text-blanco">
                {current.category}
              </span>
              <h2 className="font-titulos text-3xl sm:text-4xl lg:text-[44px] font-semibold text-azul-institucional tracking-tight leading-tight mb-4 line-clamp-2">
                {current.title}
              </h2>
              <p className="text-lg text-texto-principal leading-relaxed mb-6 line-clamp-3">
                {current.description}
              </p>
              <div className="mt-auto flex flex-wrap items-center gap-4 text-sm text-gris-azulado">
                <time className="font-medium">{current.date}</time>
                <span className="flex items-center gap-1">
                  <span className="block w-1 h-1 bg-verde-acento rounded-full" />
                  {current.readTime}
                </span>
              </div>
              <a
                href={`/noticias/${current.slug}`}
                className="mt-4 inline-flex items-center justify-center px-6 py-3 rounded-[12px] bg-azul-institucional text-blanco font-semibold text-sm transition-colors duration-200 hover:bg-azul-profundo"
              >
                Leer noticia
              </a>
            </div>
          </div>

          {/* Dots navigation */}
          <div className="flex justify-center gap-2 py-4 sm:py-6">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                aria-label={`Ir a la diapositiva ${index + 1}`}
                aria-current={activeIndex === index ? 'true' : undefined}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  activeIndex === index
                    ? 'bg-azul-institucional w-8'
                    : 'bg-gris-azulado/30 hover:bg-gris-azulado/60'
                }`}
              />
            ))}
          </div>

          {/* Controles manuales */}
          <button
            onClick={prev}
            aria-label="Diapositiva anterior"
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-blanco/90 backdrop-blur-sm shadow-suave text-azul-institucional hover:bg-azul-institucional hover:text-blanco transition-colors z-10"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Siguiente diapositiva"
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-blanco/90 backdrop-blur-sm shadow-suave text-azul-institucional hover:bg-azul-institucional hover:text-blanco transition-colors z-10"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
