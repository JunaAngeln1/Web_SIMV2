/**
 * src/pages/NoticiaDetalle.tsx
 *
 * Página de detalle de una noticia individual.
 * Renderiza el contenido completo basado en el slug de la URL.
 * Si la noticia no existe, redirige a la lista de noticias.
 */

import { Link, useLoaderData } from 'react-router-dom'
import Header from '@/components/layout/Header'
import PageHero from '@/components/ui/PageHero'
import type { NoticiaDetalleData } from '@/pages/noticiaDetalleLoader'

export default function NoticiaDetalle() {
  const { noticia } = useLoaderData() as NoticiaDetalleData

  return (
    <main data-page="noticia-detalle" className="pt-[80px] sm:pt-[96px] pb-16 sm:pb-20 bg-blanco">
      <Header />

      <PageHero narrow>
        {/* Breadcrumbs / regreso */}
        <nav className="mb-6 sm:mb-8" aria-label="Navegación de noticia">
          <Link
            to="/noticias"
            className="text-sm font-medium text-azul-petroleo hover:underline flex items-center gap-1.5"
          >
            <span className="block w-1 h-1 rounded-full bg-gris-azulado" />
            Volver a noticias
          </Link>
        </nav>

        {/* Categoría */}
        <span className="inline-block mb-4 sm:mb-6 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-azul-niebla text-azul-petroleo">
          {noticia.category}
        </span>

        {/* Título */}
        <h1 className="mb-4 font-titulos text-[30px] font-bold leading-tight tracking-tight text-azul-petroleo sm:text-[44px]">
          {noticia.title}
        </h1>

        {/* Acento verde bajo el título */}
        <span className="block h-1 w-16 rounded-full bg-verde-corporativo" aria-hidden="true" />

        {/* Meta: fecha y tiempo de lectura */}
        <div className="mt-6 flex items-center gap-3 text-sm text-gris-azulado">
          <time>{noticia.date}</time>
          <span className="w-px h-3 bg-gris-azulado/30" />
          <span>{noticia.readTime}</span>
        </div>
      </PageHero>

      <div className="relative">
        <article className="relative mx-auto max-w-[768px] px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10">
          {/* Imagen destacada */}
          <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden rounded-[16px] shadow-medio mb-6 sm:mb-8">
            <img
              src={noticia.image}
              alt={`Imagen referencial: ${noticia.title}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Contenido */}
          <div data-purpose="noticia-contenido" className="text-texto-principal leading-relaxed">
            {noticia.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Botón de regreso final */}
          <div className="mt-12 sm:mt-16 pt-8 border-t border-borde-suave">
            <Link
              to="/noticias"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[12px] bg-verde-interactivo text-blanco font-semibold text-sm sm:text-base transition-colors duration-200 hover:bg-verde-interactivo-hover"
            >
              Volver a noticias
            </Link>
          </div>
        </article>
      </div>
    </main>
  )
}
