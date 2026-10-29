import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Inicio from '@/pages/Inicio'
import Planes from '@/pages/Planes'
import Nosotros from '@/pages/Nosotros'
import Noticias from '@/pages/Noticias'
import Contacto from '@/pages/Contacto'
import Cobertura from '@/pages/Cobertura'

const router = createBrowserRouter([
  { path: '/', element: <Inicio /> },
  { path: '/planes', element: <Planes /> },
  { path: '/nosotros', element: <Nosotros /> },
  { path: '/noticias', element: <Noticias /> },
  { path: '/contacto', element: <Contacto /> },
  { path: '/cobertura', element: <Cobertura /> },
])

export default function App() {
  return <RouterProvider router={router} />
}
