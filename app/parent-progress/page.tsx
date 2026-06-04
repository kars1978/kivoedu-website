import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, ShieldCheck, MoonStar } from "lucide-react";
import SiteNav from "../SiteNav";

export const metadata: Metadata = {
  title: "Parent Progress Dashboard | KivoEdu",
  description:
    "KivoEdu gives parents visibility into quiz scores, reading streaks, practice paper grades, and weak chapters.",
  alternates: { canonical: "/parent-progress" },
  openGraph: {
    title: "KivoEdu Parent Progress Dashboard",
    description:
      "See quiz scores, reading streaks, practice paper grades, and weak chapters without waiting for report cards.",
    url: "/parent-progress",
    type: "website",
  },
};

const demoUrl = "https://app.kivoedu.ai/demo";
const joinUrl = "https://app.kivoedu.ai/join";

const proofPoints = [
  {
    Icon: BookOpen,
    title: "Real learning signals",
    body: "See which chapters your child understands and which ones still need work, updated every session, not just at exam time.",
  },
  {
    Icon: ShieldCheck,
    title: "Practice paper scores",
    body: "Every CBSE-style paper your child attempts is graded and visible to you, with score, per-question feedback, and model answers.",
  },
  {
    Icon: MoonStar,
    title: "No tutors to schedule",
    body: "Kivo is available at 11 PM when your child is stuck and you can't be in the room. You see everything in the morning.",
  },
];

const chapters = [
  { name: "1. Chemical Reactions and Equations", pct: 88, color: "green", trend: "steady", trendLabel: "→ steady", flagged: false },
  { name: "2. Acids, Bases and Salts",            pct: 82, color: "green", trend: "up",     trendLabel: "↑ improving", flagged: false },
  { name: "3. Metals and Non-Metals",             pct: 74, color: "amber", trend: "steady", trendLabel: "→ steady", flagged: false },
  { name: "4. Carbon and Its Compounds",          pct: 69, color: "amber", trend: "up",     trendLabel: "↑ improving", flagged: false },
  { name: "5. Life Processes",                    pct: 91, color: "green", trend: "steady", trendLabel: "→ steady", flagged: false },
  { name: "6. Control and Coordination",          pct: 63, color: "amber", trend: "steady", trendLabel: "→ steady", flagged: false },
  { name: "7. How Do Organisms Reproduce?",       pct: 77, color: "amber", trend: "up",     trendLabel: "↑ improving", flagged: false },
  { name: "8. Heredity",                          pct: 58, color: "red",   trend: "down",   trendLabel: "↓ declining", flagged: true  },
  { name: "9. Light – Reflection and Refraction", pct: 85, color: "green", trend: "steady", trendLabel: "→ steady", flagged: false },
  { name: "10. The Human Eye and Colourful World",pct: 71, color: "amber", trend: "steady", trendLabel: "→ steady", flagged: false },
  { name: "11. Electricity",                      pct: 48, color: "red",   trend: "down",   trendLabel: "↓ declining", flagged: true  },
  { name: "12. Magnetic Effects of Current",      pct: 55, color: "red",   trend: "steady", trendLabel: "→ steady", flagged: false },
  { name: "13. Our Environment",                  pct: 93, color: "green", trend: "steady", trendLabel: "→ steady", flagged: false },
];

const weekDays = ["M", "T", "W", "T", "F", "S", "S"];

export default function ParentProgressPage() {
  return (
    <main className="pp-root">
      <SiteNav />

      {/* ── 2-col hero: copy left + bouncy report chrome right ── */}
      <section className="pp-hero">
        <div className="pp-glow1" aria-hidden="true" />
        <div className="pp-glow2" aria-hidden="true" />
        <div className="pp-hero-inner">

          {/* Left: copy + CTA */}
          <div className="pp-copy">
            <p className="pp-eyebrow">Parent Dashboard</p>
            <h1 className="pp-headline">
              Know where your child
              <br />
              <em>actually stands.</em>
            </h1>
            <p className="pp-subhead">
              Kivo gives parents a real-time window into their child&apos;s progress — exam readiness,
              chapter mastery, and the specific concepts that need attention this week. No guesswork.
            </p>
            <ul className="pp-bullets">
              <li><span className="pp-dot" aria-hidden="true" />Live exam readiness score across all chapters</li>
              <li><span className="pp-dot" aria-hidden="true" />Pinpoints weak topics before they become exam problems</li>
              <li><span className="pp-dot" aria-hidden="true" />Specific suggested actions — not generic advice</li>
              <li><span className="pp-dot" aria-hidden="true" />Study streak and consistency, day by day</li>
            </ul>
            <div className="pp-actions">
              <a
                href={`${demoUrl}?from=parent_progress`}
                className="pp-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                See it in action <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right: app chrome with bouncy report */}
          <div className="pp-chrome">
            <div className="pp-chrome-bar">
              <span className="pp-cd cd-red" aria-hidden="true" />
              <span className="pp-cd cd-yellow" aria-hidden="true" />
              <span className="pp-cd cd-green" aria-hidden="true" />
              <span className="pp-chrome-url">kivo.app / parent / report</span>
            </div>
            <div className="pp-viewport">
              <div className="pp-scroller" aria-hidden="true">
                <div className="rp">

                  {/* Mini header */}
                  <div className="rp-header">
                    <div className="rp-brand">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/kivo_logo.png" alt="Kivo" className="rp-logo" />
                      <div>
                        <div className="rp-student-name">Arjun Mehta</div>
                        <div className="rp-student-sub">Grade X · CBSE Science · Weekly Report</div>
                      </div>
                    </div>
                    <div className="rp-badge">
                      <span className="badge-dot" aria-hidden="true" />
                      Active 7 days in a row
                    </div>
                  </div>

                  {/* Hero row: donut + streak + week */}
                  <div className="rp-hero-row">

                    {/* Exam readiness donut */}
                    <div className="rp-card rp-ready">
                      <div className="rp-card-label">Exam Readiness</div>
                      <div className="rp-donut-wrap">
                        <svg width="88" height="88" viewBox="0 0 88 88" style={{ transform: "rotate(-90deg)", display: "block" }}>
                          <circle cx="44" cy="44" r="36" fill="none" stroke="#e2e5ec" strokeWidth="8" />
                          <circle cx="44" cy="44" r="36" fill="none" stroke="#059669" strokeWidth="8"
                            strokeDasharray="167.4 58.8" strokeLinecap="round" />
                        </svg>
                        <div className="rp-donut-center">
                          <span className="rp-donut-pct">74<span style={{ fontSize: "11px", fontWeight: 600 }}>%</span></span>
                          <span className="rp-donut-unit">readiness</span>
                        </div>
                      </div>
                      <div className="rp-ready-sub">Up <strong>+3%</strong> from last week</div>
                    </div>

                    {/* Streak */}
                    <div className="rp-card rp-streak">
                      <div className="rp-card-label">Study Streak</div>
                      <div className="rp-streak-num">12</div>
                      <div className="rp-streak-lbl">days in a row</div>
                      <div className="rp-stat-row"><span className="rp-stat-k">Total active days</span><span className="rp-stat-v">13 days</span></div>
                      <div className="rp-stat-row"><span className="rp-stat-k">This week</span><span className="rp-stat-v good">7 / 7</span></div>
                      <div className="rp-stat-row"><span className="rp-stat-k">Study time</span><span className="rp-stat-v">4 h 00 min</span></div>
                      <div className="rp-stat-row"><span className="rp-stat-k">Sessions</span><span className="rp-stat-v">18</span></div>
                    </div>

                    {/* Week activity */}
                    <div className="rp-card rp-week">
                      <div className="rp-card-label">This Week</div>
                      <div className="rp-week-days">
                        {weekDays.map((d, i) => (
                          <div className="rp-day-col" key={i}>
                            <span className="rp-day-name">{d}</span>
                            <div className={`rp-day-dot ${i === 1 ? "today" : "active"}`}>✓</div>
                          </div>
                        ))}
                      </div>
                      <div className="rp-week-summary">Perfect week — <strong>7 of 7 days</strong></div>
                      <hr className="rp-week-divider" />
                      <div className="rp-stat-row">
                        <span className="rp-stat-k" style={{ fontSize: "9.5px" }}>Consistency score</span>
                        <span className="rp-stat-v good" style={{ fontSize: "10px" }}>78 / 100</span>
                      </div>
                    </div>
                  </div>

                  {/* Skills profile */}
                  <div className="rp-card" style={{ padding: "14px 16px 16px" }}>
                    <div className="rp-section-title">Skills Profile</div>
                    <div className="rp-section-sub">Based on quiz performance across all chapters (Bloom&apos;s Taxonomy)</div>
                    <div className="rp-bloom-list">
                      <div className="rp-bloom-row">
                        <div className="rp-bloom-hd">
                          <span className="rp-bloom-name">Remember <span className="rp-tag rp-tag-best">strongest</span></span>
                          <span className="rp-bloom-score" style={{ color: "#059669" }}>93%</span>
                        </div>
                        <div className="rp-bloom-track"><div className="rp-bloom-fill" style={{ width: "93%", background: "#059669" }} /></div>
                      </div>
                      <div className="rp-bloom-row">
                        <div className="rp-bloom-hd">
                          <span className="rp-bloom-name">Understand</span>
                          <span className="rp-bloom-score" style={{ color: "#059669" }}>80%</span>
                        </div>
                        <div className="rp-bloom-track"><div className="rp-bloom-fill" style={{ width: "80%", background: "#059669" }} /></div>
                      </div>
                      <div className="rp-bloom-row">
                        <div className="rp-bloom-hd">
                          <span className="rp-bloom-name">Apply</span>
                          <span className="rp-bloom-score" style={{ color: "#d97706" }}>63%</span>
                        </div>
                        <div className="rp-bloom-track"><div className="rp-bloom-fill" style={{ width: "63%", background: "#d97706" }} /></div>
                      </div>
                      <div className="rp-bloom-row">
                        <div className="rp-bloom-hd">
                          <span className="rp-bloom-name">Analyze <span className="rp-tag rp-tag-focus">needs work</span></span>
                          <span className="rp-bloom-score" style={{ color: "#d97706" }}>53%</span>
                        </div>
                        <div className="rp-bloom-track"><div className="rp-bloom-fill" style={{ width: "53%", background: "#d97706" }} /></div>
                      </div>
                    </div>
                    <hr className="rp-divider" />
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                      <div>
                        <div className="rp-pill-label">Strong Concepts</div>
                        <div className="rp-pills">
                          <span className="rp-pill rp-pill-strong">Photosynthesis</span>
                          <span className="rp-pill rp-pill-strong">Refraction of Light</span>
                          <span className="rp-pill rp-pill-strong">Chemical Bonding</span>
                        </div>
                      </div>
                      <div>
                        <div className="rp-pill-label">Weak Concepts</div>
                        <div className="rp-pills">
                          <span className="rp-pill rp-pill-weak">Ohm&apos;s Law <span className="rp-pill-pct">48%</span></span>
                          <span className="rp-pill rp-pill-weak">Heredity &amp; Variation <span className="rp-pill-pct">58%</span></span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Insights + Actions */}
                  <div className="rp-lower">
                    <div className="rp-card" style={{ padding: "14px 16px" }}>
                      <div className="rp-section-title">Parent Insights</div>
                      <div className="rp-section-sub" style={{ marginBottom: "10px" }}>What Kivo noticed this week</div>
                      <div className="rp-insight-list">
                        <div className="rp-insight-row">
                          <div className="rp-insight-icon ii-good">✓</div>
                          <span className="rp-insight-text">Active 13 days and counting — great consistency.</span>
                        </div>
                        <div className="rp-insight-row">
                          <div className="rp-insight-icon ii-good">✓</div>
                          <span className="rp-insight-text">Life Processes (91%) and Our Environment (93%) fully mastered.</span>
                        </div>
                        <div className="rp-insight-row">
                          <div className="rp-insight-icon ii-warn">!</div>
                          <span className="rp-insight-text">Electricity accuracy dropped — down 11 points this week.</span>
                        </div>
                        <div className="rp-insight-row">
                          <div className="rp-insight-icon ii-action">→</div>
                          <span className="rp-insight-text" style={{ color: "#0d9488", fontWeight: 500 }}>
                            Recommend: 5 questions on Ohm&apos;s Law today.
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="rp-card" style={{ padding: "14px 16px" }}>
                      <div className="rp-section-title">Suggested Actions</div>
                      <div className="rp-section-sub" style={{ marginBottom: "10px" }}>Kivo&apos;s top priorities this week</div>
                      <div className="rp-action-cards">
                        <div className="rp-action-card">
                          <div className="rp-priority rp-p1">1</div>
                          <div className="rp-action-body">
                            <div className="rp-action-title">Revise Electricity</div>
                            <div className="rp-action-desc">Mastery at 48% — needs attention before the exam.</div>
                          </div>
                          <span className="rp-action-cta">Start ›</span>
                        </div>
                        <div className="rp-action-card">
                          <div className="rp-priority rp-p2">2</div>
                          <div className="rp-action-body">
                            <div className="rp-action-title">Practice Ohm&apos;s Law</div>
                            <div className="rp-action-desc">High hint usage and declining accuracy.</div>
                          </div>
                          <span className="rp-action-cta">Practice ›</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Chapter mastery */}
                  <div className="rp-card" style={{ padding: "14px 16px 10px" }}>
                    <div className="rp-section-title">Chapter Mastery</div>
                    <div className="rp-section-sub">CBSE Grade X Science · 13 chapters</div>
                    <div className="rp-chapters">
                      {chapters.map((ch) => (
                        <div className={`rp-ch-row${ch.flagged ? " rp-ch-flagged" : ""}`} key={ch.name}>
                          <span className="rp-ch-name">{ch.name}</span>
                          <div className="rp-bar-track">
                            <div className={`rp-bar-fill bg-${ch.color}`} style={{ width: `${ch.pct}%` }} />
                          </div>
                          <span className={`rp-ch-pct c-${ch.color}`}>{ch.pct}%</span>
                          <span className={`rp-ch-trend tr-${ch.trend}`}>{ch.trendLabel}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Proof cards ── */}
      <section className="pp-proof-section" aria-label="What parents see">
        <div className="pp-proof-inner">
          {proofPoints.map(({ Icon, title, body }) => (
            <article className="pp-proof-card" key={title}>
              <span className="pp-proof-icon" aria-hidden="true">
                <Icon size={20} strokeWidth={1.8} />
              </span>
              <h2>{title}</h2>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="pp-cta-section">
        <div className="pp-cta-inner">
          <div className="pp-actions">
            <a
              href={`${demoUrl}?from=parent_progress`}
              className="pp-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              See it in action <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
          <p className="pp-pricing-note">
            Free to start. For full pricing,{" "}
            <Link href="/features#pricing">see pricing</Link>.
          </p>
        </div>
      </section>

      <footer className="pp-footer">
        <p>© 2026 KivoEdu. All rights reserved.</p>
        <div>
          <Link href="/">Home</Link>
          <Link href="/features">Features</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </footer>

      <style>{`
        *, *::before, *::after { box-sizing: border-box; }

        .pp-root {
          min-height: 100vh;
          color: var(--text);
          background: var(--bg);
          font-family: var(--font-geist-sans), Inter, system-ui, sans-serif;
          overflow-x: hidden;
        }

        /* ── Hero ─────────────────────────────────────────────────────── */
        .pp-hero {
          position: relative;
          padding: 128px 0 96px;
          overflow: hidden;
          border-bottom: 1px solid rgba(196, 217, 255, 0.08);
        }

        .pp-glow1 {
          position: absolute; top: -8%; left: -4%; width: 52%; height: 60%;
          pointer-events: none;
          background: radial-gradient(circle at 30% 40%, rgba(79, 209, 197, 0.12), transparent 18rem);
          filter: blur(28px);
          animation: g1 16s ease-in-out infinite alternate;
        }
        .pp-glow2 {
          position: absolute; bottom: -8%; right: -4%; width: 48%; height: 55%;
          pointer-events: none;
          background: radial-gradient(circle at 70% 60%, rgba(99, 102, 241, 0.10), transparent 16rem);
          filter: blur(24px);
          animation: g2 14s ease-in-out infinite alternate;
        }
        @keyframes g1 { from { transform: translate3d(0,0,0) scale(1); } to { transform: translate3d(-2%,3%,0) scale(1.08); } }
        @keyframes g2 { from { transform: translate3d(0,0,0) scale(1); } to { transform: translate3d(3%,-2%,0) scale(1.06); } }

        .pp-hero-inner {
          position: relative; z-index: 1;
          width: min(1180px, calc(100% - 48px));
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1.55fr;
          gap: 64px;
          align-items: center;
        }

        .pp-copy { display: flex; flex-direction: column; }

        .pp-eyebrow {
          margin: 0 0 20px;
          font-size: 0.68rem; font-weight: 800; letter-spacing: 0.14em;
          text-transform: uppercase; color: var(--cyan);
        }

        .pp-headline {
          margin: 0 0 18px;
          font-size: clamp(2.2rem, 3.4vw, 3.2rem);
          font-weight: 800; line-height: 1.07; letter-spacing: -0.022em;
          color: var(--text);
        }

        .pp-headline em {
          font-style: normal;
          background: linear-gradient(90deg, var(--cyan), var(--blue));
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .pp-subhead {
          margin: 0 0 28px;
          color: var(--muted); font-size: 1rem; line-height: 1.72; max-width: 400px;
        }

        .pp-bullets {
          list-style: none; padding: 0; margin: 0 0 36px;
          display: flex; flex-direction: column; gap: 13px;
        }
        .pp-bullets li {
          display: flex; align-items: flex-start; gap: 11px;
          font-size: 0.95rem; color: #c8d4e8; line-height: 1.5;
        }
        .pp-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--cyan); flex-shrink: 0; margin-top: 7px; display: inline-block;
        }

        .pp-actions { display: flex; flex-wrap: wrap; gap: 12px; }

        .pp-btn {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          min-height: 46px; border-radius: 999px; padding: 0 22px;
          color: #fff; text-decoration: none;
          font-size: 0.93rem; font-weight: 760;
          border: 1px solid rgba(99, 102, 241, 0.55);
          background: linear-gradient(135deg, #4f46e5, #6366f1 52%, #79a7ff);
          box-shadow: 0 16px 44px rgba(99, 102, 241, 0.24);
          transition: transform 180ms ease, box-shadow 180ms ease;
        }
        .pp-btn:hover { transform: translateY(-2px); box-shadow: 0 20px 54px rgba(99, 102, 241, 0.34); }

        .pp-btn-ghost {
          color: var(--text);
          border-color: var(--line-strong);
          background: rgba(255, 255, 255, 0.055);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);
        }
        .pp-btn-ghost:hover { background: rgba(255, 255, 255, 0.085); }

        /* ── App chrome ──────────────────────────────────────────────── */
        .pp-chrome {
          border-radius: 14px; overflow: hidden;
          box-shadow: 0 0 0 1px rgba(196, 217, 255, 0.10), 0 40px 100px rgba(0, 0, 0, 0.55);
        }

        .pp-chrome-bar {
          background: #13161e;
          border-bottom: 1px solid rgba(196, 217, 255, 0.08);
          padding: 9px 14px;
          display: flex; align-items: center; gap: 7px;
        }
        .pp-cd { width: 10px; height: 10px; border-radius: 50%; display: inline-block; }
        .cd-red    { background: #FF5F56; }
        .cd-yellow { background: #FFBD2E; }
        .cd-green  { background: #27C93F; }
        .pp-chrome-url {
          margin-left: 10px; font-size: 10px;
          color: rgba(196, 217, 255, 0.35); letter-spacing: 0.01em;
        }

        .pp-viewport { height: 560px; overflow: hidden; background: #f0f2f5; }

        .pp-scroller {
          animation: report-bounce 24s ease-in-out infinite;
          will-change: transform;
        }

        @keyframes report-bounce {
          0%   { transform: translateY(0); }
          12%  { transform: translateY(0); }
          52%  { transform: translateY(-508px); }
          66%  { transform: translateY(-508px); }
          97%  { transform: translateY(0); }
          100% { transform: translateY(0); }
        }

        /* ── Report card internals (light surface) ───────────────────── */
        .rp {
          padding: 14px 14px 16px; background: #f0f2f5;
          display: flex; flex-direction: column; gap: 12px;
        }

        .rp-header {
          display: flex; align-items: center; justify-content: space-between;
          background: #fff; border: 1px solid #e2e5ec; border-radius: 10px;
          padding: 10px 14px; box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }
        .rp-brand { display: flex; align-items: center; gap: 8px; }
        .rp-logo  { height: 26px; width: auto; display: block; }
        .rp-student-name { font-size: 12px; font-weight: 700; color: #0d1117; }
        .rp-student-sub  { font-size: 10px; color: #6b7280; margin-top: 1px; }
        .rp-badge {
          display: flex; align-items: center; gap: 5px;
          background: rgba(5,150,105,0.08); border: 1px solid rgba(5,150,105,0.28);
          border-radius: 20px; padding: 4px 10px;
          font-size: 10px; font-weight: 600; color: #059669;
        }
        .badge-dot { width: 6px; height: 6px; border-radius: 50%; background: #059669; display: inline-block; }

        .rp-hero-row { display: grid; grid-template-columns: 162px 1fr 1fr; gap: 10px; }

        .rp-card {
          background: #fff; border: 1px solid #e2e5ec;
          border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }

        .rp-ready { padding: 14px 12px; display: flex; flex-direction: column; align-items: center; }
        .rp-card-label {
          font-size: 9px; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; color: #6b7280; margin-bottom: 10px;
        }
        .rp-donut-wrap { position: relative; width: 88px; height: 88px; margin-bottom: 8px; }
        .rp-donut-center {
          position: absolute; inset: 0;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
        }
        .rp-donut-pct  { font-size: 20px; font-weight: 800; color: #0d1117; line-height: 1; }
        .rp-donut-unit { font-size: 9px; color: #6b7280; margin-top: 1px; }
        .rp-ready-sub  { font-size: 9px; color: #6b7280; }
        .rp-ready-sub strong { color: #059669; }

        .rp-streak { padding: 14px 14px 12px; }
        .rp-streak-num { font-size: 32px; font-weight: 800; color: #059669; line-height: 1; margin-bottom: 2px; }
        .rp-streak-lbl { font-size: 11px; font-weight: 500; color: #374151; margin-bottom: 12px; }
        .rp-stat-row   { display: flex; justify-content: space-between; margin-bottom: 5px; }
        .rp-stat-k     { font-size: 10px; color: #6b7280; }
        .rp-stat-v     { font-size: 10px; font-weight: 600; color: #374151; }
        .rp-stat-v.good { color: #059669; }

        .rp-week { padding: 14px 12px 12px; }
        .rp-week-days { display: grid; grid-template-columns: repeat(7,1fr); gap: 4px; margin-top: 10px; }
        .rp-day-col   { display: flex; flex-direction: column; align-items: center; gap: 3px; }
        .rp-day-name  { font-size: 8px; font-weight: 600; color: #9ca3af; text-transform: uppercase; }
        .rp-day-dot   { width: 20px; height: 20px; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 9px; font-weight: 700; }
        .rp-day-dot.active { background: #059669; color: #fff; }
        .rp-day-dot.today  { background: #059669; color: #fff; outline: 2px solid rgba(5,150,105,0.3); outline-offset: 2px; }
        .rp-week-summary   { font-size: 10px; color: #6b7280; margin-top: 9px; }
        .rp-week-summary strong { color: #059669; }
        .rp-week-divider   { border: none; border-top: 1px solid #e2e5ec; margin: 8px 0; }

        .rp-section-title { font-size: 11px; font-weight: 700; color: #0d1117; margin-bottom: 2px; }
        .rp-section-sub   { font-size: 9.5px; color: #6b7280; margin-bottom: 11px; }

        .rp-bloom-list { display: flex; flex-direction: column; gap: 9px; }
        .rp-bloom-row  { display: flex; flex-direction: column; gap: 4px; }
        .rp-bloom-hd   { display: flex; justify-content: space-between; align-items: center; }
        .rp-bloom-name  { font-size: 11px; font-weight: 500; color: #374151; }
        .rp-bloom-score { font-size: 11px; font-weight: 700; }
        .rp-bloom-track { height: 6px; background: #f4f5f8; border-radius: 99px; overflow: hidden; }
        .rp-bloom-fill  { height: 100%; border-radius: 99px; }
        .rp-tag { display: inline-block; font-size: 9px; font-weight: 700; padding: 1px 6px; border-radius: 4px; margin-left: 5px; }
        .rp-tag-best  { background: rgba(5,150,105,0.08); color: #059669; }
        .rp-tag-focus { background: rgba(217,119,6,0.08); color: #d97706; }

        .rp-divider { border: none; border-top: 1px solid #e2e5ec; margin: 10px 0; }

        .rp-pill-label { font-size: 9px; font-weight: 700; color: #6b7280; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 6px; }
        .rp-pills { display: flex; flex-wrap: wrap; gap: 5px; }
        .rp-pill  { display: flex; align-items: center; gap: 4px; padding: 3px 8px; border-radius: 20px; font-size: 10px; font-weight: 500; }
        .rp-pill-strong { background: rgba(5,150,105,0.08); border: 1px solid rgba(5,150,105,0.28); color: #059669; }
        .rp-pill-weak   { background: rgba(220,38,38,0.08); border: 1px solid rgba(220,38,38,0.22); color: #dc2626; }
        .rp-pill-pct    { font-weight: 700; }

        .rp-lower { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }

        .rp-insight-list { display: flex; flex-direction: column; gap: 8px; }
        .rp-insight-row  { display: flex; gap: 8px; align-items: flex-start; }
        .rp-insight-icon {
          width: 18px; height: 18px; border-radius: 5px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          font-size: 9px; font-weight: 700; margin-top: 1px;
        }
        .ii-good   { background: rgba(5,150,105,0.10); color: #059669; }
        .ii-warn   { background: rgba(217,119,6,0.10);  color: #d97706; }
        .ii-action { background: rgba(13,148,136,0.10); color: #0d9488; }
        .rp-insight-text { font-size: 10.5px; color: #374151; line-height: 1.45; }

        .rp-action-cards { display: flex; flex-direction: column; gap: 8px; }
        .rp-action-card  {
          border: 1px solid #e2e5ec; border-radius: 8px; padding: 9px 11px;
          display: flex; align-items: center; gap: 10px; background: #f4f5f8;
        }
        .rp-priority {
          width: 18px; height: 18px; border-radius: 50%; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          font-size: 9px; font-weight: 700;
        }
        .rp-p1 { background: rgba(220,38,38,0.08); color: #dc2626; border: 1px solid rgba(220,38,38,0.22); }
        .rp-p2 { background: rgba(217,119,6,0.08);  color: #d97706; border: 1px solid rgba(217,119,6,0.25); }
        .rp-action-body  { flex: 1; min-width: 0; }
        .rp-action-title { font-size: 11px; font-weight: 600; color: #374151; }
        .rp-action-desc  { font-size: 9.5px; color: #6b7280; margin-top: 1px; }
        .rp-action-cta   { font-size: 10px; font-weight: 600; color: #0d9488; white-space: nowrap; }

        .rp-chapters { display: flex; flex-direction: column; }
        .rp-ch-row {
          display: grid; grid-template-columns: 1fr 130px 40px 52px;
          align-items: center; gap: 10px;
          padding: 7px 0; border-bottom: 1px solid #f0f2f5;
        }
        .rp-ch-row:last-child { border-bottom: none; }
        .rp-ch-name { font-size: 11px; font-weight: 500; color: #374151; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .rp-bar-track { height: 6px; background: #f4f5f8; border-radius: 99px; overflow: hidden; }
        .rp-bar-fill  { height: 100%; border-radius: 99px; }
        .bg-green { background: #059669; }
        .bg-amber { background: #d97706; }
        .bg-red   { background: #dc2626; }
        .rp-ch-pct  { font-size: 11px; font-weight: 700; text-align: right; }
        .c-green { color: #059669; }
        .c-amber { color: #d97706; }
        .c-red   { color: #dc2626; }
        .rp-ch-trend { font-size: 10px; font-weight: 500; text-align: right; white-space: nowrap; }
        .tr-up     { color: #059669; }
        .tr-steady { color: #9ca3af; }
        .tr-down   { color: #dc2626; }
        .rp-ch-flagged { background: rgba(220,38,38,0.04); border-radius: 6px; margin: 0 -4px; padding: 7px 4px; }
        .rp-ch-flagged .rp-ch-name { color: #dc2626; font-weight: 600; }

        /* ── Proof section ───────────────────────────────────────────── */
        .pp-proof-section {
          padding: 80px 0 64px;
          border-top: 1px solid rgba(196, 217, 255, 0.08);
        }
        .pp-proof-inner {
          width: min(1040px, calc(100% - 48px));
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
        }
        .pp-proof-card {
          min-height: 200px; padding: 20px;
          border: 1px solid var(--line); border-radius: 8px;
          background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.025));
        }
        .pp-proof-icon {
          width: 40px; height: 40px;
          display: inline-flex; align-items: center; justify-content: center;
          margin-bottom: 18px; border-radius: 8px;
          border: 1px solid rgba(121, 167, 255, 0.24);
          background: rgba(121, 167, 255, 0.09);
          color: var(--blue);
        }
        .pp-proof-card h2 { margin: 0 0 10px; color: var(--text); font-size: 1.03rem; line-height: 1.32; }
        .pp-proof-card p  { margin: 0; color: var(--muted); font-size: 0.9rem; line-height: 1.58; }

        /* ── Bottom CTA ──────────────────────────────────────────────── */
        .pp-cta-section { padding: 64px 0 80px; }
        .pp-cta-inner {
          width: min(1040px, calc(100% - 48px));
          margin: 0 auto;
          display: flex; flex-direction: column; gap: 16px;
        }
        .pp-pricing-note { margin: 0; color: var(--soft); font-size: 0.88rem; line-height: 1.5; }
        .pp-pricing-note a { color: var(--accent); font-weight: 760; text-decoration: none; }
        .pp-pricing-note a:hover { color: var(--text); }

        /* ── Footer ──────────────────────────────────────────────────── */
        .pp-footer {
          width: min(1040px, calc(100% - 48px));
          margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between; gap: 24px;
          padding: 20px 0 36px;
          border-top: 1px solid rgba(196, 217, 255, 0.08);
          color: var(--soft); font-size: 0.86rem;
        }
        .pp-footer p   { margin: 0; }
        .pp-footer div { display: flex; gap: 18px; }
        .pp-footer a   { color: inherit; text-decoration: none; }
        .pp-footer a:hover { color: var(--text); }

        /* ── Responsive ──────────────────────────────────────────────── */
        @media (prefers-reduced-motion: reduce) {
          .pp-btn        { transition: none; }
          .pp-scroller   { animation: none; }
          .pp-glow1, .pp-glow2 { animation: none; }
        }

        @media (max-width: 960px) {
          .pp-hero { padding: 104px 0 72px; }
          .pp-hero-inner { grid-template-columns: 1fr; gap: 40px; }
          .pp-chrome { max-width: 560px; margin: 0 auto; }
          .pp-proof-inner { grid-template-columns: 1fr; }
          .pp-proof-card { min-height: 0; }
        }

        /* Nav switches to 2-row layout at 760px — becomes ~120px tall */
        @media (max-width: 760px) {
          .pp-hero { padding: 144px 0 64px; }
        }

        @media (max-width: 640px) {
          /* hero padding must clear the 120px 2-row mobile nav */
          .pp-hero { padding: 140px 0 52px; }
          .pp-hero-inner,
          .pp-proof-inner,
          .pp-cta-inner { width: min(1040px, calc(100% - 32px)); }
          .pp-headline { font-size: clamp(1.8rem, 9vw, 2.4rem); }
          .pp-subhead  { font-size: 0.92rem; max-width: 100%; }
          .pp-bullets li { font-size: 0.9rem; }
          .pp-actions  { flex-direction: column; }
          .pp-btn      { width: 100%; justify-content: center; }

          /* Show the chrome on mobile — resize the viewport window */
          .pp-chrome   { display: block; max-width: 100%; }
          .pp-viewport { height: 460px; }

          /* Fix chrome internal layout so nothing overflows */
          .rp { padding: 10px 10px 12px; gap: 8px; }
          .rp-header { flex-wrap: wrap; gap: 6px; }
          .rp-badge  { font-size: 9px; padding: 3px 8px; }
          /* Donut spans full width; streak + week fill the 2-col row below */
          .rp-hero-row { grid-template-columns: 1fr 1fr; }
          .rp-ready    { grid-column: 1 / -1; flex-direction: row; align-items: center; gap: 16px; padding: 10px 14px; }
          .rp-ready .rp-card-label { margin-bottom: 0; }
          /* Two-column lower → single column */
          .rp-lower { grid-template-columns: 1fr; }
          /* Chapter rows: drop the trend label, shrink the bar */
          .rp-ch-row { grid-template-columns: 1fr 60px 32px; gap: 6px; }
          .rp-ch-trend { display: none; }

          .pp-proof-section { padding: 48px 0 40px; }
          .pp-proof-card { padding: 16px; }
          .pp-cta-section { padding: 40px 0 52px; }
          .pp-footer   { width: min(1040px, calc(100% - 32px)); flex-direction: column; align-items: flex-start; gap: 12px; }
          .pp-footer div { flex-wrap: wrap; gap: 14px; }
        }
      `}</style>
    </main>
  );
}
