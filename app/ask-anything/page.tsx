import { getLandingMetadata } from "../landingPages";
import ChatMockup from "./ChatMockup";
import Link from "next/link";
import SiteNav from "../SiteNav";
import { LandingPageActions } from "../LandingPageActions";
import { BookOpen, ShieldCheck, MoonStar } from "lucide-react";

export const metadata = getLandingMetadata("ask-anything");

const demoHref = "https://app.kivoedu.ai/demo?from=kivo_ai";

const proofPoints = [
  {
    Icon: BookOpen,
    title: "Textbook-based questions",
    body: "Students can ask from the chapter they are studying and get help in school-friendly language.",
  },
  {
    Icon: ShieldCheck,
    title: "Clear explanations",
    body: "Kivo breaks concepts down step by step, so the child understands why the answer works.",
  },
  {
    Icon: MoonStar,
    title: "Practice after learning",
    body: "Quick questions help students check whether the concept has actually clicked.",
  },
];

export default function AskAnythingPage() {
  return (
    <main className="lp-root">
      <SiteNav />

      <section className="lp-shell" aria-labelledby="landing-title">

        {/* Hero */}
        <div className="lp-hero">
          <p className="lp-eyebrow">AI Tutor for Grade 9-10</p>
          <h1 id="landing-title">
            Stuck on a concept? Get a clear explanation in seconds.
          </h1>
          <p className="lp-subhead">
            Kivo answers Grade 9–10 Math and Science questions with step-by-step explanations — built around CBSE and Maharashtra Board textbooks, not the internet.
          </p>
          <div className="lp-hero-actions">
            <LandingPageActions
              primaryHref={demoHref}
              primaryLabel="Try Kivo Free"
              analyticsPage="ask_anything"
            />
          </div>
          <p className="aa-trust-line">Free to try · No credit card · No app to download</p>
        </div>

        {/* Trust strip */}
        <div className="aa-trust-strip" aria-label="What Kivo covers">
          {[
            "CBSE & Maharashtra Board",
            "Grades 9 & 10 only",
            "Math & Science",
            "No app needed — works in browser",
          ].map((label) => (
            <span key={label} className="aa-badge">
              <span className="aa-badge-check" aria-hidden="true">✓</span>
              {label}
            </span>
          ))}
        </div>

        {/* Demo widget */}
        <div className="lp-mockup-slot">
          <div className="aa-mockup-wrap">
            <ChatMockup />
            <p className="aa-mockup-caption">
              This is how Kivo answers — step by step, in textbook language, with chapter context.
            </p>
          </div>
        </div>

        {/* Proof grid */}
        <div className="lp-proof-grid" aria-label="Ask Anything highlights">
          {proofPoints.map(({ Icon, title, body }) => (
            <article className="lp-proof-card" key={title}>
              <span className="lp-proof-icon" aria-hidden="true">
                <Icon size={20} strokeWidth={1.8} />
              </span>
              <h2>{title}</h2>
              <p>{body}</p>
            </article>
          ))}
        </div>

        {/* Fear addressed */}
        <div className="aa-fear" id="how-it-works">
          <div className="aa-fear-col">
            <h2 className="aa-fear-heading aa-does">What Kivo does</h2>
            <ul className="aa-fear-list">
              <li>Explains concepts step by step</li>
              <li>Asks practice questions after explaining</li>
              <li>Shows parents what was studied</li>
              <li>Stays within the board syllabus</li>
            </ul>
          </div>
          <div className="aa-fear-col">
            <h2 className="aa-fear-heading aa-does-not">What Kivo does not do</h2>
            <ul className="aa-fear-list aa-fear-list-no">
              <li>Write answers for homework or assignments</li>
              <li>Go off-syllabus or cover other subjects</li>
              <li>Require a download or installation</li>
              <li>Replace a teacher — it supports one</li>
            </ul>
          </div>
        </div>

        {/* Social proof — TODO: Replace with real student quotes */}
        <div className="aa-quotes">
          <blockquote className="aa-quote">
            <p className="aa-quote-text">&ldquo;I didn&apos;t understand Heredity at all. I asked Kivo three questions and it finally made sense.&rdquo;</p>
            <footer className="aa-quote-attr">— Class 10 student, CBSE</footer>
          </blockquote>
          <blockquote className="aa-quote">
            <p className="aa-quote-text">&ldquo;It&apos;s like texting a tutor at 11pm when no one else is available.&rdquo;</p>
            <footer className="aa-quote-attr">— Class 9 student, Maharashtra Board</footer>
          </blockquote>
        </div>

        {/* Final CTA — text only, CTA is in the hero */}
        <div className="aa-final-cta">
          <h2 className="aa-final-heading">Let your child try it on tonight&apos;s homework doubt.</h2>
          <p className="aa-final-sub">Free to start. If it helps, they&apos;ll come back on their own.</p>
          <p className="aa-final-note">Parents: after the demo, you&apos;ll see the progress dashboard too.</p>
        </div>

        <div className="lp-conversion">
          <p className="lp-pricing-note">
            Free to start. For full pricing, <Link href="/features#pricing">see pricing</Link>.
          </p>
        </div>
      </section>

      <footer className="lp-footer">
        <p>&copy; 2026 KivoEdu. All rights reserved.</p>
        <div>
          <Link href="/">Home</Link>
          <Link href="/features">Features</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </footer>

      <style>{styles}</style>
    </main>
  );
}

const styles = `
  *, *::before, *::after { box-sizing: border-box; }

  .lp-root {
    min-height: 100vh;
    color: var(--text);
    background:
      radial-gradient(circle at 12% 6%, rgba(79, 209, 197, 0.12), transparent 26rem),
      linear-gradient(180deg, var(--bg), var(--bg-deep));
    font-family: var(--font-geist-sans), Inter, system-ui, sans-serif;
    overflow-x: hidden;
  }

  .lp-shell,
  .lp-footer {
    position: relative;
    z-index: 1;
    width: min(1040px, calc(100% - 48px));
    margin: 0 auto;
  }

  .lp-shell {
    min-height: calc(100vh - 88px);
    display: grid;
    align-content: center;
    gap: 30px;
    padding: 126px 0 54px;
  }

  .lp-hero {
    max-width: 790px;
  }

  .lp-eyebrow {
    margin: 0 0 12px;
    color: var(--cyan);
    font-size: 0.76rem;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .lp-hero h1,
  .lp-proof-card h2,
  p { margin-top: 0; }

  .lp-hero h1 {
    max-width: 800px;
    margin-bottom: 18px;
    font-size: clamp(2.65rem, 5.2vw, 4.85rem);
    line-height: 1;
    letter-spacing: 0;
  }

  .lp-subhead {
    max-width: 690px;
    margin-bottom: 0;
    color: var(--muted);
    font-size: 1.04rem;
    line-height: 1.62;
  }

  .lp-hero-actions {
    margin-top: 26px;
  }

  .lp-conversion {
    display: grid;
    gap: 12px;
  }

  .lp-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }

  .lp-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    min-height: 46px;
    border-radius: 999px;
    padding: 0 22px;
    color: #fff;
    text-decoration: none;
    font-size: 0.93rem;
    font-weight: 760;
    border: 1px solid rgba(99, 102, 241, 0.55);
    background: linear-gradient(135deg, #4f46e5, #6366f1 52%, #79a7ff);
    box-shadow: 0 16px 44px rgba(99, 102, 241, 0.24);
    transition: transform 180ms ease, box-shadow 180ms ease;
  }

  .lp-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 20px 54px rgba(99, 102, 241, 0.34);
  }

  .lp-btn-secondary {
    color: var(--text);
    border-color: var(--line-strong);
    background: rgba(255, 255, 255, 0.055);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);
  }

  .lp-pricing-note {
    margin: 0;
    color: var(--soft);
    font-size: 0.88rem;
    line-height: 1.5;
  }

  .lp-pricing-note a {
    color: var(--accent);
    font-weight: 760;
    text-decoration: none;
  }

  .lp-pricing-note a:hover { color: var(--text); }

  .lp-mockup-slot {
    display: flex;
    justify-content: center;
  }

  .lp-proof-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 14px;
  }

  .lp-proof-card {
    min-height: 210px;
    padding: 20px;
    border: 1px solid var(--line);
    border-radius: 8px;
    background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.025));
  }

  .lp-proof-icon {
    width: 40px;
    height: 40px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 18px;
    border-radius: 8px;
    border: 1px solid rgba(121, 167, 255, 0.24);
    background: rgba(121, 167, 255, 0.09);
    color: var(--blue);
  }

  .lp-proof-card h2 {
    margin-bottom: 10px;
    color: var(--text);
    font-size: 1.03rem;
    line-height: 1.32;
  }

  .lp-proof-card p {
    margin-bottom: 0;
    color: var(--muted);
    font-size: 0.9rem;
    line-height: 1.58;
  }

  .lp-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    padding: 20px 0 36px;
    color: var(--soft);
    font-size: 0.86rem;
  }

  .lp-footer p { margin-bottom: 0; }
  .lp-footer div { display: flex; gap: 18px; }
  .lp-footer a { color: inherit; text-decoration: none; }
  .lp-footer a:hover { color: var(--text); }

  /* ── ask-anything: trust line ── */
  .aa-trust-line {
    margin: 14px 0 0;
    color: var(--soft);
    font-size: 0.83rem;
    letter-spacing: 0.01em;
  }

  /* ── ask-anything: trust strip ── */
  .aa-trust-strip {
    display: flex;
    flex-wrap: wrap;
    gap: 8px 14px;
    padding: 18px 20px;
    border: 1px solid var(--line);
    border-radius: 8px;
    background: rgba(255,255,255,0.03);
  }

  .aa-badge {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    font-size: 0.85rem;
    color: var(--muted);
    font-weight: 500;
  }

  .aa-badge-check {
    color: var(--green);
    font-size: 0.78rem;
    font-weight: 800;
    line-height: 1;
  }

  /* ── ask-anything: mockup wrap ── */
  .aa-mockup-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
    width: 100%;
    max-width: 460px;
  }

  .aa-mockup-caption {
    margin: 0;
    color: var(--muted);
    font-size: 0.88rem;
    font-style: italic;
    text-align: center;
    line-height: 1.5;
  }

  .aa-mockup-cta {
    display: flex;
    justify-content: center;
  }

  /* ── ask-anything: fear section ── */
  .aa-fear {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
  }

  .aa-fear-col {
    padding: 22px 22px 20px;
    border: 1px solid var(--line);
    border-radius: 8px;
    background: linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02));
  }

  .aa-fear-heading {
    margin-bottom: 14px;
    font-size: 1rem;
    line-height: 1.3;
  }

  .aa-does { color: var(--cyan); }
  .aa-does-not { color: var(--muted); }

  .aa-fear-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 9px;
  }

  .aa-fear-list li {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    gap: 9px;
    align-items: start;
    color: var(--muted);
    font-size: 0.91rem;
    line-height: 1.48;
  }

  .aa-fear-list li::before {
    content: "✓";
    color: var(--green);
    font-size: 0.78rem;
    font-weight: 800;
    margin-top: 0.18em;
  }

  .aa-fear-list-no li::before {
    content: "✕";
    color: var(--soft);
  }

  /* ── ask-anything: quotes ── */
  .aa-quotes {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
  }

  .aa-quote {
    margin: 0;
    padding: 20px 22px;
    border: 1px solid var(--line);
    border-left: 3px solid var(--cyan);
    border-radius: 0 8px 8px 0;
    background: rgba(255,255,255,0.025);
  }

  .aa-quote-text {
    margin: 0 0 10px;
    color: var(--text);
    font-size: 0.95rem;
    font-style: italic;
    line-height: 1.6;
  }

  .aa-quote-attr {
    color: var(--soft);
    font-size: 0.82rem;
  }

  /* ── ask-anything: final CTA ── */
  .aa-final-cta {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 14px;
    padding: 40px 24px;
    border: 1px solid var(--line);
    border-radius: 10px;
    background: linear-gradient(180deg, rgba(79,70,229,0.08), rgba(79,70,229,0.03));
  }

  .aa-final-heading {
    margin: 0;
    font-size: clamp(1.4rem, 3vw, 2rem);
    line-height: 1.22;
    color: var(--text);
    max-width: 560px;
  }

  .aa-final-sub {
    margin: 0;
    color: var(--muted);
    font-size: 1rem;
    line-height: 1.55;
  }

  .aa-final-note {
    margin: 0;
    color: var(--soft);
    font-size: 0.82rem;
    line-height: 1.5;
  }

  /* ── responsive ── */
  @media (prefers-reduced-motion: reduce) {
    .lp-btn { transition: none; }
  }

  @media (max-width: 920px) {
    .lp-proof-grid { grid-template-columns: 1fr; }
    .lp-proof-card { min-height: 0; }
    .aa-fear { grid-template-columns: 1fr; }
    .aa-quotes { grid-template-columns: 1fr; }
  }

  @media (max-width: 640px) {
    .lp-shell,
    .lp-footer { width: min(1040px, calc(100% - 32px)); }
    .lp-shell { padding-top: 88px; padding-bottom: 42px; gap: 24px; }
    .lp-hero h1 { font-size: clamp(2.05rem, 9.8vw, 2.75rem); line-height: 1.04; }
    .lp-subhead { font-size: 0.98rem; line-height: 1.58; }
    .lp-hero-actions { margin-top: 22px; }
    .lp-btn { width: 100%; }
    .lp-proof-card { padding: 18px; }
    .lp-footer { align-items: flex-start; flex-direction: column; }
    .aa-mockup-cta .lp-btn { width: auto; }
    .aa-final-cta { padding: 28px 18px; }
  }

  @media (max-width: 420px) {
    .lp-shell,
    .lp-footer { width: min(1040px, calc(100% - 24px)); }
    .lp-shell { padding-top: 96px; }
    .lp-hero h1 { font-size: clamp(1.88rem, 9.4vw, 2.35rem); }
    .lp-proof-card p { font-size: 0.85rem; line-height: 1.52; }
  }
`;
