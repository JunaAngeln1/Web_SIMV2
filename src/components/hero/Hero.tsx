/**
 * src/components/hero/Hero.tsx
 *
 * Hero principal como carrusel de 2 banners (Guía de Diseño §4.2).
 * Cada slide muestra una imagen de banner con su texto superpuesto.
 * Auto-avance entre los 2 banners con dots de navegación.
 * Dos botones fijos siempre visibles: "Conoce nuestros planes" y
 * "Habla con un asesor".
 */
import { useCallback, useEffect, useRef, useState } from 'react'
import Button from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'

const SLIDE_INTERVAL_MS = 5000

interface HeroSlide {
  image: string
  title: string
  description: string
}

const HERO_SLIDES: HeroSlide[] = [
  {
    image: '/assets/images/news/Banner Animales.webp',
    title: 'Ellos son parte de tu familia.',
    description:
      'Su bienestar también es nuestra prioridad. Planes de asistencia veterinaria para cuidar, proteger y acompañar a tus mascotas.',
  },
  {
    image: '/assets/images/news/Banner Familia.webp',
    title: 'Su bienestar es nuestra prioridad.',
    description:
      'Ellos son parte de tu familia. Accede a los planes de atención veterinaria de SIM y protégelos en cada etapa de su vida.',
  },
]

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)
  const timerRef = useRef<number | null>(null)
  const isPausedRef = useRef(false)

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length)
  }, [])

  const prev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
  }, [])

  const goTo = (index: number) => {
    setActiveIndex(index)
  }

  // Auto-play entre los 2 banners
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
      aria-label="Carrusel de banners principales"
      className="relative w-full min-h-[600px] overflow-hidden bg-blanco"
    >
      {/* Contenedor del carrusel de banners (ancho completo de pantalla) */}
      <div
        data-purpose="hero-carousel"
        className="relative w-full h-[560px] lg:h-[640px] overflow-hidden"
        onMouseEnter={() => (isPausedRef.current = true)}
        onMouseLeave={() => (isPausedRef.current = false)}
      >
        {/* Slides de banner */}
        {HERO_SLIDES.map((s, index) => (
          <div
            key={s.image}
            data-purpose={`hero-slide-${index}`}
            aria-hidden={index !== activeIndex}
            className={[
              'absolute inset-0 w-full h-full flex items-center',
              'transition-opacity duration-700 ease-in-out',
              index === activeIndex
                ? 'opacity-100 z-10 pointer-events-auto'
                : 'opacity-0 z-0 pointer-events-none',
            ].join(' ')}
          >
            {/* Imagen de banner de fondo */}
            <img
              src={s.image}
              alt={`Banner ${index + 1}`}
              data-purpose={`hero-banner-${index}`}
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
              loading="lazy"
            />

            {/* Overlay degradado: lado izquierdo claro para legibilidad del texto */}
            <div
              className="absolute inset-0 z-10 pointer-events-none"
              style={{
                background:
                  'linear-gradient(to right, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.85) 55%, rgba(255, 255, 255, 0) 100%)',
              }}
            />

            {/* Contenido: texto e botones (sobre el lado claro del overlay) */}
            <div className="w-full px-4 sm:px-6 lg:px-8 relative z-20">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 sm:py-20 h-full max-w-[1360px] mx-auto">
                <div data-purpose="hero-text" className="relative">
                  <h1
                    data-purpose="hero-title"
                    className="font-titulos font-semibold text-3xl sm:text-4xl lg:text-[44px] tracking-tight leading-[1.05] text-azul-petroleo mb-6"
                  >
                    {s.title}
                  </h1>
                  <p
                    data-purpose="hero-description"
                    className="text-lg sm:text-xl text-gris-azulado leading-relaxed mb-10 max-w-lg"
                  >
                    {s.description}
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
              </div>
            </div>
          </div>
        ))}

        {/* Controles de navegación anterior/siguiente */}
        <button
          onClick={prev}
          aria-label="Banner anterior"
          data-purpose="hero-prev"
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-blanco/90 backdrop-blur-sm shadow-suave text-azul-petroleo hover:bg-azul-petroleo hover:text-blanco transition-colors z-20"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={next}
          aria-label="Siguiente banner"
          data-purpose="hero-next"
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-blanco/90 backdrop-blur-sm shadow-suave text-azul-petroleo hover:bg-azul-petroleo hover:text-blanco transition-colors z-20"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots de navegación */}
        <div
          data-purpose="hero-dots"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20"
        >
          {HERO_SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              aria-label={`Ir al banner ${index + 1}`}
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
    </section>
  )
}
