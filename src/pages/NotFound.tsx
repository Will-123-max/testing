import { Link } from 'react-router-dom'
import { Compass, ArrowRight } from 'lucide-react'

const suggestions = [
  { to: '/freshers', label: 'Fresher checklist' },
  { to: '/campuses', label: 'Campuses & faculties' },
  { to: '/academics', label: 'CGPA calculator' },
  { to: '/campus-life', label: 'Budget planner' },
  { to: '/help', label: 'Help & FAQ' },
]

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-24 text-center">
      <span className="inline-grid place-items-center h-16 w-16 rounded-2xl bg-ink text-gold">
        <Compass size={30} />
      </span>
      <p className="mt-8 font-display text-[5rem] leading-none font-semibold text-clay">404</p>
      <h1 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
        This page is not on any of our four campuses.
      </h1>
      <p className="mt-4 text-[17px] leading-relaxed text-ink-2/85">
        The link may be old, or the page may have moved. Try one of these instead — everything below definitely
        exists.
      </p>

      <div className="mt-9 flex flex-wrap justify-center gap-3">
        {suggestions.map((s) => (
          <Link
            key={s.to}
            to={s.to}
            className="rounded-full border-2 border-ink/25 px-5 py-3 text-[14.5px] font-semibold hover:border-ink hover:bg-ink hover:text-paper transition-colors"
          >
            {s.label}
          </Link>
        ))}
      </div>

      <div>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-paper font-semibold text-[15px] hover:bg-moss transition-colors"
        >
          Go back home <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  )
}
