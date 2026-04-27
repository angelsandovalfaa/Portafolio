import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { StackCarousel } from '../components/home/StackCarousel'
import { OpenToWorkCard } from '../components/ui/OpenToWorkCard'
import { PROJECTS_GRID } from '../data/projects'
import { TOOLS_SECTIONS } from '../data/toolsStatic'

const CORE_PILLARS = [
  {
    title: 'Infraestructura',
    text: 'Diseño y operación de entornos Linux y cloud con foco en estabilidad y escalabilidad.',
  },
  {
    title: 'CI/CD',
    text: 'Automatización de builds y despliegues para reducir fricción y errores en producción.',
  },
  {
    title: 'Observabilidad',
    text: 'Métricas, alertas y dashboards para entender el estado real de cada servicio.',
  },
]

const QUICK_STATS = [
  { label: 'Años en IT', value: '10+' },
  { label: 'Stacks Cloud', value: 'AWS · Azure · GCP' },
  { label: 'Foco', value: 'Confiabilidad operativa' },
]

export function HomePage() {
  const prefersReducedMotion = useReducedMotion()
  const featuredProjects = PROJECTS_GRID.slice(0, 3)
  const featuredStack = TOOLS_SECTIONS.flatMap((section) => section.cards).slice(0, 8)

  return (
    <div className="space-y-20 pb-4">
      <motion.section
        initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
        animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.72, ease: 'easeOut' }}
        className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(1200px_540px_at_12%_-5%,rgba(34,211,238,.26),transparent_56%),radial-gradient(940px_480px_at_96%_6%,rgba(129,140,248,.2),transparent_58%),linear-gradient(145deg,#020617_0%,#091127_42%,#071a1e_100%)] p-6 shadow-[0_24px_80px_rgba(3,7,18,.52)] md:p-10"
      >
        <div className="absolute inset-0 -z-10 opacity-30 [background:linear-gradient(rgba(148,163,184,.16)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,.12)_1px,transparent_1px)] [background-size:30px_30px]" />

        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-7">
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
              animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08, ease: 'easeOut' }}
              className="space-y-3"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/35 bg-cyan-300/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.17em] text-cyan-100">
                DevOps Portfolio
              </span>
              <p className="text-sm text-slate-300 md:text-base">Buenos Aires · OpenToWork</p>
            </motion.div>

            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
              animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18, ease: 'easeOut' }}
              className="space-y-4"
            >
              <h1 className="font-title text-balance text-4xl font-semibold leading-tight text-white md:text-6xl">
                Infraestructura y DevOps para operar con más claridad.
              </h1>
              <p className="max-w-xl text-pretty text-base leading-relaxed text-slate-200 md:text-lg">
                Trabajo en automatización, despliegues y observabilidad para que los equipos puedan mantener servicios
                estables y previsibles en producción.
              </p>
            </motion.div>

            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
              animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.58, delay: 0.28, ease: 'easeOut' }}
              className="flex flex-wrap items-center gap-3"
            >
              <Link to="/contact" className="btn-primary" aria-label="Ir a contacto">
                Contacto
              </Link>
              <Link to="/projects" className="btn-secondary" aria-label="Ir a proyectos">
                Ver proyectos
              </Link>
            </motion.div>

            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
              animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.36, ease: 'easeOut' }}
              className="grid gap-3 sm:grid-cols-3"
            >
              {QUICK_STATS.map((stat) => (
                <article key={stat.label} className="card-glass px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.12em] text-slate-400">{stat.label}</p>
                  <p className="mt-1 font-title text-sm text-white md:text-base">{stat.value}</p>
                </article>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, x: 24, scale: 0.98 }}
            animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.22, ease: 'easeOut' }}
            className="lg:justify-self-end"
          >
            <StackCarousel />
          </motion.div>
        </div>
      </motion.section>

      <section className="space-y-6" aria-labelledby="core-pillars-title">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="space-y-2">
            <p className="kicker">Servicios</p>
            <h2 id="core-pillars-title" className="section-title">
              Qué hago en el día a día
            </h2>
          </div>
          <Link to="/about" className="btn-secondary" aria-label="Ir a sobre mí">
            Sobre mí
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {CORE_PILLARS.map((pillar, index) => (
            <motion.article
              key={pillar.title}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              whileHover={prefersReducedMotion ? undefined : { y: -6 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="card-soft"
            >
              <h3 className="font-title text-xl text-white">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{pillar.text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="space-y-6" aria-labelledby="featured-projects-title">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="space-y-2">
            <p className="kicker">Proyectos</p>
            <h2 id="featured-projects-title" className="section-title">
              Selección destacada
            </h2>
          </div>
          <Link to="/projects" className="btn-secondary" aria-label="Ver todos los proyectos">
            Todos los proyectos
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <motion.a
              key={project.href}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
              whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              whileHover={prefersReducedMotion ? undefined : { y: -6 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.52, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0b1222]"
              aria-label={`Abrir proyecto ${project.title}`}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={`Vista previa de ${project.title}`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="font-title text-xl text-white">{project.title}</h3>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <section className="space-y-6" aria-labelledby="stack-preview-title">
        <div className="space-y-2">
          <p className="kicker">Stack</p>
          <h2 id="stack-preview-title" className="section-title">
            Herramientas con las que trabajo
          </h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {featuredStack.map((tool, index) => (
            <motion.div
              key={`${tool.title}-${index}`}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              whileHover={prefersReducedMotion ? undefined : { y: -4 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.03, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-3"
              aria-label={tool.title}
            >
              <div className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-slate-950/60">
                <img src={tool.icon} alt={tool.title} className="h-5 w-5 object-contain" />
              </div>
              <span className="text-sm text-slate-200">{tool.title}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <OpenToWorkCard />
    </div>
  )
}
