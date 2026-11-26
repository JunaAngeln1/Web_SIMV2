/** Banda horizontal de cuatro razones para elegir S.I.M. en Home. */
import { Heart, PawPrint, ShieldCheck, UsersRound } from 'lucide-react'

const ARGUMENTOS = [
  { id: 'respaldo', title: 'Respaldo veterinario de calidad', Icon: ShieldCheck },
  { id: 'planes', title: 'Planes según sus necesidades', Icon: UsersRound },
  { id: 'atencion', title: 'Atención cercana y confiable', Icon: Heart },
  { id: 'bienestar', title: 'Experiencia integral de bienestar', Icon: PawPrint },
]

export default function WhyChooseUs() {
  return (
    <section
      data-section="por-que-elegir-sim"
      aria-label="¿Por qué elegir SIM?"
      className="bg-blanco px-4 py-5 sm:px-6 lg:px-8"
    >
      <div
        data-purpose="argumentos-grid"
        className="mx-auto grid max-w-[1360px] grid-cols-2 items-stretch overflow-hidden rounded-[24px] bg-gris-claro sm:rounded-[32px] md:min-h-[90px] md:grid-cols-[20%_repeat(4,minmax(0,1fr))]"
      >
        {/* Encabezado orgánico */}
        <div className="col-span-2 flex items-center justify-center p-3 md:col-span-1 md:py-2 md:pl-3 md:pr-2">
          <h2 className="flex min-h-[58px] w-full items-center justify-center rounded-[42%_30%_38%_28%/42%_35%_40%_32%] bg-verde-pastel px-4 text-center font-titulos text-[19px] font-bold leading-tight text-azul-petroleo sm:min-h-[64px] sm:text-[22px] md:min-h-[74px]">
            <span>
              ¿Por qué elegir
              <br />
              SIM?
            </span>
          </h2>
        </div>

        {/* Cuatro bloques de beneficios */}
        {ARGUMENTOS.map(({ id, title, Icon }, index) => (
          <div
            key={id}
            data-purpose="argumento"
            className={`flex min-h-[92px] flex-col items-center justify-center gap-1.5 px-2 py-3 text-center sm:min-h-[105px] sm:px-4 md:min-h-0 md:py-2 ${
              index > 0 ? 'md:border-l md:border-borde-suave' : ''
            }`}
          >
            <Icon
              className="h-8 w-8 shrink-0 text-azul-petroleo sm:h-9 sm:w-9"
              strokeWidth={1.7}
              aria-hidden="true"
            />
            <p className="max-w-[150px] text-[11px] font-medium leading-snug text-azul-petroleo sm:text-[13px]">
              {title}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
