'use client'

import { useEffect, useReducer, useRef, useCallback } from 'react'
import type { CSSProperties } from 'react'

// ─── Fake data ───────────────────────────────────────────────────────────────

const NAV_SECTIONS = [
  { num: '01', title: 'Introduction to Chemical Reactions and Activity 1.1' },
  { num: '02', title: 'Identifying Chemical Reactions and Word Equations (Activities 1.2 & 1.3)' },
  { num: '03', title: 'Writing and Balancing Chemical Equations (Skeletal vs. Balanced)' },
  { num: '04', title: 'Step-by-step Balancing of Chemical Equations (Fe + H₂O → Fe₃O₄ + H₂)' },
  { num: '05', title: 'Completing Balancing and Including Physical States and Conditions' },
  { num: '06', title: 'Types of Chemical Reactions: Combination Reaction (Activity 1.4)' },
  { num: '07', title: 'Exothermic Reactions and More Combination Reaction Examples' },
]

type Concept = { title: string; explanation: string; analogy?: string; mistake?: string }

const CONTENT: {
  atAGlance: string
  body: string
  coreConcepts: Concept[]
}[] = [
  {
    atAGlance: 'Understanding chemical reactions is fundamental to understanding the world. From cooking our food to the processes within our bodies, and even industrial manufacturing, chemical reactions are at the heart of how matter changes and interacts. It helps us predict outcomes, create new materials, and solve real-world problems.',
    body: `In our daily lives, we constantly encounter situations where the original nature and identity of substances transform. When milk turns sour, it's no longer just milk; when iron rusts, it's no longer pure iron. These transformations are known as chemical changes, and whenever a chemical change takes place, we say a Chemical Reaction has occurred.`,
    coreConcepts: [
      {
        title: 'Chemical Change vs. Physical Change',
        explanation: 'A chemical change produces one or more new substances with properties different from the original. It is generally irreversible — you cannot easily get the original substances back.',
        analogy: 'Baking bread: you cannot un-bake dough back into flour, eggs, and yeast.',
      },
      {
        title: 'Reactants and Products',
        explanation: 'The substances that enter a chemical reaction are called reactants. The new substances formed after the reaction are called products. Reactants are written on the left side of the arrow; products on the right.',
        mistake: 'Students often confuse the arrow (→) with an equals sign. The arrow shows direction of change, not equality of quantities.',
      },
    ],
  },
  {
    atAGlance: 'Chemical reactions can be identified by observable signs: colour changes, gas evolution, precipitate formation, temperature changes, or light emission.',
    body: 'When magnesium ribbon burns in air, a dazzling white light is produced and a white powder — magnesium oxide — forms. This is a combination reaction where two substances combine to form a single new product.',
    coreConcepts: [
      {
        title: 'Signs of a Chemical Reaction',
        explanation: 'Observable evidence that a reaction has occurred includes: change in colour, evolution of a gas (bubbles or smell), formation of a precipitate (solid in a liquid), change in temperature, or emission of light.',
        analogy: 'When you add vinegar to baking soda, the fizzing tells you a reaction is happening — CO₂ gas is being produced.',
      },
      {
        title: 'Word Equations',
        explanation: 'A word equation describes a chemical reaction using the names of the reactants and products instead of symbols. Example: Magnesium + Oxygen → Magnesium Oxide.',
        mistake: 'A word equation does not show the quantities involved — for that you need a balanced chemical equation with symbols.',
      },
    ],
  },
  {
    atAGlance: 'A balanced chemical equation shows the law of conservation of mass — atoms are neither created nor destroyed in a reaction.',
    body: 'Mg + O₂ → MgO is a skeletal (unbalanced) equation. To balance: 2Mg + O₂ → 2MgO. The number of atoms on both sides must be equal. Subscripts can never be changed — only coefficients.',
    coreConcepts: [
      {
        title: 'Law of Conservation of Mass',
        explanation: 'Matter cannot be created or destroyed in a chemical reaction. The total mass of reactants always equals the total mass of products. This is why equations must be balanced.',
        analogy: 'If you rearrange the pieces of a jigsaw puzzle, you still have the same number of pieces — just in a new arrangement.',
      },
      {
        title: 'Balancing by Inspection',
        explanation: 'Adjust coefficients (the numbers in front of formulas) so the count of each type of atom is equal on both sides. Never change subscripts inside a formula — that would change the substance itself.',
        mistake: 'Writing 2MgO₂ instead of 2MgO changes magnesium oxide into a different compound entirely.',
      },
    ],
  },
]

const USER_MSG = 'What is a chemical reaction?'
const AI_MSG   = 'A chemical reaction is a process where the nature and identity of substances change. Think of it like ingredients transforming into a completely new dish! Atoms rearrange themselves, breaking old bonds and forming new ones to create entirely new substances called products.'
const GREETING = "Hi! I'm Kivo AI. Ask me anything about Chemical Reactions and Equations."

// ─── State machine ───────────────────────────────────────────────────────────

type Msg = { role: 'user' | 'ai'; text: string }

type S = {
  active:     number
  done:       Set<number>
  messages:   Msg[]
  inputText:  string
  aiTyping:   string
  aiThinking: boolean
  aiHL:       boolean
  quizGlow:   boolean
  contentKey: number
}

const INIT: S = {
  active: 0, done: new Set(), messages: [],
  inputText: '', aiTyping: '', aiThinking: false,
  aiHL: false, quizGlow: false, contentKey: 0,
}

type A =
  | { t: 'go';     i: number }
  | { t: 'done';   i: number }
  | { t: 'inp';    v: string }
  | { t: 'send';   v: string }
  | { t: 'think' }
  | { t: 'aiCh';   v: string }
  | { t: 'aiEnd';  v: string }
  | { t: 'aiHL';   v: boolean }
  | { t: 'quiz';   v: boolean }
  | { t: 'reset' }

function reduce(s: S, a: A): S {
  switch (a.t) {
    case 'go':    return { ...s, active: a.i, contentKey: s.contentKey + 1 }
    case 'done':  return { ...s, done: new Set([...s.done, a.i]) }
    case 'inp':   return { ...s, inputText: a.v }
    case 'send':  return { ...s, inputText: '', messages: [...s.messages, { role: 'user', text: a.v }] }
    case 'think': return { ...s, aiThinking: true }
    case 'aiCh':  return { ...s, aiTyping: a.v }
    case 'aiEnd': return { ...s, aiThinking: false, aiTyping: '', messages: [...s.messages, { role: 'ai', text: a.v }] }
    case 'aiHL':  return { ...s, aiHL: a.v }
    case 'quiz':  return { ...s, quizGlow: a.v }
    case 'reset': return { ...INIT }
  }
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function HeroDemo() {
  const [s, d]  = useReducer(reduce, INIT)
  const timers  = useRef<ReturnType<typeof setTimeout>[]>([])
  const chatRef = useRef<HTMLDivElement>(null)

  const clear = () => { timers.current.forEach(clearTimeout); timers.current = [] }
  const at    = (ms: number, fn: () => void) => { timers.current.push(setTimeout(fn, ms)) }

  const run = useCallback(() => {
    clear()
    d({ t: 'reset' })
    let t = 0

    // Navigate to section 2
    t += 2200; at(t, () => d({ t: 'go', i: 1 }))
    t += 500;  at(t, () => d({ t: 'done', i: 0 }))

    // Highlight AI panel, then type user message
    t += 1000; at(t, () => d({ t: 'aiHL', v: true }))
    t += 200
    const ts = t
    for (let i = 0; i < USER_MSG.length; i++) {
      at(ts + i * 48, () => d({ t: 'inp', v: USER_MSG.slice(0, i + 1) }))
    }
    t = ts + USER_MSG.length * 48

    // Send → AI thinking → AI typing
    t += 300;  at(t, () => d({ t: 'send', v: USER_MSG }))
    t += 500;  at(t, () => d({ t: 'think' }))
    t += 1400
    const as = t
    for (let i = 0; i < AI_MSG.length; i++) {
      at(as + i * 11, () => d({ t: 'aiCh', v: AI_MSG.slice(0, i + 1) }))
    }
    t = as + AI_MSG.length * 11
    t += 200;  at(t, () => d({ t: 'aiEnd', v: AI_MSG }))
    t += 1000; at(t, () => d({ t: 'aiHL', v: false }))

    // Navigate to section 3
    t += 1800; at(t, () => d({ t: 'go', i: 2 }))
    t += 400;  at(t, () => d({ t: 'done', i: 1 }))

    // Quiz glow → reset loop
    t += 1200; at(t, () => d({ t: 'quiz', v: true }))
    t += 2200; at(t, () => { d({ t: 'quiz', v: false }); at(600, run) })
  }, [])

  useEffect(() => { run(); return clear }, [run])

  // Auto-scroll AI chat
  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight
  }, [s.messages, s.aiTyping, s.aiThinking])

  const pct      = Math.round((s.done.size / NAV_SECTIONS.length) * 100)
  const content  = CONTENT[s.active] ?? CONTENT[0]
  const secTitle = NAV_SECTIONS[s.active]?.title ?? NAV_SECTIONS[0].title

  return (
    <>
      <style>{`
        @keyframes kd-fadeUp {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes kd-blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @keyframes kd-dot {
          0%, 80%, 100% { transform: scale(0.5); opacity: 0.35; }
          40%            { transform: scale(1);   opacity: 1; }
        }
        @keyframes kd-quiz {
          0%, 100% { box-shadow: 0 0 0 0 rgba(230,180,74,0); }
          50%       { box-shadow: 0 0 0 7px rgba(230,180,74,0.22); }
        }
        @keyframes kd-activeDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(0.7); }
        }
        .kd-scroll::-webkit-scrollbar { display: none; }
        .kd-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div style={D.frame} aria-hidden="true">

        {/* Window titlebar */}
        <div style={D.titlebar}>
          <div style={D.dots}>
            <span style={{ ...D.dot, background: '#ff5f57' }} />
            <span style={{ ...D.dot, background: '#febc2e' }} />
            <span style={{ ...D.dot, background: '#28c840' }} />
          </div>
          <span style={D.tbCrumb}>Home › Grade X · Science</span>
          <span style={D.tbChip}>Core View</span>
        </div>

        {/* App body */}
        <div style={D.body}>

          {/* Narrow icon sidebar */}
          <nav style={D.iconSidebar}>
            <div style={D.iconTop}>
              <div style={D.logoMark}>K</div>
              <Ib active><HomeIco /></Ib>
              <Ib><BarIco /></Ib>
            </div>
            <div style={D.iconBot}>
              <Ib><GearIco /></Ib>
              <div style={D.acctDot}>D</div>
            </div>
          </nav>

          {/* Chapter nav */}
          <aside style={D.chapNav}>
            <div style={D.chapHead}>
              <div style={D.chapMeta}>CHAPTER 1</div>
              <div style={D.chapTitle}>CHEMICAL REACTIONS AND EQUATIONS</div>
              <div style={D.prog}>
                <div style={D.progTrack}>
                  <div style={{ ...D.progFill, width: `${pct}%` }} />
                </div>
                <span style={D.progLabel}>{s.done.size}/{NAV_SECTIONS.length}</span>
              </div>
            </div>

            <div style={D.navItems} className="kd-scroll">
              {NAV_SECTIONS.map((sec, i) => {
                const active = i === s.active
                const done   = s.done.has(i) && !active
                return (
                  <div key={i} style={{ ...D.navItem, ...(active ? D.navItemActive : {}) }}>
                    <span style={{ ...D.navNum, ...(active ? D.navNumActive : {}) }}>{sec.num}</span>
                    <span style={{ ...D.navText, ...(active ? D.navTextActive : {}) }}>{sec.title}</span>
                    {done && <span style={D.navCheck}>✓</span>}
                  </div>
                )
              })}
            </div>

            <div style={D.chapFooter}>
              <div style={D.exBtn}>Chapter Exercises</div>
              <div style={{ ...D.quizBtn, ...(s.quizGlow ? D.quizGlow : {}) }}>Chapter Quiz</div>
            </div>
          </aside>

          {/* Reader */}
          <main style={D.reader}>
            <div style={D.rdrHead}>
              <div style={D.rdrChapLabel}>Ch.1 — CHEMICAL REACTIONS AND EQUATIONS</div>
              <div style={D.rdrMeta}>{NAV_SECTIONS.length} sections · {s.done.size} done · {pct}% complete</div>
            </div>
            <div key={s.contentKey} style={D.rdrBody} className="kd-scroll">
              <div style={D.rdrTag}>CHAPTER 1</div>
              <h2 style={D.rdrH1}>CHEMICAL REACTIONS AND EQUATIONS</h2>
              <p style={D.rdrIntro}>{content.body}</p>
              <div style={D.rdrSecTag}>SECTION {NAV_SECTIONS[s.active]?.num}</div>
              <h3 style={D.rdrH2}>{secTitle}</h3>
              <div style={D.atGlance}>
                <div style={D.atGlanceTag}>AT A GLANCE</div>
                <p style={D.atGlanceText}>{content.atAGlance}</p>
              </div>

              <div style={D.conceptSection}>
                <div style={D.conceptHeader}>
                  <span style={D.conceptIcon}>🧠</span>
                  <div>
                    <div style={D.conceptSectionTitle}>Core Concepts</div>
                    <div style={D.conceptSectionSub}>Main Ideas</div>
                  </div>
                </div>
                <div style={D.conceptList}>
                  {content.coreConcepts.map((c, i) => (
                    <div key={i} style={D.conceptCard}>
                      <div style={D.conceptTopRow}>
                        <span style={D.conceptIndex}>Concept {String(i + 1).padStart(2, '0')}</span>
                        <span style={D.conceptTitle}>{c.title}</span>
                      </div>
                      <p style={D.conceptPara}>{c.explanation}</p>
                      {c.analogy && (
                        <div style={D.analogyBox}>
                          <span style={D.analogyLabel}>Analogy</span>
                          <p style={D.analogyText}>{c.analogy}</p>
                        </div>
                      )}
                      {c.mistake && (
                        <div style={D.mistakeBox}>
                          <span style={D.mistakeLabel}>Common Mistake</span>
                          <p style={D.mistakeText}>{c.mistake}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>

          {/* AI panel */}
          <aside style={{ ...D.aiPanel, ...(s.aiHL ? D.aiPanelHL : {}) }}>
            <div style={{ ...D.aiHead, ...(s.aiHL ? D.aiHeadHL : {}) }}>
              <div style={D.aiTitleRow}>
                <div style={D.aiTitle}>Kivo AI</div>
                {s.aiHL && <span style={D.aiActiveDot} />}
              </div>
              <div style={D.aiSub}>Focused on: {secTitle.slice(0, 36)}{secTitle.length > 36 ? '…' : ''}</div>
            </div>
            <div ref={chatRef} style={D.aiChat} className="kd-scroll">
              <AiBubble text={GREETING} />
              {s.messages.map((m, i) =>
                m.role === 'user'
                  ? <UserBubble key={i} text={m.text} />
                  : <AiBubble   key={i} text={m.text} />
              )}
              {s.inputText  && <UserBubble text={s.inputText} cursor />}
              {s.aiThinking && !s.aiTyping && <AiBubble thinking />}
              {s.aiTyping   && <AiBubble text={s.aiTyping} cursor />}
            </div>
            <div style={D.aiInputRow}>
              <div style={D.aiInputBox}>
                {s.inputText
                  ? <span style={{ color: C.text }}>{s.inputText}</span>
                  : <span style={D.aiPlaceholder}>Ask about this chapter…</span>}
              </div>
              <div style={D.aiSend}>↑</div>
            </div>
          </aside>

        </div>
      </div>
    </>
  )
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function Ib({ children, active }: { children: React.ReactNode; active?: boolean }) {
  return <div style={{ ...D.iconBtn, ...(active ? D.iconBtnOn : {}) }}>{children}</div>
}

function AiBubble({ text, thinking, cursor }: { text?: string; thinking?: boolean; cursor?: boolean }) {
  return (
    <div style={D.aiBubble}>
      <div style={D.aiBubbleRole}>KIVO</div>
      {thinking
        ? <div style={D.dots3}>
            <span style={D.dot3} />
            <span style={{ ...D.dot3, animationDelay: '0.2s' }} />
            <span style={{ ...D.dot3, animationDelay: '0.4s' }} />
          </div>
        : <div style={D.aiBubbleText}>{text}{cursor && <Cursor />}</div>
      }
    </div>
  )
}

function UserBubble({ text, cursor }: { text: string; cursor?: boolean }) {
  return (
    <div style={D.userBubble}>
      <div style={D.userBubbleText}>{text}{cursor && <Cursor />}</div>
    </div>
  )
}

function Cursor() {
  return <span style={{ animation: 'kd-blink 1s step-end infinite', marginLeft: '1px' }}>|</span>
}

// Minimal inline SVG icons
function HomeIco() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
}
function BarIco() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
}
function GearIco() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
}

// ─── Styles ──────────────────────────────────────────────────────────────────

const C = {
  bg:        '#0b0f1a',
  bgNav:     '#0d1220',
  bgActive:  '#141e30',
  border:    'rgba(255,255,255,0.07)',
  borderMid: 'rgba(255,255,255,0.11)',
  text:      '#e8edf5',
  muted:     '#7a8a9e',
  soft:      '#3e4e62',
  accent:    '#e6b44a',
  accentBg:  'rgba(230,180,74,0.1)',
}

const D: Record<string, CSSProperties> = {
  frame: {
    background: C.bg,
    border: `1px solid ${C.borderMid}`,
    borderRadius: '14px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    height: '580px',
    boxShadow: '0 48px 140px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04)',
    fontFamily: 'var(--font-geist-sans), Inter, system-ui, sans-serif',
    userSelect: 'none',
  },

  // Titlebar
  titlebar: {
    display: 'flex', alignItems: 'center', gap: '10px',
    padding: '9px 14px',
    borderBottom: `1px solid ${C.border}`,
    background: '#080c15',
    flexShrink: 0,
  },
  dots: { display: 'flex', gap: '5px', marginRight: '2px' },
  dot:  { width: '9px', height: '9px', borderRadius: '50%' },
  tbCrumb: { color: C.muted, fontSize: '11px', flex: 1 },
  tbChip: {
    fontSize: '10px', color: C.muted, fontWeight: 600,
    border: `1px solid ${C.border}`, borderRadius: '5px',
    padding: '2px 7px', background: 'rgba(255,255,255,0.03)',
  },

  body: { display: 'flex', flex: 1, overflow: 'hidden' },

  // Icon sidebar
  iconSidebar: {
    width: '48px', flexShrink: 0,
    display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
    borderRight: `1px solid ${C.border}`,
    background: '#080c15',
    padding: '10px 0',
  },
  iconTop: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' },
  iconBot: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' },
  logoMark: {
    width: '26px', height: '26px', borderRadius: '7px',
    background: 'linear-gradient(135deg, #e6b44a, #c89630)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: '11px', fontWeight: 800, color: '#0b0f1a',
    marginBottom: '8px',
  },
  iconBtn: {
    width: '32px', height: '32px', borderRadius: '7px',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    color: C.soft,
  },
  iconBtnOn: { background: C.bgActive, color: C.text },
  acctDot: {
    width: '26px', height: '26px', borderRadius: '50%',
    background: '#1e3a5f', color: '#5a93c8',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: '10px', fontWeight: 700,
  },

  // Chapter nav
  chapNav: {
    width: '232px', flexShrink: 0,
    display: 'flex', flexDirection: 'column',
    borderRight: `1px solid ${C.border}`,
    background: C.bgNav,
    overflow: 'hidden',
  },
  chapHead: {
    padding: '14px 13px 10px',
    borderBottom: `1px solid ${C.border}`,
    flexShrink: 0,
  },
  chapMeta: {
    fontSize: '9px', fontWeight: 700, letterSpacing: '0.1em',
    color: C.soft, marginBottom: '4px',
  },
  chapTitle: {
    fontSize: '11px', fontWeight: 700, color: C.text,
    lineHeight: 1.28, marginBottom: '10px',
  },
  prog: { display: 'flex', alignItems: 'center', gap: '8px' },
  progTrack: {
    flex: 1, height: '3px', borderRadius: '99px',
    background: 'rgba(255,255,255,0.07)',
  },
  progFill: {
    height: '100%', borderRadius: '99px',
    background: C.accent,
    transition: 'width 700ms ease',
  },
  progLabel: { fontSize: '10px', color: C.muted, flexShrink: 0 },

  navItems: { flex: 1, overflowY: 'auto', padding: '6px 4px' },
  navItem: {
    display: 'flex', alignItems: 'flex-start', gap: '7px',
    padding: '6px 9px', borderRadius: '7px',
  },
  navItemActive: { background: C.bgActive },
  navNum:        { fontSize: '10px', fontWeight: 700, color: C.soft, flexShrink: 0, paddingTop: '1px' },
  navNumActive:  { color: C.accent },
  navText:       { fontSize: '11px', color: C.muted, lineHeight: 1.32 },
  navTextActive: { color: C.text },
  navCheck:      { fontSize: '10px', color: '#4ade80', marginLeft: 'auto', flexShrink: 0, paddingTop: '1px' },

  chapFooter: {
    padding: '10px 8px 12px',
    display: 'flex', flexDirection: 'column', gap: '5px',
    borderTop: `1px solid ${C.border}`, flexShrink: 0,
  },
  exBtn: {
    padding: '7px 10px', borderRadius: '8px', fontSize: '11px',
    fontWeight: 600, color: C.muted, textAlign: 'center',
    border: `1px solid ${C.border}`, background: 'rgba(255,255,255,0.025)',
  },
  quizBtn: {
    padding: '7px 10px', borderRadius: '8px', fontSize: '11px',
    fontWeight: 600, color: C.accent, textAlign: 'center',
    border: '1px solid rgba(230,180,74,0.22)',
    background: 'rgba(230,180,74,0.06)',
    transition: 'box-shadow 200ms ease, border-color 200ms ease',
  },
  quizGlow: {
    animation: 'kd-quiz 1s ease-in-out infinite',
    borderColor: 'rgba(230,180,74,0.5)',
    background: 'rgba(230,180,74,0.13)',
  },

  // Reader
  reader: {
    flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden',
    borderRight: `1px solid ${C.border}`,
  },
  rdrHead: {
    padding: '11px 20px', borderBottom: `1px solid ${C.border}`,
    flexShrink: 0, background: '#090d16',
  },
  rdrChapLabel: { fontSize: '11px', fontWeight: 700, color: C.text, letterSpacing: '0.005em' },
  rdrMeta:      { fontSize: '10px', color: C.muted, marginTop: '3px' },
  rdrBody: {
    flex: 1, overflowY: 'auto', padding: '22px 26px',
    animation: 'kd-fadeUp 380ms ease both',
  },
  rdrTag: {
    fontSize: '9px', fontWeight: 800, letterSpacing: '0.14em',
    color: C.soft, marginBottom: '6px',
  },
  rdrH1: {
    fontSize: '17px', fontWeight: 800, color: C.text,
    lineHeight: 1.1, margin: '0 0 12px', letterSpacing: '-0.01em',
  },
  rdrIntro: { fontSize: '12px', color: C.muted, lineHeight: 1.68, margin: '0 0 18px' },
  rdrSecTag: {
    fontSize: '9px', fontWeight: 800, letterSpacing: '0.14em',
    color: C.soft, marginBottom: '5px',
  },
  rdrH2: {
    fontSize: '13px', fontWeight: 700, color: C.text,
    lineHeight: 1.28, margin: '0 0 12px',
  },
  atGlance: {
    background: 'rgba(230,180,74,0.05)',
    border: '1px solid rgba(230,180,74,0.13)',
    borderRadius: '10px', padding: '12px 14px',
  },
  atGlanceTag: {
    fontSize: '9px', fontWeight: 800, letterSpacing: '0.12em',
    color: C.accent, marginBottom: '6px',
  },
  atGlanceText: { fontSize: '12px', color: C.muted, lineHeight: 1.62, margin: 0 },

  // Core Concepts
  conceptSection: { marginTop: '16px' },
  conceptHeader: {
    display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px',
  },
  conceptIcon: { fontSize: '16px', lineHeight: 1 },
  conceptSectionTitle: { fontSize: '12px', fontWeight: 700, color: C.text },
  conceptSectionSub:   { fontSize: '10px', color: C.muted, marginTop: '1px' },
  conceptList: { display: 'flex', flexDirection: 'column', gap: '8px' },
  conceptCard: {
    border: `1px solid ${C.border}`,
    borderRadius: '10px', padding: '12px 14px',
    background: 'rgba(255,255,255,0.02)',
  },
  conceptTopRow: {
    display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '6px',
  },
  conceptIndex: {
    fontSize: '9px', fontWeight: 800, letterSpacing: '0.1em',
    color: C.soft, flexShrink: 0,
  },
  conceptTitle: { fontSize: '11px', fontWeight: 700, color: C.text, lineHeight: 1.3 },
  conceptPara:  { fontSize: '11px', color: C.muted, lineHeight: 1.62, margin: '0 0 6px' },
  analogyBox: {
    background: 'rgba(230,180,74,0.06)', border: '1px solid rgba(230,180,74,0.14)',
    borderRadius: '7px', padding: '8px 10px', marginTop: '6px',
  },
  analogyLabel: {
    display: 'block', fontSize: '9px', fontWeight: 800, letterSpacing: '0.1em',
    color: C.accent, marginBottom: '4px',
  },
  analogyText: { fontSize: '11px', color: C.muted, lineHeight: 1.55, margin: 0 },
  mistakeBox: {
    background: 'rgba(248,113,113,0.06)', border: '1px solid rgba(248,113,113,0.18)',
    borderRadius: '7px', padding: '8px 10px', marginTop: '6px',
  },
  mistakeLabel: {
    display: 'block', fontSize: '9px', fontWeight: 800, letterSpacing: '0.1em',
    color: '#f87171', marginBottom: '4px',
  },
  mistakeText: { fontSize: '11px', color: C.muted, lineHeight: 1.55, margin: 0 },

  // AI panel
  aiPanel: {
    width: '300px', flexShrink: 0,
    display: 'flex', flexDirection: 'column',
    background: '#0c1020',
    borderLeft: `1px solid ${C.border}`,
    transition: 'border-color 400ms ease, background 400ms ease, box-shadow 400ms ease',
  },
  aiPanelHL: {
    borderLeft: '1px solid rgba(230,180,74,0.38)',
    background: '#0e1324',
    boxShadow: 'inset 3px 0 28px rgba(230,180,74,0.05)',
  },
  aiHead: {
    padding: '12px 14px', flexShrink: 0,
    borderBottomWidth: '1px', borderBottomStyle: 'solid', borderBottomColor: C.border,
    transition: 'background 400ms ease, border-color 400ms ease',
  },
  aiHeadHL: {
    background: 'rgba(230,180,74,0.05)',
    borderBottomColor: 'rgba(230,180,74,0.18)',
  },
  aiTitleRow: { display: 'flex', alignItems: 'center', gap: '7px' },
  aiTitle: { fontSize: '12px', fontWeight: 700, color: C.text },
  aiActiveDot: {
    width: '7px', height: '7px', borderRadius: '50%',
    background: '#4ade80',
    boxShadow: '0 0 0 3px rgba(74,222,128,0.18)',
    animation: 'kd-activeDot 1.6s ease-in-out infinite',
    display: 'inline-block',
  },
  aiSub: { fontSize: '10px', color: C.muted, marginTop: '2px' },
  aiChat: {
    flex: 1, overflowY: 'auto', padding: '12px',
    display: 'flex', flexDirection: 'column', gap: '8px',
  },
  aiBubble: {
    background: '#111a2c', border: `1px solid ${C.border}`,
    borderRadius: '10px', padding: '10px 12px',
  },
  aiBubbleRole: {
    fontSize: '9px', fontWeight: 800, letterSpacing: '0.1em',
    color: C.accent, marginBottom: '5px',
  },
  aiBubbleText: { fontSize: '11px', color: C.muted, lineHeight: 1.62 },
  userBubble: { display: 'flex', justifyContent: 'flex-end' },
  userBubbleText: {
    background: 'rgba(230,180,74,0.1)',
    border: '1px solid rgba(230,180,74,0.18)',
    borderRadius: '10px 10px 3px 10px',
    padding: '8px 11px', fontSize: '11px', color: C.text,
    maxWidth: '82%', lineHeight: 1.5,
  },
  dots3: { display: 'flex', gap: '4px', alignItems: 'center', padding: '2px 0' },
  dot3: {
    width: '6px', height: '6px', borderRadius: '50%',
    background: C.muted, animation: 'kd-dot 1.2s ease-in-out infinite',
    display: 'inline-block',
  },

  aiInputRow: {
    padding: '10px 12px', borderTop: `1px solid ${C.border}`,
    display: 'flex', gap: '7px', alignItems: 'center', flexShrink: 0,
  },
  aiInputBox: {
    flex: 1, background: 'rgba(255,255,255,0.035)',
    border: `1px solid ${C.border}`, borderRadius: '8px',
    padding: '7px 10px', fontSize: '11px', minHeight: '32px',
  },
  aiPlaceholder: { color: C.soft },
  aiSend: {
    width: '30px', height: '30px', borderRadius: '8px',
    background: C.accentBg,
    border: '1px solid rgba(230,180,74,0.22)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    color: C.accent, fontSize: '13px', fontWeight: 700, flexShrink: 0,
  },
}
