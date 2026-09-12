import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Check, RotateCcw, FileText, AlertTriangle, Backpack, ArrowRight } from 'lucide-react'
import { Reveal, Eyebrow } from '../components/ui'
import { fresherSteps } from '../data/guide'

const STORAGE_KEY = 'ebsu-guide-checklist-v1'

const documents = [
  'JAMB admission letter (original + 4 copies)',
  'JAMB result / UTME slip',
  'O’Level result(s) — WAEC / NECO scratch card ready',
  'Birth certificate or declaration of age',
  'Certificate of origin / LGA identification',
  'Acceptance fee and school fees receipts',
  '8–10 passport photographs, white background',
  'A brown envelope and a clear document folder',
]

const packing = [
  { group: 'Room', items: ['Mattress or foam', 'Bedsheet, pillow, wrapper', 'Bucket & bowl', 'Padlock (a strong one)', 'Rechargeable fan or lamp'] },
  { group: 'Study', items: ['Laptop or a decent phone', 'Power bank', 'Notebooks & biros', 'Flash drive for printing', 'Calculator (non-programmable for exams)'] },
  { group: 'Body', items: ['Provisions for week one', 'Basic drugs & malaria kit', 'Detergent and toiletries', 'Umbrella / raincoat', 'Modest outfit for matriculation'] },
]

export default function Freshers() {
  const [done, setDone] = useState<Record<string, boolean>>({})

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) setDone(JSON.parse(raw))
    } catch {
      /* ignore */
    }
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(done))
    } catch {
      /* ignore */
    }
  }, [done])

  const completed = useMemo(() => fresherSteps.filter((s) => done[s.id]).length, [done])
  const pct = Math.round((completed / fresherSteps.length) * 100)

  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <Reveal>
        <Eyebrow>Fresher kit</Eyebrow>
        <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[0.98] tracking-tight max-w-3xl">
          From admission letter to <span className="italic text-clay">matric number</span>, in ten steps.
        </h1>
        <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-ink-2/85">
          Tick each step as you complete it — your progress is saved on this device, so you can close the page and
          come back. Do them roughly in order; skipping one usually blocks the next.
        </p>
      </Reveal>

      {/* PROGRESS */}
      <Reveal delay={0.08}>
        <div className="mt-10 rounded-2xl border-2 border-ink bg-ink text-paper p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-6">
          <div className="relative h-24 w-24 shrink-0">
            <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
              <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(247,241,227,0.2)" strokeWidth="10" />
              <circle
                cx="50"
                cy="50"
                r="42"
                fill="none"
                stroke="var(--color-gold)"
                strokeWidth="10"
                strokeLinecap="round"
                strokeDasharray={2 * Math.PI * 42}
                strokeDashoffset={2 * Math.PI * 42 * (1 - pct / 100)}
                style={{ transition: 'stroke-dashoffset 600ms cubic-bezier(0.22,1,0.36,1)' }}
              />
            </svg>
            <span className="absolute inset-0 grid place-items-center font-display text-xl font-semibold">
              {pct}%
            </span>
          </div>
          <div className="flex-1">
            <p className="font-display text-2xl font-semibold">
              {completed} of {fresherSteps.length} steps done
            </p>
            <p className="mt-1.5 text-[14.5px] text-paper/75">
              {pct === 100
                ? 'You are fully registered. Congratulations — now go and find your lecture hall.'
                : 'Your progress is stored locally in this browser. Nothing is uploaded anywhere.'}
            </p>
          </div>
          <button
            onClick={() => setDone({})}
            className="inline-flex items-center gap-2 self-start rounded-full border border-paper/30 px-4 py-2.5 text-[13.5px] font-semibold hover:bg-paper/10 transition-colors"
          >
            <RotateCcw size={15} /> Reset
          </button>
        </div>
      </Reveal>

      {/* STEPS */}
      <ol className="mt-10 space-y-3">
        {fresherSteps.map((s, i) => {
          const isDone = !!done[s.id]
          return (
            <Reveal key={s.id} delay={Math.min(i * 0.04, 0.3)}>
              <li>
                <button
                  onClick={() => setDone((d) => ({ ...d, [s.id]: !d[s.id] }))}
                  className={`w-full text-left rounded-2xl border-2 p-5 sm:p-6 flex gap-5 transition-all ${
                    isDone
                      ? 'border-moss/40 bg-moss/10'
                      : 'border-ink/20 bg-paper hover:border-ink hover:-translate-y-0.5'
                  }`}
                >
                  <span
                    className={`mt-0.5 grid place-items-center h-9 w-9 shrink-0 rounded-full border-2 font-display font-semibold ${
                      isDone ? 'bg-moss border-moss text-paper' : 'border-ink/30 text-ink-3'
                    }`}
                  >
                    {isDone ? <Check size={17} /> : i + 1}
                  </span>
                  <span className="flex-1">
                    <span
                      className={`block font-display text-[20px] sm:text-[22px] font-semibold leading-snug ${
                        isDone ? 'text-ink/55 line-through decoration-moss/50' : 'text-ink'
                      }`}
                    >
                      {s.title}
                    </span>
                    <span className="mt-2 block text-[14.5px] leading-relaxed text-ink-2/85">{s.detail}</span>
                    <span className="mt-3 inline-block rounded-full bg-gold-soft/70 px-3 py-1 text-[12px] font-bold text-ink/75">
                      {s.meta}
                    </span>
                  </span>
                </button>
              </li>
            </Reveal>
          )
        })}
      </ol>

      {/* DOCUMENTS + PACKING */}
      <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.15fr]">
        <Reveal>
          <div className="h-full rounded-2xl border-2 border-ink bg-paper p-7 card-shadow-soft">
            <div className="flex items-center gap-2.5">
              <span className="grid place-items-center h-10 w-10 rounded-xl bg-clay text-paper">
                <FileText size={19} />
              </span>
              <h2 className="font-display text-2xl font-semibold">Screening document folder</h2>
            </div>
            <p className="mt-3 text-[14.5px] text-ink-2/85">
              Carry originals <em>and</em> photocopies. Offices keep copies; you keep originals.
            </p>
            <ul className="mt-5 space-y-2.5">
              {documents.map((d) => (
                <li key={d} className="flex gap-3 text-[15px] leading-snug">
                  <Check size={16} className="mt-1 shrink-0 text-moss" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="h-full rounded-2xl border-2 border-ink bg-paper p-7 card-shadow-soft">
            <div className="flex items-center gap-2.5">
              <span className="grid place-items-center h-10 w-10 rounded-xl bg-moss text-paper">
                <Backpack size={19} />
              </span>
              <h2 className="font-display text-2xl font-semibold">What to actually pack</h2>
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              {packing.map((p) => (
                <div key={p.group}>
                  <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold text-ink-3">{p.group}</h3>
                  <ul className="mt-3 space-y-2 text-[14px] leading-snug text-ink-2">
                    {p.items.map((it) => (
                      <li key={it} className="border-l-2 border-gold/60 pl-3">
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* WARNING */}
      <Reveal>
        <div className="mt-8 rounded-2xl border-2 border-clay/40 bg-clay/10 p-7 flex gap-4">
          <AlertTriangle size={22} className="shrink-0 text-clay mt-0.5" />
          <div>
            <h3 className="font-display text-xl font-semibold">Three ways freshers lose money</h3>
            <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-ink-2">
              <li>1. Paying an “agent” who promises to fix admission, results or a bed space.</li>
              <li>2. Paying rent for a lodge you have never physically inspected.</li>
              <li>3. Paying fees to an account that is not the invoice/RRR generated on the official portal.</li>
            </ul>
            <Link
              to="/help"
              className="mt-5 inline-flex items-center gap-2 text-[14px] font-bold text-clay hover:gap-3 transition-all"
            >
              What to do if it already happened <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </Reveal>
    </div>
  )
}
