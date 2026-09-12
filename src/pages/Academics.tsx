import { useMemo, useState } from 'react'
import { Plus, Trash2, Calculator, ScrollText, ShieldCheck, TriangleAlert } from 'lucide-react'
import { Reveal, Eyebrow } from '../components/ui'
import { gradeScale, classification } from '../data/guide'

type Row = { id: number; code: string; units: number; grade: string }

const points: Record<string, number> = { A: 5, B: 4, C: 3, D: 2, E: 1, F: 0 }

const starter: Row[] = [
  { id: 1, code: 'GST 101', units: 2, grade: 'A' },
  { id: 2, code: 'Core course I', units: 3, grade: 'B' },
  { id: 3, code: 'Core course II', units: 3, grade: 'B' },
  { id: 4, code: 'Elective', units: 2, grade: 'C' },
]

const registration = [
  {
    title: 'Clear your fees first',
    body: 'The portal will not open the course form until your school fees payment is confirmed. Pay early in the window; the portal crawls on deadline day.',
  },
  {
    title: 'Meet your course adviser',
    body: 'Each level has an adviser who knows the correct compulsory, required and elective mix. Do not copy another student’s form blindly — carry-overs change your load.',
  },
  {
    title: 'Respect the unit ceiling',
    body: 'There is a minimum and maximum number of units you may register per semester. Outstanding courses from last session are registered first, then new ones fill the balance.',
  },
  {
    title: 'Print three copies, get them stamped',
    body: 'One signed and stamped copy for you, one for the department, one for the faculty. Unstamped forms have a way of disappearing exactly when results are being compiled.',
  },
  {
    title: 'Cross-check before the deadline closes',
    body: 'Log back in a week later and confirm every course still appears on your profile. Portal glitches are real, and “I registered it” is not evidence — the stamped form is.',
  },
]

const examRules = [
  'Carry your student ID card and exam docket to every paper — no card, no entry, no argument.',
  'Get to the hall at least 30 minutes early; halls are often on a different campus from your department.',
  'Only a non-programmable calculator. Phones, smart watches and “innocent” papers count as examination misconduct.',
  'Write your matric number, not your name, wherever the rubric says so.',
  'Never collect or carry material for anyone. Penalties range from a cancelled paper to expulsion.',
]

export default function Academics() {
  const [rows, setRows] = useState<Row[]>(starter)
  const [prevCgpa, setPrevCgpa] = useState('')
  const [prevUnits, setPrevUnits] = useState('')

  const { tnu, tqp, gpa } = useMemo(() => {
    const tnu = rows.reduce((n, r) => n + (Number(r.units) || 0), 0)
    const tqp = rows.reduce((n, r) => n + (Number(r.units) || 0) * points[r.grade], 0)
    return { tnu, tqp, gpa: tnu ? tqp / tnu : 0 }
  }, [rows])

  const cumulative = useMemo(() => {
    const pc = parseFloat(prevCgpa)
    const pu = parseFloat(prevUnits)
    if (!isFinite(pc) || !isFinite(pu) || pu <= 0) return null
    const totalUnits = pu + tnu
    if (!totalUnits) return null
    return (pc * pu + tqp) / totalUnits
  }, [prevCgpa, prevUnits, tnu, tqp])

  const shown = cumulative ?? gpa
  const degreeClass = classification.find((c) => shown >= c.min) ?? { label: 'Below pass mark' }

  const update = (id: number, patch: Partial<Row>) =>
    setRows((rs) => rs.map((r) => (r.id === id ? { ...r, ...patch } : r)))

  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <Reveal>
        <Eyebrow>Academics</Eyebrow>
        <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[0.98] tracking-tight max-w-3xl">
          Understand the <span className="italic text-clay">5-point scale</span> before it understands you.
        </h1>
        <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-ink-2/85">
          Grades, quality points, registration rules and exam-hall discipline — the mechanics behind the number
          that follows you into every job interview.
        </p>
      </Reveal>

      {/* CALCULATOR */}
      <div className="mt-12 grid gap-6 lg:grid-cols-[1.35fr_1fr] items-start">
        <Reveal>
          <div className="rounded-2xl border-2 border-ink bg-paper p-6 sm:p-8 card-shadow-soft">
            <div className="flex items-center gap-2.5">
              <span className="grid place-items-center h-10 w-10 rounded-xl bg-gold text-ink">
                <Calculator size={19} />
              </span>
              <h2 className="font-display text-2xl font-semibold">GPA / CGPA calculator</h2>
            </div>

            <div className="mt-6 hidden sm:grid grid-cols-[1fr_90px_90px_40px] gap-3 text-[11px] uppercase tracking-[0.16em] font-bold text-ink-3">
              <span>Course</span>
              <span>Units</span>
              <span>Grade</span>
              <span />
            </div>

            <div className="mt-3 space-y-3">
              {rows.map((r) => (
                <div
                  key={r.id}
                  className="grid grid-cols-[1fr_70px_70px_40px] sm:grid-cols-[1fr_90px_90px_40px] gap-3"
                >
                  <input
                    value={r.code}
                    onChange={(e) => update(r.id, { code: e.target.value })}
                    placeholder="Course code"
                    className="rounded-lg border-2 border-ink/15 bg-paper px-3 py-2.5 text-[14.5px] outline-none focus:border-ink transition-colors"
                  />
                  <input
                    type="number"
                    min={0}
                    max={12}
                    value={r.units}
                    onChange={(e) => update(r.id, { units: Number(e.target.value) })}
                    className="rounded-lg border-2 border-ink/15 bg-paper px-3 py-2.5 text-[14.5px] outline-none focus:border-ink transition-colors"
                  />
                  <select
                    value={r.grade}
                    onChange={(e) => update(r.id, { grade: e.target.value })}
                    className="rounded-lg border-2 border-ink/15 bg-paper px-2 py-2.5 text-[14.5px] outline-none focus:border-ink transition-colors"
                  >
                    {Object.keys(points).map((g) => (
                      <option key={g} value={g}>
                        {g}
                      </option>
                    ))}
                  </select>
                  <button
                    onClick={() => setRows((rs) => (rs.length > 1 ? rs.filter((x) => x.id !== r.id) : rs))}
                    aria-label="Remove course"
                    className="grid place-items-center rounded-lg border-2 border-ink/15 text-ink-3 hover:border-clay hover:text-clay transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={() => setRows((rs) => [...rs, { id: Date.now(), code: '', units: 2, grade: 'A' }])}
              className="mt-4 inline-flex items-center gap-2 rounded-full border-2 border-ink/25 px-4 py-2.5 text-[14px] font-semibold hover:border-ink transition-colors"
            >
              <Plus size={16} /> Add course
            </button>

            <div className="mt-7 border-t border-ink/12 pt-6">
              <h3 className="text-[11px] uppercase tracking-[0.18em] font-bold text-ink-3">
                Optional — carry your history forward
              </h3>
              <div className="mt-3 grid sm:grid-cols-2 gap-3">
                <label className="block">
                  <span className="text-[13px] text-ink-2">Previous CGPA</span>
                  <input
                    inputMode="decimal"
                    value={prevCgpa}
                    onChange={(e) => setPrevCgpa(e.target.value)}
                    placeholder="e.g. 3.62"
                    className="mt-1 w-full rounded-lg border-2 border-ink/15 bg-paper px-3 py-2.5 text-[14.5px] outline-none focus:border-ink"
                  />
                </label>
                <label className="block">
                  <span className="text-[13px] text-ink-2">Units already passed</span>
                  <input
                    inputMode="decimal"
                    value={prevUnits}
                    onChange={(e) => setPrevUnits(e.target.value)}
                    placeholder="e.g. 42"
                    className="mt-1 w-full rounded-lg border-2 border-ink/15 bg-paper px-3 py-2.5 text-[14.5px] outline-none focus:border-ink"
                  />
                </label>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="rounded-2xl border-2 border-ink bg-ink text-paper p-7 sm:p-8 lg:sticky lg:top-24">
            <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-gold">
              {cumulative ? 'Cumulative CGPA' : 'Semester GPA'}
            </p>
            <p className="mt-2 font-display text-[4.2rem] leading-none font-semibold">{shown.toFixed(2)}</p>
            <p className="mt-3 text-[15px] font-semibold text-gold">{degreeClass.label}</p>

            <div className="mt-6 h-2 rounded-full bg-paper/20 overflow-hidden">
              <div
                className="h-full rounded-full bg-gold transition-all duration-500"
                style={{ width: `${Math.min(100, (shown / 5) * 100)}%` }}
              />
            </div>

            <dl className="mt-7 space-y-3 text-[14.5px]">
              <div className="flex justify-between border-b border-paper/15 pb-2">
                <dt className="text-paper/70">Total units (TNU)</dt>
                <dd className="font-bold">{tnu}</dd>
              </div>
              <div className="flex justify-between border-b border-paper/15 pb-2">
                <dt className="text-paper/70">Quality points (TQP)</dt>
                <dd className="font-bold">{tqp}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-paper/70">This semester</dt>
                <dd className="font-bold">{gpa.toFixed(2)}</dd>
              </div>
            </dl>

            <p className="mt-6 text-[12.5px] leading-relaxed text-paper/60">
              GPA = total quality points ÷ total units. Classification bands follow the common Nigerian 5-point
              scale; your faculty’s official regulations are the final word.
            </p>
          </div>
        </Reveal>
      </div>

      {/* GRADES + CLASSES */}
      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-2xl border-2 border-ink bg-paper p-7 card-shadow-soft">
            <h2 className="font-display text-2xl font-semibold">The grading scale</h2>
            <div className="mt-5 overflow-hidden rounded-xl border border-ink/15">
              <table className="w-full text-[14.5px]">
                <thead className="bg-ink text-paper text-left">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Score</th>
                    <th className="px-4 py-3 font-semibold">Grade</th>
                    <th className="px-4 py-3 font-semibold">Points</th>
                    <th className="px-4 py-3 font-semibold">Verdict</th>
                  </tr>
                </thead>
                <tbody>
                  {gradeScale.map((g, i) => (
                    <tr key={g.grade} className={i % 2 ? 'bg-paper-2/50' : ''}>
                      <td className="px-4 py-3">{g.range}</td>
                      <td className="px-4 py-3 font-display text-lg font-semibold">{g.grade}</td>
                      <td className="px-4 py-3">{g.points}</td>
                      <td className="px-4 py-3 text-ink-2">{g.verdict}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="h-full rounded-2xl border-2 border-ink bg-paper p-7 card-shadow-soft">
            <h2 className="font-display text-2xl font-semibold">Degree classification</h2>
            <ul className="mt-5 space-y-3">
              {classification.map((c) => (
                <li
                  key={c.label}
                  className={`flex items-center justify-between rounded-xl border-2 px-5 py-4 ${
                    shown >= c.min && shown <= c.max + 0.001
                      ? 'border-moss bg-moss/10'
                      : 'border-ink/12 bg-paper-2/40'
                  }`}
                >
                  <span className="font-display text-[18px] font-semibold">{c.label}</span>
                  <span className="text-[14px] font-bold text-ink-2">
                    {c.min.toFixed(2)} – {c.max.toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[13px] text-ink-3">
              The highlighted band reflects the CGPA currently in the calculator.
            </p>
          </div>
        </Reveal>
      </div>

      {/* REGISTRATION */}
      <div className="mt-16 grid gap-8 lg:grid-cols-[1.1fr_1fr] items-start">
        <Reveal>
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid place-items-center h-10 w-10 rounded-xl bg-moss text-paper">
                <ScrollText size={19} />
              </span>
              <h2 className="font-display text-3xl font-semibold">Course registration, done properly</h2>
            </div>
            <ol className="mt-7 space-y-5 border-l-2 border-ink/15 pl-7">
              {registration.map((s, i) => (
                <li key={s.title} className="relative">
                  <span className="absolute -left-[38px] grid place-items-center h-7 w-7 rounded-full bg-ink text-paper text-[12px] font-bold">
                    {i + 1}
                  </span>
                  <h3 className="font-display text-[20px] font-semibold leading-snug">{s.title}</h3>
                  <p className="mt-1.5 text-[14.5px] leading-relaxed text-ink-2/85">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="space-y-6">
            <div className="rounded-2xl border-2 border-ink bg-gold-soft/50 p-7">
              <div className="flex items-center gap-2.5">
                <ShieldCheck size={20} className="text-moss" />
                <h3 className="font-display text-xl font-semibold">Exam hall rules</h3>
              </div>
              <ul className="mt-4 space-y-2.5 text-[14.5px] leading-relaxed text-ink-2">
                {examRules.map((r) => (
                  <li key={r} className="border-l-2 border-clay/50 pl-3">
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border-2 border-clay/40 bg-clay/10 p-7">
              <div className="flex items-center gap-2.5">
                <TriangleAlert size={20} className="text-clay" />
                <h3 className="font-display text-xl font-semibold">Missing result?</h3>
              </div>
              <p className="mt-3 text-[14.5px] leading-relaxed text-ink-2">
                Report it in writing to your course lecturer and HOD in the same semester it appears — with your
                stamped course form and fee receipts attached. Missing results chased in final year are the number
                one cause of delayed graduation and NYSC mobilisation.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  )
}
