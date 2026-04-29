import type { Metadata } from "next";
import Image from "next/image";

const features = [
  {
    k: "01",
    title: "Curriculum-aware answers",
    desc: "KivoEdu responds from your approved lessons, notes, syllabi, and question banks so students learn the way your school teaches.",
  },
  {
    k: "02",
    title: "Step-by-step tutoring",
    desc: "Students get guided explanations for math, science, reading, and revision without jumping straight to a final answer.",
  },
  {
    k: "03",
    title: "Practice that adapts",
    desc: "Generate quizzes, chapter checks, and exam-style practice from the exact material students are working through.",
  },
  {
    k: "04",
    title: "Teacher visibility",
    desc: "Spot common questions, stuck topics, and progress patterns so teachers can support the class with better context.",
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

export const metadata: Metadata = {
  title: "KivoEdu | AI Tutoring Built for Students",
  description:
    "KivoEdu is a curriculum-grounded AI tutor that helps students ask questions, practice, and revise with content approved by their school.",
};

export default function Home() {
  return (
    <main className="root">
      <nav className="nav">
        <div className="nav-inner">
          <a href="#" className="logo-link" aria-label="KivoEdu home">
            <Image
              src="/kivo_logo_transparent_bg_1.png"
              alt="KivoEdu"
              width={138}
              height={52}
              style={{ objectFit: "contain" }}
              priority
            />
          </a>
          <div className="nav-links" aria-label="Primary navigation">
            <a href="#features">Features</a>
            <a href="#how">How it works</a>
            <a href="#schools">Schools</a>
            <a href="/blog">Blog</a>
          </div>
          <a href="mailto:admin@kivoedu.ai" className="btn btn-nav">
            Request demo
          </a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Curriculum-grounded AI tutoring</p>
            <h1>
              AI tutoring built
              <span> for students.</span>
            </h1>
            <p className="hero-sub">
              KivoEdu helps every student ask questions, practice tough topics,
              and revise with a tutor grounded in the curriculum your school
              already trusts.
            </p>
            <div className="hero-actions">
              <a href="mailto:admin@kivoedu.ai" className="btn btn-primary">
                Request demo
              </a>
              <a href="#features" className="btn btn-secondary">
                Explore features
              </a>
            </div>
            <div className="hero-stats" aria-label="Product strengths">
              <div>
                <strong>24/7</strong>
                <span>student support</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>school-controlled content</span>
              </div>
              <div>
                <strong>DB</strong>
                <span>verified curriculum coverage</span>
              </div>
            </div>
          </div>

          <div className="product-shell" aria-label="KivoEdu tutoring preview">
            <div className="window-bar">
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
              <ol>
                <li>Identify two numbers that multiply to the constant.</li>
                <li>Check they add to the middle coefficient.</li>
                <li>Rewrite the expression as two brackets.</li>
              </ol>
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
      </section>

      <section className="features" id="features">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">Why students use it</p>
            <h2>Clear help when they need it, from content teachers approve.</h2>
          </div>
          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.title}>
                <span>{feature.k}</span>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="how" id="how">
        <div className="section-inner how-inner">
          <div>
            <p className="eyebrow">How it works</p>
            <h2>Students learn from the curriculum already supported by KivoEdu.</h2>
            <p className="how-copy">
              Students do not upload materials. The tutor works from
              curriculum, board, country, grade, and subject data that already
              exists in our database. KivoEdu maintains that content and keeps
              adding new curriculum coverage over time.
            </p>
            <div className="availability-note" aria-label="Current availability and AI guidance">
              <div>
                <strong>Current availability</strong>
                <p>
                  KivoEdu currently supports the CBSE board for Grades 9 and 10
                  in India. We are working to add more boards, expand coverage
                  to Grades 6 through 12, and bring KivoEdu to more countries
                  later this year.
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
          <div className="steps">
            {steps.map((step, index) => (
              <div className="step" key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="schools" id="schools">
        <div className="section-inner schools-inner">
          <div>
            <p className="eyebrow">Built with schools in mind</p>
            <h2>Keep teachers in control while giving students more support.</h2>
          </div>
          <div className="schools-panel">
            <p>
              KivoEdu does not replace teachers or rewrite your curriculum. It
              extends supported curriculum content from our database into a
              private AI tutor students can rely on after class, during study
              hall, or while preparing for exams.
            </p>
            <ul>
              <li>Works with supported curriculum in the KivoEdu database</li>
              <li>Coverage is organized by country, board, grade, and subject</li>
              <li>New curriculum coverage is added and updated by KivoEdu</li>
              <li>Keeps student data private and secure</li>
            </ul>
            <a href="mailto:admin@kivoedu.ai" className="btn btn-primary">
              Talk to KivoEdu
            </a>
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
              style={{ objectFit: "contain" }}
            />
          </a>
          <p>© 2026 KivoEdu. All rights reserved.</p>
          <a href="/blog">Blog</a>
        </div>
      </footer>

      <style>{`
        *, *::before, *::after {
          box-sizing: border-box;
        }

        :root {
          --bg: #070a12;
          --panel: #0d1320;
          --panel-2: #111b2c;
          --line: rgba(196, 217, 255, 0.12);
          --line-strong: rgba(196, 217, 255, 0.22);
          --text: #f4f7fb;
          --muted: #a8b3c6;
          --soft: #707d94;
          --cyan: #4fd1c5;
          --blue: #79a7ff;
          --green: #7ee787;
          --orange: #ffb86b;
          --max: 1160px;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
        }

        .root {
          min-height: 100vh;
          color: var(--text);
          background:
            radial-gradient(circle at 12% 8%, rgba(79, 209, 197, 0.18), transparent 30rem),
            radial-gradient(circle at 88% 0%, rgba(121, 167, 255, 0.2), transparent 28rem),
            linear-gradient(180deg, #070a12 0%, #0a0f1b 52%, #070a12 100%);
          font-family: var(--font-geist-sans), Inter, system-ui, sans-serif;
          overflow-x: hidden;
        }

        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 20;
          border-bottom: 1px solid var(--line);
          background: rgba(7, 10, 18, 0.78);
          backdrop-filter: blur(18px);
        }

        .nav-inner,
        .section-inner,
        .hero-grid,
        .footer-inner {
          width: min(var(--max), calc(100% - 40px));
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

        .nav-links a {
          color: var(--muted);
          font-size: 0.88rem;
          text-decoration: none;
        }

        .nav-links a:hover {
          color: var(--text);
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 42px;
          border-radius: 8px;
          padding: 0 18px;
          font-weight: 650;
          font-size: 0.92rem;
          text-decoration: none;
          transition: transform 160ms ease, border-color 160ms ease, background 160ms ease;
          white-space: nowrap;
        }

        .btn:hover {
          transform: translateY(-1px);
        }

        .btn-nav,
        .btn-secondary {
          color: var(--text);
          border: 1px solid var(--line-strong);
          background: rgba(255, 255, 255, 0.04);
        }

        .btn-primary {
          color: #061018;
          border: 1px solid rgba(126, 231, 135, 0.35);
          background: linear-gradient(135deg, var(--green), var(--cyan));
          box-shadow: 0 18px 44px rgba(79, 209, 197, 0.2);
        }

        .hero {
          padding: 160px 0 88px;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.02fr) minmax(360px, 0.78fr);
          align-items: center;
          gap: 60px;
        }

        .hero-copy {
          max-width: 710px;
        }

        .eyebrow {
          margin: 0 0 16px;
          color: var(--cyan);
          font-size: 0.76rem;
          font-weight: 750;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        h1,
        h2,
        h3,
        p {
          margin-top: 0;
        }

        h1 {
          margin-bottom: 24px;
          max-width: 760px;
          font-size: clamp(3.5rem, 8vw, 6.8rem);
          line-height: 0.94;
          letter-spacing: 0;
        }

        h1 span {
          display: block;
          color: transparent;
          background: linear-gradient(135deg, #f4f7fb 10%, var(--cyan) 48%, var(--blue) 92%);
          background-clip: text;
          -webkit-background-clip: text;
        }

        .hero-sub {
          max-width: 650px;
          color: var(--muted);
          font-size: 1.16rem;
          line-height: 1.72;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin: 34px 0 42px;
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
          max-width: 680px;
        }

        .hero-stats div,
        .mini-row div,
        .feature-card,
        .availability-note,
        .schools-panel {
          border: 1px solid var(--line);
          background: rgba(255, 255, 255, 0.045);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }

        .hero-stats div {
          min-height: 104px;
          border-radius: 8px;
          padding: 18px;
        }

        .hero-stats strong {
          display: block;
          margin-bottom: 8px;
          color: var(--text);
          font-size: 1.48rem;
        }

        .hero-stats span {
          color: var(--soft);
          font-size: 0.9rem;
          line-height: 1.4;
        }

        .product-shell {
          position: relative;
          border: 1px solid var(--line-strong);
          border-radius: 8px;
          padding: 18px;
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.025)),
            rgba(13, 19, 32, 0.86);
          box-shadow: 0 36px 100px rgba(0, 0, 0, 0.35);
        }

        .product-shell::before {
          content: "";
          position: absolute;
          inset: -1px;
          z-index: -1;
          border-radius: 8px;
          background: linear-gradient(135deg, rgba(79, 209, 197, 0.36), rgba(255, 184, 107, 0.12), rgba(121, 167, 255, 0.24));
        }

        .window-bar {
          display: flex;
          gap: 8px;
          margin-bottom: 18px;
        }

        .window-bar span {
          width: 10px;
          height: 10px;
          border-radius: 99px;
          background: var(--line-strong);
        }

        .student-card,
        .answer-card {
          border-radius: 8px;
          padding: 22px;
        }

        .student-card {
          background: linear-gradient(135deg, rgba(121, 167, 255, 0.22), rgba(79, 209, 197, 0.08));
          border: 1px solid rgba(121, 167, 255, 0.2);
        }

        .card-kicker,
        .answer-head p {
          margin-bottom: 10px;
          color: var(--cyan);
          font-size: 0.76rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .student-card h2 {
          margin-bottom: 12px;
          font-size: clamp(1.4rem, 3vw, 2.1rem);
          line-height: 1.08;
        }

        .student-card p,
        .answer-card li,
        .availability-note p,
        .schools-panel p,
        .schools-panel li,
        .feature-card p {
          color: var(--muted);
          line-height: 1.65;
        }

        .answer-card {
          margin-top: 14px;
          background: rgba(7, 10, 18, 0.58);
          border: 1px solid var(--line);
        }

        .answer-head {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .pulse {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--green);
          box-shadow: 0 0 0 8px rgba(126, 231, 135, 0.1);
        }

        .answer-card ol {
          margin: 0;
          padding-left: 22px;
        }

        .answer-card li + li {
          margin-top: 10px;
        }

        .mini-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-top: 14px;
        }

        .mini-row div {
          border-radius: 8px;
          padding: 16px;
        }

        .mini-row span {
          display: block;
          margin-bottom: 6px;
          color: var(--soft);
          font-size: 0.82rem;
        }

        .mini-row strong {
          color: var(--orange);
          font-size: 1rem;
        }

        .features,
        .how,
        .schools {
          padding: 92px 0;
          border-top: 1px solid var(--line);
        }

        .section-heading {
          max-width: 780px;
          margin-bottom: 36px;
        }

        h2 {
          margin-bottom: 0;
          font-size: clamp(2rem, 4vw, 3.7rem);
          line-height: 1.03;
          letter-spacing: 0;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 14px;
        }

        .feature-card {
          min-height: 292px;
          border-radius: 8px;
          padding: 24px;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.025));
        }

        .feature-card span {
          display: inline-flex;
          margin-bottom: 34px;
          color: var(--cyan);
          font-weight: 800;
        }

        .feature-card h3 {
          margin-bottom: 14px;
          font-size: 1.1rem;
          line-height: 1.25;
        }

        .feature-card p {
          font-size: 0.94rem;
        }

        .how-inner,
        .schools-inner {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 56px;
          align-items: start;
        }

        .steps {
          display: grid;
          gap: 14px;
        }

        .step {
          display: grid;
          grid-template-columns: 72px 1fr;
          align-items: start;
          min-height: 132px;
          border: 1px solid var(--line);
          border-radius: 8px;
          padding: 22px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.025));
        }

        .step span {
          color: var(--cyan);
          font-weight: 800;
        }

        .how-copy {
          max-width: 520px;
          margin-top: 22px;
          color: var(--muted);
          font-size: 1rem;
          line-height: 1.7;
        }

        .availability-note {
          display: grid;
          gap: 18px;
          max-width: 560px;
          margin-top: 28px;
          border-radius: 8px;
          padding: 22px;
          background: linear-gradient(135deg, rgba(126, 231, 135, 0.09), rgba(79, 209, 197, 0.04));
        }

        .availability-note strong {
          display: block;
          margin-bottom: 8px;
          color: var(--text);
          font-size: 0.96rem;
        }

        .availability-note p {
          margin-bottom: 0;
          font-size: 0.94rem;
        }

        .step h3 {
          margin-bottom: 10px;
          color: var(--text);
          font-size: 1.16rem;
          line-height: 1.25;
        }

        .step p {
          margin-bottom: 0;
          color: var(--muted);
          font-size: 0.96rem;
          line-height: 1.62;
        }

        .schools-panel {
          border-radius: 8px;
          padding: 30px;
        }

        .schools-panel ul {
          display: grid;
          gap: 12px;
          margin: 26px 0 30px;
          padding: 0;
          list-style: none;
        }

        .schools-panel li {
          position: relative;
          padding-left: 24px;
        }

        .schools-panel li::before {
          content: "";
          position: absolute;
          top: 0.72em;
          left: 0;
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: var(--green);
        }

        .footer {
          border-top: 1px solid var(--line);
          padding: 34px 0;
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

        .footer a {
          color: var(--muted);
          font-size: 0.88rem;
          text-decoration: none;
        }

        .footer a:hover {
          color: var(--text);
        }

        @media (max-width: 980px) {
          .hero-grid,
          .how-inner,
          .schools-inner {
            grid-template-columns: 1fr;
          }

          .feature-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .product-shell {
            max-width: 620px;
          }
        }

        @media (max-width: 720px) {
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
            padding: 0 13px;
          }

          .hero {
            padding-top: 120px;
          }

          h1 {
            font-size: clamp(3rem, 17vw, 4.5rem);
          }

          .hero-stats,
          .feature-grid,
          .mini-row {
            grid-template-columns: 1fr;
          }

          .feature-card {
            min-height: auto;
          }

          .step {
            grid-template-columns: 52px 1fr;
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
