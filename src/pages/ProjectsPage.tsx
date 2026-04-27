import { motion, useReducedMotion } from 'framer-motion'
import { PROJECTS_GRID } from '../data/projects'

const SUMMARY_BY_TITLE: Record<string, string> = {
  Pygio: 'Servicios IT con foco en claridad visual, estructura sólida y performance web.',
  Orbiter: 'Producto digital orientado a escalar relaciones y flujos de trabajo.',
  Bm: 'Landing moderna para marca digital con identidad marcada y navegación simple.',
  Grassfeld: 'Sitio orientado a producto financiero con enfoque en lectura y conversión.',
  'Deka Agency': 'Web de agencia con narrativa visual fuerte y ritmo editorial.',
  Compass: 'Plataforma de producto con UX limpia y estructura modular.',
  'The Tea website': 'Experiencia web de producto con dirección visual intensa.',
  'Mr Tomato': 'Sitio de marca con una estética lúdica y componentes expresivos.',
  'In sync agency': 'Página de agencia con layout narrativo y sections dinámicas.',
  'Projectone agency': 'Website corporativo con fuerte foco en presentación de servicios.',
  'Land to return': 'Proyecto de storytelling visual con enfoque en contenido y contexto.',
  'AMZ Hero': 'Sitio orientado a adquisición y propuesta de valor clara.',
}

export function ProjectsPage() {
  const prefersReducedMotion = useReducedMotion()
  const featured = PROJECTS_GRID.slice(0, 2)
  const gallery = PROJECTS_GRID.slice(2)

  return (
    <section className="space-y-10" aria-labelledby="projects-page-title">
      <motion.article
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-[radial-gradient(820px_300px_at_8%_0%,rgba(34,211,238,.18),transparent_56%),radial-gradient(760px_300px_at_90%_0%,rgba(129,140,248,.15),transparent_60%),linear-gradient(145deg,#0b1222,#060d1a)] p-6 md:p-8"
      >
        <p className="kicker">Portafolio</p>
        <h1 id="projects-page-title" className="section-title mt-2 text-4xl md:text-5xl">
          Proyectos
        </h1>
        <p className="mt-3 max-w-3xl text-[var(--text-muted)]">
          Selección de trabajos donde participé en diseño, implementación y estructura de producto digital.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          <span className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-xs text-slate-200">
            {PROJECTS_GRID.length} proyectos
          </span>
          <span className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-xs text-slate-200">
            Web & Product
          </span>
          <span className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-xs text-slate-200">
            Casos externos
          </span>
        </div>
      </motion.article>

      <section className="space-y-4" aria-label="Proyectos destacados">
        <h2 className="font-title text-2xl text-white">Destacados</h2>
        <div className="grid gap-5 lg:grid-cols-2">
          {featured.map((project, index) => (
            <motion.a
              key={project.href}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              whileHover={prefersReducedMotion ? undefined : { y: -7 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.54, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(165deg,rgba(15,23,42,.95),rgba(15,23,42,.72))] shadow-[0_18px_36px_rgba(2,6,23,.28)]"
              aria-label={`Abrir proyecto ${project.title}`}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={`Vista previa de ${project.title}`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#02061744] to-transparent" />
              </div>
              <div className="space-y-2 p-5">
                <h3 className="font-title text-2xl text-white">{project.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                  {SUMMARY_BY_TITLE[project.title] ?? 'Proyecto digital con enfoque en experiencia y estructura.'}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <section className="space-y-4" aria-label="Más proyectos">
        <h2 className="font-title text-2xl text-white">Más proyectos</h2>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {gallery.map((project, index) => (
            <motion.a
              key={project.href}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
              whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              whileHover={prefersReducedMotion ? undefined : { y: -5 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.48, delay: index * 0.03, ease: [0.22, 1, 0.36, 1] }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0b1222]"
              aria-label={`Abrir proyecto ${project.title}`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={`Vista previa de ${project.title}`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
              </div>
              <div className="flex items-center justify-between gap-3 p-4">
                <h3 className="font-title text-lg text-white">{project.title}</h3>
                <span className="text-slate-500 transition group-hover:text-cyan-200">↗</span>
              </div>
            </motion.a>
          ))}
        </div>
      </section>
    </section>
  )
}
