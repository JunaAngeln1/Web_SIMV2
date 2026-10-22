/**
 * Nuestros aliados — Estructura de contenido (sin estilos de diseño).
 * Logotipos autorizados pendientes de envío por SIM.
 */

export default function Allies() {
  return (
    <section data-section="aliados" aria-label="Nuestros aliados">
      <div data-purpose="section-inner">
        <header data-purpose="section-header">
          <h2 data-purpose="section-title">Una red que trabaja por su bienestar</h2>
          <p data-purpose="section-subtitle">
            Accede a una red veterinaria comprometida con la salud de tu mascota.
          </p>
        </header>

        <div data-purpose="allies-franja" role="region" aria-label="Logotipos de aliados">
          <span data-purpose="ally-placeholder">Logo aliado 1</span>
          <span data-purpose="ally-placeholder">Logo aliado 2</span>
          <span data-purpose="ally-placeholder">Logo aliado 3</span>
          <span data-purpose="ally-placeholder">Logo aliado 4</span>
        </div>

        <button data-purpose="cta-conoce-alidos" type="button">
          Conoce nuestra red de aliados
        </button>
      </div>
    </section>
  )
}
