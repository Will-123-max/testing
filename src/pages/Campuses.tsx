import { useMemo, useState } from 'react'
import { Search, MapPin, ChevronDown, Building2 } from 'lucide-react'
import { Reveal, Eyebrow } from '../components/ui'
import { campuses, faculties } from '../data/guide'

const accent: Record<string, string> = {
  moss: 'bg-moss',
  clay: 'bg-clay',
  gold: 'bg-gold',
  sky: 'bg-sky',
}

export default function Campuses() {
  const [query, setQuery] = useState('')
  const [campusFilter, setCampusFilter] = useState('All')
  const [openFaculty, setOpenFaculty] = useState<string | null>(faculties[0].name)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return faculties
      .filter((f) => campusFilter === 'All' || f.campus === campusFilter)
      .map((f) => {
        if (!q) return f
        const matchFaculty = f.name.toLowerCase().includes(q)
        const depts = f.departments.filter((d) => d.toLowerCase().includes(q))
        if (matchFaculty) return f
        return depts.length ? { ...f, departments: depts } : null
      })
      .filter(Boolean) as typeof faculties
  }, [query, campusFilter])

  const totalDepts = filtered.reduce((n, f) => n + f.departments.length, 0)

  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <Reveal>
        <Eyebrow>Campuses & faculties</Eyebrow>
        <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[0.98] tracking-tight max-w-3xl">
          Four campuses. One <span className="italic text-moss">very</span> spread-out university.
        </h1>
        <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-ink-2/85">
          Before you rent a room, find out where your faculty actually holds lectures. A lodge that is cheap but two
          keke rides from your campus is not cheap.
        </p>
      </Reveal>

      {/* CAMPUS CARDS */}
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {campuses.map((c, i) => (
          <Reveal key={c.id} delay={i * 0.06}>
            <div className="h-full rounded-2xl border-2 border-ink bg-paper p-7 card-shadow-soft">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-clay">{c.tag}</p>
                  <h2 className="mt-1.5 font-display text-2xl font-semibold">{c.name}</h2>
                </div>
                <span className="grid place-items-center h-10 w-10 rounded-xl bg-ink text-gold shrink-0">
                  <Building2 size={19} />
                </span>
              </div>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-2/85">{c.blurb}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {c.hosts.map((h) => (
                  <span
                    key={h}
                    className="rounded-full border border-ink/20 bg-gold-soft/40 px-3 py-1 text-[12.5px] font-semibold"
                  >
                    {h}
                  </span>
                ))}
              </div>
              <p className="mt-5 flex items-center gap-2 text-[13px] text-ink-3">
                <MapPin size={14} /> {c.landmark}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* DIRECTORY */}
      <div className="mt-16">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold">Faculty & department directory</h2>
          <p className="mt-3 max-w-2xl text-[16px] text-ink-2/85">
            Search for a course — say “nursing”, “computer” or “economics” — to see the faculty and campus it sits
            under.
          </p>
        </Reveal>

        <div className="mt-7 flex flex-col lg:flex-row gap-4 lg:items-center">
          <label className="relative flex-1">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-3" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search a department or faculty…"
              className="w-full rounded-full border-2 border-ink/20 bg-paper py-3.5 pl-12 pr-4 text-[15px] outline-none focus:border-ink transition-colors"
            />
          </label>
          <div className="flex flex-wrap gap-2">
            {['All', ...campuses.map((c) => c.name)].map((c) => (
              <button
                key={c}
                onClick={() => setCampusFilter(c)}
                className={`rounded-full px-4 py-2.5 text-[13.5px] font-semibold border-2 transition-colors ${
                  campusFilter === c
                    ? 'bg-ink border-ink text-paper'
                    : 'border-ink/20 text-ink-2 hover:border-ink'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <p className="mt-4 text-[13px] text-ink-3">
          {filtered.length} faculties · {totalDepts} departments shown
        </p>

        <div className="mt-5 space-y-3">
          {filtered.map((f) => {
            const open = openFaculty === f.name || query.trim().length > 0
            return (
              <div key={f.name} className="rounded-2xl border-2 border-ink/20 bg-paper overflow-hidden">
                <button
                  onClick={() => setOpenFaculty(openFaculty === f.name ? null : f.name)}
                  className="w-full flex items-center gap-4 p-5 sm:p-6 text-left hover:bg-ink/5 transition-colors"
                >
                  <span className={`h-10 w-1.5 rounded-full ${accent[f.color]}`} />
                  <span className="flex-1">
                    <span className="block font-display text-[21px] font-semibold leading-snug">
                      Faculty of {f.name}
                    </span>
                    <span className="mt-1 block text-[13px] text-ink-3">
                      {f.campus} · {f.departments.length} departments
                    </span>
                  </span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-ink-3 transition-transform ${open ? 'rotate-180' : ''}`}
                  />
                </button>
                {open && (
                  <div className="px-5 sm:px-6 pb-6 -mt-1">
                    <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                      {f.departments.map((d) => (
                        <div
                          key={d}
                          className="rounded-xl border border-ink/12 bg-paper-2/60 px-4 py-3 text-[14px] font-medium"
                        >
                          {d}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}

          {filtered.length === 0 && (
            <div className="rounded-2xl border-2 border-dashed border-ink/25 p-10 text-center">
              <p className="font-display text-xl font-semibold">No match for “{query}”.</p>
              <p className="mt-2 text-[15px] text-ink-2/80">
                Try a shorter word, or clear the campus filter. New programmes are approved from time to time —
                confirm on ebsu.edu.ng.
              </p>
            </div>
          )}
        </div>

        <p className="mt-8 rounded-xl border border-ink/15 bg-gold-soft/40 px-5 py-4 text-[13.5px] leading-relaxed text-ink-2">
          <strong>Note:</strong> faculty structures and campus allocations change as the university grows. This
          directory is a student-maintained snapshot — always confirm your department’s current campus with your
          faculty officer or on the official EBSU website.
        </p>
      </div>
    </div>
  )
}
