import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BookOpen,
  Bot,
  Brain,
  ClipboardCheck,
  HelpingHand,
  NotebookPen,
  UserRound,
} from "lucide-react";
import { LOGO_SRC } from "../../constants";
import type { BlogGridItem, BlogPost } from "../types";
import { blogPosts, getBlogPost } from "../posts";

const loginUrl = "https://app.kivoedu.ai/login";
const demoUrl = "https://app.kivoedu.ai/demo";

const gridIcons = {
  book: BookOpen,
  notebook: NotebookPen,
  check: ClipboardCheck,
  help: HelpingHand,
  brain: Brain,
  bot: Bot,
  user: UserRound,
};

function renderParagraph(paragraph: string) {
  return paragraph.trim().startsWith("- ") ? (
    <p className="section-bullet" key={paragraph}>
      {paragraph.replace(/^- /, "")}
    </p>
  ) : (
    <p key={paragraph}>{paragraph}</p>
  );
}

function renderGrid(items: BlogGridItem[]) {
  return (
    <div className="article-card-grid">
      {items.map((item) => {
        const Icon = gridIcons[item.icon];

        return (
          <article className="article-info-card" key={item.title}>
            <span
              className={`article-card-icon article-card-icon--${item.tone}`}
              aria-hidden="true"
            >
              <Icon size={24} strokeWidth={1.6} />
            </span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        );
      })}
    </div>
  );
}

function getSectionBlocks(section: BlogPost["sections"][number]) {
  if (section.blocks) {
    return section.blocks;
  }

  return [
    ...(section.image ? [{ type: "image" as const, image: section.image }] : []),
    ...(section.grid ? [{ type: "grid" as const, items: section.grid }] : []),
    ...(section.body ? [{ type: "body" as const, items: section.body }] : []),
  ];
}

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
        <div className="article-nav-links">
          <Link href="/#platform-overview">Features</Link>
          <Link href="/#parents">Parents</Link>
          <Link href="/guide">How it Works</Link>
          <Link href="/#pricing">Pricing</Link>
          <details className="article-more">
            <summary>More</summary>
            <div className="article-more-menu">
              <Link href="/blog">Blog</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </details>
        </div>
        <span className="article-nav-sep" aria-hidden="true" />
        <div className="article-nav-auth">
          <a href={loginUrl} className="article-login" target="_blank" rel="noopener noreferrer">
            Log in
          </a>
          <a href={demoUrl} className="article-cta" target="_blank" rel="noopener noreferrer">
            Try Free
          </a>
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
              {getSectionBlocks(section).map((block, index) => {
                if (block.type === "image") {
                  return (
                    <figure className="section-image" key={`image-${index}`}>
                      <Image
                        src={block.image.src}
                        alt={block.image.alt}
                        width={960}
                        height={540}
                      />
                      {block.image.caption ? (
                        <figcaption>{block.image.caption}</figcaption>
                      ) : null}
                    </figure>
                  );
                }

                if (block.type === "grid") {
                  return <div key={`grid-${index}`}>{renderGrid(block.items)}</div>;
                }

                return block.items.map(renderParagraph);
              })}
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

        .article-nav-links {
          margin-left: auto;
          display: flex;
          align-items: center;
          gap: 22px;
        }

        .article-nav-links a,
        .article-more summary,
        .article-login,
        .back-link {
          color: #a8b3c6;
          text-decoration: none;
        }

        .article-nav-links a,
        .article-more summary,
        .article-login {
          position: relative;
          padding: 7px 0;
          font-size: 16px;
          font-weight: 500;
          letter-spacing: 0;
          opacity: 0.76;
          transition: color 160ms ease, opacity 160ms ease;
        }

        .article-nav-links a:hover,
        .article-more summary:hover,
        .article-login:hover,
        .back-link:hover {
          color: #f4f7fb;
          opacity: 1;
        }

        .article-nav-links > a::after,
        .article-more summary::after {
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

        .article-nav-links > a:hover::after,
        .article-more summary:hover::after,
        .article-more[open] summary::after {
          opacity: 1;
          transform: scaleX(1);
        }

        .article-more {
          position: relative;
        }

        .article-more summary {
          list-style: none;
          cursor: pointer;
          outline: none;
        }

        .article-more summary::-webkit-details-marker {
          display: none;
        }

        .article-more-menu {
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

        .article-more-menu a {
          padding: 10px 12px;
          border-radius: 10px;
          font-size: 15px;
        }

        .article-more-menu a::after {
          display: none;
        }

        .article-more-menu a:hover {
          background: rgba(255, 255, 255, 0.07);
        }

        .article-nav-sep {
          width: 1px;
          height: 18px;
          background: rgba(196, 217, 255, 0.25);
          flex-shrink: 0;
        }

        .article-nav-auth {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .article-cta {
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

        .article-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 22px 60px rgba(99, 102, 241, 0.38);
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
          font-size: clamp(2.35rem, 5.2vw, 4.4rem);
          line-height: 1.02;
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
          max-width: 100%;
          margin-bottom: 16px;
          color: #76f6e6;
          font-size: clamp(1.35rem, 2.4vw, 1.9rem);
          line-height: 1.16;
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

        .section-image {
          margin: 0 0 22px;
        }

        .section-image img {
          display: block;
          width: 100%;
          height: auto;
          border-radius: 12px;
          object-fit: cover;
        }

        .section-image figcaption {
          margin-top: 10px;
          color: #a8b3c6;
          font-size: 0.9rem;
          line-height: 1.5;
        }

        .article-card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
          gap: 14px;
          margin: 0 0 24px;
        }

        .article-info-card {
          min-height: 252px;
          border: 1px solid rgba(196, 217, 255, 0.13);
          border-radius: 16px;
          padding: 22px;
          background:
            linear-gradient(145deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.024)),
            rgba(13, 19, 32, 0.62);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.055),
            0 16px 34px rgba(0, 0, 0, 0.16);
        }

        .article-card-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 52px;
          height: 52px;
          margin-bottom: 22px;
          border-radius: 999px;
        }

        .article-card-icon--clear {
          color: #9fbaff;
          background: radial-gradient(circle, rgba(121, 167, 255, 0.22), rgba(121, 167, 255, 0.08));
        }

        .article-card-icon--support {
          color: #89e7d9;
          background: radial-gradient(circle, rgba(79, 209, 197, 0.22), rgba(79, 209, 197, 0.08));
        }

        .article-card-icon--journey {
          color: #ffe09a;
          background: radial-gradient(circle, rgba(255, 209, 102, 0.22), rgba(255, 209, 102, 0.08));
        }

        .article-card-icon--interactive {
          color: #aee8c6;
          background: radial-gradient(circle, rgba(126, 231, 135, 0.2), rgba(126, 231, 135, 0.075));
        }

        .article-info-card h3 {
          margin: 0 0 12px;
          color: #f4f7fb;
          font-size: 1.02rem;
          line-height: 1.25;
          letter-spacing: 0;
        }

        .article-info-card p {
          margin: 0;
          color: #a8b3c6;
          font-size: 0.95rem;
          line-height: 1.64;
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

          .article-nav {
            min-height: 112px;
            flex-wrap: wrap;
            align-content: center;
            gap: 8px 14px;
            padding: 10px 0 8px;
          }

          .brand img {
            width: 112px;
          }

          .article-nav-links {
            order: 3;
            width: 100%;
            margin-left: 0;
            gap: 14px;
            overflow-x: auto;
            overscroll-behavior-x: contain;
            padding: 2px 0 4px;
            scrollbar-width: none;
          }

          .article-nav-links::-webkit-scrollbar {
            display: none;
          }

          .article-nav-links a,
          .article-more summary {
            flex: 0 0 auto;
            font-size: 15px;
          }

          .article-more-menu {
            position: fixed;
            top: 112px;
            right: 14px;
          }

          .article-nav-sep {
            display: none;
          }

          .article-nav-auth {
            margin-left: auto;
            gap: 12px;
          }

          .article-login {
            font-size: 15px;
          }

          .article-cta {
            min-height: 40px;
            padding: 0 18px;
            font-size: 15px;
          }

          .article {
            padding-top: 72px;
          }

          .intro-block,
          .content-block {
            border-radius: 16px;
            padding: 20px;
          }

          .article-card-grid {
            grid-template-columns: 1fr;
          }

          .article-info-card {
            min-height: auto;
          }
        }
      `}</style>
    </main>
  );
}
