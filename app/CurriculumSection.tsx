'use client'

import { useEffect, useReducer, useRef, useCallback } from 'react'
import type { CSSProperties } from 'react'

// ─── Data ─────────────────────────────────────────────────────────────────────

const SUBJECTS = ['Chemistry', 'Biology', 'Physics', 'Environment'] as const
type SubjectId = (typeof SUBJECTS)[number]

type ChapterData = {
  title:   string
  mastery: number
  status:  'mastered' | 'progress' | 'review' | 'next'
}

const CHAPTERS: Record<SubjectId, [ChapterData, ChapterData, ChapterData, ChapterData]> = {
  Chemistry: [
    { title: 'Chemical Reactions and Equations', mastery: 91, status: 'mastered' },
    { title: 'Acids, Bases and Salts',           mastery: 64, status: 'progress' },
    { title: 'Metals and Non-Metals',            mastery: 45, status: 'next'     },
    { title: 'Carbon and Its Compounds',         mastery: 18, status: 'next'     },
  ],
  Biology: [
    { title: 'Life Processes',              mastery: 88, status: 'mastered' },
    { title: 'Control and Coordination',    mastery: 72, status: 'progress' },
    { title: 'How Do Organisms Reproduce?', mastery: 31, status: 'next'     },
    { title: 'Heredity',                    mastery: 9,  status: 'next'     },
  ],
  Physics: [
    { title: 'Light – Reflection and Refraction',     mastery: 79, status: 'mastered' },
    { title: 'The Human Eye and the Colourful World', mastery: 61, status: 'progress' },
    { title: 'Electricity',                           mastery: 38, status: 'review'   },
    { title: 'Magnetic Effects of Electric Current',  mastery: 12, status: 'next'     },
  ],
  Environment: [
    { title: 'Our Environment', mastery: 55, status: 'progress' },
    { title: '',                mastery: 0,  status: 'next'     },
    { title: '',                mastery: 0,  status: 'next'     },
    { title: '',                mastery: 0,  status: 'next'     },
  ],
}

type CardId = 'recommend' | 'review' | 'concept' | 'mastery'

const INSIGHT: Record<CardId, { icon: string; label: string; value: string; tone: 'amber' | 'red' | 'purple' | 'green' }> = {
  recommend: { icon: '→', label: 'Recommended next',  value: 'Acids, Bases and Salts',    tone: 'amber'  },
  review:    { icon: '↺', label: 'Review suggested',   value: 'Electricity',               tone: 'red'    },
  concept:   { icon: '⌀', label: 'Concept link',       value: 'Reactions → Acids & Bases', tone: 'purple' },
  mastery:   { icon: '↑', label: 'Mastery improving',  value: '+12% this week',            tone: 'green'  },
}

// ─── State machine ────────────────────────────────────────────────────────────

type S = {
  subject:      SubjectId
  contentKey:   number
  transitioning: boolean
  pulseIdx:     number       // -1 = none
  connLine:     boolean
  cards:        Set<CardId>
}

const INIT: S = {
  subject: 'Chemistry', contentKey: 0, transitioning: false,
  pulseIdx: -1, connLine: false, cards: new Set(),
}

type A =
  | { t: 'transit'; v: boolean }
  | { t: 'subject'; v: SubjectId }
  | { t: 'pulse';   v: number }
  | { t: 'conn';    v: boolean }
  | { t: 'card';    id: CardId; show: boolean }
  | { t: 'reset' }

function reduce(s: S, a: A): S {
  switch (a.t) {
    case 'transit': return { ...s, transitioning: a.v }
    case 'subject': return { ...s, subject: a.v, contentKey: s.contentKey + 1 }
    case 'pulse':   return { ...s, pulseIdx: a.v }
    case 'conn':    return { ...s, connLine: a.v }
    case 'card': {
      const next = new Set(s.cards)
      a.show ? next.add(a.id) : next.delete(a.id)
      return { ...s, cards: next }
    }
    case 'reset': return { ...INIT }
  }
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function CurriculumSection() {
  const [s, d]  = useReducer(reduce, INIT)
  const timers  = useRef<ReturnType<typeof setTimeout>[]>([])

  const clear = () => { timers.current.forEach(clearTimeout); timers.current = [] }
  const at    = (ms: number, fn: () => void) => { timers.current.push(setTimeout(fn, ms)) }

  const switchSubject = (sub: SubjectId, t: number) => {
    at(t, () => {
      d({ t: 'transit', v: true })
      d({ t: 'pulse',   v: -1 })
      d({ t: 'conn',    v: false })
    })
    ;(['recommend', 'review', 'concept', 'mastery'] as CardId[]).forEach(id =>
      at(t, () => d({ t: 'card', id, show: false }))
    )
    at(t + 360, () => { d({ t: 'subject', v: sub }); d({ t: 'transit', v: false }) })
  }

  const run = useCallback(() => {
    clear()
    d({ t: 'reset' })
    let t = 0

    // ── Chemistry phase ──
    t += 1100; at(t, () => d({ t: 'pulse', v: 0 }))       // Chemical Reactions pulses
    t += 1000; at(t, () => d({ t: 'conn',  v: true }))    // connection animates 0 → 1
    t += 1100; at(t, () => d({ t: 'card',  id: 'recommend', show: true }))
    t += 1200; at(t, () => d({ t: 'card',  id: 'concept',   show: true }))

    // ── Switch to Physics ──
    t += 1800
    switchSubject('Physics', t)
    t += 360

    // ── Physics phase ──
    t += 900;  at(t, () => d({ t: 'pulse', v: 2 }))       // Electricity pulses
    t += 900;  at(t, () => d({ t: 'card',  id: 'review',  show: true }))
    t += 1500; at(t, () => d({ t: 'card',  id: 'mastery', show: true }))

    // ── Reset ──
    t += 3200
    at(t, () => {
      d({ t: 'transit', v: true })
      d({ t: 'pulse', v: -1 })
    })
    at(t + 360, () => { d({ t: 'reset' }); at(400, run) })
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => { run(); return clear }, [run])

  const chapters = CHAPTERS[s.subject]

  return (
    <section style={D.section} aria-label="Curriculum Intelligence feature">
      <style>{KEYFRAMES}</style>
      <div style={D.glow1} aria-hidden="true" />
      <div style={D.glow2} aria-hidden="true" />

      <div style={D.inner}>

        {/* ── Left: copy ── */}
        <div style={D.copyCol}>
          <span style={D.label}>CURRICULUM INTELLIGENCE</span>
          <h2 style={D.headline}>
            Built around<br />your curriculum.
          </h2>
          <p style={D.copy}>
            Kivo organizes every chapter into a connected learning journey,
            helping students move from concepts to confidence with clear progression.
          </p>
          <ul style={D.bullets}>
            {[
              'Chapter-by-chapter learning paths',
              'Concept-linked progression',
              'Personalised review suggestions',
            ].map(b => (
              <li key={b} style={D.bullet}>
                <span style={D.bulletDot} />
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* ── Right: canvas ── */}
        <div style={D.canvasCol} aria-hidden="true">
          <div style={D.canvasCard}>

            {/* Subject tabs */}
            <div style={D.tabBar} role="presentation">
              {SUBJECTS.map(sub => (
                <div key={sub} style={{ ...D.tab, ...(s.subject === sub ? D.tabActive : {}) }}>
                  {sub}
                </div>
              ))}
            </div>

            {/* Chapter node grid */}
            <div
              key={s.contentKey}
              style={{ ...D.nodeArea, opacity: s.transitioning ? 0 : 1 }}
            >
              {/* Row 1 */}
              <div style={D.nodeRow}>
                <NodeCard data={chapters[0]} pulse={s.pulseIdx === 0} />
                <HConn active={s.connLine} />
                <NodeCard data={chapters[1]} pulse={s.pulseIdx === 1} />
              </div>

              {/* Vertical connector row */}
              <div style={D.vGapRow}>
                <div style={D.vConnWrap}><div style={D.vConnLine} /></div>
                <div style={D.hConnSpacer} />
                <div style={D.vConnWrap}><div style={D.vConnLine} /></div>
              </div>

              {/* Row 2 */}
              <div style={D.nodeRow}>
                <NodeCard data={chapters[2]} pulse={s.pulseIdx === 2} />
                <HConn active={false} />
                <NodeCard data={chapters[3]} pulse={s.pulseIdx === 3} />
              </div>
            </div>

            {/* Insight cards */}
            <div style={D.insightRow}>
              {(Object.keys(INSIGHT) as CardId[]).map(id =>
                s.cards.has(id) ? <InsightCard key={id} id={id} /> : null
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function NodeCard({ data, pulse }: { data: ChapterData; pulse: boolean }) {
  if (!data.title) return <div style={{ flex: 1, minWidth: 0 }} />

  const sc = STATUS[data.status]
  return (
    <div
      className={pulse ? 'ci-pulse' : ''}
      style={{
        ...D.nodeCard,
        borderColor: pulse ? sc.border : P.border,
        transition: 'border-color 400ms ease',
      }}
    >
      <div style={D.nodeTop}>
        <span style={{ ...D.statusChip, background: sc.bg, color: sc.text, borderColor: sc.border }}>
          {sc.label}
        </span>
        <span style={D.nodeMastery}>{data.mastery}%</span>
      </div>
      <div style={D.nodeTitle}>{data.title}</div>
      <div style={D.nodeBar}>
        <div style={{ ...D.nodeBarFill, width: `${data.mastery}%`, backgroundImage: sc.fill }} />
      </div>
    </div>
  )
}

function HConn({ active }: { active: boolean }) {
  return (
    <div style={D.hConn}>
      <div style={{ ...D.hConnLine, width: active ? '100%' : '0%', background: active ? P.amber : P.soft }} />
      {active && <div style={D.hConnDot} className="ci-dot-appear" />}
    </div>
  )
}

function InsightCard({ id }: { id: CardId }) {
  const ins = INSIGHT[id]
  const tc  = TONES[ins.tone]
  return (
    <div style={{ ...D.insightCard, background: tc.bg, borderColor: tc.border }} className="ci-card-in">
      <div style={{ ...D.insightIcon, color: tc.text }}>{ins.icon}</div>
      <div>
        <div style={{ ...D.insightLabel, color: tc.text }}>{ins.label}</div>
        <div style={D.insightValue}>{ins.value}</div>
      </div>
    </div>
  )
}

// ─── Animation keyframes ──────────────────────────────────────────────────────

const KEYFRAMES = `
  @keyframes ci-glow1 {
    from { transform: translate3d(0,0,0) scale(1); }
    to   { transform: translate3d(2%,4%,0) scale(1.1); }
  }
  @keyframes ci-glow2 {
    from { transform: translate3d(0,0,0) scale(1); }
    to   { transform: translate3d(-3%,-2%,0) scale(1.07); }
  }
  @keyframes ci-pulse {
    0%,100% { box-shadow: 0 0 0 0    rgba(230,180,74,0);    }
    50%      { box-shadow: 0 0 0 10px rgba(230,180,74,0.18); }
  }
  @keyframes ci-card-in {
    from { opacity: 0; transform: translateY(8px) scale(0.97); }
    to   { opacity: 1; transform: translateY(0)    scale(1);    }
  }
  @keyframes ci-dot-appear {
    from { opacity: 0; transform: scale(0) translateX(-4px); }
    to   { opacity: 1; transform: scale(1) translateX(0);    }
  }
  .ci-pulse    { animation: ci-pulse 2s ease-in-out infinite; }
  .ci-card-in  { animation: ci-card-in 420ms cubic-bezier(0.16,1,0.3,1) both; }
  .ci-dot-appear { animation: ci-dot-appear 300ms ease-out both; }
`

// ─── Palette + tokens ─────────────────────────────────────────────────────────

const P = {
  bg:       '#06090f',
  panel:    '#0d1221',
  card:     '#0e1525',
  border:   'rgba(255,255,255,0.07)',
  borderMd: 'rgba(255,255,255,0.11)',
  text:     '#e8edf5',
  muted:    '#7a8a9e',
  soft:     '#3e4e62',
  amber:    '#e6b44a',
  amberBg:  'rgba(230,180,74,0.08)',
  amberBd:  'rgba(230,180,74,0.22)',
  green:    '#4ade80',
  greenBg:  'rgba(74,222,128,0.08)',
  greenBd:  'rgba(74,222,128,0.2)',
  red:      '#f87171',
  redBg:    'rgba(248,113,113,0.07)',
  redBd:    'rgba(248,113,113,0.22)',
  purple:   '#a78bfa',
  purpleBg: 'rgba(167,139,250,0.08)',
  purpleBd: 'rgba(167,139,250,0.22)',
}

const STATUS = {
  mastered: { label: 'Mastered',     bg: P.greenBg,  border: P.greenBd, text: P.green,  fill: `linear-gradient(90deg, ${P.green}88, ${P.green})`  },
  progress: { label: 'In Progress',  bg: P.amberBg,  border: P.amberBd, text: P.amber,  fill: `linear-gradient(90deg, ${P.amber}88, ${P.amber})`  },
  review:   { label: 'Review',       bg: P.redBg,    border: P.redBd,   text: P.red,    fill: `linear-gradient(90deg, ${P.red}88,   ${P.red})`    },
  next:     { label: 'Next',         bg: 'rgba(255,255,255,0.025)', border: P.border, text: P.soft, fill: 'rgba(255,255,255,0.08)' },
}

const TONES = {
  amber:  { bg: P.amberBg,  border: P.amberBd,  text: P.amber  },
  red:    { bg: P.redBg,    border: P.redBd,    text: P.red    },
  purple: { bg: P.purpleBg, border: P.purpleBd, text: P.purple },
  green:  { bg: P.greenBg,  border: P.greenBd,  text: P.green  },
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const D: Record<string, CSSProperties> = {

  // Section shell
  section: {
    position: 'relative', zIndex: 1,
    padding: '112px 0 120px',
    borderTop: '1px solid rgba(196,217,255,0.1)',
    background: `
      radial-gradient(circle at 88% 14%, rgba(139,92,246,0.13), transparent 28rem),
      radial-gradient(circle at 8%  84%, rgba(79,209,197,0.07),  transparent 22rem),
      ${P.bg}
    `,
    overflow: 'hidden',
    fontFamily: 'var(--font-geist-sans), Inter, system-ui, sans-serif',
  },
  glow1: {
    position: 'absolute', top: '-10%', right: '-4%', width: '50%', height: '60%',
    pointerEvents: 'none',
    background: 'radial-gradient(circle at 78% 28%, rgba(139,92,246,0.18), transparent 18rem)',
    filter: 'blur(24px)',
    animation: 'ci-glow1 16s ease-in-out infinite alternate',
  },
  glow2: {
    position: 'absolute', bottom: '-8%', left: '-4%', width: '46%', height: '54%',
    pointerEvents: 'none',
    background: 'radial-gradient(circle at 18% 72%, rgba(79,209,197,0.1), transparent 15rem)',
    filter: 'blur(20px)',
    animation: 'ci-glow2 18s ease-in-out infinite alternate',
  },

  // Layout
  inner: {
    position: 'relative', zIndex: 1,
    width: 'min(1180px, calc(100% - 48px))',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1.65fr',
    gap: '72px',
    alignItems: 'center',
  },

  // Copy column
  copyCol: {},
  label: {
    display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 24,
    color: P.purple,
    fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase',
  },
  headline: {
    margin: '0 0 22px',
    fontSize: 'clamp(2.4rem, 3.8vw, 3.6rem)',
    fontWeight: 800, color: P.text, lineHeight: 1.06, letterSpacing: '-0.02em',
  },
  copy: { margin: '0 0 32px', color: P.muted, fontSize: '1rem', lineHeight: 1.72, maxWidth: 420 },
  bullets: { listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 14 },
  bullet:  { display: 'flex', alignItems: 'center', gap: 12, fontSize: '0.95rem', color: '#c8d4e8', lineHeight: 1.4 },
  bulletDot: { width: 6, height: 6, borderRadius: '50%', background: P.purple, flexShrink: 0 },

  // Canvas column
  canvasCol: {},
  canvasCard: {
    background: P.card,
    border: `1px solid ${P.borderMd}`,
    borderRadius: 20,
    padding: '20px',
    boxShadow: '0 40px 100px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)',
    backgroundImage: 'radial-gradient(circle, rgba(196,217,255,0.04) 1px, transparent 1px)',
    backgroundSize: '24px 24px',
    backgroundPosition: '12px 12px',
  },

  // Subject tabs
  tabBar: {
    display: 'flex', gap: 3,
    padding: '3px',
    background: 'rgba(255,255,255,0.02)',
    border: `1px solid ${P.border}`,
    borderRadius: 10,
    marginBottom: 18,
  },
  tab: {
    flex: 1, textAlign: 'center',
    padding: '6px 4px', borderRadius: 7,
    fontSize: 10, fontWeight: 600, color: P.soft,
    transition: 'all 350ms ease',
    cursor: 'default',
    borderWidth: '1px', borderStyle: 'solid', borderColor: 'transparent',
  },
  tabActive: { background: P.amberBg, color: P.amber, borderColor: P.amberBd },

  // Node area
  nodeArea: { transition: 'opacity 360ms ease', marginBottom: 16 },
  nodeRow:  { display: 'flex', alignItems: 'stretch', gap: 0 },

  // Node card
  nodeCard: {
    flex: 1, minWidth: 0,
    background: P.panel,
    borderWidth: '1px', borderStyle: 'solid', borderColor: P.border,
    borderRadius: 12,
    padding: '12px 14px',
  },
  nodeTop: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 7 },
  statusChip: {
    fontSize: 9, fontWeight: 800, letterSpacing: '0.06em',
    borderRadius: 99, padding: '2px 7px',
    borderWidth: '1px', borderStyle: 'solid', borderColor: 'transparent',
  },
  nodeMastery: { fontSize: 10, fontWeight: 700, color: P.muted },
  nodeTitle: { fontSize: 11, fontWeight: 600, color: P.text, lineHeight: 1.35, marginBottom: 8, minHeight: 30 },
  nodeBar:  { height: 3, borderRadius: 99, background: 'rgba(255,255,255,0.06)', overflow: 'hidden' },
  nodeBarFill: { height: '100%', borderRadius: 99, transition: 'width 600ms ease' },

  // Horizontal connector
  hConn: {
    width: 44, flexShrink: 0,
    display: 'flex', alignItems: 'center',
    position: 'relative', overflow: 'visible',
  },
  hConnLine: {
    height: 1,
    transition: 'width 750ms ease, background 300ms ease',
    minWidth: 0,
  },
  hConnDot: {
    position: 'absolute', right: -3,
    width: 7, height: 7, borderRadius: '50%',
    background: P.amber, boxShadow: `0 0 0 4px ${P.amberBg}`,
  },
  hConnSpacer: { width: 44, flexShrink: 0 },

  // Vertical connector gap row
  vGapRow: { display: 'flex', height: 22 },
  vConnWrap: { flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'stretch' },
  vConnLine: { width: 1, background: P.border, flex: 1 },

  // Insight cards
  insightRow: { display: 'flex', flexWrap: 'wrap', gap: 8 },
  insightCard: {
    display: 'flex', alignItems: 'center', gap: 10,
    flex: '1 1 180px',
    padding: '10px 12px', borderRadius: 10,
    borderWidth: '1px', borderStyle: 'solid', borderColor: 'transparent',
  },
  insightIcon: {
    width: 26, height: 26, borderRadius: '50%',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: 13, fontWeight: 800, lineHeight: 1,
    background: 'rgba(255,255,255,0.06)', flexShrink: 0,
  },
  insightLabel: { fontSize: 9, fontWeight: 800, letterSpacing: '0.07em', marginBottom: 2 },
  insightValue: { fontSize: 11, fontWeight: 600, color: P.text, lineHeight: 1.3 },
}
