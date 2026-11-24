import { readFile, rename, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const directoryPath = fileURLToPath(new URL('../clinicas_sim.json', import.meta.url))
const apiKey = process.env.GOOGLE_MAPS_GEOCODING_KEY
const args = new Set(process.argv.slice(2))
const limitArg = process.argv.find((arg) => arg.startsWith('--limit='))
const limit = args.has('--all') ? Number.POSITIVE_INFINITY : Number(limitArg?.split('=')[1] ?? 5)

if (!apiKey) {
  console.error('Define GOOGLE_MAPS_GEOCODING_KEY en el entorno local; no uses la clave pública del navegador.')
  process.exit(1)
}

if (!args.has('--confirm-billing')) {
  console.error('Esta acción consume Geocoding API. Confirma el posible coste añadiendo --confirm-billing.')
  process.exit(1)
}

const content = await readFile(directoryPath, 'utf8')
const directory = JSON.parse(content)
const pending = directory.clinicas.filter((clinic) => clinic.lat == null || clinic.lng == null).slice(0, limit)

if (!pending.length) {
  console.log('Todas las clínicas ya tienen coordenadas.')
  process.exit(0)
}

console.log(`Se geocodificarán hasta ${pending.length} clínicas. Las coincidencias ambiguas o parciales se omiten.`)

for (const clinic of pending) {
  const url = new URL('https://maps.googleapis.com/maps/api/geocode/json')
  url.searchParams.set('address', clinic.direccion_completa)
  url.searchParams.set('components', 'country:CO')
  url.searchParams.set('key', apiKey)

  try {
    const response = await fetch(url)
    const payload = await response.json()
    const match = payload.status === 'OK' ? payload.results?.[0] : null
    const isColombia = match?.address_components?.some((component) => component.short_name === 'CO' && component.types.includes('country'))

    if (!match || match.partial_match || !isColombia) {
      console.warn(`REVISAR ${clinic.id}: ${clinic.direccion_completa} (${payload.status ?? 'sin coincidencia'})`)
      continue
    }

    clinic.lat = match.geometry.location.lat
    clinic.lng = match.geometry.location.lng

    // Persistir cada resultado para no volver a pagar si el proceso se interrumpe.
    const tempPath = `${directoryPath}.tmp`
    await writeFile(tempPath, `${JSON.stringify(directory, null, 2)}\n`, 'utf8')
    await rename(tempPath, directoryPath)
    console.log(`OK ${clinic.id}: ${clinic.lat}, ${clinic.lng}`)
  } catch (error) {
    console.error(`ERROR ${clinic.id}:`, error instanceof Error ? error.message : error)
  }

  await new Promise((resolve) => setTimeout(resolve, 250))
}

console.log('Revisa los registros marcados REVISAR contra el directorio médico antes de publicar.')
