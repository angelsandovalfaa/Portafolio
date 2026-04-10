import { CardCtaArrow } from '../components/ui/CardCtaArrow'
import { TOOLS_SECTIONS } from '../data/toolsStatic'

export function ToolsPage() {
  return (
    <>
      <div className="hero-block">
        <div className="hero-heading-wrap">
          <h1 data-animate="font-weight" className="hero-heading">
            Stack
          </h1>
        </div>
      </div>
      <div className="block-divider"></div>
      {TOOLS_SECTIONS.map((section, i) => (
        <div key={section.title}>
          {i > 0 ? <div className="block-divider"></div> : null}
          <div className="section-block">
            <div className="content-title-wrap">
              <div className="content-title-dot"></div>
              <h2 className="content-title">{section.title}</h2>
              <div className="content-title is-text">{section.subtitle}</div>
            </div>
            <div className="w-layout-grid _2x-column">
              {section.cards.map((t) => (
                <a
                  key={`${section.title}-${t.title}`}
                  style={{ backgroundColor: 'rgb(28,28,28)' }}
                  href={t.href}
                  target="_blank"
                  rel="noreferrer"
                  className="card w-inline-block"
                >
                  <div className="shine-wrap">
                    <div className="shine"></div>
                  </div>
                  <div className="card-content-vertical">
                    <div className="tools">
                      <div className="tools-head">
                        <div className={`tools-icon${t.iconClass ? ` ${t.iconClass}` : ''}`}>
                          <img
                            src={t.icon}
                            loading="lazy"
                            alt=""
                            className="image-background"
                            sizes={t.sizes}
                            srcSet={t.srcSet}
                          />
                          <div className="app-outline"></div>
                        </div>
                        <div>
                          <h2 className="card-heading">{t.title}</h2>
                        </div>
                      </div>
                      <div className="card-text-2-lines">{t.desc}</div>
                    </div>
                    <div className="card-meta">
                      <div className="card-info">
                        {t.tags.map((tag) => (
                          <div key={tag} className="card-tag">
                            {tag}
                          </div>
                        ))}
                      </div>
                      <div className="card-cta">
                        <CardCtaArrow />
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
