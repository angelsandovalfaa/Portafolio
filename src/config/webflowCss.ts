const WF_BASE =
  'https://cdn.prod.website-files.com/66e2e525ff88cd2d1a4c79ce/css/serhii-dev.webflow'

const PAGE_CSS: Record<string, string> = {
  '/': `${WF_BASE}.66e2e525ff88cd2d1a4c79d3-b443285c7.min.css`,
  '/projects': `${WF_BASE}.66e2e525ff88cd2d1a4c79e2-efd03f9dd.min.css`,
  '/about': `${WF_BASE}.66e2e525ff88cd2d1a4c79d7-aa60f318b.min.css`,
  '/contact': `${WF_BASE}.66e2e525ff88cd2d1a4c79d9-1caa93877.min.css`,
  '/tools': `${WF_BASE}.66e2e525ff88cd2d1a4c79e6-9471e2608.min.css`,
}

const PROJECT_CASE_CSS = `${WF_BASE}.66e2e525ff88cd2d1a4c79dc-0b5685c9e.min.css`

export const WEBFLOW_PAGE_CSS_HREFS = [...Object.values(PAGE_CSS), PROJECT_CASE_CSS]

export function getWebflowPageCss(pathname: string): string {
  if (pathname.startsWith('/project/')) {
    return PROJECT_CASE_CSS
  }
  return PAGE_CSS[pathname] ?? PAGE_CSS['/']
}
