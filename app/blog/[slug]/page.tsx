import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "../posts";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      authors: [post.author],
      tags: post.tags,
      url: `/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "KivoEdu",
    },
    mainEntityOfPage: `https://kivoedu.ai/blog/${post.slug}`,
  };

  return (
    <main className="article-root">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <nav className="article-nav">
        <Link href="/" className="brand">
          KivoEdu
        </Link>
        <div>
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
        </div>
      </nav>

      <article className="article">
        <Link href="/blog" className="back-link">
          Back to blog
        </Link>

        <header className="article-header">
          <p className="post-meta">
            {post.category} / {new Date(post.date).toLocaleDateString("en", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })} / {post.readingTime}
          </p>
          <h1>{post.title}</h1>
          <p className="dek">{post.description}</p>
          <div className="tag-row" aria-label="Post tags">
            {post.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </header>

        <div className="intro-block">
          <span>At A Glance</span>
          <p>{post.intro}</p>
        </div>

        <div className="section-stack">
          {post.sections.map((section) => (
            <section className="content-block" key={section.heading}>
              <h2>{section.heading}</h2>
              {section.body.map((paragraph) =>
                paragraph.trim().startsWith("- ") ? (
                  <p className="section-bullet" key={paragraph}>
                    {paragraph.replace(/^- /, "")}
                  </p>
                ) : (
                  <p key={paragraph}>{paragraph}</p>
                ),
              )}
            </section>
          ))}
        </div>
      </article>

      <style>{`
        *, *::before, *::after {
          box-sizing: border-box;
        }

        .article-root {
          min-height: 100vh;
          color: #f4f7fb;
          background:
            radial-gradient(circle at 14% 0%, rgba(74, 222, 200, 0.12), transparent 30rem),
            radial-gradient(circle at 86% 8%, rgba(125, 211, 252, 0.1), transparent 26rem),
            #070a12;
          font-family: var(--font-geist-sans), Inter, system-ui, sans-serif;
        }

        .article-nav,
        .article {
          width: min(1032px, calc(100% - 48px));
          margin: 0 auto;
        }

        .article-nav {
          min-height: 76px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .article-nav div {
          display: flex;
          gap: 22px;
        }

        .article-nav a,
        .back-link {
          color: #a8b3c6;
          text-decoration: none;
        }

        .article-nav a:hover,
        .back-link:hover {
          color: #f4f7fb;
        }

        .brand {
          color: #f4f7fb !important;
          font-weight: 800;
        }

        .article {
          padding: 72px 0 96px;
          border-top: 1px solid rgba(196, 217, 255, 0.12);
        }

        .article-header {
          max-width: 860px;
          padding-bottom: 28px;
          border-bottom: 1px solid rgba(196, 217, 255, 0.1);
        }

        .back-link {
          display: inline-flex;
          margin-bottom: 38px;
        }

        h1,
        h2,
        p {
          margin-top: 0;
        }

        .post-meta {
          margin-bottom: 16px;
          color: #76f6e6;
          font-size: 0.78rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        h1 {
          margin-bottom: 22px;
          font-size: clamp(3rem, 7vw, 5.8rem);
          line-height: 0.98;
          letter-spacing: 0;
        }

        .dek,
        .intro-block p {
          color: #c9d4e5;
          font-size: 1.12rem;
          line-height: 1.82;
        }

        .tag-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 28px;
        }

        .tag-row span {
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 999px;
          padding: 7px 12px;
          color: #c6d3e8;
          background: rgba(255, 255, 255, 0.045);
          font-size: 0.8rem;
          font-weight: 700;
        }

        .intro-block {
          margin: 30px 0 16px;
          border: 1px solid rgba(74, 222, 200, 0.14);
          border-radius: 20px;
          padding: 24px;
          background:
            linear-gradient(135deg, rgba(74, 222, 200, 0.08) 0%, rgba(125, 211, 252, 0.03) 100%),
            rgba(255, 255, 255, 0.025);
        }

        .intro-block span {
          display: inline-flex;
          margin-bottom: 12px;
          font-size: 0.7rem;
          font-weight: 900;
          letter-spacing: 0.14em;
          line-height: 1.2;
          text-transform: uppercase;
        }

        .intro-block span {
          color: #76f6e6;
        }

        .intro-block p {
          max-width: 78ch;
          margin-bottom: 0;
          color: #f4f7fb;
        }

        .section-stack {
          display: grid;
          gap: 16px;
        }

        .content-block {
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 24px;
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.045), rgba(255, 255, 255, 0.018)),
            rgba(16, 20, 31, 0.78);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.03);
        }

        h2 {
          max-width: 22ch;
          margin-bottom: 16px;
          color: #76f6e6;
          font-size: clamp(1.55rem, 3vw, 2.25rem);
          line-height: 1.1;
          letter-spacing: 0;
        }

        .content-block p {
          max-width: 78ch;
          color: #c9d4e5;
          font-size: 1.02rem;
          line-height: 1.82;
        }

        .content-block p:last-child {
          margin-bottom: 0;
        }

        .content-block p + p {
          margin-top: 16px;
        }

        .section-bullet {
          position: relative;
          margin: 10px 0 0;
          padding-left: 26px;
          color: #e0e8f5 !important;
        }

        .section-bullet::before {
          content: "";
          position: absolute;
          top: 0.82em;
          left: 2px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #7ee787;
          box-shadow: 0 0 0 6px rgba(126, 231, 135, 0.08);
        }

        @media (max-width: 720px) {
          .article-nav,
          .article {
            width: min(1032px, calc(100% - 28px));
          }

          .article {
            padding-top: 54px;
          }

          .intro-block,
          .content-block {
            border-radius: 16px;
            padding: 20px;
          }
        }
      `}</style>
    </main>
  );
}
