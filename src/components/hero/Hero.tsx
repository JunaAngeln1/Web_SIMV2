/**
 * src/components/hero/Hero.tsx
 *
 * Hero principal según Guía de Diseño §4.2.
 * Título: "Ellos son parte de tu familia. Su bienestar también es nuestra prioridad."
 * Descripción: planes de asistencia veterinaria para cuidar, proteger y acompañar a las mascotas.
 * Acciones: "Conoce nuestros planes" y "Habla con un asesor".
 * Organización visual: dos columnas. Texto a la izquierda, fotografía de familia con mascotas
 * a la derecha. Fondos claros, título azul, huella decorativa.
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
      {/* Huella decorativa de fondo */}
      <PawPattern color="#D3E4E9" opacity={0.15} className="inset-0" />

      {/* Contenedor de dos columnas */}
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 sm:py-20">
          {/* Columna de texto (izquierda) */}
          <div data-purpose="hero-text" className="text-blanco">
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

          {/* Columna de imagen (derecha) */}
          <div data-purpose="hero-image" className="relative">
            <img
              src="/assets/sim-hero-cat.webp"
              alt="Familia con sus mascotas"
              data-purpose="hero-photo"
              className="w-full h-auto rounded-[24px] shadow-suave object-cover"
              style={{ aspectRatio: '4 / 3' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
