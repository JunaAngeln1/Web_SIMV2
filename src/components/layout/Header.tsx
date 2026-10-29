/**
 * src/components/layout/Header.tsx
 *
 * Header con diseño aplicado (sin animaciones).
 * Blanco, alto aproximado 76-92 px en escritorio, bordes redondeados dentro
 * del contenedor principal.
 * Enlace activo identificado con subrayado azul (no solo con color).
 */

import { useLocation } from 'react-router-dom'
import Button from '@/components/ui/Button'

export default function Header() {
  const location = useLocation()

  const isActive = (href: string) => location.pathname === href

  return (
    <header
      data-section="header"
      role="banner"
      className="sticky top-0 z-40 bg-blanco shadow-[0_1px_2px_rgba(7,52,91,0.06)]"
    >
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-[80px] items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            data-purpose="logo"
            aria-label="S.I.M. — Inicio"
            className="flex items-center gap-2"
          >
            <img
              src="/assets/sim-logo.svg"
              alt="S.I.M. — Servicios Integrales para Mascotas"
              className="h-[40px] w-auto"
            />
            <span className="font-titulos font-bold text-azul-institucional text-xl tracking-tight">
              S.I.M.
            </span>
          </a>

          {/* Navegación */}
          <nav
            data-purpose="nav"
            aria-label="Navegación principal"
            className="hidden md:flex items-center gap-8"
          >
            <ul data-purpose="nav-list" className="flex items-center gap-8 text-sm font-medium">
              {[
                { href: '/', label: 'Inicio' },
                { href: '/nosotros', label: 'Nosotros' },
                { href: '/planes', label: 'Planes' },
                { href: '/noticias', label: 'Noticias' },
                { href: '/cobertura', label: 'Cobertura' },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={[
                      'px-1 py-2 text-texto-principal underline-offset-2 decoration-2 decoration-azul-institucional transition-colors',
                      isActive(item.href)
                        ? 'text-azul-institucional underline'
                        : 'hover:text-azul-institucional hover:underline',
                    ].join(' ')}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Acciones */}
          <div data-purpose="header-actions" className="flex items-center gap-3">
            <Button
              variant="primary"
              size="default"
              data-purpose="cta-afiliar"
              className="rounded-[10px]!"
            >
              Afiliar a mi mascota
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
