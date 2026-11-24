/**
 * src/components/layout/Header.tsx
 *
 * Header fijo (80 px) con navegación SPA (NavLink de React Router).
 * En escritorio muestra la nav horizontal; en móvil, un botón hamburguesa
 * que despliega un panel con los enlaces. El enlace activo se identifica con
 * subrayado azul (no solo con color).
 */

import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Button from '@/components/ui/Button'

const NAV_ITEMS = [
  { href: '/', label: 'Inicio' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/planes', label: 'Planes' },
  { href: '/noticias', label: 'Noticias' },
  { href: '/cobertura', label: 'Cobertura' },
]

export default function Header() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  // Cierra el menú móvil al cambiar de ruta. Se ajusta durante el render
  // (patrón de estado derivado) en lugar de un effect, para evitar renders en
  // cascada y cubrir también la navegación atrás/adelante.
  const [prevPathname, setPrevPathname] = useState(location.pathname)
  if (location.pathname !== prevPathname) {
    setPrevPathname(location.pathname)
    setMenuOpen(false)
  }

  // Cierra el menú móvil con Escape.
  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    [
      'px-1 py-2 text-texto-principal underline-offset-2 decoration-2 decoration-azul-institucional transition-colors',
      isActive
        ? 'text-azul-institucional underline'
        : 'hover:text-azul-institucional hover:underline',
    ].join(' ')

  return (
    <header
      data-section="header"
      role="banner"
      className="w-full fixed top-0 z-40 bg-blanco shadow-[0_1px_2px_rgba(7,52,91,0.06)]"
    >
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-[80px] items-center justify-between gap-3">
          {/* Logo */}
          <NavLink
            to="/"
            data-purpose="logo"
            aria-label="S.I.M. — Inicio"
            className="flex items-center gap-2 shrink-0"
          >
            <img
              src="/assets/sim-logo.svg"
              alt="S.I.M. — Servicios Integrales para Mascotas"
              className="h-[40px] w-auto"
            />
            <span className="font-titulos font-bold text-azul-institucional text-xl tracking-tight">
              S.I.M.
            </span>
          </NavLink>

          {/* Navegación de escritorio */}
          <nav
            data-purpose="nav"
            aria-label="Navegación principal"
            className="hidden md:flex items-center gap-8"
          >
            <ul data-purpose="nav-list" className="flex items-center gap-8 text-sm font-medium">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <NavLink to={item.href} end={item.href === '/'} className={linkClass}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Acciones */}
          <div data-purpose="header-actions" className="flex items-center gap-2 sm:gap-3">
            <Button
              variant="primary"
              size="default"
              href="/contacto"
              data-purpose="cta-afiliar"
              className="rounded-[10px]! hidden sm:inline-flex"
            >
              Afiliar a mi mascota
            </Button>

            {/* Hamburguesa (solo móvil) */}
            <button
              type="button"
              data-purpose="menu-toggle"
              aria-label={menuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((open) => !open)}
              className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-[10px] text-azul-petroleo transition-colors hover:bg-gris-claro focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-azul-petroleo"
            >
              {menuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Panel de navegación móvil */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          data-purpose="mobile-menu"
          aria-label="Navegación principal móvil"
          className="md:hidden absolute inset-x-0 top-full bg-blanco border-t border-borde-suave shadow-medio"
        >
          <ul className="mx-auto max-w-[1360px] px-4 sm:px-6 py-3 flex flex-col">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <NavLink
                  to={item.href}
                  end={item.href === '/'}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    [
                      'block px-3 py-3 rounded-[10px] text-base font-medium transition-colors',
                      isActive
                        ? 'text-azul-institucional bg-azul-muy-claro'
                        : 'text-texto-principal hover:bg-gris-claro hover:text-azul-institucional',
                    ].join(' ')
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li className="mt-2 px-3 pb-2">
              <Button
                variant="primary"
                href="/contacto"
                onClick={() => setMenuOpen(false)}
                className="w-full rounded-[10px]!"
              >
                Afiliar a mi mascota
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
