import { BookOpen, GraduationCap, CalculatorIcon, Globe } from "lucide-react";

export default function InfoCard() {
  return (
    <>
      <style>{css}</style>
      <div className="lic-grid">
        <div className="lic-item">
          <span className="lic-icon lic-icon--blue" aria-hidden="true">
            <BookOpen size={20} strokeWidth={1.7} />
          </span>
          <div>
            <strong>CBSE &amp; Maharashtra Board</strong>
            <span>Fully syllabus aligned curriculum</span>
          </div>
        </div>
        <div className="lic-item">
          <span className="lic-icon lic-icon--cyan" aria-hidden="true">
            <GraduationCap size={20} strokeWidth={1.7} />
          </span>
          <div>
            <strong>Grades 9–10</strong>
            <span>Focused learning for key years</span>
          </div>
        </div>
        <div className="lic-item">
          <span className="lic-icon lic-icon--gold" aria-hidden="true">
            <CalculatorIcon size={20} strokeWidth={1.7} />
          </span>
          <div>
            <strong>Math &amp; Science</strong>
            <span>In-depth, concept focused content</span>
          </div>
        </div>
        <div className="lic-item">
          <span className="lic-icon lic-icon--green" aria-hidden="true">
            <Globe size={20} strokeWidth={1.7} />
          </span>
          <div>
            <strong>No app needed</strong>
            <span>Just open and learn</span>
          </div>
        </div>
      </div>
    </>
  );
}

const css = `
  .lic-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 10px;
    width: 100%;
    margin-top: 4px;
  }

  .lic-item {
    display: flex;
    flex-direction: column;
    gap: 9px;
    padding: 14px;
    border: 1px solid rgba(196, 217, 255, 0.14);
    border-radius: 16px;
    background:
      linear-gradient(145deg, rgba(255,255,255,0.075), rgba(255,255,255,0.026)),
      rgba(13, 19, 32, 0.66);
    box-shadow:
      inset 0 1px 0 rgba(255,255,255,0.055),
      0 14px 38px rgba(0,0,0,0.18);
    backdrop-filter: blur(12px);
  }

  .lic-item strong {
    display: block;
    color: var(--text);
    font-size: clamp(0.82rem, 1vw, 0.94rem);
    line-height: 1.22;
    margin-bottom: 3px;
  }

  .lic-item span:not(.lic-icon) {
    display: block;
    color: var(--muted);
    font-size: 0.76rem;
    line-height: 1.38;
  }

  .lic-icon {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    border: 1px solid rgba(196, 217, 255, 0.13);
  }

  .lic-icon--blue {
    color: #9fbaff;
    background: radial-gradient(circle, rgba(121,167,255,0.22), rgba(121,167,255,0.08));
  }

  .lic-icon--cyan {
    color: #89e7d9;
    background: radial-gradient(circle, rgba(79,209,197,0.22), rgba(79,209,197,0.08));
  }

  .lic-icon--gold {
    color: #ffe09a;
    background: radial-gradient(circle, rgba(255,209,102,0.22), rgba(255,209,102,0.08));
  }

  .lic-icon--green {
    color: #aee8c6;
    background: radial-gradient(circle, rgba(126,231,135,0.2), rgba(126,231,135,0.075));
  }

  @media (max-width: 640px) {
    .lic-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
`;
