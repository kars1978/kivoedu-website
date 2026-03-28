import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KivoEdu — AI-Powered Learning for Every School",
  description:
    "KivoEdu ingests your school's curriculum and generates personalised lessons, quizzes and exam prep — powered by AI, built for educators.",
};

export default function Home() {
  return (
    <main className="root">
      <nav className="nav">
        <div className="nav-inner">
          <span className="logo">kivo<em>edu</em></span>
          <ul className="nav-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#how">How it works</a></li>
            <li><a href="#schools">For schools</a></li>
          </ul>
          <a href="#contact" className="btn-nav">Request Access</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-bg">
          <div className="orb orb-1" />
          <div className="orb orb-2" />
          <div className="grid-lines" />
        </div>
        <div className="hero-inner">
          <div className="badge">Now in early access for schools</div>
          <h1 className="hero-h1">
            Your curriculum.<br />
            <span className="accent">Supercharged by AI.</span>
          </h1>
          <p className="hero-sub">
            KivoEdu ingests your school&apos;s own curriculum and generates
            personalised lessons, textbooks, quizzes and exam prep —
            so teachers spend less time preparing and students learn more.
          </p>
          <div className="hero-ctas">
            <a href="#contact" className="btn-primary">Get early access</a>
            <a href="#how" className="btn-ghost">See how it works →</a>
          </div>
          <div className="hero-stats">
            <div className="stat"><span className="stat-n">Your</span><span className="stat-l">curriculum, not ours</span></div>
            <div className="stat-div" />
            <div className="stat"><span className="stat-n">AI</span><span className="stat-l">content generation</span></div>
            <div className="stat-div" />
            <div className="stat"><span className="stat-n">Zero</span><span className="stat-l">lesson prep from scratch</span></div>
          </div>
        </div>
      </section>

      <section className="features" id="features">
        <div className="section-inner">
          <p className="section-eyebrow">What KivoEdu does</p>
          <h2 className="section-h2">Everything a school needs.<br />Nothing it doesn&apos;t.</h2>
          <div className="feature-grid">
            {[
              { icon: "◈", title: "Curriculum Ingestion", desc: "Upload your existing syllabi, textbooks and lesson plans. KivoEdu learns your curriculum and builds from it — not from generic internet data." },
              { icon: "⬡", title: "AI Content Generation", desc: "Automatically produces lessons, worked examples, practice sets and mock exams aligned to your exact curriculum standards." },
              { icon: "◉", title: "AI Tutor", desc: "Students get a conversational AI tutor that answers questions, explains concepts and gives hints — available 24/7, always aligned to your syllabus." },
              { icon: "◫", title: "Exam Preparation", desc: "Intent-aware quiz engine classifies questions as conceptual or numerical and adapts its tutoring style accordingly for each student." },
              { icon: "⬢", title: "Teacher Analytics", desc: "Track class-wide comprehension gaps, individual student progress and quiz performance — all in a clean dashboard for teachers." },
              { icon: "◌", title: "Privacy First", desc: "Your curriculum and student data stays within your account. No data is used to train models or shared with third parties." },
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

      <section className="how" id="how">
        <div className="section-inner">
          <p className="section-eyebrow">How it works</p>
          <h2 className="section-h2">From curriculum to classroom<br />in three steps</h2>
          <div className="steps">
            {[
              { n: "01", title: "Upload your curriculum", desc: "Your school uploads its existing syllabus documents, textbooks, past papers and lesson notes. KivoEdu ingests and indexes everything." },
              { n: "02", title: "AI generates the coursework", desc: "Our engine produces chapter summaries, explanations, exercises, quizzes and model answers — all grounded in your own materials." },
              { n: "03", title: "Students learn with their AI tutor", desc: "Students ask questions, get personalised explanations and practice with adaptive quizzes. Teachers see everything in the dashboard." },
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

      <section className="schools" id="schools">
        <div className="section-inner schools-inner">
          <div className="schools-text">
            <p className="section-eyebrow">Built for schools</p>
            <h2 className="section-h2">The school owns the curriculum.<br />We make it come alive.</h2>
            <p className="schools-body">
              Most AI learning tools replace teachers and ignore existing curricula.
              KivoEdu is different — it starts with what your school has already built
              and uses AI to multiply its impact, putting teachers firmly in control.
            </p>
            <ul className="schools-list">
              <li>✦ Works with your existing curriculum documents</li>
              <li>✦ Supports multiple subjects and grade levels</li>
              <li>✦ No per-student AI fees to manage</li>
              <li>✦ Teacher controls what the AI teaches</li>
              <li>✦ Multilingual support on the roadmap</li>
            </ul>
          </div>
          <div className="schools-card">
            <div className="card-label">Early access</div>
            <p className="card-body">
              We&apos;re currently onboarding a small group of partner schools to
              shape the product. If you&apos;re a school administrator, teacher or
              edtech coordinator — we&apos;d love to talk.
            </p>
            <a href="mailto:hello@kivoedu.ai" className="btn-primary btn-full">
              Request early access
            </a>
            <p className="card-note">No commitment. Just a conversation.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <span className="logo">kivo<em>edu</em></span>
          <p className="footer-tag">AI tutoring for every school, everywhere.</p>
          <p className="footer-copy">© 2025 KivoEdu. All rights reserved.</p>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --ink: #0d1117; --ink-2: #1c2333; --muted: #6b7280;
          --accent: #00c896; --accent-dim: rgba(0,200,150,0.12); --accent-glow: rgba(0,200,150,0.35);
          --surface: #f8f9fb; --border: rgba(0,0,0,0.08); --white: #ffffff;
          --serif: 'Instrument Serif', Georgia, serif; --sans: 'DM Sans', sans-serif; --radius: 14px;
        }
        .root { font-family: var(--sans); color: var(--ink); background: var(--white); }
        .nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; background: rgba(255,255,255,0.85); backdrop-filter: blur(16px); border-bottom: 1px solid var(--border); }
        .nav-inner { max-width: 1140px; margin: 0 auto; padding: 0 2rem; height: 64px; display: flex; align-items: center; gap: 2rem; }
        .logo { font-family: var(--serif); font-size: 1.4rem; color: var(--ink); letter-spacing: -0.02em; }
        .logo em { color: var(--accent); font-style: normal; }
        .nav-links { display: flex; gap: 1.75rem; list-style: none; margin-left: auto; }
        .nav-links a { font-size: 0.875rem; color: var(--muted); text-decoration: none; font-weight: 400; transition: color .2s; }
        .nav-links a:hover { color: var(--ink); }
        .btn-nav { font-size: 0.8rem; font-weight: 500; padding: .5rem 1.1rem; background: var(--ink); color: #fff; border-radius: 8px; text-decoration: none; transition: background .2s; white-space: nowrap; }
        .btn-nav:hover { background: #1c2333; }
        .hero { position: relative; overflow: hidden; min-height: 100vh; display: flex; align-items: center; padding: 120px 2rem 80px; }
        .hero-bg { position: absolute; inset: 0; z-index: 0; }
        .orb { position: absolute; border-radius: 50%; filter: blur(80px); opacity: .55; }
        .orb-1 { width: 520px; height: 520px; top: -80px; right: -60px; background: radial-gradient(circle, #00c896 0%, transparent 70%); animation: drift 8s ease-in-out infinite alternate; }
        .orb-2 { width: 380px; height: 380px; bottom: -40px; left: 10%; background: radial-gradient(circle, #00a8ff 0%, transparent 70%); animation: drift 11s ease-in-out infinite alternate-reverse; }
        @keyframes drift { 0% { transform: translate(0,0) scale(1); } 100% { transform: translate(30px,-20px) scale(1.08); } }
        .grid-lines { position: absolute; inset: 0; background-image: linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px); background-size: 60px 60px; mask-image: radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%); }
        .hero-inner { position: relative; z-index: 1; max-width: 780px; margin: 0 auto; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 1.5rem; }
        .badge { display: inline-block; font-size: .75rem; font-weight: 500; background: var(--accent-dim); color: #00a070; border: 1px solid rgba(0,200,150,.3); padding: .35rem .9rem; border-radius: 999px; letter-spacing: .04em; animation: fadeUp .6s ease both; }
        .hero-h1 { font-family: var(--serif); font-size: clamp(2.4rem,5.5vw,4rem); line-height: 1.15; letter-spacing: -0.02em; font-weight: 400; animation: fadeUp .6s .1s ease both; }
        .accent { color: var(--accent); font-style: italic; }
        .hero-sub { font-size: 1.1rem; line-height: 1.7; color: var(--muted); max-width: 580px; font-weight: 300; animation: fadeUp .6s .2s ease both; }
        .hero-ctas { display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center; animation: fadeUp .6s .3s ease both; }
        .btn-primary { display: inline-block; padding: .8rem 2rem; background: var(--accent); color: #fff; font-weight: 500; font-size: .95rem; border-radius: 10px; text-decoration: none; transition: box-shadow .2s, transform .15s; }
        .btn-primary:hover { box-shadow: 0 0 0 4px var(--accent-glow); transform: translateY(-1px); }
        .btn-ghost { display: inline-block; padding: .8rem 1.5rem; color: var(--ink); font-size: .95rem; font-weight: 400; text-decoration: none; border: 1px solid var(--border); border-radius: 10px; transition: border-color .2s; }
        .btn-ghost:hover { border-color: #aaa; }
        .hero-stats { display: flex; align-items: center; gap: 2rem; margin-top: .5rem; animation: fadeUp .6s .4s ease both; }
        .stat { display: flex; flex-direction: column; gap: .15rem; }
        .stat-n { font-family: var(--serif); font-size: 1.4rem; letter-spacing: -0.02em; }
        .stat-l { font-size: .75rem; color: var(--muted); font-weight: 300; }
        .stat-div { width: 1px; height: 36px; background: var(--border); }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: none; } }
        .section-inner { max-width: 1140px; margin: 0 auto; padding: 0 2rem; }
        .section-eyebrow { font-size: .75rem; font-weight: 500; letter-spacing: .1em; text-transform: uppercase; color: var(--accent); margin-bottom: .75rem; }
        .section-h2 { font-family: var(--serif); font-size: clamp(1.8rem,3.5vw,2.8rem); font-weight: 400; line-height: 1.2; letter-spacing: -0.02em; margin-bottom: 3rem; }
        .features { padding: 100px 0; background: var(--surface); }
        .feature-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px,1fr)); gap: 1.5px; background: var(--border); border: 1.5px solid var(--border); border-radius: var(--radius); overflow: hidden; }
        .feature-card { background: var(--white); padding: 2.25rem; transition: background .2s; }
        .feature-card:hover { background: #f0fdf8; }
        .feature-icon { font-size: 1.6rem; display: block; margin-bottom: 1rem; color: var(--accent); }
        .feature-title { font-family: var(--serif); font-size: 1.15rem; font-weight: 400; margin-bottom: .6rem; }
        .feature-desc { font-size: .9rem; line-height: 1.65; color: var(--muted); font-weight: 300; }
        .how { padding: 100px 0; }
        .steps { display: flex; flex-direction: column; gap: 0; border: 1px solid var(--border); border-radius: var(--radius); overflow: hidden; }
        .step { display: flex; align-items: flex-start; gap: 2rem; padding: 2.5rem; border-bottom: 1px solid var(--border); transition: background .2s; }
        .step:last-child { border-bottom: none; }
        .step:hover { background: var(--surface); }
        .step-n { font-family: var(--serif); font-size: 2.5rem; color: var(--accent); opacity: .5; min-width: 56px; line-height: 1; font-style: italic; }
        .step-title { font-family: var(--serif); font-size: 1.2rem; font-weight: 400; margin-bottom: .5rem; }
        .step-desc { font-size: .9rem; line-height: 1.65; color: var(--muted); font-weight: 300; }
        .schools { padding: 100px 0; background: var(--ink); color: var(--white); }
        .schools .section-eyebrow { color: var(--accent); }
        .schools .section-h2 { color: var(--white); }
        .schools-inner { display: grid; grid-template-columns: 1fr 420px; gap: 5rem; align-items: start; }
        .schools-body { font-size: 1rem; line-height: 1.75; color: rgba(255,255,255,.6); font-weight: 300; margin-bottom: 2rem; }
        .schools-list { list-style: none; display: flex; flex-direction: column; gap: .65rem; }
        .schools-list li { font-size: .9rem; color: rgba(255,255,255,.7); font-weight: 300; }
        .schools-card { background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.12); border-radius: var(--radius); padding: 2.25rem; display: flex; flex-direction: column; gap: 1.25rem; }
        .card-label { font-size: .7rem; font-weight: 500; letter-spacing: .1em; text-transform: uppercase; color: var(--accent); }
        .card-body { font-size: .9rem; line-height: 1.65; color: rgba(255,255,255,.65); font-weight: 300; }
        .btn-full { width: 100%; text-align: center; }
        .card-note { font-size: .75rem; color: rgba(255,255,255,.35); text-align: center; }
        .footer { padding: 48px 2rem; border-top: 1px solid var(--border); }
        .footer-inner { max-width: 1140px; margin: 0 auto; display: flex; flex-direction: column; align-items: center; gap: .5rem; text-align: center; }
        .footer-tag { font-size: .85rem; color: var(--muted); font-weight: 300; }
        .footer-copy { font-size: .75rem; color: #bbb; }
        @media (max-width: 900px) { .schools-inner { grid-template-columns: 1fr; gap: 3rem; } .nav-links { display: none; } .hero-stats { flex-wrap: wrap; gap: 1rem; } }
        @media (max-width: 600px) { .feature-grid { grid-template-columns: 1fr; } .step { flex-direction: column; gap: 1rem; } }
      `}</style>
    </main>
  );
}
