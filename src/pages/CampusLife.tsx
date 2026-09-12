import { useEffect, useState } from 'react'
import { BedDouble, Bike, Utensils, ShieldAlert, MessageSquareQuote, RotateCcw } from 'lucide-react'
import { Reveal, Eyebrow, naira } from '../components/ui'
import { costItems, lingo } from '../data/guide'

const STORAGE_KEY = 'ebsu-guide-budget-v1'

const housing = [
  {
    title: 'Hall of residence',
    tone: 'bg-moss text-paper',
    pros: [
      'Cheapest option per session',
      'Inside the gate — no daily transport cost',
      'Security presence and coursemates nearby',
      'Simple application through the portal',
    ],
    cons: [
      'Bed spaces are limited and go fast',
      'Shared rooms, shared everything',
      'Power and water can be unpredictable',
      'Rules, closing times and inspections',
    ],
  },
  {
    title: 'Off-campus lodge',
    tone: 'bg-clay text-paper',
    pros: [
      'Your own space and study quiet',
      'Choose your area and your neighbours',
      'Cook what you want, when you want',
      'Easier to host a reading group',
    ],
    cons: [
      'Rent, agent fee, caution fee, service charge',
      'Daily keke fare adds up fast',
      'You handle your own security',
      'Landlord and light wahala is yours alone',
    ],
  },
]

const transport = [
  {
    label: 'Keke within town',
    body: 'The default way to move around Abakaliki. Short drops are cheap; agree the fare before you enter, especially at night.',
  },
  {
    label: 'Campus shuttle & buses',
    body: 'Cheaper per trip on longer runs to the Permanent Site. They fill up fast in the morning rush — leave early.',
  },
  {
    label: 'Okada',
    body: 'Fast but the riskiest option, and restricted in parts of town. If you must, insist on a slow ride and never in heavy rain.',
  },
  {
    label: 'Trekking',
    body: 'Perfectly normal between town lodges and Presco. Saves the fare, but avoid unlit stretches alone after dark.',
  },
]

const food = [
  'Cooking for yourself costs roughly half of buying every meal. A small gas cylinder pays for itself within a semester.',
  'Buy rice, garri, beans and oil in bulk at the main markets rather than in tiny daily portions.',
  'Campus canteens are convenient between lectures — budget them as a treat, not a habit.',
  'Abakaliki rice is local, plentiful and cheap. Learn three quick recipes and you will never be broke and hungry at once.',
  'Drink treated or sachet water from a reliable brand. A typhoid week costs more than a term of good water.',
]

const safety = [
  'Move in groups after dark, especially along the expressway stretch to the Permanent Site.',
  'Keep your phone out of sight in traffic and inside keke.',
  'Know your lodge caretaker and at least two neighbours by name.',
  'Save campus security, your course adviser and one trusted senior colleague on speed dial.',
  'Do not join any “club” that requires secrecy or an initiation. Report the approach immediately.',
  'During protests or aluta, go home. Curiosity is how bystanders end up injured.',
]

export default function CampusLife() {
  const [amounts, setAmounts] = useState<Record<string, number>>(() =>
    Object.fromEntries(costItems.map((c) => [c.id, c.preset])),
  )

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) setAmounts((a) => ({ ...a, ...JSON.parse(raw) }))
    } catch {
      /* ignore */
    }
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(amounts))
    } catch {
      /* ignore */
    }
  }, [amounts])

  const monthly = costItems.reduce((sum, c) => sum + (c.perSemester ? amounts[c.id] / 5 : amounts[c.id]), 0)
  const semester = costItems.reduce((sum, c) => sum + (c.perSemester ? amounts[c.id] : amounts[c.id] * 5), 0)

  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <Reveal>
        <Eyebrow>Campus life</Eyebrow>
        <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[0.98] tracking-tight max-w-3xl">
          Where you sleep, what you spend, how you <span className="italic text-moss">move</span>.
        </h1>
        <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-ink-2/85">
          Abakaliki is an affordable city to study in — if you plan. Here is how students actually live, and what a
          realistic semester costs.
        </p>
      </Reveal>

      {/* HOUSING */}
      <div className="mt-12">
        <Reveal>
          <div className="flex items-center gap-2.5">
            <span className="grid place-items-center h-10 w-10 rounded-xl bg-ink text-gold">
              <BedDouble size={19} />
            </span>
            <h2 className="font-display text-3xl font-semibold">Hall or lodge?</h2>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {housing.map((h, i) => (
            <Reveal key={h.title} delay={i * 0.07}>
              <div className="h-full overflow-hidden rounded-2xl border-2 border-ink bg-paper card-shadow-soft">
                <div className={`${h.tone} px-6 py-4`}>
                  <h3 className="font-display text-2xl font-semibold">{h.title}</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-6 p-6">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] font-bold text-moss">Good</p>
                    <ul className="mt-3 space-y-2 text-[14px] leading-snug text-ink-2">
                      {h.pros.map((p) => (
                        <li key={p} className="border-l-2 border-moss/40 pl-3">
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] font-bold text-clay">Trade-offs</p>
                    <ul className="mt-3 space-y-2 text-[14px] leading-snug text-ink-2">
                      {h.cons.map((p) => (
                        <li key={p} className="border-l-2 border-clay/40 pl-3">
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-5 grid gap-6 lg:grid-cols-[1.2fr_1fr] items-center rounded-2xl border-2 border-ink bg-paper-2/60 p-6">
            <div>
              <h3 className="font-display text-xl font-semibold">Inspect before you pay. Every time.</h3>
              <ul className="mt-3 grid sm:grid-cols-2 gap-x-6 gap-y-2 text-[14.5px] text-ink-2">
                <li>✓ Check the water source and pressure yourself</li>
                <li>✓ Test every socket and check the meter type</li>
                <li>✓ Ask for the full total: rent, agent, caution, service</li>
                <li>✓ Get a written receipt with the landlord’s full name</li>
                <li>✓ Visit once in daylight and once at night</li>
                <li>✓ Talk to a current tenant before committing</li>
              </ul>
            </div>
            <img
              src="/images/hostel.jpg"
              alt="A simple student room"
              className="rounded-xl border-2 border-ink object-cover h-44 w-full"
            />
          </div>
        </Reveal>
      </div>

      {/* BUDGET */}
      <div className="mt-16">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold">Build your semester budget</h2>
          <p className="mt-3 max-w-2xl text-[16px] text-ink-2/85">
            Drag the sliders to match your own reality. A semester is counted as five months here. Figures are
            student estimates in naira, not official university charges.
          </p>
        </Reveal>

        <div className="mt-7 grid gap-6 lg:grid-cols-[1.4fr_1fr] items-start">
          <Reveal>
            <div className="rounded-2xl border-2 border-ink bg-paper p-6 sm:p-8 card-shadow-soft space-y-6">
              {costItems.map((c) => (
                <div key={c.id}>
                  <div className="flex items-baseline justify-between gap-4">
                    <div>
                      <p className="font-display text-[19px] font-semibold">{c.label}</p>
                      <p className="text-[13px] text-ink-3">{c.hint}</p>
                    </div>
                    <p className="font-display text-lg font-semibold text-moss whitespace-nowrap">
                      {naira(amounts[c.id])}
                      <span className="text-[12px] font-normal text-ink-3 ml-1">
                        /{c.perSemester ? 'sem' : 'mo'}
                      </span>
                    </p>
                  </div>
                  <input
                    type="range"
                    min={c.low}
                    max={c.high}
                    step={500}
                    value={amounts[c.id]}
                    onChange={(e) => setAmounts((a) => ({ ...a, [c.id]: Number(e.target.value) }))}
                    className="mt-3 w-full"
                    aria-label={c.label}
                  />
                  <div className="flex justify-between text-[11.5px] text-ink-3 mt-1">
                    <span>{naira(c.low)}</span>
                    <span>{naira(c.high)}</span>
                  </div>
                </div>
              ))}

              <button
                onClick={() => setAmounts(Object.fromEntries(costItems.map((c) => [c.id, c.preset])))}
                className="inline-flex items-center gap-2 rounded-full border-2 border-ink/25 px-4 py-2.5 text-[14px] font-semibold hover:border-ink transition-colors"
              >
                <RotateCcw size={15} /> Reset to typical
              </button>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-2xl border-2 border-ink bg-ink text-paper p-7 sm:p-8 lg:sticky lg:top-24">
              <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-gold">Per semester</p>
              <p className="mt-2 font-display text-[3.2rem] leading-none font-semibold">{naira(semester)}</p>
              <p className="mt-4 text-[15px] text-paper/75">
                About <span className="font-bold text-gold">{naira(monthly)}</span> a month, excluding school fees
                and one-off registration charges.
              </p>

              <ul className="mt-6 space-y-2.5">
                {costItems.map((c) => {
                  const perSem = c.perSemester ? amounts[c.id] : amounts[c.id] * 5
                  const share = semester ? (perSem / semester) * 100 : 0
                  return (
                    <li key={c.id}>
                      <div className="flex justify-between text-[13px] text-paper/80">
                        <span>{c.label}</span>
                        <span>{Math.round(share)}%</span>
                      </div>
                      <div className="mt-1 h-1.5 rounded-full bg-paper/15 overflow-hidden">
                        <div className="h-full rounded-full bg-gold" style={{ width: `${share}%` }} />
                      </div>
                    </li>
                  )
                })}
              </ul>

              <p className="mt-6 text-[12.5px] leading-relaxed text-paper/60">
                Tip: the two lines you can genuinely shrink are transport (live close) and food (cook in bulk).
                Everything else is mostly fixed.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* TRANSPORT + FOOD */}
      <div className="mt-16 grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-2xl border-2 border-ink bg-paper p-7 card-shadow-soft">
            <div className="flex items-center gap-2.5">
              <span className="grid place-items-center h-10 w-10 rounded-xl bg-gold text-ink">
                <Bike size={19} />
              </span>
              <h2 className="font-display text-2xl font-semibold">Getting around Abakaliki</h2>
            </div>
            <div className="mt-5 space-y-4">
              {transport.map((t) => (
                <div key={t.label} className="border-l-2 border-gold/60 pl-4">
                  <h3 className="font-display text-[18px] font-semibold">{t.label}</h3>
                  <p className="mt-1 text-[14.5px] leading-relaxed text-ink-2/85">{t.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="h-full overflow-hidden rounded-2xl border-2 border-ink bg-paper card-shadow-soft">
            <img
              src="/images/market.jpg"
              alt="Busy market street"
              className="h-40 w-full object-cover border-b-2 border-ink"
            />
            <div className="p-7">
              <div className="flex items-center gap-2.5">
                <span className="grid place-items-center h-10 w-10 rounded-xl bg-clay text-paper">
                  <Utensils size={19} />
                </span>
                <h2 className="font-display text-2xl font-semibold">Eating well for less</h2>
              </div>
              <ul className="mt-5 space-y-2.5 text-[14.5px] leading-relaxed text-ink-2">
                {food.map((f) => (
                  <li key={f} className="border-l-2 border-clay/40 pl-3">
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>

      {/* SAFETY */}
      <Reveal>
        <div className="mt-8 rounded-2xl border-2 border-ink bg-ink text-paper p-7 sm:p-9">
          <div className="flex items-center gap-2.5">
            <ShieldAlert size={22} className="text-gold" />
            <h2 className="font-display text-2xl font-semibold">Staying safe</h2>
          </div>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {safety.map((s) => (
              <li
                key={s}
                className="rounded-xl bg-paper/10 border border-paper/15 px-5 py-4 text-[14.5px] leading-relaxed text-paper/85"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      {/* LINGO */}
      <div className="mt-16">
        <Reveal>
          <div className="flex items-center gap-2.5">
            <span className="grid place-items-center h-10 w-10 rounded-xl bg-moss text-paper">
              <MessageSquareQuote size={19} />
            </span>
            <h2 className="font-display text-3xl font-semibold">Campus dictionary</h2>
          </div>
          <p className="mt-3 max-w-2xl text-[16px] text-ink-2/85">
            Words you will hear in your first week and pretend to understand. Now you actually will.
          </p>
        </Reveal>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {lingo.map((l, i) => (
            <Reveal key={l.term} delay={Math.min(i * 0.04, 0.3)}>
              <div className="h-full rounded-2xl border-2 border-ink/15 bg-paper p-5 hover:border-ink hover:-translate-y-0.5 transition-all">
                <h3 className="font-display text-[20px] font-semibold text-clay">{l.term}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink-2/85">{l.meaning}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}
