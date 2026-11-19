/**
 * src/components/hero/Hero.tsx
 *
 * Hero principal como carrusel de 4 noticias (Guía de Diseño §4.2).
 * Cada slide muestra una noticia con imagen, título y descripción.
 * Auto-avance cada 5 segundos, pausa al pasar el mouse.
 * Controles: dots de navegación y flechas anterior/siguiente.
 * Datos desde @/data/news (4 noticias).
 */
import { useCallback, useEffect, useRef, useState } from 'react'
import Button from '@/components/ui/Button'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import PawPattern from '@/components/ui/PawPattern'
import { news } from '@/data/news'

const SLIDE_INTERVAL_MS = 5000

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)
  const timerRef = useRef<number | null>(null)
  const isPausedRef = useRef(false)

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % news.length)
  }, [])

  const prev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + news.length) % news.length)
  }, [])

  const goTo = (index: number) => {
    setActiveIndex(index)
  }

  // Auto-play
  useEffect(() => {
    const start = () => {
      timerRef.current = window.setInterval(() => {
        if (!isPausedRef.current) next()
      }, SLIDE_INTERVAL_MS)
    }
    start()
    return () => {
      if (timerRef.current !== null) window.clearInterval(timerRef.current)
    }
  }, [next])

  return (
    <section
      data-section="hero"
      role="region"
      aria-label="Carrusel de noticias destacadas"
      className="relative w-full max-w-[1440px] min-h-[600px] mx-auto overflow-hidden bg-blanco mb-12"
    >
      {/* Huella decorativa de fondo */}
      <PawPattern color="#D3E4E9" opacity={0.15} className="inset-0" />

      {/* Contenedor del carrusel */}
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          data-purpose="hero-carousel"
          className="relative w-full h-[560px] lg:h-[640px] rounded-[24px] overflow-hidden shadow-suave border border-borde-suave"
          onMouseEnter={() => (isPausedRef.current = true)}
          onMouseLeave={() => (isPausedRef.current = false)}
        >
          {/* Slides */}
          {news.map((slide, index) => (
            <div
              key={slide.id}
              data-purpose={`hero-slide-${index}`}
              aria-hidden={index !== activeIndex}
              className={[
                'absolute inset-0 w-full h-full flex items-center',
                'transition-opacity duration-700 ease-in-out',
                index === activeIndex
                  ? 'opacity-100 z-10 pointer-events-auto'
                  : 'opacity-0 z-0 pointer-events-none',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              <div className="w-full h-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center px-6 sm:px-8 lg:px-12 py-10 sm:py-14">

                {/* Columna de texto (izquierda) */}
                <div data-purpose="hero-text" className="text-blanco">
                  <span
                    data-purpose="hero-category"
                    className="inline-block mb-4 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-verde-corporativo/20 text-verde-corporativo border border-verde-corporativo/30"
                  >
                    {slide.category}
                  </span>
                  <h1
                    data-purpose="hero-title"
                    className="font-titulos font-semibold text-3xl sm:text-4xl lg:text-[44px] tracking-tight leading-[1.05] text-azul-petroleo mb-6"
                  >
                    {slide.title}
                  </h1>
                  <p
                    data-purpose="hero-description"
                    className="text-lg sm:text-xl text-gris-azulado leading-relaxed mb-10 max-w-lg"
                  >
                    {slide.description}
                  </p>
                  <div data-purpose="hero-ctas" className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Button
                      variant="primary"
                      size="lg"
                      data-purpose="cta-principal"
                    >
                      Conoce nuestros planes{' '}
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                    <Button
                      variant="secondary"
                      size="lg"
                      data-purpose="cta-secundario"
                    >
                      Habla con un asesor
                    </Button>
                  </div>
                </div>

                {/* Columna de imagen (derecha) */}
                <div data-purpose="hero-image" className="relative hidden lg:block">
                  <img
                    src={slide.image}
                    alt={`Imagen referencial: ${slide.title}`}
                    data-purpose="hero-photo"
                    className="w-full h-[380px] rounded-[24px] shadow-medio object-cover"
                  />
                </div>

                {/* Imagen en móvil (apilada debajo del texto) */}
                <div data-purpose="hero-image-mobile" className="lg:hidden mt-8">
                  <img
                    src={slide.image}
                    alt={`Imagen referencial: ${slide.title}`}
                    data-purpose="hero-photo-mobile"
                    className="w-full h-[320px] rounded-[24px] shadow-medio object-cover mx-auto"
                  />
                </div>
              </div>
            </div>
          ))}

          {/* Controles de navegación */}
          <button
            onClick={prev}
            aria-label="Diapositiva anterior"
            data-purpose="hero-prev"
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-blanco/90 backdrop-blur-sm shadow-suave text-azul-petroleo hover:bg-azul-petroleo hover:text-blanco transition-colors z-20"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            aria-label="Siguiente diapositiva"
            data-purpose="hero-next"
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-blanco/90 backdrop-blur-sm shadow-suave text-azul-petroleo hover:bg-azul-petroleo hover:text-blanco transition-colors z-20"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots de navegación */}
          <div
            data-purpose="hero-dots"
            className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20"
          >
            {news.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                aria-label={`Ir a la diapositiva ${index + 1}`}
                aria-current={activeIndex === index ? 'true' : undefined}
                data-purpose={`hero-dot-${index}`}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? 'bg-verde-corporativo w-8'
                    : 'bg-gris-azulado/30 hover:bg-gris-azulado/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
