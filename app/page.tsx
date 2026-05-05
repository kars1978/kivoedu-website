import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const loginUrl = "https://app.kivoedu.ai/login";

const features = [
  {
    k: "01",
    title: "Answers from your actual syllabus",
    desc: "Ask questions and get help that stays connected to supported board, grade, subject, and chapter coverage.",
    marker: "Syllabus",
  },
  {
    k: "02",
    title: "Understand exactly how to solve it",
    desc: "Work through explanations one step at a time so students can follow the method, not just copy the answer.",
    marker: "Explain",
  },
  {
    k: "03",
    title: "Practice questions from your chapters",
    desc: "Generate chapter checks and revision practice from the curriculum material students are already studying.",
    marker: "Practice",
  },
  {
    k: "04",
    title: "Learn without leaving your curriculum",
    desc: "Keep study focused on maintained curriculum coverage instead of generic answers that may drift off-topic.",
    marker: "Grounded",
  },
];

const comparison = {
  typical: [
    "Generic answers",
    "Can go off-topic",
    "Hard to trust for schoolwork",
  ],
  kivo: [
    "Answers from your actual curriculum",
    "Stays within your syllabus",
    "Built with school input",
  ],
};

const availability = [
  {
    board: "CBSE",
    grades: "Grades 9 and 10",
    subjects: "Math and Science",
  },
  {
    board: "Maharashtra State Board",
    grades: "Grade 9",
    subjects: "Math and Science",
  },
];

const steps = [
  {
    title: "Choose a supported curriculum",
    desc: "Students learn from the country, board, grade, subject, and curriculum content already available in the KivoEdu database.",
  },
  {
    title: "Tutor stays inside verified content",
    desc: "Answers, explanations, examples, and practice are grounded only in the curriculum data we support and maintain.",
  },
  {
    title: "Coverage expands over time",
    desc: "The KivoEdu team updates existing material and adds new countries, boards, subjects, and curriculum versions as coverage grows.",
  },
];

const trustItems = [
  "Teacher control over how curriculum-grounded support is introduced",
  "Curriculum alignment by country, board, grade, and subject",
  "Privacy-conscious student support for study and revision workflows",
  "Maintained coverage that can expand as new curriculum content is added",
];

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
          <a href="#" className="logo-link" aria-label="KivoEdu home">
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
            <a href="#features">Features</a>
            <a href="#availability">Availability</a>
            <a href="#how">How it works</a>
            <a href="#schools">Schools</a>
            <Link href="/blog">Blog</Link>
          </div>
          <a
            href={loginUrl}
            className="btn btn-nav"
            target="_blank"
            rel="noopener noreferrer"
          >
            Login
          </a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-pattern" aria-hidden="true" />
        <div className="hero-grid">
          <div className="hero-copy reveal">
            <p className="eyebrow">Curriculum-grounded AI tutoring</p>
            <h1>AI tutoring that actually follows your curriculum.</h1>
            <p className="hero-sub">
              KivoEdu helps students ask questions, practice tough topics, and
              revise with a tutor grounded in the curriculum content they are
              actually studying.
            </p>
            <div className="hero-actions">
              <a
                href={loginUrl}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Try KivoEdu
              </a>
              <a href="#availability" className="btn btn-secondary">
                View availability
              </a>
            </div>
            <div className="support-strip" aria-label="Currently supported curriculum coverage">
              <span>Currently supports</span>
              <strong>CBSE</strong>
              <strong>Maharashtra State Board</strong>
              <em>More curriculum coverage expanding over time</em>
            </div>
          </div>

          <div className="hero-visual reveal" aria-label="KivoEdu tutoring preview">
            <div className="pathway-orbit" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="product-shell">
              <div className="window-bar" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <div className="learning-map" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
              </div>
              <div className="student-card">
                <p className="card-kicker">Student question</p>
                <h2>Can you explain quadratic factorization?</h2>
                <p>
                  Use the method from Chapter 4 and show each step before the
                  final answer.
                </p>
              </div>
              <div className="answer-card">
                <div className="answer-head">
                  <span className="pulse" />
                  <p>Grounded response</p>
                </div>
                <div className="preview-actions" aria-label="Example tutoring modes">
                  <span className="active">Explain</span>
                  <span>Hint</span>
                  <span>Practice</span>
                </div>
                <div className="solution-card">
                  <p className="equation">x² + 5x + 6 = 0</p>
                  <ol>
                    <li>Find two numbers that multiply to 6.</li>
                    <li className="active-step">Choose 2 and 3 because they also add to 5.</li>
                    <li>Rewrite as (x + 2)(x + 3) = 0.</li>
                  </ol>
                  <a href={loginUrl} target="_blank" rel="noopener noreferrer">
                    Try a similar question
                  </a>
                  <span className="focus-cursor" aria-hidden="true" />
                </div>
              </div>
              <div className="mini-row">
                <div>
                  <span>Quiz ready</span>
                  <strong>8 questions</strong>
                </div>
                <div>
                  <span>Source match</span>
                  <strong>Chapter 4</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features section-band" id="features">
        <div className="section-inner reveal">
          <div className="section-heading">
            <p className="eyebrow">Why students use it</p>
            <h2>Clear help when they need it, from content teachers approve.</h2>
          </div>
          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card glass-card" key={feature.title}>
                <div className="feature-top">
                  <span>{feature.k}</span>
                  <small>{feature.marker}</small>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="difference section-band">
        <div className="section-inner reveal">
          <div className="section-heading">
            <p className="eyebrow">Why Kivo is different</p>
            <h2>Built for schoolwork, not generic answers.</h2>
          </div>
          <div className="comparison-grid" aria-label="Comparison between typical AI tutors and Kivo">
            <article className="comparison-card comparison-muted glass-card">
              <span>Typical AI tutors</span>
              <ul>
                {comparison.typical.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <div className="comparison-arrow" aria-hidden="true">
              <span>→</span>
            </div>
            <article className="comparison-card comparison-kivo glass-card">
              <span>Kivo</span>
              <ul>
                {comparison.kivo.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="availability section-band" id="availability">
        <div className="section-inner availability-inner reveal">
          <div className="availability-copy">
            <p className="eyebrow">Current availability</p>
            <h2>Curriculum coverage students can study from today.</h2>
            <p>
              KivoEdu currently supports CBSE Grades 9 and 10 for Math and
              Science, plus Maharashtra State Board Grade 9 for Math and
              Science. Additional curriculum coverage is expanding over time.
            </p>
          </div>
          <div className="availability-grid" aria-label="Current KivoEdu availability">
            {availability.map((item) => (
              <article className="availability-card glass-card" key={item.board}>
                <span>{item.board}</span>
                <h3>{item.grades}</h3>
                <p>{item.subjects}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="how section-band" id="how">
        <div className="section-inner how-inner reveal">
          <div className="how-copy-block">
            <p className="eyebrow">How it works</p>
            <h2>Students learn from the curriculum already supported by KivoEdu.</h2>
            <p className="how-copy">
              Students do not upload materials. The tutor works from
              curriculum, board, country, grade, and subject data that already
              exists in our database. KivoEdu maintains that content and keeps
              adding new curriculum coverage over time.
            </p>
            <div className="guidance-card glass-card" aria-label="Current availability and AI guidance">
              <div>
                <strong>Current availability</strong>
                <p>
                  KivoEdu currently supports CBSE Grades 9 and 10 Math and
                  Science, and Maharashtra State Board Grade 9 Math and Science.
                </p>
              </div>
              <div>
                <strong>Teacher-first guidance</strong>
                <p>
                  KivoEdu uses AI to generate content and responses, so it may
                  make mistakes. Always trust your human teacher, tutor, and
                  textbooks as the final source of truth.
                </p>
              </div>
            </div>
          </div>
          <div className="steps" aria-label="How KivoEdu works">
            {steps.map((step, index) => (
              <article className="step glass-card" key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="schools section-band" id="schools">
        <div className="section-inner schools-inner reveal">
          <div className="schools-copy">
            <p className="eyebrow">Built with schools in mind</p>
            <h2>Keep teachers in control while giving students more support.</h2>
            <p>
              KivoEdu does not replace teachers or rewrite your curriculum. It
              extends supported curriculum content from our database into a
              privacy-conscious AI tutor students can use after class, during
              study hall, or while preparing for exams.
            </p>
            <a href="mailto:admin@kivoedu.ai" className="btn btn-primary">
              Contact KivoEdu
            </a>
          </div>
          <div className="trust-panel glass-card">
            <div className="trust-map" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <ul>
              {trustItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="final-cta section-band">
        <div className="section-inner final-cta-inner reveal">
          <div>
            <p className="eyebrow">For schools</p>
            <h2>Give students AI support they can actually trust.</h2>
            <p>Curriculum-grounded AI tutoring built for real classrooms.</p>
          </div>
          <a href="mailto:admin@kivoedu.ai" className="btn btn-primary">
            Bring Kivo to your school
          </a>
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
        .hero-grid,
        .footer-inner {
          width: min(var(--max), calc(100% - 48px));
          margin: 0 auto;
        }

        .nav-inner {
          height: 76px;
          display: flex;
          align-items: center;
          gap: 28px;
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
          gap: 26px;
        }

        .nav-links a,
        .footer a {
          color: var(--muted);
          font-size: 0.88rem;
          text-decoration: none;
          transition: color 160ms ease;
        }

        .nav-links a:hover,
        .footer a:hover {
          color: var(--text);
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
          padding: 142px 0 92px;
        }

        .hero-pattern {
          position: absolute;
          inset: 76px 0 auto;
          height: 78%;
          pointer-events: none;
          background:
            radial-gradient(circle at 76% 32%, rgba(255, 184, 107, 0.18), transparent 15rem),
            linear-gradient(130deg, transparent 0 28%, rgba(79, 209, 197, 0.1) 28% 29%, transparent 29% 50%, rgba(121, 167, 255, 0.1) 50% 51%, transparent 51%);
          opacity: 0.9;
          animation: patternDrift 16s ease-in-out infinite alternate;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.94fr) minmax(430px, 0.96fr);
          align-items: center;
          gap: 58px;
        }

        .hero-copy {
          max-width: 760px;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin: 0 0 18px;
          color: var(--cyan);
          font-size: 0.76rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .eyebrow::before {
          content: "";
          width: 32px;
          height: 1px;
          background: linear-gradient(90deg, var(--accent), var(--cyan));
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
        .pathway-orbit span,
        .trust-map span {
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
        .solution-card li,
        .guidance-card p,
        .schools-copy p,
        .trust-panel li,
        .feature-card p {
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
          padding: 104px 0;
          border-top: 1px solid var(--line);
        }

        .section-inner {
          position: relative;
        }

        .section-heading {
          max-width: 810px;
          margin-bottom: 42px;
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

        .availability {
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.035), transparent);
        }

        .availability-inner {
          display: grid;
          gap: 34px;
          align-items: start;
        }

        .availability-copy p:not(.eyebrow),
        .how-copy {
          max-width: 620px;
          margin: 22px 0 0;
          color: var(--muted);
          font-size: 1rem;
          line-height: 1.72;
        }

        .availability-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        .availability-card {
          position: relative;
          min-height: 184px;
          border-radius: 24px;
          padding: 28px 30px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .availability-card::before {
          content: "";
          position: absolute;
          inset: auto 28px 32px;
          height: 2px;
          background: linear-gradient(90deg, var(--accent), var(--cyan), transparent);
        }

        .availability-card span {
          display: inline-flex;
          margin-bottom: 28px;
          color: var(--cyan);
          font-size: 0.82rem;
          font-weight: 820;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .availability-card h3 {
          max-width: 290px;
          margin-bottom: 10px;
          color: var(--text);
          font-size: clamp(1.18rem, 1.65vw, 1.55rem);
          line-height: 1.12;
        }

        .availability-card p {
          margin-bottom: 0;
          color: var(--muted);
          font-size: 1rem;
          line-height: 1.5;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
        }

        .feature-card {
          position: relative;
          min-height: 286px;
          border-radius: 24px;
          padding: 24px;
          overflow: hidden;
        }

        .feature-card::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            linear-gradient(145deg, rgba(79, 209, 197, 0.13), transparent 34%),
            radial-gradient(circle at 82% 20%, rgba(255, 209, 102, 0.12), transparent 7rem);
          opacity: 0;
          transition: opacity 180ms ease;
        }

        .feature-card:hover::after {
          opacity: 1;
        }

        .feature-top {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 38px;
        }

        .feature-top span {
          color: var(--accent);
          font-weight: 860;
        }

        .feature-top small {
          border: 1px solid var(--line);
          border-radius: 999px;
          padding: 6px 10px;
          color: var(--soft);
          font-size: 0.75rem;
          font-weight: 700;
        }

        .feature-card h3,
        .feature-card p {
          position: relative;
          z-index: 1;
        }

        .feature-card h3 {
          margin-bottom: 14px;
          font-size: 1.16rem;
          line-height: 1.24;
        }

        .feature-card p {
          font-size: 0.94rem;
        }

        .difference {
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.02), rgba(79, 209, 197, 0.035));
        }

        .comparison-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 88px minmax(0, 1fr);
          gap: 18px;
          align-items: stretch;
        }

        .comparison-card {
          border-radius: 26px;
          padding: 28px;
          min-height: 260px;
        }

        .comparison-card span {
          display: inline-flex;
          margin-bottom: 28px;
          color: var(--accent);
          font-size: 0.85rem;
          font-weight: 850;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .comparison-card ul {
          display: grid;
          gap: 14px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .comparison-card li {
          position: relative;
          border: 1px solid var(--line);
          border-radius: 16px;
          padding: 14px 14px 14px 38px;
          color: var(--muted);
          background: rgba(255, 255, 255, 0.035);
          line-height: 1.45;
        }

        .comparison-card li::before {
          content: "";
          position: absolute;
          top: 18px;
          left: 16px;
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: var(--soft);
        }

        .comparison-muted {
          opacity: 0.82;
        }

        .comparison-kivo {
          border-color: rgba(255, 209, 102, 0.26);
          background:
            linear-gradient(135deg, rgba(255, 209, 102, 0.08), rgba(79, 209, 197, 0.055)),
            var(--panel);
        }

        .comparison-kivo li::before {
          background: var(--green);
          box-shadow: 0 0 0 6px rgba(126, 231, 135, 0.08);
        }

        .comparison-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .comparison-arrow span {
          width: 54px;
          height: 54px;
          border: 1px solid rgba(255, 209, 102, 0.32);
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: var(--accent);
          background: rgba(255, 209, 102, 0.08);
          font-size: 1.4rem;
          font-weight: 800;
        }

        .how-inner,
        .schools-inner {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 64px;
          align-items: start;
        }

        .guidance-card {
          display: grid;
          gap: 18px;
          max-width: 600px;
          margin-top: 30px;
          border-radius: 24px;
          padding: 24px;
        }

        .guidance-card strong {
          display: block;
          margin-bottom: 8px;
          color: var(--text);
          font-size: 0.97rem;
        }

        .guidance-card p {
          margin-bottom: 0;
          font-size: 0.94rem;
        }

        .steps {
          position: relative;
          display: grid;
          gap: 18px;
          padding-left: 34px;
        }

        .steps::before {
          content: "";
          position: absolute;
          top: 34px;
          bottom: 34px;
          left: 12px;
          width: 2px;
          background: linear-gradient(180deg, var(--accent), var(--cyan), var(--blue));
          opacity: 0.7;
        }

        .step {
          position: relative;
          display: grid;
          grid-template-columns: 76px 1fr;
          align-items: start;
          min-height: 144px;
          border-radius: 24px;
          padding: 24px;
        }

        .step::before {
          content: "";
          position: absolute;
          top: 32px;
          left: -29px;
          width: 16px;
          height: 16px;
          border-radius: 999px;
          background: var(--accent);
          box-shadow: 0 0 0 8px rgba(255, 209, 102, 0.1);
        }

        .step span {
          color: var(--accent);
          font-weight: 860;
        }

        .step h3 {
          margin-bottom: 10px;
          color: var(--text);
          font-size: 1.18rem;
          line-height: 1.25;
        }

        .step p {
          margin-bottom: 0;
          color: var(--muted);
          font-size: 0.96rem;
          line-height: 1.62;
        }

        .schools {
          padding-bottom: 96px;
        }

        .schools-copy p {
          max-width: 560px;
          margin: 24px 0 30px;
        }

        .trust-panel {
          position: relative;
          min-height: 410px;
          border-radius: 28px;
          padding: 30px;
          overflow: hidden;
        }

        .trust-panel::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 16% 16%, rgba(255, 209, 102, 0.16), transparent 9rem),
            radial-gradient(circle at 88% 22%, rgba(79, 209, 197, 0.14), transparent 11rem);
          pointer-events: none;
        }

        .trust-panel ul {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .trust-panel li {
          min-height: 142px;
          border: 1px solid var(--line);
          border-radius: 22px;
          padding: 48px 18px 18px;
          background: rgba(7, 10, 18, 0.38);
          position: relative;
        }

        .trust-panel li::before {
          content: "";
          position: absolute;
          top: 18px;
          left: 18px;
          width: 18px;
          height: 18px;
          border-radius: 999px;
          background:
            radial-gradient(circle at 50% 50%, var(--accent) 0 4px, transparent 5px),
            rgba(79, 209, 197, 0.14);
          border: 1px solid rgba(255, 209, 102, 0.24);
        }

        .trust-map {
          position: absolute;
          inset: 48px 46px auto auto;
          width: 164px;
          height: 118px;
          opacity: 0.42;
          border-top: 1px dashed rgba(79, 209, 197, 0.5);
          border-right: 1px dashed rgba(255, 209, 102, 0.42);
          border-radius: 0 42px 0 0;
        }

        .trust-map span:nth-child(1) {
          top: -7px;
          left: 4px;
        }

        .trust-map span:nth-child(2) {
          right: -7px;
          top: 36px;
          background: var(--cyan);
        }

        .trust-map span:nth-child(3) {
          right: 42px;
          bottom: -4px;
          background: var(--blue);
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

        @keyframes patternDrift {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(18px);
          }
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
          .hero-grid,
          .availability-inner,
          .comparison-grid,
          .how-inner,
          .schools-inner {
            grid-template-columns: 1fr;
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
          .mini-row,
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
