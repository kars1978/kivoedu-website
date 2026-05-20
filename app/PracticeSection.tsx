'use client'

import { useEffect, useReducer, useRef, useCallback } from 'react'
import type { CSSProperties } from 'react'

// ─── Fake data ────────────────────────────────────────────────────────────────

const QUESTION = 'Which type of reaction forms a single product from two or more reactants?'

const OPTIONS = [
  'Decomposition reaction',
  'Combination reaction',
  'Displacement reaction',
  'Neutralization reaction',
]

const WRONG_IDX   = 0
const CORRECT_IDX = 1

const WRONG_FB   = 'Not quite — decomposition breaks one compound into simpler substances. Think of it as splitting, not joining.'
const CORRECT_FB = 'Correct! A combination reaction joins two or more reactants to form a single new product. For example: 2Mg + O₂ → 2MgO.'

const CONCEPTS = [
  { label: 'Combination reactions',    before: 58, after: 84, tag: 'improved' },
  { label: 'Decomposition reactions',  before: 71, after: 71, tag: null },
  { label: 'Types of reactions',       before: 63, after: 74, tag: 'improved' },
  { label: 'Chemical equations',       before: 80, after: 80, tag: null },
]

const MASTERY_BEFORE = 72
const MASTERY_AFTER  = 84

// ─── State machine ────────────────────────────────────────────────────────────

type Phase =
  | 'question'   // showing blank question
  | 'wrong'      // wrong answer selected, feedback showing
  | 'retry'      // retrying: question re-shown, options reset
  | 'correct'    // correct answer + feedback
  | 'mastery'    // mastery card updating
  | 'done'       // full display before reset

type S = {
  phase:        Phase
  selected:     number | null  // which option index is visually selected
  mastery:      number
  conceptsDone: boolean
  sparkle:      boolean
}

const INIT: S = {
  phase: 'question', selected: null,
  mastery: MASTERY_BEFORE, conceptsDone: false, sparkle: false,
}

type A =
  | { t: 'select';   i: number }
  | { t: 'phase';    v: Phase }
  | { t: 'mastery';  v: number }
  | { t: 'concepts'; v: boolean }
  | { t: 'sparkle';  v: boolean }
  | { t: 'reset' }

function reduce(s: S, a: A): S {
  switch (a.t) {
    case 'select':   return { ...s, selected: a.i }
    case 'phase':    return { ...s, phase: a.v }
    case 'mastery':  return { ...s, mastery: a.v }
    case 'concepts': return { ...s, conceptsDone: a.v }
    case 'sparkle':  return { ...s, sparkle: a.v }
    case 'reset':    return { ...INIT }
  }
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function PracticeSection() {
  const [s, d]  = useReducer(reduce, INIT)
  const timers  = useRef<ReturnType<typeof setTimeout>[]>([])

  const clear = () => { timers.current.forEach(clearTimeout); timers.current = [] }
  const at    = (ms: number, fn: () => void) => { timers.current.push(setTimeout(fn, ms)) }

  const run = useCallback(() => {
    clear()
    d({ t: 'reset' })
    let t = 0

    // Pause on question
    t += 1400

    // Select wrong answer A
    t += 600;  at(t, () => d({ t: 'select', i: WRONG_IDX }))
    t += 700;  at(t, () => d({ t: 'phase', v: 'wrong' }))

    // Show wrong feedback, then retry
    t += 2600; at(t, () => { d({ t: 'phase', v: 'retry' }); d({ t: 'select', i: -1 }) })

    // Select correct answer B
    t += 900;  at(t, () => d({ t: 'select', i: CORRECT_IDX }))
    t += 700;  at(t, () => d({ t: 'phase', v: 'correct' }))

    // Animate mastery score up
    t += 1800; at(t, () => d({ t: 'phase', v: 'mastery' }))

    // Increment mastery score digit by digit
    for (let v = MASTERY_BEFORE + 1; v <= MASTERY_AFTER; v++) {
      const delay = t + (v - MASTERY_BEFORE) * 90
      at(delay, () => d({ t: 'mastery', v }))
    }
    t += (MASTERY_AFTER - MASTERY_BEFORE) * 90

    // Sparkle + concepts updated
    t += 300;  at(t, () => d({ t: 'sparkle', v: true }))
    t += 200;  at(t, () => d({ t: 'concepts', v: true }))
    t += 800;  at(t, () => d({ t: 'phase', v: 'done' }))
    t += 600;  at(t, () => d({ t: 'sparkle', v: false }))

    // Pause then loop
    t += 3200; at(t, () => at(600, run))
  }, [])

  useEffect(() => { run(); return clear }, [run])

  const { phase, selected, mastery, conceptsDone, sparkle } = s

  const showWrongFB   = phase === 'wrong'
  const showCorrectFB = phase === 'correct' || phase === 'mastery' || phase === 'done'
  const showMastery   = phase === 'mastery' || phase === 'done'
  const inRetry       = phase === 'retry'

  return (
    <section style={D.section} aria-label="Practice and mastery feature">
      <style>{KEYFRAMES}</style>

      {/* Ambient glows */}
      <div style={D.glow1} aria-hidden="true" />
      <div style={D.glow2} aria-hidden="true" />

      <div style={D.inner}>

        {/* ── Left: animated demo ── */}
        <div style={D.demoCol}>
          <div style={D.demoStack} aria-hidden="true">

            {/* ── Quiz card ── */}
            <div style={D.quizCard}>
              <div style={D.quizMeta}>
                <span style={D.quizBadge}>Chapter Quiz</span>
                <span style={D.quizProg}>Q1 of 5</span>
                {inRetry && <span style={D.retryBadge}>↺ Retry</span>}
              </div>

              <div style={D.question}>{QUESTION}</div>

              <div style={D.options}>
                {OPTIONS.map((opt, i) => {
                  const letter   = String.fromCharCode(65 + i)
                  const isWrong  = showWrongFB   && selected === i
                  const isRight  = showCorrectFB && i === CORRECT_IDX
                  const isChosen = !showWrongFB && !showCorrectFB && selected === i
                  const dimmed   = (showWrongFB || showCorrectFB) && !isWrong && !isRight

                  return (
                    <div
                      key={i}
                      style={{
                        ...D.option,
                        ...(isChosen  ? D.optionChosen  : {}),
                        ...(isWrong   ? D.optionWrong   : {}),
                        ...(isRight   ? D.optionRight   : {}),
                        ...(dimmed    ? D.optionDimmed  : {}),
                      }}
                    >
                      <div style={{
                        ...D.optLetter,
                        ...(isChosen ? D.optLetterChosen : {}),
                        ...(isWrong  ? D.optLetterWrong  : {}),
                        ...(isRight  ? D.optLetterRight  : {}),
                      }}>
                        {isWrong  ? '✕' : isRight ? '✓' : letter}
                      </div>
                      <span style={D.optText}>{opt}</span>
                    </div>
                  )
                })}
              </div>

              {/* Wrong feedback */}
              {showWrongFB && (
                <div style={D.wrongFB} className="pm-fade-in">
                  <span style={D.fbIcon}>✕</span>
                  <div>
                    <div style={D.fbTitle}>Not quite</div>
                    <div style={D.fbText}>{WRONG_FB}</div>
                    <div style={D.retryHint}>
                      Retry the question with this in mind →
                    </div>
                  </div>
                </div>
              )}

              {/* Correct feedback */}
              {showCorrectFB && (
                <div style={D.correctFB} className="pm-fade-in">
                  <span style={D.fbIconGreen}>✓</span>
                  <div>
                    <div style={D.fbTitleGreen}>Correct!</div>
                    <div style={D.fbText}>{CORRECT_FB}</div>
                  </div>
                </div>
              )}
            </div>

            {/* ── Mastery card ── */}
            <div style={{
              ...D.masteryCard,
              ...(showMastery ? D.masteryCardVisible : {}),
              ...(sparkle     ? D.masteryCardSparkle : {}),
            }}>
              <div style={D.masteryLeft}>
                <div style={D.masteryLabel}>Chapter Mastery</div>
                <div style={D.masteryScore}>
                  <span style={{ ...D.masteryNum, ...(sparkle ? D.masteryNumGlow : {}) }}>
                    {mastery}
                  </span>
                  <span style={D.masteryPct}>%</span>
                </div>
                <div style={D.masteryBar}>
                  <div style={{ ...D.masteryFill, width: `${mastery}%` }} />
                </div>
                <div style={D.masteryDelta}>
                  {showMastery && mastery > MASTERY_BEFORE && (
                    <span style={D.deltaChip} className="pm-pop-in">
                      +{mastery - MASTERY_BEFORE}% this session
                    </span>
                  )}
                </div>
              </div>

              <div style={D.conceptList}>
                <div style={D.conceptListTitle}>Concept Progress</div>
                {CONCEPTS.map((c, i) => {
                  const improved = conceptsDone && c.tag === 'improved'
                  const score    = conceptsDone ? c.after : c.before
                  return (
                    <div key={i} style={D.conceptRow}>
                      <div style={D.conceptMeta}>
                        <span style={D.conceptLabel}>{c.label}</span>
                        {improved && (
                          <span style={D.improvedBadge} className="pm-pop-in">↑ improved</span>
                        )}
                      </div>
                      <div style={D.conceptBar}>
                        <div style={{
                          ...D.conceptFill,
                          width: `${score}%`,
                          ...(improved ? D.conceptFillGreen : {}),
                        }} />
                      </div>
                      <span style={{ ...D.conceptScore, ...(improved ? D.conceptScoreGreen : {}) }}>
                        {score}%
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>

          </div>
        </div>

        {/* ── Right: copy ── */}
        <div style={D.copyCol}>
          <span style={D.label}>PRACTICE + MASTERY</span>
          <h2 style={D.headline}>
            Practice until<br />concepts click.
          </h2>
          <p style={D.copy}>
            Kivo turns every chapter into focused practice with instant feedback,
            retries, and mastery signals that show students exactly where
            they&apos;re improving.
          </p>
          <ul style={D.bullets}>
            {[
              'Instant feedback after every answer',
              'Retry with guidance, not guessing',
              'Track mastery across each concept',
            ].map(b => (
              <li key={b} style={D.bullet}>
                <span style={D.bulletDot} />
                {b}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  )
}

// ─── Keyframes ────────────────────────────────────────────────────────────────

const KEYFRAMES = `
  @keyframes pm-glow1 {
    from { transform: translate3d(0,0,0) scale(1); }
    to   { transform: translate3d(-2%,3%,0) scale(1.1); }
  }
  @keyframes pm-glow2 {
    from { transform: translate3d(0,0,0) scale(1); }
    to   { transform: translate3d(3%,-2%,0) scale(1.07); }
  }
  @keyframes pm-fade-in {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes pm-pop-in {
    0%   { opacity: 0; transform: scale(0.8); }
    60%  { transform: scale(1.05); }
    100% { opacity: 1; transform: scale(1); }
  }
  @keyframes pm-sparkle {
    0%,100% { box-shadow: 0 0 0 0 rgba(74,222,128,0); }
    50%      { box-shadow: 0 0 0 8px rgba(74,222,128,0.18), 0 0 28px rgba(74,222,128,0.08); }
  }
  @keyframes pm-num-glow {
    0%,100% { text-shadow: none; }
    50%      { text-shadow: 0 0 20px rgba(74,222,128,0.5); }
  }
  .pm-fade-in { animation: pm-fade-in 350ms ease both; }
  .pm-pop-in  { animation: pm-pop-in  400ms cubic-bezier(0.34,1.56,0.64,1) both; }
`

// ─── Palette ──────────────────────────────────────────────────────────────────

const P = {
  bg:      '#060910',
  panel:   '#0d1221',
  card:    '#101828',
  border:  'rgba(255,255,255,0.07)',
  borderM: 'rgba(255,255,255,0.11)',
  text:    '#e8edf5',
  muted:   '#7a8a9e',
  soft:    '#3e4e62',
  amber:   '#e6b44a',
  amberBg: 'rgba(230,180,74,0.08)',
  amberBd: 'rgba(230,180,74,0.22)',
  green:   '#4ade80',
  greenBg: 'rgba(74,222,128,0.08)',
  greenBd: 'rgba(74,222,128,0.22)',
  red:     '#f87171',
  redBg:   'rgba(248,113,113,0.08)',
  redBd:   'rgba(248,113,113,0.25)',
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const D: Record<string, CSSProperties> = {

  // Section shell
  section: {
    position: 'relative', zIndex: 1,
    padding: '112px 0 120px',
    borderTop: '1px solid rgba(196,217,255,0.1)',
    background: `
      radial-gradient(circle at 10% 20%, rgba(139,92,246,0.1), transparent 24rem),
      radial-gradient(circle at 88% 78%, rgba(79,209,197,0.08), transparent 20rem),
      ${P.bg}
    `,
    overflow: 'hidden',
    fontFamily: 'var(--font-geist-sans), Inter, system-ui, sans-serif',
  },
  glow1: {
    position: 'absolute', top: '-10%', left: '-5%', width: '55%', height: '60%',
    pointerEvents: 'none',
    background: 'radial-gradient(circle at 30% 40%, rgba(139,92,246,0.14), transparent 18rem)',
    filter: 'blur(24px)',
    animation: 'pm-glow1 15s ease-in-out infinite alternate',
  },
  glow2: {
    position: 'absolute', bottom: '-10%', right: '-5%', width: '50%', height: '55%',
    pointerEvents: 'none',
    background: 'radial-gradient(circle at 70% 60%, rgba(74,222,128,0.09), transparent 16rem)',
    filter: 'blur(20px)',
    animation: 'pm-glow2 13s ease-in-out infinite alternate',
  },

  inner: {
    position: 'relative', zIndex: 1,
    width: 'min(1180px, calc(100% - 48px))',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1.65fr 1fr',
    gap: '72px',
    alignItems: 'flex-start',
  },

  // ── Demo column ──
  demoCol: {},
  // Fixed height so the grid row never changes size during animation
  demoStack: { display: 'flex', flexDirection: 'column', gap: 16, height: 610 },

  // Quiz card — fixed height prevents layout shift when feedback panels mount/unmount
  quizCard: {
    background: P.card,
    border: `1px solid ${P.borderM}`,
    borderRadius: 16,
    padding: '20px 22px',
    boxShadow: '0 32px 80px rgba(0,0,0,0.45)',
    height: 420,
    overflow: 'hidden',
  },
  quizMeta: { display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 },
  quizBadge: {
    fontSize: 10, fontWeight: 800, letterSpacing: '0.1em',
    color: P.amber, background: P.amberBg, border: `1px solid ${P.amberBd}`,
    borderRadius: 99, padding: '3px 8px',
  },
  quizProg: { fontSize: 11, color: P.muted, fontWeight: 600 },
  retryBadge: {
    fontSize: 10, fontWeight: 700, letterSpacing: '0.06em',
    color: '#a78bfa', background: 'rgba(167,139,250,0.1)', border: '1px solid rgba(167,139,250,0.22)',
    borderRadius: 99, padding: '2px 8px', marginLeft: 'auto',
  },

  question: {
    fontSize: 14, fontWeight: 700, color: P.text,
    lineHeight: 1.45, marginBottom: 18,
  },

  // Answer options
  options: { display: 'flex', flexDirection: 'column', gap: 8 },
  option: {
    display: 'flex', alignItems: 'center', gap: 10,
    padding: '10px 12px', borderRadius: 10,
    borderWidth: 1, borderStyle: 'solid', borderColor: P.border,
    background: 'rgba(255,255,255,0.025)',
    transition: 'border-color 250ms ease, background 250ms ease, opacity 250ms ease',
    cursor: 'default',
  },
  optionChosen: {
    borderColor: P.amberBd, background: P.amberBg,
  },
  optionWrong: {
    borderColor: P.redBd, background: P.redBg,
  },
  optionRight: {
    borderColor: P.greenBd, background: P.greenBg,
  },
  optionDimmed: { opacity: 0.35 },

  optLetter: {
    width: 24, height: 24, borderRadius: '50%', flexShrink: 0,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: 10, fontWeight: 800,
    color: P.soft, background: 'rgba(255,255,255,0.04)',
    borderWidth: 1, borderStyle: 'solid', borderColor: P.border,
    transition: 'background 250ms ease, color 250ms ease, border-color 250ms ease',
  },
  optLetterChosen: { background: P.amber,  color: '#0b0f1a', borderColor: P.amber },
  optLetterWrong:  { background: P.red,    color: '#fff',    borderColor: P.red   },
  optLetterRight:  { background: P.green,  color: '#0b0f1a', borderColor: P.green },
  optText: { fontSize: 12, color: P.muted, lineHeight: 1.4 },

  // Feedback panels
  wrongFB: {
    display: 'flex', gap: 10, alignItems: 'flex-start',
    marginTop: 14, padding: '12px 14px', borderRadius: 10,
    background: P.redBg, border: `1px solid ${P.redBd}`,
  },
  fbIcon: {
    width: 22, height: 22, borderRadius: '50%', flexShrink: 0,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: 11, fontWeight: 800,
    background: P.redBd, color: P.red,
    marginTop: 1,
  },
  fbTitle:     { fontSize: 11, fontWeight: 700, color: P.red,   marginBottom: 4 },
  fbTitleGreen:{ fontSize: 11, fontWeight: 700, color: P.green, marginBottom: 4 },
  fbText:      { fontSize: 11, color: P.muted,  lineHeight: 1.6 },
  retryHint: {
    marginTop: 8, fontSize: 10, fontWeight: 700,
    color: '#a78bfa', letterSpacing: '0.02em',
  },

  correctFB: {
    display: 'flex', gap: 10, alignItems: 'flex-start',
    marginTop: 14, padding: '12px 14px', borderRadius: 10,
    background: P.greenBg, border: `1px solid ${P.greenBd}`,
  },
  fbIconGreen: {
    width: 22, height: 22, borderRadius: '50%', flexShrink: 0,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: 11, fontWeight: 800,
    background: P.greenBd, color: P.green,
    marginTop: 1,
  },

  // Mastery card
  masteryCard: {
    background: P.panel,
    borderWidth: 1, borderStyle: 'solid', borderColor: P.border,
    borderRadius: 16,
    padding: '18px 20px',
    display: 'flex', gap: 20,
    opacity: 0, transform: 'translateY(8px)',
    transition: 'opacity 500ms ease, transform 500ms ease, box-shadow 400ms ease, border-color 400ms ease',
    boxShadow: '0 24px 60px rgba(0,0,0,0.35)',
    overflow: 'hidden',
  },
  masteryCardVisible: {
    opacity: 1, transform: 'translateY(0)',
  },
  masteryCardSparkle: {
    animation: 'pm-sparkle 1.2s ease-in-out',
    borderColor: P.greenBd,
  },

  // Score side
  masteryLeft: { flexShrink: 0, width: 110 },
  masteryLabel: { fontSize: 9, fontWeight: 800, letterSpacing: '0.1em', color: P.soft, marginBottom: 8 },
  masteryScore: { display: 'flex', alignItems: 'baseline', gap: 1, marginBottom: 10 },
  masteryNum: {
    fontSize: 36, fontWeight: 800, color: P.text, lineHeight: 1,
    fontVariantNumeric: 'tabular-nums',
    transition: 'color 150ms ease',
  },
  masteryNumGlow: {
    color: P.green,
    animation: 'pm-num-glow 0.8s ease-in-out',
  },
  masteryPct: { fontSize: 16, fontWeight: 700, color: P.muted },
  masteryBar: {
    height: 4, borderRadius: 99,
    background: 'rgba(255,255,255,0.07)',
    overflow: 'hidden', marginBottom: 8,
  },
  masteryFill: {
    height: '100%', borderRadius: 99,
    background: `linear-gradient(90deg, ${P.amber}, ${P.green})`,
    transition: 'width 900ms ease',
  },
  masteryDelta: { minHeight: 22 },
  deltaChip: {
    display: 'inline-flex', alignItems: 'center',
    fontSize: 10, fontWeight: 700, letterSpacing: '0.04em',
    color: P.green, background: P.greenBg, border: `1px solid ${P.greenBd}`,
    borderRadius: 99, padding: '2px 8px',
  },

  // Concept list
  conceptList: { flex: 1, minWidth: 0 },
  conceptListTitle: { fontSize: 9, fontWeight: 800, letterSpacing: '0.1em', color: P.soft, marginBottom: 10 },
  conceptRow: {
    display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8,
  },
  conceptMeta: { width: 150, flexShrink: 0, display: 'flex', alignItems: 'center', gap: 6 },
  conceptLabel: { fontSize: 10, color: P.muted, lineHeight: 1.3, flexShrink: 0, maxWidth: 120 },
  improvedBadge: {
    fontSize: 9, fontWeight: 700, letterSpacing: '0.04em',
    color: P.green, background: P.greenBg, border: `1px solid ${P.greenBd}`,
    borderRadius: 99, padding: '1px 6px', flexShrink: 0,
    whiteSpace: 'nowrap' as const,
  },
  conceptBar: {
    flex: 1, height: 4, borderRadius: 99,
    background: 'rgba(255,255,255,0.07)', overflow: 'hidden',
  },
  conceptFill: {
    height: '100%', borderRadius: 99,
    background: P.amberBg,
    backgroundImage: `linear-gradient(90deg, ${P.amber}99, ${P.amber})`,
    transition: 'width 700ms ease, background-image 500ms ease',
  },
  conceptFillGreen: {
    backgroundImage: `linear-gradient(90deg, ${P.green}99, ${P.green})`,
  },
  conceptScore: {
    fontSize: 10, fontWeight: 700, color: P.muted,
    width: 30, textAlign: 'right' as const, flexShrink: 0,
    transition: 'color 400ms ease',
  },
  conceptScoreGreen: { color: P.green },

  // ── Copy column ──
  copyCol: { paddingTop: 60 },
  label: {
    display: 'inline-flex', alignItems: 'center', gap: 10,
    marginBottom: 24,
    color: P.green,
    fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.14em',
    textTransform: 'uppercase',
  },
  headline: {
    margin: '0 0 22px',
    fontSize: 'clamp(2.4rem, 3.8vw, 3.6rem)',
    fontWeight: 800,
    color: P.text,
    lineHeight: 1.06,
    letterSpacing: '-0.02em',
  },
  copy: {
    margin: '0 0 32px',
    color: P.muted,
    fontSize: '1rem',
    lineHeight: 1.72,
    maxWidth: 420,
  },
  bullets: { listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 14 },
  bullet:  { display: 'flex', alignItems: 'center', gap: 12, fontSize: '0.95rem', color: '#c8d4e8', lineHeight: 1.4 },
  bulletDot: { width: 6, height: 6, borderRadius: '50%', background: P.green, flexShrink: 0 },
}
