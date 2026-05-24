import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LOGO_SRC } from "../constants";
import { blogPosts } from "./posts";

const loginUrl = "https://app.kivoedu.ai/login";
const demoUrl = "https://app.kivoedu.ai/demo";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read KivoEdu posts about curriculum-grounded AI tutoring, product thinking, and high-level architecture.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "KivoEdu Blog",
    description:
      "Product and engineering notes from KivoEdu, the curriculum-grounded AI tutor for students.",
    url: "/blog",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <main className="blog-root">
      <nav className="blog-nav">
        <Link href="/" className="brand" aria-label="KivoEdu home">
          <Image
            src={LOGO_SRC}
            alt="KivoEdu"
            width={138}
            height={52}
            style={{ objectFit: "contain", height: "auto" }}
            priority
          />
        </Link>
        <div className="blog-nav-links">
          <Link href="/#platform-overview">Features</Link>
          <Link href="/#parents">Parents</Link>
          <Link href="/guide">How it Works</Link>
          <Link href="/#pricing">Pricing</Link>
          <details className="blog-more">
            <summary>More</summary>
            <div className="blog-more-menu">
              <Link href="/blog">Blog</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </details>
        </div>
        <span className="blog-nav-sep" aria-hidden="true" />
        <div className="blog-nav-auth">
          <a href={loginUrl} className="blog-login" target="_blank" rel="noopener noreferrer">
            Log in
          </a>
          <a href={demoUrl} className="blog-cta" target="_blank" rel="noopener noreferrer">
            Try Free
          </a>
        </div>
      </nav>

      <section className="blog-hero">
        <p className="eyebrow">KivoEdu Blog</p>
        <h1>Notes on curriculum-grounded AI tutoring.</h1>
        <p>
          Product updates, high-level architecture notes, and plain-language
          writing about what KivoEdu is building, why it matters, and who it
          helps.
        </p>
      </section>

      <section className="post-list" aria-label="Blog posts">
        {blogPosts.map((post) => (
          <article className="post-card" key={post.slug}>
            <div>
              <p className="post-meta">
                {post.category} · {new Date(post.date).toLocaleDateString("en", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })} · {post.readingTime}
              </p>
              <h2>
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p>{post.description}</p>
            </div>
            <Link href={`/blog/${post.slug}`} className="read-link">
              Read post
            </Link>
          </article>
        ))}
      </section>

      <style>{`
        *, *::before, *::after {
          box-sizing: border-box;
        }

        .blog-root {
          min-height: 100vh;
          color: #f4f7fb;
          background:
            radial-gradient(circle at 10% 0%, rgba(79, 209, 197, 0.18), transparent 30rem),
            radial-gradient(circle at 88% 12%, rgba(255, 184, 107, 0.14), transparent 24rem),
            #070a12;
          font-family: var(--font-geist-sans), Inter, system-ui, sans-serif;
        }

        .blog-nav,
        .blog-hero,
        .post-list {
          width: min(1060px, calc(100% - 40px));
          margin: 0 auto;
        }

        .blog-nav {
          min-height: 76px;
          display: flex;
          align-items: center;
          gap: 24px;
          border-bottom: 1px solid rgba(196, 217, 255, 0.13);
          background: rgba(7, 10, 18, 0.34);
          backdrop-filter: blur(18px);
        }

        .brand {
          display: inline-flex;
          align-items: center;
          flex-shrink: 0;
        }

        .blog-nav-links {
          margin-left: auto;
          display: flex;
          align-items: center;
          gap: 22px;
        }

        .blog-nav-links a,
        .blog-more summary,
        .blog-login,
        .read-link {
          color: #a8b3c6;
          text-decoration: none;
        }

        .blog-nav-links a,
        .blog-more summary,
        .blog-login {
          position: relative;
          padding: 7px 0;
          font-size: 16px;
          font-weight: 500;
          letter-spacing: 0;
          opacity: 0.76;
          transition: color 160ms ease, opacity 160ms ease;
        }

        .blog-nav-links a:hover,
        .blog-more summary:hover,
        .blog-login:hover,
        .read-link:hover,
        .post-card h2 a:hover {
          color: #f4f7fb;
          opacity: 1;
        }

        .blog-nav-links > a::after,
        .blog-more summary::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 1px;
          height: 2px;
          border-radius: 999px;
          background: linear-gradient(90deg, rgba(79, 209, 197, 0.8), rgba(255, 209, 102, 0.72));
          opacity: 0;
          transform: scaleX(0.55);
          transition: opacity 160ms ease, transform 160ms ease;
        }

        .blog-nav-links > a:hover::after,
        .blog-more summary:hover::after,
        .blog-more[open] summary::after {
          opacity: 1;
          transform: scaleX(1);
        }

        .blog-more {
          position: relative;
        }

        .blog-more summary {
          list-style: none;
          cursor: pointer;
          outline: none;
        }

        .blog-more summary::-webkit-details-marker {
          display: none;
        }

        .blog-more-menu {
          position: absolute;
          top: calc(100% + 14px);
          right: 0;
          min-width: 176px;
          display: grid;
          gap: 4px;
          border: 1px solid rgba(196, 217, 255, 0.14);
          border-radius: 14px;
          padding: 8px;
          background: rgba(9, 14, 25, 0.96);
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.32);
          backdrop-filter: blur(18px);
          z-index: 5;
        }

        .blog-more-menu a {
          padding: 10px 12px;
          border-radius: 10px;
          font-size: 15px;
        }

        .blog-more-menu a::after {
          display: none;
        }

        .blog-more-menu a:hover {
          background: rgba(255, 255, 255, 0.07);
        }

        .blog-nav-sep {
          width: 1px;
          height: 18px;
          background: rgba(196, 217, 255, 0.25);
          flex-shrink: 0;
        }

        .blog-nav-auth {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .blog-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 42px;
          border-radius: 999px;
          padding: 0 22px;
          color: #ffffff;
          border: 1px solid rgba(99, 102, 241, 0.56);
          background: linear-gradient(135deg, #4f46e5, #6366f1 52%, #79a7ff);
          box-shadow: 0 14px 38px rgba(99, 102, 241, 0.28), 0 0 0 5px rgba(99, 102, 241, 0.07);
          font-weight: 700;
          font-size: 15.5px;
          text-decoration: none;
          white-space: nowrap;
          transition: transform 180ms ease, box-shadow 180ms ease;
        }

        .blog-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 22px 60px rgba(99, 102, 241, 0.38);
        }

        .blog-hero {
          padding: 86px 0 52px;
          border-top: 1px solid rgba(196, 217, 255, 0.12);
        }

        .eyebrow {
          margin: 0 0 14px;
          color: #4fd1c5;
          font-size: 0.76rem;
          font-weight: 750;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        h1,
        h2,
        p {
          margin-top: 0;
        }

        h1 {
          max-width: 850px;
          margin-bottom: 22px;
          font-size: clamp(2.45rem, 5.4vw, 4.75rem);
          line-height: 1;
          letter-spacing: 0;
        }

        .blog-hero p:last-child {
          max-width: 720px;
          color: #a8b3c6;
          font-size: 1.12rem;
          line-height: 1.72;
        }

        .post-list {
          display: grid;
          gap: 16px;
          padding: 24px 0 92px;
        }

        .post-card {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 28px;
          align-items: center;
          border: 1px solid rgba(196, 217, 255, 0.14);
          border-radius: 8px;
          padding: 28px;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.025));
        }

        .post-meta {
          margin-bottom: 12px;
          color: #4fd1c5;
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .post-card h2 {
          margin-bottom: 12px;
          font-size: clamp(1.25rem, 2.2vw, 1.9rem);
          line-height: 1.18;
          letter-spacing: 0;
        }

        .post-card h2 a {
          color: #f4f7fb;
          text-decoration: none;
        }

        .post-card p:last-child {
          max-width: 700px;
          margin-bottom: 0;
          color: #a8b3c6;
          line-height: 1.65;
        }

        .read-link {
          display: inline-flex;
          align-items: center;
          min-height: 42px;
          border: 1px solid rgba(196, 217, 255, 0.22);
          border-radius: 8px;
          padding: 0 16px;
          white-space: nowrap;
        }

        @media (max-width: 720px) {
          .blog-nav,
          .blog-hero,
          .post-list {
            width: min(1060px, calc(100% - 28px));
          }

          .blog-nav {
            min-height: 112px;
            flex-wrap: wrap;
            align-content: center;
            gap: 8px 14px;
            padding: 10px 0 8px;
          }

          .brand img {
            width: 112px;
          }

          .blog-nav-links {
            order: 3;
            width: 100%;
            margin-left: 0;
            gap: 14px;
            overflow-x: auto;
            overscroll-behavior-x: contain;
            padding: 2px 0 4px;
            scrollbar-width: none;
          }

          .blog-nav-links::-webkit-scrollbar {
            display: none;
          }

          .blog-nav-links a,
          .blog-more summary {
            flex: 0 0 auto;
            font-size: 15px;
          }

          .blog-more-menu {
            position: fixed;
            top: 112px;
            right: 14px;
          }

          .blog-nav-sep {
            display: none;
          }

          .blog-nav-auth {
            margin-left: auto;
            gap: 12px;
          }

          .blog-login {
            font-size: 15px;
          }

          .blog-cta {
            min-height: 40px;
            padding: 0 18px;
            font-size: 15px;
          }

          .blog-hero {
            padding-top: 72px;
          }

          .post-card {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}
