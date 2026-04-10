import { useEffect } from 'react'

export function useKapstanMarquee(active: boolean) {
  useEffect(() => {
    if (!active) return
    document.querySelectorAll('.kapstan-track').forEach((track) => {
      const el = track as HTMLElement
      if (el.dataset.marqueeReady === '1') return
      el.dataset.marqueeReady = '1'
      Array.from(el.children).forEach((item) => {
        el.appendChild(item.cloneNode(true))
      })
    })
  }, [active])
}
