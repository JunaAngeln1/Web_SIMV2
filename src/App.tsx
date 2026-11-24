import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PromoModal from '@/components/ui/PromoModal'
import Inicio from '@/pages/Inicio'
import Planes from '@/pages/Planes'
import Nosotros from '@/pages/Nosotros'
import Noticias from '@/pages/Noticias'
import NoticiaDetalle from '@/pages/NoticiaDetalle'
import { noticiaDetalleLoader } from '@/pages/noticiaDetalleLoader'
import Contacto from '@/pages/Contacto'
import Cobertura from '@/pages/Cobertura'
import SiteLayout from '@/components/layout/SiteLayout'

const router = createBrowserRouter([
  {
    element: <SiteLayout />,
    children: [
      { index: true, element: <Inicio /> },
      { path: 'planes', element: <Planes /> },
      { path: 'nosotros', element: <Nosotros /> },
      { path: 'noticias', element: <Noticias /> },
      { path: 'noticias/:slug', element: <NoticiaDetalle />, loader: noticiaDetalleLoader },
      { path: 'contacto', element: <Contacto /> },
      { path: 'cobertura', element: <Cobertura /> },
    ],
  },
])

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <PromoModal />
    </>
  )
}
