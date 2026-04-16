import { useState } from 'react'

type Props = {
  title: React.ReactNode
  children: React.ReactNode
  /** Modo controlado: mismo comportamiento que `faq-accordion.js` (un ítem abierto por grupo). */
  open?: boolean
  onToggle?: () => void
  variant?: 'default' | 'specialties'
}

export function FaqAccordionItem({
  title,
  children,
  open: openProp,
  onToggle,
  variant = 'default',
}: Props) {
  const [internalOpen, setInternalOpen] = useState(false)
  const controlled = openProp !== undefined
  const open = controlled ? openProp : internalOpen
  const isSpecialties = variant === 'specialties'

  const handleClick = () => {
    if (controlled) {
      onToggle?.()
    } else {
      setInternalOpen((o) => !o)
    }
  }

  return (
    <div
      data-click={isSpecialties ? undefined : 'faq'}
      className={`${isSpecialties ? 'spec-accordion' : 'accordion'}${open ? ' open' : ''}`}
      onClick={handleClick}
    >
      <div className={isSpecialties ? 'spec-accordion-top' : 'accordion-top'}>
        <div className={isSpecialties ? 'spec-accordion-top-wrap' : 'accordion-top-wrap'}>
          <div>{title}</div>
        </div>
        <div className={isSpecialties ? 'spec-accordion-top-icon' : 'accordion-top-icon'}>
          <div className={isSpecialties ? 'spec-accordion-top-icon-wrap' : 'accordion-top-icon-wrap'}>
            <div className={isSpecialties ? 'spec-accordion-icon-stripe-2' : 'accordion-icon-stripe-2'}></div>
            <div className={isSpecialties ? 'spec-accordion-icon-stripe-1' : 'accordion-icon-stripe-1'}></div>
          </div>
        </div>
      </div>
      <div className={isSpecialties ? 'spec-accordion-bottom' : 'accordion-bottom'} aria-hidden={!open}>
        <div className={isSpecialties ? 'spec-accordion-bottom-wrap' : 'accordion-bottom-wrap'}>
          <div>{children}</div>
        </div>
      </div>
    </div>
  )
}
