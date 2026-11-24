import { useEffect, useRef, useState } from 'react'
import { LocateFixed, Minus, Plus } from 'lucide-react'

export interface MapClinic {
  id: string
  name: string
  address: string
  lat: number | null
  lng: number | null
}

interface LatLng { lat: number; lng: number }
interface MapMarker {
  setMap(map: MapInstance | null): void
  setIcon(icon: string | MarkerIcon): void
  addListener(event: string, handler: () => void): { remove(): void }
  getPosition(): LatLng | null
}
interface MarkerIcon { url: string; scaledSize?: unknown; anchor?: unknown }
interface MapInstance {
  setCenter(center: LatLng): void
  setZoom(zoom: number): void
  getZoom(): number | undefined
  fitBounds(bounds: unknown, padding?: number): void
  panTo(position: LatLng): void
}
interface InfoWindowInstance { setContent(content: string): void; open(map: MapInstance, marker: MapMarker): void; close(): void }
interface MapsApi {
  Map: new (element: HTMLElement, options: { center: LatLng; zoom: number; mapTypeControl: boolean; streetViewControl: boolean; fullscreenControl: boolean }) => MapInstance
  Marker: new (options: { map: MapInstance; position: LatLng; title: string; icon?: string | MarkerIcon; zIndex?: number }) => MapMarker
  InfoWindow: new () => InfoWindowInstance
  LatLngBounds: new () => { extend(position: LatLng): void; isEmpty(): boolean }
}
interface MarkerEntry { id: string; marker: MapMarker; icon: string }

declare global {
  interface Window {
    google?: { maps?: MapsApi }
    initSimCoverageMap?: () => void
  }
}

let mapsLoader: Promise<MapsApi> | null = null

function loadGoogleMaps(apiKey: string) {
  if (window.google?.maps) return Promise.resolve(window.google.maps)
  if (mapsLoader) return mapsLoader

  mapsLoader = new Promise<MapsApi>((resolve, reject) => {
    window.initSimCoverageMap = () => {
      if (window.google?.maps) resolve(window.google.maps)
      else reject(new Error('Google Maps no se pudo inicializar.'))
      delete window.initSimCoverageMap
    }
    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&callback=initSimCoverageMap&v=weekly`
    script.async = true
    script.defer = true
    script.onerror = () => reject(new Error('No fue posible cargar Google Maps.'))
    document.head.appendChild(script)
  }).catch((error: unknown) => {
    mapsLoader = null
    throw error
  })

  return mapsLoader
}

function pawPin(color: string) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="42" height="52" viewBox="0 0 42 52"><path fill="${color}" stroke="white" stroke-width="3" d="M21 2C10.5 2 2 10.5 2 21c0 13 19 29 19 29s19-16 19-29C40 10.5 31.5 2 21 2Z"/><g fill="white"><ellipse cx="21" cy="27" rx="7" ry="5.5"/><ellipse cx="12.7" cy="19.5" rx="3.3" ry="4.4" transform="rotate(-25 12.7 19.5)"/><ellipse cx="20" cy="16.4" rx="3.2" ry="4.4"/><ellipse cx="27.2" cy="19.5" rx="3.3" ry="4.4" transform="rotate(25 27.2 19.5)"/></g></svg>`
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`
}

function userLocationPin() {
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="#054564" stroke="white" stroke-width="4"/><circle cx="12" cy="12" r="3" fill="white"/></svg>'
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`
}

interface GoogleCoverageMapProps {
  clinics: MapClinic[]
  selectedId: string | null
  onSelect: (id: string) => void
  userPosition: LatLng | null
  className?: string
}

export default function GoogleCoverageMap({ clinics, selectedId, onSelect, userPosition, className = '' }: GoogleCoverageMapProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<MapInstance | null>(null)
  const mapsRef = useRef<MapsApi | null>(null)
  const infoWindowRef = useRef<InfoWindowInstance | null>(null)
  const markerEntriesRef = useRef<MarkerEntry[]>([])
  const userMarkerRef = useRef<MapMarker | null>(null)
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
  const initialPositionRef = useRef(userPosition)
  const [loadState, setLoadState] = useState<'loading' | 'ready' | 'missing-key' | 'error'>(() => apiKey ? 'loading' : 'missing-key')

  useEffect(() => {
    if (!apiKey) return
    let cancelled = false
    loadGoogleMaps(apiKey).then((maps) => {
      if (cancelled || !elementRef.current) return
      const map = new maps.Map(elementRef.current, {
        center: initialPositionRef.current ?? { lat: 4.5709, lng: -74.2973 },
        zoom: initialPositionRef.current ? 12 : 5,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
      })
      mapRef.current = map
      mapsRef.current = maps
      infoWindowRef.current = new maps.InfoWindow()
      setLoadState('ready')
    }).catch(() => {
      if (!cancelled) setLoadState('error')
    })
    return () => { cancelled = true }
  }, [apiKey])

  useEffect(() => {
    const map = mapRef.current
    const maps = mapsRef.current
    if (!map || !maps) return

    markerEntriesRef.current.forEach(({ marker }) => marker.setMap(null))
    markerEntriesRef.current = []
    userMarkerRef.current?.setMap(null)
    userMarkerRef.current = null
    const bounds = new maps.LatLngBounds()
    let positionCount = 0

    clinics.forEach((clinic) => {
      if (clinic.lat == null || clinic.lng == null) return
      const position = { lat: clinic.lat, lng: clinic.lng }
      const icon = pawPin('#659D0D')
      const marker = new maps.Marker({ map, position, title: clinic.name, icon })
      marker.addListener('click', () => {
        onSelect(clinic.id)
        const safeName = clinic.name.replace(/[&<>"']/g, '')
        const safeAddress = clinic.address.replace(/[&<>"']/g, '')
        infoWindowRef.current?.setContent(`<div style="font-family:Arial,sans-serif;padding:4px 2px"><strong>${safeName}</strong><br><span>${safeAddress}</span></div>`)
        infoWindowRef.current?.open(map, marker)
      })
      markerEntriesRef.current.push({ id: clinic.id, marker, icon })
      bounds.extend(position)
      positionCount += 1
    })

    if (userPosition) {
      userMarkerRef.current = new maps.Marker({ map, position: userPosition, title: 'Tu ubicación', icon: userLocationPin(), zIndex: 20 })
      bounds.extend(userPosition)
      positionCount += 1
    }
    if (positionCount > 1) map.fitBounds(bounds, 48)
    else if (userPosition) map.setCenter(userPosition)
    return () => {
      markerEntriesRef.current.forEach(({ marker }) => marker.setMap(null))
      markerEntriesRef.current = []
      userMarkerRef.current?.setMap(null)
      userMarkerRef.current = null
    }
  }, [clinics, onSelect, userPosition, loadState])

  useEffect(() => {
    markerEntriesRef.current.forEach(({ id, marker, icon }) => {
      const selected = id === selectedId
      marker.setIcon(selected ? pawPin('#4F7D0A') : icon)
    })
    const selected = markerEntriesRef.current.find((entry) => entry.id === selectedId)
    const position = selected?.marker.getPosition()
    if (position && selected) mapRef.current?.panTo(position)
  }, [selectedId])

  function zoomBy(delta: number) {
    const map = mapRef.current
    if (!map) return
    map.setZoom((map.getZoom() ?? 5) + delta)
  }

  function recenter() {
    if (userPosition) {
      mapRef.current?.panTo(userPosition)
      mapRef.current?.setZoom(13)
    }
  }

  if (loadState === 'missing-key' || loadState === 'error') {
    return (
      <div className={`flex min-h-[300px] flex-col items-center justify-center rounded-[24px] border border-dashed border-borde-suave bg-gris-claro px-6 py-8 text-center lg:min-h-[420px] ${className}`}>
        <LocateFixed className="h-9 w-9 text-azul-petroleo" aria-hidden="true" />
        <p className="mt-3 mb-1 font-semibold text-azul-petroleo">{loadState === 'missing-key' ? 'Configura Google Maps para activar el mapa' : 'No se pudo cargar Google Maps'}</p>
        <p className="mb-0 max-w-lg text-xs leading-relaxed text-gris-azulado">{loadState === 'missing-key' ? 'Añade VITE_GOOGLE_MAPS_API_KEY al entorno local y restringe la clave por dominio y API antes de publicar.' : 'Puedes seguir usando los filtros y la lista de establecimientos.'}</p>
      </div>
    )
  }

  return (
    <div className={`relative min-h-[300px] overflow-hidden rounded-[24px] bg-azul-niebla lg:min-h-[420px] ${className}`}>
      {loadState === 'loading' && <div className="absolute inset-0 z-10 grid animate-pulse place-items-center bg-azul-niebla text-sm text-gris-azulado">Cargando mapa…</div>}
      <div ref={elementRef} className="absolute inset-0" aria-label="Mapa de Google Maps con clínicas aliadas" />
      <div className="absolute left-3 top-3 z-20 flex flex-col overflow-hidden rounded-xl bg-white shadow-suave">
        <button type="button" aria-label="Acercar mapa" onClick={() => zoomBy(1)} className="grid h-10 w-10 place-items-center text-azul-petroleo hover:bg-azul-niebla"><Plus className="h-5 w-5" /></button>
        <span className="h-px bg-borde-suave" />
        <button type="button" aria-label="Alejar mapa" onClick={() => zoomBy(-1)} className="grid h-10 w-10 place-items-center text-azul-petroleo hover:bg-azul-niebla"><Minus className="h-5 w-5" /></button>
        <span className="h-px bg-borde-suave" />
        <button type="button" aria-label="Centrar en mi ubicación" onClick={recenter} disabled={!userPosition} className="grid h-10 w-10 place-items-center text-azul-petroleo hover:bg-azul-niebla disabled:cursor-not-allowed disabled:opacity-40"><LocateFixed className="h-5 w-5" /></button>
      </div>
      <div className="absolute bottom-3 right-3 z-20 rounded-xl bg-white/95 px-3 py-2 text-[10px] text-gris-azulado shadow-suave">
        <p className="mb-1 font-semibold text-azul-petroleo">Red de cobertura</p>
        <p className="mb-0 flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-azul-petroleo" />Tu ubicación</p>
        <p className="mb-0 mt-1 flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-verde-corporativo" />Aliado SIM</p>
      </div>
    </div>
  )
}
