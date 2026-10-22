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
      className="sticky top-0 z-40 bg-blanco border-b border-borde-suave shadow-suave"
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
              className="h-10 w-auto"
            />
            <span className="font-titulos font-semibold text-azul-institucional text-lg tracking-tight">
              S.I.M.
            </span>
          </a>

          {/* Navegación */}
          <nav
            data-purpose="nav"
            aria-label="Navegación principal"
            className="hidden md:flex items-center gap-6"
          >
            <ul data-purpose="nav-list" className="flex items-center gap-6 text-sm font-medium">
              {[
                { href: '/', label: 'Inicio' },
                { href: '/planes', label: 'Planes' },
                { href: '/nosotros', label: 'Nosotros' },
                { href: '/noticias', label: 'Noticias' },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={[
                      'text-texto-principal transition-colors',
                      isActive(item.href)
                        ? 'text-azul-institucional underline underline-offset-2 decoration-azul-institucional decoration-2'
                        : 'hover:text-azul-institucional',
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
            <a
              href="https://wa.me/"
              data-purpose="whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 text-sm font-medium text-azul-institucional hover:text-verde-sim"
            >
              <span className="text-azul-institucional">WhatsApp oficial</span>
            </a>
            <Button variant="primary" size="lg" data-purpose="cta-afiliar">
              Afiliar a mi mascota
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
