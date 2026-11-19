/**
 * src/components/hero/Hero.tsx
 *
 * Hero principal como banner de fondo (Guía de Diseño §4.2).
 * Imagen de fondo que ocupa toda la sección con texto superpuesto en el lado
 * izquierdo sobre un fondo claro para garantizar legibilidad.
 * Dos botones fijos siempre visibles: "Conoce nuestros planes" (primario) y
 * "Contáctanos" (secundario).
 */
import Button from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'
import PawPattern from '@/components/ui/PawPattern'

export default function Hero() {
  return (
    <section
      data-section="hero"
      role="region"
      aria-label="Hero principal"
      className="relative w-full max-w-[1440px] min-h-[600px] mx-auto overflow-hidden bg-blanco mb-12"
    >
      {/* Imagen de fondo: ocupa toda la sección */}
      <img
        src="/assets/fondo_verde_azul_turquesa.svg"
        alt=""
        data-purpose="hero-bg"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
      />

      {/* Overlay degradado: lado izquierdo claro para legibilidad del texto,
          lado derecho deja ver la imagen */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            'linear-gradient(to right, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.85) 55%, rgba(255, 255, 255, 0) 100%)',
        }}
      />

      {/* Huella decorativa */}
      <PawPattern color="#D3E4E9" opacity={0.1} className="inset-0 z-0" />

      {/* Contenido: texto e imagen lateral */}
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 sm:py-20">
          {/* Columna de texto (izquierda, sobre fondo claro) */}
          <div data-purpose="hero-text" className="relative">
            <h1
              data-purpose="hero-title"
              className="font-titulos font-semibold text-3xl sm:text-4xl lg:text-[44px] tracking-tight leading-[1.05] text-azul-petroleo mb-6"
            >
              Ellos son parte de tu familia. Su bienestar también es nuestra prioridad.
            </h1>
            <p
              data-purpose="hero-description"
              className="text-lg sm:text-xl text-gris-azulado leading-relaxed mb-10 max-w-lg"
            >
              Planes de asistencia veterinaria para cuidar, proteger y acompañar a tus
              mascotas en cada etapa de su vida.
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

          {/* No hay imagen de gato en el hero; la imagen de fondo cubre la sección */}
        </div>
      </div>
    </section>
  )
}
