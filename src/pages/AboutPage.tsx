import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'

const PILLARS = [
  {
    title: 'Infraestructura y operaciones',
    text: 'Administración de entornos productivos, virtualización y operación Linux con foco en estabilidad.',
  },
  {
    title: 'Automatización y CI/CD',
    text: 'Automatización de tareas y pipelines para despliegues más predecibles y menor fricción operativa.',
  },
  {
    title: 'Observabilidad y mejora continua',
    text: 'Métricas, alertas y dashboards para detectar desvíos temprano y sostener confiabilidad.',
  },
]

const TIMELINE = [
  {
    period: '2012 - 2013',
    role: 'Formación técnica',
    detail: 'Técnico Superior en Telecomunicaciones (Fuerza Aérea Argentina).',
  },
  {
    period: '2015 - 2021',
    role: 'Operación e infraestructura',
    detail: 'Gestión de comunicaciones, redes y mantenimiento en entornos críticos.',
  },
  {
    period: '2022 - Hoy',
    role: 'DevOps e infraestructura moderna',
    detail: 'Linux, Docker, Kubernetes, Terraform/OpenTofu, cloud y observabilidad.',
  },
]

const VALUES = ['Orden técnico', 'Responsabilidad', 'Trabajo en equipo', 'Aprendizaje continuo', 'Comunicación clara']

const STACK = ['Linux', 'Docker', 'Kubernetes', 'Terraform', 'OpenTofu', 'AWS', 'Azure', 'GCP', 'Jenkins', 'GitHub Actions', 'Prometheus', 'Grafana']

export function AboutPage() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="space-y-8" aria-labelledby="about-title">
      <motion.article
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.62, ease: 'easeOut' }}
        className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-[radial-gradient(700px_280px_at_15%_0%,rgba(56,189,248,.2),transparent_60%),linear-gradient(145deg,#0b1222,#060d1a)] p-6 md:p-8"
      >
        <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <div className="flex items-start gap-4 lg:flex-col lg:items-center lg:text-center">
            <img
              src="/assets/2026-04-06_21-41.avif"
              alt="Foto de Ángel Eduardo Sandoval"
              className="h-20 w-20 rounded-full border border-white/20 object-cover shadow-[0_12px_28px_rgba(2,6,23,.5)] md:h-24 md:w-24"
            />
            <div>
              <p className="kicker">Sobre mí</p>
              <p className="mt-1 font-title text-lg text-white">Ángel Eduardo Sandoval</p>
              <p className="text-sm text-slate-400">DevOps Engineer</p>
            </div>
          </div>

          <div>
            <h1 id="about-title" className="section-title text-4xl md:text-5xl">
              Perfil profesional
            </h1>
            <p className="mt-3 max-w-4xl text-base leading-relaxed text-slate-200">
              Profesional IT con foco en infraestructura, sistemas y prácticas DevOps. Me interesa construir bases
              técnicas sólidas y procesos simples que ayuden a trabajar mejor en equipo.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {VALUES.map((value) => (
                <span key={value} className="rounded-full border border-white/15 bg-white/[0.05] px-3 py-1 text-xs text-slate-200">
                  {value}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.article>

      <div className="grid gap-4 md:grid-cols-3">
        {PILLARS.map((item, index) => (
          <motion.article
            key={item.title}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            whileHover={prefersReducedMotion ? undefined : { y: -6 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.52, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="card-soft"
          >
            <h2 className="font-title text-xl text-white">{item.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{item.text}</p>
          </motion.article>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.section
          initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
          whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.56, ease: [0.22, 1, 0.36, 1] }}
          className="card-soft"
          aria-label="Trayectoria"
        >
          <h2 className="font-title text-2xl text-white">Trayectoria</h2>
          <div className="mt-5 space-y-4">
            {TIMELINE.map((item) => (
              <article key={item.period} className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                <p className="text-xs uppercase tracking-[0.12em] text-cyan-200">{item.period}</p>
                <h3 className="mt-1 font-title text-base text-white">{item.role}</h3>
                <p className="mt-1 text-sm text-[var(--text-muted)]">{item.detail}</p>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
          whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.56, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          className="card-soft"
          aria-label="Stack principal"
        >
          <h2 className="font-title text-2xl text-white">Stack principal</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {STACK.map((tech) => (
              <span key={tech} className="rounded-full border border-white/12 bg-white/6 px-3 py-1.5 text-sm text-slate-200">
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-emerald-300/20 bg-emerald-300/8 p-4">
            <p className="text-xs uppercase tracking-[0.14em] text-emerald-200">Objetivo actual</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-200">
              Seguir aprendiendo en DevOps y aportar en equipos con buenas prácticas y mejora continua.
            </p>
            <Link to="/contact" className="btn-secondary mt-4" aria-label="Ir a contacto">
              Contacto
            </Link>
          </div>
        </motion.section>
      </div>
    </section>
  )
}
