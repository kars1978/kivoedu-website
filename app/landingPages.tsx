import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, ClipboardCheck, ShieldCheck, MoonStar } from "lucide-react";
import SiteNav from "./SiteNav";

const demoUrl = "https://app.kivoedu.ai/demo";
const loginUrl = "https://app.kivoedu.ai/login";

type LandingKey = "exam-ready" | "parent-progress" | "ask-anything";

type ProofPoint = {
  title: string;
  body: string;
};

type LandingPageConfig = {
  from: string;
  eyebrow: string;
  headline: string;
  headlineHighlight?: string;
  subhead: string;
  proofPoints: ProofPoint[];
  ctaLabel: string;
  metadata: Metadata;
};

export const landingPages: Record<LandingKey, LandingPageConfig> = {
  "exam-ready": {
    from: "quick_quiz",
    eyebrow: "Quiz + Practice Papers",
    headline: "Know your weak chapters before the exam does.",
    subhead:
      "Quiz yourself on one section, one chapter, or the full subject. Then generate a full CBSE-style practice paper and get it graded per question, with model answers.",
    proofPoints: [
      {
        title: "Three quiz levels",
        body: "Section quiz -> Chapter quiz -> Full subject mock. Each gives instant feedback and the model answer, not just correct or wrong.",
      },
      {
        title: "CBSE practice papers on demand",
        body: "Generate a complete 2-mark + 5-mark paper, answer it at your own pace, and get a scored result with per-question feedback.",
      },
      {
        title: "Know exactly what you lost marks on",
        body: "Kivo tells you what the correct CBSE answer should look like, not just a red cross.",
      },
    ],
    ctaLabel: "Try a free quiz",
    metadata: {
      title: "Exam Ready Practice",
      description:
        "KivoEdu helps students find weak chapters with quizzes, CBSE-style practice papers, scoring, and model answers.",
      alternates: { canonical: "/exam-ready" },
      openGraph: {
        title: "KivoEdu Exam Ready Practice",
        description:
          "Find weak chapters before the exam with quizzes, practice papers, scoring, and model answers.",
        url: "/exam-ready",
        type: "website",
      },
    },
  },
  "parent-progress": {
    from: "parent_progress",
    eyebrow: "Parent Dashboard",
    headline: "You're paying for a tutor. Now you can see if it's working.",
    subhead:
      "Kivo gives parents their own dashboard with quiz scores, reading streaks, practice paper grades, and weak chapters. No guessing. No waiting for report cards.",
    proofPoints: [
      {
        title: "Real learning signals",
        body: "See which chapters your child understands and which ones still need work, updated every session, not just at exam time.",
      },
      {
        title: "Practice paper scores",
        body: "Every CBSE-style paper your child attempts is graded and visible to you, with score, per-question feedback, and model answers.",
      },
      {
        title: "No tutors to schedule",
        body: "Kivo is available at 11 PM when your child is stuck and you can't be in the room. You see everything in the morning.",
      },
    ],
    ctaLabel: "Set up for my child",
    metadata: {
      title: "Parent Progress Dashboard",
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
    },
  },
  "ask-anything": {
    from: "kivo_ai",
    eyebrow: "AI Tutor",
    headline: "Ask again. And again. Kivo answers every time.",
    headlineHighlight: "Kivo answers every time.",
    subhead:
      "Every answer comes from your actual CBSE textbook, not a generic internet result. And if the first explanation doesn't click, Kivo tries a different one.",
    proofPoints: [
      {
        title: "Ask Again. And Again.",
        body: "Many children stop asking questions because they're afraid of being judged. Kivo never gets impatient. Your child can ask the same question as many times as needed until it finally clicks.",
      },
      {
        title: "Gounded In Their Textbook",
        body: "Every answer is grounded in your child's CBSE chapter and section. No guessing. No random internet answers. Just explanations that match what they're learning in school.",
      },
      {
        title: "Help Even After School Ends",
        body: "Questions don't only happen during class. Whether it's 5 PM, 11 PM, or the night before an exam, Kivo is available whenever your child needs help.",
      },
    ],
    ctaLabel: "Ask Kivo free",
    metadata: {
      title: "Ask Kivo AI Tutor",
      description:
        "Ask Kivo the same question again and again, with textbook-grounded explanations from supported CBSE chapters.",
      alternates: { canonical: "/ask-anything" },
      openGraph: {
        title: "Ask Kivo AI Tutor",
        description:
          "A textbook-grounded AI tutor students can ask repeatedly until the explanation clicks.",
        url: "/ask-anything",
        type: "website",
      },
    },
  },
};

export function getLandingMetadata(slug: LandingKey): Metadata {
  return landingPages[slug].metadata;
}

const itemIcons = [BookOpen, ShieldCheck, MoonStar];

function renderHeadline(headline: string, highlight?: string) {
  if (!highlight) return headline;
  const idx = headline.indexOf(highlight);
  if (idx === -1) return headline;
  return (
    <>
      {headline.slice(0, idx)}
      <span className="lp-hl">{highlight}</span>
    </>
  );
}

export function LandingPage({ slug, mockup, afterCta }: { slug: LandingKey; mockup?: React.ReactNode; afterCta?: React.ReactNode }) {
  const config = landingPages[slug];

  return (
    <main className="lp-root">
      <SiteNav />

      <section className="lp-shell" aria-labelledby="landing-title">
        <div className="lp-hero">
          <p className="lp-eyebrow">{config.eyebrow}</p>
          <h1 id="landing-title" className={config.headlineHighlight ? 'lp-h1-compact' : ''}>
            {renderHeadline(config.headline, config.headlineHighlight)}
          </h1>
          <p className="lp-subhead">{config.subhead}</p>

        </div>

        {mockup && <div className="lp-mockup-slot">{mockup}</div>}

        <div className="lp-proof-grid" aria-label={`${config.eyebrow} highlights`}>
          {config.proofPoints.map((point, index) => {
            const ItemIcon = itemIcons[index] ?? ShieldCheck;
            return (
              <article className="lp-proof-card" key={point.title}>
                <span className="lp-proof-icon" aria-hidden="true">
                  <ItemIcon size={20} strokeWidth={1.8} />
                </span>
                <h2>{point.title}</h2>
                <p>{point.body}</p>
              </article>
            );
          })}
        </div>

        <div className="lp-conversion">
          <div className="lp-actions">
            <a href={`${demoUrl}?from=${config.from}`} className="lp-btn" target="_blank" rel="noopener noreferrer">
              {config.ctaLabel}
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a href={loginUrl} className="lp-btn lp-btn-secondary" target="_blank" rel="noopener noreferrer">
              Create Account
            </a>
          </div>
          <p className="lp-pricing-note">
            Free to start. For full pricing, <Link href="/features#pricing">see pricing</Link>.
          </p>
          {afterCta}
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

      <style>{`
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

        .lp-pricing-note a:hover {
          color: var(--text);
        }

        .lp-mockup-slot {
          display: flex;
          justify-content: center;
        }

        .lp-hl {
          color: var(--cyan);
        }

        .lp-h1-compact {
          font-size: clamp(2rem, 4vw, 3.5rem) !important;
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

        @media (prefers-reduced-motion: reduce) {
          .lp-conversion {
          display: grid;
          gap: 12px;
        }

        .lp-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .lp-btn { transition: none; }
        }

        @media (max-width: 920px) {
          .lp-proof-grid { grid-template-columns: 1fr; }
          .lp-proof-card { min-height: 0; }
        }

        @media (max-width: 640px) {
          .lp-shell,
          .lp-footer { width: min(1040px, calc(100% - 32px)); }
          .lp-shell { padding-top: 176px; padding-bottom: 42px; gap: 24px; }
          .lp-hero h1 { font-size: clamp(2.25rem, 12vw, 3rem); line-height: 1; }
          .lp-subhead { font-size: 0.98rem; line-height: 1.58; }
          .lp-conversion {
          display: grid;
          gap: 12px;
        }

        .lp-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .lp-btn { width: 100%; }
          .lp-proof-card { padding: 18px; }
          .lp-footer { align-items: flex-start; flex-direction: column; }
        }

        @media (max-width: 420px) {
          .lp-shell,
          .lp-footer { width: min(1040px, calc(100% - 24px)); }
          .lp-shell { padding-top: 190px; }
          .lp-hero h1 { font-size: clamp(2.05rem, 11.8vw, 2.65rem); }
          .lp-proof-card p { font-size: 0.85rem; line-height: 1.52; }
        }
      `}</style>
    </main>
  );
}




