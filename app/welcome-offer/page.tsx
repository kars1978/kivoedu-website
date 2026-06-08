import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "../SiteNav";
import { LandingPageActions } from "../LandingPageActions";
import { MessageCircle, Zap, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "75% Off Your First Plan | KivoEdu Welcome Offer",
  description:
    "First 50 students only — try Kivo's AI Tutor, Quick Quiz, and Reader, then unlock 75% off your first subscription. No credit card required to start.",
  alternates: { canonical: "/welcome-offer" },
  openGraph: {
    title: "75% Off Your First Plan | KivoEdu Welcome Offer",
    description:
      "Try 3 features and earn 75% off your first plan. Only 50 spots at this price.",
    url: "/welcome-offer",
    type: "website",
  },
};

const joinHref = "https://app.kivoedu.ai/join?from=welcome_offer";

const steps = [
  {
    Icon: MessageCircle,
    step: "1",
    title: "Ask the AI Tutor a question",
    body: "Pick any chapter you're studying. Ask a doubt. See how Kivo explains it step by step in textbook language.",
  },
  {
    Icon: Zap,
    step: "2",
    title: "Try a Quick Quiz",
    body: "Test yourself on what you just learned. Instant feedback, model answers — no waiting for a teacher.",
  },
  {
    Icon: BookOpen,
    step: "3",
    title: "Read a chapter in the Reader",
    body: "Open your textbook chapter inside Kivo. Ask questions right from the page as you read.",
  },
];

export default function WelcomeOfferPage() {
  return (
    <main className="lp-root">
      <SiteNav />

      <section className="lp-shell" aria-labelledby="landing-title">

        {/* Hero */}
        <div className="lp-hero">
          <div className="wo-urgency-badge" aria-label="Limited offer">
            <span className="wo-dot" aria-hidden="true" />
            Only 50 spots at this price
          </div>
          <p className="lp-eyebrow">Welcome Offer — First 50 Students</p>
          <h1 id="landing-title">
            Try 3 features.{" "}
            <span className="wo-hl">Earn 75% off</span>{" "}
            your first plan.
          </h1>
          <p className="lp-subhead">
            Sign up free, explore Kivo at your own pace — AI Tutor, Quick Quiz, and Reader — then unlock a 75% discount code on your first subscription. No credit card required to start.
          </p>
          <div className="lp-hero-actions">
            <LandingPageActions
              primaryHref={joinHref}
              primaryLabel="Claim Your 75% Off"
              analyticsPage="welcome_offer"
            />
          </div>
          <p className="wo-trust-line">Free to start &middot; No credit card &middot; 50 spots only</p>
        </div>

        {/* How it works */}
        <div className="wo-steps" aria-label="How to earn the discount">
          <p className="wo-steps-label">How it works</p>
          <div className="wo-steps-grid">
            {steps.map(({ Icon, step, title, body }) => (
              <article className="wo-step-card" key={step}>
                <div className="wo-step-top">
                  <span className="wo-step-num" aria-hidden="true">{step}</span>
                  <span className="wo-step-icon" aria-hidden="true">
                    <Icon size={18} strokeWidth={1.8} />
                  </span>
                </div>
                <h2>{title}</h2>
                <p>{body}</p>
              </article>
            ))}
          </div>
          <div className="wo-unlock-row" aria-label="Reward">
            <span className="wo-unlock-badge">→ 75% off code unlocked in your dashboard</span>
          </div>
        </div>

        {/* What you get */}
        <div className="wo-offer-card" aria-label="Offer details">
          <div className="wo-offer-left">
            <p className="wo-offer-eyebrow">What you get</p>
            <p className="wo-offer-price">
              <span className="wo-offer-original">₹199</span>
              <span className="wo-offer-discounted">₹50</span>
              <span className="wo-offer-period">/ month</span>
            </p>
            <p className="wo-offer-note">75% off — first billing month only. Regular price applies from month 2.</p>
          </div>
          <ul className="wo-offer-features">
            {[
              "All chapters — Math & Science",
              "Unlimited AI Tutor questions",
              "Unlimited quizzes & practice papers",
              "Full Reader access",
              "Parent progress dashboard",
              "Access until 31 Mar",
            ].map((f) => (
              <li key={f}>
                <span className="wo-check" aria-hidden="true">✓</span>
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Final CTA */}
        <div className="wo-final-cta">
          <h2>50 spots. Once they&apos;re gone, this offer closes.</h2>
          <p>Sign up free — no card needed. Try the features. Earn the discount.</p>
          <LandingPageActions
            primaryHref={joinHref}
            primaryLabel="Claim Your 75% Off"
            analyticsPage="welcome_offer_bottom"
          />
        </div>

        <div className="lp-conversion">
          <p className="lp-pricing-note">
            Full pricing from month 2: <Link href="/features#pricing">see pricing</Link>.
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

  .lp-hero { max-width: 790px; }

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
    line-height: 1.05;
    letter-spacing: 0;
  }

  .lp-subhead {
    max-width: 690px;
    margin-bottom: 0;
    color: var(--muted);
    font-size: 1.04rem;
    line-height: 1.62;
  }

  .lp-hero-actions { margin-top: 26px; }

  .lp-conversion { display: grid; gap: 12px; }

  .lp-actions { display: flex; flex-wrap: wrap; gap: 12px; }

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

  /* ── welcome-offer: urgency badge ── */
  .wo-urgency-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin: 0 0 16px;
    padding: 5px 14px;
    border-radius: 999px;
    border: 1px solid rgba(251, 191, 36, 0.35);
    background: rgba(251, 191, 36, 0.08);
    font-size: 0.8rem;
    font-weight: 700;
    color: rgb(251, 191, 36);
    letter-spacing: 0.01em;
  }

  .wo-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: rgb(251, 191, 36);
    flex-shrink: 0;
    animation: wo-pulse 2s ease-in-out infinite;
  }

  @keyframes wo-pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }

  .wo-hl { color: var(--cyan); }

  .wo-trust-line {
    margin: 14px 0 0;
    color: var(--soft);
    font-size: 0.83rem;
    letter-spacing: 0.01em;
  }

  /* ── welcome-offer: how it works steps ── */
  .wo-steps {
    display: grid;
    gap: 14px;
  }

  .wo-steps-label {
    margin: 0;
    color: var(--muted);
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .wo-steps-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 14px;
  }

  .wo-step-card {
    padding: 20px;
    border: 1px solid var(--line);
    border-radius: 8px;
    background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.025));
  }

  .wo-step-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  .wo-step-num {
    width: 28px;
    height: 28px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: rgba(79, 209, 197, 0.12);
    border: 1px solid rgba(79, 209, 197, 0.3);
    color: var(--cyan);
    font-size: 0.82rem;
    font-weight: 800;
  }

  .wo-step-icon {
    width: 36px;
    height: 36px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    border: 1px solid rgba(121, 167, 255, 0.24);
    background: rgba(121, 167, 255, 0.09);
    color: var(--blue);
  }

  .wo-step-card h2 {
    margin: 0 0 8px;
    color: var(--text);
    font-size: 1rem;
    line-height: 1.3;
  }

  .wo-step-card p {
    margin: 0;
    color: var(--muted);
    font-size: 0.88rem;
    line-height: 1.58;
  }

  .wo-unlock-row {
    display: flex;
    justify-content: center;
  }

  .wo-unlock-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 9px 20px;
    border-radius: 8px;
    border: 1px solid rgba(79, 209, 197, 0.3);
    background: rgba(79, 209, 197, 0.07);
    color: var(--cyan);
    font-size: 0.9rem;
    font-weight: 700;
  }

  /* ── welcome-offer: offer card ── */
  .wo-offer-card {
    display: grid;
    grid-template-columns: 280px minmax(0, 1fr);
    gap: 32px;
    padding: 28px 28px 26px;
    border: 1px solid rgba(79, 209, 197, 0.25);
    border-radius: 10px;
    background: linear-gradient(135deg, rgba(79,209,197,0.06), rgba(79,70,229,0.04));
  }

  .wo-offer-eyebrow {
    margin: 0 0 12px;
    color: var(--cyan);
    font-size: 0.76rem;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .wo-offer-price {
    display: flex;
    align-items: baseline;
    gap: 10px;
    margin: 0 0 8px;
  }

  .wo-offer-original {
    font-size: 1.2rem;
    color: var(--soft);
    text-decoration: line-through;
  }

  .wo-offer-discounted {
    font-size: 2.8rem;
    font-weight: 800;
    color: var(--cyan);
    line-height: 1;
  }

  .wo-offer-period {
    font-size: 0.9rem;
    color: var(--muted);
  }

  .wo-offer-note {
    margin: 0;
    color: var(--soft);
    font-size: 0.82rem;
    line-height: 1.5;
  }

  .wo-offer-features {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
  }

  .wo-offer-features li {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    gap: 9px;
    align-items: start;
    color: var(--muted);
    font-size: 0.92rem;
    line-height: 1.45;
  }

  .wo-check {
    color: var(--cyan);
    font-size: 0.78rem;
    font-weight: 800;
    margin-top: 0.18em;
  }

  /* ── welcome-offer: final CTA ── */
  .wo-final-cta {
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

  .wo-final-cta h2 {
    margin: 0;
    font-size: clamp(1.4rem, 3vw, 2rem);
    line-height: 1.22;
    color: var(--text);
    max-width: 540px;
  }

  .wo-final-cta p {
    margin: 0;
    color: var(--muted);
    font-size: 1rem;
    line-height: 1.55;
  }

  /* ── responsive ── */
  @media (prefers-reduced-motion: reduce) {
    .lp-btn { transition: none; }
    .wo-dot { animation: none; }
  }

  @media (max-width: 920px) {
    .wo-steps-grid { grid-template-columns: 1fr; }
    .wo-offer-card { grid-template-columns: 1fr; gap: 20px; }
  }

  @media (max-width: 640px) {
    .lp-shell,
    .lp-footer { width: min(1040px, calc(100% - 32px)); }
    .lp-shell { padding-top: 88px; padding-bottom: 42px; gap: 24px; }
    .lp-hero h1 { font-size: clamp(2.05rem, 9.8vw, 2.75rem); line-height: 1.04; }
    .lp-subhead { font-size: 0.98rem; line-height: 1.58; }
    .lp-hero-actions { margin-top: 22px; }
    .lp-btn { width: 100%; }
    .lp-footer { align-items: flex-start; flex-direction: column; }
    .wo-final-cta { padding: 28px 18px; }
    .wo-offer-card { padding: 20px; }
  }

  @media (max-width: 420px) {
    .lp-shell,
    .lp-footer { width: min(1040px, calc(100% - 24px)); }
    .lp-shell { padding-top: 96px; }
    .lp-hero h1 { font-size: clamp(1.88rem, 9.4vw, 2.35rem); }
  }
`;
