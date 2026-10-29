/**
 * src/hooks/useCountUp.ts
 *
 * Hook para animar un número de 0 hasta un valor final una vez que el elemento
 * entra en la pantalla (sim-diseno §8, fila "Indicadores", 700–1200 ms).
 *
 * Escribe directamente en `textContent` vía `requestAnimationFrame`: cero
 * renders de React por frame. Con `prefers-reduced-motion` salta al valor final
 * al instante (además del override global de `globals.css`).
 *
 * Devuelve un `ref` que hay que adjuntar al elemento que muestra el número.
 */

import { useCallback, useEffect, useRef } from 'react'

export interface UseCountUpOptions {
  /** Valor final del contador (ej. 4000). */
  finalValue: number
  /** Duración de la animación en ms (por defecto 900 ms). */
  duration?: number
  /** Formato aplicado al número mostrado (por defecto "+4.000"). */
  formatter?: (n: number) => string
  /** Se dispara al terminar la animación. */
  onComplete?: () => void
}

/** Interpolación ease-out quartic para un arranque rápido y frenado suave. */
const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4)

/** Formatea un número con separador de miles en punto (español) y signo más. */
const formatEs = (n: number) => `+${n.toLocaleString('es-ES')}`

export function useCountUp({
  finalValue,
  duration = 900,
  formatter = formatEs,
  onComplete,
}: UseCountUpOptions) {
  const elementRef = useRef<HTMLSpanElement | null>(null)
  const animatedRef = useRef(false)

  const start = useCallback(() => {
    const el = elementRef.current
    if (!el || animatedRef.current) return

    // Movimiento reducido: valor final inmediato.
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      el.textContent = formatter(finalValue)
      animatedRef.current = true
      onComplete?.()
      return
    }

    let startTime: number | null = null

    const animate = (time: number) => {
      if (!startTime) startTime = time
      const elapsed = time - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = easeOutQuart(progress)
      const current = Math.floor(finalValue * eased)
      el.textContent = formatter(current)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        animatedRef.current = true
        onComplete?.()
      }
    }

    requestAnimationFrame(animate)
  }, [finalValue, duration, formatter, onComplete])

  useEffect(() => {
    const el = elementRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry?.isIntersecting) {
          start()
          observer.disconnect() // una sola vez
        }
      },
      { threshold: 0.1 },
    )

    observer.observe(el)

    return () => {
      observer.disconnect()
    }
  }, [start])

  return elementRef
}
