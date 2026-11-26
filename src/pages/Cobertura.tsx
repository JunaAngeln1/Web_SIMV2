import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  AlertCircle,
  Clock3,
  Crosshair,
  Heart,
  Handshake,
  MapPin,
  PawPrint,
  Search,
  SlidersHorizontal,
  Sparkles,
  X,
} from 'lucide-react'
import Header from '@/components/layout/Header'
import Container from '@/components/layout/Container'
import GoogleCoverageMap from '@/components/coverage/GoogleCoverageMap'
import directorio from '../../clinicas_sim.json'

type Clinic = (typeof directorio.clinicas)[number]
type Position = { lat: number; lng: number }

const clinics = directorio.clinicas as Clinic[]
const WA_URL = 'https://wa.me/573022386320'
const hasGeocodedClinics = clinics.some((clinic) => clinic.lat != null && clinic.lng != null)

function distanceKm(from: Position, to: Position) {
  const radians = (degrees: number) => (degrees * Math.PI) / 180
  const earthRadiusKm = 6371
  const deltaLat = radians(to.lat - from.lat)
  const deltaLng = radians(to.lng - from.lng)
  const value = Math.sin(deltaLat / 2) ** 2
    + Math.cos(radians(from.lat)) * Math.cos(radians(to.lat)) * Math.sin(deltaLng / 2) ** 2
  return earthRadiusKm * 2 * Math.atan2(Math.sqrt(value), Math.sqrt(1 - value))
}

function mapsDirectionsUrl(clinic: Clinic) {
  const destination = clinic.lat != null && clinic.lng != null
    ? `${clinic.lat},${clinic.lng}`
    : clinic.direccion_completa
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`
}

export default function Cobertura() {
  const [query, setQuery] = useState('')
  const [department, setDepartment] = useState('')
  const [city, setCity] = useState('')
  const [locality, setLocality] = useState('')
  const [open24, setOpen24] = useState(false)
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [view, setView] = useState<'map' | 'list'>('map')
  const [locationMessage, setLocationMessage] = useState('')
  const [userPosition, setUserPosition] = useState<Position | null>(null)
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [detailsOpen, setDetailsOpen] = useState(false)
  const [distanceLimit, setDistanceLimit] = useState('all')
  const [order, setOrder] = useState('nearby')
  const [specialtiesSelected, setSpecialtiesSelected] = useState<string[]>([])

  const departments = useMemo(
    () => [...new Set(clinics.map((clinic) => clinic.departamento))].sort((a, b) => a.localeCompare(b, 'es')),
    [],
  )
  const cities = useMemo(
    () => [...new Set(clinics.filter((clinic) => !department || clinic.departamento === department).map((clinic) => clinic.ciudad))].sort((a, b) => a.localeCompare(b, 'es')),
    [department],
  )
  const localities = useMemo(
    () => [...new Set(clinics.filter((clinic) => (!department || clinic.departamento === department) && (!city || clinic.ciudad === city)).map((clinic) => clinic.localidad).filter((value): value is string => Boolean(value)))].sort((a, b) => a.localeCompare(b, 'es')),
    [city, department],
  )
  const specialties = useMemo(
    () => [...new Set(clinics.map((clinic) => clinic.especialidad).filter((value): value is string => Boolean(value)))].sort((a, b) => a.localeCompare(b, 'es')),
    [],
  )

  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase('es')
    const filtered = clinics.filter((clinic) => {
      const searchable = `${clinic.nombre} ${clinic.departamento} ${clinic.ciudad} ${clinic.localidad ?? ''} ${clinic.direccion} ${clinic.direccion_completa}`.toLocaleLowerCase('es')
      return (!normalizedQuery || searchable.includes(normalizedQuery))
        && (!department || clinic.departamento === department)
        && (!city || clinic.ciudad === city)
        && (!locality || clinic.localidad === locality)
        && (!open24 || clinic.es24h)
        && (!specialtiesSelected.length || (clinic.especialidad != null && specialtiesSelected.includes(clinic.especialidad)))
    })
    return filtered.sort((a, b) => {
      if (userPosition && order === 'nearby') {
        const aHasPosition = a.lat != null && a.lng != null
        const bHasPosition = b.lat != null && b.lng != null
        if (aHasPosition !== bHasPosition) return aHasPosition ? -1 : 1
        if (a.lat != null && a.lng != null && b.lat != null && b.lng != null) {
          return distanceKm(userPosition, { lat: a.lat, lng: a.lng }) - distanceKm(userPosition, { lat: b.lat, lng: b.lng })
        }
      }
      return a.nombre.localeCompare(b.nombre, 'es')
    }).filter((clinic) => {
      if (!userPosition || distanceLimit === 'all') return true
      if (clinic.lat == null || clinic.lng == null) return false
      return distanceKm(userPosition, { lat: clinic.lat, lng: clinic.lng }) <= Number(distanceLimit)
    })
  }, [city, department, distanceLimit, locality, open24, order, query, specialtiesSelected, userPosition])

  const mapClinics = useMemo(() => results.map((clinic) => ({
    id: clinic.id,
    name: clinic.nombre,
    address: clinic.direccion_completa,
    lat: clinic.lat,
    lng: clinic.lng,
  })), [results])
  const handleMapSelect = useCallback((id: string) => setSelectedId(id), [])
  const selectedClinic = clinics.find((clinic) => clinic.id === selectedId) ?? null

  useEffect(() => {
    if (!detailsOpen) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setDetailsOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [detailsOpen])

  function useMyLocation() {
    if (!navigator.geolocation) {
      setLocationMessage('Este navegador no permite compartir ubicación. Puedes buscar por dirección o seleccionar una ciudad.')
      return
    }
    setLocationMessage('Solicitando permiso de ubicación…')
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserPosition({ lat: position.coords.latitude, lng: position.coords.longitude })
        setLocationMessage('Ubicación recibida. Las distancias aparecerán cuando se completen las coordenadas verificadas de las clínicas.')
      },
      () => setLocationMessage('No pudimos acceder a tu ubicación. Puedes buscar por dirección o seleccionar una ciudad.'),
      { enableHighAccuracy: true, timeout: 10000 },
    )
  }

  function clearFilters() {
    setQuery('')
    setDepartment('')
    setCity('')
    setLocality('')
    setOpen24(false)
    setSpecialtiesSelected([])
    setLocationMessage('')
    setUserPosition(null)
    setDistanceLimit('all')
    setSelectedId(null)
  }

  return (
    <main data-page="cobertura" className="min-h-screen bg-gris-claro pb-12 pt-[80px] sm:pt-[96px]">
      <Header />
      <Container>
        <header className="py-7 sm:py-10">
          <div className="flex items-start gap-4">
            <img src="/assets/sim-logo.svg" alt="S.I.M." className="mt-1 h-10 w-10 shrink-0 sm:h-12 sm:w-12" />
            <div>
              <h1 className="font-titulos text-[30px] font-bold leading-tight text-azul-petroleo sm:text-[44px]">
                Cobertura de <span className="text-verde-interactivo">S.I.M.</span>
              </h1>
              <p className="mt-2 text-base text-texto-principal sm:text-lg">
                Encuentra nuestras clínicas y aliados veterinarios más cerca de ti, en todo el país.
              </p>
            </div>
          </div>
          <button type="button" onClick={useMyLocation} className="mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-azul-petroleo px-6 text-sm font-semibold text-white transition-colors hover:bg-azul-oscuro focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-azul-petroleo focus-visible:ring-offset-2">
            <Crosshair className="h-4 w-4" aria-hidden="true" /> Usar mi ubicación
          </button>
          <div role="note" className="mt-5 flex items-start gap-2 rounded-xl border border-verde-claro bg-verde-pastel px-4 py-3 text-sm font-medium text-azul-petroleo">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <p className="mb-0">Recuerda que todos los servicios deben ser agendados y solicitados a través de la EPS SIM.</p>
          </div>
        </header>

          <div className="grid items-start gap-4 sm:gap-5 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-6">
          {filtersOpen && <button type="button" aria-label="Cerrar filtros" onClick={() => setFiltersOpen(false)} className="fixed inset-0 z-40 bg-azul-oscuro/40 lg:hidden" />}
          <aside className={`rounded-[24px] bg-white p-4 shadow-suave sm:p-6 ${filtersOpen ? 'fixed inset-x-0 bottom-0 z-50 max-h-[86dvh] overflow-y-auto rounded-b-none shadow-2xl lg:sticky lg:top-24 lg:max-h-none lg:overflow-visible lg:rounded-[24px]' : ''}`}>
            <button
              type="button"
              aria-expanded={filtersOpen}
              onClick={() => setFiltersOpen((open) => !open)}
              className="flex w-full items-center justify-between font-titulos text-lg font-semibold text-azul-petroleo lg:pointer-events-none"
            >
              <span className="flex items-center gap-2"><SlidersHorizontal className="h-5 w-5" aria-hidden="true" />Busca una clínica</span>
              <span className="text-xs font-normal text-gris-azulado lg:hidden">{filtersOpen ? 'Cerrar' : 'Abrir'}</span>
            </button>

            <div className={`${filtersOpen ? 'mt-5 block' : 'hidden'} space-y-4 lg:mt-5 lg:block`}>
              <button
                type="button"
                onClick={useMyLocation}
                className="flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-azul-petroleo px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-azul-oscuro focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-azul-petroleo focus-visible:ring-offset-2"
              >
                <Crosshair className="h-4 w-4" aria-hidden="true" /> Usar mi ubicación
              </button>

              <label className="block text-xs font-semibold text-azul-petroleo" htmlFor="clinic-query">Escribe tu dirección o barrio</label>
              <div className="relative -mt-3">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gris-azulado" aria-hidden="true" />
                <input
                  id="clinic-query"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Dirección, barrio o clínica"
                  className="h-11 w-full rounded-xl border border-borde-suave bg-white pl-9 pr-3 text-sm text-texto-principal outline-none transition focus:border-azul-petroleo focus:ring-2 focus:ring-azul-petroleo/20"
                />
              </div>

              <label className="block text-xs font-semibold text-azul-petroleo" htmlFor="department">Departamento</label>
              <select id="department" value={department} onChange={(event) => { setDepartment(event.target.value); setCity(''); setLocality('') }} className="-mt-3 h-11 w-full rounded-xl border border-borde-suave bg-white px-3 text-sm text-texto-principal outline-none focus:border-azul-petroleo focus:ring-2 focus:ring-azul-petroleo/20">
                <option value="">Todos los departamentos</option>
                {departments.map((item) => <option key={item} value={item}>{item}</option>)}
              </select>

              <label className="block text-xs font-semibold text-azul-petroleo" htmlFor="city">Ciudad</label>
              <select id="city" value={city} onChange={(event) => { setCity(event.target.value); setLocality('') }} className="-mt-3 h-11 w-full rounded-xl border border-borde-suave bg-white px-3 text-sm text-texto-principal outline-none focus:border-azul-petroleo focus:ring-2 focus:ring-azul-petroleo/20">
                <option value="">Todas las ciudades</option>
                {cities.map((item) => <option key={item} value={item}>{item}</option>)}
              </select>

              {localities.length > 0 && <>
                <label className="block text-xs font-semibold text-azul-petroleo" htmlFor="locality">Localidad o zona</label>
                <select id="locality" value={locality} onChange={(event) => setLocality(event.target.value)} className="-mt-3 h-11 w-full rounded-xl border border-borde-suave bg-white px-3 text-sm text-texto-principal outline-none focus:border-azul-petroleo focus:ring-2 focus:ring-azul-petroleo/20">
                  <option value="">Todas las localidades</option>
                  {localities.map((item) => <option key={item} value={item}>{item}</option>)}
                </select>
              </>}

              {specialties.length > 0 && <fieldset className="space-y-2">
                <legend className="mb-2 text-xs font-semibold text-azul-petroleo">Especialidades registradas</legend>
                {specialties.map((specialty) => <label key={specialty} className="flex items-center gap-2 text-sm text-gris-azulado">
                  <input type="checkbox" checked={specialtiesSelected.includes(specialty)} onChange={(event) => setSpecialtiesSelected((current) => event.target.checked ? [...current, specialty] : current.filter((item) => item !== specialty))} className="h-4 w-4 accent-azul-petroleo" />
                  {specialty}
                </label>)}
              </fieldset>}

              <div className="rounded-xl bg-azul-niebla px-3 py-3 text-xs leading-relaxed text-gris-azulado">
                <p className="mb-1 font-semibold text-azul-petroleo">Tipo de establecimiento</p>
                El archivo registra veterinarias aliadas; no identifica sedes propias de S.I.M.
              </div>

              {userPosition && hasGeocodedClinics && <>
                <label className="block text-xs font-semibold text-azul-petroleo" htmlFor="distance-limit">Distancia</label>
                <select id="distance-limit" value={distanceLimit} onChange={(event) => setDistanceLimit(event.target.value)} className="-mt-3 h-11 w-full rounded-xl border border-borde-suave bg-white px-3 text-sm text-texto-principal outline-none focus:border-azul-petroleo focus:ring-2 focus:ring-azul-petroleo/20">
                  <option value="2">Hasta 2 km</option><option value="5">Hasta 5 km</option><option value="10">Hasta 10 km</option><option value="20">Hasta 20 km</option><option value="all">Cualquier distancia</option>
                </select>
              </>}

              <label className="flex cursor-pointer items-center justify-between gap-3 rounded-xl bg-gris-claro px-3 py-3 text-sm text-azul-petroleo">
                <span className="flex items-center gap-2"><Clock3 className="h-4 w-4" aria-hidden="true" />Solo clínicas 24 horas</span>
                <input type="checkbox" checked={open24} onChange={(event) => setOpen24(event.target.checked)} className="h-4 w-4 accent-verde-interactivo" />
              </label>
              <button type="button" onClick={() => setFiltersOpen(false)} className="w-full rounded-full bg-azul-petroleo px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-azul-oscuro focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-azul-petroleo focus-visible:ring-offset-2">
                Buscar clínicas
              </button>
              <button type="button" onClick={clearFilters} className="w-full rounded-full border border-azul-petroleo px-4 py-2.5 text-sm font-semibold text-azul-petroleo transition-colors hover:bg-azul-petroleo hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-azul-petroleo focus-visible:ring-offset-2">
                Limpiar filtros
              </button>
              {locationMessage && <p role="status" className="mb-0 text-xs leading-relaxed text-gris-azulado">{locationMessage}</p>}
            </div>
          </aside>

          <div className="min-w-0 space-y-5">
            <section aria-label="Mapa de clínicas" className="overflow-hidden rounded-[24px] bg-white p-3 shadow-suave sm:p-5">
              <div className="mb-3 flex items-center justify-between gap-3">
                <h2 className="min-w-0 font-titulos text-base font-semibold leading-tight text-azul-petroleo sm:text-lg">Clínicas aliadas cerca de ti</h2>
                <div className="inline-flex shrink-0 rounded-full bg-gris-claro p-1" aria-label="Cambiar vista">
                  <button type="button" onClick={() => setView('map')} aria-pressed={view === 'map'} className={`rounded-full px-3 py-1.5 text-xs font-semibold ${view === 'map' ? 'bg-azul-petroleo text-white' : 'text-azul-petroleo'}`}>Mapa</button>
                  <button type="button" onClick={() => setView('list')} aria-pressed={view === 'list'} className={`rounded-full px-3 py-1.5 text-xs font-semibold ${view === 'list' ? 'bg-azul-petroleo text-white' : 'text-azul-petroleo'}`}>Lista</button>
                </div>
              </div>

              {view === 'map' ? <>
                <GoogleCoverageMap clinics={mapClinics} selectedId={selectedId} onSelect={handleMapSelect} userPosition={userPosition} />
                {!hasGeocodedClinics && <p className="mt-3 mb-0 rounded-xl bg-azul-niebla px-3 py-2 text-xs leading-relaxed text-gris-azulado">El mapa carga con Google Maps, pero el directorio todavía no tiene coordenadas para colocar los marcadores ni ordenar por cercanía.</p>}
              </> : (
                <div className="flex items-center gap-2 rounded-xl bg-azul-muy-claro px-4 py-3 text-xs text-azul-petroleo">
                  <PawPrint className="h-4 w-4 shrink-0" aria-hidden="true" /> Vista de lista activa. Selecciona una clínica para abrir indicaciones.
                </div>
              )}
              {view === 'map' && <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-[11px] text-gris-azulado">
                <span className="inline-flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-azul-petroleo" />Tu ubicación</span>
                <span className="inline-flex items-center gap-1.5"><PawPrint className="h-3.5 w-3.5 text-verde-corporativo" />Clínica aliada</span>
                <span className="inline-flex items-center gap-1.5"><Clock3 className="h-3.5 w-3.5 text-verde-interactivo" />Clínica 24 horas</span>
              </div>}
            </section>

            <section aria-labelledby="clinic-results-title">
              <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                <h2 id="clinic-results-title" className="font-titulos text-lg font-semibold text-azul-petroleo">Aliados cerca de ti · {results.length} resultados</h2>
                <label className="flex items-center gap-2 text-xs font-medium text-gris-azulado">Ordenar por
                  <select value={order} onChange={(event) => setOrder(event.target.value)} className="h-9 rounded-lg border border-borde-suave bg-white px-2 text-xs text-azul-petroleo">
                    <option value="nearby" disabled={!userPosition || !hasGeocodedClinics}>Más cercanos</option>
                    <option value="alphabetical">Orden alfabético</option>
                    <option value="type">Tipo de establecimiento</option>
                  </select>
                </label>
              </div>
              {results.length ? (
                <ul className="-mx-3 flex snap-x snap-mandatory gap-3 overflow-x-auto px-3 pb-3">
                  {results.map((clinic) => (
                    <li key={clinic.id} data-selected={selectedId === clinic.id || undefined} className={`flex w-[min(84vw,300px)] shrink-0 snap-start flex-col rounded-[20px] border bg-white p-4 shadow-suave transition-all duration-200 hover:-translate-y-[3px] hover:shadow-medio ${selectedId === clinic.id ? 'border-azul-petroleo ring-2 ring-azul-petroleo/20' : 'border-borde-suave'}`}>
                      <div className="relative -mx-4 -mt-4 mb-3 flex h-28 items-center justify-center rounded-t-[19px] bg-azul-niebla">
                        <PawPrint className="h-12 w-12 text-azul-petroleo/50" strokeWidth={1.4} aria-hidden="true" />
                        <span className="absolute right-2 top-2 inline-flex items-center gap-1 rounded-full bg-azul-petroleo px-2.5 py-1 text-[10px] font-semibold text-white"><Handshake className="h-3 w-3" aria-hidden="true" />Aliado</span>
                      </div>
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="mb-0 font-titulos text-base font-semibold leading-snug text-azul-petroleo">{clinic.nombre}</h3>
                        {clinic.es24h && <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-verde-pastel px-2 py-1 text-[10px] font-semibold text-azul-petroleo"><Clock3 className="h-3 w-3" aria-hidden="true" />24 h</span>}
                      </div>
                      <p className="mt-1 mb-0 text-xs text-gris-azulado">{clinic.ciudad}{clinic.localidad ? ` · ${clinic.localidad}` : ''}, {clinic.departamento}</p>
                      <p className="mt-2 mb-0 flex items-start gap-1.5 text-xs leading-relaxed text-texto-principal"><MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-azul-petroleo" aria-hidden="true" />{clinic.direccion}</p>
                      {userPosition && clinic.lat != null && clinic.lng != null && <p className="mt-2 mb-0 text-xs font-semibold text-azul-petroleo">A {distanceKm(userPosition, { lat: clinic.lat, lng: clinic.lng }).toFixed(1)} km aprox.</p>}
                      {clinic.especialidad && <span className="mt-2 inline-flex w-fit rounded-full bg-azul-muy-claro px-2.5 py-1 text-[10px] font-medium text-azul-petroleo">{clinic.especialidad}</span>}
                      <div className="mt-auto grid grid-cols-1 gap-2 pt-4">
                        <button type="button" onClick={() => { setSelectedId(clinic.id); setDetailsOpen(true) }} className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-azul-petroleo px-3 py-2 text-xs font-semibold text-azul-petroleo transition-colors hover:bg-azul-petroleo hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-azul-petroleo focus-visible:ring-offset-2">Ver detalles</button>
                        <a href={mapsDirectionsUrl(clinic)} target="_blank" rel="noreferrer" className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-azul-petroleo px-3 py-2 text-xs font-semibold text-azul-petroleo transition-colors hover:bg-azul-petroleo hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-azul-petroleo focus-visible:ring-offset-2">
                          <MapPin className="h-4 w-4" aria-hidden="true" /> Cómo llegar
                        </a>
                        <a href={`${WA_URL}?text=${encodeURIComponent(`Hola, quiero agendar por EPS SIM en ${clinic.nombre}, ${clinic.ciudad}.`)}`} target="_blank" rel="noreferrer" className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-verde-interactivo px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-verde-interactivo-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-verde-interactivo focus-visible:ring-offset-2">
                          <Heart className="h-4 w-4" aria-hidden="true" /> Agendar por EPS SIM
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="rounded-2xl bg-white px-5 py-10 text-center shadow-suave">
                  <Sparkles className="mx-auto h-8 w-8 text-verde-interactivo" aria-hidden="true" />
                  <p className="mt-3 mb-1 font-semibold text-azul-petroleo">No encontramos clínicas con esos filtros.</p>
                  <button type="button" onClick={clearFilters} className="mt-2 text-sm font-semibold text-azul-petroleo underline underline-offset-2">Limpiar filtros</button>
                </div>
              )}
            </section>
          </div>
        </div>

        <section aria-label="Beneficios de la red aliada" className="mt-8 grid gap-3 rounded-[24px] bg-white p-4 shadow-suave sm:grid-cols-3 sm:p-5">
          {[
            { label: 'Aliados verificados', Icon: Crosshair },
            { label: 'Atención cerca de ti', Icon: MapPin },
            { label: 'Cuidado y bienestar animal', Icon: Heart },
          ].map(({ label, Icon }) => <div key={label} className="flex items-center justify-center gap-2 py-2 text-sm font-medium text-azul-petroleo"><Icon className="h-5 w-5 text-verde-interactivo" aria-hidden="true" />{label}</div>)}
        </section>
      </Container>

      {detailsOpen && selectedClinic && (
        <div className="fixed inset-0 z-[70] flex items-end justify-center bg-azul-oscuro/55 p-0 backdrop-blur-sm sm:items-center sm:p-5" onMouseDown={(event) => { if (event.target === event.currentTarget) setDetailsOpen(false) }}>
          <section role="dialog" aria-modal="true" aria-labelledby="clinic-detail-title" className="max-h-[90dvh] w-full max-w-xl overflow-y-auto rounded-t-[24px] bg-white p-4 shadow-xl sm:rounded-[24px] sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-1 rounded-full bg-azul-niebla px-3 py-1 text-xs font-semibold text-azul-petroleo"><PawPrint className="h-3.5 w-3.5" aria-hidden="true" />Aliado SIM</span>
                <h2 id="clinic-detail-title" className="mt-3 font-titulos text-2xl font-bold text-azul-petroleo">{selectedClinic.nombre}</h2>
              </div>
              <button type="button" aria-label="Cerrar detalles" onClick={() => setDetailsOpen(false)} className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-azul-petroleo hover:bg-azul-niebla focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-azul-petroleo"><X className="h-5 w-5" /></button>
            </div>
            <div className="mt-5 space-y-3 text-sm text-gris-azulado">
              <p className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 text-azul-petroleo" aria-hidden="true" />{selectedClinic.direccion_completa}</p>
              <p className="flex gap-2"><Clock3 className="h-4 w-4 shrink-0 text-azul-petroleo" aria-hidden="true" />{selectedClinic.es24h ? 'Atención 24 horas, según el directorio.' : 'Horario no registrado en el directorio.'}</p>
              {selectedClinic.especialidad && <p><strong className="text-azul-petroleo">Especialidad:</strong> {selectedClinic.especialidad}</p>}
              <p>Teléfono y WhatsApp propios del establecimiento no están incluidos en el directorio.</p>
            </div>
            <p className="mt-5 rounded-xl bg-azul-niebla p-3 text-xs leading-relaxed text-azul-petroleo">Los beneficios y condiciones de atención pueden variar según el plan contratado. Consulta con S.I.M. antes de solicitar un servicio.</p>
            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              <a href={mapsDirectionsUrl(selectedClinic)} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-azul-petroleo px-4 text-sm font-semibold text-white transition-colors hover:bg-azul-oscuro">Cómo llegar <MapPin className="h-4 w-4" aria-hidden="true" /></a>
              <a href={`${WA_URL}?text=${encodeURIComponent(`Hola, quisiera consultar con SIM sobre la clínica ${selectedClinic.nombre}.`)}`} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-azul-petroleo px-4 text-sm font-semibold text-azul-petroleo transition-colors hover:bg-azul-niebla">Consultar con SIM <Heart className="h-4 w-4" aria-hidden="true" /></a>
            </div>
          </section>
        </div>
      )}
    </main>
  )
}
