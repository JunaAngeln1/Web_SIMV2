/**
 * Banda de red de atención para Home: información, mapa geográfico de
 * Colombia, características de la red y fotografía veterinaria pendiente.
 */
import { ArrowRight, Building2, MapPin, Stethoscope } from 'lucide-react'

const CARACTERISTICAS_RED = [
  { label: 'IPS veterinarias aliadas', Icon: Building2 },
  { label: 'Diversas especialidades', Icon: Stethoscope },
  { label: 'Cobertura regional', Icon: MapPin },
]

// Puntos representativos y agrupados en el entorno de Bogotá y Cundinamarca.
const MARCADORES = [
  { x: 64, y: 45 },
  { x: 67, y: 47 },
  { x: 62, y: 49 },
  { x: 66, y: 51 },
  { x: 69, y: 53 },
]

export default function Allies() {
  return (
    <section
      data-section="red-atencion"
      aria-label="Nuestra red de atención"
      className="bg-blanco px-4 py-8 sm:px-6 lg:px-8"
    >
      <div
        data-purpose="red-atencion-content"
        className="mx-auto grid max-w-[1360px] items-center gap-5 md:min-h-[160px] md:grid-cols-[30%_17%_22%_31%] md:gap-0"
      >
        {/* Zona 1: texto y botón pendiente de destino. */}
        <div data-purpose="red-texto" className="py-2 md:pr-6">
          <h2 className="font-titulos text-[23px] font-bold leading-tight text-azul-petroleo sm:text-[25px]">
            Nuestra red de atención
          </h2>
          <p className="mt-2 text-[13px] leading-[1.5] text-texto-principal sm:text-sm">
            Contamos con IPS veterinarias aliadas en Bogotá, Soacha, Chía, Funza, Mosquera, Madrid y
            Facatativá.
          </p>
          <button
            type="button"
            aria-disabled="true"
            data-pending="true"
            data-purpose="cta-red-atencion-pendiente"
            className="mt-3 inline-flex min-h-[36px] items-center justify-center gap-2 rounded-full border-[1.5px] border-verde-corporativo bg-blanco px-4 text-xs font-semibold text-azul-petroleo transition-colors hover:bg-verde-pastel focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-verde-corporativo focus-visible:ring-offset-2 sm:text-[13px]"
          >
            Encuentra tu centro de atención
            <ArrowRight className="h-4 w-4 shrink-0 text-verde-corporativo" aria-hidden="true" />
          </button>
        </div>

        {/* Zona 2: mapa real con límites departamentales, fuente y licencia documentadas. */}
        <div data-purpose="red-mapa" className="flex justify-center py-2 md:px-2">
          <div className="relative h-[180px] w-[145px] sm:h-[200px] sm:w-[160px] md:h-[148px] md:w-full">
            <img
              src="/assets/images/maps/colombia-departments.svg"
              alt="Mapa de Colombia con divisiones departamentales"
              className="h-full w-full object-contain"
              loading="lazy"
            />
            {MARCADORES.map((point, index) => (
              <span
                key={index}
                aria-hidden="true"
                className="absolute -translate-x-1/2 -translate-y-full text-verde-corporativo drop-shadow-sm"
                style={{ left: `${point.x}%`, top: `${point.y}%` }}
              >
                <MapPin className="h-[17px] w-[17px] fill-verde-corporativo stroke-white" strokeWidth={1.5} />
                <span className="absolute left-1/2 top-[4px] h-[4px] w-[4px] -translate-x-1/2 rounded-full bg-white" />
              </span>
            ))}
          </div>
        </div>

        {/* Zona 3: características de la red veterinaria. */}
        <ul
          data-purpose="red-caracteristicas"
          className="flex flex-col justify-center gap-4 border-t border-verde-claro py-4 md:min-h-[130px] md:gap-3 md:border-l md:border-t-0 md:py-0 md:pl-6 lg:pl-8"
        >
          {CARACTERISTICAS_RED.map(({ label, Icon }) => (
            <li key={label} className="flex items-center gap-3 text-[13px] leading-tight text-azul-petroleo">
              <Icon className="h-5 w-5 shrink-0 text-azul-petroleo" strokeWidth={1.8} aria-hidden="true" />
              <span>{label}</span>
            </li>
          ))}
        </ul>

        {/* Zona 4: imagen temporal; requiere fotografía autorizada de consulta veterinaria. */}
        <div
          data-purpose="red-foto"
          data-pending="true"
          className="relative h-[190px] overflow-hidden rounded-[20px] bg-azul-niebla md:h-[150px] md:pl-5 lg:pl-7"
        >
          <img
            src="/assets/images/hero-banners/Asesora-veterinaria-con-huellas-pastel.webp"
            alt="Asesora de SIM atendiendo una consulta; fotografía de veterinaria con perro pendiente"
            data-purpose="red-foto-veterinaria"
            className="h-full w-full object-cover object-left"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
