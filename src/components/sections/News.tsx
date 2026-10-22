/**
 * Noticias y consejos — Estructura de contenido (sin estilos de diseño).
 * Tres noticias destacadas en el inicio.
 * Imágenes: placeholders SVG en /assets/images/news/ (pendiente de fotos de SIM).
 */

const news = [
  {
    id: 'noticia-1',
    category: 'Prevención',
    title: 'Cuidados esenciales para tu perro en primavera',
    date: 'Marzo 2026',
    image: '/assets/images/news/noticia-prevencion.svg',
  },
  {
    id: 'noticia-2',
    category: 'Cuidado responsable',
    title: 'Alimentación balanceada para gatos adultos',
    date: 'Febrero 2026',
    image: '/assets/images/news/noticia-cuidado.svg',
  },
  {
    id: 'noticia-3',
    category: 'Bienestar animal',
    title: 'Señales de estrés en mascotas y cómo ayudar',
    date: 'Enero 2026',
    image: '/assets/images/news/noticia-bienestar.svg',
  },
]

export default function News() {
  return (
    <section data-section="noticias" aria-label="Noticias y consejos">
      <div data-purpose="section-inner">
        <header data-purpose="section-header">
          <h2 data-purpose="section-title">Noticias y consejos</h2>
          <p data-purpose="section-subtitle">
            Prevención, cuidado responsable y novedades de S.I.M.
          </p>
        </header>

        <div data-purpose="news-grid">
          {news.map((n) => (
            <article key={n.id} data-purpose="news-card">
              <img src={n.image} alt={`Imagen referencial: ${n.title}`} data-purpose="news-image" />
              <div data-purpose="news-content">
                <span data-purpose="news-category">{n.category}</span>
                <h3 data-purpose="news-title">{n.title}</h3>
                <time data-purpose="news-date">{n.date}</time>
                <a href="#" data-purpose="cta-leer-mas">
                  Leer más
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
