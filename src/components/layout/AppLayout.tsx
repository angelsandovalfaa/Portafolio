import { useEffect } from 'react'
import type { ReactNode } from 'react'
import { Outlet, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

type NavItem = {
  to: string
  label: string
  icon: ReactNode
}

const NAV_ITEMS: NavItem[] = [
  {
    to: '/',
    label: 'Inicio',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-4 w-4">
        <path d="M4 12.5L12 5l8 7.5" />
        <path d="M6.5 10.5V19h11v-8.5" />
      </svg>
    ),
  },
  {
    to: '/projects',
    label: 'Proyectos',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-4 w-4">
        <rect x="3.5" y="5" width="17" height="14" rx="2" />
        <path d="M3.5 10h17" />
      </svg>
    ),
  },
  {
    to: '/tools',
    label: 'Stack',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-4 w-4">
        <path d="M12 4l8 4-8 4-8-4 8-4z" />
        <path d="M4 12l8 4 8-4" />
        <path d="M4 16l8 4 8-4" />
      </svg>
    ),
  },
  {
    to: '/about',
    label: 'Sobre mí',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-4 w-4">
        <circle cx="12" cy="8" r="3.2" />
        <path d="M5 19c1.4-3 4.1-4.5 7-4.5S17.6 16 19 19" />
      </svg>
    ),
  },
  {
    to: '/contact',
    label: 'Contacto',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-4 w-4">
        <rect x="3.5" y="6" width="17" height="12" rx="2" />
        <path d="M4.5 7l7.5 6 7.5-6" />
      </svg>
    ),
  },
]

function SideNav() {
  return (
    <aside className="hidden h-screen w-[292px] border-r border-white/10 bg-[linear-gradient(180deg,rgba(2,6,23,.97),rgba(2,6,23,.88))] p-4 md:fixed md:left-0 md:top-0 md:z-50 md:flex md:flex-col">
      <div className="relative flex h-full flex-col rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,.62),rgba(2,6,23,.5))] p-4 shadow-[0_20px_60px_rgba(2,6,23,.55)] backdrop-blur-xl">
        <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] [background:radial-gradient(420px_180px_at_10%_-20%,rgba(34,211,238,.12),transparent_60%),radial-gradient(380px_180px_at_90%_-30%,rgba(129,140,248,.12),transparent_65%)]" />

        <NavLink to="/" className="relative flex items-center gap-3 px-1 py-1" aria-label="Ir al inicio">
          <img
            src="/assets/2026-04-06_21-41.avif"
            alt="Foto de Ángel Eduardo Sandoval"
            className="h-16 w-16 rounded-full border border-white/20 object-cover"
          />
          <div className="min-w-0">
            <p className="truncate font-title text-sm font-semibold tracking-wide text-white">Ángel Sandoval</p>
            <p className="mt-0.5 truncate text-xs text-slate-400">DevOps Engineer</p>
          </div>
        </NavLink>

        <div className="relative mt-6 mb-2 px-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
          Menú
        </div>

        <nav className="relative space-y-2" aria-label="Navegación principal">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
                  isActive
                    ? 'border border-cyan-300/30 bg-cyan-300/10 text-white shadow-[0_8px_22px_rgba(6,182,212,.18)]'
                    : 'border border-transparent text-slate-300 hover:border-white/10 hover:bg-white/[0.06] hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive ? (
                    <motion.span
                      layoutId="sidebar-active-pill"
                      className="pointer-events-none absolute inset-0 rounded-xl border border-cyan-300/20 bg-cyan-300/10"
                      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                    />
                  ) : null}
                  <span className="relative z-10 grid h-7 w-7 place-items-center rounded-lg border border-white/10 bg-slate-950/60 text-slate-300 transition group-hover:text-white">
                    {item.icon}
                  </span>
                  <span className="relative z-10 font-medium">{item.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="relative mt-auto space-y-3 border-t border-white/10 px-1 pt-4">
          <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(52,211,153,.85)]" />
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-200">OpenToWork</span>
            </div>
            <span className="text-[11px] text-slate-400">Activo</span>
          </div>

          <a
            href="/assets/CV.DevOps-Angel-Sandoval.pdf"
            target="_blank"
            rel="noreferrer"
            className="group flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-300/35 bg-cyan-300/[0.08] px-4 py-2.5 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/[0.15]"
            aria-label="Abrir CV en PDF"
          >
            Ver CV
            <span className="transition group-hover:translate-x-0.5">↗</span>
          </a>
        </div>
      </div>
    </aside>
  )
}

function MobileNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[color:var(--surface-glass)] px-4 py-3 backdrop-blur-xl md:hidden">
      <div className="mb-3 flex items-center justify-between">
        <NavLink
          to="/"
          className="inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-2.5 py-1.5"
          aria-label="Ir al inicio"
        >
          <img
            src="/assets/2026-04-06_21-41.avif"
            alt="Foto de Ángel Sandoval"
            className="h-9 w-9 rounded-full object-cover"
          />
          <div className="leading-tight">
            <p className="font-title text-sm font-semibold text-white">Ángel Sandoval</p>
            <p className="text-xs text-[var(--text-muted)]">DevOps Engineer</p>
          </div>
        </NavLink>
        <a
          href="/assets/CV.DevOps-Angel-Sandoval.pdf"
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border border-white/15 bg-white/8 px-3 py-1.5 text-xs font-medium text-white"
          aria-label="Abrir CV en PDF"
        >
          CV
        </a>
      </div>
      <nav className="flex gap-2 overflow-x-auto pb-1" aria-label="Navegación móvil">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `group relative shrink-0 rounded-xl border px-3 py-1.5 text-sm transition ${
                isActive
                  ? 'border-cyan-300/40 bg-cyan-300/15 text-white'
                  : 'border-white/10 bg-white/6 text-slate-200'
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive ? (
                  <motion.span
                    layoutId="mobile-active-pill"
                    className="pointer-events-none absolute inset-0 rounded-xl border border-cyan-300/30 bg-cyan-300/12"
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  />
                ) : null}
                <span className="relative z-10">{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>
      <div className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-emerald-300/35 bg-emerald-300/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-emerald-100">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
        OpenToWork
      </div>
    </header>
  )
}

export function AppLayout() {
  const location = useLocation()
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname])

  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="aurora aurora-one" />
        <div className="aurora aurora-two" />
        <div className="aurora-grid" />
      </div>

      <SideNav />

      <div className="min-w-0 md:pl-[292px]">
        <MobileNav />

        <main className="mx-auto w-full max-w-6xl px-4 pb-20 pt-8 md:px-8 md:pt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
              animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>

        <footer className="border-t border-white/10 pb-10 pt-6">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 text-sm text-[var(--text-muted)] md:flex-row md:items-center md:justify-between md:px-8">
            <p>© 2026 Ángel Eduardo Sandoval</p>
            <p>Infraestructura, cloud y automatización.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
