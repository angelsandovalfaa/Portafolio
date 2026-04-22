import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'

export function Sidebar() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [pendingPath, setPendingPath] = useState<string | null>(null)
  const navTimerRef = useRef<number | null>(null)
  const projectsActive = pathname === '/projects' || pathname.startsWith('/project/')
  const contactHeaderCurrent = pathname === '/contact'

  useEffect(() => {
    setPendingPath(null)
  }, [pathname])

  useEffect(() => {
    return () => {
      if (navTimerRef.current !== null) {
        window.clearTimeout(navTimerRef.current)
      }
    }
  }, [])

  const navigateWithTransition = (event: React.MouseEvent<HTMLAnchorElement>, to: string) => {
    if (to === pathname) return

    event.preventDefault()
    setPendingPath(to)

    if (navTimerRef.current !== null) {
      window.clearTimeout(navTimerRef.current)
    }

    navTimerRef.current = window.setTimeout(() => {
      navigate(to)
    }, 180)
  }

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="sidebar-header">
          <Link
            to="/contact"
            className={`sidebar-header-wrap w-inline-block${contactHeaderCurrent ? ' w--current' : ''}`}
          >
            <div className="sidebar-header-avatar-wrap">
              <img
                src="/assets/2026-04-06_21-41.avif"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                width={512}
                height={510}
                alt=""
                className="sidebar-header-avatar"
              />
              <div className="sidebar-header-avatar-outline"></div>
            </div>
            <div className="sidebar-header-info">
              <div className="sidebar-header-name">Ángel Eduardo Sandoval</div>
              <div className="sidebar-header-title">
                <div>DevOps Engineer</div>
              </div>
            </div>
          </Link>
        </div>
        <div className="sidebar-navbar">
          <div data-w-id="8d494ae3-3d14-0190-6722-7f8a9b412173" className="navbar-list">
            <NavLink
              to="/"
              end
              onClick={(event) => navigateWithTransition(event, '/')}
              className={({ isActive }) => `navbar-link w-inline-block${isActive ? ' w--current' : ''}`}
            >
              {({ isActive }) => (
                <>
                  {(isActive || pendingPath === '/') && (
                    <div style={{ opacity: 1 }} className="navbar-link-active-bg"></div>
                  )}
                  <div className="w-layout-grid navbar-link-content">
                    <div className="navbar-icon-wrap">
                      <div className="navbar-active-icon w-embed">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M2.25 6a3 3 0 013-3h13.5a3 3 0 013 3v12a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6zm3.97.97a.75.75 0 011.06 0l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06zm4.28 4.28a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"
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
                            d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>Inicio</div>
                  </div>
                </>
              )}
            </NavLink>
            <div className="navbar-list-divider"></div>

            <Link
              to="/projects"
              onClick={(event) => navigateWithTransition(event, '/projects')}
              className={`navbar-link w-inline-block${projectsActive ? ' w--current' : ''}`}
            >
              {(projectsActive || pendingPath === '/projects') && (
                <div style={{ opacity: 1 }} className="navbar-link-active-bg"></div>
              )}
              <div className="w-layout-grid navbar-link-content">
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
            <div className="navbar-list-divider"></div>

            <NavLink
              to="/tools"
              onClick={(event) => navigateWithTransition(event, '/tools')}
              className={({ isActive }) => `navbar-link w-inline-block${isActive ? ' w--current' : ''}`}
            >
              {({ isActive }) => (
                <>
                  {(isActive || pendingPath === '/tools') && (
                    <div style={{ opacity: 1 }} className="navbar-link-active-bg"></div>
                  )}
                  <div className="w-layout-grid navbar-link-content">
                    <div className="navbar-icon-wrap">
                      <div className="navbar-active-icon w-embed">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M11.644 1.59a.75.75 0 01.712 0l9.75 5.25a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.712 0l-9.75-5.25a.75.75 0 010-1.32l9.75-5.25z" />
                          <path d="M3.265 10.602l7.668 4.129a2.25 2.25 0 002.134 0l7.668-4.13 1.37.739a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.71 0l-9.75-5.25a.75.75 0 010-1.32l1.37-.738z" />
                          <path d="M10.933 19.231l-7.668-4.13-1.37.739a.75.75 0 000 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 000-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 01-2.134-.001z" />
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
                            d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>Stack</div>
                  </div>
                </>
              )}
            </NavLink>
            <div className="navbar-list-divider"></div>

            <NavLink
              to="/about"
              onClick={(event) => navigateWithTransition(event, '/about')}
              className={({ isActive }) => `navbar-link w-inline-block${isActive ? ' w--current' : ''}`}
            >
              {({ isActive }) => (
                <>
                  {(isActive || pendingPath === '/about') && (
                    <div style={{ opacity: 1 }} className="navbar-link-active-bg"></div>
                  )}
                  <div className="w-layout-grid navbar-link-content">
                    <div className="navbar-icon-wrap">
                      <div className="navbar-active-icon w-embed">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
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
                            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>Sobre mí</div>
                  </div>
                </>
              )}
            </NavLink>
            <div className="navbar-list-divider"></div>

            <NavLink
              to="/contact"
              onClick={(event) => navigateWithTransition(event, '/contact')}
              className={({ isActive }) => `navbar-link w-inline-block${isActive ? ' w--current' : ''}`}
            >
              {({ isActive }) => (
                <>
                  {(isActive || pendingPath === '/contact') && (
                    <div style={{ opacity: 1 }} className="navbar-link-active-bg"></div>
                  )}
                  <div className="w-layout-grid navbar-link-content">
                    <div className="navbar-icon-wrap">
                      <div className="navbar-active-icon w-embed">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19.5 22.5a3 3 0 003-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 01-.712 1.321l-5.683-3.06a1.5 1.5 0 00-1.422 0l-5.683 3.06a.75.75 0 01-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 003 3h15z" />
                          <path d="M1.5 9.589v-.745a3 3 0 011.578-2.641l7.5-4.039a3 3 0 012.844 0l7.5 4.039A3 3 0 0122.5 8.844v.745l-8.426 4.926-.652-.35a3 3 0 00-2.844 0l-.652.35L1.5 9.59z" />
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
                            d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>Contacto</div>
                  </div>
                </>
              )}
            </NavLink>
          </div>
        </div>
        <div className="sidebar-controls">
          <div className="sidebar-controls-wrap">
            <div className="availability-wrap">
              <div className="availability-dot"></div>
              <div className="caption">OpenToWork</div>
            </div>
            <Link to="/contact#contact" className="button w-button">
              Hola Ángel
            </Link>
          </div>
        </div>
      </div>
      <div className="sidebar-bg-tablet"></div>
      <div className="sidebar-navbar-tablet">
        <NavLink
          to="/"
          end
          className={({ isActive }) => `sidebar-tablet-brand w-inline-block${isActive ? ' w--current' : ''}`}
        >
          <div className="sidebar-tablet-avatar-wrap">
            <img
              src="/assets/2026-04-06_21-41.avif"
              loading="lazy"
              decoding="async"
              width={512}
              height={510}
              alt=""
              className="sidebar-header-avatar"
            />
            <div className="sidebar-header-avatar-outline"></div>
          </div>
          <div className="sidebar-tablet-avatar-info">
            <div className="sidebar-tablet-avatar-name">Ángel Eduardo Sandoval</div>
            <div className="sidebar-tablet-avatar-title">
              <div>DevOps Engineer</div>
            </div>
          </div>
        </NavLink>
        <a href="#" className="sidebar-tablet-menu w-inline-block">
          <div className="menu-burger w-embed">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            </svg>
          </div>
          <div className="menu-close w-embed">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </a>
      </div>
    </div>
  )
}
