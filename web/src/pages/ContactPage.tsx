import { useEffect } from 'react'
import { ContactDirectGrid } from '../components/layout/ContactDirectGrid'

const CALENDLY_CSS_ID = 'calendly-widget-css'
const CALENDLY_JS_ID = 'calendly-widget-js'

export function ContactPage() {
  useEffect(() => {
    if (document.getElementById(CALENDLY_CSS_ID)) return
    const css = document.createElement('link')
    css.id = CALENDLY_CSS_ID
    css.rel = 'stylesheet'
    css.href = 'https://assets.calendly.com/assets/external/widget.css'
    document.head.appendChild(css)

    const script = document.createElement('script')
    script.id = CALENDLY_JS_ID
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.getElementById(CALENDLY_CSS_ID)?.remove()
      document.getElementById(CALENDLY_JS_ID)?.remove()
    }
  }, [])

  return (
    <>
      <div className="hero-block">
        <div className="hero-heading-wrap">
          <h1 data-animate="font-weight" className="hero-heading">
            Contacto
          </h1>
        </div>
      </div>
      <div className="block-divider"></div>
      <div className="section-block">
        <div className="content-title-wrap">
          <div className="content-title-dot"></div>
          <h2 className="content-title">Contacto directo</h2>
        </div>
        <ContactDirectGrid />
      </div>
      <div className="block-divider"></div>
      <div id="contact" className="section-block">
        <div className="content-title-wrap">
          <div className="content-title-dot"></div>
          <h2 className="content-title">Envia un mensaje</h2>
        </div>
        <div className="form-block w-form">
          <form id="send-a-message" name="email-form" method="get">
            <div className="w-layout-grid _4x-column">
              <input
                className="text-field w-input"
                maxLength={256}
                name="name"
                placeholder="Tu nombre"
                type="text"
                id="name"
              />
              <input
                className="text-field w-input"
                maxLength={256}
                name="email"
                placeholder="Tu email"
                type="email"
                id="email"
                required
              />
              <textarea
                placeholder="Tu mensaje..."
                maxLength={5000}
                id="field"
                name="field"
                className="text-field is-area w-input"
              ></textarea>
              <input type="submit" className="button w-button" value="Enviar" data-wait="Enviando..." />
            </div>
          </form>
          <div className="w-form-done">
            <div>Gracias! Tu mensaje fue enviado.</div>
          </div>
          <div className="w-form-fail">
            <div>Ups! Ocurrio un error al enviar el formulario.</div>
          </div>
        </div>
      </div>
    </>
  )
}
