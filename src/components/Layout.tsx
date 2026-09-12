import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { Menu, X, GraduationCap, ArrowUpRight } from 'lucide-react'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/freshers', label: 'Fresher Kit' },
  { to: '/campuses', label: 'Campuses' },
  { to: '/academics', label: 'Academics' },
  { to: '/campus-life', label: 'Campus Life' },
  { to: '/help', label: 'Help & FAQ' },
]

export default function Layout() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-ink text-paper/90 text-[12px] tracking-wide">
        <div className="mx-auto max-w-6xl px-5 py-2 flex items-center justify-between gap-4">
          <p className="truncate">
            <span className="text-gold font-bold">Heads up ·</span> Independent student guide. Always confirm dates
            &amp; fees on the official portal.
          </p>
          <a
            href="https://ebsu.edu.ng"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-1 shrink-0 hover:text-gold transition-colors"
          >
            ebsu.edu.ng <ArrowUpRight size={13} />
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-ink/12 bg-paper/85 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-5 h-16 flex items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-2.5 group">
            <span className="grid place-items-center h-9 w-9 rounded-lg bg-ink text-gold shadow-sm">
              <GraduationCap size={19} />
            </span>
            <span className="leading-none">
              <span className="block font-display text-[19px] font-semibold tracking-tight text-ink group-hover:text-moss transition-colors">
                EBSU Students’ Guide
              </span>
              <span className="block text-[10px] uppercase tracking-[0.22em] text-ink-3 mt-1">
                Abakaliki · unofficial
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === '/'}
                className={({ isActive }) =>
                  `px-3 py-2 text-[14px] font-semibold rounded-full transition-colors ${
                    isActive ? 'bg-ink text-paper' : 'text-ink-2 hover:bg-ink/10'
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="lg:hidden grid place-items-center h-10 w-10 rounded-lg border border-ink/20 text-ink"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden border-t border-ink/12 bg-paper">
            <nav className="mx-auto max-w-6xl px-5 py-3 grid gap-1">
              {nav.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  end={n.to === '/'}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-lg font-semibold text-[15px] ${
                      isActive ? 'bg-ink text-paper' : 'text-ink-2 hover:bg-ink/10'
                    }`
                  }
                >
                  {n.label}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="mt-24 bg-ink text-paper/80">
        <div className="mx-auto max-w-6xl px-5 py-14 grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid place-items-center h-9 w-9 rounded-lg bg-gold text-ink">
                <GraduationCap size={19} />
              </span>
              <span className="font-display text-xl font-semibold text-paper">EBSU Students’ Guide</span>
            </div>
            <p className="mt-4 text-[15px] leading-relaxed max-w-sm">
              A plain-language orientation guide for students of Ebonyi State University, Abakaliki — written the
              way a helpful senior colleague would explain it.
            </p>
          </div>

          <div>
            <h4 className="text-gold text-[11px] uppercase tracking-[0.22em] font-bold">Guide</h4>
            <ul className="mt-4 space-y-2 text-[15px]">
              {nav.slice(1).map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="hover:text-gold transition-colors">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gold text-[11px] uppercase tracking-[0.22em] font-bold">Official</h4>
            <ul className="mt-4 space-y-2 text-[15px]">
              <li>
                <a href="https://ebsu.edu.ng" target="_blank" rel="noreferrer" className="hover:text-gold">
                  EBSU website
                </a>
              </li>
              <li>
                <a href="https://portal.jamb.gov.ng" target="_blank" rel="noreferrer" className="hover:text-gold">
                  JAMB CAPS
                </a>
              </li>
              <li>
                <a href="https://portal.nysc.org.ng" target="_blank" rel="noreferrer" className="hover:text-gold">
                  NYSC portal
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-paper/15">
          <div className="mx-auto max-w-6xl px-5 py-5 flex flex-col sm:flex-row gap-2 justify-between text-[12.5px] text-paper/60">
            <p>Not affiliated with, or endorsed by, Ebonyi State University.</p>
            <p>Built by students, for students · Abakaliki</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
