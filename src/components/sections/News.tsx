/**
 * src/components/sections/News.tsx
 *
 * Preguntas frecuentes según Guía de Diseño §4.8.
 * Lista tipo acordeón con 4 preguntas frecuentes. Cada pregunta se despliega
 * con un signo más. Incluye enlace "Ver más preguntas" al final.
 *
 * Preguntas:
 * 1. ¿Cómo puedo afiliar a mi mascota?
 * 2. ¿Qué planes ofrece SIM?
 * 3. ¿Qué son los periodos de carencia?
 * 4. ¿Puedo afiliar una mascota con enfermedades preexistentes?
 */
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import Container from '@/components/layout/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import PawPattern from '@/components/ui/PawPattern'

const FAQS = [
  {
    id: 'afiliar-mascota',
    pregunta: '¿Cómo puedo afiliar a mi mascota?',
    respuesta:
      'Puedes afiliar a tu mascota a través de nuestra página web en la sección de afiliación, por WhatsApp o acudiendo a cualquiera de nuestras IPS veterinarias aliadas. Un asesor te guiará en el proceso.',
  },
  {
    id: 'planes-sim',
    pregunta: '¿Qué planes ofrece SIM?',
    respuesta:
      'SIM ofrece tres planes: Élite (asistencia veterinaria esencial), Plus (bienestar y prevención) y Premium (protección integral con el mayor nivel de beneficios).',
  },
  {
    id: 'periodos-carencia',
    pregunta: '¿Qué son los periodos de carencia?',
    respuesta:
      'Son los tiempos que deben transcurrir después de la afiliación antes de que ciertos beneficios entren en vigencia. Los detalles varían según el plan elegido.',
  },
  {
    id: 'enfermedades-preexistentes',
    pregunta: '¿Puedo afiliar una mascota con enfermedades preexistentes?',
    respuesta:
      'Sí. En SIM afiliamos a tu mascota sin importar su edad, raza ni preexistencias. Consulta con un asesor para conocer la cobertura aplicable a tu caso.',
  },
]

export default function News() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section
      data-section="preguntas-frecuentes"
      aria-label="Preguntas frecuentes"
      className="py-16 sm:py-20 bg-blanco relative overflow-hidden"
    >
      <PawPattern color="#054564" opacity={0.03} className="inset-0" />
      <Container className="relative">
        <SectionHeading
          title="Preguntas frecuentes"
          subtitle="Resolvemos tus dudas sobre la afiliación y los planes de SIM."
        />

        <div
          data-purpose="faq-acordeon"
          className="space-y-3 max-w-3xl mx-auto"
        >
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={faq.id}
                data-purpose="faq-item"
                className="border border-borde-suave rounded-[16px] overflow-hidden shadow-suave"
              >
                <button
                  type="button"
                  data-purpose="faq-pregunta"
                  aria-expanded={isOpen}
                  aria-controls={`faq-respuesta-${index}`}
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between px-6 py-4 text-left bg-blanco transition-colors hover:bg-gris-claro/50"
                >
                  <span className="text-lg font-semibold text-azul-petroleo">
                    {faq.pregunta}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-verde-corporativo" aria-hidden="true" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-verde-corporativo" aria-hidden="true" />
                  )}
                </button>
                <div
                  id={`faq-respuesta-${index}`}
                  className={[
                    'px-6 pb-4 text-sm text-gris-azulado leading-relaxed',
                    isOpen ? '' : 'hidden',
                  ].join(' ')}
                >
                  {faq.respuesta}
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-8 text-center">
          <a
            href="/noticias"
            data-purpose="cta-ver-mas-preguntas"
            className="inline-flex items-center justify-center px-6 py-3 rounded-[9999px] border border-azul-petroleo text-azul-petroleo font-semibold text-sm transition-colors hover:bg-azul-petroleo hover:text-white"
          >
            Ver más preguntas
          </a>
        </div>
      </Container>
    </section>
  )
}
