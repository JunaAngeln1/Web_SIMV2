/**
 * src/components/layout/Footer.tsx
 *
 * Footer con diseño aplicado (sin animaciones).
 * Fondo azul profundo #07345B con texto blanco y secundario en azul claro.
 * Columnas: marca y descripción; navegación; contacto oficial; enlaces legales.
 * No inventar teléfonos, correos, direcciones ni perfiles sociales.
 */

export default function Footer() {
  return (
    <footer
      data-section="footer"
      role="contentinfo"
      className="bg-azul-profundo text-blanco mt-auto"
    >
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Marca */}
          <div data-purpose="footer-brand" className="col-span-1 md:col-span-1">
            <img
              src="/assets/sim-logo.svg"
              alt="S.I.M. — Servicios Integrales para Mascotas"
              className="h-10 w-auto mb-4"
            />
            <p
              data-purpose="footer-description"
              className="text-azul-niebla text-sm leading-relaxed max-w-xs"
            >
              Servicios Integrales para Mascotas. Planes de atención veterinaria para perros y
              gatos.
            </p>
          </div>

          {/* Navegación */}
          <nav data-purpose="footer-nav" aria-label="Navegación del footer">
            <h3 data-purpose="footer-nav-title" className="text-blanco font-semibold mb-4">
              Navegación
            </h3>
            <ul data-purpose="footer-nav-list" className="space-y-2 text-sm">
              {[
                { href: '/', label: 'Inicio' },
                { href: '/planes', label: 'Planes' },
                { href: '/nosotros', label: 'Nosotros' },
                { href: '/noticias', label: 'Noticias' },
                { href: '/contacto', label: 'Contacto' },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-azul-niebla hover:text-blanco transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contacto */}
          <div data-purpose="footer-contacto">
            <h3 data-purpose="footer-contacto-title" className="text-blanco font-semibold mb-4">
              Contacto oficial
            </h3>
            <ul data-purpose="footer-contacto-list" className="space-y-1 text-sm text-azul-niebla">
              <li data-pending="true">Teléfono: pendiente de SIM</li>
              <li data-pending="true">Correo: pendiente de SIM</li>
              <li data-pending="true">Dirección: pendiente de SIM</li>
            </ul>
          </div>

          {/* Legales */}
          <div data-purpose="footer-legales">
            <h3 data-purpose="footer-legales-title" className="text-blanco font-semibold mb-4">
              Legales
            </h3>
            <ul data-purpose="footer-legales-list" className="space-y-2 text-sm text-azul-niebla">
              <li>
                <a href="#" className="hover:text-blanco transition-colors">
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blanco transition-colors">
                  Política de privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blanco transition-colors">
                  Tratamiento de datos personales
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Separador inferior */}
        <div className="mt-12 pt-8 border-t border-[#1e5a86] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-azul-niebla text-xs">
            S.I.M. — Servicios Integrales para Mascotas. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4 text-azul-niebla text-xs">
            <span>Redes sociales únicamente si SIM tiene perfiles oficiales vigentes.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
