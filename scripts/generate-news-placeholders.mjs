/**
 * scripts/generate-news-placeholders.mjs
 *
 * Genera los placeholders 16:9 de las tarjetas de noticias.
 *
 * Son marcadores de posicion identicos a la marca: degradado institucional azul,
 * orbitas, marca de agua del simbolo oficial y el tema de la noticia. No son
 * fotografias y no simulan contenido real: cuando SIM entregue las imagenes
 * autorizadas se sustituyen por archivos con el mismo nombre y el codigo no
 * cambia.
 *
 * Es idempotente: ejecutarlo dos veces produce el mismo resultado.
 *
 * Uso: npm run assets:placeholders
 */

import fs from 'node:fs/promises'
import path from 'node:path'

const ROOT = path.resolve(import.meta.dirname, '..')
const LOGO = path.join(ROOT, 'public', 'assets', 'sim-logo.svg')
const OUT = path.join(ROOT, 'public', 'assets', 'images', 'news')

const W = 1600
const H = 900

const NEWS = [
  { file: 'noticia-prevencion.svg', title: 'Prevencion y cuidado', topic: 'Salud y prevencion' },
  { file: 'noticia-cuidado.svg', title: 'Cuidado responsable', topic: 'Bienestar animal' },
  { file: 'noticia-bienestar.svg', title: 'Bienestar animal', topic: 'Novedades S.I.M.' },
]

/** Contenido interno del <svg> raiz, para reutilizar la marca como marca de agua. */
function innerContent(svg) {
  const start = svg.indexOf('>', svg.indexOf('<svg')) + 1
  const end = svg.lastIndexOf('</svg>')
  return svg.slice(start, end).trim()
}

function buildPlaceholder({ title, topic }, mark) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="Espacio reservado para ${topic}">
  <defs>
    <linearGradient id="fondo" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#03497D"/>
      <stop offset="1" stop-color="#48AFE8"/>
    </linearGradient>
    <linearGradient id="velo" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0" stop-color="#07345B" stop-opacity="0.55"/>
      <stop offset="1" stop-color="#07345B" stop-opacity="0"/>
    </linearGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#fondo)"/>
  <circle cx="1290" cy="170" r="300" fill="#ffffff" opacity="0.05"/>
  <circle cx="1290" cy="170" r="212" fill="none" stroke="#ffffff" stroke-opacity="0.20" stroke-width="2"/>
  <circle cx="1290" cy="170" r="140" fill="none" stroke="#ffffff" stroke-opacity="0.14" stroke-width="2"/>
  <circle cx="250" cy="760" r="190" fill="#ffffff" opacity="0.04"/>
  <circle cx="250" cy="760" r="120" fill="none" stroke="#ffffff" stroke-opacity="0.12" stroke-width="2"/>
  <rect width="${W}" height="${H}" fill="url(#velo)"/>

  <g transform="translate(${W / 2 - 62} ${H / 2 - 232}) scale(1.24)" opacity="0.20">
${mark}
  </g>

  <g text-anchor="middle" font-family="Poppins, 'Segoe UI', Arial, sans-serif">
    <text x="${W / 2}" y="${H / 2 - 24}" fill="#ffffff" font-size="64" font-weight="600">${title}</text>
    <text x="${W / 2}" y="${H / 2 + 42}" fill="#ffffff" fill-opacity="0.78" font-size="30" font-weight="400">Espacio reservado para la imagen oficial</text>
    <text x="${W / 2}" y="${H / 2 + 92}" fill="#ffffff" fill-opacity="0.55" font-size="20" font-weight="500" letter-spacing="3">${topic.toUpperCase()}</text>
  </g>
</svg>
`
}

async function main() {
  const logo = await fs.readFile(LOGO, 'utf8')
  const mark = innerContent(logo)

  await fs.mkdir(OUT, { recursive: true })

  console.log('\nGenerando placeholders de noticias\n')
  for (const item of NEWS) {
    const target = path.join(OUT, item.file)
    const svg = buildPlaceholder(item, mark)
    await fs.writeFile(target, svg)
    console.log(
      `  ${item.file.padEnd(34)} ${(Buffer.byteLength(svg) / 1024).toFixed(1).padStart(7)} KB`,
    )
  }
  console.log('\nListo.\n')
}

main().catch((error) => {
  console.error('\nError en generate-news-placeholders:', error)
  process.exitCode = 1
})
