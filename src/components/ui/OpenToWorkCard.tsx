import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'

export function OpenToWorkCard() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.section
      initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-[2rem] border border-emerald-300/25 bg-[linear-gradient(140deg,rgba(16,185,129,0.14),rgba(56,189,248,0.08)_45%,rgba(15,23,42,0.78)_100%)] p-7 shadow-[0_18px_50px_rgba(2,6,23,0.4)] md:p-10"
      aria-labelledby="open-to-work-title"
    >
      <div className="flex flex-wrap items-center justify-between gap-6">
        <div className="max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/35 bg-emerald-300/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-100">
            <motion.span
              aria-hidden="true"
              className="h-2.5 w-2.5 rounded-full bg-emerald-300"
              animate={
                prefersReducedMotion
                  ? undefined
                  : {
                      scale: [1, 1.16, 1],
                      opacity: [0.65, 1, 0.65],
                    }
              }
              transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
            />
            OpenToWork
          </div>

          <h2 id="open-to-work-title" className="font-title text-3xl text-white md:text-4xl">
            Disponible para oportunidades en DevOps e infraestructura
          </h2>

          <p className="text-sm leading-relaxed text-slate-200 md:text-base">
            Modalidad remota, híbrida o presencial. Base en Buenos Aires, Argentina.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link to="/contact" className="btn-primary" aria-label="Ir a la página de contacto">
            Escribirme
          </Link>
          <a
            href="/assets/CV.DevOps-Angel-Sandoval.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
            aria-label="Abrir CV en PDF"
          >
            Ver CV
          </a>
        </div>
      </div>
    </motion.section>
  )
}
