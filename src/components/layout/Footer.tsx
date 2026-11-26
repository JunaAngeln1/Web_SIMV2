/** Footer global institucional compartido por todas las rutas. */
import { Camera, Mail, MessageCircle, Music2, PhoneCall } from 'lucide-react'
import { Link } from 'react-router-dom'

const SIM_LINKS = [
  { label: '¿Quiénes somos?', to: '/nosotros' },
  { label: 'Nuestros planes', to: '/planes' },
  { label: 'Red de atención', to: '/cobertura' },
  { label: 'Servicios', to: '/servicios', pending: true },
]

const HELP_LINKS = [
  { label: 'Preguntas frecuentes', to: '/#preguntas-frecuentes' },
  { label: 'Términos y condiciones', to: '/terminos', pending: true },
  { label: 'Política de tratamiento de datos', to: '/tratamiento-datos', pending: true },
]

const CONTACT_CHANNELS = [
  { label: 'WhatsApp', Icon: MessageCircle },
  { label: 'Emergencias 24/7', Icon: PhoneCall },
  { label: 'Correo electrónico', Icon: Mail },
]

function FooterLink({
  label,
  to,
  pending = false,
}: {
  label: string
  to: string
  pending?: boolean
}) {
  return (
    <Link
      to={to}
      data-pending={pending ? 'true' : undefined}
      className="text-[11px] leading-[1.35] text-white/90 transition-colors hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-azul-footer"
    >
      {label}
    </Link>
  )
}

export default function Footer() {
  return (
    <footer
      data-section="footer"
      role="contentinfo"
      className="mt-auto rounded-t-[24px] bg-azul-footer px-4 pb-4 pt-5 text-white sm:rounded-t-[35px] sm:px-8 sm:pb-3 sm:pt-6 lg:px-10 lg:pb-2.5 lg:pt-5"
    >
      <div className="mx-auto max-w-[1360px]">
        <div className="grid grid-cols-2 gap-x-4 gap-y-5 sm:gap-x-6 sm:gap-y-6 lg:grid-cols-3 xl:min-h-[88px] xl:grid-cols-[22%_15%_18%_27%_18%] xl:items-center xl:gap-x-0">
          {/* Columna 1: Identidad corporativa */}
          <div data-purpose="footer-brand" className="relative col-span-2 flex min-w-0 items-center gap-3 lg:col-span-1 xl:col-span-1 xl:pr-5">
            <Link to="/" aria-label="S.I.M. — Inicio" className="shrink-0 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80">
              <img
                src="/assets/sim-logo.svg"
                alt=""
                className="h-10 w-10 brightness-0 invert"
              />
            </Link>
            <div className="min-w-0">
              <p className="font-titulos text-lg font-bold leading-none">S.I.M.</p>
              <p className="mt-1 max-w-[190px] text-[10px] leading-snug text-white/85">
                Servicios Integrales para Mascotas
              </p>
            </div>
            <span className="absolute -right-px top-1/2 hidden h-[70px] w-px -translate-y-1/2 bg-white/25 xl:block" aria-hidden="true" />
          </div>

          {/* Columna 2: SIM */}
          <nav data-purpose="footer-sim" aria-label="SIM" className="relative min-w-0 xl:px-5">
            <h2 className="mb-2 text-xs font-bold leading-none">SIM</h2>
            <ul className="space-y-1">
              {SIM_LINKS.map((item) => (
                <li key={item.to}>
                  <FooterLink {...item} />
                </li>
              ))}
            </ul>
            <span className="absolute -right-px top-1/2 hidden h-[70px] w-px -translate-y-1/2 bg-white/25 xl:block" aria-hidden="true" />
          </nav>

          {/* Columna 3: Ayuda */}
          <nav data-purpose="footer-ayuda" aria-label="Ayuda" className="relative min-w-0 xl:px-5">
            <h2 className="mb-2 text-xs font-bold leading-none">Ayuda</h2>
            <ul className="space-y-1">
              {HELP_LINKS.map((item) => (
                <li key={item.to}>
                  <FooterLink {...item} />
                </li>
              ))}
            </ul>
            <span className="absolute -right-px top-1/2 hidden h-[70px] w-px -translate-y-1/2 bg-white/25 xl:block" aria-hidden="true" />
          </nav>

          {/* Columna 4: Canales oficiales pendientes de confirmación */}
          <div data-purpose="footer-contacto" className="relative min-w-0 xl:px-5">
            <h2 className="mb-2 text-xs font-bold leading-none">Contáctanos</h2>
            <ul className="space-y-1">
              {CONTACT_CHANNELS.map(({ label, Icon }) => (
                <li
                  key={label}
                  data-pending="true"
                  className="flex min-w-0 items-start gap-2 text-[11px] leading-tight text-white/90"
                >
                  <Icon className="mt-px h-3.5 w-3.5 shrink-0" strokeWidth={1.7} aria-hidden="true" />
                  <span className="min-w-0 break-words">{label} <span className="text-white/65">— pendiente de SIM</span></span>
                </li>
              ))}
            </ul>
            <span className="absolute -right-px top-1/2 hidden h-[70px] w-px -translate-y-1/2 bg-white/25 xl:block" aria-hidden="true" />
          </div>

          {/* Columna 5: perfiles sociales oficiales pendientes */}
          <div data-purpose="footer-social" className="min-w-0 xl:pl-5">
            <h2 className="mb-2 text-xs font-bold leading-none">Síguenos</h2>
            <div className="flex items-center gap-3">
              <span data-pending="true" aria-label="Instagram oficial pendiente de SIM" title="Instagram pendiente de SIM" className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/35 text-white/70">
                <Camera className="h-4 w-4" aria-hidden="true" />
              </span>
              <span data-pending="true" aria-label="TikTok oficial pendiente de SIM" title="TikTok pendiente de SIM" className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/35 text-white/70">
                <Music2 className="h-4 w-4" aria-hidden="true" />
              </span>
            </div>
          </div>
        </div>

        {/* Zona inferior: derechos reservados */}
        <div className="col-span-2 mt-0 border-t border-white/25 pt-3 sm:mt-5 sm:pt-2.5">
          <p className="text-[10px] leading-relaxed text-white/85 sm:text-[11px]">
            © 2026 SIM - Servicios Integrales para Mascotas. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
