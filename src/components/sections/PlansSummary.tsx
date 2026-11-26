/** Resumen de los tres planes en la página de inicio. */
import { ArrowRight, PawPrint } from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from '@/components/layout/Container'
import { plans } from '@/data/plans'

function HomePlanCard({ plan }: { plan: (typeof plans)[number] }) {
  const featured = plan.id === 'plus'

  return (
    <article
      data-purpose="plan-card"
      data-plan={plan.id}
      className={`relative flex min-h-[190px] min-w-0 overflow-visible rounded-[24px] border bg-gris-plan sm:min-h-[205px] ${
        featured ? 'border-[1.5px] border-verde-corporativo' : 'border-transparent'
      }`}
    >
      {featured && (
        <span className="absolute -right-2.5 -top-3 z-10 rounded-full bg-verde-interactivo px-3 py-1 text-[10px] font-semibold leading-none text-white shadow-sm">
          Más completo
        </span>
      )}
      <div className="h-full w-[43%] shrink-0 overflow-hidden rounded-l-[23px]">
        <img
          src={plan.image}
          alt={`Mascota del plan ${plan.name}`}
          className="h-full w-full object-cover object-center"
          loading="lazy"
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col items-start px-4 py-4 sm:px-5 sm:py-5">
        <span className="text-xs leading-none text-azul-petroleo sm:text-[13px]">Plan</span>
        <h3 className="mt-1.5 font-titulos text-[24px] font-bold leading-tight text-azul-petroleo sm:text-[28px]">
          {plan.name}
        </h3>
        <p className="mt-2 line-clamp-3 text-[13px] leading-[1.45] text-texto-principal sm:text-[13px]">
          {plan.tagline}
        </p>
        <Link
          to="/planes"
          data-purpose="cta-ver-beneficios"
          className={`group mt-auto inline-flex min-h-[38px] w-fit items-center justify-center gap-2 rounded-full border px-4 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-verde-corporativo focus-visible:ring-offset-2 sm:text-xs ${
            featured
              ? 'border-verde-interactivo bg-verde-interactivo text-white hover:bg-verde-interactivo-hover'
              : 'border-azul-petroleo bg-white text-azul-petroleo hover:bg-azul-muy-claro'
          }`}
        >
          Ver beneficios
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}

export default function PlansSummary() {
  return (
    <section
      data-section="planes-resumidos"
      aria-labelledby="planes-resumidos-titulo"
      className="relative overflow-hidden bg-blanco py-14 sm:py-16 lg:py-20"
    >
      <Container className="relative">
        <header className="mb-9 text-center sm:mb-10">
          <h2
            id="planes-resumidos-titulo"
            className="font-titulos text-[28px] font-bold leading-tight tracking-tight text-azul-petroleo sm:text-[32px]"
          >
            Nuestros planes
          </h2>
          <p className="mt-2 text-[13px] text-texto-principal sm:text-sm">
            Elige la protección que mejor se adapta a las necesidades de tu mascota.
          </p>
        </header>

        <PawPrint
          className="pointer-events-none absolute -left-1 top-[58%] hidden h-11 w-11 -rotate-12 text-verde-huella/70 lg:block"
          strokeWidth={1.6}
          aria-hidden="true"
        />
        <PawPrint
          className="pointer-events-none absolute -right-1 top-[58%] hidden h-11 w-11 rotate-12 text-azul-grisaceo/75 lg:block"
          strokeWidth={1.6}
          aria-hidden="true"
        />

        <div
          data-purpose="plans-grid"
          className="mx-auto grid max-w-[1120px] grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6"
        >
          {plans.map((plan) => (
            <HomePlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </Container>
    </section>
  )
}
