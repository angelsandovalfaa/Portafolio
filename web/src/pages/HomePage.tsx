import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HomeHero } from './home/HomeHero'
import { FaqAccordionItem } from '../components/ui/FaqAccordionItem'
import { CardCtaArrow } from '../components/ui/CardCtaArrow'
import { ContactDirectGrid } from '../components/layout/ContactDirectGrid'

const SPECIALTY_IDS = [
  'linux',
  'docker',
  'k8s',
  'cicd',
  'obs',
  'sec',
  'iac',
  'soporte',
] as const

export function HomePage() {
  const [openSpecialty, setOpenSpecialty] = useState<string | null>(null)
  const toggleSpecialty = (id: string) => {
    setOpenSpecialty((cur) => (cur === id ? null : id))
  }

  return (
    <>
      <HomeHero />

      <div className="section-block hiden">
        <div className="content-title-wrap">
          <div className="content-title-dot"></div>
          <h2 className="content-title">Proyectos.</h2>
          <div className="content-title is-text">destacados.</div>
        </div>
        <div className="w-dyn-list">
          <div role="list" className="_2x-column w-dyn-items">
            <div role="listitem" className="work-thumb w-dyn-item">
              <Link to="/project/pygio" className="card w-inline-block">
                <div className="shine-wrap">
                  <div className="shine"></div>
                </div>
                <div className="project-thumb-portrait">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/66e2e525ff88cd2d1a4c79f8/686ba43f10d360f05a560e02_1440%20(1)%201%20(1).avif"
                    alt=""
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/66e2e525ff88cd2d1a4c79f8/686ba43f10d360f05a560e02_1440%20(1)%201%20(1)-p-500.avif 500w, https://cdn.prod.website-files.com/66e2e525ff88cd2d1a4c79f8/686ba43f10d360f05a560e02_1440%20(1)%201%20(1)-p-800.avif 800w, https://cdn.prod.website-files.com/66e2e525ff88cd2d1a4c79f8/686ba43f10d360f05a560e02_1440%20(1)%201%20(1).avif 1632w"
                    className="thumb-image"
                  />
                </div>
                <div className="project-thumb-portrait-info">
                  <div className="space-beetween">
                    <div>
                      <h2 className="card-heading">Pygio</h2>
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
              </Link>
            </div>
            <div role="listitem" className="work-thumb w-dyn-item">
              <Link to="/project/orbiter" className="card w-inline-block">
                <div className="shine-wrap">
                  <div className="shine"></div>
                </div>
                <div className="project-thumb-portrait">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/66e2e525ff88cd2d1a4c79f8/67051bf1dfd192c302b524c0_Deskdtop_1920.avif"
                    alt=""
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/66e2e525ff88cd2d1a4c79f8/67051bf1dfd192c302b524c0_Deskdtop_1920-p-500.avif 500w, https://cdn.prod.website-files.com/66e2e525ff88cd2d1a4c79f8/67051bf1dfd192c302b524c0_Deskdtop_1920-p-800.avif 800w, https://cdn.prod.website-files.com/66e2e525ff88cd2d1a4c79f8/67051bf1dfd192c302b524c0_Deskdtop_1920.avif 1920w"
                    className="thumb-image"
                  />
                </div>
                <div className="project-thumb-portrait-info">
                  <div className="space-beetween">
                    <div>
                      <h2 className="card-heading">Orbiter</h2>
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
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="section-block hiden">
        <div className="content-title-wrap">
          <div className="content-title-dot"></div>
          <h2 className="content-title">Project Selected</h2>
        </div>
        <div className="w-dyn-list">
          <div role="list" className="collection-list w-dyn-items">
            <div role="listitem" className="w-dyn-item">
              <a
                href="https://www.pygio.com/"
                target="_blank"
                rel="noreferrer"
                className="card w-inline-block"
              >
                <div className="shine-wrap">
                  <div className="shine"></div>
                </div>
                <div className="card-content-vertical">
                  <div className="card-meta">
                    <div className="card-info">
                      <div className="card-tag">Development</div>
                    </div>
                    <div className="card-cta-wrap">
                      <div className="card-cta">
                        <CardCtaArrow />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h2 className="card-heading">Pygio</h2>
                    <div className="card-heading is-text">Transformative and intelligent IT services</div>
                  </div>
                  <div className="w-layout-grid thumb-3x-column">
                    <div className="card-thumb-static-wrap">
                      <div className="card-thumb">
                        <img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/66e2e525ff88cd2d1a4c79f8/68b9b1f29f0d533f44945e59_380%20(1).avif"
                          alt=""
                          sizes="100vw"
                          srcSet="https://cdn.prod.website-files.com/66e2e525ff88cd2d1a4c79f8/68b9b1f29f0d533f44945e59_380%20(1)-p-500.avif 500w, https://cdn.prod.website-files.com/66e2e525ff88cd2d1a4c79f8/68b9b1f29f0d533f44945e59_380%20(1)-p-800.avif 800w, https://cdn.prod.website-files.com/66e2e525ff88cd2d1a4c79f8/68b9b1f29f0d533f44945e59_380%20(1)-p-1080.avif 1080w, https://cdn.prod.website-files.com/66e2e525ff88cd2d1a4c79f8/68b9b1f29f0d533f44945e59_380%20(1)-p-1600.avif 1600w, https://cdn.prod.website-files.com/66e2e525ff88cd2d1a4c79f8/68b9b1f29f0d533f44945e59_380%20(1)-p-2000.avif 2000w, https://cdn.prod.website-files.com/66e2e525ff88cd2d1a4c79f8/68b9b1f29f0d533f44945e59_380%20(1).avif 3840w"
                          className="thumb-image"
                        />
                      </div>
                    </div>
                    <div className="card-thumb-static-wrap hide-portrait">
                      <div className="card-thumb">
                        <img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/66e2e525ff88cd2d1a4c79f8/68b9b414fa0d3194ddc016b2_1922%20(1).png"
                          alt=""
                          sizes="100vw"
                          srcSet="https://cdn.prod.website-files.com/66e2e525ff88cd2d1a4c79f8/68b9b414fa0d3194ddc016b2_1922%20(1)-p-500.png 500w, https://cdn.prod.website-files.com/66e2e525ff88cd2d1a4c79f8/68b9b414fa0d3194ddc016b2_1922%20(1)-p-800.png 800w, https://cdn.prod.website-files.com/66e2e525ff88cd2d1a4c79f8/68b9b414fa0d3194ddc016b2_1922%20(1)-p-1080.png 1080w, https://cdn.prod.website-files.com/66e2e525ff88cd2d1a4c79f8/68b9b414fa0d3194ddc016b2_1922%20(1)-p-1600.png 1600w, https://cdn.prod.website-files.com/66e2e525ff88cd2d1a4c79f8/68b9b414fa0d3194ddc016b2_1922%20(1)-p-2000.png 2000w, https://cdn.prod.website-files.com/66e2e525ff88cd2d1a4c79f8/68b9b414fa0d3194ddc016b2_1922%20(1).png 2880w"
                          className="thumb-image"
                        />
                      </div>
                    </div>
                    <div className="card-thumb-static-wrap hide-portrait">
                      <div className="card-thumb">
                        <img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/66e2e525ff88cd2d1a4c79f8/68b9b361a7b695b15a553c09_1922.png"
                          alt=""
                          sizes="100vw"
                          srcSet="https://cdn.prod.website-files.com/66e2e525ff88cd2d1a4c79f8/68b9b361a7b695b15a553c09_1922-p-500.png 500w, https://cdn.prod.website-files.com/66e2e525ff88cd2d1a4c79f8/68b9b361a7b695b15a553c09_1922-p-800.png 800w, https://cdn.prod.website-files.com/66e2e525ff88cd2d1a4c79f8/68b9b361a7b695b15a553c09_1922-p-1080.png 1080w, https://cdn.prod.website-files.com/66e2e525ff88cd2d1a4c79f8/68b9b361a7b695b15a553c09_1922-p-1600.png 1600w, https://cdn.prod.website-files.com/66e2e525ff88cd2d1a4c79f8/68b9b361a7b695b15a553c09_1922-p-2000.png 2000w, https://cdn.prod.website-files.com/66e2e525ff88cd2d1a4c79f8/68b9b361a7b695b15a553c09_1922-p-2600.png 2600w, https://cdn.prod.website-files.com/66e2e525ff88cd2d1a4c79f8/68b9b361a7b695b15a553c09_1922.png 2880w"
                          className="thumb-image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div role="listitem" className="w-dyn-item">
              <a href="https://tea.xyz/" target="_blank" rel="noreferrer" className="card w-inline-block">
                <div className="shine-wrap">
                  <div className="shine"></div>
                </div>
                <div className="card-content-vertical">
                  <div className="card-meta">
                    <div className="card-info">
                      <div className="card-tag">Development</div>
                    </div>
                    <div className="card-cta-wrap">
                      <div className="card-cta">
                        <CardCtaArrow />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h2 className="card-heading">Infraestructura y DevOps</h2>
                    <div className="card-heading is-text">
                      Experiencia en Linux Server, Docker, Kubernetes, Jenkins, GitHub Actions y observabilidad con
                      Prometheus/Grafana.
                    </div>
                  </div>
                  <div className="w-layout-grid thumb-3x-column">
                    <div className="card-thumb-static-wrap">
                      <div className="card-thumb">
                        <img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/66e2e525ff88cd2d1a4c79f8/66e2e525ff88cd2d1a4c7ab9_Desktop0.5x%20-%20Homepage.avif"
                          alt=""
                          sizes="100vw"
                          srcSet="https://cdn.prod.website-files.com/66e2e525ff88cd2d1a4c79f8/66e2e525ff88cd2d1a4c7ab9_Desktop0.5x%2520-%2520Homepage-p-500.avif 500w, https://cdn.prod.website-files.com/66e2e525ff88cd2d1a4c79f8/66e2e525ff88cd2d1a4c7ab9_Desktop0.5x%20-%20Homepage.avif 763w"
                          className="thumb-image"
                        />
                      </div>
                    </div>
                    <div className="card-thumb-static-wrap hide-portrait">
                      <div className="card-thumb">
                        <img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/66e2e525ff88cd2d1a4c79f8/66e2e525ff88cd2d1a4c7aba_Desktop0.5x%20-%20Rewards%20for%20OSS%20Contributions.avif"
                          alt=""
                          sizes="100vw"
                          srcSet="https://cdn.prod.website-files.com/66e2e525ff88cd2d1a4c79f8/66e2e525ff88cd2d1a4c7aba_Desktop0.5x%2520-%2520Rewards%2520for%2520OSS%2520Contributions-p-500.avif 500w, https://cdn.prod.website-files.com/66e2e525ff88cd2d1a4c79f8/66e2e525ff88cd2d1a4c7aba_Desktop0.5x%20-%20Rewards%20for%20OSS%20Contributions.avif 720w"
                          className="thumb-image"
                        />
                      </div>
                    </div>
                    <div className="card-thumb-static-wrap hide-portrait">
                      <div className="card-thumb">
                        <img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/66e2e525ff88cd2d1a4c79f8/66e2e525ff88cd2d1a4c7abb_%3D--.avif"
                          alt=""
                          sizes="100vw"
                          srcSet="https://cdn.prod.website-files.com/66e2e525ff88cd2d1a4c79f8/66e2e525ff88cd2d1a4c7abb_%253D---p-500.avif 500w, https://cdn.prod.website-files.com/66e2e525ff88cd2d1a4c79f8/66e2e525ff88cd2d1a4c7abb_%3D--.avif 734w"
                          className="thumb-image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="block-divider section-separator"></div>

      <div className="section-block">
        <div className="content-title-wrap">
          <div className="content-title-dot"></div>
          <h2 className="content-title">Especialidades</h2>
        </div>
        <div
          id="w-node-c9c4da76-01ab-03d8-eb75-aa92a01404fc-1a4c79d3"
          className="w-layout-hflex flex-block specialties-grid"
        >
          <div className="accordion-list specialties-column">
            <FaqAccordionItem
              variant="specialties"
              open={openSpecialty === SPECIALTY_IDS[0]}
              onToggle={() => toggleSpecialty(SPECIALTY_IDS[0])}
              title={<strong>Linux Server Administration</strong>}
            >
              Administracion de servidores Linux para produccion: hardening inicial, gestion de usuarios/permisos,
              monitoreo de recursos, troubleshooting y automatizacion de tareas operativas.
            </FaqAccordionItem>
            <FaqAccordionItem
              variant="specialties"
              open={openSpecialty === SPECIALTY_IDS[1]}
              onToggle={() => toggleSpecialty(SPECIALTY_IDS[1])}
              title={<strong>Docker + Contenedores</strong>}
            >
              From subtle micro-interactions to complex &quot;WOW&quot; animations. I transform ideas into delightful
              experiences.
            </FaqAccordionItem>
            <FaqAccordionItem
              variant="specialties"
              open={openSpecialty === SPECIALTY_IDS[2]}
              onToggle={() => toggleSpecialty(SPECIALTY_IDS[2])}
              title={<strong>Kubernetes Operations</strong>}
            >
              Operacion de clusters Kubernetes: deployments, ingress, config/secrets, autoscaling, observabilidad y
              resolucion de incidentes para mantener alta disponibilidad.
            </FaqAccordionItem>
            <FaqAccordionItem
              variant="specialties"
              open={openSpecialty === SPECIALTY_IDS[3]}
              onToggle={() => toggleSpecialty(SPECIALTY_IDS[3])}
              title={<strong> CI/CD Pipelines</strong>}
            >
              Diseno de pipelines CI/CD con validaciones automáticas, test, build, seguridad y despliegues
              progresivos para entregar cambios con velocidad y control.
            </FaqAccordionItem>
          </div>
          <div className="accordion-list specialties-column">
            <FaqAccordionItem
              variant="specialties"
              open={openSpecialty === SPECIALTY_IDS[4]}
              onToggle={() => toggleSpecialty(SPECIALTY_IDS[4])}
              title={<strong>Observabilidad</strong>}
            >
              Implementacion de metricas, logs y alertas con Prometheus, Grafana y herramientas de tracing para
              detectar problemas antes de que impacten al negocio.
            </FaqAccordionItem>
            <FaqAccordionItem
              variant="specialties"
              open={openSpecialty === SPECIALTY_IDS[5]}
              onToggle={() => toggleSpecialty(SPECIALTY_IDS[5])}
              title={<strong>Seguridad y Hardening</strong>}
            >
              Endurecimiento de infraestructura y pipelines: gestion de secretos, politicas de acceso, escaneo de
              vulnerabilidades y buenas practicas de seguridad desde el desarrollo.
            </FaqAccordionItem>
            <FaqAccordionItem
              variant="specialties"
              open={openSpecialty === SPECIALTY_IDS[6]}
              onToggle={() => toggleSpecialty(SPECIALTY_IDS[6])}
              title={<strong>Automatizacion de Infraestructura</strong>}
            >
              Provisioning con IaC (Terraform/Ansible), estandarizacion de entornos y automatizacion de operaciones
              repetitivas para reducir errores manuales.
            </FaqAccordionItem>
            <FaqAccordionItem
              variant="specialties"
              open={openSpecialty === SPECIALTY_IDS[7]}
              onToggle={() => toggleSpecialty(SPECIALTY_IDS[7])}
              title={<strong>Soporte y Mejora Continua</strong>}
            >
              Acompanamiento post-lanzamiento con mantenimiento evolutivo, optimizacion de costos/rendimiento y mejora
              continua basada en metricas e incidentes reales.
            </FaqAccordionItem>
          </div>
        </div>
      </div>

      <div className="block-divider"></div>

      <div className="section-block">
        <div className="content-title-wrap">
          <div className="content-title-dot"></div>
          <h2 className="content-title">Tools</h2>
        </div>
        <div className="w-layout-grid _2x-column">
          <a href="" target="_blank" rel="noreferrer" className="card w-inline-block">
            <div className="shine-wrap">
              <div className="shine"></div>
            </div>
            <div className="card-content-vertical">
              <div className="tools-head-long">
                <div className="app-wrap">
                  <img src="/assets/icons/webflow.png" loading="lazy" alt="" className="sidebar-header-avatar" />
                  <div className="app-outline"></div>
                </div>
                <div className="card-cta-wrap">
                  <div className="card-badge is-orange">Favorite</div>
                  <div className="card-cta">
                    <CardCtaArrow />
                  </div>
                </div>
              </div>
              <div>
                <h2 className="card-heading">Webflow</h2>
                <div>A user-friendly and intuitive website builder that makes creating pages easy even for...</div>
              </div>
            </div>
          </a>
          <div className="_1x-column">
            <a href="https://www.relume.io/" target="_blank" rel="noreferrer" className="card w-inline-block">
              <div className="shine-wrap">
                <div className="shine"></div>
              </div>
              <div className="card-content-vertical">
                <div className="tools">
                  <div className="tools-head">
                    <div className="tools-icon">
                      <img src="/assets/icons/relume.png" loading="lazy" alt="" className="image-background" />
                      <div className="app-outline"></div>
                    </div>
                    <div>
                      <h2 className="card-heading">Relume</h2>
                    </div>
                  </div>
                  <div className="card-text-2-lines">
                    Site Builder utilizes a built-in design system and component library of 1000+ components made for
                    Figma &amp; Webflow.
                  </div>
                </div>
                <div className="card-meta">
                  <div className="card-info">
                    <div className="card-tag">Design</div>
                    <div className="card-tag">Prototype</div>
                    <div className="card-tag">Feedback</div>
                  </div>
                  <div className="card-cta">
                    <CardCtaArrow />
                  </div>
                </div>
              </div>
            </a>
            <a href="https://finsweet.com/client-first" target="_blank" rel="noreferrer" className="card w-inline-block">
              <div className="shine-wrap">
                <div className="shine"></div>
              </div>
              <div className="card-content-vertical">
                <div className="tools">
                  <div className="tools-head">
                    <div className="tools-icon">
                      <img src="/assets/icons/client-first.jpg" loading="lazy" alt="" className="image-background" />
                      <div className="app-outline"></div>
                    </div>
                    <div>
                      <h2 className="card-heading">Client-First </h2>
                    </div>
                  </div>
                  <div className="card-text-2-lines">
                    Client-First is a set of guidelines and strategies to help us build Webflow websites. Built and
                    managed by Finsweet.
                  </div>
                </div>
                <div className="card-meta">
                  <div className="card-info">
                    <div className="card-tag">No Code</div>
                    <div className="card-tag">Collaboration</div>
                    <div className="card-tag">Feedback</div>
                  </div>
                  <div className="card-cta">
                    <CardCtaArrow />
                  </div>
                </div>
              </div>
            </a>
          </div>
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
    </>
  )
}
