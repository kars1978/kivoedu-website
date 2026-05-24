import type { Metadata } from "next";
import Link from "next/link";
import { Mail, GraduationCap, Building2 } from "lucide-react";
import SiteNav from "../SiteNav";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with KivoEdu — questions about curriculum support, pricing, schools, or partnerships.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact KivoEdu",
    description:
      "Questions about Kivo? We'd love to hear from you.",
    url: "/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="cr">
      <SiteNav />

      <section className="ch" aria-labelledby="contact-heading">
        <p className="eyebrow">Contact</p>
        <h1 id="contact-heading">Get in touch.</h1>
        <p className="ch-sub">
          Questions about Kivo, curriculum support, pricing, or partnerships?
          We&#x2019;d love to hear from you.
        </p>
      </section>

      <section className="cc" aria-label="Contact options">

        {/* Primary email card */}
        <div className="ec">
          <span className="ec-icon" aria-hidden="true">
            <Mail size={22} strokeWidth={1.5} />
          </span>
          <p className="ec-label">Email us</p>
          <a
            href="mailto:admin@kivoedu.ai"
            className="ec-address"
            aria-label="Send email to admin@kivoedu.ai"
          >
            admin@kivoedu.ai
          </a>
          <p className="ec-note">We usually respond as soon as possible.</p>
          <a
            href="mailto:admin@kivoedu.ai"
            className="btn-kivo"
          >
            Send an email
          </a>
        </div>

        {/* Secondary cards */}
        <div className="sc-grid">
          <div className="sc">
            <span className="sc-icon" aria-hidden="true">
              <GraduationCap size={18} strokeWidth={1.5} />
            </span>
            <h2 className="sc-title">For parents &amp; students</h2>
            <p className="sc-body">
              Ask about supported boards, grades, subjects, or getting started
              with Kivo.
            </p>
          </div>
          <div className="sc">
            <span className="sc-icon" aria-hidden="true">
              <Building2 size={18} strokeWidth={1.5} />
            </span>
            <h2 className="sc-title">For schools &amp; partners</h2>
            <p className="sc-body">
              Reach out for school access, pilots, or collaboration
              opportunities.
            </p>
          </div>
        </div>

      </section>

      <footer className="cf">
        <div className="cf-inner">
          <p>&copy; 2026 KivoEdu. All rights reserved.</p>
          <div className="cf-links">
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </footer>

      <style>{`
        *, *::before, *::after { box-sizing: border-box; }

        /* ── Root ─────────────────────────────────────────────────── */
        .cr {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          color: #f4f7fb;
          background:
            radial-gradient(circle at 12% 6%, rgba(79, 209, 197, 0.17), transparent 28rem),
            radial-gradient(circle at 88% 4%, rgba(121, 167, 255, 0.13), transparent 24rem),
            radial-gradient(circle at 52% 42%, rgba(255, 209, 102, 0.06), transparent 30rem),
            #070a12;
          font-family: var(--font-geist-sans), Inter, system-ui, sans-serif;
          overflow-x: hidden;
        }

        .cr::before {
          content: "";
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          opacity: 0.28;
          background-image:
            linear-gradient(rgba(196, 217, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(196, 217, 255, 0.045) 1px, transparent 1px);
          background-size: 72px 72px;
          mask-image: linear-gradient(to bottom, black, transparent 72%);
        }

        /* ── Hero ─────────────────────────────────────────────────── */
        .ch {
          position: relative;
          z-index: 1;
          width: min(1180px, calc(100% - 48px));
          margin: 0 auto;
          padding: 118px 0 72px;
          text-align: center;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          margin: 0 0 20px;
          color: #4fd1c5;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.13em;
          text-transform: uppercase;
        }

        h1, h2, p { margin-top: 0; }

        h1 {
          margin-bottom: 22px;
          font-size: clamp(2.4rem, 4vw, 3.6rem);
          line-height: 0.96;
          letter-spacing: -0.025em;
          color: #f4f7fb;
        }

        .ch-sub {
          max-width: 520px;
          margin: 0 auto;
          color: #afbad0;
          font-size: clamp(1rem, 1.5vw, 1.1rem);
          line-height: 1.74;
        }

        /* ── Content area ─────────────────────────────────────────── */
        .cc {
          position: relative;
          z-index: 1;
          flex: 1;
          width: min(820px, calc(100% - 48px));
          margin: 0 auto;
          padding: 0 0 120px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        /* ── Email card ───────────────────────────────────────────── */
        .ec {
          width: 100%;
          max-width: 500px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          border-radius: 28px;
          padding: 44px 40px 40px;
          border: 1px solid rgba(79, 209, 197, 0.2);
          background:
            radial-gradient(ellipse at 50% -6%, rgba(79, 209, 197, 0.13), transparent 58%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.024)),
            rgba(10, 15, 26, 0.9);
          box-shadow:
            inset 0 1px 0 rgba(79, 209, 197, 0.1),
            0 24px 70px rgba(0, 0, 0, 0.26),
            0 0 56px rgba(79, 209, 197, 0.07);
          backdrop-filter: blur(14px);
          transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
        }

        .ec:hover {
          transform: translateY(-4px);
          border-color: rgba(79, 209, 197, 0.32);
          box-shadow:
            inset 0 1px 0 rgba(79, 209, 197, 0.14),
            0 32px 90px rgba(0, 0, 0, 0.3),
            0 0 72px rgba(79, 209, 197, 0.1);
        }

        .ec-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 52px;
          height: 52px;
          border-radius: 16px;
          margin-bottom: 22px;
          color: #4fd1c5;
          background: rgba(79, 209, 197, 0.1);
          border: 1px solid rgba(79, 209, 197, 0.22);
        }

        .ec-label {
          margin: 0 0 10px;
          color: #4fd1c5;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .ec-address {
          display: block;
          margin: 0 0 10px;
          color: #f4f7fb;
          font-size: clamp(1.28rem, 2.8vw, 1.65rem);
          font-weight: 760;
          letter-spacing: -0.01em;
          text-decoration: none;
          transition: color 160ms ease;
          word-break: break-all;
        }

        .ec-address:hover {
          color: #4fd1c5;
        }

        .ec-note {
          margin: 0 0 28px;
          color: #78859b;
          font-size: 0.86rem;
          line-height: 1.6;
        }

        .btn-kivo {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 48px;
          border-radius: 999px;
          padding: 0 28px;
          font-weight: 760;
          font-size: 0.93rem;
          text-decoration: none;
          white-space: nowrap;
          cursor: pointer;
          color: #ffffff;
          border: 1px solid rgba(99, 102, 241, 0.55);
          background: linear-gradient(135deg, #4f46e5, #6366f1 52%, #818cf8);
          box-shadow: 0 16px 44px rgba(99, 102, 241, 0.28), 0 0 0 5px rgba(99, 102, 241, 0.07);
          transition: transform 180ms ease, box-shadow 180ms ease;
        }

        .btn-kivo:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 22px 60px rgba(99, 102, 241, 0.42), 0 0 0 7px rgba(99, 102, 241, 0.12);
        }

        /* ── Secondary cards ──────────────────────────────────────── */
        .sc-grid {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        .sc {
          border-radius: 22px;
          padding: 28px;
          border: 1px solid rgba(196, 217, 255, 0.1);
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.055), rgba(255, 255, 255, 0.018)),
            rgba(10, 15, 26, 0.78);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04), 0 16px 48px rgba(0, 0, 0, 0.18);
          backdrop-filter: blur(10px);
          transition: transform 200ms ease, border-color 200ms ease;
        }

        .sc:hover {
          transform: translateY(-3px);
          border-color: rgba(196, 217, 255, 0.18);
        }

        .sc-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 10px;
          margin-bottom: 14px;
          color: #afbad0;
          background: rgba(255, 255, 255, 0.055);
          border: 1px solid rgba(196, 217, 255, 0.11);
        }

        .sc-title {
          margin: 0 0 8px;
          font-size: 0.98rem;
          font-weight: 760;
          color: #f4f7fb;
          letter-spacing: -0.01em;
          line-height: 1.3;
        }

        .sc-body {
          margin: 0;
          color: #afbad0;
          font-size: 0.87rem;
          line-height: 1.65;
        }

        /* ── Footer ───────────────────────────────────────────────── */
        .cf {
          position: relative;
          z-index: 1;
          border-top: 1px solid rgba(196, 217, 255, 0.1);
          padding: 30px 0;
          background: rgba(5, 8, 18, 0.5);
        }

        .cf-inner {
          width: min(1180px, calc(100% - 48px));
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .cf-inner p {
          margin: 0;
          color: #78859b;
          font-size: 0.88rem;
        }

        .cf-links {
          display: flex;
          gap: 4px;
        }

        .cf-links a {
          padding: 5px 10px;
          border-radius: 999px;
          color: #78859b;
          font-size: 0.88rem;
          text-decoration: none;
          transition: color 160ms ease, background 160ms ease;
        }

        .cf-links a:hover {
          color: #f4f7fb;
          background: rgba(255, 255, 255, 0.06);
        }

        /* ── Focus ────────────────────────────────────────────────── */
        a:focus-visible {
          outline: 3px solid rgba(255, 209, 102, 0.78);
          outline-offset: 4px;
          border-radius: 10px;
        }

        /* ── Reduced motion ───────────────────────────────────────── */
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            transition-duration: 0.001ms !important;
          }
        }

        /* ── Mobile ───────────────────────────────────────────────── */
        @media (max-width: 760px) {
          .cn-inner,
          .ch,
          .cf-inner {
            width: min(1180px, calc(100% - 28px));
          }

          .cc {
            width: min(820px, calc(100% - 28px));
            padding: 0 0 80px;
          }

          .cn-inner {
            height: auto;
            min-height: 112px;
            flex-wrap: wrap;
            align-content: center;
            gap: 8px 14px;
            padding: 10px 0 8px;
          }

          .cn-links {
            order: 3;
            display: flex;
            width: 100%;
            margin-left: 0;
            gap: 14px;
            overflow-x: auto;
            overscroll-behavior-x: contain;
            padding: 2px 0 4px;
            scrollbar-width: none;
          }

          .cn-links::-webkit-scrollbar {
            display: none;
          }

          .cn-links a,
          .cn-more summary {
            flex: 0 0 auto;
            font-size: 15px;
          }

          .cn-more-menu {
            position: fixed;
            top: 112px;
            right: 14px;
          }

          .cn-sep {
            display: none;
          }

          .cn-auth {
            margin-left: auto;
            gap: 12px;
          }

          .cn-login {
            font-size: 15px;
          }

          .cn-cta {
            min-height: 40px;
            padding: 0 18px;
            font-size: 15px;
          }

          .ch {
            padding: 144px 0 52px;
          }

          .ec {
            padding: 32px 24px 28px;
          }

          .sc-grid {
            grid-template-columns: 1fr;
          }

          .cf-inner {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
        }
      `}</style>
    </main>
  );
}
