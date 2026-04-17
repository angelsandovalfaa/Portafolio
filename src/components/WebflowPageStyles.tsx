import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { getWebflowPageCss } from '../config/webflowCss'
import { WF_DOMAIN, WF_SITE_ID, getWfPageId } from '../config/webflowPageMeta'

const LINK_ID = 'wf-page-css'
const LOADING_CLASS = 'wf-style-loading'

export function WebflowPageStyles() {
  const { pathname } = useLocation()
  const requestedHrefRef = useRef<string>('')

  useEffect(() => {
    const href = getWebflowPageCss(pathname)
    const html = document.documentElement
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
      html.classList.remove(LOADING_CLASS)
      window.dispatchEvent(new CustomEvent('wf-page-style-ready', { detail: { pathname, href } }))
    }

    link.onload = () => {
      if (link?.href === expectedHref) {
        finish()
      }
    }
    link.onerror = finish

    if (link.href === expectedHref) {
      finish()
      return
    }

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
