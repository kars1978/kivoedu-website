import { Check } from "lucide-react";

const joinUrl = "https://app.kivoedu.ai/join";
const demoUrl = "https://app.kivoedu.ai/demo";

const STARTER_FEATURES = [
  "Access selected chapters",
  "Limited Kivo AI questions per day",
  "Create a few Kivo Docs",
  "Basic learning insights",
  "Reader + Homework Help access",
];

const COMPLETE_FEATURES = [
  "Full textbook access",
  "Unlimited Kivo AI usage*",
  "Unlimited Kivo Docs",
  "Full analytics & progress tracking",
  "Flashcards + Concept Drills",
  "Priority access to new features",
];

export default function PricingSection() {
  return (
    <section className="section-band pricing-section" id="pricing" aria-labelledby="pricing-heading">
      <style>{`
        .pricing-section {
          background:
            radial-gradient(circle at 74% 36%, rgba(255, 209, 102, 0.09), transparent 28rem),
            radial-gradient(circle at 20% 72%, rgba(79, 209, 197, 0.07), transparent 22rem);
        }

        .pricing-heading-sub {
          max-width: 520px;
          margin: 20px auto 0;
          color: var(--muted);
          font-size: 1rem;
          line-height: 1.7;
        }

        .pricing-cards {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 22px;
          max-width: 860px;
          margin: 0 auto;
        }

        .pricing-card {
          position: relative;
          display: flex;
          flex-direction: column;
          border-radius: 28px;
          padding: 36px 32px 32px;
          border: 1px solid rgba(196, 217, 255, 0.13);
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.065), rgba(255, 255, 255, 0.022)),
            rgba(11, 16, 28, 0.86);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.05),
            0 24px 70px rgba(0, 0, 0, 0.22);
          backdrop-filter: blur(14px);
          transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
        }

        .pricing-card:hover {
          transform: translateY(-5px);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.07),
            0 32px 90px rgba(0, 0, 0, 0.3);
        }

        .pricing-card--premium {
          border-color: rgba(255, 209, 102, 0.28);
          background:
            radial-gradient(ellipse at 50% -8%, rgba(255, 209, 102, 0.14), transparent 55%),
            linear-gradient(180deg, rgba(255, 209, 102, 0.065), rgba(255, 255, 255, 0.022)),
            rgba(14, 18, 30, 0.9);
          box-shadow:
            inset 0 1px 0 rgba(255, 209, 102, 0.12),
            0 24px 70px rgba(0, 0, 0, 0.26),
            0 0 56px rgba(255, 209, 102, 0.07);
        }

        .pricing-card--premium:hover {
          border-color: rgba(255, 209, 102, 0.44);
          box-shadow:
            inset 0 1px 0 rgba(255, 209, 102, 0.16),
            0 32px 90px rgba(0, 0, 0, 0.32),
            0 0 72px rgba(255, 209, 102, 0.11);
        }

        .pricing-badge {
          display: inline-flex;
          align-items: center;
          align-self: flex-start;
          padding: 4px 12px;
          border-radius: 999px;
          border: 1px solid rgba(255, 209, 102, 0.38);
          background: rgba(255, 209, 102, 0.1);
          color: var(--accent);
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          margin-bottom: 18px;
        }

        .pricing-plan {
          margin: 0 0 10px;
          font-size: 1.08rem;
          font-weight: 760;
          color: var(--text);
          letter-spacing: -0.01em;
        }

        .pricing-price {
          display: flex;
          align-items: baseline;
          gap: 4px;
          margin: 0 0 4px;
          font-size: clamp(2.2rem, 4vw, 2.9rem);
          font-weight: 800;
          color: var(--text);
          line-height: 1;
          letter-spacing: -0.025em;
        }

        .pricing-price-period {
          font-size: 1rem;
          font-weight: 600;
          color: var(--muted);
          letter-spacing: 0;
        }

        .pricing-price-note {
          margin: 0 0 18px;
          font-size: 0.8rem;
          color: var(--soft);
        }

        .pricing-divider {
          height: 1px;
          background: rgba(196, 217, 255, 0.1);
          margin: 0 0 22px;
        }

        .pricing-desc {
          margin: 0 0 22px;
          color: var(--muted);
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .pricing-features {
          list-style: none;
          margin: 0 0 32px;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 11px;
          flex: 1;
        }

        .pricing-feature {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.88rem;
          color: var(--muted);
          line-height: 1.45;
        }

        .pricing-feature-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          border-radius: 6px;
          flex-shrink: 0;
          background: rgba(126, 231, 135, 0.09);
          border: 1px solid rgba(126, 231, 135, 0.2);
          color: var(--green);
        }

        .pricing-card--premium .pricing-feature-icon {
          background: rgba(255, 209, 102, 0.09);
          border-color: rgba(255, 209, 102, 0.22);
          color: var(--accent);
        }

        /* layout shell shared by both buttons */
        .pricing-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          min-height: 48px;
          border-radius: 999px;
          padding: 0 24px;
          font-weight: 760;
          font-size: 0.93rem;
          text-decoration: none;
          white-space: nowrap;
          transition:
            transform 180ms ease,
            box-shadow 180ms ease,
            border-color 180ms ease,
            background 180ms ease;
        }

        /* primary — indigo gradient */
        .pricing-cta.btn-kivo {
          color: #ffffff;
          border: 1px solid rgba(99, 102, 241, 0.55);
          background: linear-gradient(135deg, #4f46e5, #6366f1 52%, #818cf8);
          box-shadow: 0 16px 44px rgba(99, 102, 241, 0.28), 0 0 0 5px rgba(99, 102, 241, 0.07);
        }

        .pricing-cta.btn-kivo:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 22px 60px rgba(99, 102, 241, 0.42), 0 0 0 7px rgba(99, 102, 241, 0.12);
        }

        /* ghost — indigo tint */
        .pricing-cta.btn-kivo-ghost {
          color: #f4f7fb;
          border: 1px solid rgba(99, 102, 241, 0.28);
          background: rgba(99, 102, 241, 0.08);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.055);
        }

        .pricing-cta.btn-kivo-ghost:hover {
          transform: translateY(-2px) scale(1.02);
          border-color: rgba(99, 102, 241, 0.48);
          background: rgba(99, 102, 241, 0.14);
          box-shadow: 0 12px 30px rgba(99, 102, 241, 0.15);
        }


        .pricing-footnote {
          margin: 16px 0 0;
          font-size: 0.74rem;
          color: var(--soft);
          text-align: center;
          line-height: 1.55;
        }

        #pricing-heading {
          font-size: clamp(2rem, 3vw, 3rem);
        }

        @media (max-width: 720px) {
          .pricing-cards {
            grid-template-columns: 1fr;
            max-width: 460px;
          }

          .pricing-card {
            padding: 28px 24px 24px;
          }
        }
      `}</style>

      <div className="section-inner reveal">
        <div className="section-heading">
          <p className="eyebrow">Pricing</p>
          <h2 id="pricing-heading">Start free. Upgrade when<br />you need more.</h2>
          <p className="pricing-heading-sub">
            Experience curriculum-based AI learning with no credit card required.
          </p>
        </div>

        <div className="pricing-cards">

          {/* Starter — neutral */}
          <div className="pricing-card">
            <p className="pricing-plan">Kivo Starter</p>
            <div className="pricing-price">Free</div>
            <div className="pricing-divider" />
            <p className="pricing-desc">Ideal for exploring how Kivo works.</p>
            <ul className="pricing-features" aria-label="Kivo Starter features">
              {STARTER_FEATURES.map((f) => (
                <li key={f} className="pricing-feature">
                  <span className="pricing-feature-icon" aria-hidden="true">
                    <Check size={11} strokeWidth={2.5} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={demoUrl}
              className="pricing-cta btn-kivo-ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              Try Kivo Free
            </a>
          </div>

          {/* Complete — premium */}
          <div className="pricing-card pricing-card--premium">
            <span className="pricing-badge" aria-label="Best value plan">Best value</span>
            <p className="pricing-plan">Kivo Unlimited</p>
            <div className="pricing-price">
              &#x20B9;1999
              <span className="pricing-price-period">/ year</span>
            </div>
            <p className="pricing-price-note">Less than &#x20B9;6/day</p>
            <div className="pricing-divider" />
            <p className="pricing-desc">Full access to the Kivo learning system.</p>
            <ul className="pricing-features" aria-label=" features">
              {COMPLETE_FEATURES.map((f) => (
                <li key={f} className="pricing-feature">
                  <span className="pricing-feature-icon" aria-hidden="true">
                    <Check size={11} strokeWidth={2.5} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={joinUrl}
              className="pricing-cta btn-kivo"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Kivo Unlimited
            </a>
            <p className="pricing-footnote">
              *Subject to fair usage limits and provider availability.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
