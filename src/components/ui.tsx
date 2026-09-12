import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

export function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] font-bold text-ink-3">
      <span className="h-px w-6 bg-clay" />
      {children}
    </span>
  )
}

export function SectionTitle({
  title,
  lead,
  align = 'left',
}: {
  title: ReactNode
  lead?: ReactNode
  align?: 'left' | 'center'
}) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.05] font-semibold text-ink">
        {title}
      </h2>
      {lead && <p className="mt-4 text-[17px] leading-relaxed text-ink-2/85">{lead}</p>}
    </div>
  )
}

export function Panel({
  children,
  className = '',
  tone = 'paper',
}: {
  children: ReactNode
  className?: string
  tone?: 'paper' | 'ink' | 'gold'
}) {
  const tones: Record<string, string> = {
    paper: 'bg-paper/80 border-ink/15 text-ink',
    ink: 'bg-ink border-ink text-paper',
    gold: 'bg-gold-soft/60 border-ink/15 text-ink',
  }
  return (
    <div className={`rounded-2xl border ${tones[tone]} backdrop-blur-[2px] ${className}`}>{children}</div>
  )
}

export function Naira({ value }: { value: number }) {
  return <>{'\u20A6' + value.toLocaleString('en-NG')}</>
}

export const naira = (value: number) => '\u20A6' + Math.round(value).toLocaleString('en-NG')
