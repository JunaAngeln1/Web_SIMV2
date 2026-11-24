/** Layout global de las rutas: contenido de página + Footer compartido. */
import { Outlet } from 'react-router-dom'
import Footer from '@/components/layout/Footer'

export default function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Outlet />
      <Footer />
    </div>
  )
}
