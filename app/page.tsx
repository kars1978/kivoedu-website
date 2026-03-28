import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KivoEdu — AI-Powered Learning for Every School",
  description:
    "KivoEdu ingests your school's curriculum and generates personalised lessons, quizzes and exam prep — powered by AI, built for educators.",
};

export default function Home() {
  return (
    <main className="root">
      {/* NAV */}
      <nav className="nav">
        <div className="nav-inner">
          <span className="logo">kivo<em>edu</em></span>
          <ul className="nav-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#how">How it works</a></li>
            <li><a href="#schools">For schools</a></li>
          </ul>
          <a href="mailto:hello@kivoedu.ai" className="btn-nav">Request Access</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="badge">Early access open for schools</div>
          <h1 className="hero-h1">
            Your curriculum.<br />
            <span className="accent">Supercharged by AI.</span>
          </h1>
          <p className="hero-sub">
            KivoEdu ingests your school&apos;s own curriculum and generates
            personalised lessons, quizzes and exam prep —
            so teachers spend less time preparing and students learn more.
          </p>
          <div className="hero-ctas">
            <a href="mailto:hello@kivoedu.ai" className="btn-primary">Get early access</a>
            <a href="#how" className="btn-ghost">See how it works →</a>
          </div>
        </div>
        <div className="hero-rule" />
      </section>

      {/* FEATURES */}
      <section className="features" id="features">
        <div className="section-inner">
          <p className="section-eyebrow">What KivoEdu does</p>
          <h2 className="section-h2">Built for how schools actually work.</h2>
          <div className="feature-grid">
            {[
              { icon: "◈", title: "Curriculum Ingestion", desc: "Upload your syllabi, textbooks and lesson plans. KivoEdu builds from your materials — not generic internet data." },
              { icon: "⬡", title: "AI Content Generation", desc: "Automatically produces lessons, worked examples, practice sets and mock exams aligned to your curriculum standards." },
              { icon: "◉", title: "AI Tutor", desc: "Students get a conversational AI tutor available 24/7 — always grounded in your school's syllabus." },
              { icon: "◫", title: "Exam Preparation", desc: "Adaptive quiz engine that classifies questions as conceptual or numerical and adjusts its approach per student." },
              { icon: "⬢", title: "Teacher Analytics", desc: "Track comprehension gaps, individual progress and quiz performance in a clean dashboard." },
              { icon: "◌", title: "Privacy First", desc: "Your curriculum and student data stays within your account. Never used to train models or shared with third parties." },
            ].map(f => (
              <div className="feature-card" key={f.title}>
                <span className="feature-icon">{f.icon}</span>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how" id="how">
        <div className="section-inner">
          <p className="section-eyebrow">How it works</p>
          <h2 className="section-h2">From curriculum to classroom in three steps.</h2>
          <div className="steps">
            {[
              { n: "01", title: "Upload your curriculum", desc: "Your school uploads existing syllabus documents, textbooks, past papers and lesson notes. KivoEdu ingests and indexes everything." },
              { n: "02", title: "AI generates the coursework", desc: "Our engine produces chapter summaries, explanations, exercises, quizzes and model answers — all grounded in your own materials." },
              { n: "03", title: "Students learn with their AI tutor", desc: "Students ask questions, get personalised explanations and practise with adaptive quizzes. Teachers see everything in the dashboard." },
            ].map(s => (
              <div className="step" key={s.n}>
                <div className="step-n">{s.n}</div>
                <div className="step-body">
                  <h3 className="step-title">{s.title}</h3>
                  <p className="step-desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOR SCHOOLS */}
      <section className="schools" id="schools">
        <div className="section-inner schools-inner">
          <div className="schools-text">
            <p className="section-eyebrow">Built for schools</p>
            <h2 className="section-h2">The school owns the curriculum.<br />We make it come alive.</h2>
            <p className="schools-body">
              Most AI learning tools replace teachers and ignore existing curricula.
              KivoEdu starts with what your school has already built
              and uses AI to multiply its impact — teachers stay firmly in control.
            </p>
            <ul className="schools-list">
              <li>Works with your existing curriculum documents</li>
              <li>Supports multiple subjects and grade levels</li>
              <li>Teacher controls what the AI teaches</li>
              <li>No per-student AI fees to manage</li>
              <li>Multilingual support on the roadmap</li>
            </ul>
          </div>
          <div className="schools-card">
            <p className="card-label">Early access</p>
            <p className="card-body">
              We&apos;re onboarding a small group of partner schools to shape the product.
              If you&apos;re a school administrator, teacher or edtech coordinator — we&apos;d love to talk.
            </p>
            <a href="mailto:hello@kivoedu.ai" className="btn-primary btn-full">
              Request early access
            </a>
            <p className="card-note">No commitment. Just a conversation.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <span className="logo">kivo<em>edu</em></span>
          <p className="footer-copy">© 2025 KivoEdu. All rights reserved.</p>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;1,400&family=Inter:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg:       #0e0e10;
          --bg-2:     #141416;
          --bg-3:     #1a1a1d;
          --border:   rgba(255,255,255,0.07);
          --border-2: rgba(255,255,255,0.12);
          --text:     #e2e2e4;
          --muted:    #6e6e78;
          --muted-2:  #9090a0;
          --accent:   #4ade9a;
          --accent-dim: rgba(74,222,154,0.1);
          --serif: 'Lora', Georgia, serif;
          --sans:  'Inter', system-ui, sans-serif;
          --radius: 10px;
          --max: 1080px;
        }

        html { scroll-behavior: smooth; }
        .root { font-family: var(--sans); color: var(--text); background: var(--bg); min-height: 100vh; }

        /* ── NAV ── */
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          border-bottom: 1px solid var(--border);
          background: rgba(14,14,16,0.85); backdrop-filter: blur(20px);
        }
        .nav-inner {
          max-width: var(--max); margin: 0 auto; padding: 0 2rem;
          height: 60px; display: flex; align-items: center; gap: 2rem;
        }
        .logo { font-family: var(--serif); font-size: 1.25rem; letter-spacing: -0.01em; color: var(--text); }
        .logo em { color: var(--accent); font-style: normal; }
        .nav-links { display: flex; gap: 2rem; list-style: none; margin-left: auto; }
        .nav-links a { font-size: 0.8rem; color: var(--muted); text-decoration: none; letter-spacing: 0.01em; transition: color .15s; }
        .nav-links a:hover { color: var(--text); }
        .btn-nav {
          font-size: 0.78rem; font-weight: 500; padding: .4rem 1rem;
          border: 1px solid var(--border-2); color: var(--text); background: transparent;
          border-radius: 6px; text-decoration: none; transition: border-color .15s, color .15s;
          white-space: nowrap;
        }
        .btn-nav:hover { border-color: var(--accent); color: var(--accent); }

        /* ── HERO ── */
        .hero {
          padding: 160px 2rem 100px;
          display: flex; flex-direction: column; align-items: center;
        }
        .hero-inner {
          max-width: 660px; text-align: center;
          display: flex; flex-direction: column; align-items: center; gap: 1.75rem;
        }
        .badge {
          font-size: .7rem; font-weight: 500; letter-spacing: .08em; text-transform: uppercase;
          color: var(--accent); border: 1px solid rgba(74,222,154,.25);
          background: var(--accent-dim); padding: .3rem .85rem; border-radius: 999px;
          animation: up .5s ease both;
        }
        .hero-h1 {
          font-family: var(--serif); font-size: clamp(2.2rem, 5vw, 3.6rem);
          font-weight: 400; line-height: 1.18; letter-spacing: -0.02em;
          animation: up .5s .08s ease both;
        }
        .accent { color: var(--accent); font-style: italic; }
        .hero-sub {
          font-size: 1rem; line-height: 1.75; color: var(--muted-2); font-weight: 300;
          max-width: 520px; animation: up .5s .16s ease both;
        }
        .hero-ctas {
          display: flex; gap: .75rem; flex-wrap: wrap; justify-content: center;
          animation: up .5s .24s ease both;
        }
        .btn-primary {
          display: inline-block; padding: .7rem 1.75rem;
          background: var(--accent); color: #0e0e10;
          font-weight: 500; font-size: .875rem; border-radius: 7px;
          text-decoration: none; transition: opacity .15s;
        }
        .btn-primary:hover { opacity: .88; }
        .btn-ghost {
          display: inline-block; padding: .7rem 1.4rem;
          color: var(--muted-2); font-size: .875rem; font-weight: 400;
          text-decoration: none; border: 1px solid var(--border);
          border-radius: 7px; transition: border-color .15s, color .15s;
        }
        .btn-ghost:hover { border-color: var(--border-2); color: var(--text); }
        .hero-rule { width: 1px; height: 60px; background: linear-gradient(to bottom, var(--border-2), transparent); margin-top: 80px; }

        @keyframes up { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }

        /* ── SHARED ── */
        .section-inner { max-width: var(--max); margin: 0 auto; padding: 0 2rem; }
        .section-eyebrow {
          font-size: .68rem; font-weight: 500; letter-spacing: .1em; text-transform: uppercase;
          color: var(--accent); margin-bottom: .6rem;
        }
        .section-h2 {
          font-family: var(--serif); font-size: clamp(1.6rem, 3vw, 2.4rem);
          font-weight: 400; line-height: 1.22; letter-spacing: -0.02em;
          color: var(--text); margin-bottom: 3rem;
        }

        /* ── FEATURES ── */
        .features { padding: 100px 0; border-top: 1px solid var(--border); }
        .feature-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          border: 1px solid var(--border); border-radius: var(--radius); overflow: hidden;
        }
        .feature-card {
          padding: 2rem; border-right: 1px solid var(--border); border-bottom: 1px solid var(--border);
          transition: background .15s;
        }
        .feature-card:hover { background: var(--bg-2); }
        .feature-card:nth-child(3n) { border-right: none; }
        .feature-card:nth-child(4), .feature-card:nth-child(5), .feature-card:nth-child(6) { border-bottom: none; }
        .feature-icon { font-size: 1.1rem; display: block; margin-bottom: .9rem; color: var(--accent); opacity: .7; }
        .feature-title { font-size: .9rem; font-weight: 500; margin-bottom: .5rem; color: var(--text); }
        .feature-desc { font-size: .825rem; line-height: 1.65; color: var(--muted-2); font-weight: 300; }

        /* ── HOW ── */
        .how { padding: 100px 0; border-top: 1px solid var(--border); }
        .steps { display: flex; flex-direction: column; }
        .step {
          display: flex; align-items: flex-start; gap: 2.5rem; padding: 2.25rem 0;
          border-bottom: 1px solid var(--border);
        }
        .step:last-child { border-bottom: none; }
        .step-n {
          font-family: var(--serif); font-size: 1.6rem; font-style: italic;
          color: var(--muted); min-width: 40px; padding-top: 2px;
        }
        .step-title { font-size: .95rem; font-weight: 500; margin-bottom: .4rem; color: var(--text); }
        .step-desc { font-size: .825rem; line-height: 1.65; color: var(--muted-2); font-weight: 300; }

        /* ── SCHOOLS ── */
        .schools { padding: 100px 0; border-top: 1px solid var(--border); }
        .schools-inner { display: grid; grid-template-columns: 1fr 360px; gap: 5rem; align-items: start; }
        .schools-body { font-size: .9rem; line-height: 1.8; color: var(--muted-2); font-weight: 300; margin-bottom: 2rem; }
        .schools-list { list-style: none; display: flex; flex-direction: column; gap: .6rem; }
        .schools-list li {
          font-size: .825rem; color: var(--muted-2); font-weight: 300; padding-left: 1.1rem; position: relative;
        }
        .schools-list li::before { content: '—'; position: absolute; left: 0; color: var(--muted); }
        .schools-card {
          background: var(--bg-2); border: 1px solid var(--border-2);
          border-radius: var(--radius); padding: 2rem;
          display: flex; flex-direction: column; gap: 1.1rem;
        }
        .card-label { font-size: .68rem; font-weight: 500; letter-spacing: .1em; text-transform: uppercase; color: var(--accent); }
        .card-body { font-size: .825rem; line-height: 1.65; color: var(--muted-2); font-weight: 300; }
        .btn-full { width: 100%; text-align: center; }
        .card-note { font-size: .72rem; color: var(--muted); text-align: center; }

        /* ── FOOTER ── */
        .footer { padding: 40px 2rem; border-top: 1px solid var(--border); }
        .footer-inner {
          max-width: var(--max); margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between;
        }
        .footer-copy { font-size: .75rem; color: var(--muted); }

        /* ── RESPONSIVE ── */
        @media (max-width: 860px) {
          .feature-grid { grid-template-columns: 1fr 1fr; }
          .feature-card:nth-child(3n) { border-right: 1px solid var(--border); }
          .feature-card:nth-child(2n) { border-right: none; }
          .feature-card:nth-child(4), .feature-card:nth-child(5), .feature-card:nth-child(6) { border-bottom: 1px solid var(--border); }
          .feature-card:nth-child(5), .feature-card:nth-child(6) { border-bottom: none; }
          .schools-inner { grid-template-columns: 1fr; gap: 2.5rem; }
          .nav-links { display: none; }
        }
        @media (max-width: 560px) {
          .feature-grid { grid-template-columns: 1fr; }
          .feature-card { border-right: none !important; border-bottom: 1px solid var(--border) !important; }
          .feature-card:last-child { border-bottom: none !important; }
          .step { gap: 1.25rem; }
          .footer-inner { flex-direction: column; gap: .5rem; text-align: center; }
        }
      `}</style>
    </main>
  );
}
