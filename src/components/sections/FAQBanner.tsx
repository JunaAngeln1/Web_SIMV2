/**
 * src/components/sections/FAQBanner.tsx
 *
 * Sección inferior de la página de inicio dividida en dos columnas:
 * - Izquierda (43%): Preguntas frecuentes con acordeón.
 * - Derecha (57%): Banner promocional con imagen y CTA.
 *
 * Según especificaciones de diseño de SIM.
 */
import { useState } from 'react'
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
      aria-label="Preguntas frecuentes y banner promocional"
      className="py-16 sm:py-20 bg-blanco relative overflow-hidden"
    >
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
        {/* Escritorio: dos columnas (43% FAQ | 57% Banner) */}
        <div
          data-purpose="faq-banner-grid"
          className="lg:flex lg:items-start gap-8 lg:gap-24"
        >
          {/* Columna izquierda: FAQ (43%) */}
          <div
            data-purpose="faq-column"
            className="lg:w-[43%] flex flex-col gap-6"
          >
            <h2
              data-purpose="faq-title"
              className="font-titulos font-bold text-azul-petroleo text-lg sm:text-xl lg:text-[24px] leading-tight mb-6"
            >
              Preguntas frecuentes
            </h2>

            {/* Acordeón */}
            <div
              data-purpose="faq-acordeon"
              className="space-y-2"
            >
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
                      onClick={() =>
                        setOpenIndex(isOpen ? null : index)
                      }
                      className="flex w-full items-center justify-between px-5 py-4 text-left bg-blanco transition-colors hover:bg-gris-claro/50"
                    >
                      <span
                        className="text-sm sm:text-base text-texto-principal font-medium leading-relaxed"
                      >
                        {faq.pregunta}
                      </span>
                      <span
                        className={`w-5 h-5 flex items-center justify-center text-azul-petroleo transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      >
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>
                    <div
                      id={`faq-respuesta-${index}`}
                      className={[
                        'px-5 pb-4 text-sm sm:text-base text-gris-azulado leading-relaxed',
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
            <a
              href="/noticias"
              data-purpose="cta-ver-mas-preguntas"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm sm:text-base font-medium text-azul-petroleo hover:text-azul-petroleo/80 transition-colors"
            >
              Ver más preguntas
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Columna derecha: Banner promocional (57%) */}
          <div
            data-purpose="banner-column"
            className="lg:w-[57%] relative flex flex-col justify-center h-full"
          >
            <div
              data-purpose="banner-image"
              className="relative w-full h-[320px] sm:h-[400px] lg:h-[480px] rounded-[20px] overflow-hidden shadow-medio"
            >
              {/* Degradado oscuro verdoso sobre el lado izquierdo para legibilidad */}
              <div
                className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#003047]/70 via-[#003047]/30 to-transparent pointer-events-none"
              />
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
              className="absolute inset-0 z-10 flex flex-col justify-center p-5 sm:p-8 lg:p-12 text-blanco pointer-events-auto"
            >
              <h3
                data-purpose="banner-title"
                className="font-titulos font-bold text-azul-petroleo/90 text-lg sm:text-xl lg:text-[28px] leading-tight mb-4 drop-shadow-md"
              >
                Tu mascota merece estar protegida.
              </h3>
              <p
                data-purpose="banner-description"
                className="text-sm sm:text-base text-blanco/90 leading-relaxed mb-6 max-w-lg drop-shadow-sm"
              >
                Empieza hoy a cuidar su bienestar con SIM.
              </p>
              <Button
                variant="primary"
                size="lg"
                data-purpose="cta-afiliarme-banner"
                className="whitespace-nowrap px-8"
              >
                Quiero afiliarme{' '}
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>

        {/* Móvil: FAQ primero, luego Banner (apilados verticalmente) */}
        <div
          data-purpose="faq-banner-mobile"
          className="lg:hidden space-y-8"
        >
          {/* FAQ móvil */}
          <div data-purpose="faq-column-mobile" className="flex flex-col gap-4">
            <h2
              data-purpose="faq-title-mobile"
              className="font-titulos font-bold text-azul-petroleo text-lg lg:text-[24px] mb-4"
            >
              Preguntas frecuentes
            </h2>
            <div data-purpose="faq-acordeon-mobile" className="space-y-2">
              {FAQS.map((faq, index) => {
                const isOpen = openIndex === index
                return (
                  <div
                    key={faq.id}
                    data-purpose="faq-item-mobile"
                    className="border border-borde-suave rounded-[16px] bg-blanco shadow-suave overflow-hidden"
                  >
                    <button
                      type="button"
                      data-purpose="faq-pregunta-mobile"
                      aria-expanded={isOpen}
                      aria-controls={`faq-respuesta-mobile-${index}`}
                      onClick={() =>
                        setOpenIndex(isOpen ? null : index)
                      }
                      className="flex w-full items-center justify-between px-4 py-3 text-left bg-blanco transition-colors hover:bg-gris-claro/50"
                    >
                      <span className="text-sm text-texto-principal font-medium">
                        {faq.pregunta}
                      </span>
                      <span
                        className={`w-5 h-5 flex items-center justify-center text-azul-petroleo transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      >
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>
                    <div
                      id={`faq-respuesta-mobile-${index}`}
                      className={[
                        'px-4 pb-3 text-sm text-gris-azulado leading-relaxed',
                        isOpen ? '' : 'hidden',
                      ].join(' ')}
                    >
                      {faq.respuesta}
                    </div>
                  </div>
                )
              })}
            </div>
            <a
              href="/noticias"
              data-purpose="cta-ver-mas-preguntas-mobile"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-azul-petroleo hover:text-azul-petroleo/80 transition-colors"
            >
              Ver más preguntas
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Banner móvil */}
          <div data-purpose="banner-column-mobile" className="relative">
            <div
              data-purpose="banner-image-mobile"
              className="relative w-full h-[320px] rounded-[20px] overflow-hidden shadow-medio"
            >
              <div
                className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#003047]/70 via-[#003047]/30 to-transparent pointer-events-none"
              />
              <img
                src="/assets/images/hero-banners/Banner Familia.webp"
                alt="Mujer sonriendo abrazando a su perro en entorno natural"
                data-purpose="banner-photo-mobile"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div
              data-purpose="banner-content-mobile"
              className="absolute inset-0 z-10 flex flex-col justify-center p-5 sm:p-8 text-blanco pointer-events-auto"
            >
              <h3
                data-purpose="banner-title-mobile"
                className="font-titulos font-bold text-azul-petroleo/90 text-lg lg:text-[28px] leading-tight mb-4 drop-shadow-md"
              >
                Tu mascota merece estar protegida.
              </h3>
              <p
                data-purpose="banner-description-mobile"
                className="text-sm text-blanco/90 leading-relaxed mb-6 max-w-lg drop-shadow-sm"
              >
                Empieza hoy a cuidar su bienestar con SIM.
              </p>
              <Button
                variant="primary"
                size="lg"
                data-purpose="cta-afiliarme-banner-mobile"
                className="whitespace-nowrap px-8"
              >
                Quiero afiliarme{' '}
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
