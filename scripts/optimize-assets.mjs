/**
 * scripts/optimize-assets.mjs
 *
 * Pipeline de optimizacion de assets de S.I.M. (Servicios Integrales para Mascotas).
 *
 * Lee los originales de `assets-original/` (material entregado por SIM, nunca se
 * modifica) y genera los derivados optimizados en `public/assets/`.
 *
 * - Limpia metadata de procedencia (C2PA) y de editor (Inkscape / sodipodi).
 * - Convierte el gato PNG a WebP conservando el canal alpha.
 * - Extrae el frame 0 de los WebP animados (81 y 86 frames) a imagen estatica.
 * - Deriva favicon.svg, favicon-32.png y apple-touch-icon.png del logo oficial.
 *
 * Es idempotente: ejecutarlo dos veces produce el mismo resultado.
 *
 * Uso: npm run assets:optimize
 */

import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'
import { Resvg } from '@resvg/resvg-js'

const ROOT = path.resolve(import.meta.dirname, '..')
const SRC = path.join(ROOT, 'assets-original')
const OUT = path.join(ROOT, 'public', 'assets')

const ICON_NAMES = ['allies', 'veterinary-care', 'pet-plans', 'support']

/** Quita el bloque <metadata> (manifiesto C2PA) y los atributos de editor. */
function cleanSvg(svg) {
  return (
    svg
      .replace(/<metadata>[\s\S]*?<\/metadata>\s*/g, '')
      .replace(/\s+xmlns:(c2pa|inkscape|sodipodi|svg)="[^"]*"/g, '')
      .replace(/\s+(inkscape|sodipodi):[a-zA-Z0-9-]+="[^"]*"/g, '')
      .replace(/\r\n/g, '\n')
      .trimEnd() + '\n'
  )
}

/** Devuelve el viewBox declarado en el <svg> raiz. */
function getViewBox(svg) {
  const match = svg.match(/viewBox="([^"]*)"/)
  if (!match) throw new Error('El SVG no declara viewBox')
  return match[1].trim().split(/\s+/).map(Number)
}

/** Sustituye el viewBox del <svg> raiz conservando el resto del documento. */
function setViewBox(svg, viewBox) {
  return svg.replace(/viewBox="[^"]*"/, `viewBox="${viewBox}"`)
}

/** Contenido interno del <svg> raiz (sus hijos), sin la etiqueta exterior. */
function innerContent(svg) {
  const start = svg.indexOf('>', svg.indexOf('<svg')) + 1
  const end = svg.lastIndexOf('</svg>')
  return svg.slice(start, end).trim()
}

/** Escribe un archivo dentro de public/assets/ creando las carpetas necesarias. */
async function write(relativePath, data) {
  const target = path.join(OUT, relativePath)
  await fs.mkdir(path.dirname(target), { recursive: true })
  await fs.writeFile(target, data)
  const size = Buffer.isBuffer(data) ? data.length : Buffer.byteLength(data)
  console.log(`  ${relativePath.padEnd(34)} ${(size / 1024).toFixed(1).padStart(7)} KB`)
}

/**
 * Calcula el bounding box del contenido visible de un SVG.
 * Renderiza con resvg y recorta el alfa con sharp, que devuelve el offset.
 */
async function contentBBox(svg) {
  const [, , vbWidth] = getViewBox(svg)
  const probeWidth = 1000
  const png = new Resvg(svg, { fitTo: { mode: 'width', value: probeWidth } }).render().asPng()

  const { info } = await sharp(png).trim({ threshold: 1 }).toBuffer({ resolveWithObject: true })
  const scale = probeWidth / vbWidth

  return {
    x: info.trimOffsetLeft / scale,
    y: info.trimOffsetTop / scale,
    width: info.width / scale,
    height: info.height / scale,
  }
}

async function main() {
  console.log('\nOptimizando assets de S.I.M.\n')

  // ---------------------------------------------------------------- 1. Logo
  const logoRaw = await fs.readFile(path.join(SRC, 'Logotipo oficial.svg'), 'utf8')
  const logo = cleanSvg(logoRaw)
  await write('sim-logo.svg', logo)

  // ------------------------------------------------------- 2. Iconos oficiales
  for (const name of ICON_NAMES) {
    const raw = await fs.readFile(path.join(SRC, 'icons', `${name}.svg`), 'utf8')
    await write(path.join('icons', `${name}.svg`), cleanSvg(raw))
  }

  // ------------------------------------------------------------ 3. Gato hero
  const cat = await sharp(path.join(SRC, 'sim-hero-cat.png'))
    .resize({ width: 1400, withoutEnlargement: true })
    .webp({ quality: 82, alphaQuality: 90, effort: 6 })
    .toBuffer()
  await write('sim-hero-cat.webp', cat)

  // ------------------------------------- 4. Fotografias de Nosotros (frame 0)
  const aboutTeam = await sharp(path.join(SRC, 'about-veterinary-team.webp'), { page: 0 })
    .webp({ quality: 80, effort: 6 })
    .toBuffer()
  await write(path.join('images', 'about-team.webp'), aboutTeam)

  const aboutPet = await sharp(path.join(SRC, 'about-veterinary-team2.webp'), { page: 0 })
    .webp({ quality: 80, effort: 6 })
    .toBuffer()
  await write(path.join('images', 'about-pet.webp'), aboutPet)

  // ------------------------------------- 5. Favicons derivados del logo oficial
  const box = await contentBBox(logo)
  const side = Math.max(box.width, box.height) * 1.06
  const cx = box.x + box.width / 2
  const cy = box.y + box.height / 2
  const faviconSvg = setViewBox(logo, `${cx - side / 2} ${cy - side / 2} ${side} ${side}`)
  await write('favicon.svg', faviconSvg)

  const favicon32 = new Resvg(faviconSvg, { fitTo: { mode: 'width', value: 32 } }).render().asPng()
  await write('favicon-32.png', favicon32)

  const appleTouch = new Resvg(faviconSvg, {
    background: '#ffffff',
    fitTo: { mode: 'width', value: 180 },
  })
    .render()
    .asPng()
  await write('apple-touch-icon.png', appleTouch)

  console.log('\nListo.\n')
}

main().catch((error) => {
  console.error('\nError en optimize-assets:', error)
  process.exitCode = 1
})
