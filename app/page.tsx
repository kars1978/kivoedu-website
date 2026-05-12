import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, CirclePlus, FlaskConical, GraduationCap, Lock, ShieldCheck, Sigma, TrendingUp } from "lucide-react";
import { getFaqCategories, getFaqsForSurface } from "./content/kivoFaq";
import HeroDemo from "./HeroDemo";
import HomeworkSection from "./HomeworkSection";
import PracticeSection from "./PracticeSection";
import CurriculumSection from "./CurriculumSection";
import StudyToolkitSection from "./StudyToolkitSection";
import FinalCTASection from "./FinalCTASection";
import PricingSection from "./PricingSection";

const loginUrl = "https://app.kivoedu.ai/login";
const publicFaqs = getFaqsForSurface("public");
const publicFaqCategories = getFaqCategories(publicFaqs);


export const metadata: Metadata = {
  title: "KivoEdu | AI Tutoring Built for Students",
  description:
    "KivoEdu is a curriculum-grounded AI tutor that helps students ask questions, practice, and revise with content approved by their school.",
};

function slug(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function Home() {
  return (
    <main className="root">
      <div className="site-glow" aria-hidden="true" />
      <nav className="nav">
        <div className="nav-inner">
          <a href="/" className="logo-link" aria-label="KivoEdu home">
            <Image
              src="/kivo_logo_transparent_bg_1.png"
              alt="KivoEdu"
              width={138}
              height={52}
              style={{ objectFit: "contain", height: "auto" }}
              priority
            />
          </a>
          <div className="nav-links" aria-label="Primary navigation">
            <a href="#pricing">Pricing</a>
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
        <div className="hero-centered reveal">
          <p className="hero-label">AI Learning Platform</p>
          <h1>Your curriculum, mastered with AI.</h1>
          <p className="hero-sub">
            Kivo helps CBSE &amp; Maharashtra Board students understand chapters, solve homework, and practice concepts with AI grounded in their textbooks.
          </p>
          <p className="hero-trust">
            Built around real school textbooks — not random internet answers.
          </p>
          <div className="trust-pills" role="list">
            <span className="trust-pill" role="listitem">
              <BookOpen size={14} aria-hidden="true" strokeWidth={1.5} />
              Curriculum aligned
            </span>
            <span className="trust-pill" role="listitem">
              <TrendingUp size={14} aria-hidden="true" strokeWidth={1.5} />
              Step-by-step learning
            </span>
            <span className="trust-pill" role="listitem">
              <ShieldCheck size={14} aria-hidden="true" strokeWidth={1.5} />
              CBSE &amp; Maharashtra Board
            </span>
            <span className="trust-pill" role="listitem">
              <Lock size={14} aria-hidden="true" strokeWidth={1.5} />
              Safer than generic AI
            </span>
          </div>
          <div className="avail-today">
            <p className="avail-title">Available today</p>
            <div className="avail-cards">
              <div className="avail-card avail-card--cbse">
                <div className="avail-card-head">
                  <span className="avail-icon avail-icon--cbse" aria-hidden="true">
                    <CirclePlus size={16} strokeWidth={1.5} />
                  </span>
                  <span className="avail-board">CBSE</span>
                </div>
                <div className="avail-row">
                  <Sigma size={18} aria-hidden="true" strokeWidth={1.5} />
                  <FlaskConical size={18} aria-hidden="true" strokeWidth={1.5} />
                  <span>Math &amp; Science</span>
                </div>
                <div className="avail-row">
                  <GraduationCap size={18} aria-hidden="true" strokeWidth={1.5} />
                  <span>Grades 9–10</span>
                </div>
              </div>
              <div className="avail-card avail-card--mh">
                <div className="avail-card-head">
                  <span className="avail-icon avail-icon--mh" aria-hidden="true">
                    <BookOpen size={16} strokeWidth={1.5} />
                  </span>
                  <span className="avail-board">Maharashtra Board</span>
                </div>
                <div className="avail-row">
                  <Sigma size={18} aria-hidden="true" strokeWidth={1.5} />
                  <FlaskConical size={18} aria-hidden="true" strokeWidth={1.5} />
                  <span>Math &amp; Science</span>
                </div>
                <div className="avail-row">
                  <GraduationCap size={18} aria-hidden="true" strokeWidth={1.5} />
                  <span>Grade 9</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="demo-wrapper reveal">
          <HeroDemo />
        </div>
      </section>
      <HomeworkSection />
      <PracticeSection />
      <CurriculumSection />
      <StudyToolkitSection />
      <FinalCTASection />
      <PricingSection />
      <section className="faq section-band" id="faq">
        <div className="section-inner faq-inner reveal">
          <div className="section-heading faq-heading">
            <p className="eyebrow">FAQ</p>
            <h2>Questions parents, students, and schools usually ask.</h2>
            <p>
              These answers stay synced with the in-app Help & Support content,
              with public wording for people evaluating KivoEdu before they log in.
            </p>
          </div>
          <div className="faq-layout">
            <aside className="faq-topics glass-card" aria-label="FAQ topics">
              <span>Topics</span>
              {publicFaqCategories.map((category) => (
                <a href={`#faq-${slug(category)}`} key={category}>
                  {category}
                </a>
              ))}
            </aside>
            <div className="faq-list">
              {publicFaqCategories.map((category) => (
                <section
                  className="faq-group glass-card"
                  id={`faq-${slug(category)}`}
                  key={category}
                >
                  <div className="faq-group-head">
                    <h3>{category}</h3>
                    <span>
                      {publicFaqs.filter((faq) => faq.cat === category).length}
                    </span>
                  </div>
                  {publicFaqs
                    .filter((faq) => faq.cat === category)
                    .map((faq) => (
                      <details className="faq-item" key={faq.q}>
                        <summary>{faq.q}</summary>
                        <p>{faq.a}</p>
                      </details>
                    ))}
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <a href="#" className="logo-link" aria-label="KivoEdu home">
            <Image
              src="/kivo_logo_transparent_bg_1.png"
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
          opacity: 0.34;
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
          flex-direction: column;
          align-items: center;
          padding: 142px 0 92px;
          gap: 0;
          overflow: hidden;
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

.hero-centered {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          width: min(var(--max), calc(100% - 48px));
          margin: 0 auto;
        }

        .demo-wrapper {
          position: relative;
          z-index: 1;
          width: min(1160px, calc(100% - 48px));
          margin: 52px auto 0;
        }

        .demo-placeholder {
          height: 580px;
          background: rgba(11,15,26,0.8);
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.07);
        }

        .hero-copy {
          max-width: 760px;
        }

        .hero-centered h1 {
          max-width: 820px;
          font-size: clamp(1.9rem, 2.8vw, 2.6rem);
          white-space: nowrap;
        }

        .hero-centered .hero-sub {
          max-width: 640px;
          font-size: clamp(0.92rem, 1.25vw, 1.06rem);
        }

        .hero-label {
          display: inline-flex;
          align-items: center;
          margin: 0 0 22px;
          padding: 5px 14px;
          border-radius: 999px;
          border: 1px solid var(--line-strong);
          background: rgba(255, 255, 255, 0.05);
          color: var(--muted);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.09em;
          text-transform: uppercase;
        }

        .hero-trust {
          margin: 16px 0 0;
          color: var(--soft);
          font-size: 0.87rem;
          font-style: italic;
        }

        .trust-pills {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
          margin: 30px 0 0;
        }

        .trust-pill {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 7px 14px;
          border-radius: 999px;
          border: 1px solid var(--line-strong);
          background: rgba(255, 255, 255, 0.04);
          color: var(--muted);
          font-size: 0.81rem;
        }

        .trust-pill svg {
          color: var(--cyan);
          flex-shrink: 0;
          opacity: 0.85;
        }

        @media (max-width: 760px) {
          .trust-pills {
            gap: 8px;
          }
          .trust-pill {
            font-size: 0.77rem;
            padding: 6px 12px;
          }
        }

        .avail-today {
          margin: 40px 0 0;
          width: 100%;
        }

        .avail-title {
          margin: 0 0 14px;
          color: var(--soft);
          font-size: 0.73rem;
          font-weight: 700;
          letter-spacing: 0.09em;
          text-transform: uppercase;
        }

        .avail-cards {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          max-width: 620px;
          margin: 0 auto;
        }

        .avail-card {
          display: flex;
          flex-direction: column;
          gap: 9px;
          padding: 18px 20px;
          border-radius: 18px;
          border: 1px solid var(--line);
          background:
            linear-gradient(135deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.024)),
            rgba(13, 19, 32, 0.72);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 8px 28px rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(10px);
          text-align: left;
        }

        .avail-card-head {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 4px;
        }

        .avail-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          border-radius: 9px;
          flex-shrink: 0;
        }

        .avail-icon--cbse {
          color: var(--green);
          background: rgba(126, 231, 135, 0.1);
          border: 1px solid rgba(126, 231, 135, 0.2);
        }

        .avail-icon--mh {
          color: #b78ef0;
          background: rgba(183, 142, 240, 0.1);
          border: 1px solid rgba(183, 142, 240, 0.2);
        }

        .avail-board {
          font-size: 0.9rem;
          font-weight: 760;
        }

        .avail-card--cbse .avail-board { color: var(--green); }
        .avail-card--mh .avail-board { color: #b78ef0; }

        .avail-row {
          display: flex;
          align-items: center;
          gap: 6px;
          color: var(--muted);
          font-size: 0.83rem;
        }

        .avail-row svg {
          opacity: 0.5;
          flex-shrink: 0;
        }

        @media (max-width: 600px) {
          .avail-cards {
            grid-template-columns: 1fr;
            max-width: 320px;
          }
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

          .comparison-arrow span {
            transform: rotate(90deg);
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
            padding: 118px 0 74px;
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
