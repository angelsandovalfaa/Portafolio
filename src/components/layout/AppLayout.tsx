import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { useFontWeightHover } from '../../hooks/useFontWeightHover'
import { useKapstanMarquee } from '../../hooks/useKapstanMarquee'
import { WebflowPageStyles } from '../WebflowPageStyles'
import { NoiseCanvas } from '../NoiseCanvas'
import { Sidebar } from './Sidebar'
import { Footer } from './Footer'

export function AppLayout() {
  const { pathname } = useLocation()
  const [isPageStyleReady, setIsPageStyleReady] = useState(false)
  const [isRouteContentVisible, setIsRouteContentVisible] = useState(false)

  useEffect(() => {
    const onStyleLoading = () => setIsPageStyleReady(false)
    const onStyleReady = () => setIsPageStyleReady(true)

    window.addEventListener('wf-page-style-loading', onStyleLoading as EventListener)
    window.addEventListener('wf-page-style-ready', onStyleReady as EventListener)

    if (!document.documentElement.classList.contains('wf-style-loading')) {
      setIsPageStyleReady(true)
    }

    return () => {
      window.removeEventListener('wf-page-style-loading', onStyleLoading as EventListener)
      window.removeEventListener('wf-page-style-ready', onStyleReady as EventListener)
    }
  }, [])

  useEffect(() => {
    const fallbackTimer = window.setTimeout(() => {
      setIsPageStyleReady(true)
    }, 900)

    return () => {
      window.clearTimeout(fallbackTimer)
    }
  }, [pathname])

  useEffect(() => {
    setIsRouteContentVisible(false)
  }, [pathname])

  useEffect(() => {
    if (!isPageStyleReady) return

    const enterTimer = window.setTimeout(() => {
      setIsRouteContentVisible(true)
    }, 40)

    return () => {
      window.clearTimeout(enterTimer)
    }
  }, [pathname, isPageStyleReady])

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
      <div className="layout min-h-0">
        <Sidebar />
        <div className="main">
          <div className="container">
            <div
              className={`route-content-transition${
                isPageStyleReady && isRouteContentVisible ? ' is-visible' : ''
              }`}
            >
              <Outlet />
              <Footer />
            </div>
          </div>
        </div>
      </div>
      <main className="main-content" role="main">
        <NoiseCanvas />
      </main>
    </>
  )
}
