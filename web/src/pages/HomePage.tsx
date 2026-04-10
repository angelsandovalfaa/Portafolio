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

      <div className="block-divider"></div>

      <div className="section-block">
        <div className="content-title-wrap">
          <div className="content-title-dot"></div>
          <h2 className="content-title">Especialidades</h2>
        </div>
        <div
          id="w-node-c9c4da76-01ab-03d8-eb75-aa92a01404fc-1a4c79d3"
          className="w-layout-hflex flex-block"
        >
          <div className="accordion-list">
            <FaqAccordionItem
              open={openSpecialty === SPECIALTY_IDS[0]}
              onToggle={() => toggleSpecialty(SPECIALTY_IDS[0])}
              title={<strong>Linux Server Administration</strong>}
            >
              With Webflow, I can create a visually stunning website without the need for extensive coding. This not
              only ensures a beautiful design but also gives us the flexibility to make changes quickly and efficiently.
            </FaqAccordionItem>
            <FaqAccordionItem
              open={openSpecialty === SPECIALTY_IDS[1]}
              onToggle={() => toggleSpecialty(SPECIALTY_IDS[1])}
              title={<strong>Docker + Contenedores</strong>}
            >
              From subtle micro-interactions to complex &quot;WOW&quot; animations. I transform ideas into delightful
              experiences.
            </FaqAccordionItem>
            <FaqAccordionItem
              open={openSpecialty === SPECIALTY_IDS[2]}
              onToggle={() => toggleSpecialty(SPECIALTY_IDS[2])}
              title={<strong>Kubernetes Operations</strong>}
            >
              Is your marketing team too busy to learn Webflow? By building your website based on reusable components,
              I can make creating and deploying new landing pages as easy as clicking a button.
            </FaqAccordionItem>
            <FaqAccordionItem
              open={openSpecialty === SPECIALTY_IDS[3]}
              onToggle={() => toggleSpecialty(SPECIALTY_IDS[3])}
              title={<strong> CI/CD Pipelines</strong>}
            >
              Webflow provides tools to optimize your website for search engines, helping to improve your online
              visibility and reach your target audience more effectively.
            </FaqAccordionItem>
          </div>
          <div className="accordion-list">
            <FaqAccordionItem
              open={openSpecialty === SPECIALTY_IDS[4]}
              onToggle={() => toggleSpecialty(SPECIALTY_IDS[4])}
              title={<strong>Observabilidad</strong>}
            >
              No need to worry about finding a separate hosting solution. Webflow provides hosting services as part of
              the package, ensuring your website is secure, reliable, and always up to date.
              <strong>
                <br />
              </strong>
            </FaqAccordionItem>
            <FaqAccordionItem
              open={openSpecialty === SPECIALTY_IDS[5]}
              onToggle={() => toggleSpecialty(SPECIALTY_IDS[5])}
              title={<strong>Seguridad y Hardening</strong>}
            >
              If you plan to sell products online, Webflow&apos;s e-commerce capabilities are robust and user-friendly.
              We can set up a seamless online store experience for your customers.
            </FaqAccordionItem>
            <FaqAccordionItem
              open={openSpecialty === SPECIALTY_IDS[6]}
              onToggle={() => toggleSpecialty(SPECIALTY_IDS[6])}
              title={<strong>Automatizacion de Infraestructura</strong>}
            >
              All my builds put extra emphasis on performance and efficiency.
            </FaqAccordionItem>
            <FaqAccordionItem
              open={openSpecialty === SPECIALTY_IDS[7]}
              onToggle={() => toggleSpecialty(SPECIALTY_IDS[7])}
              title={<strong>Soporte y Mejora Continua</strong>}
            >
              Webflow has a vibrant community, and I&apos;ll have access to extensive documentation and tutorials. This
              ensures that I can provide ongoing support and address any questions or concerns that may arise.
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
          <a href="https://www.webflow.com" target="_blank" rel="noreferrer" className="card w-inline-block">
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
          <h2 className="content-title">Logros</h2>
        </div>
        <div className="w-layout-grid _2x-column">
          <div className="testimonial-card">
            <div className="testimonial-quote">
              <div className="testimonial-quotation-mark">“</div>
              <div>
                Fast efficient communication with a Serhii that was willed to communicate even after our engagement.
                THANK YOU!
              </div>
            </div>
            <div className="testimonial-footer">
              <div>Simon Bernhar, CEO</div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-quote">
              <div className="testimonial-quotation-mark">“</div>
              <div>He has good taste for minimal design, he did a very good job. I would recommend him.</div>
            </div>
            <div className="testimonial-footer">
              <div>Heloise I., Manager</div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-quote">
              <div className="testimonial-quotation-mark">“</div>
              <div>
                Great Freelancer. Delivered quickly and knew exactly what he had to do! Thanks!
                <br />
              </div>
            </div>
            <div className="testimonial-footer">
              <div>Michael, Streete Foundation</div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-quote">
              <div className="testimonial-quotation-mark">“</div>
              <div>
                Great work - delivered on time and well executed. Thanks.
                <br />
              </div>
            </div>
            <div className="testimonial-footer">
              <div>Prianka D., Founder</div>
            </div>
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
