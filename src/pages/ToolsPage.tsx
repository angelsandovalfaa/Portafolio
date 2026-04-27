import { motion, useReducedMotion } from 'framer-motion'
import { TOOLS_SECTIONS } from '../data/toolsStatic'

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export function ToolsPage() {
  const prefersReducedMotion = useReducedMotion()
  const totalTools = TOOLS_SECTIONS.reduce((acc, section) => acc + section.cards.length, 0)
  const uniqueTags = new Set(TOOLS_SECTIONS.flatMap((section) => section.cards.flatMap((card) => card.tags))).size

  return (
    <section className="space-y-10" aria-labelledby="stack-title">
      <motion.article
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.62, ease: 'easeOut' }}
        className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-[radial-gradient(840px_300px_at_8%_0%,rgba(34,211,238,.2),transparent_56%),radial-gradient(760px_300px_at_90%_0%,rgba(129,140,248,.18),transparent_58%),linear-gradient(145deg,#0b1222,#060d1a)] p-6 md:p-8"
      >
        <p className="kicker">Stack</p>
        <h1 id="stack-title" className="section-title mt-2 text-4xl md:text-5xl">
          Herramientas que uso en proyectos reales
        </h1>
        <p className="mt-3 max-w-3xl text-[var(--text-muted)]">
          Infraestructura, despliegues, cloud y observabilidad. Este stack refleja lo que uso en la operación diaria.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <div className="card-glass px-4 py-3">
            <p className="text-xs uppercase tracking-[0.12em] text-slate-400">Categorías</p>
            <p className="mt-1 font-title text-xl text-white">{TOOLS_SECTIONS.length}</p>
          </div>
          <div className="card-glass px-4 py-3">
            <p className="text-xs uppercase tracking-[0.12em] text-slate-400">Herramientas</p>
            <p className="mt-1 font-title text-xl text-white">{totalTools}</p>
          </div>
          <div className="card-glass px-4 py-3">
            <p className="text-xs uppercase tracking-[0.12em] text-slate-400">Tags técnicos</p>
            <p className="mt-1 font-title text-xl text-white">{uniqueTags}</p>
          </div>
        </div>
      </motion.article>

      <nav className="flex gap-2 overflow-x-auto pb-1" aria-label="Navegación de categorías de stack">
        {TOOLS_SECTIONS.map((section) => {
          const sectionId = `stack-${slugify(section.title)}`
          return (
            <a
              key={section.title}
              href={`#${sectionId}`}
              className="shrink-0 rounded-full border border-white/12 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-200 transition hover:border-cyan-300/35 hover:bg-cyan-300/10"
            >
              {section.title.replace(/\.$/, '')}
            </a>
          )
        })}
      </nav>

      <div className="space-y-8">
        {TOOLS_SECTIONS.map((section, sectionIndex) => {
          const sectionId = `stack-${slugify(section.title)}`
          return (
            <section key={section.title} id={sectionId} className="space-y-4" aria-label={section.title}>
              <div className="space-y-1">
                <h2 className="font-title text-2xl text-white">{section.title}</h2>
                <p className="text-sm text-[var(--text-muted)]">{section.subtitle}</p>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {section.cards.map((tool, toolIndex) => (
                  <motion.div
                    key={`${section.title}-${tool.title}`}
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                    whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                    whileHover={prefersReducedMotion ? undefined : { y: -6 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.46,
                      delay: sectionIndex * 0.03 + toolIndex * 0.03,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group rounded-2xl border border-white/10 bg-[linear-gradient(165deg,rgba(15,23,42,.92),rgba(15,23,42,.6))] p-4 shadow-[0_14px_34px_rgba(2,6,23,.26)]"
                    aria-label={tool.title}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-slate-950/60">
                        <img src={tool.icon} alt={`Ícono de ${tool.title}`} className="h-6 w-6 object-contain" />
                      </div>
                      <span className="text-slate-600">•</span>
                    </div>

                    <h3 className="mt-3 font-title text-lg text-white">{tool.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{tool.desc}</p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {tool.tags.slice(0, 3).map((tag) => (
                        <span
                          key={`${tool.title}-${tag}`}
                          className="rounded-full border border-white/12 bg-white/[0.04] px-2.5 py-1 text-[11px] text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          )
        })}
      </div>
    </section>
  )
}
