/**
 * src/components/ui/PromoModal.tsx
 *
 * Popup de promociones que aparece al entrar a la página, centrado en pantalla.
 * Se muestra una sola vez por día (localStorage) y se cierra con la X, el
 * overlay, la tecla Escape o cualquiera de sus acciones.
 *
 * El contenido vive en @/data/promos y está marcado como PENDIENTE_SIM hasta
 * que SIM apruebe una oferta real.
 */

import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Gift, X } from 'lucide-react'
import { PROMO_STORAGE_KEY, promoActiva } from '@/data/promos'

/** Fecha local en formato YYYY-MM-DD (para comparar por día). */
function hoy(): string {
  const now = new Date()
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

/** ¿La promo ya se mostró hoy? Tolera navegadores sin localStorage. */
function yaSeMostroHoy(): boolean {
  try {
    return window.localStorage.getItem(PROMO_STORAGE_KEY) === hoy()
  } catch {
    return false
  }
}

export default function PromoModal() {
  const [open, setOpen] = useState(false)
  const dialogRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLAnchorElement>(null)
  const previouslyFocused = useRef<HTMLElement | null>(null)

  const close = useCallback(() => {
    setOpen(false)
    try {
      window.localStorage.setItem(PROMO_STORAGE_KEY, hoy())
    } catch {
      // localStorage puede fallar en modo privado; el cierre no se bloquea.
    }
  }, [])

  // Mostrar una sola vez por día.
  useEffect(() => {
    if (!promoActiva?.enabled || yaSeMostroHoy()) return

    const timer = window.setTimeout(() => setOpen(true), 500)
    return () => window.clearTimeout(timer)
  }, [])

  // Bloqueo de scroll, foco inicial, Escape y trampa de foco.
  useEffect(() => {
    if (!open) return

    previouslyFocused.current = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    ctaRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        close()
        return
      }

      if (event.key !== 'Tab' || !dialogRef.current) return

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])',
      )
      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
      previouslyFocused.current?.focus?.()
    }
  }, [open, close])

  if (!promoActiva?.enabled || !open) return null

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-[sim-fade-in_180ms_ease-out]"
      role="presentation"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-azul-profundo/60 backdrop-blur-sm"
        onClick={close}
        aria-hidden="true"
      />

      {/* Tarjeta */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="promo-title"
        aria-describedby="promo-description"
        className="relative w-full max-w-md overflow-hidden rounded-[25px] bg-blanco p-6 shadow-[0_25px_60px_-15px_rgba(7,52,91,0.45)] animate-[sim-modal-in_220ms_ease-out] sm:p-8"
      >
        {/* Franja decorativa superior */}
        <div
          className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-azul-institucional via-azul-cielo to-verde-acento"
          aria-hidden="true"
        />

        {/* Cerrar */}
        <button
          type="button"
          onClick={close}
          aria-label="Cerrar promoción"
          className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full text-gris-azulado transition-colors duration-200 hover:bg-azul-niebla hover:text-azul-institucional focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-azul-cielo"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        {/* Icono */}
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-verde-acento/15 text-verde-acento">
          <Gift className="h-6 w-6" aria-hidden="true" />
        </div>

        <span className="inline-block rounded-full bg-verde-acento px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-blanco">
          {promoActiva.badge}
        </span>

        <h2
          id="promo-title"
          className="mt-4 font-titulos text-2xl font-semibold leading-tight text-azul-institucional"
        >
          {promoActiva.title}
        </h2>

        <p
          id="promo-description"
          data-pending="true"
          className="mt-3 text-sm leading-relaxed text-gris-azulado"
        >
          {promoActiva.description}
        </p>

        <a
          ref={ctaRef}
          href={promoActiva.ctaHref}
          onClick={close}
          className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-verde-acento px-6 py-3 text-sm font-semibold text-blanco transition-colors duration-200 hover:bg-[#7a8d2a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-verde-acento focus-visible:ring-offset-2"
        >
          {promoActiva.ctaLabel}
        </a>

        <button
          type="button"
          onClick={close}
          className="mt-3 w-full text-center text-sm font-medium text-gris-azulado transition-colors duration-200 hover:text-azul-institucional hover:underline"
        >
          No, gracias
        </button>
      </div>
    </div>,
    document.body,
  )
}
