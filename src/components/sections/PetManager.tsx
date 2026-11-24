/**
 * Acompañamiento personalizado de SIM para la página de inicio.
 * La fotografía panorámica oficial se integra en una pieza visual continua
 * con la información del servicio y el panel de beneficios.
 */
import { ArrowRight, CalendarDays, Check, PawPrint } from 'lucide-react'

const BENEFICIOS_PM = [
  'Orientación permanente.',
  'Coordinación de servicios.',
  'Seguimiento de atenciones.',
  'Apoyo durante toda tu afiliación.',
]

export default function PetManager() {
  return (
    <section
      data-section="pet-manager"
      aria-label="Acompañamiento Personal Pet Manager"
      className="bg-blanco px-4 py-10 sm:px-6 sm:py-12 lg:px-8"
    >
      <div
        data-purpose="pet-manager-content"
        className="relative mx-auto grid max-w-[1360px] overflow-hidden rounded-[30px] bg-gris-claro shadow-suave md:min-h-[190px] md:grid-cols-[34%_40%_26%]"
      >
        {/* Fotografía oficial: el recorte amplio mantiene a la asesora protagonista. */}
        <div
          data-purpose="pm-foto"
          className="relative aspect-[8/3] overflow-hidden bg-blanco md:aspect-auto md:h-[190px]"
        >
          <img
            src="/assets/images/hero-banners/Asesora-veterinaria-con-huellas-pastel.webp"
            alt="Asesora de SIM con auriculares, atendiendo frente a su computador"
            data-purpose="pm-foto-asesora"
            className="absolute inset-0 h-full w-full object-contain object-left"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-gris-claro/40 md:to-gris-claro/70" aria-hidden="true" />
        </div>

        {/* Decoración de transición, sin función interactiva. */}
        <PawPrint
          className="pointer-events-none absolute left-[31%] top-1/2 z-10 hidden h-14 w-14 -translate-y-1/2 rotate-[-12deg] text-[#DDEBD0]/80 md:block"
          strokeWidth={1.5}
          aria-hidden="true"
        />

        {/* Información del servicio */}
        <div
          data-purpose="pm-texto"
          className="flex flex-col justify-center px-5 py-6 sm:px-8 md:px-5 md:py-4 lg:px-8"
        >
          <h2 className="font-titulos text-[22px] font-bold leading-tight tracking-tight sm:text-[26px] md:whitespace-nowrap">
            <span className="text-azul-petroleo">Tu Personal </span>
            <span className="text-verde-interactivo">Pet Manager</span>
          </h2>
          <p className="mt-2 max-w-[510px] text-[13px] leading-[1.55] text-texto-principal">
            No estás solo en el cuidado de tu mascota. Cuentas con un acompañamiento cercano y
            personalizado para orientarte, coordinar servicios y resolver tus inquietudes.
          </p>
          <button
            type="button"
            aria-disabled="true"
            data-pending="true"
            data-purpose="pm-cta-pendiente"
            className="mt-4 inline-flex h-[42px] w-fit items-center justify-center gap-3 rounded-full border-[1.5px] border-verde-corporativo bg-blanco px-5 text-sm font-semibold text-azul-petroleo transition-colors hover:bg-verde-pastel focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-verde-corporativo focus-visible:ring-offset-2"
          >
            Conoce cómo funciona
            <ArrowRight className="h-4 w-4 text-verde-corporativo" aria-hidden="true" />
          </button>
        </div>

        {/* Beneficios: panel integrado, no una tarjeta independiente. */}
        <div
          data-purpose="pm-panel"
          className="relative flex flex-col justify-center overflow-hidden bg-verde-pastel px-6 py-6 md:rounded-l-[48%_18px] md:px-5 md:py-4 lg:px-7"
        >
          <CalendarDays
            className="mb-2 h-9 w-9 text-verde-corporativo sm:h-10 sm:w-10"
            strokeWidth={1.7}
            aria-hidden="true"
          />
          <ul className="space-y-1.5 text-[12px] leading-snug text-azul-petroleo sm:text-[13px]">
            {BENEFICIOS_PM.map((beneficio) => (
              <li key={beneficio} className="flex items-start gap-2">
                <Check
                  className="mt-px h-4 w-4 shrink-0 text-verde-corporativo"
                  strokeWidth={2.5}
                  aria-hidden="true"
                />
                <span>{beneficio}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
