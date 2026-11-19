/**
 * src/pages/Noticias.tsx
 *
 * Página completa de noticias de S.I.M.
 * Incluye: carrusel destacado, filtros de categorías, cuadrícula de
 * tarjetas de últimas noticias y botón final "Ver todas las noticias".
 *
 * Regla crítica (data/README.md): el contenido es de ejemplo claramente
 * identificable hasta que SIM apruebe las publicaciones oficiales.
 */

import { useState } from 'react'
import Header from '@/components/layout/Header'
import Container from '@/components/layout/Container'
import PageHero from '@/components/ui/PageHero'
import PawPattern from '@/components/ui/PawPattern'
import NewsCard from '@/components/ui/NewsCard'
import FeaturedNewsCarousel from '@/components/sections/FeaturedNewsCarousel'
import { news } from '@/data/news'

const CATEGORIES = ['Todas', 'Bienestar animal', 'Prevención', 'Novedades SIM', 'Consejos']

export default function Noticias() {
  const [activeCategory, setActiveCategory] = useState('Todas')

  const filteredNews =
    activeCategory === 'Todas' ? news : news.filter((n) => n.category === activeCategory)

  return (
    <main data-page="noticias" className="pt-[80px] sm:pt-[96px] pb-16 sm:pb-20">
      <Header />
      <PageHero
        title="Noticias y novedades"
        subtitle="Cuidar también es estar informado. Conoce nuestras novedades, consejos de bienestar animal y recomendaciones para proteger la salud de tu mascota."
      />
      <div className="relative overflow-hidden">
        <PawPattern color="#054564" opacity={0.025} />
        <Container>
          {/* Carrusel destacado */}
          <section
            data-section="noticias-destacado"
            aria-label="Noticia principal destacada"
            className="relative mt-10"
          >
            <FeaturedNewsCarousel />
          </section>

          {/* Filtros de categorías */}
          <section
            data-section="noticias-filtros"
            aria-label="Categorías de noticias"
            className="relative mt-16 sm:mt-20"
          >
            <div className="overflow-x-auto pb-2 scrollbar-hide sm:overflow-visible sm:pb-0">
              <div
                className="inline-flex flex-wrap gap-2 sm:gap-3 sm:flex-nowrap"
                role="tablist"
                aria-label="Filtrar noticias por categoría"
              >
                {CATEGORIES.map((cat) => {
                  const isActive = activeCategory === cat
                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      role="tab"
                      aria-selected={isActive}
                      className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? 'bg-azul-petroleo text-blanco shadow-suave'
                          : 'bg-gris-claro text-azul-petroleo border border-borde-suave hover:bg-azul-niebla'
                      }`}
                    >
                      {cat}
                    </button>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Cuadrícula de tarjetas */}
          <section
            data-section="noticias-listado"
            aria-label="Últimas noticias"
            className="relative mt-10 sm:mt-12"
          >
            <div
              data-purpose="noticias-grid"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {filteredNews.map((n) => (
                <NewsCard
                  key={n.id}
                  category={n.category}
                  title={n.title}
                  description={n.description}
                  date={n.date}
                  image={n.image}
                  alt={`Imagen referencial: ${n.title}`}
                  href={`/noticias/${n.slug}`}
                />
              ))}
            </div>
          </section>

          {/* Botón final */}
          <div className="relative mt-16 sm:mt-20">
            <a
              href="/noticias"
              data-purpose="cta-ver-todas-noticias"
              className="mx-auto inline-flex items-center justify-center px-8 py-3.5 rounded-[12px] bg-verde-corporativo text-blanco font-semibold text-sm sm:text-base transition-colors duration-200 hover:bg-[#528d0a]"
            >
              Ver todas las noticias
            </a>
          </div>
        </Container>
      </div>
    </main>
  )
}
