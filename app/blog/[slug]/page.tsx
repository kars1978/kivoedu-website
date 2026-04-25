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
        <header>
          <p className="post-meta">
            {post.category} · {new Date(post.date).toLocaleDateString("en", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })} · {post.readingTime}
          </p>
          <h1>{post.title}</h1>
          <p className="dek">{post.description}</p>
        </header>

        <p className="intro">{post.intro}</p>

        {post.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}
      </article>

      <style>{`
        *, *::before, *::after {
          box-sizing: border-box;
        }

        .article-root {
          min-height: 100vh;
          color: #f4f7fb;
          background:
            radial-gradient(circle at 14% 0%, rgba(79, 209, 197, 0.16), transparent 30rem),
            radial-gradient(circle at 86% 8%, rgba(121, 167, 255, 0.16), transparent 26rem),
            #070a12;
          font-family: var(--font-geist-sans), Inter, system-ui, sans-serif;
        }

        .article-nav,
        .article {
          width: min(860px, calc(100% - 40px));
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
          color: #4fd1c5;
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        h1 {
          margin-bottom: 22px;
          font-size: clamp(2.7rem, 7vw, 5.5rem);
          line-height: 0.98;
          letter-spacing: 0;
        }

        .dek,
        .intro {
          color: #a8b3c6;
          font-size: 1.16rem;
          line-height: 1.78;
        }

        .intro {
          margin: 46px 0 34px;
          color: #f4f7fb;
        }

        section {
          padding-top: 24px;
        }

        h2 {
          margin-bottom: 16px;
          font-size: clamp(1.6rem, 3vw, 2.4rem);
          line-height: 1.12;
          letter-spacing: 0;
        }

        section p {
          color: #a8b3c6;
          font-size: 1.04rem;
          line-height: 1.82;
        }

        section p + p {
          margin-top: 18px;
        }

        @media (max-width: 720px) {
          .article-nav,
          .article {
            width: min(860px, calc(100% - 28px));
          }

          .article {
            padding-top: 54px;
          }
        }
      `}</style>
    </main>
  );
}
