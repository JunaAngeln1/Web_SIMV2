/**
 * src/pages/noticiaDetalleLoader.ts
 *
 * Loader de la ruta dinámica /noticias/:slug.
 * Busca la noticia por slug y redirige a /noticias si no existe.
 */

import { redirect, type LoaderFunctionArgs } from 'react-router-dom'
import { news, type NewsItem } from '@/data/news'

export interface NoticiaDetalleData {
  noticia: NewsItem
}

export function noticiaDetalleLoader({ params }: LoaderFunctionArgs): NoticiaDetalleData {
  const noticia = news.find((n) => n.slug === params.slug)

  if (!noticia) {
    throw redirect('/noticias')
  }

  return { noticia }
}
