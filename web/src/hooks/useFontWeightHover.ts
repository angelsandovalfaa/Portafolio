import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import gsap from 'gsap'
import SplitType from 'split-type'

export function useFontWeightHover(enabled: boolean) {
  const { pathname } = useLocation()

  useEffect(() => {
    if (!enabled) return

    let cancelled = false
    const splits: SplitType[] = []
    const mm = gsap.matchMedia()

    const run = () => {
      if (cancelled) return
      mm.add('(min-width: 992px)', () => {
        document.querySelectorAll<HTMLElement>('[data-animate="font-weight"]').forEach((item) => {
          splits.push(new SplitType(item, { types: 'chars' }))
        })

        const MAX_DISTANCE = 300
        const MAX_FONT_WEIGHT = 800
        const MIN_FONT_WEIGHT = 100

        const onMove = (event: MouseEvent) => {
          const mouseX = event.pageX
          const mouseY = event.pageY

          document.querySelectorAll<HTMLElement>('[data-animate="font-weight"]').forEach((item) => {
            item.querySelectorAll<HTMLElement>('.char').forEach((char) => {
              const itemRect = char.getBoundingClientRect()
              const itemCenterX = itemRect.left + itemRect.width / 2 + window.scrollX
              const itemCenterY = itemRect.top + itemRect.height / 2 + window.scrollY

              const distance = Math.sqrt(
                Math.pow(mouseX - itemCenterX, 2) + Math.pow(mouseY - itemCenterY, 2),
              )

              const fontWeight =
                distance < MAX_DISTANCE
                  ? gsap.utils.mapRange(
                      0,
                      MAX_DISTANCE,
                      MIN_FONT_WEIGHT,
                      MAX_FONT_WEIGHT,
                      Math.max(0, MAX_DISTANCE - distance),
                    )
                  : MIN_FONT_WEIGHT

              gsap.to(char, { fontWeight, duration: 0.5 })
            })
          })
        }

        document.addEventListener('mousemove', onMove)
        return () => {
          document.removeEventListener('mousemove', onMove)
        }
      })
    }

    void document.fonts.ready.then(run)

    return () => {
      cancelled = true
      splits.forEach((s) => s.revert())
      mm.revert()
    }
  }, [enabled, pathname])
}
