/**
 * src/components/sections/FAQBanner.tsx
 *
 * Sección inferior de la página de inicio dividida en dos columnas:
 * - Izquierda (43%): Preguntas frecuentes con acordeón.
 * - Derecha (57%): Banner promocional con imagen y CTA.
 * En móvil se apilan (FAQ primero, luego banner). Marcado responsive único.
 *
 * Según especificaciones de diseño de SIM.
 */
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'

const FAQS = [
  {
    id: 'afiliar-mascota',
    pregunta: '¿Cómo puedo afiliar a mi mascota?',
    respuesta:
      'Puedes afiliar a tu mascota a través de nuestra página web, por WhatsApp o acudiendo a cualquiera de nuestras IPS veterinarias aliadas. Un asesor te guiará en el proceso.',
  },
  {
    id: 'planes-sim',
    pregunta: '¿Qué planes ofrece SIM?',
    respuesta:
      'SIM ofrece tres planes: Élite (asistencia esencial), Plus (bienestar y prevención) y Premium (protección integral).',
  },
  {
    id: 'periodos-carencia',
    pregunta: '¿Qué son los periodos de carencia?',
    respuesta:
      'Son los tiempos que deben transcurrir después de la afiliación antes de que ciertos beneficios entren en vigencia. Varía según el plan.',
  },
  {
    id: 'enfermedades-preexistentes',
    pregunta: '¿Puedo afiliar una mascota con enfermedades preexistentes?',
    respuesta:
      'Sí. En SIM afiliamos a tu mascota sin importar su edad, raza ni preexistencias. Consulta con un asesor para conocer la cobertura.',
  },
]

export default function FAQBanner() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section
      data-section="faq-banner"
      id="preguntas-frecuentes"
      aria-label="Preguntas frecuentes y banner promocional"
      className="relative overflow-hidden bg-blanco py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <div
          data-purpose="faq-banner-grid"
          className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-24"
        >
          {/* Columna izquierda: FAQ (43%) */}
          <div data-purpose="faq-column" className="w-full lg:w-[43%] flex flex-col gap-6">
            <h2
              data-purpose="faq-title"
              className="font-titulos font-bold text-azul-petroleo text-lg sm:text-xl lg:text-[24px] leading-tight mb-2"
            >
              Preguntas frecuentes
            </h2>

            {/* Acordeón */}
            <div data-purpose="faq-acordeon" className="space-y-2">
              {FAQS.map((faq, index) => {
                const isOpen = openIndex === index
                return (
                  <div
                    key={faq.id}
                    data-purpose="faq-item"
                    className="border border-borde-suave rounded-[16px] bg-blanco shadow-suave overflow-hidden"
                  >
                    <button
                      type="button"
                      data-purpose="faq-pregunta"
                      aria-expanded={isOpen}
                      aria-controls={`faq-respuesta-${index}`}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-3 px-4 py-3 sm:px-5 sm:py-4 text-left bg-blanco transition-colors hover:bg-gris-claro/50"
                    >
                      <span className="text-sm sm:text-base text-texto-principal font-medium leading-relaxed">
                        {faq.pregunta}
                      </span>
                      <span
                        className={`w-5 h-5 shrink-0 flex items-center justify-center text-azul-petroleo transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      >
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>
                    <div
                      id={`faq-respuesta-${index}`}
                      className={[
                        'px-4 pb-3 sm:px-5 sm:pb-4 text-sm sm:text-base text-gris-azulado leading-relaxed',
                        isOpen ? '' : 'hidden',
                      ].join(' ')}
                    >
                      {faq.respuesta}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Enlace "Ver más preguntas" */}
            <Link
              to="/contacto"
              data-purpose="cta-ver-mas-preguntas"
              className="group inline-flex items-center gap-2 px-1 py-2 text-sm sm:text-base font-medium text-azul-petroleo hover:text-azul-petroleo/80 transition-colors"
            >
              Ver más preguntas
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>

          {/* Columna derecha: Banner promocional (57%) */}
          <div
            data-purpose="banner-column"
            className="w-full lg:w-[57%] relative flex flex-col justify-center"
          >
            <div
              data-purpose="banner-image"
              className="relative h-[290px] w-full overflow-hidden rounded-[20px] shadow-medio sm:h-[400px] lg:h-[480px]"
            >
              {/* Degradado oscuro sobre el lado izquierdo para legibilidad */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-azul-oscuro/70 via-azul-oscuro/30 to-transparent pointer-events-none" />
              <img
                src="/assets/images/hero-banners/Banner Familia.webp"
                alt="Mujer sonriendo abrazando a su perro en entorno natural"
                data-purpose="banner-photo"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Contenido del banner sobre la imagen */}
            <div
              data-purpose="banner-content"
              className="absolute inset-0 z-10 flex flex-col justify-center p-4 text-white sm:p-8 lg:p-12"
            >
              <h3
                data-purpose="banner-title"
                className="mb-3 font-titulos text-lg font-bold leading-tight text-white drop-shadow-md sm:mb-4 sm:text-xl lg:text-[28px]"
              >
                Tu mascota merece estar protegida.
              </h3>
              <p
                data-purpose="banner-description"
                className="mb-5 max-w-lg text-sm leading-relaxed text-white/90 drop-shadow-sm sm:mb-6 sm:text-base"
              >
                Empieza hoy a cuidar su bienestar con SIM.
              </p>
              <div>
                <Button
                  variant="primary"
                  size="lg"
                  href="/contacto"
                  data-purpose="cta-afiliarme-banner"
                  className="min-h-[44px] whitespace-nowrap px-5 sm:px-8"
                >
                  Quiero afiliarme{' '}
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
