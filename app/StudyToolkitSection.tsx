'use client'

import { useCallback, useEffect, useReducer, useRef, useState } from 'react'
import type { CSSProperties } from 'react'

// ─── Types ────────────────────────────────────────────────────────────────────

type Tab = 'docs' | 'cards' | 'drills'

type S = {
  activeTab:  Tab
  cycleKey:   number   // increments on every tab switch; resets per-tab animations
  docsPhase:  number   // 0-7: controls which docs lines are visible
  cardFront:  boolean  // true = showing question, false = showing answer
  drillMastery: number // 62 → 74
  drillHint:  boolean
}

const INIT: S = {
  activeTab: 'docs', cycleKey: 0,
  docsPhase: 0, cardFront: true,
  drillMastery: 62, drillHint: false,
}

type A =
  | { t: 'tab';   v: Tab }
  | { t: 'docs';  v: number }
  | { t: 'flip' }
  | { t: 'drill'; mastery?: number; hint?: boolean }
  | { t: 'reset' }

function reduce(s: S, a: A): S {
  switch (a.t) {
    case 'tab':   return { ...INIT, activeTab: a.v, cycleKey: s.cycleKey + 1 }
    case 'docs':  return { ...s, docsPhase: a.v }
    case 'flip':  return { ...s, cardFront: !s.cardFront }
    case 'drill': return { ...s, ...(a.mastery !== undefined ? { drillMastery: a.mastery } : {}), ...(a.hint !== undefined ? { drillHint: a.hint } : {}) }
    case 'reset': return { ...INIT }
  }
}

const TAB_DURATION = 4200   // ms each tab stays visible

// ─── Section ──────────────────────────────────────────────────────────────────

export default function StudyToolkitSection() {
  const [s, d]       = useReducer(reduce, INIT)
  const timers       = useRef<ReturnType<typeof setTimeout>[]>([])
  const intervalRef  = useRef<ReturnType<typeof setInterval> | null>(null)
  const activeTabRef = useRef<Tab>('docs')
  const [paused, setPaused] = useState(false)

  // Keep ref in sync so the interval closure can read current tab
  useEffect(() => { activeTabRef.current = s.activeTab }, [s.activeTab])

  const clearTimers = useCallback(() => { timers.current.forEach(clearTimeout); timers.current = [] }, [])
  const at = useCallback((ms: number, fn: () => void) => { timers.current.push(setTimeout(fn, ms)) }, [])

  // Per-tab animation sequences
  const runDocs = useCallback(() => {
    at(100,  () => d({ t: 'docs', v: 1 }))  // essay text + header
    at(750,  () => d({ t: 'docs', v: 2 }))  // issue 1 underline
    at(1300, () => d({ t: 'docs', v: 3 }))  // issue 2 underline + suggestions panel
    at(1700, () => d({ t: 'docs', v: 4 }))  // suggestion card 1
    at(2300, () => d({ t: 'docs', v: 5 }))  // suggestion card 2
    at(3000, () => d({ t: 'docs', v: 6 }))  // source chip
  }, [at])

  const runCards = useCallback(() => {
    at(1900, () => d({ t: 'flip' }))
  }, [at])

  const runDrills = useCallback(() => {
    at(700,  () => d({ t: 'drill', hint: true }))
    at(1600, () => {
      // Animate mastery digit by digit
      for (let v = 63; v <= 74; v++) {
        at((v - 63) * 80, () => d({ t: 'drill', mastery: v }))
      }
    })
  }, [at])

  // Run per-tab sequence when tab changes
  useEffect(() => {
    clearTimers()
    if (s.activeTab === 'docs')   runDocs()
    if (s.activeTab === 'cards')  runCards()
    if (s.activeTab === 'drills') runDrills()
    return clearTimers
  }, [clearTimers, runCards, runDocs, runDrills, s.cycleKey, s.activeTab])

  // Auto-rotate
  useEffect(() => {
    if (paused) { if (intervalRef.current) clearInterval(intervalRef.current); return }
    const ORDER: Tab[] = ['docs', 'cards', 'drills']
    intervalRef.current = setInterval(() => {
      const next = ORDER[(ORDER.indexOf(activeTabRef.current) + 1) % ORDER.length]
      d({ t: 'tab', v: next })
    }, TAB_DURATION)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [paused])

  const switchTab = (tab: Tab) => {
    setPaused(true)
    d({ t: 'tab', v: tab })
    // Resume auto-rotate after 12s of inactivity
    setTimeout(() => setPaused(false), 12000)
  }

  return (
    <section style={D.section} aria-labelledby="toolkit-heading">
      <style>{KEYFRAMES}</style>
      <div style={D.glow} aria-hidden="true" />

      <div style={D.inner}>
        {/* Heading */}
        <div style={D.headBlock}>
          <span style={D.label}>STUDY TOOLKIT</span>
          <h2 id="toolkit-heading" style={D.headline}>More ways to learn.</h2>
          <p style={D.sub}>
            Write, revise, and practice with AI grounded in your textbooks.
          </p>
        </div>

        {/* Product frame */}
        <div style={D.frame} aria-hidden="true">

          {/* Tab bar */}
          <div style={D.tabBar} role="tablist">
            {([
              { id: 'docs',   label: 'Kivo Docs'      },
              { id: 'cards',  label: 'Flashcards'     },
              { id: 'drills', label: 'Concept Drills' },
            ] as { id: Tab; label: string }[]).map(({ id, label }) => (
              <button
                key={id}
                role="tab"
                aria-selected={s.activeTab === id}
                style={{ ...D.tab, ...(s.activeTab === id ? D.tabActive : {}) }}
                onClick={() => switchTab(id)}
              >
                {label}
                {s.activeTab === id && (
                  <span key={s.cycleKey} className="tk-prog" style={D.tabProg} />
                )}
              </button>
            ))}
          </div>

          {/* Content pane */}
          <div style={D.pane}>
            {s.activeTab === 'docs'   && <DocsPane   phase={s.docsPhase} key={s.cycleKey} />}
            {s.activeTab === 'cards'  && <CardsPane  front={s.cardFront} key={s.cycleKey} />}
            {s.activeTab === 'drills' && <DrillsPane mastery={s.drillMastery} hint={s.drillHint} key={s.cycleKey} />}
          </div>

          {/* Small label */}
          <div style={D.frameLabel}>
            {s.activeTab === 'docs'   && 'Write better essays with AI grounded in your curriculum.'}
            {s.activeTab === 'cards'  && 'Memorize formulas, definitions, and key terms faster.'}
            {s.activeTab === 'drills' && 'Practice weak concepts until they click.'}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Docs pane ────────────────────────────────────────────────────────────────

const DOC_SUGGESTIONS = [
  {
    icon: '⚠',
    title: 'Define before claiming',
    body: 'Your textbook introduces "speed" and "velocity" separately in Ch.1 §1.2. Add their definitions before making this comparison.',
    tone: 'warn' as const,
  },
  {
    icon: '⚠',
    title: 'Strengthen the claim',
    body: 'Replace "quite different" with the textbook\'s formal distinction. Vague language weakens exam answers.',
    tone: 'warn' as const,
  },
]

function DocsPane({ phase }: { phase: number }) {
  return (
    <div style={D.docsWrap}>
      {/* Toolbar */}
      <div style={D.toolbar}>
        {['B', 'I', 'U', '|', '≡', '≣', '|', 'H₁', 'H₂', '"'].map((t, i) => (
          <div key={i} style={t === '|' ? D.toolSep : D.toolBtn}>{t !== '|' ? t : ''}</div>
        ))}
        {phase >= 1 && (
          <div style={D.writingScore} className="tk-reveal">
            <span style={D.scoreLabel}>Writing score</span>
            <span style={D.scorePill}>Good ↗</span>
          </div>
        )}
      </div>

      {/* Two-column body */}
      <div style={D.docColumns}>

        {/* Left: essay */}
        <div style={D.essayCol}>
          {phase >= 1 && (
            <>
              <div style={D.essayTitle} className="tk-reveal">
                Speed vs Velocity — Essay Draft
              </div>
              <div style={D.essayBreadcrumb} className="tk-reveal">
                Science · Ch.1 Motion · Essay
              </div>
              <div style={D.essayBody} className="tk-reveal">
                <span>Speed and velocity are </span>
                <span style={phase >= 2 ? D.issueSpan : {}}>often used interchangeably</span>
                <span> in everyday life — but in physics, they are </span>
                <span style={phase >= 3 ? D.issueSpan : {}}>quite different</span>
                <span>. A car moving north at 60 km/h and a car moving south at 60 km/h have the same speed. Their velocities, however, are opposite.</span>
              </div>
              <div style={{ ...D.essayBody, marginTop: 10, opacity: 0.5 }} className="tk-reveal">
                When studying motion, it is important to note that...
                <span style={D.cursorBlink}>|</span>
              </div>
            </>
          )}
        </div>

        {/* Right: suggestions panel */}
        {phase >= 3 && (
          <div style={D.suggestionsCol} className="tk-reveal">
            <div style={D.suggestHead}>
              <span style={D.suggestHeadIcon}>✦</span>
              Kivo suggestions
            </div>

            {DOC_SUGGESTIONS.map((sg, i) =>
              phase >= 4 + i ? (
                <div key={i} style={D.suggestCard} className="tk-reveal">
                  <div style={D.suggestCardTop}>
                    <span style={D.suggestWarnIcon}>{sg.icon}</span>
                    <span style={D.suggestCardTitle}>{sg.title}</span>
                  </div>
                  <div style={D.suggestCardBody}>{sg.body}</div>
                  <div style={D.applyBtn}>Apply fix</div>
                </div>
              ) : null
            )}

            {phase >= 6 && (
              <div style={D.sourceChip} className="tk-reveal tk-ai-glow">
                <span>✓</span>
                Source: Ch.1 — Motion &amp; Measurement
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

// ─── Cards pane ───────────────────────────────────────────────────────────────

function CardsPane({ front }: { front: boolean }) {
  return (
    <div style={D.cardsWrap}>
      {/* Stack shadows */}
      <div style={D.cardShadow2} />
      <div style={D.cardShadow1} />

      {/* Main card */}
      <div style={D.card}>
        <div style={D.cardSide}>
          <div style={D.cardEyebrow}>{front ? 'QUESTION' : 'ANSWER'}</div>
          <div style={{ ...D.cardText, ...(front ? {} : D.cardTextAnswer) }} key={String(front)} className="tk-fade">
            {front
              ? 'What is displacement?'
              : 'The shortest distance from the starting point to the final position, including direction.'
            }
          </div>
          {!front && (
            <div style={D.conceptTag} className="tk-reveal">Speed &amp; Motion — Chapter 1</div>
          )}
        </div>
      </div>

      {/* Controls */}
      <div style={D.cardControls}>
        <div style={D.cardCtrlLeft}>
          <div style={D.btnKnow}>✓ Know it</div>
          <div style={D.btnReview}>↺ Review again</div>
        </div>
        <div style={D.cardProgress}>
          <span style={D.cardProgressNum}>4</span>
          <span style={D.cardProgressOf}>/</span>
          <span style={D.cardProgressTotal}>12</span>
        </div>
      </div>
    </div>
  )
}

// ─── Drills pane ──────────────────────────────────────────────────────────────

function DrillsPane({ mastery, hint }: { mastery: number; hint: boolean }) {
  return (
    <div style={D.drillWrap}>
      <div style={D.drillTitle}>Concept Drill: Speed vs Velocity</div>

      <div style={D.drillQuestion} className="tk-reveal">
        <div style={D.drillQLabel}>QUESTION</div>
        A student walks 20 m east and then returns 10 m west.
        What is the student&apos;s displacement?
      </div>

      {hint && (
        <div style={D.drillHint} className="tk-reveal">
          <span style={D.hintIcon}>💡</span>
          <span>Think about the final position relative to the starting point.</span>
        </div>
      )}

      <div style={D.drillMasteryRow}>
        <span style={D.drillMasteryLabel}>Concept Mastery</span>
        <span style={D.drillMasteryPct}>{mastery}%</span>
      </div>
      <div style={D.drillMasteryTrack}>
        <div style={{ ...D.drillMasteryFill, width: `${mastery}%` }} />
      </div>

      <div style={D.drillBtn} className="tk-reveal">Start solving</div>
    </div>
  )
}

// ─── Keyframes ────────────────────────────────────────────────────────────────

const KEYFRAMES = `
  @keyframes tk-reveal {
    from { opacity: 0; transform: translateY(5px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes tk-fade {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes tk-ai-glow {
    0%,100% { box-shadow: 0 0 0 0 rgba(230,180,74,0); }
    50%      { box-shadow: 0 0 0 6px rgba(230,180,74,0.18); }
  }
  @keyframes tk-prog {
    from { width: 0%; }
    to   { width: 100%; }
  }
  @keyframes tk-glow {
    from { transform: translate3d(0,0,0) scale(1); }
    to   { transform: translate3d(1%,2%,0) scale(1.08); }
  }
  @keyframes tk-blink {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0; }
  }
  .tk-reveal  { animation: tk-reveal 320ms ease both; }
  .tk-fade    { animation: tk-fade   280ms ease both; }
  .tk-ai-glow { animation: tk-ai-glow 2.4s ease-in-out infinite; }
  .tk-prog    { animation: tk-prog ${TAB_DURATION}ms linear forwards; }
  .tk-blink   { animation: tk-blink 1s step-end infinite; }

  @media (prefers-reduced-motion: reduce) {
    .tk-reveal, .tk-fade, .tk-ai-glow, .tk-prog { animation: none !important; opacity: 1 !important; }
  }
`

// ─── Palette ──────────────────────────────────────────────────────────────────

const P = {
  bg:       '#070a14',
  panel:    '#0d1221',
  card:     '#101828',
  cardLt:   '#131f30',
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
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const D: Record<string, CSSProperties> = {

  // Section
  section: {
    position: 'relative', zIndex: 1,
    padding: '112px 0 128px',
    borderTop: '1px solid rgba(196,217,255,0.1)',
    background: `
      radial-gradient(circle at 50% -8%, rgba(230,180,74,0.09), transparent 28rem),
      radial-gradient(circle at 18% 90%, rgba(139,92,246,0.06), transparent 22rem),
      ${P.bg}
    `,
    overflow: 'hidden',
    fontFamily: 'var(--font-geist-sans), Inter, system-ui, sans-serif',
  },
  glow: {
    position: 'absolute', top: '-12%', left: '50%', transform: 'translateX(-50%)',
    width: '70%', height: '50%', pointerEvents: 'none',
    background: 'radial-gradient(circle at 50% 30%, rgba(230,180,74,0.1), transparent 18rem)',
    filter: 'blur(28px)',
    animation: 'tk-glow 18s ease-in-out infinite alternate',
  },

  inner: {
    position: 'relative', zIndex: 1,
    width: 'min(1180px, calc(100% - 48px))',
    margin: '0 auto',
  },

  // Heading block
  headBlock: {
    textAlign: 'center', marginBottom: 52,
  },
  label: {
    display: 'inline-block', marginBottom: 18,
    color: P.amber,
    fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase',
  },
  headline: {
    margin: '0 0 18px',
    fontSize: 'clamp(2.2rem, 3.6vw, 3.4rem)',
    fontWeight: 800, color: P.text, lineHeight: 1.06, letterSpacing: '-0.02em',
  },
  sub: {
    margin: '0 auto',
    maxWidth: 560, color: P.muted, fontSize: '1rem', lineHeight: 1.72,
  },

  // Product frame
  frame: {
    maxWidth: 840, width: '100%',
    margin: '0 auto',
    background: P.card,
    border: `1px solid ${P.borderMd}`,
    borderRadius: 20,
    overflow: 'hidden',
    boxShadow: '0 40px 100px rgba(0,0,0,0.52), 0 0 0 1px rgba(255,255,255,0.04)',
  },

  // Tab bar
  tabBar: {
    display: 'flex',
    borderBottom: `1px solid ${P.border}`,
    background: '#090d17',
  },
  tab: {
    position: 'relative',
    flex: 1, padding: '14px 8px',
    textAlign: 'center', cursor: 'pointer',
    fontSize: 13, fontWeight: 600, color: P.soft,
    background: 'none', border: 'none',
    transition: 'color 250ms ease',
    overflow: 'hidden',
    fontFamily: 'inherit',
  },
  tabActive: { color: P.amber },
  tabProg: {
    position: 'absolute', bottom: 0, left: 0,
    height: 2, background: P.amber,
    borderRadius: 99,
  },

  // Pane — fixed height prevents layout shift when tabs switch
  pane: { height: 380, overflow: 'hidden', padding: '28px 32px 24px' },

  // Frame bottom label
  frameLabel: {
    borderTop: `1px solid ${P.border}`,
    padding: '11px 32px',
    fontSize: 11, color: P.soft, fontWeight: 500,
    background: '#090d17',
  },

  // ── Docs ──────────────────────────────────────────────────────────────────
  docsWrap: { display: 'flex', flexDirection: 'column', height: '100%' },

  toolbar: {
    display: 'flex', alignItems: 'center', gap: 3,
    padding: '6px 0 12px',
    borderBottom: `1px solid ${P.border}`,
    marginBottom: 18,
  },
  toolBtn: {
    width: 26, height: 26, borderRadius: 5,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: 11, fontWeight: 700, color: P.soft,
    background: 'rgba(255,255,255,0.03)',
    border: `1px solid ${P.border}`,
    cursor: 'default',
  },
  toolSep: { width: 1, height: 16, background: P.border, margin: '0 4px', flexShrink: 0 },
  writingScore: { marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 6 },
  scoreLabel:   { fontSize: 10, color: P.soft },
  scorePill: {
    fontSize: 10, fontWeight: 700, color: P.green,
    background: P.greenBg, border: `1px solid ${P.greenBd}`,
    borderRadius: 99, padding: '2px 8px',
  },

  // Two-column layout
  docColumns: { display: 'flex', gap: 18, flex: 1, minHeight: 0 },
  essayCol: { flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 8 },

  essayTitle: {
    fontSize: 16, fontWeight: 800, color: P.text,
    letterSpacing: '-0.01em', lineHeight: 1.25,
  },
  essayBreadcrumb: { fontSize: 10, color: P.soft, marginBottom: 4 },
  essayBody: {
    fontSize: 13, color: P.muted, lineHeight: 1.72,
  },
  issueSpan: {
    borderBottom: '2px solid rgba(248,113,113,0.7)',
    color: '#fca5a5',
    transition: 'border-color 300ms ease, color 300ms ease',
  },
  cursorBlink: { animation: 'tk-blink 1s step-end infinite', marginLeft: 1 },

  // Suggestions panel
  suggestionsCol: {
    width: 216, flexShrink: 0,
    display: 'flex', flexDirection: 'column', gap: 8,
  },
  suggestHead: {
    display: 'flex', alignItems: 'center', gap: 6,
    fontSize: 10, fontWeight: 800, letterSpacing: '0.08em',
    color: P.amber, textTransform: 'uppercase', marginBottom: 2,
  },
  suggestHeadIcon: { fontSize: 11 },
  suggestCard: {
    background: 'rgba(255,255,255,0.025)',
    border: `1px solid ${P.border}`,
    borderRadius: 10, padding: '10px 12px',
  },
  suggestCardTop: { display: 'flex', alignItems: 'center', gap: 6, marginBottom: 5 },
  suggestWarnIcon: { fontSize: 11, color: '#f87171' },
  suggestCardTitle: { fontSize: 11, fontWeight: 700, color: P.text },
  suggestCardBody: { fontSize: 11, color: P.muted, lineHeight: 1.55, marginBottom: 8 },
  applyBtn: {
    display: 'inline-flex', alignItems: 'center',
    fontSize: 10, fontWeight: 700, color: P.amber,
    background: P.amberBg, border: `1px solid ${P.amberBd}`,
    borderRadius: 99, padding: '3px 9px', cursor: 'default',
  },
  sourceChip: {
    display: 'flex', alignItems: 'center', gap: 6,
    fontSize: 10, fontWeight: 700, color: P.green,
    background: P.greenBg, border: `1px solid ${P.greenBd}`,
    borderRadius: 8, padding: '8px 10px',
  },

  // ── Flashcards ────────────────────────────────────────────────────────────
  cardsWrap: {
    display: 'flex', flexDirection: 'column', alignItems: 'center',
    gap: 20, position: 'relative', paddingTop: 16,
  },
  cardShadow2: {
    position: 'absolute', top: 28, left: '50%', transform: 'translateX(-50%)',
    width: '80%', height: 180,
    background: P.panel, border: `1px solid ${P.border}`,
    borderRadius: 16, zIndex: 1,
  },
  cardShadow1: {
    position: 'absolute', top: 18, left: '50%', transform: 'translateX(-50%)',
    width: '90%', height: 190,
    background: P.cardLt, border: `1px solid ${P.border}`,
    borderRadius: 16, zIndex: 2,
  },
  card: {
    position: 'relative', zIndex: 3,
    width: '100%', minHeight: 200,
    background: `linear-gradient(145deg, #141e30, #111827)`,
    border: `1px solid ${P.amberBd}`,
    borderRadius: 16,
    padding: '28px 32px',
    boxShadow: `0 16px 48px rgba(0,0,0,0.4), 0 0 0 1px ${P.amberBg}`,
  },
  cardSide: { display: 'flex', flexDirection: 'column', gap: 14 },
  cardEyebrow: {
    fontSize: 9, fontWeight: 800, letterSpacing: '0.12em',
    color: P.amber,
  },
  cardText: {
    fontSize: 18, fontWeight: 700, color: P.text, lineHeight: 1.4,
  },
  cardTextAnswer: {
    fontSize: 15, fontWeight: 500, color: P.muted, lineHeight: 1.65,
  },
  conceptTag: {
    display: 'inline-flex', alignItems: 'center',
    padding: '4px 10px', borderRadius: 99,
    fontSize: 10, fontWeight: 700, color: P.soft,
    background: 'rgba(255,255,255,0.04)', border: `1px solid ${P.border}`,
  },

  cardControls: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    width: '100%', paddingTop: 4,
  },
  cardCtrlLeft: { display: 'flex', gap: 8 },
  btnKnow: {
    padding: '8px 14px', borderRadius: 8,
    fontSize: 11, fontWeight: 700, color: P.green,
    background: P.greenBg, border: `1px solid ${P.greenBd}`,
    cursor: 'default',
  },
  btnReview: {
    padding: '8px 14px', borderRadius: 8,
    fontSize: 11, fontWeight: 700, color: P.muted,
    background: 'rgba(255,255,255,0.03)', border: `1px solid ${P.border}`,
    cursor: 'default',
  },
  cardProgress: { display: 'flex', alignItems: 'baseline', gap: 2 },
  cardProgressNum:   { fontSize: 22, fontWeight: 800, color: P.text },
  cardProgressOf:    { fontSize: 14, color: P.soft },
  cardProgressTotal: { fontSize: 14, color: P.soft },

  // ── Drills ────────────────────────────────────────────────────────────────
  drillWrap: { display: 'flex', flexDirection: 'column', gap: 18 },

  drillTitle: {
    fontSize: 17, fontWeight: 800, color: P.text,
    letterSpacing: '-0.01em', lineHeight: 1.3,
  },
  drillQuestion: {
    background: 'rgba(255,255,255,0.025)',
    border: `1px solid ${P.border}`,
    borderRadius: 12, padding: '16px 20px',
    fontSize: 14, color: P.muted, lineHeight: 1.62,
  },
  drillQLabel: {
    fontSize: 9, fontWeight: 800, letterSpacing: '0.1em',
    color: P.amber, marginBottom: 8,
  },

  drillHint: {
    display: 'flex', alignItems: 'flex-start', gap: 10,
    background: 'rgba(230,180,74,0.05)', border: `1px solid rgba(230,180,74,0.15)`,
    borderRadius: 10, padding: '12px 14px',
    fontSize: 12, color: P.muted, lineHeight: 1.55,
  },
  hintIcon: { fontSize: 14, flexShrink: 0 },

  drillMasteryRow: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  },
  drillMasteryLabel: { fontSize: 11, fontWeight: 600, color: P.soft },
  drillMasteryPct:   { fontSize: 13, fontWeight: 800, color: P.green },
  drillMasteryTrack: {
    height: 5, borderRadius: 99,
    background: 'rgba(255,255,255,0.06)', overflow: 'hidden',
  },
  drillMasteryFill: {
    height: '100%', borderRadius: 99,
    background: `linear-gradient(90deg, ${P.amber}, ${P.green})`,
    transition: 'width 180ms ease',
  },

  drillBtn: {
    display: 'inline-flex', alignItems: 'center',
    padding: '11px 22px', borderRadius: 10,
    fontSize: 13, fontWeight: 700,
    color: '#0b0f1a',
    background: `linear-gradient(135deg, ${P.amber}, #c89630)`,
    border: `1px solid rgba(230,180,74,0.5)`,
    cursor: 'default', alignSelf: 'flex-start',
  },
}
