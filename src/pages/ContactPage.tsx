import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

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
    value: 'Angel Eduardo Sandoval',
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

const EMAILJS_SERVICE_ID = 'service_ckpb9rp'
const EMAILJS_TEMPLATE_ID = 'template_jn3amwi'
const EMAILJS_PUBLIC_KEY = 'yyJZxxnQt7mnJDpFK'
const OWNER_EMAIL = 'angelsandovalfaa@gmail.com'

export function ContactPage() {
  const prefersReducedMotion = useReducedMotion()
  const [isSending, setIsSending] = useState(false)
  const [feedback, setFeedback] = useState<{
    open: boolean
    type: 'success' | 'error'
    message: string
  }>({
    open: false,
    type: 'success',
    message: '',
  })

  useEffect(() => {
    if (!feedback.open) return
    const timer = window.setTimeout(() => {
      setFeedback((prev) => ({ ...prev, open: false }))
    }, 4800)
    return () => window.clearTimeout(timer)
  }, [feedback.open])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSending(true)
    setFeedback((prev) => ({ ...prev, open: false, message: '' }))

    const form = event.currentTarget
    const formData = new FormData(form)
    const name = (formData.get('name') as string | null)?.trim() ?? ''
    const email = (formData.get('email') as string | null)?.trim() ?? ''
    const selectedTopic = (formData.get('topic') as string | null)?.trim() ?? ''
    const topic = selectedTopic || 'Otro'
    const message = (formData.get('message') as string | null)?.trim() ?? ''

    try {
      const templateParams = {
        name,
        from_name: name,
        from_email: email,
        sender_email: email,
        reply_to: email,
        topic,
        tema: topic,
        selected_topic: topic,
        subject: topic || 'Contacto desde portfolio',
        message,
        to_name: 'Ángel Sandoval',
        to_email: OWNER_EMAIL,
        recipient_email: OWNER_EMAIL,
        email: OWNER_EMAIL,
        user_email: OWNER_EMAIL,
        visitor_email: email,
      }

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        { publicKey: EMAILJS_PUBLIC_KEY },
      )
      setFeedback({
        open: true,
        type: 'success',
        message: 'Mensaje enviado. Gracias por escribir.',
      })
      form.reset()
    } catch (error) {
      console.error('MailJS error:', error)
      const response = error as { status?: number; text?: string }
      if (response?.status === 412) {
        setFeedback({
          open: true,
          type: 'error',
          message:
            'El servicio de correo está desconfigurado (Gmail). Reconectá la cuenta en EmailJS y otorgá permisos nuevamente.',
        })
      } else {
        setFeedback({
          open: true,
          type: 'error',
          message: 'No se pudo enviar. Probá nuevamente en unos minutos.',
        })
      }
    } finally {
      setIsSending(false)
    }
  }

  const isSuccessFeedback = feedback.type === 'success'
  const feedbackTitle = isSuccessFeedback ? 'Mensaje enviado' : 'No se pudo enviar'

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
          onSubmit={handleSubmit}
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
              <input id="name" name="name" type="text" placeholder="Tu nombre" className="input" required />
            </label>

            <label className="form-field" htmlFor="email">
              Email
              <input id="email" name="email" type="email" placeholder="tu@email.com" className="input" required />
            </label>
          </div>

          <label className="form-field" htmlFor="topic">
            Tema
            <select id="topic" name="topic" className="input" defaultValue="" required>
              <option value="" disabled>
                Seleccionar tema
              </option>
              {TOPICS.map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
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
              required
            />
          </label>

          <button
            type="submit"
            disabled={isSending}
            className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
            aria-label="Enviar formulario de contacto"
          >
            {isSending ? 'Enviando...' : 'Enviar'}
          </button>

        </motion.form>
      </div>

      <AnimatePresence>
        {feedback.open ? (
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 grid place-items-center bg-slate-950/55 p-4 backdrop-blur-[2px]"
            role="alertdialog"
            aria-live="polite"
            aria-label={feedback.type === 'success' ? 'Mensaje enviado' : 'Error al enviar mensaje'}
            onClick={() => setFeedback((prev) => ({ ...prev, open: false }))}
          >
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 14, scale: 0.98 }}
              animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.98 }}
              transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
              className={`relative w-[min(92vw,460px)] overflow-hidden rounded-3xl border bg-[linear-gradient(155deg,#0d1729,#081223)] p-5 text-slate-100 shadow-[0_20px_70px_-24px_rgba(2,6,23,.85)] backdrop-blur-xl ${
                isSuccessFeedback ? 'border-emerald-300/30' : 'border-rose-300/30'
              }`}
              onClick={(event) => event.stopPropagation()}
            >
              <div
                className={`pointer-events-none absolute inset-x-0 top-0 h-[2px] ${
                  isSuccessFeedback
                    ? 'bg-gradient-to-r from-emerald-300/10 via-emerald-300/90 to-emerald-300/10'
                    : 'bg-gradient-to-r from-rose-300/10 via-rose-300/90 to-rose-300/10'
                }`}
                aria-hidden="true"
              />

              <div className="flex items-start gap-4">
                <span
                  className={`mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-full border text-sm font-semibold ${
                    isSuccessFeedback
                      ? 'border-emerald-200/25 bg-emerald-300/10 text-emerald-200'
                      : 'border-rose-200/25 bg-rose-300/10 text-rose-200'
                  }`}
                  aria-hidden="true"
                >
                  {isSuccessFeedback ? 'OK' : '!'}
                </span>

                <div className="min-w-0 flex-1">
                  <p className="font-title text-lg text-white">{feedbackTitle}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-300">{feedback.message}</p>
                </div>
              </div>

              <div className="mt-5 flex justify-end">
                <button
                  type="button"
                  onClick={() => setFeedback((prev) => ({ ...prev, open: false }))}
                  className={`rounded-xl border px-4 py-2 text-sm font-medium transition ${
                    isSuccessFeedback
                      ? 'border-emerald-200/25 bg-emerald-300/10 text-emerald-100 hover:bg-emerald-300/15'
                      : 'border-rose-200/25 bg-rose-300/10 text-rose-100 hover:bg-rose-300/15'
                  }`}
                  aria-label="Cerrar notificación"
                >
                  Entendido
                </button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  )
}
