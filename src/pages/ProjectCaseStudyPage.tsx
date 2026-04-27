import { Navigate, useParams } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'

const CASES: Record<string, { title: string; lead: string; liveUrl: string; image: string }> = {
  pygio: {
    title: 'Pygio',
    lead: 'Transformative and intelligent IT services',
    liveUrl: 'https://www.pygio.com/',
    image:
      'https://cdn.prod.website-files.com/66e2e525ff88cd2d1a4c79f8/686ba43f10d360f05a560e02_1440%20(1)%201%20(1).avif',
  },
  orbiter: {
    title: 'Orbiter',
    lead: 'Manage and grow relationships at scale',
    liveUrl: 'https://www.orbiter.io/',
    image:
      'https://cdn.prod.website-files.com/66e2e525ff88cd2d1a4c79f8/67051bf1dfd192c302b524c0_Deskdtop_1920.avif',
  },
}

export function ProjectCaseStudyPage() {
  const { slug } = useParams<{ slug: string }>()
  const data = slug ? CASES[slug] : undefined
  const prefersReducedMotion = useReducedMotion()

  if (!slug || !data) {
    return <Navigate to="/projects" replace />
  }

  return (
    <section className="space-y-6" aria-labelledby="case-study-title">
      <motion.article
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="card-soft"
      >
        <p className="kicker">Case Study</p>
        <h1 id="case-study-title" className="section-title text-4xl md:text-5xl">
          {data.title}
        </h1>
        <p className="mt-3 text-[var(--text-muted)]">{data.lead}</p>
        <a
          href={data.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="btn-primary mt-5 inline-flex"
          aria-label={`Abrir sitio ${data.title}`}
        >
          Ver sitio en vivo
        </a>
      </motion.article>

      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
        animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden rounded-3xl border border-white/10"
      >
        <img src={data.image} alt={`Vista principal del proyecto ${data.title}`} className="h-auto w-full object-cover" />
      </motion.div>
    </section>
  )
}
