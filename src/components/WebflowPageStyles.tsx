import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getWebflowPageCss } from '../config/webflowCss'
import { WF_DOMAIN, WF_SITE_ID, getWfPageId } from '../config/webflowPageMeta'

const LINK_ID = 'wf-page-css'

export function WebflowPageStyles() {
  const { pathname } = useLocation()

  useEffect(() => {
    const href = getWebflowPageCss(pathname)
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
