/** Franja compacta con cuatro beneficios principales de S.I.M. */
import { PawPrint, ShieldCheck, Stethoscope, UsersRound } from 'lucide-react'

const BENEFICIOS = [
  {
    id: 'atencion-veterinaria',
    title: 'Atención veterinaria',
    description: 'consultas y orientación',
    Icon: PawPrint,
  },
  {
    id: 'asistencia-urgencias',
    title: 'Asistencia y urgencias',
    description: 'cuando más lo necesitas',
    Icon: Stethoscope,
  },
  {
    id: 'prevencion-bienestar',
    title: 'Prevención y bienestar',
    description: 'vacunas, controles y más',
    Icon: ShieldCheck,
  },
  {
    id: 'acompanamiento',
    title: 'Acompañamiento personalizado',
    description: 'con tu Personal Pet Manager',
    Icon: UsersRound,
  },
]

export default function Benefits() {
  return (
    <section
      data-section="beneficios"
      aria-label="Beneficios de los servicios SIM"
      className="relative z-20 -mt-7 bg-transparent px-3 pb-7 sm:-mt-10 sm:px-6 lg:px-8"
    >
      <div
        data-purpose="beneficios-grid"
        className="mx-auto grid min-h-[80px] w-[96%] max-w-[1360px] grid-cols-1 items-center overflow-hidden rounded-[24px] bg-gris-beneficios shadow-suave sm:grid-cols-2 sm:rounded-[36px] sm:px-2 xl:grid-cols-4"
      >
        {BENEFICIOS.map(({ id, title, description, Icon }, index) => (
          <div
            key={id}
            data-purpose="beneficio"
            className="relative flex min-h-[72px] min-w-0 items-center gap-3 px-4 py-3 sm:min-h-[76px] sm:gap-3.5 sm:px-4 sm:py-2 xl:min-h-[80px] xl:px-5"
          >
            <span className="relative flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full border border-verde-corporativo text-verde-corporativo">
              <Icon className="h-[23px] w-[23px]" strokeWidth={1.8} aria-hidden="true" />
              {id === 'acompanamiento' && (
                <PawPrint
                  className="absolute -bottom-0.5 -right-1 h-4 w-4 rounded-full bg-gris-beneficios p-[2px] text-verde-corporativo"
                  strokeWidth={2}
                  aria-hidden="true"
                />
              )}
            </span>

            <div className="min-w-0 text-left">
              <h2 className="font-titulos text-[13px] font-semibold leading-tight text-azul-petroleo sm:text-[13px] xl:text-[14px]">
                {title}
              </h2>
              <p className="mt-1 text-[12px] leading-tight text-texto-principal sm:text-[11px] xl:text-[12px]">
                {description}
              </p>
            </div>

            {(index === 0 || index === 2) && (
              <span
                className="pointer-events-none absolute right-0 top-1/2 hidden h-10 w-px -translate-y-1/2 bg-divisor-beneficios sm:block xl:hidden"
                aria-hidden="true"
              />
            )}
            {index < 3 && (
              <span
                className="pointer-events-none absolute right-0 top-1/2 hidden h-10 w-px -translate-y-1/2 bg-divisor-beneficios xl:block"
                aria-hidden="true"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
