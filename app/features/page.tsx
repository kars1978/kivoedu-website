import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  BotMessageSquare,
  Brain,
  ClipboardCheck,
  FileQuestionMark,
  FlaskConical,
  HelpCircle,
  NotebookPen,
  PenSquare,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import PricingSection from "../PricingSection";
import SiteNav from "../SiteNav";

const joinUrl = "https://app.kivoedu.ai/join";
const demoUrl = "https://app.kivoedu.ai/demo";

export const metadata: Metadata = {
  title: "Features & Pricing",
  description:
    "See what KivoEdu includes, how students use the learning tools, what parents can track, and which plan fits your family.",
  alternates: { canonical: "/features" },
  openGraph: {
    title: "KivoEdu Features & Pricing",
    description:
      "A clear overview of KivoEdu learning features, parent visibility, supported curriculum, and pricing.",
    url: "/features",
    type: "website",
  },
};

const featureGroups = [
  {
    eyebrow: "Understand",
    title: "Textbook-grounded AI help",
    body:
      "Students can ask questions from supported chapters and get explanations shaped around their board, grade, subject, and textbook context.",
    icon: BotMessageSquare,
    points: ["Step-by-step explanations", "Follow-up questions", "Chapter-aware answers"],
  },
  {
    eyebrow: "Read",
    title: "Interactive reader",
    body:
      "The reader keeps study material and help together, so students can select tricky ideas, switch views, and ask Kivo when they get stuck.",
    icon: BookOpen,
    points: ["Core, Deep Dive, and Lite views", "Select text for help", "Definitions and deeper context"],
  },
  {
    eyebrow: "Practice",
    title: "Quizzes, flashcards, and drills",
    body:
      "Short practice loops help students retry, review, and build confidence without waiting for the next class or tuition session.",
    icon: ClipboardCheck,
    points: ["Quick quizzes", "Flashcards", "Concept drills"],
  },
  {
    eyebrow: "Coming soon",
    title: "Mock exams",
    body:
      "Practice papers based on patterns from past exams are planned, so students can prepare with more exam-like question sets.",
    icon: FileQuestionMark,
    status: "Coming soon",
    points: ["Past-exam style questions", "Full practice papers", "Exam readiness review"],
  },
  {
    eyebrow: "Homework",
    title: "Homework companion",
    body:
      "Homework Help supports students without simply handing over answers, nudging them through the reasoning process one step at a time.",
    icon: NotebookPen,
    points: ["Solve with Help", "Check My Answer", "Guided reasoning"],
  },
  {
    eyebrow: "Create",
    title: "Kivo Docs",
    body:
      "Students can build structured writing and revision documents with prompts that help organize ideas around relevant textbook material.",
    icon: PenSquare,
    points: ["Assignment scaffolds", "Writing prompts", "Revision notes"],
  },
  {
    eyebrow: "Track",
    title: "Parent progress visibility",
    body:
      "Parents can manage learners and understand study activity through clearer progress signals instead of guessing where help is needed.",
    icon: BarChart3,
    points: ["Learner management", "Progress views", "Activity signals"],
  },
];

const included = [
  {
    label: "Boards",
    value: "CBSE and Maharashtra State Board",
    body: "Answers and practice stay connected to board-aligned, curriculum certified textbooks.",
    tags: ["Board aligned", "Textbook grounded"],
    icon: ShieldCheck,
  },
  {
    label: "Classes",
    value: "Grades 9 and 10",
    body: "Focused on the school years where Math and Science concepts become more demanding.",
    tags: ["Grade IX", "Grade X"],
    icon: Users,
  },
  {
    label: "Subjects",
    value: "Math and Science",
    body: "Built for concept explanations, problem solving, homework support, and chapter revision.",
    tags: ["Math", "Science"],
    icon: FlaskConical,
  },
  {
    label: "Access",
    value: "Browser-based on mobile, tablet, and desktop",
    body: "Students can study from home, school, or tuition without installing another app.",
    tags: ["No app install", "Any device"],
    icon: Target,
  },
];

const faqs = [
  {
    q: "Can we try Kivo before paying?",
    a: "Yes. Kivo Starter and the student demo let families explore selected access before upgrading.",
  },
  {
    q: "What changes with Kivo Unlimited?",
    a: "Kivo Unlimited unlocks full textbook access, unlimited Kivo AI usage subject to fair usage, unlimited Kivo Docs, full analytics, and priority access to new features.",
  },
  {
    q: "Is Kivo only for homework?",
    a: "No. Homework Help is one part of Kivo. Students can also read chapters, ask Kivo AI, take quizzes, use flashcards, practice concepts, and review progress.",
  },
  {
    q: "Does Kivo replace school or tuition?",
    a: "No. Kivo is daily learning support that helps students understand, practice, and revise alongside school.",
  },
];

export default function FeaturesPage() {
  return (
    <main className="features-root">
      <SiteNav />

      <section className="features-hero">
        <div className="features-hero-copy">
          <p className="eyebrow">Features & pricing</p>
          <h1>Know exactly what your child gets with Kivo.</h1>
          <p>
            A clear look at the learning tools, parent visibility, supported
            curriculum, and plans available before you sign up.
          </p>
          <div className="hero-actions">
            <a href="#pricing" className="features-btn">
              See pricing
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a href={demoUrl} className="features-btn ghost" target="_blank" rel="noopener noreferrer">
              Try the demo
            </a>
          </div>
        </div>

        <div className="feature-snapshot" aria-label="Kivo product snapshot">
          <div className="snapshot-top">
            <span><Sparkles size={15} aria-hidden="true" /> Kivo Unlimited</span>
            <strong>Full learning system</strong>
          </div>
          <div className="snapshot-panel">
            <div>
              <span>Curriculum grounded</span>
              <strong>Grades 9-10 Math and Science</strong>
              <p>Uses board and curriculum certified textbooks for CBSE and Maharashtra State Board.</p>
            </div>
            <a href="#pricing">Compare plans</a>
          </div>
          <div className="snapshot-grid">
            <div className="snapshot-ai">
              <div className="snapshot-tile-head">
                <span><Brain size={16} aria-hidden="true" /> AI Tutor</span>
                <em>Textbook grounded</em>
              </div>
              <p>Why does magnesium oxide form when magnesium burns?</p>
              <div className="snapshot-answer">
                <strong>Start with the reaction:</strong>
                <span>Magnesium combines with oxygen to form one new substance.</span>
              </div>
              <div className="snapshot-steps">
                <span>Identify reactants</span>
                <span>Connect the concept</span>
                <span>Check the equation</span>
              </div>
            </div>
            <div className="snapshot-tool">
              <div className="snapshot-tile-head">
                <span><BookOpen size={16} aria-hidden="true" /> Reader</span>
              </div>
              <div className="reader-lines">
                <i />
                <i />
                <i />
              </div>
              <p>Select a hard line and ask Kivo for simpler wording or deeper context.</p>
            </div>
            <div className="snapshot-tool">
              <div className="snapshot-tile-head">
                <span><ClipboardCheck size={16} aria-hidden="true" /> Practice</span>
                <em>4/5</em>
              </div>
              <strong className="mini-question">Combination reaction?</strong>
              <div className="mini-options">
                <span />
                <span className="correct" />
                <span />
              </div>
              <p>Quizzes, flashcards, and concept drills keep review moving.</p>
            </div>
            <div className="snapshot-tool">
              <div className="snapshot-tile-head">
                <span><BarChart3 size={16} aria-hidden="true" /> Progress</span>
                <em>84%</em>
              </div>
              <div className="progress-mini">
                <span style={{ width: "84%" }} />
              </div>
              <div className="progress-list">
                <span>Chemical reactions</span>
                <span>Acids and bases</span>
              </div>
              <p>Parents can see study signals and chapter progress.</p>
            </div>
            <div className="snapshot-tool snapshot-support">
              <div className="snapshot-tile-head">
                <span><NotebookPen size={16} aria-hidden="true" /> Homework</span>
                <em>Guided</em>
              </div>
              <strong className="mini-question">Solve with Help</strong>
              <p>Step-by-step nudges help students work through answers without copying.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section" aria-labelledby="included-title">
        <div className="section-heading split">
          <div>
            <p className="eyebrow">What is included</p>
            <h2 id="included-title">Built around the student&apos;s actual syllabus.</h2>
          </div>
          <p>
            Kivo is focused on supported textbooks, clear explanations, guided
            practice, and progress signals parents can understand.
          </p>
        </div>
        <div className="included-grid">
          {included.map(({ label, value, body, tags, icon: Icon }) => (
            <article key={label} className="included-card">
              <div className="included-card-head">
                <Icon size={20} strokeWidth={1.7} aria-hidden="true" />
                <span>{label}</span>
              </div>
              <strong>{value}</strong>
              <p>{body}</p>
              <div className="included-tags" aria-label={`${label} details`}>
                {tags.map((tag) => (
                  <em key={tag}>{tag}</em>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="curriculum-proof">
          <BookOpen size={20} strokeWidth={1.7} aria-hidden="true" />
          <div>
            <strong>Not generic internet tutoring.</strong>
            <p>Kivo retrieves and explains from supported board and curriculum certified textbooks, so students get help that follows what they are actually studying.</p>
          </div>
        </div>
      </section>

      <section className="features-section" aria-labelledby="features-title">
        <div className="section-heading">
          <p className="eyebrow">Detailed features</p>
          <h2 id="features-title">Everything works together for daily learning.</h2>
        </div>
        <div className="feature-detail-grid">
          {featureGroups.map(({ eyebrow, title, body, icon: Icon, status, points }) => (
            <article className="feature-detail-card" key={title}>
              <div className="feature-detail-head">
                <span className="feature-detail-icon" aria-hidden="true">
                  <Icon size={21} strokeWidth={1.7} />
                </span>
                <div>
                  <p>{eyebrow}</p>
                  <h3>
                    {title}
                    {status && <span>{status}</span>}
                  </h3>
                </div>
              </div>
              <p>{body}</p>
              <ul>
                {points.map((point) => (
                  <li key={point}>
                    <span aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="compare-band" aria-labelledby="compare-title">
        <div>
          <p className="eyebrow">Starter vs Unlimited</p>
          <h2 id="compare-title">Start free, then unlock the full system.</h2>
        </div>
        <div className="compare-grid">
          <article>
            <h3>Kivo Starter</h3>
            <p>Best for trying selected chapters, asking limited daily questions, and seeing how Kivo fits your child&apos;s study routine.</p>
          </article>
          <article>
            <h3>Kivo Unlimited</h3>
            <p>Best for full textbook access, unlimited Kivo AI usage, Kivo Docs, full analytics, and regular practice across supported subjects.</p>
          </article>
        </div>
      </section>

      <PricingSection />

      <section className="features-section faq" aria-labelledby="faq-title">
        <div className="section-heading">
          <p className="eyebrow">FAQ</p>
          <h2 id="faq-title">Questions before signing up.</h2>
        </div>
        <div className="faq-list">
          {faqs.map((item) => (
            <article key={item.q}>
              <HelpCircle size={18} strokeWidth={1.8} aria-hidden="true" />
              <div>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <div>
          <p className="eyebrow">Ready when you are</p>
          <h2>Try Kivo first, or set up full access.</h2>
        </div>
        <div className="final-actions">
          <a href={demoUrl} className="features-btn ghost" target="_blank" rel="noopener noreferrer">
            Try the student demo
          </a>
          <a href={joinUrl} className="features-btn" target="_blank" rel="noopener noreferrer">
            Get Kivo Unlimited
          </a>
        </div>
      </section>

      <footer className="features-footer">
        <p>&copy; 2026 KivoEdu. All rights reserved.</p>
        <div>
          <Link href="/">Home</Link>
          <Link href="/guide">How it Works</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </footer>

      <style>{`
        *, *::before, *::after { box-sizing: border-box; }
        html { scroll-behavior: smooth; }

        .features-root {
          min-height: 100vh;
          color: #f4f7fb;
          background:
            radial-gradient(circle at 12% 4%, rgba(79, 209, 197, 0.16), transparent 28rem),
            radial-gradient(circle at 88% 8%, rgba(255, 209, 102, 0.12), transparent 24rem),
            radial-gradient(circle at 50% 46%, rgba(121, 167, 255, 0.08), transparent 30rem),
            #070a12;
          font-family: var(--font-geist-sans), Inter, system-ui, sans-serif;
          overflow-x: hidden;
        }

        .features-root::before {
          content: "";
          position: fixed;
          inset: 0;
          pointer-events: none;
          opacity: 0.23;
          background-image:
            linear-gradient(rgba(196, 217, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(196, 217, 255, 0.045) 1px, transparent 1px);
          background-size: 72px 72px;
          mask-image: linear-gradient(to bottom, black, transparent 74%);
        }

        .features-hero,
        .features-section,
        .compare-band,
        .final-cta,
        .features-footer,
        .section-inner {
          position: relative;
          z-index: 1;
          width: min(1180px, calc(100% - 48px));
          margin: 0 auto;
        }

        .features-hero {
          min-height: 720px;
          display: grid;
          grid-template-columns: minmax(0, 0.95fr) minmax(390px, 0.75fr);
          align-items: center;
          gap: clamp(36px, 6vw, 84px);
          padding: 132px 0 72px;
        }

        .eyebrow {
          margin: 0 0 14px;
          color: #4fd1c5;
          font-size: 0.76rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        h1, h2, h3, p { margin-top: 0; }

        h1 {
          max-width: 820px;
          margin-bottom: 24px;
          font-size: clamp(3rem, 6vw, 5.65rem);
          line-height: 0.96;
          letter-spacing: 0;
        }

        .features-hero-copy > p:not(.eyebrow) {
          max-width: 650px;
          color: #b7c2d7;
          font-size: 1.12rem;
          line-height: 1.75;
        }

        .hero-actions,
        .final-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 30px;
        }

        .features-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 44px;
          border-radius: 999px;
          padding: 0 20px;
          color: #fff;
          text-decoration: none;
          font-size: 0.92rem;
          font-weight: 760;
          border: 1px solid rgba(99, 102, 241, 0.55);
          background: linear-gradient(135deg, #4f46e5, #6366f1 52%, #818cf8);
          box-shadow: 0 16px 44px rgba(99, 102, 241, 0.26);
          transition: transform 180ms ease, box-shadow 180ms ease;
        }

        .features-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 22px 60px rgba(99, 102, 241, 0.36);
        }

        .features-btn.ghost {
          color: #f4f7fb;
          border-color: rgba(196, 217, 255, 0.22);
          background: rgba(255, 255, 255, 0.055);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);
        }

        .feature-snapshot {
          display: grid;
          gap: 12px;
          border: 1px solid rgba(196, 217, 255, 0.14);
          border-radius: 8px;
          padding: 16px;
          background:
            radial-gradient(circle at 72% 16%, rgba(255, 209, 102, 0.11), transparent 18rem),
            radial-gradient(circle at 10% 78%, rgba(79, 209, 197, 0.1), transparent 16rem),
            linear-gradient(180deg, rgba(255,255,255,0.075), rgba(255,255,255,0.03)),
            rgba(10, 15, 27, 0.78);
          box-shadow: 0 28px 90px rgba(0, 0, 0, 0.28);
          backdrop-filter: blur(14px);
        }

        .snapshot-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          color: #b8c5dc;
          font-size: 0.84rem;
        }

        .snapshot-top span {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #ffd166;
          font-weight: 800;
        }

        .snapshot-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
        }

        .snapshot-ai,
        .snapshot-tool,
        .snapshot-panel {
          border: 1px solid rgba(196, 217, 255, 0.12);
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.05);
        }

        .snapshot-ai,
        .snapshot-tool {
          display: grid;
          align-content: start;
          gap: 9px;
          min-height: 132px;
          padding: 14px;
          overflow: hidden;
        }

        .snapshot-ai {
          grid-column: span 2;
          min-height: 174px;
          background:
            linear-gradient(135deg, rgba(99, 102, 241, 0.12), rgba(79, 209, 197, 0.06)),
            rgba(255, 255, 255, 0.052);
        }

        .snapshot-tile-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          color: #d8e2f7;
          font-size: 0.82rem;
          font-weight: 800;
        }

        .snapshot-tile-head span {
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .snapshot-tile-head svg {
          color: #79a7ff;
        }

        .snapshot-tile-head em {
          color: #8f9db6;
          font-size: 0.72rem;
          font-style: normal;
          font-weight: 760;
          white-space: nowrap;
        }

        .snapshot-ai > p {
          margin: 0;
          color: #f4f7fb;
          font-size: 1.04rem;
          font-weight: 800;
          line-height: 1.24;
        }

        .snapshot-answer {
          display: grid;
          gap: 5px;
          padding: 10px 12px;
          border: 1px solid rgba(126, 231, 135, 0.17);
          border-radius: 8px;
          background: rgba(126, 231, 135, 0.07);
          color: #cbd7ea;
          font-size: 0.84rem;
          line-height: 1.45;
        }

        .snapshot-answer strong {
          color: #7ee787;
          font-size: 0.78rem;
        }

        .snapshot-steps {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 7px;
        }

        .snapshot-steps span {
          min-height: 30px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 7px;
          padding: 0 8px;
          background: rgba(255, 255, 255, 0.055);
          color: #b8c5dc;
          font-size: 0.68rem;
          font-weight: 760;
          text-align: center;
        }

        .snapshot-tool p {
          margin: 0;
          color: #aeb9ce;
          font-size: 0.74rem;
          line-height: 1.38;
        }

        .reader-lines {
          display: grid;
          gap: 7px;
          padding: 10px;
          border-radius: 8px;
          background: rgba(7, 10, 18, 0.38);
        }

        .reader-lines i {
          display: block;
          height: 8px;
          border-radius: 999px;
          background: rgba(196, 217, 255, 0.15);
        }

        .reader-lines i:nth-child(2) {
          width: 78%;
          background: rgba(255, 209, 102, 0.34);
        }

        .reader-lines i:nth-child(3) {
          width: 58%;
        }

        .mini-question {
          color: #f4f7fb;
          font-size: 0.9rem;
        }

        .mini-options {
          display: grid;
          gap: 7px;
        }

        .mini-options span {
          display: block;
          height: 11px;
          border-radius: 999px;
          background: rgba(196, 217, 255, 0.13);
        }

        .mini-options span:nth-child(1) { width: 84%; }
        .mini-options span:nth-child(2) { width: 100%; }
        .mini-options span:nth-child(3) { width: 62%; }

        .mini-options .correct {
          background: linear-gradient(90deg, rgba(126, 231, 135, 0.45), rgba(126, 231, 135, 0.16));
        }

        .progress-mini {
          height: 12px;
          border-radius: 999px;
          background: rgba(196, 217, 255, 0.11);
          overflow: hidden;
        }

        .progress-mini span {
          display: block;
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(90deg, #4fd1c5, #79a7ff);
        }

        .progress-list {
          display: grid;
          gap: 5px;
          color: #c5d0e3;
          font-size: 0.72rem;
          font-weight: 760;
        }

        .snapshot-panel {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 14px 16px;
        }

        .snapshot-panel span {
          display: block;
          margin-bottom: 5px;
          color: #78859b;
          font-size: 0.68rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.12em;
        }

        .snapshot-panel strong {
          display: block;
          margin-bottom: 4px;
          font-size: 1.08rem;
          line-height: 1.2;
        }

        .snapshot-panel p {
          margin-bottom: 0;
          color: #aeb9ce;
          font-size: 0.82rem;
          line-height: 1.45;
        }

        .snapshot-panel a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 36px;
          padding: 0 14px;
          border-radius: 999px;
          color: #070a12;
          background: #ffd166;
          font-size: 0.82rem;
          font-weight: 820;
          text-decoration: none;
          white-space: nowrap;
        }

        .features-section {
          padding: 92px 0;
          scroll-margin-top: 96px;
        }

        .section-band {
          position: relative;
          z-index: 1;
          padding: 96px 0;
          scroll-margin-top: 96px;
        }

        .section-heading {
          max-width: 840px;
          margin-bottom: 34px;
          text-align: left;
        }

        .section-heading.split {
          max-width: none;
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(300px, 0.65fr);
          align-items: end;
          gap: 40px;
        }

        .section-heading h2,
        .compare-band h2,
        .final-cta h2 {
          margin-bottom: 0;
          font-size: clamp(2.1rem, 4vw, 3.5rem);
          line-height: 1.05;
          letter-spacing: 0;
        }

        .section-heading p:last-child,
        .included-card strong,
        .feature-detail-card > p,
        .faq-list p,
        .compare-grid p {
          color: #aeb9ce;
          line-height: 1.66;
        }

        .pricing-section .section-heading {
          margin-left: auto;
          margin-right: auto;
          text-align: center;
        }

        .included-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
        }

        .included-card,
        .feature-detail-card,
        .faq-list article,
        .compare-grid article {
          border: 1px solid rgba(196, 217, 255, 0.14);
          border-radius: 8px;
          background: linear-gradient(180deg, rgba(255,255,255,0.065), rgba(255,255,255,0.026));
        }

        .included-card {
          min-height: 285px;
          display: flex;
          flex-direction: column;
          padding: 24px;
        }

        .included-card-head {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 24px;
        }

        .included-card-head svg {
          color: #4fd1c5;
          flex: 0 0 auto;
        }

        .included-card-head span {
          display: block;
          color: #78859b;
          font-size: 0.77rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.12em;
        }

        .included-card strong {
          display: block;
          margin-bottom: 14px;
          font-size: 1.06rem;
          color: #f4f7fb;
          line-height: 1.45;
        }

        .included-card p {
          margin: 0 0 22px;
          color: #aeb9ce;
          font-size: 0.9rem;
          line-height: 1.62;
        }

        .included-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: auto;
        }

        .included-tags em {
          display: inline-flex;
          align-items: center;
          min-height: 30px;
          border-radius: 999px;
          padding: 0 11px;
          border: 1px solid rgba(79, 209, 197, 0.18);
          background: rgba(79, 209, 197, 0.07);
          color: #c5d0e3;
          font-size: 0.74rem;
          font-style: normal;
          font-weight: 760;
          white-space: nowrap;
        }

        .curriculum-proof {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-top: 18px;
          padding: 22px 24px;
          border: 1px solid rgba(255, 209, 102, 0.18);
          border-radius: 8px;
          background:
            radial-gradient(circle at 90% 10%, rgba(255, 209, 102, 0.12), transparent 18rem),
            linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.026));
        }

        .curriculum-proof svg {
          color: #ffd166;
          flex: 0 0 auto;
          margin-top: 2px;
        }

        .curriculum-proof strong {
          display: block;
          margin-bottom: 6px;
          color: #f4f7fb;
          font-size: 1rem;
        }

        .curriculum-proof p {
          max-width: 880px;
          margin: 0;
          color: #aeb9ce;
          line-height: 1.62;
        }

        .feature-detail-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }

        .feature-detail-card {
          padding: 24px;
        }

        .feature-detail-head {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 18px;
        }

        .feature-detail-icon {
          width: 44px;
          height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          border: 1px solid rgba(121, 167, 255, 0.26);
          background: rgba(121, 167, 255, 0.1);
          color: #79a7ff;
          flex: 0 0 auto;
        }

        .feature-detail-head p {
          margin-bottom: 3px;
          color: #4fd1c5;
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .feature-detail-head h3,
        .faq-list h3,
        .compare-grid h3 {
          margin-bottom: 0;
          color: #f4f7fb;
          font-size: 1.05rem;
        }

        .feature-detail-head h3 span {
          display: inline-flex;
          align-items: center;
          min-height: 22px;
          margin-left: 9px;
          padding: 0 8px;
          border-radius: 999px;
          border: 1px solid rgba(255, 209, 102, 0.24);
          background: rgba(255, 209, 102, 0.08);
          color: #ffd166;
          font-size: 0.62rem;
          font-weight: 820;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          vertical-align: middle;
        }

        .feature-detail-card ul {
          display: grid;
          gap: 10px;
          margin: 20px 0 0;
          padding: 0;
          list-style: none;
        }

        .feature-detail-card li {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #c5d0e3;
          font-size: 0.9rem;
        }

        .feature-detail-card li span {
          width: 7px;
          height: 7px;
          border-radius: 999px;
          background: #ffd166;
          flex: 0 0 auto;
        }

        .compare-band {
          display: grid;
          grid-template-columns: minmax(0, 0.8fr) minmax(360px, 1fr);
          align-items: center;
          gap: 34px;
          margin-top: 36px;
          margin-bottom: 28px;
          padding: 34px;
          border: 1px solid rgba(255, 209, 102, 0.2);
          border-radius: 8px;
          background:
            radial-gradient(circle at 82% 24%, rgba(255, 209, 102, 0.12), transparent 22rem),
            linear-gradient(180deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.025));
        }

        .compare-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        .compare-grid article {
          padding: 22px;
        }

        .compare-grid p,
        .faq-list p {
          margin-bottom: 0;
        }

        .faq-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        .faq-list article {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 22px;
        }

        .faq-list svg {
          color: #ffd166;
          flex: 0 0 auto;
          margin-top: 2px;
        }

        .final-cta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          margin-top: 30px;
          padding: 34px;
          border: 1px solid rgba(196, 217, 255, 0.14);
          border-radius: 8px;
          background: linear-gradient(135deg, rgba(79, 209, 197, 0.1), rgba(99, 102, 241, 0.1));
        }

        .final-actions {
          margin-top: 0;
          flex-shrink: 0;
        }

        .features-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding: 42px 0 50px;
          color: #8f9db6;
          font-size: 0.88rem;
        }

        .features-footer p {
          margin-bottom: 0;
        }

        .features-footer div {
          display: flex;
          gap: 18px;
        }

        .features-footer a {
          color: inherit;
          text-decoration: none;
        }

        .features-footer a:hover {
          color: #f4f7fb;
        }

        @media (prefers-reduced-motion: reduce) {
          .features-btn { transition: none; }
        }

        @media (max-width: 980px) {
          .features-hero,
          .section-heading.split,
          .compare-band {
            grid-template-columns: 1fr;
          }

          .features-hero {
            min-height: 0;
            padding-top: 168px;
          }

          .feature-snapshot {
            max-width: 720px;
          }

          .included-grid,
          .feature-detail-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .final-cta {
            align-items: flex-start;
            flex-direction: column;
          }
        }

        @media (max-width: 640px) {
          .features-hero,
          .features-section,
          .compare-band,
          .final-cta,
          .features-footer,
          .section-inner {
            width: min(1180px, calc(100% - 32px));
          }

          .features-hero {
            gap: 28px;
            padding-top: 184px;
            padding-bottom: 44px;
          }

          h1 {
            margin-bottom: 18px;
            font-size: clamp(2.35rem, 13vw, 3.15rem);
            line-height: 1;
          }

          .features-hero-copy > p:not(.eyebrow) {
            font-size: 1rem;
            line-height: 1.62;
          }

          .hero-actions,
          .final-actions {
            gap: 10px;
            margin-top: 22px;
          }

          .feature-snapshot {
            gap: 10px;
            padding: 12px;
            box-shadow: 0 20px 56px rgba(0, 0, 0, 0.26);
          }

          .snapshot-top {
            align-items: flex-start;
            flex-direction: column;
            gap: 4px;
            font-size: 0.78rem;
          }

          .snapshot-panel {
            align-items: stretch;
            flex-direction: column;
            gap: 12px;
            padding: 14px;
          }

          .snapshot-panel strong {
            font-size: 1rem;
          }

          .snapshot-panel a {
            width: 100%;
          }

          .snapshot-ai {
            grid-column: auto;
            min-height: 0;
          }

          .snapshot-ai,
          .snapshot-tool {
            min-height: 0;
            padding: 13px;
          }

          .snapshot-ai > p {
            font-size: 0.98rem;
          }

          .snapshot-answer {
            font-size: 0.78rem;
          }

          .snapshot-steps {
            grid-template-columns: 1fr;
          }

          .snapshot-steps span {
            justify-content: flex-start;
            min-height: 28px;
          }

          .snapshot-tile-head {
            font-size: 0.78rem;
          }

          .snapshot-tool p {
            font-size: 0.76rem;
          }

          .features-section,
          .section-band {
            padding: 58px 0;
          }

          .section-heading {
            margin-bottom: 24px;
          }

          .section-heading.split {
            gap: 18px;
          }

          .section-heading h2,
          .compare-band h2,
          .final-cta h2,
          #pricing-heading {
            font-size: clamp(2rem, 11vw, 2.65rem);
            line-height: 1.08;
          }

          .section-heading p:last-child {
            font-size: 0.98rem;
          }

          .included-grid,
          .feature-detail-grid,
          .compare-grid,
          .faq-list,
          .snapshot-grid {
            grid-template-columns: 1fr;
          }

          .included-grid,
          .feature-detail-grid,
          .faq-list {
            gap: 12px;
          }

          .compare-band,
          .final-cta {
            padding: 24px;
          }

          .included-card {
            min-height: 0;
            padding: 20px;
          }

          .included-card-head {
            margin-bottom: 16px;
          }

          .included-card strong {
            margin-bottom: 10px;
            font-size: 1rem;
          }

          .included-card p {
            margin-bottom: 18px;
            font-size: 0.86rem;
          }

          .included-tags em {
            min-height: 28px;
            font-size: 0.7rem;
          }

          .curriculum-proof {
            flex-direction: column;
            gap: 12px;
            padding: 20px;
          }

          .feature-detail-card,
          .faq-list article,
          .compare-grid article {
            padding: 20px;
          }

          .feature-detail-head {
            align-items: flex-start;
            gap: 12px;
            margin-bottom: 14px;
          }

          .feature-detail-icon {
            width: 40px;
            height: 40px;
          }

          .feature-detail-card ul {
            margin-top: 16px;
          }

          .compare-band {
            gap: 20px;
            margin-top: 18px;
          }

          .features-footer {
            align-items: flex-start;
            flex-direction: column;
          }

          .features-footer div,
          .final-actions,
          .hero-actions {
            width: 100%;
          }

          .features-btn {
            width: 100%;
          }
        }

        @media (max-width: 420px) {
          .features-hero,
          .features-section,
          .compare-band,
          .final-cta,
          .features-footer,
          .section-inner {
            width: min(1180px, calc(100% - 24px));
          }

          .features-hero {
            padding-top: 196px;
          }

          h1 {
            font-size: clamp(2.15rem, 12.5vw, 2.75rem);
          }

          .snapshot-panel p,
          .curriculum-proof p,
          .included-card p,
          .feature-detail-card > p,
          .faq-list p,
          .compare-grid p {
            font-size: 0.84rem;
            line-height: 1.55;
          }

          .pricing-card {
            padding: 24px 18px 20px;
          }
        }
      `}</style>
    </main>
  );
}
