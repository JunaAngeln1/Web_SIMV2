/**
 * src/components/sections/FeaturedNewsCarousel.tsx
 *
 * Carrusel de noticias destacadas para la página de noticias.
 * Auto-play con intervalo suave, botón de pausa (WCAG 2.2.2), pausa al pasar
 * el cursor, puntos de navegación (dots) y controles anterior/siguiente.
 * Cada slide muestra imagen, categoría, título, descripción, fecha, tiempo de
 * lectura y enlace.
 *
 * Imágenes: placeholders SVG (pendiente de fotos de SIM).
 */

import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
import { news } from '@/data/news'

interface Props {
  items?: typeof news
}

export default function FeaturedNewsCarousel({ items = news }: Props) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [manualPaused, setManualPaused] = useState(false)
  const timerRef = useRef<number | null>(null)
  const hoverPausedRef = useRef(false)
  const manualPausedRef = useRef(false)

  useEffect(() => {
    manualPausedRef.current = manualPaused
  }, [manualPaused])

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
    if (items.length === 0) return
    timerRef.current = window.setInterval(() => {
      if (!hoverPausedRef.current && !manualPausedRef.current) next()
    }, 5000)
    return () => {
      if (timerRef.current !== null) window.clearInterval(timerRef.current)
    }
  }, [next, items.length])

  if (items.length === 0) return null

  const current = items[activeIndex]

  return (
    <section
      data-section="featured-news-carousel"
      role="region"
      aria-roledescription="carrusel"
      aria-label="Noticias destacadas"
      className="bg-transparent py-16 sm:py-24"
    >
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <div
          className="group relative rounded-[16px] overflow-hidden shadow-suave border border-borde-suave"
          onMouseEnter={() => (hoverPausedRef.current = true)}
          onMouseLeave={() => (hoverPausedRef.current = false)}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Imagen */}
            <div className="relative h-56 bg-azul-niebla sm:h-64 md:h-80 lg:h-96">
              <img
                src={current.image}
                alt={`Imagen referencial: ${current.title}`}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>

            {/* Contenido */}
            <div className="flex flex-col justify-center px-4 py-6 sm:p-8 lg:p-12">
              <span className="inline-block mb-3 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-verde-interactivo text-blanco self-start">
                {current.category}
              </span>
              <h2 className="mb-4 font-titulos text-2xl font-semibold leading-tight tracking-tight text-azul-petroleo sm:text-3xl md:text-4xl lg:text-[44px]">
                {current.title}
              </h2>
              <p className="mb-6 line-clamp-3 text-base leading-relaxed text-texto-principal sm:text-lg">
                {current.description}
              </p>
              <div className="mt-auto flex flex-wrap items-center gap-4 text-sm text-gris-azulado">
                <time className="font-medium">{current.date}</time>
                <span className="flex items-center gap-1">
                  <span className="block w-1 h-1 bg-verde-corporativo rounded-full" aria-hidden="true" />
                  {current.readTime}
                </span>
              </div>
              <Link
                to={`/noticias/${current.slug}`}
                className="mt-4 inline-flex min-h-[44px] items-center justify-center self-start rounded-[12px] bg-azul-petroleo px-6 py-3 font-semibold text-sm text-blanco transition-colors duration-200 hover:bg-azul-oscuro"
              >
                Leer noticia
              </Link>
            </div>
          </div>

          {/* Dots navigation (área táctil de 44 px) */}
          <div className="flex justify-center gap-1 py-2 sm:py-3">
            {items.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Ir a la noticia ${index + 1}`}
                aria-current={activeIndex === index ? 'true' : undefined}
                className="flex h-11 w-11 items-center justify-center"
              >
                <span
                  className={`block h-2 rounded-full transition-all duration-200 ${
                    activeIndex === index
                      ? 'w-8 bg-azul-petroleo'
                      : 'w-2 bg-gris-azulado/30 hover:bg-gris-azulado/60'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Controles manuales */}
          <button
            type="button"
            onClick={prev}
            aria-label="Noticia anterior"
            className="absolute left-2 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-blanco/95 text-azul-petroleo shadow-suave transition-colors hover:bg-azul-petroleo hover:text-blanco sm:left-4 sm:flex"
          >
            <ChevronLeft className="w-5 h-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Siguiente noticia"
            className="absolute right-2 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-blanco/95 text-azul-petroleo shadow-suave transition-colors hover:bg-azul-petroleo hover:text-blanco sm:right-4 sm:flex"
          >
            <ChevronRight className="w-5 h-5" aria-hidden="true" />
          </button>

          {/* Pausa / reanudar el auto-avance (WCAG 2.2.2) */}
          <button
            type="button"
            onClick={() => setManualPaused((p) => !p)}
            aria-label={manualPaused ? 'Reanudar carrusel' : 'Pausar carrusel'}
            aria-pressed={manualPaused}
            className="absolute bottom-2 right-2 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-blanco/95 text-azul-petroleo shadow-suave transition-colors hover:bg-azul-petroleo hover:text-blanco sm:bottom-4 sm:right-4"
          >
            {manualPaused ? (
              <Play className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Pause className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
    </section>
  )
}
