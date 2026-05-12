'use client'

import { useEffect, useReducer, useRef, useCallback } from 'react'
import type { CSSProperties } from 'react'

// ─── Fake data ───────────────────────────────────────────────────────────────

const QUESTION  = 'Why does magnesium burn with a white flame?'
const AI_GREET  = "Hello! Share your problem on the left and I'll guide you through it — one step at a time. Use the Hint button if you're stuck."
const AI_MSG_1  = "Let's start by identifying what we already know from the problem. I've highlighted the key observations below — take a look."
const AI_MSG_2  = "Great work! The knowns point directly to combustion chemistry. Let's choose our strategy — we'll use the combination reaction framework to explain the white flame."

const KNOWNS  = ['Magnesium ribbon burns in air', 'Produces a white flame and white powder']
const UNKNOWN = 'Why does magnesium burn with a white flame?'

const STEPS = [
  'Identify Knowns & Unknowns',
  'Choose Your Strategy',
  'Execute & Verify',
]

// ─── State machine ───────────────────────────────────────────────────────────

type S = {
  inputText:     string
  loading:       boolean
  sessionActive: boolean
  progress:      number
  step1Active:   boolean
  step1Done:     boolean
  step2Active:   boolean
  spotlightOpen: boolean
  aiTyping:      string
  aiMessages:    string[]
}

const INIT: S = {
  inputText: '', loading: false, sessionActive: false,
  progress: 0, step1Active: false, step1Done: false,
  step2Active: false, spotlightOpen: false,
  aiTyping: '', aiMessages: [AI_GREET],
}

type A =
  | { t: 'inp';  v: string }
  | { t: 'load' }
  | { t: 'start' }
  | { t: 'prog'; v: number }
  | { t: 'step1' }
  | { t: 'spot'; v: boolean }
  | { t: 'done1' }
  | { t: 'step2' }
  | { t: 'aiCh'; v: string }
  | { t: 'aiEnd'; v: string }
  | { t: 'reset' }

function reduce(s: S, a: A): S {
  switch (a.t) {
    case 'inp':   return { ...s, inputText: a.v }
    case 'load':  return { ...s, loading: true }
    case 'start': return { ...s, loading: false, sessionActive: true }
    case 'prog':  return { ...s, progress: a.v }
    case 'step1': return { ...s, step1Active: true }
    case 'spot':  return { ...s, spotlightOpen: a.v }
    case 'done1': return { ...s, step1Done: true, step1Active: false }
    case 'step2': return { ...s, step2Active: true }
    case 'aiCh':  return { ...s, aiTyping: a.v }
    case 'aiEnd': return { ...s, aiTyping: '', aiMessages: [...s.aiMessages, a.v] }
    case 'reset': return { ...INIT }
  }
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function HomeworkSection() {
  const [s, d]  = useReducer(reduce, INIT)
  const timers  = useRef<ReturnType<typeof setTimeout>[]>([])
  const chatRef = useRef<HTMLDivElement>(null)

  const clear = () => { timers.current.forEach(clearTimeout); timers.current = [] }
  const at    = (ms: number, fn: () => void) => { timers.current.push(setTimeout(fn, ms)) }

  const run = useCallback(() => {
    clear()
    d({ t: 'reset' })
    let t = 0

    // Type question char by char
    t += 900
    const ts = t
    for (let i = 0; i < QUESTION.length; i++) {
      at(ts + i * 46, () => d({ t: 'inp', v: QUESTION.slice(0, i + 1) }))
    }
    t = ts + QUESTION.length * 46

    // Loading → session starts, step 1 activates
    t += 500;  at(t, () => d({ t: 'load' }))
    t += 1700; at(t, () => { d({ t: 'start' }); d({ t: 'step1' }) })
    t += 250;  at(t, () => d({ t: 'prog', v: 33 }))

    // AI types message 1
    t += 350
    const a1s = t
    for (let i = 0; i < AI_MSG_1.length; i++) {
      at(a1s + i * 9, () => d({ t: 'aiCh', v: AI_MSG_1.slice(0, i + 1) }))
    }
    t = a1s + AI_MSG_1.length * 9
    t += 120; at(t, () => d({ t: 'aiEnd', v: AI_MSG_1 }))

    // Spotlight card appears
    t += 700; at(t, () => d({ t: 'spot', v: true }))

    // Step 1 done → step 2 unlocks
    t += 2400; at(t, () => d({ t: 'done1' }))
    t += 350;  at(t, () => d({ t: 'step2' }))

    // AI types message 2
    t += 450
    const a2s = t
    for (let i = 0; i < AI_MSG_2.length; i++) {
      at(a2s + i * 9, () => d({ t: 'aiCh', v: AI_MSG_2.slice(0, i + 1) }))
    }
    t = a2s + AI_MSG_2.length * 9
    t += 120; at(t, () => d({ t: 'aiEnd', v: AI_MSG_2 }))

    // Pause then loop
    t += 3200; at(t, () => { d({ t: 'spot', v: false }); at(500, run) })
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => { run(); return clear }, [run])

  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight
  }, [s.aiMessages, s.aiTyping])

  const typing = s.aiTyping.length > 0 || s.loading

  return (
    <section style={D.section} aria-label="Homework Companion feature">
      <style>{KEYFRAMES}</style>

      {/* Ambient glows */}
      <div style={D.glow1} aria-hidden="true" />
      <div style={D.glow2} aria-hidden="true" />

      <div style={D.inner}>

        {/* ── Left: copy ── */}
        <div style={D.copyCol}>
          <span style={D.label}>HOMEWORK COMPANION</span>
          <h2 style={D.headline}>
            Get unstuck.<br />Learn the why.
          </h2>
          <p style={D.copy}>
            Kivo guides you step-by-step through any homework question using
            your curriculum, so you understand the process — not just the answer.
          </p>
          <ul style={D.bullets}>
            {[
              'Guided, step-by-step approach',
              'Grounded in your textbook',
              'Builds understanding and confidence',
            ].map(b => (
              <li key={b} style={D.bullet}>
                <span style={D.bulletDot} />
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* ── Right: demo frame ── */}
        <div style={D.demoCol}>
          <div style={D.frame} aria-hidden="true">

            {/* Window titlebar */}
            <div style={D.titlebar}>
              <div style={D.winDots}>
                <span style={{ ...D.winDot, background: '#ff5f57' }} />
                <span style={{ ...D.winDot, background: '#febc2e' }} />
                <span style={{ ...D.winDot, background: '#28c840' }} />
              </div>
              <span style={D.tbLabel}>Homework Companion</span>
            </div>

            {/* Three-pane body */}
            <div style={D.body}>

              {/* Left pane — homework input */}
              <div style={D.leftPane}>
                <div style={D.paneHead}>
                  <span style={D.paneTitle}>Homework Mode</span>
                  {s.sessionActive && <span style={D.activePill}>Active</span>}
                </div>

                <div style={D.paneBody}>
                  <div style={D.modePills}>
                    <div style={D.modePillOn}>Solve With Help</div>
                    <div style={D.modePillOff}>Check My Answer</div>
                  </div>

                  <div style={{
                    ...D.fakeTextarea,
                    ...(s.sessionActive ? D.fakeTextareaLocked : {}),
                  }}>
                    {s.inputText
                      ? <>{s.inputText}{!s.sessionActive && s.inputText.length < QUESTION.length && <span style={D.cur}>|</span>}</>
                      : <span style={D.placeholder}>Type or paste your homework question here…</span>
                    }
                  </div>

                  <div style={{
                    ...D.guideBtn,
                    ...(!s.inputText && !s.loading && !s.sessionActive ? D.guideBtnOff : {}),
                    ...(s.loading ? D.guideBtnLoading : {}),
                    ...(s.sessionActive ? D.guideBtnActive : {}),
                  }}>
                    {s.loading ? 'Analysing…' : s.sessionActive ? 'Session Active' : 'Guide Me'}
                  </div>

                  <div style={D.refDivider} />
                  <div style={D.refTitle}>References</div>
                  {s.sessionActive ? (
                    <>
                      <div style={D.refChip}>📖 Ch.1 Chemical Reactions</div>
                      <div style={{ ...D.refChip, marginTop: 4 }}>📖 Ch.2 Combustion</div>
                    </>
                  ) : (
                    <div style={D.refEmpty}>
                      Relevant chapters will appear once Kivo checks the question.
                    </div>
                  )}
                </div>
              </div>

              {/* Centre pane — AI companion */}
              <div style={D.centrePane}>
                <div style={D.paneHead}>
                  <span style={D.paneTitle}>AI Companion</span>
                  {typing && (
                    <div style={D.thinkRow}>
                      <span style={D.thinkDot} />
                      <span style={{ ...D.thinkDot, animationDelay: '0.2s' }} />
                      <span style={{ ...D.thinkDot, animationDelay: '0.4s' }} />
                    </div>
                  )}
                  {s.sessionActive && !typing && (
                    <span style={D.sessionBadge}>Session Active</span>
                  )}
                </div>

                <div ref={chatRef} style={D.chat} className="hw-scroll">
                  {s.aiMessages.map((msg, i) => (
                    <div key={i} style={D.aiBubble}>
                      <div style={D.aiRole}>KIVO</div>
                      <div style={D.aiText}>{msg}</div>
                    </div>
                  ))}
                  {s.aiTyping && (
                    <div style={D.aiBubble}>
                      <div style={D.aiRole}>KIVO</div>
                      <div style={D.aiText}>
                        {s.aiTyping}<span style={D.cur}>|</span>
                      </div>
                    </div>
                  )}
                </div>

                <div style={D.chatInputRow}>
                  <div style={D.chatInput}>
                    <span style={D.chatInputPlaceholder}>Reply to Kivo…</span>
                  </div>
                  <div style={D.sendBtn}>↑</div>
                </div>
              </div>

              {/* Right pane — progress + approach */}
              <div style={D.rightPane}>
                <div style={D.paneHead}>
                  <span style={D.paneTitle}>Progress</span>
                </div>

                <div style={D.paneBody}>
                  <div style={D.progRow}>
                    <div style={D.progTrack}>
                      <div style={{ ...D.progFill, width: `${s.progress}%` }} />
                    </div>
                    <span style={D.progLabel}>{s.progress}%</span>
                  </div>

                  <div style={D.approachHead}>APPROACH</div>

                  <div style={D.stepList}>
                    {STEPS.map((step, i) => {
                      const isActive = (i === 0 && s.step1Active) || (i === 1 && s.step2Active)
                      const isDone   = i === 0 && s.step1Done
                      const isLocked = i === 1 ? (!s.step1Done && !s.step2Active) : i === 2
                      return (
                        <div
                          key={i}
                          className={isActive ? 'hw-step-glow' : ''}
                          style={{
                            ...D.stepItem,
                            ...(isActive ? D.stepActive  : {}),
                            ...(isDone   ? D.stepDone    : {}),
                            ...(isLocked ? D.stepLocked  : {}),
                          }}
                        >
                          <div style={{
                            ...D.stepDot,
                            ...(isActive ? D.stepDotActive : {}),
                            ...(isDone   ? D.stepDotDone   : {}),
                          }}>
                            {isDone ? '✓' : i + 1}
                          </div>
                          <span style={D.stepLabel}>{step}</span>
                        </div>
                      )
                    })}
                  </div>

                  <div style={D.goalsDivider} />
                  <div style={D.goalsHead}>SESSION GOALS</div>
                  {[
                    'Understand the problem first',
                    'Identify all given values',
                    'Choose the right method',
                  ].map((g, i) => (
                    <div key={i} style={D.goalRow}>
                      <span style={D.goalDot} />
                      <span style={D.goalText}>{g}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>{/* /body */}

            {/* Floating spotlight card */}
            {s.spotlightOpen && (
              <div style={D.spotlight} className="hw-spot-in">
                <div style={D.spotHead}>
                  <span style={D.spotStepBadge}>STEP 1</span>
                  <span style={D.spotTitle}>Identify Knowns &amp; Unknowns</span>
                </div>

                <div style={D.spotBlock}>
                  <div style={D.spotBlockLabel}>KNOWNS</div>
                  {KNOWNS.map((k, i) => (
                    <div key={i} style={D.spotKnown}>
                      <span style={D.spotCheck}>✓</span>
                      <span>{k}</span>
                    </div>
                  ))}
                </div>

                <div style={D.spotBlock}>
                  <div style={{ ...D.spotBlockLabel, color: '#e6b44a' }}>UNKNOWN</div>
                  <div style={D.spotUnknown}>
                    <span style={D.spotQ}>?</span>
                    <span>{UNKNOWN}</span>
                  </div>
                </div>
              </div>
            )}

          </div>{/* /frame */}
        </div>

      </div>
    </section>
  )
}

// ─── Keyframes ───────────────────────────────────────────────────────────────

const KEYFRAMES = `
  @keyframes hw-blink {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0; }
  }
  @keyframes hw-dot {
    0%, 80%, 100% { transform: scale(0.5); opacity: 0.3; }
    40%            { transform: scale(1);   opacity: 1;   }
  }
  @keyframes hw-spot-in {
    from { opacity: 0; transform: translateY(10px) scale(0.97); }
    to   { opacity: 1; transform: translateY(0)    scale(1);    }
  }
  @keyframes hw-step-glow {
    0%, 100% { box-shadow: 0 0 0 0   rgba(230,180,74,0);    }
    50%       { box-shadow: 0 0 0 5px rgba(230,180,74,0.18); }
  }
  @keyframes hw-glow1 {
    from { transform: translate3d(0,0,0) scale(1); }
    to   { transform: translate3d(2%,3%,0) scale(1.08); }
  }
  @keyframes hw-glow2 {
    from { transform: translate3d(0,0,0) scale(1); }
    to   { transform: translate3d(-2%,-3%,0) scale(1.06); }
  }
  .hw-scroll::-webkit-scrollbar { display: none; }
  .hw-scroll { -ms-overflow-style: none; scrollbar-width: none; }
  .hw-spot-in  { animation: hw-spot-in  420ms cubic-bezier(0.16,1,0.3,1) both; }
  .hw-step-glow { animation: hw-step-glow 1.8s ease-in-out infinite; }
`

// ─── Palette ─────────────────────────────────────────────────────────────────

const P = {
  bg:       '#070a14',
  panel:    '#0d1221',
  card:     '#101724',
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
  purple:   'rgba(139,92,246,0.14)',
}

// ─── Styles ──────────────────────────────────────────────────────────────────

const D: Record<string, CSSProperties> = {

  // ── Section shell ──
  section: {
    position: 'relative',
    zIndex: 1,
    padding: '112px 0 120px',
    borderTop: '1px solid rgba(196,217,255,0.1)',
    background: `
      radial-gradient(circle at 90% 15%, ${P.purple}, transparent 26rem),
      radial-gradient(circle at 6%  82%, rgba(79,209,197,0.07), transparent 22rem),
      ${P.bg}
    `,
    overflow: 'hidden',
    fontFamily: 'var(--font-geist-sans), Inter, system-ui, sans-serif',
  },
  glow1: {
    position: 'absolute', inset: '-10% 0 auto', height: '50%',
    pointerEvents: 'none',
    background: 'radial-gradient(circle at 82% 30%, rgba(139,92,246,0.16), transparent 18rem)',
    filter: 'blur(22px)',
    animation: 'hw-glow1 14s ease-in-out infinite alternate',
  },
  glow2: {
    position: 'absolute', inset: 'auto 0 -10%', height: '40%',
    pointerEvents: 'none',
    background: 'radial-gradient(circle at 12% 60%, rgba(79,209,197,0.1), transparent 16rem)',
    filter: 'blur(18px)',
    animation: 'hw-glow2 16s ease-in-out infinite alternate',
  },

  // ── Layout ──
  inner: {
    position: 'relative', zIndex: 1,
    width: 'min(1180px, calc(100% - 48px))',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1.65fr',
    gap: '72px',
    alignItems: 'center',
  },

  // ── Copy column ──
  copyCol: {},
  label: {
    display: 'inline-flex', alignItems: 'center', gap: 10,
    marginBottom: 24,
    color: P.amber,
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
  bulletDot: { width: 6, height: 6, borderRadius: '50%', background: P.amber, flexShrink: 0 },

  // ── Demo column ──
  demoCol: {},

  // ── App frame ──
  frame: {
    position: 'relative',
    background: P.bg,
    border: `1px solid ${P.borderMd}`,
    borderRadius: 16,
    overflow: 'hidden',
    height: 528,
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 48px 120px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04)',
    userSelect: 'none',
  },

  // Titlebar
  titlebar: {
    display: 'flex', alignItems: 'center', gap: 10,
    padding: '9px 14px',
    background: '#060912',
    borderBottom: `1px solid ${P.border}`,
    flexShrink: 0,
  },
  winDots: { display: 'flex', gap: 5, marginRight: 4 },
  winDot:  { width: 9, height: 9, borderRadius: '50%' },
  tbLabel: { color: P.muted, fontSize: 11, fontWeight: 600 },

  // Body
  body: { display: 'flex', flex: 1, overflow: 'hidden' },

  // Shared pane head
  paneHead: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 6,
    padding: '10px 12px',
    borderBottom: `1px solid ${P.border}`,
    flexShrink: 0,
  },
  paneTitle:   { fontSize: 11, fontWeight: 700, color: P.text },
  activePill: {
    fontSize: 9, fontWeight: 700, letterSpacing: '0.06em',
    color: P.green, background: P.greenBg, border: `1px solid ${P.greenBd}`,
    borderRadius: 99, padding: '2px 7px',
  },
  sessionBadge: {
    fontSize: 9, fontWeight: 700, letterSpacing: '0.06em',
    color: P.amber, background: P.amberBg, border: `1px solid ${P.amberBd}`,
    borderRadius: 99, padding: '2px 7px',
  },
  thinkRow: { display: 'flex', gap: 3, alignItems: 'center' },
  thinkDot: {
    width: 5, height: 5, borderRadius: '50%',
    background: P.muted, display: 'inline-block',
    animation: 'hw-dot 1.2s ease-in-out infinite',
  },

  // Shared pane body
  paneBody: { flex: 1, padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: 8, overflowY: 'auto' },

  // ── Left pane ──
  leftPane: {
    width: 204, flexShrink: 0,
    display: 'flex', flexDirection: 'column',
    background: P.panel,
    borderRight: `1px solid ${P.border}`,
    overflow: 'hidden',
  },
  modePills: { display: 'flex', gap: 4 },
  modePillOn: {
    flex: 1, textAlign: 'center',
    fontSize: 9, fontWeight: 700, padding: '5px 6px',
    borderRadius: 6, color: P.amber, background: P.amberBg, border: `1px solid ${P.amberBd}`,
  },
  modePillOff: {
    flex: 1, textAlign: 'center',
    fontSize: 9, fontWeight: 600, padding: '5px 6px',
    borderRadius: 6, color: P.soft, background: 'rgba(255,255,255,0.02)', border: `1px solid ${P.border}`,
  },
  fakeTextarea: {
    flex: 1,
    background: 'rgba(255,255,255,0.03)',
    border: `1px solid ${P.border}`,
    borderRadius: 8, padding: '8px 10px',
    fontSize: 11, color: P.text, lineHeight: 1.55,
    minHeight: 90, maxHeight: 110,
    wordBreak: 'break-word' as const,
    overflow: 'hidden',
  },
  fakeTextareaLocked: {
    opacity: 0.72, background: P.amberBg, borderColor: P.amberBd,
  },
  placeholder: { color: P.soft },
  cur:         { animation: 'hw-blink 1s step-end infinite', marginLeft: 1 },
  guideBtn: {
    padding: '8px 12px', borderRadius: 8,
    fontSize: 11, fontWeight: 700, textAlign: 'center' as const,
    color: '#0b0f1a',
    background: `linear-gradient(135deg, ${P.amber}, #c89630)`,
    border: `1px solid rgba(230,180,74,0.5)`,
    transition: 'opacity 250ms ease',
  },
  guideBtnOff:    { opacity: 0.3 },
  guideBtnLoading:{ opacity: 0.82 },
  guideBtnActive: {
    background: P.greenBg, border: `1px solid ${P.greenBd}`,
    color: P.green,
  },
  refDivider: { height: 1, background: P.border, margin: '2px 0' },
  refTitle:   { fontSize: 9, fontWeight: 800, letterSpacing: '0.1em', color: P.soft },
  refChip: {
    fontSize: 10, color: P.muted, padding: '5px 8px',
    borderRadius: 6, background: 'rgba(255,255,255,0.025)', border: `1px solid ${P.border}`,
  },
  refEmpty: { fontSize: 10, color: P.soft, lineHeight: 1.5 },

  // ── Centre pane ──
  centrePane: {
    flex: 1, display: 'flex', flexDirection: 'column',
    borderRight: `1px solid ${P.border}`,
    overflow: 'hidden',
  },
  chat: {
    flex: 1, overflowY: 'auto', padding: '10px 12px',
    display: 'flex', flexDirection: 'column', gap: 8,
  },
  aiBubble: {
    background: '#111928', border: `1px solid ${P.border}`,
    borderRadius: 10, padding: '10px 12px',
  },
  aiRole: { fontSize: 9, fontWeight: 800, letterSpacing: '0.1em', color: P.amber, marginBottom: 5 },
  aiText: { fontSize: 11, color: P.muted, lineHeight: 1.62 },
  chatInputRow: {
    padding: '8px 10px', borderTop: `1px solid ${P.border}`,
    display: 'flex', gap: 6, alignItems: 'center', flexShrink: 0,
  },
  chatInput: {
    flex: 1, background: 'rgba(255,255,255,0.03)', border: `1px solid ${P.border}`,
    borderRadius: 7, padding: '6px 10px', fontSize: 11, minHeight: 30,
  },
  chatInputPlaceholder: { color: P.soft },
  sendBtn: {
    width: 28, height: 28, borderRadius: 7,
    background: P.amberBg, border: `1px solid ${P.amberBd}`,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    color: P.amber, fontSize: 13, fontWeight: 700, flexShrink: 0,
  },

  // ── Right pane ──
  rightPane: {
    width: 172, flexShrink: 0,
    display: 'flex', flexDirection: 'column',
    background: P.panel,
    overflow: 'hidden',
  },
  progRow: { display: 'flex', alignItems: 'center', gap: 8 },
  progTrack: { flex: 1, height: 4, borderRadius: 99, background: 'rgba(255,255,255,0.07)' },
  progFill: {
    height: '100%', borderRadius: 99,
    background: `linear-gradient(90deg, ${P.amber}, ${P.green})`,
    transition: 'width 900ms ease',
  },
  progLabel: { fontSize: 10, color: P.muted, flexShrink: 0 },
  approachHead: { fontSize: 9, fontWeight: 800, letterSpacing: '0.1em', color: P.soft, marginTop: 4 },
  stepList: { display: 'flex', flexDirection: 'column', gap: 4 },
  stepItem: {
    display: 'flex', alignItems: 'flex-start', gap: 7,
    padding: '6px 8px', borderRadius: 8,
    border: '1px solid transparent',
    transition: 'background 350ms ease, border-color 350ms ease',
  },
  stepActive: { background: P.amberBg, borderColor: P.amberBd },
  stepDone:   { background: P.greenBg, borderColor: P.greenBd },
  stepLocked: { opacity: 0.3 },
  stepDot: {
    width: 18, height: 18, borderRadius: '50%',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: 9, fontWeight: 800,
    color: P.soft, background: 'rgba(255,255,255,0.04)', border: `1px solid ${P.border}`,
    flexShrink: 0, transition: 'background 350ms ease, color 350ms ease, border-color 350ms ease',
  },
  stepDotActive: { background: P.amber,  color: '#0b0f1a', borderColor: P.amber },
  stepDotDone:   { background: P.green,  color: '#0b0f1a', borderColor: P.green },
  stepLabel:     { fontSize: 10, color: P.muted, lineHeight: 1.35 },
  goalsDivider:  { height: 1, background: P.border, margin: '4px 0' },
  goalsHead:     { fontSize: 9, fontWeight: 800, letterSpacing: '0.1em', color: P.soft },
  goalRow:       { display: 'flex', alignItems: 'flex-start', gap: 6 },
  goalDot:       { width: 4, height: 4, borderRadius: '50%', background: P.soft, marginTop: 5, flexShrink: 0 },
  goalText:      { fontSize: 9, color: '#4a5668', lineHeight: 1.4 },

  // ── Floating spotlight card ──
  spotlight: {
    position: 'absolute',
    bottom: 52,
    left: 214,
    right: 182,
    zIndex: 10,
    background: 'linear-gradient(140deg, #141e30 0%, #0f1826 100%)',
    border: `1px solid rgba(230,180,74,0.4)`,
    borderRadius: 13,
    padding: '14px 16px',
    boxShadow: [
      '0 24px 70px rgba(0,0,0,0.6)',
      '0 0 0 1px rgba(230,180,74,0.08)',
      '0 0 40px rgba(230,180,74,0.05)',
    ].join(', '),
    backdropFilter: 'blur(2px)',
  },
  spotHead: {
    display: 'flex', alignItems: 'center', gap: 8,
    marginBottom: 12, paddingBottom: 10,
    borderBottom: `1px solid ${P.border}`,
  },
  spotStepBadge: {
    fontSize: 9, fontWeight: 800, letterSpacing: '0.1em',
    color: P.amber, background: P.amberBg, border: `1px solid ${P.amberBd}`,
    borderRadius: 5, padding: '2px 7px',
  },
  spotTitle: { fontSize: 12, fontWeight: 700, color: P.text },
  spotBlock:      { marginBottom: 10 },
  spotBlockLabel: { fontSize: 9, fontWeight: 800, letterSpacing: '0.1em', color: P.green, marginBottom: 6 },
  spotKnown: {
    display: 'flex', alignItems: 'flex-start', gap: 7,
    marginBottom: 5, fontSize: 11, color: '#c8d4e8', lineHeight: 1.4,
  },
  spotCheck:   { color: P.green, fontWeight: 800, flexShrink: 0 },
  spotUnknown: { display: 'flex', alignItems: 'flex-start', gap: 7, fontSize: 11, color: '#c8d4e8', lineHeight: 1.4 },
  spotQ:       { color: P.amber, fontWeight: 800, flexShrink: 0, fontSize: 13, lineHeight: 1, marginTop: 1 },
}
