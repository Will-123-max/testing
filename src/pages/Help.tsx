import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ExternalLink, PhoneCall, HeartPulse, ShieldX, ArrowRight } from 'lucide-react'
import { Reveal, Eyebrow } from '../components/ui'
import { faqs, officialLinks } from '../data/guide'

const desks = [
  { title: 'Course adviser', body: 'Registration, unit load, carry-overs — anything about your course form.' },
  { title: 'Head of Department', body: 'Departmental approvals, missing results, change of course within the faculty.' },
  { title: 'Faculty officer', body: 'Faculty records, signatures, stamped documents and notice-board announcements.' },
  { title: 'Student Affairs', body: 'Hostel allocation, welfare, clubs and associations, disciplinary matters.' },
  { title: 'Bursary', body: 'Payment confirmation, receipts, reversals and anything money-related.' },
  { title: 'Exams & Records', body: 'Results, statements of result, transcripts and certificate collection.' },
]

const emergency = [
  { label: 'National emergency line', value: '112', note: 'Toll-free nationwide — police, fire, ambulance' },
  { label: 'Campus security post', value: 'On your ID card', note: 'Save it the day you collect your ID' },
  { label: 'University medical centre', value: 'Register in week one', note: 'Cheapest first stop when you fall ill' },
]

export default function Help() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <Reveal>
        <Eyebrow>Help &amp; FAQ</Eyebrow>
        <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[0.98] tracking-tight max-w-3xl">
          The questions filling every EBSU <span className="italic text-clay">group chat</span>.
        </h1>
        <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-ink-2/85">
          Straight answers — plus the right office to walk into when the answer has to be official.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.35fr_1fr] items-start">
        {/* FAQ */}
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <Reveal key={f.q} delay={Math.min(i * 0.03, 0.25)}>
                <div
                  className={`rounded-2xl border-2 bg-paper overflow-hidden transition-colors ${
                    isOpen ? 'border-ink' : 'border-ink/15'
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-start gap-4 p-5 sm:p-6 text-left hover:bg-ink/5 transition-colors"
                  >
                    <span className="font-display text-[15px] font-semibold text-clay pt-1">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="flex-1 font-display text-[19px] sm:text-[21px] font-semibold leading-snug">
                      {f.q}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`mt-1 shrink-0 text-ink-3 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {isOpen && (
                    <p className="px-5 sm:px-6 pb-6 pl-[52px] sm:pl-[60px] text-[15px] leading-relaxed text-ink-2/90">
                      {f.a}
                    </p>
                  )}
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* SIDEBAR */}
        <div className="space-y-6">
          <Reveal>
            <div className="rounded-2xl border-2 border-ink bg-ink text-paper p-7">
              <div className="flex items-center gap-2.5">
                <PhoneCall size={20} className="text-gold" />
                <h2 className="font-display text-xl font-semibold">Emergency numbers</h2>
              </div>
              <ul className="mt-5 space-y-4">
                {emergency.map((e) => (
                  <li key={e.label} className="border-b border-paper/15 pb-3 last:border-0 last:pb-0">
                    <p className="font-display text-lg font-semibold text-gold">{e.value}</p>
                    <p className="text-[14px] font-semibold">{e.label}</p>
                    <p className="text-[12.5px] text-paper/65">{e.note}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="rounded-2xl border-2 border-ink bg-paper p-7 card-shadow-soft">
              <h2 className="font-display text-xl font-semibold">Official portals</h2>
              <ul className="mt-4 space-y-3">
                {officialLinks.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-start gap-3 rounded-xl border border-ink/12 bg-paper-2/50 px-4 py-3 hover:border-ink transition-colors"
                    >
                      <ExternalLink size={16} className="mt-1 shrink-0 text-moss" />
                      <span>
                        <span className="block font-semibold text-[14.5px] group-hover:text-moss transition-colors">
                          {l.label}
                        </span>
                        <span className="block text-[12.5px] text-ink-3">{l.note}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="rounded-2xl border-2 border-clay/40 bg-clay/10 p-7">
              <div className="flex items-center gap-2.5">
                <ShieldX size={20} className="text-clay" />
                <h2 className="font-display text-xl font-semibold">If you have been scammed</h2>
              </div>
              <ol className="mt-4 space-y-2 text-[14.5px] leading-relaxed text-ink-2 list-decimal pl-4">
                <li>Stop sending money immediately, no matter what you are told.</li>
                <li>Screenshot every chat, receipt and account detail.</li>
                <li>Report to Student Affairs and campus security the same day.</li>
                <li>Report to the police and your bank’s fraud desk.</li>
                <li>Warn your class group — the same person usually targets several students.</li>
              </ol>
            </div>
          </Reveal>
        </div>
      </div>

      {/* DESKS */}
      <div className="mt-16">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold">Who to see about what</h2>
          <p className="mt-3 max-w-2xl text-[16px] text-ink-2/85">
            Half of student frustration is queueing at the wrong office. Start at the lowest level that can solve
            your problem, and escalate only if you must.
          </p>
        </Reveal>
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {desks.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.05}>
              <div className="h-full rounded-2xl border-2 border-ink/15 bg-paper p-6 hover:border-ink transition-colors">
                <h3 className="font-display text-[20px] font-semibold">{d.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink-2/85">{d.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* WELLBEING */}
      <Reveal>
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_1fr] items-center rounded-3xl border-2 border-ink bg-gold-soft/50 p-8 sm:p-12">
          <div>
            <div className="flex items-center gap-2.5">
              <HeartPulse size={22} className="text-clay" />
              <h2 className="font-display text-3xl font-semibold">It is fine to need help</h2>
            </div>
            <p className="mt-4 text-[16px] leading-relaxed text-ink-2">
              School stress, money pressure, homesickness and burnout are normal, and they are not a character
              flaw. Talk to your course adviser, the counselling unit under Student Affairs, a chaplain or imam, or
              a senior colleague you trust. Asking early is what keeps a bad semester from becoming a lost session.
            </p>
            <Link
              to="/freshers"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-paper font-semibold text-[15px] hover:bg-moss transition-colors"
            >
              Back to the fresher checklist <ArrowRight size={16} />
            </Link>
          </div>
          <img
            src="/images/study.jpg"
            alt="Students studying together"
            className="rounded-2xl border-2 border-ink object-cover h-56 w-full"
          />
        </div>
      </Reveal>
    </div>
  )
}
