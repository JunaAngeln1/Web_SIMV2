/**
 * src/components/hero/Hero.tsx
 *
 * Hero principal como carrusel de 2 banners (Guía de Diseño §4.2).
 * Cada slide muestra una imagen de banner con su texto superpuesto.
 * Auto-avance entre los 2 banners con dots de navegación y botón de pausa
 * (WCAG 2.2.2). Se pausa también al pasar el cursor por encima.
 * Dos botones fijos siempre visibles: "Conoce nuestros planes" y
 * "Habla con un asesor".
 */
import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowRight, MessageCircle, Pause, Play } from 'lucide-react'
import Button from '@/components/ui/Button'

const SLIDE_INTERVAL_MS = 5000

interface HeroSlide {
  image: string
  title: string
  description: string
}

const HERO_SLIDES: HeroSlide[] = [
  {
    image: '/assets/images/hero-banners/Banner Animales.webp',
    title: 'Ellos son parte de tu familia.',
    description:
      'Su bienestar también es nuestra prioridad. Planes de asistencia veterinaria para cuidar, proteger y acompañar a tus mascotas.',
  },
  {
    image: '/assets/images/hero-banners/Banner Familia.webp',
    title: 'Su bienestar es nuestra prioridad.',
    description:
      'Ellos son parte de tu familia. Accede a los planes de atención veterinaria de SIM y protégelos en cada etapa de su vida.',
  },
]

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [manualPaused, setManualPaused] = useState(false)
  const timerRef = useRef<number | null>(null)
  const hoverPausedRef = useRef(false)
  const manualPausedRef = useRef(false)

  useEffect(() => {
    manualPausedRef.current = manualPaused
  }, [manualPaused])

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length)
  }, [])

  const prev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
  }, [])

  const goTo = (index: number) => {
    setActiveIndex(index)
  }

  // Auto-play entre los 2 banners (respeta pausa manual y hover).
  useEffect(() => {
    timerRef.current = window.setInterval(() => {
      if (!hoverPausedRef.current && !manualPausedRef.current) next()
    }, SLIDE_INTERVAL_MS)
    return () => {
      if (timerRef.current !== null) window.clearInterval(timerRef.current)
    }
  }, [next])

  return (
    <section
      data-section="hero"
      role="region"
      aria-roledescription="carrusel"
      aria-label="Banners principales"
      className="relative w-full overflow-hidden bg-blanco"
    >
      {/* Contenedor del carrusel de banners (ancho completo de pantalla) */}
      <div
        data-purpose="hero-carousel"
        className="relative h-[560px] w-full max-w-full overflow-hidden sm:h-[580px] lg:h-[640px]"
        onMouseEnter={() => (hoverPausedRef.current = true)}
        onMouseLeave={() => (hoverPausedRef.current = false)}
      >
        {/* Slides de banner */}
        {HERO_SLIDES.map((s, index) => (
          <div
            key={s.image}
            data-purpose={`hero-slide-${index}`}
            role="group"
            aria-roledescription="diapositiva"
            aria-label={`${index + 1} de ${HERO_SLIDES.length}`}
            aria-hidden={index !== activeIndex}
            inert={index !== activeIndex}
            className={[
              'absolute inset-0 w-full h-full flex items-center',
              'transition-opacity duration-700 ease-in-out',
              index === activeIndex
                ? 'opacity-100 z-10 pointer-events-auto'
                : 'opacity-0 z-0 pointer-events-none',
            ].join(' ')}
          >
            {/* Imagen de banner de fondo (decorativa: el texto transmite el mensaje) */}
            <img
              src={s.image}
              alt=""
              data-purpose={`hero-banner-${index}`}
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
              loading={index === 0 ? 'eager' : 'lazy'}
              fetchPriority={index === 0 ? 'high' : 'auto'}
            />

            {/* Overlay degradado: lado izquierdo claro para legibilidad del texto */}
            <div
              className="absolute inset-0 z-10 pointer-events-none"
              style={{
                background:
                  'linear-gradient(to right, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.85) 55%, rgba(255, 255, 255, 0) 100%)',
              }}
            />

            {/* Contenido: texto y botones (sobre el lado claro del overlay) */}
            <div className="w-full px-4 sm:px-6 lg:px-8 relative z-20">
              <div className="mx-auto grid h-full max-w-[1360px] items-center gap-10 py-16 sm:gap-12 sm:py-20 lg:grid-cols-2 lg:gap-16">
                <div data-purpose="hero-text" className="relative">
                  <h1
                    data-purpose="hero-title"
                    className="mb-5 font-titulos text-2xl font-semibold leading-tight tracking-tight text-azul-petroleo sm:mb-6 sm:text-3xl md:text-4xl lg:text-[44px]"
                  >
                    {s.title}
                  </h1>
                  <p
                    data-purpose="hero-description"
                    className="mb-7 max-w-lg text-base leading-relaxed text-gris-azulado sm:mb-10 sm:text-lg md:text-xl"
                  >
                    {s.description}
                  </p>
                  <div data-purpose="hero-ctas" className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Button
                      variant="primary"
                      size="lg"
                      href="/planes"
                      data-purpose="cta-principal"
                      className="w-full justify-center px-4 sm:w-auto sm:px-8"
                    >
                      Conoce nuestros planes{' '}
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                    <Button
                      variant="secondary"
                      size="lg"
                      href="/contacto"
                      data-purpose="cta-secundario"
                      className="w-full justify-center px-4 sm:w-auto sm:px-8"
                    >
                      <MessageCircle className="w-4 h-4 mr-2 text-verde-corporativo" aria-hidden="true" />
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
          type="button"
          onClick={prev}
          aria-label="Banner anterior"
          data-purpose="hero-prev"
          className="absolute left-2 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-blanco/95 text-azul-petroleo shadow-suave transition-colors hover:bg-azul-petroleo hover:text-blanco sm:left-4 sm:flex"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Siguiente banner"
          data-purpose="hero-next"
          className="absolute right-2 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-blanco/95 text-azul-petroleo shadow-suave transition-colors hover:bg-azul-petroleo hover:text-blanco sm:right-4 sm:flex"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Pausa / reanudar el auto-avance (WCAG 2.2.2) */}
        <button
          type="button"
          onClick={() => setManualPaused((p) => !p)}
          aria-label={manualPaused ? 'Reanudar carrusel' : 'Pausar carrusel'}
          aria-pressed={manualPaused}
          data-purpose="hero-pause"
          className="absolute bottom-4 right-2 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full bg-blanco/95 text-azul-petroleo shadow-suave transition-colors hover:bg-azul-petroleo hover:text-blanco sm:bottom-6 sm:right-4"
        >
          {manualPaused ? (
            <Play className="w-5 h-5" aria-hidden="true" />
          ) : (
            <Pause className="w-5 h-5" aria-hidden="true" />
          )}
        </button>

        {/* Dots de navegación (área táctil de 44 px) */}
        <div
          data-purpose="hero-dots"
          className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-0 sm:bottom-6"
        >
          {HERO_SLIDES.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Ir al banner ${index + 1}`}
              aria-current={activeIndex === index ? 'true' : undefined}
              data-purpose={`hero-dot-${index}`}
              className="flex h-11 w-11 items-center justify-center"
            >
              <span
                className={`block h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? 'w-8 bg-verde-corporativo'
                    : 'w-2 bg-gris-azulado/30 hover:bg-gris-azulado/60'
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
