import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  ClipboardCheck,
  Map,
  Calculator,
  Wallet,
  LifeBuoy,
  Sparkles,
  BookOpen,
} from 'lucide-react'
import { Reveal, Eyebrow, SectionTitle, naira } from '../components/ui'
import { campuses, faculties, survivalTips, costItems } from '../data/guide'

const startHere = [
  {
    to: '/freshers',
    icon: ClipboardCheck,
    title: 'Fresher checklist',
    body: 'Ten steps from JAMB CAPS to matriculation, with a progress tracker that remembers where you stopped.',
    tone: 'bg-moss text-paper',
  },
  {
    to: '/campuses',
    icon: Map,
    title: 'Find your faculty',
    body: 'Which of the four campuses will you actually be living on? Search every faculty and department.',
    tone: 'bg-clay text-paper',
  },
  {
    to: '/academics',
    icon: Calculator,
    title: 'CGPA calculator',
    body: 'Grading scale, degree classes and a calculator that shows your GPA as you type.',
    tone: 'bg-gold text-ink',
  },
  {
    to: '/campus-life',
    icon: Wallet,
    title: 'Budget planner',
    body: 'Rent, food, keke fare and data — build a realistic semester budget in naira.',
    tone: 'bg-ink text-paper',
  },
]

const deptCount = faculties.reduce((n, f) => n + f.departments.length, 0)

const stats = [
  { value: '4', label: 'Campuses in Abakaliki' },
  { value: String(faculties.length), label: 'Faculties covered' },
  { value: deptCount + '+', label: 'Departments listed' },
  { value: '10', label: 'Steps to matriculation' },
]

const spotlight = [
  {
    img: '/images/study.jpg',
    tag: 'Academics',
    title: 'Pass your first semester, not just survive it',
    body: 'Attendance marks, course forms, handouts and the exam rules nobody reads until it is too late.',
    to: '/academics',
  },
  {
    img: '/images/hostel.jpg',
    tag: 'Accommodation',
    title: 'Hall of residence or a lodge in town?',
    body: 'What each option really costs, what to inspect before you pay, and how to avoid agent wahala.',
    to: '/campus-life',
  },
  {
    img: '/images/market.jpg',
    tag: 'Money',
    title: 'What a month in Abakaliki costs',
    body: 'Food, transport, data and upkeep — with sliders so you can plan your own numbers.',
    to: '/campus-life',
  },
]

export default function Home() {
  const monthly = costItems.reduce(
    (sum, c) => sum + (c.perSemester ? c.preset / 5 : c.preset),
    0,
  )

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 rule-grid opacity-70" />
        <div className="relative mx-auto max-w-6xl px-5 pt-16 pb-14 lg:pt-24 lg:pb-20 grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Eyebrow>Ebonyi State University · Abakaliki</Eyebrow>
            </motion.div>

            <h1 className="mt-5 font-display text-[2.6rem] sm:text-6xl lg:text-[4.2rem] leading-[0.95] font-semibold tracking-tight text-ink">
              <span className="block rise" style={{ animationDelay: '60ms' }}>
                The EBSU guide
              </span>
              <span className="block rise" style={{ animationDelay: '160ms' }}>
                nobody hands you
              </span>
              <span className="block rise italic text-clay" style={{ animationDelay: '260ms' }}>
                on resumption day.
              </span>
            </h1>

            <p
              className="mt-6 max-w-xl text-[17px] sm:text-[18px] leading-relaxed text-ink-2/90 rise"
              style={{ animationDelay: '360ms' }}
            >
              Registration, campuses, CGPA, hostels, keke fares and the small print that decides whether your
              session goes smoothly. Written in plain language by students who already made the mistakes.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 rise" style={{ animationDelay: '460ms' }}>
              <Link
                to="/freshers"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-paper font-semibold text-[15px] hover:bg-moss transition-colors"
              >
                Start the fresher checklist
                <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/campuses"
                className="inline-flex items-center gap-2 rounded-full border-2 border-ink/25 px-6 py-3.5 font-semibold text-[15px] text-ink hover:border-ink hover:bg-ink/5 transition-colors"
              >
                Find my faculty
              </Link>
            </div>

            <dl className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-6 max-w-xl">
              {stats.map((s, i) => (
                <div key={s.label} className="rise" style={{ animationDelay: `${560 + i * 80}ms` }}>
                  <dt className="font-display text-3xl font-semibold text-moss">{s.value}</dt>
                  <dd className="mt-1 text-[12.5px] leading-snug text-ink-3">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, rotate: 1 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-3 rounded-[26px] bg-gold/25 -rotate-2" />
            <div className="relative overflow-hidden rounded-[22px] border-2 border-ink card-shadow">
              <img
                src="/images/campus-hero.png"
                alt="Illustration of students walking through a university campus in Abakaliki"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-4 sm:-left-8 rounded-xl border-2 border-ink bg-paper px-4 py-3 card-shadow-soft max-w-[230px]">
              <p className="text-[12px] uppercase tracking-[0.18em] font-bold text-ink-3">Rough monthly spend</p>
              <p className="font-display text-2xl font-semibold text-ink mt-1">{naira(monthly)}</p>
              <p className="text-[12px] text-ink-3">typical off-campus student</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* START HERE */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <Reveal>
          <SectionTitle
            title="Where do you want to start?"
            lead="Four tools that answer the questions every EBSU student asks in their first weeks — and again every session."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {startHere.map((c, i) => (
            <Reveal key={c.to} delay={i * 0.07}>
              <Link
                to={c.to}
                className="group h-full flex flex-col rounded-2xl border-2 border-ink bg-paper p-6 transition-all hover:-translate-y-1 card-shadow-soft hover:card-shadow"
              >
                <span className={`grid place-items-center h-11 w-11 rounded-xl ${c.tone}`}>
                  <c.icon size={20} />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold leading-snug">{c.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink-2/85 flex-1">{c.body}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-bold text-clay">
                  Open
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CAMPUSES STRIP */}
      <section className="bg-ink text-paper py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] font-bold text-gold">
                <span className="h-px w-6 bg-gold" /> One university, four addresses
              </span>
              <h2 className="mt-5 font-display text-3xl sm:text-4xl font-semibold leading-tight">
                EBSU is spread across Abakaliki. Know your campus before day one.
              </h2>
            </div>
            <Link
              to="/campuses"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-ink font-bold text-[14px] hover:bg-paper transition-colors"
            >
              See all faculties <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {campuses.map((c, i) => (
              <Reveal key={c.id} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-paper/20 bg-paper/5 p-6 hover:bg-paper/10 transition-colors">
                  <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-gold">{c.tag}</p>
                  <h3 className="mt-2 font-display text-2xl font-semibold">{c.name}</h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-paper/75">{c.blurb}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SPOTLIGHT */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {spotlight.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <Link
                to={s.to}
                className="group block h-full overflow-hidden rounded-2xl border-2 border-ink bg-paper card-shadow-soft hover:card-shadow transition-all hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden border-b-2 border-ink">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-paper px-3 py-1 text-[11px] font-bold uppercase tracking-[0.15em] text-ink">
                    {s.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold leading-snug">{s.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-ink-2/85">{s.body}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TIPS */}
      <section className="mx-auto max-w-6xl px-5 pb-8">
        <Reveal>
          <div className="rounded-3xl border-2 border-ink bg-gold-soft/50 p-8 sm:p-12">
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] font-bold text-ink-3">
              <Sparkles size={14} className="text-clay" /> Six habits that quietly decide your CGPA
            </div>
            <div className="mt-8 grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
              {survivalTips.map((t, i) => (
                <div key={t.title} className="flex gap-4">
                  <span className="font-display text-2xl font-semibold text-clay/70 leading-none pt-1">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-display text-[19px] font-semibold leading-snug">{t.title}</h3>
                    <p className="mt-1.5 text-[14.5px] leading-relaxed text-ink-2/85">{t.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] items-center rounded-3xl border-2 border-ink bg-paper p-8 sm:p-12 card-shadow-soft">
            <div>
              <SectionTitle
                title="Still confused about something?"
                lead="The FAQ answers the questions that fill every EBSU WhatsApp group — fees, change of course, transcripts, safety, and the scams to walk away from."
              />
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/help"
                  className="inline-flex items-center gap-2 rounded-full bg-clay px-6 py-3.5 text-paper font-semibold text-[15px] hover:bg-ink transition-colors"
                >
                  <LifeBuoy size={17} /> Read the FAQ
                </Link>
                <Link
                  to="/academics"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-ink/25 px-6 py-3.5 font-semibold text-[15px] hover:border-ink transition-colors"
                >
                  <BookOpen size={17} /> Academic rules
                </Link>
              </div>
            </div>
            <div className="rounded-2xl bg-ink text-paper p-7">
              <p className="font-display text-xl font-semibold text-gold">Golden rule</p>
              <p className="mt-3 text-[15px] leading-relaxed text-paper/85">
                Every legitimate EBSU payment generates an invoice or RRR on the official portal, in your own name.
                If anyone asks you to pay them directly for admission, results or “connection”, that is a scam.
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
