import { motion, useReducedMotion } from 'framer-motion'

const CONTACTS = [
  {
    label: 'Email',
    value: 'angelsandovalfaa@gmail.com',
    note: 'Canal principal',
    href: 'mailto:angelsandovalfaa@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5">
        <rect x="3.5" y="6" width="17" height="12" rx="2" />
        <path d="M4.5 7l7.5 6 7.5-6" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'angel-eduardo-sandoval',
    note: 'Perfil profesional',
    href: 'http://www.linkedin.com/in/angel-eduardo-sandoval',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5">
        <path d="M7 9v8" />
        <path d="M7 6.5v.01" />
        <path d="M11 17v-5c0-1.5 1-3 3-3s3 1.5 3 3v5" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    value: '+54 9 3624 06-2848',
    note: 'Canal directo',
    href: 'https://wa.me/5493624062848',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5">
        <path d="M20 12a8 8 0 1 0-3 6.25L20 19l-.75-2.7A7.96 7.96 0 0 0 20 12Z" />
        <path d="M9.5 10.5c1.2 2.1 2.7 3.5 4.9 4.5" />
      </svg>
    ),
  },
]

const TOPICS = ['Infraestructura', 'CI/CD', 'Observabilidad', 'Automatización', 'Otro']

export function ContactPage() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="space-y-8" aria-labelledby="contact-title">
      <motion.article
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.58, ease: 'easeOut' }}
        className="rounded-[1.8rem] border border-white/10 bg-[radial-gradient(820px_300px_at_8%_0%,rgba(34,211,238,.18),transparent_58%),linear-gradient(145deg,#0b1222,#060d1a)] p-6 md:p-8"
      >
        <h1 id="contact-title" className="section-title text-4xl md:text-5xl">
          Contacto
        </h1>
        <p className="mt-3 max-w-3xl text-[var(--text-muted)]">
          Si querés escribirme, podés hacerlo por mensaje directo o completando el formulario.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          <span className="rounded-full border border-emerald-300/35 bg-emerald-300/10 px-3 py-1 text-xs text-emerald-100">
            OpenToWork
          </span>
          <span className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-xs text-slate-200">
            Remoto / Híbrido / Presencial
          </span>
          <span className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-xs text-slate-200">
            Buenos Aires, Argentina
          </span>
        </div>
      </motion.article>

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.aside
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-4"
          aria-label="Canales de contacto"
        >
          <div className="card-soft">
            <h2 className="font-title text-xl text-white">Canales directos</h2>
            <div className="mt-4 space-y-3">
              {CONTACTS.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
                  whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.42, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 transition hover:border-cyan-300/30 hover:bg-cyan-300/[0.08]"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-slate-950/60 text-slate-200">
                    {item.icon}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs uppercase tracking-[0.12em] text-slate-400">{item.label}</span>
                    <span className="block truncate text-sm text-white">{item.value}</span>
                    <span className="block text-xs text-slate-500">{item.note}</span>
                  </span>
                  <span className="text-slate-500 transition group-hover:text-cyan-200">↗</span>
                </motion.a>
              ))}
            </div>
          </div>

          <div className="card-soft">
            <h3 className="font-title text-lg text-white">Nota</h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
              Podés escribirme por el medio que te resulte más cómodo. Respondo apenas me sea posible.
            </p>
          </div>
        </motion.aside>

        <motion.form
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.54, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="card-soft space-y-4"
          aria-label="Formulario de contacto"
        >
          <h2 className="font-title text-xl text-white">Formulario</h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="form-field" htmlFor="name">
              Nombre
              <input id="name" name="name" type="text" placeholder="Tu nombre" className="input" />
            </label>

            <label className="form-field" htmlFor="email">
              Email
              <input id="email" name="email" type="email" placeholder="tu@email.com" className="input" required />
            </label>
          </div>

          <label className="form-field" htmlFor="topic">
            Tema
            <select id="topic" name="topic" className="input" defaultValue="">
              <option value="" disabled>
                Seleccionar tema
              </option>
              {TOPICS.map((topic) => (
                <option key={topic}>{topic}</option>
              ))}
            </select>
          </label>

          <label className="form-field" htmlFor="message">
            Mensaje
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Contame brevemente tu consulta"
              className="input resize-none"
            />
          </label>

          <button type="submit" className="btn-primary w-full" aria-label="Enviar formulario de contacto">
            Enviar
          </button>
        </motion.form>
      </div>
    </section>
  )
}
