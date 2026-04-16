/** IDs de Webflow del export estático (atributos `data-wf-page` en `<html>`). */
export const WF_SITE_ID = '66e2e525ff88cd2d1a4c79ce'
export const WF_DOMAIN = 'serhii-dev.webflow.io'

export function getWfPageId(pathname: string): string {
  if (pathname.startsWith('/project/')) {
    return '66e2e525ff88cd2d1a4c79dc'
  }
  const map: Record<string, string> = {
    '/': '66e2e525ff88cd2d1a4c79d3',
    '/projects': '66e2e525ff88cd2d1a4c79e2',
    '/about': '66e2e525ff88cd2d1a4c79d7',
    '/contact': '66e2e525ff88cd2d1a4c79d9',
    '/tools': '66e2e525ff88cd2d1a4c79e6',
  }
  return map[pathname] ?? map['/']
}
