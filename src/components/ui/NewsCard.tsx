/**
 * src/components/ui/NewsCard.tsx
 *
 * Tarjeta editorial de noticia para la página de listado de noticias.
 * Imagen 16:9, categoría, título, descripción, fecha y enlace "Leer más".
 * Imágenes: placeholders SVG (pendiente de fotos de SIM).
 */

import { Link } from 'react-router-dom'
import Card from '@/components/ui/Card'

interface NewsCardProps {
  category: string
  title: string
  description: string
  date: string
  image: string
  alt: string
  href?: string
}

export default function NewsCard({
  category,
  title,
  description,
  date,
  image,
  alt,
  href = '#',
}: NewsCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden" padded hover>
      <div className="relative h-44 md:h-52 overflow-hidden rounded-[14px]">
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          loading="lazy"
        />
      </div>
      <div className="mt-4 flex flex-col">
        <span className="inline-block mb-2 px-2.5 py-1 rounded-[6px] text-[11px] font-semibold uppercase tracking-wider bg-azul-niebla text-azul-institucional">
          {category}
        </span>
        <h3 className="font-titulos text-lg sm:text-xl font-semibold text-texto-principal leading-tight line-clamp-2">
          {title}
        </h3>
        <p className="mt-2 text-sm text-gris-azulado leading-relaxed line-clamp-2">{description}</p>
        <div className="mt-4 flex items-center justify-between">
          <time className="text-xs font-medium text-gris-azulado">{date}</time>
          <Link
            to={href}
            className="text-xs font-medium text-azul-institucional hover:underline transition-colors duration-200"
          >
            Leer más
          </Link>
        </div>
      </div>
    </Card>
  )
}
