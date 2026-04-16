import type { ReactNode } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { CardCtaArrow } from '../components/ui/CardCtaArrow'

const GALLERY_IMAGES = [
  'https://cdn.prod.website-files.com/65a10238f5a9f071f6eb2e18/65a10238f5a9f071f6eb2e9d_gallery-image-01.jpg',
  'https://cdn.prod.website-files.com/65a10238f5a9f071f6eb2e18/65a10238f5a9f071f6eb2e9e_gallery-image-02.jpg',
  'https://cdn.prod.website-files.com/65a10238f5a9f071f6eb2e18/65a10238f5a9f071f6eb2ea0_gallery-image-03.jpg',
  'https://cdn.prod.website-files.com/65a10238f5a9f071f6eb2e18/65a10238f5a9f071f6eb2e9f_gallery-image-04.jpg',
  'https://cdn.prod.website-files.com/65a10238f5a9f071f6eb2e18/65a10238f5a9f071f6eb2ea1_gallery-image-05.jpg',
]

const CASES: Record<string, { title: string; lead: string; intro: ReactNode; liveUrl: string }> = {
  pygio: {
    title: 'Pygio',
    lead: 'Transformative and intelligent IT services',
    intro: 'Transformative and intelligent IT services',
    liveUrl: 'https://www.pygio.com/',
  },
  orbiter: {
    title: 'Orbiter',
    lead: 'Manage and Grow relationships at scale',
    intro: (
      <>
        Manage and Grow
        <br />
        relationships at scale
      </>
    ),
    liveUrl: 'https://www.orbiter.io/',
  },
}

export function ProjectCaseStudyPage() {
  const { slug } = useParams<{ slug: string }>()
  const data = slug ? CASES[slug] : undefined

  if (!slug || !data) {
    return <Navigate to="/projects" replace />
  }

  return (
    <>
      <div className="container-small align-left">
        <div className="hero-block">
          <h1 className="hero-heading">{data.title}</h1>
          <div className="text-lead">{data.lead}</div>
        </div>
      </div>
      <div>
        <div className="breadcrumb">
          <Link to="/projects" className="breadcrumb-link w-inline-block">
            <div className="w-layout-grid breadcrumb-link-content">
              <div className="navbar-icon-wrap">
                <div className="navbar-active-icon w-embed">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.906 9c.382 0 .749.057 1.094.162V9a3 3 0 00-3-3h-3.879a.75.75 0 01-.53-.22L11.47 3.66A2.25 2.25 0 009.879 3H6a3 3 0 00-3 3v3.162A3.756 3.756 0 014.094 9h15.812zM4.094 10.5a2.25 2.25 0 00-2.227 2.568l.857 6A2.25 2.25 0 004.951 21H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-2.227-2.568H4.094z" />
                  </svg>
                </div>
                <div className="navbar-inactive-icon w-embed">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776"
                    />
                  </svg>
                </div>
              </div>
              <div>Proyectos</div>
            </div>
          </Link>
          <div className="breadcrumb-divider">
            <div className="icon-svg w-embed">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </div>
          <a href="#" className="breadcrumb-link w-inline-block" onClick={(e) => e.preventDefault()}>
            <div className="w-layout-grid breadcrumb-link-content">
              <div className="navbar-icon-wrap">
                <div className="navbar-active-icon w-embed">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M5.25 2.25a3 3 0 00-3 3v4.318a3 3 0 00.879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 005.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 00-2.122-.879H5.25zM6.375 7.5a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="navbar-inactive-icon w-embed">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                  </svg>
                </div>
              </div>
              <div>Development</div>
            </div>
          </a>
          <div className="breadcrumb-divider">
            <div className="icon-svg w-embed">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </div>
          <div className="breadcrumb-page-title">{data.title}</div>
        </div>
        <div className="content-block">
          <div>{data.intro}</div>
        </div>
        <div className="content-block">
          <div className="w-dyn-list">
            <div role="list" className="_1x-column w-dyn-items">
              {GALLERY_IMAGES.map((src) => (
                <div key={src} role="listitem" className="w-dyn-item w-dyn-repeater-item">
                  <div className="product-image-wrap">
                    <img loading="lazy" alt="" src={src} className="product-image" />
                    <div className="product-image-outline"></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="empty-state-wrap w-dyn-hide w-dyn-empty">
              <div className="empty-state">
                <div>No items found. Discover other</div>
                <a href="#" className="empty-state-link w-inline-block" onClick={(e) => e.preventDefault()}>
                  <div>posts</div>
                  <div className="empty-state-link-adjustment">
                    <div className="icon-svg w-embed">
                      <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" fill="currentcolor">
                        <g>
                          <path d="M0,0h24v24H0V0z" fill="none" />
                        </g>
                        <g>
                          <polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="content-block">
          <div className="w-layout-grid content-grid">
            <div className="content-title-wrap">
              <div className="content-title-dot"></div>
              <h2 className="content-title">
                Year
                <br />
              </h2>
            </div>
            <div>
              <div>2024</div>
            </div>
          </div>
        </div>
        <div>
          <div className="content-divider"></div>
          <div className="content-block">
            <div className="w-layout-grid content-grid">
              <div className="content-title-wrap">
                <div className="content-title-dot"></div>
                <h2 className="content-title">
                  Team
                  <br />
                </h2>
              </div>
              <div>
                <div className="w-dyn-list">
                  <div role="list" className="team-list w-dyn-items">
                    <div role="listitem" className="w-dyn-item">
                      <a href="#" className="team-link w-inline-block" onClick={(e) => e.preventDefault()}>
                        <img
                          src="https://cdn.prod.website-files.com/66e2e525ff88cd2d1a4c79f8/66e2e525ff88cd2d1a4c7aa5_avatar-01.avif"
                          loading="lazy"
                          alt=""
                          className="team-avatar"
                        />
                        <div>by</div>
                        <div className="team-name">Mable Marvin</div>
                        <div className="team-icon">
                          <div className="icon-svg w-embed">
                            <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" fill="currentcolor">
                              <g>
                                <path d="M0,0h24v24H0V0z" fill="none" />
                              </g>
                              <g>
                                <polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <a href="#" className="team-link w-inline-block" onClick={(e) => e.preventDefault()}>
                        <img
                          src="https://cdn.prod.website-files.com/66e2e525ff88cd2d1a4c79f8/66e2e525ff88cd2d1a4c7aa2_avatar-03.avif"
                          loading="lazy"
                          alt=""
                          className="team-avatar"
                        />
                        <div>by</div>
                        <div className="team-name">Gertrude Hand</div>
                        <div className="team-icon">
                          <div className="icon-svg w-embed">
                            <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" fill="currentcolor">
                              <g>
                                <path d="M0,0h24v24H0V0z" fill="none" />
                              </g>
                              <g>
                                <polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <a href="#" className="team-link w-inline-block" onClick={(e) => e.preventDefault()}>
                        <img
                          src="https://cdn.prod.website-files.com/66e2e525ff88cd2d1a4c79f8/66e2e525ff88cd2d1a4c7aab_avatar-05.avif"
                          loading="lazy"
                          alt=""
                          className="team-avatar"
                        />
                        <div>by</div>
                        <div className="team-name">Darrick Purdy</div>
                        <div className="team-icon">
                          <div className="icon-svg w-embed">
                            <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" fill="currentcolor">
                              <g>
                                <path d="M0,0h24v24H0V0z" fill="none" />
                              </g>
                              <g>
                                <polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="content-divider"></div>
          <div className="content-block">
            <div className="w-layout-grid content-grid">
              <div className="content-title-wrap">
                <div className="content-title-dot"></div>
                <h2 className="content-title">
                  Awards
                  <br />
                </h2>
              </div>
              <div>
                <div className="awards-rte w-richtext">
                  <p>
                    <a href="https://www.awwwards.com/" target="_blank" rel="noreferrer">
                      Awwwards Site of the Day
                    </a>
                  </p>
                  <p>
                    <a href="https://www.awwwards.com/" target="_blank" rel="noreferrer">
                      Awwwards Honorable Mention
                    </a>
                  </p>
                  <p>
                    <a href="https://www.awwwards.com/" target="_blank" rel="noreferrer">
                      Awwwards Developer Award
                    </a>
                  </p>
                  <p>
                    <a href="https://www.behance.com/" target="_blank" rel="noreferrer">
                      Best of Behance
                    </a>
                  </p>
                  <p>
                    <a href="https://www.cssdesignawards.com/" target="_blank" rel="noreferrer">
                      CSSDA Website of the Day
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-block">
          <div className="content-divider"></div>
          <div className="content-block">
            <div className="w-layout-grid content-grid">
              <div className="content-title-wrap">
                <div className="content-title-dot"></div>
                <h2 className="content-title">
                  Live Preview
                  <br />
                </h2>
              </div>
              <div>
                <a href={data.liveUrl} target="_blank" rel="noreferrer" className="button-rounded-small w-button">
                  Live Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block-divider"></div>
      <div className="section-block">
        <div className="content-title-wrap">
          <div className="content-title-dot"></div>
          <h2 className="content-title">Next Project</h2>
        </div>
        <a href="#" className="card w-inline-block" onClick={(e) => e.preventDefault()}>
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
              <h2 className="card-heading w-dyn-bind-empty"></h2>
              <div className="card-heading is-text w-dyn-bind-empty"></div>
            </div>
            <div className="w-layout-grid thumb-3x-column">
              <div className="card-thumb-static-wrap">
                <div className="card-thumb">
                  <img loading="lazy" src="" alt="" className="thumb-image w-dyn-bind-empty" />
                </div>
              </div>
              <div className="card-thumb-static-wrap hide-portrait">
                <div className="card-thumb">
                  <img loading="lazy" src="" alt="" className="thumb-image w-dyn-bind-empty" />
                </div>
              </div>
              <div className="card-thumb-static-wrap hide-portrait">
                <div className="card-thumb">
                  <img loading="lazy" src="" alt="" className="thumb-image w-dyn-bind-empty" />
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  )
}
