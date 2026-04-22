import { useEffect, useLayoutEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { useFontWeightHover } from '../../hooks/useFontWeightHover'
import { useKapstanMarquee } from '../../hooks/useKapstanMarquee'
import { WebflowPageStyles } from '../WebflowPageStyles'
import { NoiseCanvas } from '../NoiseCanvas'
import { Sidebar } from './Sidebar'
import { Footer } from './Footer'

export function AppLayout() {
  const { pathname } = useLocation()
  const [readyPathname, setReadyPathname] = useState<string | null>(null)
  const isDev = import.meta.env.DEV
  const debugLog = (...args: unknown[]) => {
    if (!isDev) return
    // Debug de transiciones de ruta/CSS para cazar flickers intermitentes.
    console.log('[route-debug]', Math.round(performance.now()), ...args)
  }
  const isPageStyleReady = readyPathname === pathname

  useLayoutEffect(() => {
    debugLog('pathname-change -> block route render until css-ready', { pathname })
    setReadyPathname(null)
  }, [pathname])

  useEffect(() => {
    const onStyleLoading = () => {
      debugLog('event:wf-page-style-loading')
      setReadyPathname(null)
    }
    const onStyleReady = (event: Event) => {
      const readyPath = (event as CustomEvent<{ pathname?: string }>).detail?.pathname
      debugLog('event:wf-page-style-ready', { readyPath })
      if (!readyPath) return
      setReadyPathname(readyPath)
    }

    window.addEventListener('wf-page-style-loading', onStyleLoading as EventListener)
    window.addEventListener('wf-page-style-ready', onStyleReady as EventListener)

    if (!document.documentElement.classList.contains('wf-style-loading')) {
      debugLog('boot-ready -> no loading class found')
      setReadyPathname(pathname)
    }

    return () => {
      window.removeEventListener('wf-page-style-loading', onStyleLoading as EventListener)
      window.removeEventListener('wf-page-style-ready', onStyleReady as EventListener)
    }
  }, [pathname])

  useEffect(() => {
    const fallbackTimer = window.setTimeout(() => {
      const stillLoading = document.documentElement.classList.contains('wf-style-loading')
      if (stillLoading) {
        debugLog('fallback-timeout -> style still loading, keep hidden', { pathname })
        return
      }
      if (readyPathname === pathname) return
      debugLog('fallback-timeout -> force ready for current pathname', { pathname })
      setReadyPathname((current) => (current === pathname ? current : pathname))
    }, 1500)

    return () => {
      window.clearTimeout(fallbackTimer)
    }
  }, [pathname, readyPathname])

  const fontWeightRoutes =
    pathname === '/' ||
    pathname === '/projects' ||
    pathname === '/about' ||
    pathname === '/contact' ||
    pathname === '/tools'
  useFontWeightHover(fontWeightRoutes && isPageStyleReady)
  useKapstanMarquee(pathname === '/' && isPageStyleReady)

  return (
    <>
      <WebflowPageStyles />
      <div className="layout min-h-0">
        <Sidebar />
        <div className="main">
          <div className="container">
            <div
              key={pathname}
              className={`route-content-transition${isPageStyleReady ? ' is-visible' : ''}`}
            >
              {isPageStyleReady ? (
                <>
                  <Outlet />
                  <Footer />
                </>
              ) : (
                <div className="route-loading-placeholder" aria-hidden="true" />
              )}
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
