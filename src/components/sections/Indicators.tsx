/**
 * Indicadores "Conoce a la manada" — Estructura de contenido (sin estilos de diseño).
 * Cifras sugeridas por la skill; vigencia por confirmar con SIM antes de publicar.
 */

const indicators = [
  { label: 'mascotas afiliadas', value: '+4.000' },
  { label: 'convenios estratégicos', value: '+250' },
  { label: 'familias satisfechas', value: '+3.500' },
]

export default function Indicators() {
  return (
    <section data-section="indicadores" aria-label="Conoce a la manada">
      <div data-purpose="section-inner">
        <header data-purpose="section-header">
          <h2 data-purpose="section-title">Conoce a la manada</h2>
        </header>

        <div data-purpose="indicators-grid">
          {indicators.map((ind) => (
            <article key={ind.label} data-purpose="indicator">
              <span data-purpose="indicator-value" data-pending="true">
                {ind.value}
              </span>
              <span data-purpose="indicator-label">{ind.label}</span>
            </article>
          ))}
        </div>

        <p data-purpose="indicators-note">
          Cifras sujetas a verificación con SIM antes de publicar.
        </p>
      </div>
    </section>
  )
}
