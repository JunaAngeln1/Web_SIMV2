/**
 * src/hooks/useInView.ts
 *
 * Detecta si un elemento entró en el viewport (IntersectionObserver) y devuelve
 * un ref + bandera de visibilidad. Se dispara una sola vez. Con
 * `prefers-reduced-motion` devuelve `visible: true` inmediatamente para no
 * bloquear la lectura del contenido.
 *
 * Cero renders de React por frame: se usa para controlar clases de entrada.
 */

import { useEffect, useRef, useState } from 'react'

export interface UseInViewResult {
  /** Adjuntar este ref al elemento a observar. */
  ref: React.RefObject<HTMLDivElement | null>
  /** `true` cuando el elemento entró en pantalla (una sola vez). */
  visible: boolean
}

export function useInView({ threshold = 0.1 }: { threshold?: number } = {}): UseInViewResult {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? true
      : false,
  )

  useEffect(() => {
    // Movimiento reducido: ya inició visible, no hace falta observar.
    if (visible) return undefined

    const el = ref.current
    if (!el) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry?.isIntersecting) {
          setVisible(true)
          observer.disconnect() // una sola vez
        }
      },
      { threshold },
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [threshold, visible])

  return { ref, visible }
}
