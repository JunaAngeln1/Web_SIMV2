/**
 * src/components/sections/News.tsx
 *
 * Noticias y consejos con diseño aplicado.
 * Tres noticias destacadas en el inicio.
 * Tarjeta editorial: imagen 16:9, categoría, título, fecha y enlace "Leer más".
 * Imágenes: placeholders SVG (pendiente de fotos de SIM).
 */
import Card from '@/components/ui/Card'
import Container from '@/components/layout/Container'
import SectionHeading from '@/components/ui/SectionHeading'

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
    <section
      data-section="noticias"
      aria-label="Noticias y consejos"
      className="py-16 sm:py-20 bg-blanco"
    >
      <Container>
        <SectionHeading
          title="Noticias y consejos"
          subtitle="Prevención, cuidado responsable y novedades de S.I.M."
        />

        <div data-purpose="news-grid" className="grid md:grid-cols-3 gap-6">
          {news.map((n) => (
            <Card key={n.id} hover className="flex flex-col h-full">
              <div className="relative h-40 md:h-48 overflow-hidden rounded-t-[var(--radius-tarjeta)]">
                <img
                  src={n.image}
                  alt={`Imagen referencial: ${n.title}`}
                  data-purpose="news-image"
                  className="w-full h-full object-cover"
                />
              </div>
              <div data-purpose="news-content" className="p-4 flex flex-col">
                <span
                  data-purpose="news-category"
                  className="text-xs font-semibold text-verde-sim uppercase tracking-wider mb-2"
                >
                  {n.category}
                </span>
                <h3
                  data-purpose="news-title"
                  className="font-titulos font-semibold text-base text-texto-principal mb-2 line-clamp-2"
                >
                  {n.title}
                </h3>
                <time data-purpose="news-date" className="text-xs text-gris-azulado mb-3">
                  {n.date}
                </time>
                <a
                  href="#"
                  data-purpose="cta-leer-mas"
                  className="mt-auto text-sm font-medium text-azul-institucional hover:underline"
                >
                  Leer más
                </a>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
