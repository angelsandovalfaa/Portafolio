import { CardCtaArrow } from '../components/ui/CardCtaArrow'
import { PROJECTS_GRID } from '../data/projects'

export function ProjectsPage() {
  return (
    <>
      <div className="hero-block">
        <div className="hero-heading-wrap">
          <h1 data-animate="font-weight" className="hero-heading">
            Proyectos seleccionados
          </h1>
        </div>
      </div>
      <div className="block-divider"></div>
      <div className="section-block">
        <div className="w-dyn-list">
          <div role="list" className="_2x-column w-dyn-items">
            {PROJECTS_GRID.map((p) => (
              <div key={p.href} role="listitem" className="work-thumb w-dyn-item">
                <a href={p.href} target="_blank" rel="noreferrer" className="card w-inline-block">
                  <div className="shine-wrap">
                    <div className="shine"></div>
                  </div>
                  <div className="project-thumb-portrait">
                    <img loading="eager" alt="" src={p.image} className="thumb-image" />
                  </div>
                  <div className="project-thumb-portrait-info">
                    <div className="space-beetween">
                      <div>
                        <h2 className="card-heading">{p.title}</h2>
                      </div>
                      <div className="card-meta">
                        <div className="card-info">
                          <div className="card-tag is-light">Development</div>
                        </div>
                        <div className="card-cta-wrap">
                          <div className="card-cta">
                            <CardCtaArrow />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
          <div role="navigation" aria-label="List" className="w-pagination-wrapper pagination"></div>
        </div>
      </div>
    </>
  )
}
