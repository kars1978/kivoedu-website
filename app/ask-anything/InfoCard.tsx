const items = [
  "CBSE & Maharashtra Board",
  "Grades 9–10",
  "Math & Science",
  "No App Required",
];

export default function InfoCard() {
  return (
    <>
      <style>{css}</style>
      <div className="tb-bar">
        {items.map((label) => (
          <span key={label} className="tb-item">
            <span className="tb-check" aria-hidden="true">✓</span>
            {label}
          </span>
        ))}
      </div>
    </>
  );
}

const css = `
  .tb-bar {
    display: flex;
    flex-wrap: wrap;
    gap: 6px 20px;
    margin-top: 2px;
  }

  .tb-item {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 0.84rem;
    color: var(--muted);
  }

  .tb-check {
    color: var(--green);
    font-size: 0.8rem;
    font-weight: 700;
    line-height: 1;
  }
`;
