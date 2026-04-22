import { useEffect, useLayoutEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { getWebflowPageCss } from '../config/webflowCss'
import { WF_DOMAIN, WF_SITE_ID, getWfPageId } from '../config/webflowPageMeta'

const LINK_ID = 'wf-page-css'
const LOADING_CLASS = 'wf-style-loading'

export function WebflowPageStyles() {
  const { pathname } = useLocation()
  const requestedHrefRef = useRef<string>('')
  const isDev = import.meta.env.DEV
  const debugLog = (...args: unknown[]) => {
    if (!isDev) return
    console.log('[wf-style-debug]', Math.round(performance.now()), ...args)
  }

  useLayoutEffect(() => {
    const href = getWebflowPageCss(pathname)
    const html = document.documentElement
    debugLog('start-load', { pathname, href })
    requestedHrefRef.current = href
    html.classList.add(LOADING_CLASS)
    window.dispatchEvent(new CustomEvent('wf-page-style-loading', { detail: { pathname, href } }))

    let link = document.getElementById(LINK_ID) as HTMLLinkElement | null
    if (!link) {
      link = document.createElement('link')
      link.id = LINK_ID
      link.rel = 'stylesheet'
      link.type = 'text/css'
      const themeLink = document.querySelector<HTMLLinkElement>('link[href="/theme.css"]')
      if (themeLink?.parentNode) {
        themeLink.parentNode.insertBefore(link, themeLink)
      } else {
        document.head.appendChild(link)
      }
    }

    const expectedHref = new URL(href, window.location.href).href
    const finish = () => {
      if (requestedHrefRef.current !== href) return
      debugLog('finish-load', { pathname, href })
      html.classList.remove(LOADING_CLASS)
      window.dispatchEvent(new CustomEvent('wf-page-style-ready', { detail: { pathname, href } }))
    }

    link.onload = () => {
      debugLog('link-onload', { href: link?.href })
      if (link?.href === expectedHref) {
        finish()
      }
    }
    link.onerror = () => {
      debugLog('link-onerror', { href: link?.href })
      finish()
    }

    if (link.href === expectedHref) {
      debugLog('already-loaded', { href: expectedHref })
      finish()
      return
    }

    debugLog('set-link-href', { href })
    link.href = href
  }, [pathname])

  useEffect(() => {
    const html = document.documentElement
    html.setAttribute('data-wf-domain', WF_DOMAIN)
    html.setAttribute('data-wf-site', WF_SITE_ID)
    html.setAttribute('data-wf-status', '1')
    html.setAttribute('data-wf-page', getWfPageId(pathname))
  }, [pathname])

  return null
}
