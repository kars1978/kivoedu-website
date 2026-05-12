'use client'

import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'

// ─── Palette (must precede c and CARDS) ──────────────────────────────────────

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
  greenBd: 'rgba(74,222,128,0.2)',
  red:     '#f87171',
  redBg:   'rgba(248,113,113,0.07)',
  redBd:   'rgba(248,113,113,0.22)',
  purple:  '#a78bfa',
}

// ─── Card-internal styles (must precede CARDS) ────────────────────────────────

const c: Record<string, CSSProperties> = {
  cardChapTitle: { fontSize: 12, fontWeight: 700, color: P.text, marginBottom: 10 },
  progressBar: { height: 4, borderRadius: 99, background: 'rgba(255,255,255,0.07)', overflow: 'hidden', marginBottom: 6 },
  progressFill: { height: '100%', borderRadius: 99, background: `linear-gradient(90deg, ${P.amber}, ${P.green})` },
  progressMeta: { fontSize: 10, color: P.muted },

  quizScore: { fontSize: 28, fontWeight: 800, color: P.text, lineHeight: 1, marginBottom: 4 },
  quizOf:    { fontSize: 14, fontWeight: 600, color: P.muted },
  quizLabel: { fontSize: 11, color: P.muted, marginBottom: 8 },
  quizChips: { display: 'flex', gap: 6 },
  chipGreen: { fontSize: 10, fontWeight: 700, color: P.green, background: P.greenBg, border: `1px solid ${P.greenBd}`, borderRadius: 99, padding: '2px 7px' },
  chipRed:   { fontSize: 10, fontWeight: 700, color: P.red,   background: P.redBg,   border: `1px solid ${P.redBd}`,   borderRadius: 99, padding: '2px 7px' },

  flashQ:   { fontSize: 12, fontWeight: 700, color: P.text, marginBottom: 7, lineHeight: 1.35 },
  flashA:   { fontSize: 11, color: P.muted, lineHeight: 1.55 },
  flashTag: { display: 'block', marginTop: 7, fontSize: 9, fontWeight: 700, color: P.amber, letterSpacing: '0.06em' },

  aiRole:   { fontSize: 9, fontWeight: 800, letterSpacing: '0.1em', color: P.amber, marginBottom: 6 },
  aiText:   { fontSize: 11, color: P.muted, lineHeight: 1.6, marginBottom: 7 },
  aiSource: { fontSize: 9, color: P.soft, fontStyle: 'italic' },

  masteryNum:  { fontSize: 32, fontWeight: 800, color: P.green, lineHeight: 1, marginBottom: 8 },
  masteryPct:  { fontSize: 16, fontWeight: 600, color: P.muted },
  masteryBar:  { height: 4, borderRadius: 99, background: 'rgba(255,255,255,0.07)', overflow: 'hidden', marginBottom: 8 },
  masteryFill: { height: '100%', borderRadius: 99, background: `linear-gradient(90deg, ${P.amber}, ${P.green})` },
  masteryChip: { fontSize: 10, fontWeight: 700, color: P.green, background: P.greenBg, border: `1px solid ${P.greenBd}`, borderRadius: 99, padding: '3px 9px', display: 'inline-block' },
}

// ─── Composite cards (static data, entrance-animated) ────────────────────────

const CARDS = [
  {
    id: 'progress',
    label: 'CHAPTER PROGRESS',
    content: (
      <>
        <div style={c.cardChapTitle}>Ch.1 Chemical Reactions</div>
        <div style={c.progressBar}>
          <div style={{ ...c.progressFill, width: '78%' }} />
        </div>
        <div style={c.progressMeta}>78% · 10 of 13 sections done</div>
      </>
    ),
    pos: { top: 0, left: 0, width: 254 },
    delay: 0,
  },
  {
    id: 'quiz',
    label: 'QUIZ RESULT',
    content: (
      <>
        <div style={c.quizScore}>8<span style={c.quizOf}> / 10</span></div>
        <div style={c.quizLabel}>Combination Reactions · 80%</div>
        <div style={c.quizChips}>
          <span style={c.chipGreen}>✓ 8 correct</span>
          <span style={c.chipRed}>✕ 2 wrong</span>
        </div>
      </>
    ),
    pos: { top: 0, right: 0, width: 224 },
    delay: 180,
  },
  {
    id: 'flashcard',
    label: 'FLASHCARD',
    content: (
      <>
        <div style={c.flashQ}>What is a combination reaction?</div>
        <div style={c.flashA}>
          Two or more substances combine to form a single product.
          <span style={c.flashTag}>Ch.1 — Verified</span>
        </div>
      </>
    ),
    pos: { bottom: 0, left: 0, width: 244 },
    delay: 280,
  },
  {
    id: 'ai',
    label: 'AI EXPLANATION',
    content: (
      <>
        <div style={c.aiRole}>KIVO</div>
        <div style={c.aiText}>
          When Mg burns, it combines with O₂ to form MgO — a combination
          reaction. The white flame is caused by incandescence of MgO particles.
        </div>
        <div style={c.aiSource}>Source: Ch.1, Section 4</div>
      </>
    ),
    pos: { bottom: 14, right: 0, width: 258 },
    delay: 360,
  },
  {
    id: 'mastery',
    label: 'MASTERY',
    content: (
      <>
        <div style={c.masteryNum}>84<span style={c.masteryPct}>%</span></div>
        <div style={c.masteryBar}>
          <div style={{ ...c.masteryFill, width: '84%' }} />
        </div>
        <div style={c.masteryChip}>↑ +12% this week</div>
      </>
    ),
    pos: { top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 190 },
    delay: 120,
  },
]

// ─── Section ──────────────────────────────────────────────────────────────────

export default function FinalCTASection() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section style={s.section} ref={ref} aria-labelledby="cta-heading">
      <style>{KEYFRAMES}</style>
      <div style={s.glow} aria-hidden="true" />

      <div style={s.inner}>

        {/* Left: copy + CTAs */}
        <div style={s.copyCol}>
          <h2 id="cta-heading" style={s.headline}>
            Built for the way<br />school actually works.
          </h2>
          <p style={s.sub}>
            From reading chapters to solving homework and revising concepts,
            Kivo helps students learn with clarity and confidence.
          </p>

          <div style={s.ctaRow}>
            <a
              href="https://app.kivoedu.ai/login"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-kivo"
            >
              Start Learning
            </a>
          </div>

          {/* Trust row */}
          <div style={s.trustRow}>
            {[
              'CBSE & Maharashtra Board',
              '9th & 10th Grade',
              'Math & Science',
            ].map(t => (
              <div key={t} style={s.trustItem}>
                <span style={s.trustDot} />
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* Right: composite product scene */}
        <div style={s.sceneCol} aria-hidden="true">
          <div style={s.scene}>
            {/* Background glow orb */}
            <div style={s.orb} />

            {/* Floating product cards */}
            {CARDS.map(card => (
              <div
                key={card.id}
                style={{
                  ...s.floatCard,
                  ...card.pos,
                  opacity: visible ? 1 : 0,
                  transform: visible
                    ? (card.pos.transform ?? 'none')
                    : `${card.pos.transform ? card.pos.transform + ' ' : ''}translateY(14px)`,
                  transition: `opacity 600ms ease ${card.delay}ms, transform 600ms ease ${card.delay}ms`,
                }}
              >
                <div style={s.floatCardLabel}>{card.label}</div>
                {card.content}
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  )
}

// ─── Keyframes ────────────────────────────────────────────────────────────────

const KEYFRAMES = `
  @keyframes cta-glow {
    from { transform: translate(-50%, -50%) scale(1); }
    to   { transform: translate(-50%, -50%) scale(1.1); }
  }
  @keyframes cta-float-a {
    0%,100% { transform: translateY(0px);  }
    50%      { transform: translateY(-5px); }
  }
  @keyframes cta-float-b {
    0%,100% { transform: translateY(0px); }
    50%      { transform: translateY(4px); }
  }
  @keyframes cta-pulse {
    0%,100% { opacity: 0.7; }
    50%      { opacity: 1;   }
  }
  @media (prefers-reduced-motion: reduce) {
    * { animation-duration: 0.001ms !important; transition-duration: 0.001ms !important; }
  }
  .btn-kivo {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 48px;
    border-radius: 999px;
    padding: 0 26px;
    font-size: 0.93rem;
    font-weight: 760;
    text-decoration: none;
    white-space: nowrap;
    cursor: pointer;
    color: #ffffff;
    border: 1px solid rgba(99, 102, 241, 0.55);
    background: linear-gradient(135deg, #4f46e5, #6366f1 52%, #818cf8);
    box-shadow: 0 16px 44px rgba(99, 102, 241, 0.28), 0 0 0 5px rgba(99, 102, 241, 0.07);
    transition: transform 180ms ease, box-shadow 180ms ease;
  }
  .btn-kivo:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 22px 60px rgba(99, 102, 241, 0.42), 0 0 0 7px rgba(99, 102, 241, 0.12);
  }
`

// ─── Section styles ───────────────────────────────────────────────────────────

const s: Record<string, CSSProperties> = {
  section: {
    position: 'relative', zIndex: 1,
    padding: '120px 0 136px',
    borderTop: '1px solid rgba(196,217,255,0.1)',
    background: `
      radial-gradient(circle at 50% 0%, rgba(230,180,74,0.1), transparent 32rem),
      radial-gradient(circle at 12% 80%, rgba(139,92,246,0.07), transparent 22rem),
      ${P.bg}
    `,
    overflow: 'hidden',
    fontFamily: 'var(--font-geist-sans), Inter, system-ui, sans-serif',
  },
  glow: {
    position: 'absolute', top: '0', left: '50%',
    transform: 'translate(-50%, -30%)',
    width: '60%', height: '55%', pointerEvents: 'none',
    background: 'radial-gradient(circle, rgba(230,180,74,0.13), transparent 18rem)',
    filter: 'blur(30px)',
    animation: 'cta-glow 14s ease-in-out infinite alternate',
  },

  inner: {
    position: 'relative', zIndex: 1,
    width: 'min(1180px, calc(100% - 48px))',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1.3fr',
    gap: '72px',
    alignItems: 'center',
  },

  // Copy column
  copyCol: {},
  headline: {
    margin: '0 0 22px',
    fontSize: 'clamp(2.5rem, 4.2vw, 4rem)',
    fontWeight: 800, color: P.text, lineHeight: 1.04, letterSpacing: '-0.02em',
  },
  sub: {
    margin: '0 0 36px',
    color: P.muted, fontSize: '1.05rem', lineHeight: 1.72, maxWidth: 440,
  },

  ctaRow: { display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 36 },
  btnSecondary: {
    display: 'inline-flex', alignItems: 'center',
    minHeight: 48, padding: '0 22px', borderRadius: 999,
    fontSize: '0.96rem', fontWeight: 700, color: P.text,
    border: `1px solid ${P.borderM}`,
    background: 'rgba(255,255,255,0.05)',
    textDecoration: 'none',
    transition: 'transform 180ms ease, border-color 180ms ease',
  },

  trustRow: { display: 'flex', flexWrap: 'wrap', gap: 6 },
  trustItem: {
    display: 'flex', alignItems: 'center', gap: 7,
    fontSize: '0.82rem', color: P.muted,
    background: 'rgba(255,255,255,0.035)',
    border: `1px solid ${P.border}`,
    borderRadius: 999, padding: '6px 12px',
  },
  trustDot: {
    width: 5, height: 5, borderRadius: '50%',
    background: P.amber, flexShrink: 0,
  },

  // Scene column
  sceneCol: {},
  scene: {
    position: 'relative',
    height: 340,
    margin: '0 auto',
  },
  orb: {
    position: 'absolute', top: '50%', left: '50%',
    width: 220, height: 220, borderRadius: '50%',
    transform: 'translate(-50%, -50%)',
    background: 'radial-gradient(circle, rgba(230,180,74,0.12), transparent 70%)',
    filter: 'blur(20px)',
    animation: 'cta-pulse 4s ease-in-out infinite',
  },
  floatCard: {
    position: 'absolute',
    background: P.card,
    border: `1px solid ${P.borderM}`,
    borderRadius: 14,
    padding: '12px 14px',
    boxShadow: '0 16px 48px rgba(0,0,0,0.4)',
  },
  floatCardLabel: {
    fontSize: 8, fontWeight: 800, letterSpacing: '0.1em',
    color: P.soft, marginBottom: 8,
  },

}

