import { useEffect } from 'react'

export function useLayoutReveal() {
  useEffect(() => {
    const el = document.querySelector('.layout') as HTMLElement | null
    if (el) {
      el.style.opacity = '1'
    }
  }, [])
}
