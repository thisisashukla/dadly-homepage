import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getAllBlogSlugs, getBlogBySlug } from '@/lib/blogs'
import { ScrollTracker } from '@/components/blog/ScrollTracker'
import { ArticleViewTracker } from '@/components/blog/ArticleViewTracker'
import { CTABlock } from '@/components/blog/CTABlock'
import { TrackingLink } from '@/components/TrackingLink'

interface BlogPageProps {
  params: Promise<{ slug: string }>
}

const blogModules: Record<string, () => Promise<any>> = {
  'i-asked-ai-every-question-pregnancy': () => import('@/content/blogs/i-asked-ai-every-question-pregnancy'),
  'do-dads-get-postpartum-depression': () => import('@/content/blogs/do-dads-get-postpartum-depression'),
  'how-to-bond-with-newborn-as-a-dad': () => import('@/content/blogs/how-to-bond-with-newborn-as-a-dad'),
  'new-dad-sleep-deprivation-survival-guide': () => import('@/content/blogs/new-dad-sleep-deprivation-survival-guide'),
  'what-to-expect-in-delivery-room-first-time-dad': () => import('@/content/blogs/what-to-expect-in-delivery-room-first-time-dad'),
  'real-cost-of-having-a-baby-first-time-dads': () => import('@/content/blogs/real-cost-of-having-a-baby-first-time-dads'),
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params
  const blog = getBlogBySlug(slug)
  if (!blog) return {}

  return {
    title: `${blog.title} | Dadly`,
    description: blog.description,
    keywords: blog.keywords,
    alternates: {
      canonical: `https://dadlyapp.com/blog/${blog.slug}`,
    },
    openGraph: {
      type: 'article',
      title: blog.title,
      description: blog.description,
      url: `https://dadlyapp.com/blog/${blog.slug}`,
      siteName: 'Dadly',
      publishedTime: blog.datePublished,
      modifiedTime: blog.dateModified,
      authors: [blog.author],
      images: [{ url: 'https://dadlyapp.com/og-image.png', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.description,
    },
  }
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params
  const blog = getBlogBySlug(slug)
  if (!blog) notFound()

  const moduleLoader = blogModules[slug]
  if (!moduleLoader) notFound()

  const module = await moduleLoader()
  const BlogContent = module.BlogContent

  const relatedSlugs = getAllBlogSlugs().filter((s: string) => s !== slug).slice(0, 4)
  const relatedBlogs = relatedSlugs.map((s: string) => getBlogBySlug(s)).filter(Boolean)

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: blog.title,
    description: blog.description,
    author: {
      '@type': 'Person',
      name: blog.author,
      jobTitle: blog.authorRole,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Dadly',
      url: 'https://dadlyapp.com',
    },
    datePublished: blog.datePublished,
    dateModified: blog.dateModified,
    url: `https://dadlyapp.com/blog/${blog.slug}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://dadlyapp.com/blog/${blog.slug}`,
    },
    keywords: blog.keywords.join(', '),
    wordCount: blog.wordCount,
  }

  const faqJsonLd = blog.faqs && blog.faqs.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: blog.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      }
    : null

  return (
    <main className="article-outer">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <ArticleViewTracker slug={slug} title={blog.title} category={blog.category} />
      <ScrollTracker slug={slug} />

      <nav className="breadcrumb" aria-label="Breadcrumb">
        <TrackingLink href="/" location="breadcrumb_home" page="article">
          Dadly
        </TrackingLink>
        <span className="sep">›</span>
        <TrackingLink href="/blog" location="breadcrumb_blog" page="article">
          Blog
        </TrackingLink>
        <span className="sep">›</span>
        <span>{blog.category}</span>
      </nav>

      <div className="article-tag">
        {blog.tags.join(' · ')}
      </div>

      <h1 className="article-title">{blog.title}</h1>

      <p className="article-subtitle">{blog.subtitle}</p>

      <div className="article-meta">
        <span className="meta-author">{blog.author}</span>
        <span className="meta-dot">·</span>
        <span className="meta-detail">{blog.authorRole}</span>
        <span className="meta-dot">·</span>
        <time className="meta-detail" dateTime={blog.datePublished}>
          {new Date(blog.datePublished).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </time>
        <span className="meta-dot">·</span>
        <span className="meta-detail">{blog.readTime} read</span>
      </div>

      <BlogContent />

      {/* ─── AUTHOR BIO / E-E-A-T ─── */}
      <div style={{
        borderTop: '1px solid var(--rule)',
        borderBottom: '1px solid var(--rule)',
        padding: '24px 0',
        margin: '40px 0',
        display: 'flex',
        gap: '20px',
        alignItems: 'flex-start',
      }}>
        <div style={{
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          background: 'var(--navy, #1a2744)',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '18px',
          fontWeight: 700,
          flexShrink: 0,
        }}>A</div>
        <div>
          <div style={{ fontSize: '14px', fontWeight: 700, marginBottom: '4px' }}>Ankur — Founder, Dadly</div>
          <p style={{ fontSize: '13px', color: 'var(--muted)', margin: '0 0 10px', lineHeight: 1.6 }}>
            Data scientist and dad who navigated a high-risk pregnancy. Built Dadly because no app existed for what dads actually need at 2am. Every article on this blog comes from real lived experience.
          </p>
          <div style={{ fontSize: '12px', color: 'var(--muted)', background: 'var(--bg-warm, #f7f4ef)', borderRadius: '6px', padding: '8px 12px', lineHeight: 1.5 }}>
            <strong>Health content note:</strong> Articles on Dadly are for informational purposes and are not a substitute for professional medical advice. Always consult your doctor, midwife, or healthcare provider for guidance specific to your situation.
          </div>
        </div>
      </div>

      <CTABlock
        title="Dadly — Clear answers for dads."
        titleHtml="Dadly — Clear answers for <em>dads.</em>"
        description="Weekly briefs, scan and report explainers, and an AI you can ask anything — written for the dad, not the couple. Free for 7 days."
        buttonText="Try Dadly free →"
        buttonHref="/waitlist"
        page={`article_${slug}`}
      />

      {relatedBlogs.length > 0 && (
        <div className="related">
          <div className="related-label">More from Dadly</div>
          <div className="related-grid">
            {relatedBlogs.map((b) => (
              <TrackingLink
                key={b!.slug}
                href={`/blog/${b!.slug}`}
                location={`related_${b!.slug}`}
                page={`article_${slug}`}
                className="related-card"
              >
                <div className="rc-tag">{b!.category}</div>
                <div className="rc-title">{b!.title}</div>
              </TrackingLink>
            ))}
          </div>
        </div>
      )}
    </main>
  )
}
