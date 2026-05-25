import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  BotMessageSquare,
  Brain,
  ClipboardCheck,
  GraduationCap,
  HelpCircle,
  Laptop,
  Lock,
  Mail,
  MousePointer2,
  NotebookPen,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import SiteNav from "../SiteNav";

const loginUrl = "https://app.kivoedu.ai/login";
const demoUrl = "https://app.kivoedu.ai/demo";

export const metadata: Metadata = {
  title: "Guide",
  description:
    "Learn how KivoEdu works for parents and students, from setup to textbook-grounded AI help, practice, homework support, and progress tracking.",
  alternates: { canonical: "/guide" },
  openGraph: {
    title: "How KivoEdu Works",
    description:
      "A practical guide for parents and students using KivoEdu.",
    url: "/guide",
    type: "website",
  },
};

const beforeStart = [
  {
    title: "Browser access",
    body: "Students can use Kivo on mobile, tablet, or desktop. There is no app installation step.",
    icon: Laptop,
  },
  {
    title: "Supported content",
    body: "Kivo currently supports Class 9 and 10 Math and Science for CBSE and Maharashtra Board.",
    icon: BookOpen,
  },
  {
    title: "Parent + student roles",
    body: "Parents set up access and view learning signals. Students use the study tools day to day.",
    icon: Users,
  },
  {
    title: "Start free",
    body: "Kivo Starter lets families explore selected chapters before upgrading to Kivo Unlimited.",
    icon: PlayCircle,
  },
];

const parentSteps = [
  {
    title: "Create a parent account",
    body: "Sign in at app.kivoedu.ai and choose the parent path. Kivo keeps setup focused on your child, board, and grade.",
    icon: Users,
    visual: "parent-setup",
  },
  {
    title: "Add your child",
    body: "Enter the Gmail address your child uses to sign in, then choose their school board and grade.",
    icon: Mail,
    visual: "parent-invite",
  },
  {
    title: "Choose access",
    body: "Start with Kivo Starter or unlock full textbook access with Kivo Unlimited. Coupons and trials can be handled during setup when available.",
    icon: ShieldCheck,
    visual: "parent-plan",
  },
  {
    title: "See learning progress",
    body: "Once your child studies, the parent workspace shows learners, pending invitations, and progress/report links.",
    icon: BarChart3,
    visual: "parent-progress",
  },
];

const studentSteps = [
  {
    title: "Open your dashboard",
    body: "The student home page shows subjects, today&apos;s focus, and progress cues so it is clear what to study next.",
    icon: GraduationCap,
    visual: "student-dashboard",
  },
  {
    title: "Pick a subject and chapter",
    body: "Students choose a subject, continue a chapter, or jump into Kivo AI, Homework Help, Quick Quiz, Flashcards, and Concept Drills.",
    icon: BookOpen,
    visual: "subject",
  },
  {
    title: "Ask Kivo AI",
    body: "Type a question and get a step-by-step explanation connected to the textbook and chapter context.",
    icon: BotMessageSquare,
    visual: "ai",
  },
  {
    title: "Read with help nearby",
    body: "In the reader, students can switch between Core View, Deep Dive, and Lite View, then select text and ask Kivo AI when stuck.",
    icon: MousePointer2,
    visual: "reader",
  },
  {
    title: "Practice and review",
    body: "Quick Quiz, Flashcards, and Concept Drills help students reinforce ideas before moving ahead.",
    icon: ClipboardCheck,
    visual: "practice",
  },
  {
    title: "Use Homework Help",
    body: "Homework Help supports Solve with Help and Check My Answer modes, guiding students through the thinking process.",
    icon: NotebookPen,
    visual: "homework",
  },
];

const faqs = [
  {
    q: "Which boards and classes does Kivo support?",
    a: "Kivo is currently live for Class 9 and 10 Math and Science for CBSE and Maharashtra Board.",
  },
  {
    q: "Does my child need to install an app?",
    a: "No. Kivo works in the browser on mobile, tablet, and desktop.",
  },
  {
    q: "Can students try Kivo before subscribing?",
    a: "Yes. Kivo Starter and the demo flow let students explore selected access before upgrading.",
  },
  {
    q: "What can parents see?",
    a: "Parents can manage learners, see linked or pending children, and open progress/report views for learning activity.",
  },
  {
    q: "Is Kivo a replacement for school?",
    a: "No. Kivo is designed as daily learning support: explanations, practice, homework guidance, and revision alongside school.",
  },
];

type VisualKind = typeof parentSteps[number]["visual"] | typeof studentSteps[number]["visual"];

function StepCard({
  index,
  title,
  body,
  visual,
  icon: Icon,
}: {
  index: number;
  title: string;
  body: string;
  visual: VisualKind;
  icon: typeof Users;
}) {
  return (
    <article className="step-card">
      <div className="step-copy">
        <div className="step-number">
          <span>{String(index).padStart(2, "0")}</span>
          <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
        </div>
        <h3>{title}</h3>
        <p dangerouslySetInnerHTML={{ __html: body }} />
      </div>
      <MockVisual kind={visual} />
    </article>
  );
}

function MockVisual({ kind }: { kind: VisualKind }) {
  if (kind === "parent-setup") {
    return (
      <div className="mock-window">
        <MockTop label="Parent setup" />
        <div className="mock-form">
          <div className="mock-avatar"><Users size={24} /></div>
          <strong>Add your children</strong>
          <p>Enter the Gmail address your child uses to sign in to Google.</p>
          <div className="mock-input">childname@gmail.com</div>
          <div className="mock-row">
            <span>CBSE</span>
            <span>Grade X</span>
          </div>
          <button>Add child</button>
        </div>
      </div>
    );
  }

  if (kind === "parent-invite") {
    return (
      <div className="mock-window">
        <MockTop label="Your learners" />
        <div className="learner-card">
          <div>
            <strong>Aarav</strong>
            <span>Grade X - CBSE</span>
          </div>
          <em>Linked</em>
        </div>
        <div className="learner-card muted">
          <div>
            <strong>Pending invitation</strong>
            <span>Waiting for student sign-in</span>
          </div>
          <em>Pending</em>
        </div>
      </div>
    );
  }

  if (kind === "parent-plan") {
    return (
      <div className="mock-window">
        <MockTop label="Choose plan" />
        <div className="plan-grid">
          <div className="mini-plan">
            <span>Kivo Starter</span>
            <strong>Free</strong>
            <p>Selected chapters</p>
          </div>
          <div className="mini-plan active">
            <span>Kivo Unlimited</span>
            <strong>Rs 1999</strong>
            <p>Full access for the year</p>
          </div>
        </div>
      </div>
    );
  }

  if (kind === "parent-progress") {
    return (
      <div className="mock-window">
        <MockTop label="Parent report" />
        <div className="metric-row">
          <Metric label="Chapters" value="8" />
          <Metric label="Accuracy" value="82%" />
          <Metric label="Practice" value="14" />
        </div>
        <div className="chapter-bars">
          <Bar label="Real Numbers" width="88%" />
          <Bar label="Chemical Reactions" width="72%" />
          <Bar label="Electricity" width="46%" />
        </div>
      </div>
    );
  }

  if (kind === "student-dashboard") {
    return (
      <div className="mock-window">
        <MockTop label="Student home" />
        <div className="focus-card">
          <span>Today&apos;s focus</span>
          <strong>Continue Chapter 1: Real Numbers</strong>
          <p>Pick up where you left off.</p>
        </div>
        <div className="subject-mini-grid">
          <div>Mathematics <strong>64%</strong></div>
          <div>Science <strong>52%</strong></div>
        </div>
      </div>
    );
  }

  if (kind === "subject") {
    return (
      <div className="mock-window">
        <MockTop label="Mathematics" />
        <div className="subject-hero">
          <strong>Grade X - CBSE</strong>
          <span>Chapters mastered: 64%</span>
        </div>
        <div className="tool-grid">
          <span>Kivo AI</span>
          <span>Homework Help</span>
          <span>Quick Quiz</span>
          <span>Flashcards</span>
          <span>Concept Drills</span>
        </div>
      </div>
    );
  }

  if (kind === "ai") {
    return (
      <div className="mock-window">
        <MockTop label="Kivo AI" />
        <div className="chat-line user">Why is zero a rational number?</div>
        <div className="chat-line ai">
          Zero is rational because it can be written as 0/1. Let&apos;s connect it to the definition.
        </div>
        <div className="chat-input">Ask anything from this textbook</div>
      </div>
    );
  }

  if (kind === "reader") {
    return (
      <div className="mock-window reader-mock">
        <MockTop label="Core View" />
        <div className="reader-tabs">
          <span>Core View</span>
          <span>Deep Dive</span>
          <span>Lite View</span>
        </div>
        <p>Every rational number can be expressed as p/q where q is not zero.</p>
        <div className="selection-pill"><Sparkles size={13} /> Kivo AI</div>
      </div>
    );
  }

  if (kind === "practice") {
    return (
      <div className="mock-window">
        <MockTop label="Quick Quiz" />
        <div className="quiz-mini">
          <strong>Which number is irrational?</strong>
          <span>A. 3/4</span>
          <span className="correct">B. sqrt(2)</span>
          <p>Correct. It cannot be written as p/q.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mock-window">
      <MockTop label="Homework Help" />
      <div className="homework-grid">
        <div>
          <span>Problem</span>
          <p>Solve: 2x + 5 = 17</p>
        </div>
        <div>
          <span>Solve with Help</span>
          <p>First isolate the term with x. What should we subtract from both sides?</p>
        </div>
      </div>
      <div className="goal-list">
        <span>Identify knowns</span>
        <span>Choose strategy</span>
        <span>Verify answer</span>
      </div>
    </div>
  );
}

function MockTop({ label }: { label: string }) {
  return (
    <div className="mock-top">
      <i />
      <i />
      <i />
      <strong>{label}</strong>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="metric">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function Bar({ label, width }: { label: string; width: string }) {
  return (
    <div className="bar-row">
      <span>{label}</span>
      <div><i style={{ width }} /></div>
    </div>
  );
}

export default function GuidePage() {
  return (
    <main className="guide-root">
      <SiteNav />

      <section className="guide-hero">
        <div className="guide-hero-copy">
          <p className="eyebrow">Kivo guide</p>
          <h1>How Kivo works for parents and students.</h1>
          <p>
            A practical walkthrough of setup, textbook-grounded AI help, homework support, practice, and progress tracking.
          </p>
          <div className="hero-actions">
            <a href="#parents" className="guide-btn">For Parents</a>
            <a href="#students" className="guide-btn ghost">For Students</a>
          </div>
        </div>
        <div className="hero-panel" aria-hidden="true">
          <div className="hero-flow-card">
            <span><Users size={16} /> Parent setup</span>
            <ArrowRight size={16} />
            <span><BookOpen size={16} /> Student study</span>
            <ArrowRight size={16} />
            <span><BarChart3 size={16} /> Progress view</span>
          </div>
          <MockVisual kind="ai" />
        </div>
      </section>

      <section className="guide-section before" aria-labelledby="before-title">
        <div className="section-heading">
          <p className="eyebrow">Before you start</p>
          <h2 id="before-title">A few things to know first.</h2>
        </div>
        <div className="info-grid">
          {beforeStart.map(({ title, body, icon: Icon }) => (
            <article className="info-card" key={title}>
              <span><Icon size={20} strokeWidth={1.7} /></span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="guide-section" id="parents" aria-labelledby="parents-title">
        <div className="section-heading split">
          <div>
            <p className="eyebrow">For parents</p>
            <h2 id="parents-title">Set up Kivo for your child.</h2>
          </div>
          <p>
            The parent flow is designed to make setup clear: add your child, choose access, and come back to monitor learning.
          </p>
        </div>
        <div className="steps">
          {parentSteps.map((step, index) => (
            <StepCard key={step.title} index={index + 1} {...step} />
          ))}
        </div>
      </section>

      <section className="trust-band" aria-labelledby="trust-title">
        <div>
          <p className="eyebrow">Trust and safety</p>
          <h2 id="trust-title">Guidance that stays close to the textbook.</h2>
        </div>
        <div className="trust-points">
          <span><ShieldCheck size={17} /> Textbook-grounded explanations</span>
          <span><Lock size={17} /> Demo data for public examples</span>
          <span><Brain size={17} /> Designed to support learning, not shortcuts</span>
        </div>
      </section>

      <section className="guide-section" id="students" aria-labelledby="students-title">
        <div className="section-heading split">
          <div>
            <p className="eyebrow">For students</p>
            <h2 id="students-title">Use Kivo day to day.</h2>
          </div>
          <p>
            Students can read, ask, practice, and review from one workspace connected to their supported textbook.
          </p>
        </div>
        <div className="steps">
          {studentSteps.map((step, index) => (
            <StepCard key={step.title} index={index + 1} {...step} />
          ))}
        </div>
      </section>

      <section className="guide-section faq" aria-labelledby="faq-title">
        <div className="section-heading">
          <p className="eyebrow">FAQ</p>
          <h2 id="faq-title">Common questions.</h2>
        </div>
        <div className="faq-list">
          {faqs.map(item => (
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
          <h2>Start with the path that fits your family.</h2>
        </div>
        <div className="final-actions">
          <a href={loginUrl} className="guide-btn" target="_blank" rel="noopener noreferrer">
            Set up Kivo for my child
          </a>
          <a href={demoUrl} className="guide-btn ghost" target="_blank" rel="noopener noreferrer">
            Try the student demo
          </a>
        </div>
      </section>

      <footer className="guide-footer">
        <p>&copy; 2026 KivoEdu. All rights reserved.</p>
        <div>
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </footer>

      <style>{`
        *, *::before, *::after { box-sizing: border-box; }
        html { scroll-behavior: smooth; }

        .guide-root {
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

        .guide-root::before {
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

        .guide-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
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

        .guide-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 22px 60px rgba(99, 102, 241, 0.36);
        }

        .guide-btn.ghost {
          color: #f4f7fb;
          border-color: rgba(196, 217, 255, 0.22);
          background: rgba(255, 255, 255, 0.055);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);
        }

        .guide-hero,
        .guide-section,
        .trust-band,
        .final-cta,
        .guide-footer {
          position: relative;
          z-index: 1;
          width: min(1180px, calc(100% - 48px));
          margin: 0 auto;
        }

        .guide-hero {
          min-height: 720px;
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(420px, 1fr);
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

        h1,
        h2,
        h3,
        p {
          margin-top: 0;
        }

        h1 {
          max-width: 780px;
          margin-bottom: 24px;
          font-size: clamp(3rem, 6vw, 5.8rem);
          line-height: 0.96;
          letter-spacing: 0;
        }

        .guide-hero-copy > p:not(.eyebrow) {
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

        .hero-panel {
          display: grid;
          gap: 14px;
          align-content: center;
        }

        .hero-flow-card {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
          border: 1px solid rgba(196, 217, 255, 0.14);
          border-radius: 8px;
          padding: 14px;
          background: rgba(255, 255, 255, 0.055);
          color: #d8e2f7;
          font-size: 0.84rem;
        }

        .hero-flow-card span {
          display: inline-flex;
          align-items: center;
          gap: 7px;
        }

        .guide-section {
          padding: 96px 0;
          scroll-margin-top: 96px;
        }

        .section-heading {
          max-width: 820px;
          margin-bottom: 34px;
        }

        .section-heading.split {
          max-width: none;
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(300px, 0.65fr);
          align-items: end;
          gap: 40px;
        }

        .section-heading h2,
        .trust-band h2,
        .final-cta h2 {
          margin-bottom: 0;
          font-size: clamp(2.1rem, 4vw, 3.5rem);
          line-height: 1.05;
          letter-spacing: 0;
        }

        .section-heading p:last-child,
        .info-card p,
        .step-copy p,
        .faq-list p,
        .trust-band p {
          color: #aeb9ce;
          line-height: 1.66;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
        }

        .info-card {
          min-height: 210px;
          border: 1px solid rgba(196, 217, 255, 0.14);
          border-radius: 8px;
          padding: 22px;
          background: linear-gradient(180deg, rgba(255,255,255,0.065), rgba(255,255,255,0.026));
        }

        .info-card span,
        .step-number {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #4fd1c5;
          background: rgba(79, 209, 197, 0.1);
          border: 1px solid rgba(79, 209, 197, 0.22);
        }

        .info-card span {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          margin-bottom: 18px;
        }

        .info-card h3 {
          margin-bottom: 10px;
          font-size: 1.02rem;
        }

        .steps {
          display: grid;
          gap: 18px;
        }

        .step-card {
          display: grid;
          grid-template-columns: minmax(260px, 0.72fr) minmax(420px, 1fr);
          gap: 28px;
          align-items: stretch;
          border: 1px solid rgba(196, 217, 255, 0.14);
          border-radius: 8px;
          padding: clamp(18px, 3vw, 28px);
          background: linear-gradient(135deg, rgba(255,255,255,0.065), rgba(255,255,255,0.026));
        }

        .step-copy {
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-width: 0;
        }

        .step-number {
          width: fit-content;
          gap: 8px;
          border-radius: 999px;
          padding: 8px 12px;
          margin-bottom: 18px;
          font-size: 0.78rem;
          font-weight: 800;
        }

        .step-copy h3 {
          margin-bottom: 12px;
          font-size: clamp(1.35rem, 2.2vw, 2rem);
          line-height: 1.1;
        }

        .mock-window {
          min-height: 290px;
          border: 1px solid rgba(196, 217, 255, 0.16);
          border-radius: 8px;
          padding: 16px;
          background:
            radial-gradient(circle at 80% 12%, rgba(255, 209, 102, 0.1), transparent 32%),
            linear-gradient(180deg, rgba(12, 18, 32, 0.96), rgba(10, 15, 27, 0.94));
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.07), 0 24px 70px rgba(0,0,0,0.22);
          overflow: hidden;
        }

        .mock-top {
          display: flex;
          align-items: center;
          gap: 7px;
          margin-bottom: 16px;
          color: #aeb9ce;
          font-size: 0.78rem;
        }

        .mock-top i {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: rgba(196, 217, 255, 0.25);
        }

        .mock-top strong {
          margin-left: 6px;
          color: #dce6fa;
        }

        .mock-form {
          max-width: 420px;
          margin: 8px auto 0;
          display: grid;
          gap: 12px;
          text-align: center;
        }

        .mock-avatar {
          width: 56px;
          height: 56px;
          margin: 0 auto 2px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          color: #4fd1c5;
          border: 1px solid rgba(79, 209, 197, 0.24);
          background: rgba(79, 209, 197, 0.09);
        }

        .mock-form p {
          margin: 0;
          color: #9facbf;
          font-size: 0.86rem;
          line-height: 1.5;
        }

        .mock-input,
        .mock-row span,
        .chat-input {
          min-height: 44px;
          display: flex;
          align-items: center;
          border-radius: 8px;
          border: 1px solid rgba(196,217,255,0.14);
          background: rgba(255,255,255,0.055);
          color: #c9d5ea;
          padding: 0 14px;
          font-size: 0.86rem;
        }

        .mock-row,
        .metric-row,
        .subject-mini-grid,
        .plan-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
        }

        .mock-form button {
          min-height: 44px;
          border: 0;
          border-radius: 999px;
          color: #fff;
          background: #6366f1;
          font: inherit;
          font-weight: 760;
        }

        .learner-card,
        .focus-card,
        .subject-hero {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          border-radius: 8px;
          border: 1px solid rgba(196,217,255,0.14);
          background: rgba(255,255,255,0.055);
          padding: 16px;
          margin-bottom: 12px;
        }

        .learner-card div,
        .focus-card,
        .subject-hero {
          min-width: 0;
        }

        .learner-card strong,
        .learner-card span,
        .focus-card span,
        .focus-card strong,
        .subject-hero strong,
        .subject-hero span {
          display: block;
        }

        .learner-card span,
        .focus-card span,
        .subject-hero span,
        .bar-row span,
        .metric span {
          color: #98a6bd;
          font-size: 0.8rem;
        }

        .learner-card em {
          flex-shrink: 0;
          border-radius: 999px;
          padding: 5px 9px;
          color: #7ee787;
          background: rgba(126,231,135,0.1);
          font-style: normal;
          font-size: 0.74rem;
          font-weight: 800;
        }

        .learner-card.muted em {
          color: #ffd166;
          background: rgba(255,209,102,0.1);
        }

        .mini-plan {
          min-height: 160px;
          border-radius: 8px;
          border: 1px solid rgba(196,217,255,0.14);
          background: rgba(255,255,255,0.05);
          padding: 18px;
        }

        .mini-plan.active {
          border-color: rgba(255,209,102,0.34);
          background: rgba(255,209,102,0.08);
        }

        .mini-plan span,
        .mini-plan strong,
        .mini-plan p {
          display: block;
        }

        .mini-plan strong {
          margin: 18px 0 8px;
          font-size: 1.8rem;
        }

        .mini-plan p,
        .focus-card p,
        .quiz-mini p,
        .homework-grid p {
          margin: 0;
          color: #9facbf;
          font-size: 0.86rem;
          line-height: 1.5;
        }

        .metric-row {
          grid-template-columns: repeat(3, minmax(0, 1fr));
          margin-bottom: 18px;
        }

        .metric {
          border-radius: 8px;
          border: 1px solid rgba(196,217,255,0.13);
          background: rgba(255,255,255,0.05);
          padding: 14px;
        }

        .metric strong {
          display: block;
          margin-top: 8px;
          font-size: 1.55rem;
        }

        .chapter-bars {
          display: grid;
          gap: 13px;
        }

        .bar-row div {
          height: 8px;
          margin-top: 7px;
          border-radius: 999px;
          background: rgba(196,217,255,0.12);
          overflow: hidden;
        }

        .bar-row i {
          display: block;
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(90deg, #4fd1c5, #ffd166);
        }

        .focus-card {
          display: block;
        }

        .focus-card strong {
          margin: 8px 0;
          font-size: 1.15rem;
        }

        .subject-mini-grid div {
          border-radius: 8px;
          border: 1px solid rgba(196,217,255,0.13);
          background: rgba(255,255,255,0.05);
          padding: 16px;
          color: #dce6fa;
        }

        .subject-mini-grid strong {
          display: block;
          margin-top: 18px;
          color: #4fd1c5;
          font-size: 1.4rem;
        }

        .tool-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
        }

        .tool-grid span,
        .reader-tabs span,
        .goal-list span {
          border-radius: 8px;
          border: 1px solid rgba(196,217,255,0.13);
          background: rgba(255,255,255,0.055);
          padding: 12px;
          color: #dce6fa;
          font-size: 0.84rem;
        }

        .chat-line {
          max-width: 82%;
          border-radius: 14px;
          padding: 13px 15px;
          margin-bottom: 12px;
          color: #e8eefb;
          font-size: 0.9rem;
          line-height: 1.5;
        }

        .chat-line.user {
          margin-left: auto;
          background: rgba(99, 102, 241, 0.3);
        }

        .chat-line.ai {
          background: rgba(79, 209, 197, 0.12);
          border: 1px solid rgba(79, 209, 197, 0.18);
        }

        .chat-input {
          margin-top: 22px;
          color: #7f8da5;
        }

        .reader-tabs,
        .goal-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 18px;
        }

        .reader-mock p {
          border-left: 3px solid #4fd1c5;
          padding: 10px 14px;
          background: rgba(79,209,197,0.08);
          color: #dce6fa;
          line-height: 1.65;
        }

        .selection-pill {
          width: fit-content;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          border-radius: 999px;
          padding: 9px 14px;
          color: #ffd166;
          background: rgba(255,209,102,0.1);
          border: 1px solid rgba(255,209,102,0.24);
          font-size: 0.82rem;
          font-weight: 800;
        }

        .quiz-mini {
          display: grid;
          gap: 10px;
        }

        .quiz-mini strong {
          margin-bottom: 5px;
          font-size: 1.04rem;
        }

        .quiz-mini span {
          border-radius: 8px;
          border: 1px solid rgba(196,217,255,0.13);
          padding: 12px;
          color: #cbd7ec;
          background: rgba(255,255,255,0.045);
        }

        .quiz-mini span.correct {
          border-color: rgba(126,231,135,0.24);
          background: rgba(126,231,135,0.1);
          color: #e8ffec;
        }

        .homework-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 12px;
          margin-bottom: 14px;
        }

        .homework-grid div {
          min-height: 132px;
          border-radius: 8px;
          border: 1px solid rgba(196,217,255,0.13);
          background: rgba(255,255,255,0.05);
          padding: 15px;
        }

        .homework-grid span {
          display: block;
          margin-bottom: 12px;
          color: #4fd1c5;
          font-size: 0.78rem;
          font-weight: 800;
        }

        .trust-band {
          display: grid;
          grid-template-columns: minmax(0, 0.82fr) minmax(420px, 1fr);
          gap: 40px;
          align-items: center;
          border: 1px solid rgba(196,217,255,0.14);
          border-radius: 8px;
          padding: clamp(24px, 4vw, 40px);
          background:
            radial-gradient(circle at 88% 18%, rgba(126,231,135,0.1), transparent 30%),
            linear-gradient(135deg, rgba(255,255,255,0.07), rgba(255,255,255,0.026));
        }

        .trust-points {
          display: grid;
          gap: 12px;
        }

        .trust-points span {
          min-height: 48px;
          display: flex;
          align-items: center;
          gap: 10px;
          border-radius: 8px;
          border: 1px solid rgba(196,217,255,0.13);
          background: rgba(255,255,255,0.05);
          padding: 12px 14px;
          color: #dce6fa;
        }

        .trust-points svg {
          color: #7ee787;
          flex-shrink: 0;
        }

        .faq-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        .faq-list article {
          display: flex;
          gap: 13px;
          border: 1px solid rgba(196,217,255,0.14);
          border-radius: 8px;
          padding: 22px;
          background: rgba(255,255,255,0.045);
        }

        .faq-list svg {
          flex-shrink: 0;
          color: #ffd166;
          margin-top: 3px;
        }

        .faq-list h3 {
          margin-bottom: 8px;
          font-size: 1rem;
        }

        .faq-list p {
          margin-bottom: 0;
          font-size: 0.92rem;
        }

        .final-cta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          border: 1px solid rgba(255,209,102,0.2);
          border-radius: 8px;
          padding: clamp(26px, 5vw, 52px);
          background:
            radial-gradient(circle at 78% 28%, rgba(255,209,102,0.14), transparent 34%),
            linear-gradient(135deg, rgba(255,255,255,0.07), rgba(255,255,255,0.026));
        }

        .final-actions {
          margin-top: 0;
          flex-shrink: 0;
        }

        .guide-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding: 42px 0 50px;
          color: #8f9db6;
          font-size: 0.88rem;
        }

        .guide-footer p {
          margin-bottom: 0;
        }

        .guide-footer div {
          display: flex;
          gap: 18px;
        }

        @media (max-width: 980px) {
          .guide-hero {
            grid-template-columns: 1fr;
            min-height: 0;
            padding-top: 168px;
          }

          .hero-panel {
            max-width: 720px;
          }

          .info-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .section-heading.split,
          .step-card,
          .trust-band {
            grid-template-columns: 1fr;
          }

          .mock-window {
            min-height: 260px;
          }

          .final-cta {
            align-items: flex-start;
            flex-direction: column;
          }
        }

        @media (max-width: 640px) {
          .guide-hero,
          .guide-section,
          .trust-band,
          .final-cta,
          .guide-footer {
            width: min(1180px, calc(100% - 28px));
          }

          .guide-hero {
            padding-top: 204px;
          }

          h1 {
            font-size: clamp(2.55rem, 16vw, 3.5rem);
          }

          .guide-section {
            padding: 68px 0;
          }

          .info-grid,
          .faq-list,
          .mock-row,
          .metric-row,
          .subject-mini-grid,
          .plan-grid,
          .homework-grid {
            grid-template-columns: 1fr;
          }

          .info-card {
            min-height: 0;
          }

          .step-card {
            padding: 16px;
          }

          .mock-window {
            min-height: 0;
          }

          .tool-grid {
            grid-template-columns: 1fr;
          }

          .guide-footer {
            align-items: flex-start;
            flex-direction: column;
          }

          .guide-footer div,
          .final-actions,
          .hero-actions {
            width: 100%;
          }

          .guide-btn {
            width: 100%;
          }
        }
      `}</style>
    </main>
  );
}
