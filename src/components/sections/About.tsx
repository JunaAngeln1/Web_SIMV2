/**
 * Nosotros / ¿EPS para mascotas? — Estructura de contenido (sin estilos de diseño).
 * Texto base proporcionado por SIM.
 * Fotografía real autorizada pendiente (pendiente de asset de SIM).
 */

export default function About() {
  return (
    <section data-section="nosotros" aria-label="Nosotros">
      <div data-purpose="section-inner">
        <div data-purpose="about-text">
          <h2 data-purpose="section-title">¿EPS para mascotas?</h2>
          <p data-purpose="about-description">
            Sí. Somos una Empresa Promotora de Servicios de Salud para perros y gatos. Nuestra
            misión es garantizar la prestación de servicios veterinarios a través de nuestros planes
            de atención y promover los diferentes servicios que se prestan en el sector veterinario
            del país. Sin importar su edad, raza ni preexistencias.
          </p>
        </div>

        <div data-purpose="about-image">
          <img
            src="/assets/images/about-team.webp"
            alt="Mascota y equipo veterinario"
            data-purpose="about-photo"
          />
        </div>
      </div>
    </section>
  )
}
