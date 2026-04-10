import { useState } from 'react'

type Props = {
  title: React.ReactNode
  children: React.ReactNode
  /** Modo controlado: mismo comportamiento que `faq-accordion.js` (un ítem abierto por grupo). */
  open?: boolean
  onToggle?: () => void
}

export function FaqAccordionItem({ title, children, open: openProp, onToggle }: Props) {
  const [internalOpen, setInternalOpen] = useState(false)
  const controlled = openProp !== undefined
  const open = controlled ? openProp : internalOpen

  const handleClick = () => {
    if (controlled) {
      onToggle?.()
    } else {
      setInternalOpen((o) => !o)
    }
  }

  return (
    <div
      data-click="faq"
      className={`accordion${open ? ' open' : ''}`}
      onClick={handleClick}
    >
      <div className="accordion-top">
        <div className="accordion-top-wrap">
          <div>{title}</div>
        </div>
        <div className="accordion-top-icon">
          <div className="accordion-top-icon-wrap">
            <div className="accordion-icon-stripe-2"></div>
            <div className="accordion-icon-stripe-1"></div>
          </div>
        </div>
      </div>
      <div className="accordion-bottom">
        <div className="accordion-bottom-wrap">
          <div>{children}</div>
        </div>
      </div>
    </div>
  )
}
