import { NavLink } from 'react-router-dom'

const ITEMS = [
  { to: '/', label: 'Inicio' },
  { to: '/projects', label: 'Proyectos' },
  { to: '/tools', label: 'Stack' },
  { to: '/about', label: 'Sobre mí' },
  { to: '/contact', label: 'Contacto' },
]

export function Sidebar() {
  return (
    <aside className="hidden" aria-hidden="true">
      <nav aria-label="Sidebar">
        {ITEMS.map((item) => (
          <NavLink key={item.to} to={item.to}>
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
