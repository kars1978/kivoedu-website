import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Calculator,
  FlaskConical,
  TrendingUp,
  NotebookPen,
} from "lucide-react";
import { LOGO_SRC } from "./constants";
import heroCard01 from "./public/hero_card_01.png";
import PricingSection from "./PricingSection";

const loginUrl = "https://app.kivoedu.ai/login";

export const metadata: Metadata = {
  title: "KivoEdu | AI Tutoring Built for Students",
  description:
    "KivoEdu is a curriculum-grounded AI tutor that helps students ask questions, practice, and revise with content approved by their school.",
};

export default function Home() {
  return (
    <main className="root">
      <div className="site-glow" aria-hidden="true" />
      <nav className="nav">
        <div className="nav-inner">
          <Link href="/" className="logo-link" aria-label="KivoEdu home">
            <Image
              src={LOGO_SRC}
              alt="KivoEdu"
              width={138}
              height={52}
              style={{ objectFit: "contain", height: "auto" }}
              priority
            />
          </Link>
          <div className="nav-links" aria-label="Primary navigation">
            <a href="#pricing">Pricing</a>
            <a href="#platform-overview">Experience</a>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <span className="nav-sep" aria-hidden="true" />
          <div className="nav-auth">
            <a
              href={loginUrl}
              className="nav-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Log in
            </a>
            <a
              href={loginUrl}
              className="btn btn-nav"
              target="_blank"
              rel="noopener noreferrer"
            >
              Try Kivo
            </a>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-bg" aria-hidden="true">
          <div className="hero-bg-glow" />
        </div>
        <div className="hero-grid reveal">
          <div className="hero-copy">
            <h1>Learning, the way it should feel.</h1>
            <p className="hero-sub">
              Kivo helps students understand concepts clearly, practice with confidence, and make steady progress every day.
            </p>
            <div className="hero-actions">
              <a
                href={loginUrl}
                className="btn-kivo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Learning
              </a>
              <a href="#why-kivo" className="btn btn-secondary">
                Why Kivo Works
              </a>
            </div>
            <p className="hero-ai-badge">AI-assisted learning • Built around real textbooks</p>
          </div>
          <figure className="hero-image-frame">
            <Image
              src={heroCard01}
              alt="A student studying calmly with supportive learning guidance"
              className="hero-image"
              priority
              sizes="(max-width: 900px) 100vw, 58vw"
              placeholder="blur"
            />
          </figure>
        </div>
      </section>
      <section className="why-kivo" id="why-kivo" aria-labelledby="why-kivo-title">
        <div className="why-kivo-inner reveal">
          <div className="why-kivo-heading">
            <h2 id="why-kivo-title">Why Kivo Works</h2>
            <p>
              Thoughtfully designed to help students learn with more clarity,
              confidence, and consistency.
            </p>
          </div>
          <div className="why-kivo-grid">
            <article className="why-kivo-card">
              <span className="why-kivo-icon why-kivo-icon--clear" aria-hidden="true">
                <BookOpen size={24} strokeWidth={1.6} />
              </span>
              <h3>Built around your curriculum</h3>
              <p>
                Kivo’s learning content is designed around the curriculum students already follow in school, making studying feel more familiar and connected.
              </p>
            </article>
            <article className="why-kivo-card">
              <span className="why-kivo-icon why-kivo-icon--support" aria-hidden="true">
                <NotebookPen size={24} strokeWidth={1.6} />
              </span>
              <h3>Answers connected to your textbooks</h3>
              <p>
                Kivo uses the student’s textbooks and learning material to provide explanations that stay relevant, accurate, and easy to follow.
              </p>
            </article>
            <article className="why-kivo-card">
              <span className="why-kivo-icon why-kivo-icon--journey" aria-hidden="true">
                <TrendingUp size={24} strokeWidth={1.6} />
              </span>
              <h3>Learning that feels supportive</h3>
              <p>
                From reading and revision to quizzes and progress tracking, Kivo helps students build confidence one chapter at a time.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="product-experience" id="platform-overview">
        <div className="product-inner reveal">
          <div className="product-heading">
            <h2>Built for everyday learning</h2>
            <p>
              Kivo supports students through understanding, practice, and steady
              progress.
            </p>
          </div>

          <div className="support-strip-compact" aria-label="Kivo currently supports">
            <span className="support-label">Supports</span>
            <span className="support-chip-board">CBSE</span>
            <span className="support-chip-board">Maharashtra State Board</span>
            <span className="support-chip-grade">Grades 9-10</span>
            <span className="support-subject support-chip-subject">
              <Calculator size={14} aria-hidden="true" strokeWidth={1.6} />
              Math
            </span>
            <span className="support-subject support-chip-subject">
              <FlaskConical size={14} aria-hidden="true" strokeWidth={1.6} />
              Science
            </span>
          </div>

          <div className="experience-flow">
            <article className="experience-row">
              <div className="experience-copy">
                <span className="experience-kicker">Understand</span>
                <h3>Get unstuck. Learn the why.</h3>
                <p>
                  Students get clear, AI-assisted explanations connected to their textbooks, helping each step feel easier to understand and follow.
                </p>
              </div>
              <div className="experience-visual experience-visual--explain" aria-hidden="true">
                <div className="ui-window">
                  <div className="ui-window-top">
                    <span />
                    <span />
                    <span />
                    <strong>Chapter help</strong>
                  </div>
                  <div className="explain-layout">
                    <div className="reader-pane">
                      <div className="ui-tag">Textbook</div>
                      <h4>Chemical Reactions</h4>
                      <p>Magnesium reacts with oxygen to form magnesium oxide.</p>
                      <div className="highlight-line" />
                      <div className="soft-line short" />
                    </div>
                    <div className="answer-pane">
                      <div className="ui-tag">Kivo explanation</div>
                      <p>
                        Start with what changes: magnesium combines with oxygen.
                      </p>
                      <ul>
                        <li>Identify the reactants</li>
                        <li>Connect it to combination reactions</li>
                        <li>Check the final product</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <article className="experience-row experience-row--reverse">
              <div className="experience-copy">
                <span className="experience-kicker">Practice</span>
                <h3>Practice until concepts click.</h3>
                <p>
                  Quizzes and guided practice help students retry, reinforce,
                  and build confidence without turning learning into pressure.
                </p>
              </div>
              <div className="experience-visual experience-visual--practice" aria-hidden="true">
                <div className="quiz-card-mini">
                  <div className="quiz-meta">
                    <span>Chapter quiz</span>
                    <span>Q1 of 5</span>
                  </div>
                  <h4>Which reaction forms one product from two reactants?</h4>
                  <div className="option">A. Decomposition reaction</div>
                  <div className="option option-correct">B. Combination reaction</div>
                  <div className="feedback-mini">Correct. The reactants join to form a new substance.</div>
                </div>
                <div className="mastery-mini">
                  <span>Chapter mastery</span>
                  <strong>84%</strong>
                  <div className="progress-track">
                    <div />
                  </div>
                </div>
              </div>
            </article>

            <article className="experience-row">
              <div className="experience-copy">
                <span className="experience-kicker">Progress</span>
                <h3>Keep learning forward.</h3>
                <p>
                  Revision tools, chapter tracking, and progress cues help
                  students know what to review next and keep a steady rhythm.
                </p>
              </div>
              <div className="experience-visual experience-visual--progress" aria-hidden="true">
                <div className="progress-board">
                  <div className="progress-head">
                    <span>Science · Grade 10</span>
                    <strong>This week</strong>
                  </div>
                  {[
                    ["Chemical Reactions", "91%", "mastered"],
                    ["Acids, Bases and Salts", "64%", "review"],
                    ["Electricity", "38%", "next"],
                  ].map(([chapter, score, state]) => (
                    <div className="chapter-row" key={chapter}>
                      <div>
                        <strong>{chapter}</strong>
                        <span>{state}</span>
                      </div>
                      <em>{score}</em>
                    </div>
                  ))}
                </div>
                <div className="revision-card-mini">
                  <BookOpen size={17} aria-hidden="true" strokeWidth={1.6} />
                  <span>Review weak concepts before the next quiz</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="ai-philosophy" aria-labelledby="ai-philosophy-title">
        <div className="ai-philosophy-inner reveal">
          <span className="ai-philosophy-kicker">AI with a learning purpose</span>
          <h2 id="ai-philosophy-title">Thoughtfully powered by AI</h2>
          <p>
            Kivo combines AI-assisted learning with real textbooks, guided
            practice, and curriculum-connected support to help students learn
            with more clarity and confidence.
          </p>
          <p className="ai-philosophy-note">
            Designed to support understanding, not replace learning.
          </p>
        </div>
      </section>
      <PricingSection />

      <footer className="footer">
        <div className="footer-inner">
          <a href="#" className="logo-link" aria-label="KivoEdu home">
            <Image
              src={LOGO_SRC}
              alt="KivoEdu"
              width={92}
              height={34}
              style={{ objectFit: "contain", height: "auto" }}
            />
          </a>
          <p>&copy; 2026 KivoEdu. All rights reserved.</p>
          <Link href="/blog">Blog</Link>
        </div>
      </footer>

      <style>{`
        *, *::before, *::after {
          box-sizing: border-box;
        }

        :root {
          --bg: #070a12;
          --bg-deep: #050812;
          --panel: rgba(13, 19, 32, 0.78);
          --panel-strong: rgba(17, 27, 44, 0.86);
          --line: rgba(196, 217, 255, 0.13);
          --line-strong: rgba(196, 217, 255, 0.25);
          --text: #f4f7fb;
          --muted: #afbad0;
          --soft: #78859b;
          --cyan: #4fd1c5;
          --blue: #79a7ff;
          --green: #7ee787;
          --orange: #ffb86b;
          --accent: #ffd166;
          --accent-ink: #171101;
          --shadow: 0 30px 90px rgba(0, 0, 0, 0.34);
          --max: 1180px;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
        }

        .root {
          position: relative;
          min-height: 100vh;
          color: var(--text);
          background:
            radial-gradient(circle at 12% 8%, rgba(79, 209, 197, 0.22), transparent 30rem),
            radial-gradient(circle at 88% 0%, rgba(121, 167, 255, 0.22), transparent 28rem),
            radial-gradient(circle at 50% 35%, rgba(255, 209, 102, 0.08), transparent 34rem),
            linear-gradient(180deg, var(--bg) 0%, #09101d 48%, var(--bg-deep) 100%);
          font-family: var(--font-geist-sans), Inter, system-ui, sans-serif;
          overflow-x: hidden;
        }

        .root::before {
          content: "";
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          opacity: 0.14;
          background-image:
            linear-gradient(rgba(196, 217, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(196, 217, 255, 0.045) 1px, transparent 1px);
          background-size: 72px 72px;
          mask-image: linear-gradient(to bottom, black, transparent 78%);
        }

        .site-glow {
          position: fixed;
          inset: -20% -10% auto;
          z-index: 0;
          height: 60vh;
          pointer-events: none;
          background:
            radial-gradient(circle at 18% 38%, rgba(126, 231, 135, 0.16), transparent 18rem),
            radial-gradient(circle at 74% 22%, rgba(79, 209, 197, 0.22), transparent 22rem);
          filter: blur(18px);
          animation: ambientShift 13s ease-in-out infinite alternate;
        }

        .nav,
        .hero,
        .product-experience,
        .ai-philosophy,
        .section-band,
        .footer {
          position: relative;
          z-index: 1;
        }

        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 20;
          border-bottom: 1px solid var(--line);
          background: rgba(7, 10, 18, 0.74);
          backdrop-filter: blur(18px);
        }

        .nav-inner,
        .section-inner,
        .footer-inner {
          width: min(var(--max), calc(100% - 48px));
          margin: 0 auto;
        }

        .nav-inner {
          height: 76px;
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .nav-auth {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .logo-link {
          display: inline-flex;
          align-items: center;
          text-decoration: none;
        }

        .nav-links {
          margin-left: auto;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .nav-sep {
          width: 1px;
          height: 18px;
          background: var(--line-strong);
          flex-shrink: 0;
        }

        .nav-links a,
        .footer a {
          color: var(--muted);
          font-size: 0.88rem;
          text-decoration: none;
          transition: color 160ms ease;
        }

        .nav-links a,
        .nav-link {
          padding: 5px 10px;
          border-radius: 999px;
          transition: color 160ms ease, background 160ms ease;
        }

        .nav-link {
          color: var(--muted);
          font-size: 0.88rem;
          text-decoration: none;
        }

        .nav-links a:hover,
        .footer a:hover {
          color: var(--text);
        }

        .nav-links a:hover,
        .nav-link:hover {
          color: var(--text);
          background: rgba(255, 255, 255, 0.07);
        }

        a:focus-visible,
        button:focus-visible {
          outline: 3px solid rgba(255, 209, 102, 0.78);
          outline-offset: 4px;
          border-radius: 10px;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 44px;
          border-radius: 999px;
          padding: 0 20px;
          font-weight: 760;
          font-size: 0.92rem;
          text-decoration: none;
          transition:
            transform 180ms ease,
            border-color 180ms ease,
            background 180ms ease,
            box-shadow 180ms ease;
          white-space: nowrap;
        }

        .btn:hover {
          transform: translateY(-2px) scale(1.03);
        }

        .btn-nav,
        .btn-secondary {
          color: var(--text);
          border: 1px solid var(--line-strong);
          background: rgba(255, 255, 255, 0.055);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);
        }

        .btn-nav {
          min-height: 34px;
          padding: 0 14px;
          font-size: 0.81rem;
        }

        .btn-secondary:hover,
        .btn-nav:hover {
          border-color: rgba(255, 209, 102, 0.42);
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 14px 36px rgba(79, 209, 197, 0.12);
        }

        .btn-primary {
          color: var(--accent-ink);
          border: 1px solid rgba(255, 209, 102, 0.58);
          background: linear-gradient(135deg, var(--accent), var(--green) 54%, var(--cyan));
          box-shadow: 0 20px 50px rgba(79, 209, 197, 0.24), 0 0 0 6px rgba(255, 209, 102, 0.06);
        }

        .btn-primary:hover {
          box-shadow: 0 24px 66px rgba(79, 209, 197, 0.32), 0 0 0 8px rgba(255, 209, 102, 0.1);
        }

        .hero {
          min-height: 100svh;
          display: flex;
          align-items: center;
          padding: 136px 0 86px;
          overflow: hidden;
          color: var(--text);
          background:
            radial-gradient(circle at 12% 18%, rgba(79, 209, 197, 0.18), transparent 28rem),
            radial-gradient(circle at 86% 16%, rgba(121, 167, 255, 0.18), transparent 30rem),
            radial-gradient(circle at 48% 70%, rgba(255, 209, 102, 0.07), transparent 34rem),
            linear-gradient(180deg, var(--bg) 0%, #09101d 58%, var(--bg-deep) 100%);
        }

        .hero .btn-primary {
          color: var(--accent-ink);
          border-color: rgba(255, 209, 102, 0.58);
          background: linear-gradient(135deg, var(--accent), var(--green) 54%, var(--cyan));
          box-shadow: 0 20px 50px rgba(79, 209, 197, 0.24), 0 0 0 6px rgba(255, 209, 102, 0.06);
        }

        .hero .btn-primary:hover {
          box-shadow: 0 24px 66px rgba(79, 209, 197, 0.32), 0 0 0 8px rgba(255, 209, 102, 0.1);
        }

        .hero .btn-secondary {
          color: var(--text);
          border-color: var(--line-strong);
          background: rgba(255, 255, 255, 0.055);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);
        }

        .hero .btn-secondary:hover {
          border-color: rgba(255, 209, 102, 0.42);
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 14px 36px rgba(79, 209, 197, 0.12);
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        .hero-bg-glow {
          position: absolute;
          inset: -20% 0 0;
          background:
            radial-gradient(ellipse 65% 55% at 14% 28%, rgba(99, 102, 241, 0.13), transparent),
            radial-gradient(ellipse 55% 65% at 84% 22%, rgba(79, 209, 197, 0.1), transparent),
            radial-gradient(ellipse 45% 45% at 52% 64%, rgba(139, 92, 246, 0.07), transparent);
          animation: heroGlowDrift 20s ease-in-out infinite alternate;
        }

        .hero-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(0, 0.98fr) minmax(0, 1fr);
          align-items: center;
          gap: clamp(36px, 5vw, 72px);
          width: min(var(--max), calc(100% - 48px));
          margin: 0 auto;
        }

        .demo-wrapper,
        .hero-centered {
          position: relative;
          z-index: 1;
          display: none;
        }

        .demo-placeholder {
          height: 580px;
          background: rgba(11,15,26,0.8);
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.07);
        }

        .hero-copy {
          max-width: 640px;
        }

        .hero-ai-badge {
          display: inline-flex;
          align-items: center;
          max-width: 100%;
          min-height: 34px;
          margin: 0 0 22px;
          padding: 0 13px;
          border-radius: 999px;
          border: 1px solid rgba(121, 167, 255, 0.2);
          background: rgba(121, 167, 255, 0.075);
          color: #c4d2ff;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.055);
          font-size: clamp(0.74rem, 1.3vw, 0.84rem);
          font-weight: 740;
          line-height: 1.3;
        }

        .hero-label {
          display: inline-flex;
          align-items: center;
          max-width: 100%;
          margin: 0 0 24px;
          padding: 8px 14px;
          border-radius: 999px;
          border: 1px solid var(--line-strong);
          background: rgba(255, 255, 255, 0.05);
          color: var(--muted);
          font-size: clamp(0.72rem, 1.8vw, 0.82rem);
          font-weight: 760;
          line-height: 1.3;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.055);
        }

        .hero-copy h1 {
          max-width: 620px;
          margin-bottom: 24px;
          color: var(--text);
          font-size: clamp(3rem, 5.1vw, 4.75rem);
          line-height: 1;
          letter-spacing: 0;
        }

        .hero-sub {
          max-width: 500px;
          color: var(--muted);
          font-size: clamp(1.05rem, 1.55vw, 1.24rem);
          line-height: 1.68;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin: 34px 0 22px;
        }

        .hero-reassurance {
          margin: 0;
          color: var(--soft);
          font-size: 0.94rem;
          font-weight: 650;
        }

        .hero-image-frame {
          position: relative;
          min-height: clamp(420px, 56vw, 650px);
          margin: 0;
          border-radius: 30px;
          overflow: hidden;
          border: 1px solid rgba(196, 217, 255, 0.16);
          background: rgba(13, 19, 32, 0.72);
          box-shadow:
            0 34px 90px rgba(0, 0, 0, 0.34),
            0 0 0 1px rgba(255, 255, 255, 0.04),
            0 0 46px rgba(79, 209, 197, 0.1);
        }

        .hero-image {
          position: absolute;
          inset: -18px 0 0;
          width: 100%;
          height: calc(100% + 18px);
          display: block;
          object-fit: cover;
          object-position: 60% center;
        }

        .why-kivo {
          position: relative;
          z-index: 1;
          padding: 108px 0 112px;
          overflow: hidden;
          border-top: 1px solid rgba(196, 217, 255, 0.1);
          background:
            radial-gradient(ellipse 58% 54% at 18% 18%, rgba(121, 167, 255, 0.12), transparent),
            radial-gradient(ellipse 50% 58% at 82% 28%, rgba(79, 209, 197, 0.09), transparent),
            linear-gradient(180deg, rgba(5, 8, 18, 0.96), rgba(7, 12, 23, 0.9));
        }

        .why-kivo-inner {
          width: min(var(--max), calc(100% - 48px));
          margin: 0 auto;
        }

        .why-kivo-heading {
          max-width: 740px;
          margin: 0 auto;
          text-align: center;
        }

        .why-kivo-heading h2 {
          margin: 0;
          color: var(--text);
          font-size: clamp(2.25rem, 4vw, 3.75rem);
          line-height: 1.04;
          letter-spacing: 0;
        }

        .why-kivo-heading p {
          max-width: 660px;
          margin: 20px auto 0;
          color: var(--muted);
          font-size: clamp(1rem, 1.3vw, 1.14rem);
          line-height: 1.72;
        }

        .why-kivo-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
          margin-top: 58px;
        }

        .why-kivo-card {
          min-height: 292px;
          padding: 30px;
          border: 1px solid rgba(196, 217, 255, 0.13);
          border-radius: 18px;
          background:
            linear-gradient(145deg, rgba(255, 255, 255, 0.075), rgba(255, 255, 255, 0.026)),
            rgba(13, 19, 32, 0.66);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.055),
            0 14px 38px rgba(0, 0, 0, 0.18);
          backdrop-filter: blur(12px);
          transition:
            transform 180ms ease,
            border-color 180ms ease,
            background 180ms ease,
            box-shadow 180ms ease;
        }

        .why-kivo-card:hover {
          transform: translateY(-5px);
          border-color: rgba(196, 217, 255, 0.22);
          background:
            linear-gradient(145deg, rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.032)),
            rgba(13, 19, 32, 0.72);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.065),
            0 18px 44px rgba(0, 0, 0, 0.22);
        }

        .why-kivo-icon {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 58px;
          height: 58px;
          margin-bottom: 28px;
          border-radius: 999px;
          border: 1px solid rgba(196, 217, 255, 0.13);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
        }

        .why-kivo-icon--clear {
          color: #9fbaff;
          background: radial-gradient(circle, rgba(121, 167, 255, 0.22), rgba(121, 167, 255, 0.08));
        }

        .why-kivo-icon--support {
          color: #89e7d9;
          background: radial-gradient(circle, rgba(79, 209, 197, 0.22), rgba(79, 209, 197, 0.08));
        }

        .why-kivo-icon--journey {
          color: #ffe09a;
          background: radial-gradient(circle, rgba(255, 209, 102, 0.22), rgba(255, 209, 102, 0.08));
        }

        .why-kivo-card h3 {
          margin: 0 0 14px;
          color: var(--text);
          font-size: clamp(1.08rem, 1.4vw, 1.22rem);
          line-height: 1.25;
        }

        .why-kivo-card p {
          margin: 0;
          color: var(--muted);
          font-size: 0.98rem;
          line-height: 1.74;
        }

        .product-experience {
          position: relative;
          z-index: 1;
          padding: 108px 0 112px;
          overflow: hidden;
          border-top: 1px solid rgba(196, 217, 255, 0.1);
          background:
            radial-gradient(ellipse 58% 48% at 16% 8%, rgba(121, 167, 255, 0.12), transparent),
            radial-gradient(ellipse 52% 50% at 84% 22%, rgba(79, 209, 197, 0.08), transparent),
            linear-gradient(180deg, rgba(7, 11, 22, 0.96), rgba(8, 14, 26, 0.88) 45%, rgba(5, 8, 18, 0.96));
        }

        .product-inner {
          width: min(var(--max), calc(100% - 48px));
          margin: 0 auto;
        }

        .product-heading {
          max-width: 720px;
          margin: 0 auto 26px;
          text-align: center;
        }

        .product-heading h2 {
          margin: 0;
          color: var(--text);
          font-size: clamp(2.2rem, 3.8vw, 3.6rem);
          line-height: 1.05;
          letter-spacing: 0;
        }

        .product-heading p {
          max-width: 620px;
          margin: 18px auto 0;
          color: var(--muted);
          font-size: clamp(1rem, 1.25vw, 1.14rem);
          line-height: 1.72;
        }

        .support-strip-compact {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 12px;
          width: fit-content;
          max-width: 100%;
          margin: 0 auto 72px;
          padding: 14px;
          border: 1px solid rgba(196, 217, 255, 0.13);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(12px);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }

        .support-strip-compact span {
          display: inline-flex;
          align-items: center;
          min-height: 42px;
          gap: 8px;
          padding: 0 17px;
          border-radius: 999px;
          border: 1px solid rgba(196, 217, 255, 0.12);
          background: rgba(255, 255, 255, 0.045);
          color: var(--muted);
          font-size: 0.98rem;
          font-weight: 740;
        }

        .support-strip-compact .support-label {
          border-color: transparent;
          background: transparent;
          color: var(--soft);
          letter-spacing: 0.1em;
          font-size: 0.82rem;
          text-transform: uppercase;
        }

        .support-strip-compact .support-chip-board {
          color: #b8c7ff;
          border-color: rgba(121, 167, 255, 0.22);
          background: rgba(121, 167, 255, 0.08);
        }

        .support-strip-compact .support-chip-grade {
          color: #f5d88a;
          border-color: rgba(255, 209, 102, 0.24);
          background: rgba(255, 209, 102, 0.09);
        }

        .support-strip-compact .support-chip-subject {
          color: #9ee8dc;
          border-color: rgba(79, 209, 197, 0.22);
          background: rgba(79, 209, 197, 0.08);
        }

        .support-subject svg {
          color: currentColor;
          opacity: 0.85;
        }

        .experience-flow {
          position: relative;
          display: grid;
          gap: 34px;
        }

        .experience-flow::before {
          content: "";
          position: absolute;
          left: 50%;
          top: 18px;
          bottom: 18px;
          width: 1px;
          background: linear-gradient(180deg, transparent, rgba(196, 217, 255, 0.14), transparent);
          transform: translateX(-50%);
          opacity: 0.55;
        }

        .experience-row {
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
          align-items: center;
          gap: clamp(34px, 5vw, 74px);
          padding: clamp(22px, 4vw, 34px);
          border: 1px solid rgba(196, 217, 255, 0.1);
          border-radius: 28px;
          background:
            linear-gradient(145deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.022)),
            rgba(13, 19, 32, 0.48);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 18px 54px rgba(0, 0, 0, 0.16);
          backdrop-filter: blur(12px);
        }

        .experience-row--reverse {
          grid-template-columns: minmax(0, 1.18fr) minmax(0, 0.82fr);
        }

        .experience-row--reverse .experience-copy {
          order: 2;
        }

        .experience-copy {
          max-width: 420px;
        }

        .experience-kicker {
          display: inline-flex;
          margin-bottom: 16px;
          color: #9fbaff;
          font-size: 0.72rem;
          font-weight: 820;
          letter-spacing: 0.13em;
          text-transform: uppercase;
        }

        .experience-copy h3 {
          margin: 0 0 16px;
          color: var(--text);
          font-size: clamp(1.65rem, 2.7vw, 2.55rem);
          line-height: 1.08;
          letter-spacing: 0;
        }

        .experience-copy p {
          margin: 0;
          color: var(--muted);
          font-size: clamp(0.96rem, 1.18vw, 1.08rem);
          line-height: 1.76;
        }

        .experience-visual {
          position: relative;
          min-height: 350px;
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid rgba(196, 217, 255, 0.12);
          background:
            radial-gradient(circle at 12% 10%, rgba(121, 167, 255, 0.12), transparent 16rem),
            linear-gradient(145deg, rgba(255, 255, 255, 0.055), rgba(255, 255, 255, 0.022)),
            rgba(6, 10, 20, 0.74);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }

        .ui-window,
        .quiz-card-mini,
        .progress-board {
          position: absolute;
          border: 1px solid rgba(196, 217, 255, 0.13);
          background: rgba(13, 19, 32, 0.86);
          box-shadow: 0 18px 48px rgba(0, 0, 0, 0.22);
          backdrop-filter: blur(10px);
        }

        .ui-window {
          inset: 28px;
          border-radius: 20px;
          overflow: hidden;
        }

        .ui-window-top {
          display: flex;
          align-items: center;
          gap: 7px;
          height: 42px;
          padding: 0 14px;
          border-bottom: 1px solid rgba(196, 217, 255, 0.1);
          color: var(--soft);
          font-size: 0.72rem;
          font-weight: 800;
        }

        .ui-window-top span {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: rgba(196, 217, 255, 0.28);
        }

        .ui-window-top strong {
          margin-left: 8px;
          color: var(--muted);
        }

        .explain-layout {
          display: grid;
          grid-template-columns: 0.86fr 1.14fr;
          gap: 14px;
          padding: 16px;
        }

        .reader-pane,
        .answer-pane,
        .quiz-card-mini,
        .mastery-mini,
        .progress-board,
        .revision-card-mini {
          border: 1px solid rgba(196, 217, 255, 0.1);
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.045);
        }

        .reader-pane,
        .answer-pane {
          min-height: 230px;
          padding: 18px;
        }

        .ui-tag,
        .quiz-meta,
        .progress-head {
          color: var(--soft);
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.09em;
          text-transform: uppercase;
        }

        .reader-pane h4,
        .quiz-card-mini h4 {
          margin: 14px 0 12px;
          color: var(--text);
          font-size: 1rem;
          line-height: 1.35;
        }

        .reader-pane p,
        .answer-pane p {
          margin: 0;
          color: var(--muted);
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .answer-pane ul {
          display: grid;
          gap: 9px;
          margin: 18px 0 0;
          padding: 0;
          list-style: none;
        }

        .answer-pane li {
          color: var(--muted);
          font-size: 0.83rem;
        }

        .answer-pane li::before {
          content: "";
          display: inline-block;
          width: 6px;
          height: 6px;
          margin-right: 8px;
          border-radius: 999px;
          background: var(--cyan);
        }

        .highlight-line,
        .soft-line {
          height: 9px;
          margin-top: 18px;
          border-radius: 999px;
          background: rgba(255, 209, 102, 0.24);
        }

        .soft-line {
          width: 72%;
          background: rgba(196, 217, 255, 0.13);
        }

        .quiz-card-mini {
          left: 32px;
          right: 90px;
          top: 34px;
          padding: 22px;
          border-radius: 20px;
        }

        .quiz-meta,
        .progress-head {
          display: flex;
          justify-content: space-between;
          gap: 14px;
        }

        .option {
          min-height: 38px;
          margin-top: 9px;
          padding: 10px 12px;
          border: 1px solid rgba(196, 217, 255, 0.11);
          border-radius: 12px;
          color: var(--muted);
          background: rgba(255, 255, 255, 0.035);
          font-size: 0.86rem;
        }

        .option-correct {
          color: var(--green);
          border-color: rgba(126, 231, 135, 0.22);
          background: rgba(126, 231, 135, 0.08);
        }

        .feedback-mini {
          margin-top: 14px;
          color: var(--muted);
          font-size: 0.84rem;
          line-height: 1.5;
        }

        .mastery-mini {
          position: absolute;
          right: 30px;
          bottom: 30px;
          width: 188px;
          padding: 18px;
          box-shadow: 0 16px 42px rgba(0, 0, 0, 0.25);
        }

        .mastery-mini span {
          color: var(--soft);
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .mastery-mini strong {
          display: block;
          margin: 8px 0;
          color: var(--green);
          font-size: 2rem;
          line-height: 1;
        }

        .progress-track {
          height: 6px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.08);
          overflow: hidden;
        }

        .progress-track div {
          width: 84%;
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(90deg, var(--accent), var(--green));
        }

        .progress-board {
          left: 34px;
          right: 34px;
          top: 30px;
          padding: 20px;
          border-radius: 20px;
        }

        .progress-head {
          margin-bottom: 16px;
        }

        .progress-head strong {
          color: var(--cyan);
        }

        .chapter-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 13px 0;
          border-top: 1px solid rgba(196, 217, 255, 0.09);
        }

        .chapter-row strong {
          display: block;
          color: var(--text);
          font-size: 0.92rem;
          line-height: 1.35;
        }

        .chapter-row span {
          display: block;
          margin-top: 3px;
          color: var(--soft);
          font-size: 0.75rem;
          text-transform: capitalize;
        }

        .chapter-row em {
          color: var(--muted);
          font-style: normal;
          font-weight: 800;
        }

        .revision-card-mini {
          position: absolute;
          right: 34px;
          bottom: 30px;
          display: flex;
          align-items: center;
          gap: 10px;
          max-width: 270px;
          padding: 14px 16px;
          color: var(--muted);
          font-size: 0.86rem;
          line-height: 1.4;
          box-shadow: 0 16px 42px rgba(0, 0, 0, 0.22);
        }

        .revision-card-mini svg {
          color: var(--accent);
          flex-shrink: 0;
        }

        .ai-philosophy {
          padding: 82px 0 88px;
          border-top: 1px solid rgba(196, 217, 255, 0.1);
          overflow: hidden;
          background:
            radial-gradient(ellipse 46% 42% at 50% 0%, rgba(121, 167, 255, 0.11), transparent),
            linear-gradient(180deg, rgba(5, 8, 18, 0.96), rgba(8, 14, 26, 0.9));
        }

        .ai-philosophy-inner {
          width: min(820px, calc(100% - 48px));
          margin: 0 auto;
          padding: clamp(28px, 5vw, 46px);
          border: 1px solid rgba(196, 217, 255, 0.12);
          border-radius: 28px;
          background:
            linear-gradient(145deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.024)),
            rgba(13, 19, 32, 0.5);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.05),
            0 20px 56px rgba(0, 0, 0, 0.18);
          backdrop-filter: blur(12px);
          text-align: center;
        }

        .ai-philosophy-kicker {
          display: inline-flex;
          margin-bottom: 16px;
          color: #9fbaff;
          font-size: 0.72rem;
          font-weight: 820;
          letter-spacing: 0.13em;
          text-transform: uppercase;
        }

        .ai-philosophy h2 {
          margin: 0;
          color: var(--text);
          font-size: clamp(1.95rem, 3vw, 3rem);
          line-height: 1.08;
          letter-spacing: 0;
        }

        .ai-philosophy p {
          max-width: 650px;
          margin: 18px auto 0;
          color: var(--muted);
          font-size: clamp(0.98rem, 1.18vw, 1.08rem);
          line-height: 1.76;
        }

        .ai-philosophy .ai-philosophy-note {
          margin-top: 14px;
          color: var(--soft);
          font-size: 0.92rem;
          font-weight: 700;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          margin: 0 0 18px;
          color: var(--accent);
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.13em;
          text-transform: uppercase;
        }

        h1,
        h2,
        h3,
        p {
          margin-top: 0;
        }

        h1 {
          margin-bottom: 26px;
          max-width: 900px;
          font-size: clamp(2.55rem, 4.8vw, 4.35rem);
          line-height: 1;
          letter-spacing: 0;
        }

        h1 span {
          display: block;
          color: transparent;
          background: linear-gradient(135deg, #f4f7fb 8%, var(--cyan) 46%, var(--blue) 72%, var(--accent) 100%);
          background-clip: text;
          -webkit-background-clip: text;
        }

        .hero-sub {
          max-width: 650px;
          color: var(--muted);
          font-size: clamp(1.05rem, 1.6vw, 1.22rem);
          line-height: 1.72;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin: 34px 0 38px;
        }

        .support-strip {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 9px;
          max-width: 760px;
          margin-top: 2px;
          border: 1px solid var(--line);
          border-radius: 22px;
          padding: 12px;
          background: rgba(255, 255, 255, 0.045);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.055);
        }

        .support-strip span,
        .support-strip strong,
        .support-strip em {
          display: inline-flex;
          align-items: center;
          min-height: 30px;
          border-radius: 999px;
          padding: 0 11px;
          font-size: 0.82rem;
          line-height: 1;
        }

        .support-strip span {
          color: var(--accent);
          font-weight: 820;
          background: rgba(255, 209, 102, 0.1);
        }

        .support-strip strong {
          color: var(--text);
          font-weight: 760;
          background: rgba(79, 209, 197, 0.09);
          border: 1px solid rgba(79, 209, 197, 0.16);
        }

        .support-strip em {
          color: var(--soft);
          font-style: normal;
          background: rgba(255, 255, 255, 0.04);
        }

        .hero-visual {
          position: relative;
          min-height: 620px;
        }

        .product-shell {
          position: relative;
          z-index: 2;
          border: 1px solid var(--line-strong);
          border-radius: 28px;
          padding: 22px;
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.025)),
            rgba(13, 19, 32, 0.88);
          box-shadow: var(--shadow);
          backdrop-filter: blur(18px);
          overflow: hidden;
        }

        .product-shell::before {
          content: "";
          position: absolute;
          inset: -1px;
          z-index: -1;
          border-radius: 28px;
          background: linear-gradient(135deg, rgba(79, 209, 197, 0.38), rgba(255, 209, 102, 0.18), rgba(121, 167, 255, 0.28));
        }

        .product-shell::after {
          content: "";
          position: absolute;
          inset: auto -20% -28% 20%;
          height: 230px;
          background: radial-gradient(circle, rgba(79, 209, 197, 0.24), transparent 64%);
          pointer-events: none;
        }

        .window-bar {
          display: flex;
          gap: 8px;
          margin-bottom: 22px;
        }

        .window-bar span {
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: var(--line-strong);
        }

        .window-bar span:nth-child(1) {
          background: var(--orange);
        }

        .window-bar span:nth-child(2) {
          background: var(--accent);
        }

        .window-bar span:nth-child(3) {
          background: var(--green);
        }

        .learning-map {
          position: absolute;
          top: 56px;
          right: 28px;
          width: 132px;
          height: 84px;
          opacity: 0.74;
          background:
            linear-gradient(90deg, transparent 18px, rgba(79, 209, 197, 0.36) 18px 20px, transparent 20px 62px, rgba(255, 209, 102, 0.32) 62px 64px, transparent 64px),
            linear-gradient(18deg, transparent 0 46%, rgba(121, 167, 255, 0.34) 46% 48%, transparent 48%);
        }

        .learning-map span,
        .pathway-orbit span {
          position: absolute;
          width: 13px;
          height: 13px;
          border-radius: 999px;
          background: var(--accent);
          box-shadow: 0 0 0 7px rgba(255, 209, 102, 0.1);
        }

        .learning-map span:nth-child(1) {
          top: 4px;
          left: 11px;
        }

        .learning-map span:nth-child(2) {
          top: 34px;
          left: 58px;
          background: var(--cyan);
        }

        .learning-map span:nth-child(3) {
          top: 18px;
          right: 12px;
          background: var(--blue);
        }

        .learning-map span:nth-child(4) {
          bottom: 2px;
          right: 42px;
          background: var(--green);
        }

        .student-card,
        .answer-card {
          position: relative;
          z-index: 1;
          border-radius: 22px;
          padding: 24px;
        }

        .student-card {
          margin-right: 36px;
          border: 1px solid rgba(121, 167, 255, 0.25);
          background: linear-gradient(135deg, rgba(121, 167, 255, 0.24), rgba(79, 209, 197, 0.1));
        }

        .card-kicker,
        .answer-head p {
          margin-bottom: 10px;
          color: var(--cyan);
          font-size: 0.76rem;
          font-weight: 780;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .student-card h2 {
          margin-bottom: 12px;
          max-width: 420px;
          font-size: clamp(1.45rem, 3vw, 2.18rem);
          line-height: 1.08;
        }

        .student-card p,
        .solution-card li {
          color: var(--muted);
          line-height: 1.65;
        }

        .answer-card {
          margin: 16px 0 0 34px;
          border: 1px solid var(--line);
          background: rgba(7, 10, 18, 0.62);
        }

        .answer-head {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .preview-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin: 0 0 18px;
        }

        .preview-actions span {
          display: inline-flex;
          align-items: center;
          min-height: 30px;
          border: 1px solid rgba(196, 217, 255, 0.14);
          border-radius: 999px;
          padding: 0 10px;
          color: var(--muted);
          background: rgba(255, 255, 255, 0.04);
          font-size: 0.78rem;
          font-weight: 700;
          transition: color 160ms ease, border-color 160ms ease, background 160ms ease;
        }

        .preview-actions span.active {
          color: var(--accent-ink);
          border-color: rgba(255, 209, 102, 0.52);
          background: linear-gradient(135deg, var(--accent), var(--green));
        }

        .pulse {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--green);
          box-shadow: 0 0 0 8px rgba(126, 231, 135, 0.1);
          animation: pulse 2.2s ease-in-out infinite;
        }

        .solution-card {
          position: relative;
          border: 1px solid rgba(196, 217, 255, 0.12);
          border-radius: 18px;
          padding: 16px;
          background: rgba(5, 8, 18, 0.36);
          overflow: hidden;
        }

        .equation {
          margin-bottom: 12px;
          color: var(--text);
          font-family: var(--font-geist-mono), ui-monospace, monospace;
          font-size: 1rem;
          font-weight: 760;
        }

        .solution-card ol {
          margin: 0;
          padding-left: 0;
          list-style: none;
        }

        .solution-card li {
          position: relative;
          border-radius: 12px;
          padding: 9px 10px 9px 34px;
          font-size: 0.94rem;
        }

        .solution-card li::before {
          content: counter(list-item);
          position: absolute;
          top: 10px;
          left: 10px;
          width: 16px;
          height: 16px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-ink);
          background: var(--accent);
          font-size: 0.68rem;
          font-weight: 850;
        }

        .solution-card li + li {
          margin-top: 5px;
        }

        .solution-card li.active-step {
          color: var(--text);
          background: linear-gradient(90deg, rgba(255, 209, 102, 0.16), rgba(79, 209, 197, 0.08));
          box-shadow: inset 0 0 0 1px rgba(255, 209, 102, 0.24);
          animation: stepHighlight 2.8s ease-in-out infinite;
        }

        .solution-card a {
          display: inline-flex;
          align-items: center;
          min-height: 34px;
          margin-top: 14px;
          border: 1px solid rgba(79, 209, 197, 0.24);
          border-radius: 999px;
          padding: 0 13px;
          color: var(--text);
          background: rgba(79, 209, 197, 0.08);
          font-size: 0.82rem;
          font-weight: 760;
          text-decoration: none;
          transition: transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease;
        }

        .solution-card a:hover {
          transform: translateY(-1px) scale(1.02);
          border-color: rgba(255, 209, 102, 0.34);
          box-shadow: 0 12px 28px rgba(79, 209, 197, 0.14);
        }

        .focus-cursor {
          position: absolute;
          top: 108px;
          right: 22px;
          width: 11px;
          height: 11px;
          border-radius: 999px;
          background: var(--cyan);
          box-shadow: 0 0 0 8px rgba(79, 209, 197, 0.12);
          animation: focusCursor 2.8s ease-in-out infinite;
        }

        .mini-row {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-top: 16px;
        }

        .mini-row div {
          border-radius: 18px;
          padding: 17px;
          border: 1px solid var(--line);
          background: rgba(255, 255, 255, 0.045);
        }

        .mini-row span {
          display: block;
          margin-bottom: 6px;
          color: var(--soft);
          font-size: 0.82rem;
        }

        .mini-row strong {
          color: var(--accent);
          font-size: 1rem;
        }

        .pathway-orbit {
          position: absolute;
          inset: 18px -14px -18px 38px;
          border: 1px solid rgba(79, 209, 197, 0.18);
          border-radius: 42px;
          transform: rotate(-4deg);
        }

        .pathway-orbit::before {
          content: "";
          position: absolute;
          inset: 50px 38px 60px 28px;
          border: 1px dashed rgba(255, 209, 102, 0.28);
          border-radius: 36px;
        }

        .pathway-orbit span:nth-child(1) {
          top: 42px;
          left: 24px;
        }

        .pathway-orbit span:nth-child(2) {
          right: 46px;
          top: 144px;
          background: var(--cyan);
        }

        .pathway-orbit span:nth-child(3) {
          left: 122px;
          bottom: 34px;
          background: var(--blue);
        }

        .section-band {
          padding: 112px 0 128px;
          border-top: 1px solid var(--line);
        }

        .section-inner {
          position: relative;
        }

        .section-heading {
          max-width: 810px;
          text-align: center;
          margin: 0 auto 52px;
        }

        h2 {
          margin-bottom: 0;
          font-size: clamp(2.1rem, 4.3vw, 4rem);
          line-height: 1.02;
          letter-spacing: 0;
        }

        .glass-card {
          border: 1px solid var(--line);
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.075), rgba(255, 255, 255, 0.028)),
            var(--panel);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.055), 0 24px 70px rgba(0, 0, 0, 0.18);
          backdrop-filter: blur(14px);
          transition: transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
        }

        .glass-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 209, 102, 0.32);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 32px 90px rgba(0, 0, 0, 0.28);
        }


        .faq {
          background:
            radial-gradient(circle at 18% 12%, rgba(255, 209, 102, 0.1), transparent 17rem),
            linear-gradient(180deg, rgba(255, 255, 255, 0.02), rgba(79, 209, 197, 0.035));
        }

        .faq-heading h2 {
          letter-spacing: -0.02em;
        }

        .faq-heading p:not(.eyebrow) {
          max-width: 680px;
          margin: 22px auto 0;
          color: var(--muted);
          font-size: 1rem;
          line-height: 1.72;
        }

        .faq-group:hover {
          transform: none;
        }

        .faq-layout {
          display: grid;
          grid-template-columns: 260px minmax(0, 1fr);
          gap: 22px;
          align-items: start;
        }

        .faq-topics {
          position: sticky;
          top: 104px;
          display: grid;
          gap: 10px;
          border-radius: 22px;
          padding: 18px;
        }

        .faq-topics span {
          color: var(--accent);
          font-size: 0.78rem;
          font-weight: 850;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .faq-topics a {
          display: flex;
          min-height: 42px;
          align-items: center;
          border: 1px solid var(--line);
          border-radius: 14px;
          padding: 0 13px;
          color: var(--muted);
          background: rgba(255, 255, 255, 0.035);
          font-size: 0.9rem;
          font-weight: 720;
          text-decoration: none;
          transition: border-color 160ms ease, color 160ms ease, background 160ms ease;
        }

        .faq-topics a:hover {
          border-color: rgba(255, 209, 102, 0.34);
          color: var(--text);
          background: rgba(255, 255, 255, 0.06);
        }

        .faq-list {
          display: grid;
          gap: 18px;
          min-width: 0;
        }

        .faq-group {
          scroll-margin-top: 104px;
          border-radius: 24px;
          padding: 24px;
        }

        .faq-group-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 16px;
        }

        .faq-group-head h3 {
          margin: 0;
          color: var(--text);
          font-size: 1.18rem;
          line-height: 1.25;
        }

        .faq-group-head span {
          display: inline-flex;
          min-width: 30px;
          height: 30px;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 209, 102, 0.24);
          border-radius: 999px;
          color: var(--accent);
          background: rgba(255, 209, 102, 0.08);
          font-size: 0.82rem;
          font-weight: 850;
        }

        .faq-item {
          border-top: 1px solid var(--line);
        }

        .faq-item summary {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 28px;
          gap: 18px;
          align-items: center;
          min-height: 64px;
          color: var(--text);
          cursor: pointer;
          font-weight: 760;
          line-height: 1.42;
          list-style: none;
        }

        .faq-item summary::-webkit-details-marker {
          display: none;
        }

        .faq-item summary::after {
          content: "+";
          display: inline-flex;
          width: 28px;
          height: 28px;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--line);
          border-radius: 10px;
          color: var(--accent);
          background: rgba(255, 255, 255, 0.04);
          font-size: 1.05rem;
          line-height: 1;
        }

        .faq-item[open] summary::after {
          content: "-";
        }

        .faq-item p {
          max-width: 780px;
          margin: -2px 46px 20px 0;
          color: var(--muted);
          font-size: 0.96rem;
          line-height: 1.68;
        }

        .final-cta {
          padding: 88px 0;
          background:
            radial-gradient(circle at 50% 50%, rgba(255, 209, 102, 0.13), transparent 20rem),
            radial-gradient(circle at 16% 32%, rgba(79, 209, 197, 0.12), transparent 18rem),
            linear-gradient(180deg, rgba(79, 209, 197, 0.055), rgba(255, 255, 255, 0.02));
        }

        .final-cta-inner {
          display: flex;
          flex-direction: column;
          gap: 28px;
          text-align: center;
          align-items: center;
          border: 1px solid var(--line);
          border-radius: 30px;
          padding: 52px 34px;
          background:
            linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.028)),
            rgba(13, 19, 32, 0.72);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06), 0 26px 80px rgba(0, 0, 0, 0.22);
        }

        .final-cta h2 {
          max-width: 760px;
          font-size: clamp(2rem, 3.6vw, 3.4rem);
        }

        .final-cta p:not(.eyebrow) {
          max-width: 620px;
          margin: 16px auto 0;
          color: var(--muted);
          line-height: 1.65;
        }

        .footer {
          border-top: 1px solid var(--line);
          padding: 34px 0;
          background: rgba(5, 8, 18, 0.55);
        }

        .footer-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
        }

        .footer p {
          margin-bottom: 0;
          color: var(--soft);
          font-size: 0.88rem;
        }

        .reveal {
          animation: revealUp 700ms ease both;
        }

        @supports (animation-timeline: view()) {
          .reveal {
            animation-timeline: view();
            animation-range: entry 8% cover 28%;
          }
        }

        @keyframes revealUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes ambientShift {
          from {
            transform: translate3d(-1%, 0, 0) scale(1);
          }
          to {
            transform: translate3d(2%, 4%, 0) scale(1.06);
          }
        }

        @keyframes heroGlowDrift {
          from { transform: translate3d(0, 0, 0) scale(1); }
          to   { transform: translate3d(2%, 4%, 0) scale(1.05); }
        }

        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 0 0 8px rgba(126, 231, 135, 0.1);
          }
          50% {
            box-shadow: 0 0 0 13px rgba(126, 231, 135, 0.04);
          }
        }

        @keyframes stepHighlight {
          0%, 100% {
            box-shadow: inset 0 0 0 1px rgba(255, 209, 102, 0.18), 0 0 0 rgba(255, 209, 102, 0);
          }
          50% {
            box-shadow: inset 0 0 0 1px rgba(255, 209, 102, 0.34), 0 0 28px rgba(255, 209, 102, 0.12);
          }
        }

        @keyframes focusCursor {
          0%, 100% {
            opacity: 0.55;
            transform: translate3d(0, 0, 0) scale(0.9);
          }
          50% {
            opacity: 1;
            transform: translate3d(-8px, 18px, 0) scale(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }

          *,
          *::before,
          *::after {
            animation-duration: 0.001ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.001ms !important;
          }
        }

        @media (max-width: 1080px) {
          .demo-wrapper {
            display: none;
          }

          .hero-grid {
            grid-template-columns: minmax(0, 0.82fr) minmax(0, 1fr);
            gap: 36px;
          }

          .availability-inner,
          .comparison-grid,
          .how-inner,
          .schools-inner {
            grid-template-columns: 1fr;
          }

          .faq-layout {
            grid-template-columns: 1fr;
          }

          .faq-topics {
            position: static;
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .faq-topics span {
            grid-column: 1 / -1;
          }

          .hero-visual {
            min-height: auto;
            max-width: 680px;
          }

          .feature-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .why-kivo-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .experience-row,
          .experience-row--reverse {
            grid-template-columns: 1fr;
          }

          .experience-row--reverse .experience-copy {
            order: 0;
          }

          .experience-copy {
            max-width: 640px;
          }

          .comparison-arrow span {
            transform: rotate(90deg);
          }
        }

        @media (max-width: 900px) {
          .hero {
            min-height: auto;
            padding: 124px 0 76px;
          }

          .hero-grid {
            grid-template-columns: 1fr;
          }

          .hero-copy {
            max-width: 660px;
          }

          .hero-copy h1,
          .hero-sub {
            max-width: 620px;
          }

          .hero-image-frame {
            min-height: clamp(340px, 72vw, 560px);
            border-radius: 24px;
          }
        }

        @media (max-width: 760px) {
          .nav-inner,
          .section-inner,
          .hero-grid,
          .footer-inner {
            width: min(var(--max), calc(100% - 28px));
          }

          .nav-links {
            display: none;
          }

          .nav-inner {
            height: 68px;
          }

          .btn-nav {
            margin-left: auto;
            padding: 0 16px;
          }

          .hero {
            min-height: auto;
            padding: 112px 0 68px;
          }

          .hero-copy h1 {
            font-size: clamp(2.45rem, 12vw, 3.8rem);
            line-height: 0.98;
          }

          .hero-label {
            white-space: normal;
          }

          h1 {
            font-size: clamp(2.2rem, 9.2vw, 3.05rem);
          }

          .section-band {
            padding: 78px 0;
          }

          .hero-actions,
          .availability-grid,
          .feature-grid,
          .trust-panel ul {
            grid-template-columns: 1fr;
          }

          .hero-actions {
            display: grid;
          }

          .hero-actions .btn {
            width: 100%;
          }

          .hero-image-frame {
            min-height: clamp(300px, 82vw, 440px);
            border-radius: 20px;
          }

          .product-experience {
            padding: 78px 0;
          }

          .ai-philosophy {
            padding: 64px 0 70px;
          }

          .ai-philosophy-inner {
            width: min(var(--max), calc(100% - 28px));
            border-radius: 22px;
          }

          .why-kivo {
            padding: 78px 0;
          }

          .product-inner,
          .why-kivo-inner {
            width: min(var(--max), calc(100% - 28px));
          }

          .why-kivo-grid {
            grid-template-columns: 1fr;
            gap: 16px;
            margin-top: 40px;
          }

          .why-kivo-card {
            min-height: auto;
            padding: 24px;
            border-radius: 16px;
          }

          .why-kivo-icon {
            width: 52px;
            height: 52px;
            margin-bottom: 22px;
          }

          .product-heading {
            margin-bottom: 22px;
          }

          .support-strip-compact {
            width: 100%;
            justify-content: flex-start;
            border-radius: 20px;
            margin-bottom: 38px;
            padding: 12px;
            gap: 9px;
          }

          .support-strip-compact .support-label {
            width: 100%;
            min-height: 22px;
          }

          .support-strip-compact span {
            min-height: 36px;
            padding: 0 13px;
            font-size: 0.88rem;
          }

          .experience-flow {
            gap: 18px;
          }

          .experience-flow::before {
            display: none;
          }

          .experience-row {
            padding: 22px;
            border-radius: 22px;
            gap: 22px;
          }

          .experience-visual {
            min-height: 330px;
            border-radius: 18px;
          }

          .ui-window {
            inset: 14px;
          }

          .explain-layout {
            grid-template-columns: 1fr;
          }

          .reader-pane,
          .answer-pane {
            min-height: auto;
            padding: 14px;
          }

          .answer-pane {
            display: none;
          }

          .quiz-card-mini {
            left: 14px;
            right: 14px;
            top: 16px;
            padding: 16px;
          }

          .mastery-mini {
            right: 14px;
            bottom: 14px;
            width: 170px;
          }

          .progress-board {
            left: 14px;
            right: 14px;
            top: 16px;
            padding: 16px;
          }

          .revision-card-mini {
            right: 14px;
            left: 14px;
            bottom: 14px;
            max-width: none;
          }

          .support-strip {
            border-radius: 18px;
          }

          .product-shell {
            border-radius: 22px;
            padding: 16px;
          }

          .student-card,
          .answer-card {
            margin-left: 0;
            margin-right: 0;
            padding: 20px;
          }

          .pathway-orbit,
          .learning-map {
            display: none;
          }

          .feature-card {
            min-height: auto;
          }

          .steps {
            padding-left: 24px;
          }

          .step {
            grid-template-columns: 52px 1fr;
            padding: 22px;
          }

          .trust-panel {
            min-height: auto;
            padding: 18px;
          }

          .trust-panel li {
            min-height: auto;
          }

          .faq-topics,
          .faq-group {
            border-radius: 20px;
            padding: 18px;
          }

          .faq-topics {
            grid-template-columns: 1fr;
          }

          .faq-item summary {
            min-height: 58px;
            font-size: 0.95rem;
          }

          .faq-item p {
            margin-right: 0;
            font-size: 0.92rem;
          }

          .final-cta-inner {
            padding: 24px;
          }

          .final-cta-inner .btn {
            width: 100%;
          }

          .availability-card {
            min-height: 164px;
            padding: 24px;
          }

          .availability-card span {
            margin-bottom: 22px;
          }

          .availability-card h3 {
            max-width: none;
          }

          .footer-inner {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </main>
  );
}
