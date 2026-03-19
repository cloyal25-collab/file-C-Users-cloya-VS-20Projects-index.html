import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { to: '/',            label: 'Home' },
  { to: '/leaderboard', label: 'Leaderboard' },
  { to: '/results',     label: 'Results' },
  { to: '/calendar',    label: 'Calendar' },
  { to: '/teams',       label: 'Teams' },
  { to: '/news',        label: 'News' },
]

export default function Header() {
  const { pathname } = useLocation()

  return (
    <header className="bg-primary-800 border-b-4 border-gold-500 shadow-xl">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-gold-500 rounded flex items-center justify-center shadow-md group-hover:bg-gold-400 transition">
              <span className="text-primary-900 font-black text-base tracking-tight">NJ</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-white font-black text-lg tracking-wide">MileSplit</span>
              <span className="block text-gold-400 text-[10px] font-semibold tracking-[0.2em] uppercase -mt-0.5">
                North Jersey
              </span>
            </div>
          </Link>

          {/* Nav links */}
          <ul className="flex items-center gap-1 text-sm font-semibold">
            {navLinks.map(({ to, label }) => {
              const active = pathname === to
              return (
                <li key={to}>
                  <Link
                    to={to}
                    className={`px-3 py-2 rounded transition-all ${
                      active
                        ? 'bg-gold-500 text-primary-900'
                        : 'text-primary-100 hover:text-white hover:bg-primary-700'
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </header>
  )
}
