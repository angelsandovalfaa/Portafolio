import { Outlet, useLocation } from 'react-router-dom'
import { useLayoutReveal } from '../../hooks/useLayoutReveal'
import { useFontWeightHover } from '../../hooks/useFontWeightHover'
import { useKapstanMarquee } from '../../hooks/useKapstanMarquee'
import { WebflowPageStyles } from '../WebflowPageStyles'
import { NoiseCanvas } from '../NoiseCanvas'
import { Sidebar } from './Sidebar'
import { Footer } from './Footer'

export function AppLayout() {
  const { pathname } = useLocation()
  useLayoutReveal()

  const fontWeightRoutes =
    pathname === '/' ||
    pathname === '/projects' ||
    pathname === '/about' ||
    pathname === '/contact' ||
    pathname === '/tools'
  useFontWeightHover(fontWeightRoutes)
  useKapstanMarquee(pathname === '/')

  return (
    <>
      <WebflowPageStyles />
      <div style={{ opacity: 0 }} className="layout min-h-0">
        <Sidebar />
        <div className="main">
          <div className="container">
            <Outlet />
            <Footer />
          </div>
        </div>
      </div>
      <main className="main-content" role="main">
        <NoiseCanvas />
      </main>
    </>
  )
}
