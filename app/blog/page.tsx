import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "./posts";

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
        <Link href="/" className="brand">
          KivoEdu
        </Link>
        <div>
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
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
          justify-content: space-between;
          gap: 24px;
        }

        .blog-nav div {
          display: flex;
          gap: 22px;
        }

        .blog-nav a,
        .read-link {
          color: #a8b3c6;
          text-decoration: none;
        }

        .blog-nav a:hover,
        .read-link:hover,
        .post-card h2 a:hover {
          color: #f4f7fb;
        }

        .brand {
          color: #f4f7fb !important;
          font-weight: 800;
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
          font-size: clamp(3rem, 7vw, 6rem);
          line-height: 0.96;
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
          font-size: clamp(1.45rem, 3vw, 2.4rem);
          line-height: 1.1;
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

          .blog-hero {
            padding-top: 58px;
          }

          .post-card {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}
