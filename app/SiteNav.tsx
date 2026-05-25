import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HomeLogoLink from "./HomeLogoLink";

const loginUrl = "https://app.kivoedu.ai/login";
const demoUrl = "https://app.kivoedu.ai/demo";

export default function SiteNav() {
  return (
    <>
      <nav className="sn">
        <div className="sn-inner">
          <HomeLogoLink />
          <div className="sn-links" aria-label="Primary navigation">
            <Link href="/features">Features</Link>
            <Link href="/#parents">Parents</Link>
            <Link href="/guide">How it Works</Link>
            <Link href="/features#pricing">Pricing</Link>
            <Link href="/blog" className="sn-mobile-only">Blog</Link>
            <Link href="/contact" className="sn-mobile-only">Contact</Link>
          </div>
          <div className="sn-right">
            <Link href="/blog" className="sn-link sn-desktop-only">Blog</Link>
            <Link href="/contact" className="sn-link sn-desktop-only">Contact</Link>
            <span className="sn-vsep" aria-hidden="true" />
            <a href={loginUrl} className="sn-link" target="_blank" rel="noopener noreferrer">
              Log in
            </a>
            <a href={demoUrl} className="sn-cta" target="_blank" rel="noopener noreferrer">
              Try Kivo Free
              <ArrowRight size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
      </nav>

      <style>{`
        .sn {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 20;
          border-bottom: 1px solid rgba(196, 217, 255, 0.13);
          background: rgba(7, 10, 18, 0.74);
          backdrop-filter: blur(18px);
        }

        .sn-inner {
          width: 100%;
          box-sizing: border-box;
          padding: 0 28px;
          height: 74px;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
        }

        .sn-links {
          display: flex;
          align-items: center;
          gap: 2px;
        }

        .sn-right {
          display: flex;
          align-items: center;
          gap: 2px;
          justify-self: end;
        }

        .sn-links a,
        .sn-link {
          display: inline-flex;
          align-items: center;
          padding: 6px 11px;
          border-radius: 7px;
          color: #afbad0;
          font-size: 15px;
          font-weight: 500;
          text-decoration: none;
          opacity: 0.72;
          white-space: nowrap;
          transition: color 150ms ease, opacity 150ms ease, background 150ms ease;
        }

        .sn-links a:hover,
        .sn-link:hover {
          color: #f4f7fb;
          opacity: 1;
          background: rgba(255, 255, 255, 0.06);
        }

        .sn-vsep {
          width: 1px;
          height: 16px;
          background: rgba(196, 217, 255, 0.25);
          flex-shrink: 0;
          margin: 0 8px;
        }

        .sn-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          min-height: 42px;
          padding: 0 22px;
          border-radius: 999px;
          font-size: 15.5px;
          font-weight: 700;
          text-decoration: none;
          white-space: nowrap;
          color: #ffffff;
          border: 1px solid rgba(99, 102, 241, 0.56);
          background: linear-gradient(135deg, #4f46e5, #6366f1 52%, #79a7ff);
          box-shadow: 0 14px 38px rgba(99, 102, 241, 0.28), 0 0 0 5px rgba(99, 102, 241, 0.07);
          transition: border-color 180ms ease, background 180ms ease, box-shadow 180ms ease;
        }

        .sn-cta:hover {
          border-color: rgba(99, 102, 241, 0.72);
          background: linear-gradient(135deg, #5b52f0, #7174f8 52%, #8fb5ff);
          box-shadow: 0 18px 48px rgba(99, 102, 241, 0.38), 0 0 0 6px rgba(99, 102, 241, 0.12);
        }

        .sn-links .sn-mobile-only { display: none; }
        .sn-right .sn-desktop-only { display: inline-flex; }

        a.sn-link:focus-visible,
        a.sn-cta:focus-visible {
          outline: 3px solid rgba(255, 209, 102, 0.78);
          outline-offset: 4px;
          border-radius: 10px;
        }

        @media (prefers-reduced-motion: reduce) {
          .sn-links a, .sn-link, .sn-cta { transition: none; }
        }

        @media (max-width: 760px) {
          .sn-inner {
            height: auto;
            min-height: 120px;
            display: flex;
            flex-wrap: wrap;
            align-content: center;
            gap: 8px;
            padding: 10px 16px 8px;
          }

          .sn-links {
            order: 3;
            width: 100%;
            gap: 2px;
            overflow-x: auto;
            overscroll-behavior-x: contain;
            padding: 2px 0 4px;
            scrollbar-width: none;
          }

          .sn-links::-webkit-scrollbar { display: none; }

          .sn-links a {
            flex: 0 0 auto;
            font-size: 14.5px;
            padding: 5px 9px;
          }

          .sn-links .sn-mobile-only { display: inline-flex; }
          .sn-right .sn-desktop-only { display: none; }

          .sn-right {
            margin-left: auto;
            gap: 4px;
          }

          .sn-vsep { display: none; }

          .sn-link {
            padding: 5px 8px;
            font-size: 14.5px;
          }

          .sn-cta {
            min-height: 40px;
            padding: 0 16px;
            font-size: 14.5px;
          }
        }
      `}</style>
    </>
  );
}
