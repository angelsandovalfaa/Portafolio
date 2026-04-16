type Props = { variant?: 'default' | 'tools' }

export function CardCtaArrow({ variant = 'default' }: Props) {
  if (variant === 'tools') {
    return (
      <div className="icon-svg w-embed">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 19.5 15-15m0 0H8.25m11.25 0V15.75"
          />
        </svg>
      </div>
    )
  }

  return (
    <div className="icon-svg w-embed">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
      </svg>
    </div>
  )
}
