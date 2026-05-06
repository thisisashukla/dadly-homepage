import type { Metadata } from 'next'
import { getAllBlogSlugs, getBlogBySlug } from '@/lib/blogs'
import { PageViewTracker } from '@/components/PageViewTracker'
import { TrackingLink } from '@/components/TrackingLink'
import { ArticleCardTracker } from '@/components/ArticleCardTracker'

export const metadata: Metadata = {
  title: 'Blog — Guides for Expecting & New Dads | Dadly',
  description:
    'Practical guides for dads — pregnancy weeks explained, newborn milestones, sleep, feeding, and health. Written for dads who want to actually understand what\'s going on.',
  openGraph: {
    type: 'website',
    url: 'https://dadlyapp.com/blog',
    title: 'Blog — Guides for Expecting & New Dads | Dadly',
    description: 'Practical guides for dads — pregnancy weeks explained, newborn milestones, sleep, feeding, and health.',
    siteName: 'Dadly',
  },
  alternates: { canonical: 'https://dadlyapp.com/blog' },
}

const categoryThumbClass: Record<string, string> = {
  Pregnancy: 'card-thumb-pregnancy',
  Newborn: 'card-thumb-newborn',
  Sleep: 'card-thumb-sleep',
  'Mental Health': 'card-thumb-mental',
  Finance: 'card-thumb-finance',
}

const tagClass: Record<string, string> = {
  Pregnancy: 'tag-pregnancy',
  Newborn: 'tag-newborn',
  Sleep: 'tag-sleep',
  'Mental Health': 'tag-mental',
  Finance: 'tag-finance',
}

export default function BlogIndex() {
  const slugs = getAllBlogSlugs()
  const blogs = slugs.map((slug) => getBlogBySlug(slug)).filter(Boolean)

  return (
    <>
      <PageViewTracker event="Blog Index Page Viewed" />
      <ArticleCardTracker />

      {/* ─── BLOG HERO ─── */}
      <div className="blog-hero">
        <div className="blog-hero-inner">
          <div className="blog-hero-label">Dadly · Guides for Dads</div>
          <h1>
            Pregnancy &amp; newborn life,<br />
            <em>explained for dads</em>
          </h1>
          <p>
            What to expect each week, how to read scans, what newborn symptoms mean, and how to
            actually help — written for dads who want to understand what&apos;s going on.
          </p>
        </div>
      </div>

      <div className="blog-wrap">
        {/* ─── APP BANNER ─── */}
        <div className="app-banner">
          <div>
            <h3>Get answers instantly, for your exact situation.</h3>
            <p>
              The Dadly app lets you ask anything — your partner&apos;s symptoms, reports, the
              baby&apos;s poop colour, a 3am feeding concern — and get a clear, calm answer that
              actually helps.
            </p>
          </div>
          <TrackingLink href="/#pricing" location="blog_app_banner" page="Blog Index" className="app-banner-btn">
            Try Dadly Free →
          </TrackingLink>
        </div>

        {/* ─── ARTICLES ─── */}
        <div className="section-head">
          <h2>
            Dad Guides — <em>Pregnancy &amp; Beyond</em>
          </h2>
          <span className="section-count">{blogs.length} articles</span>
        </div>

        <div className="articles-grid">
          {blogs.map((blog) => {
            if (!blog) return null
            const thumbClass = categoryThumbClass[blog.category] ?? 'card-thumb-pregnancy'
            const tClass = tagClass[blog.category] ?? 'tag-guide'
            return (
              <TrackingLink
                key={blog.slug}
                href={`/blog/${blog.slug}`}
                location={`blog_card_${blog.slug}`}
                page="Blog Index"
                className="article-card"
                data-mp-article={blog.slug}
              >
                <div className={`card-thumb ${thumbClass}`}>
                  <div className="card-category-badge">{blog.category}</div>
                  <div className="card-thumb-title">{blog.title}</div>
                </div>
                <div className="card-body">
                  <div className="card-tags">
                    {blog.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className={`tag ${tClass}`}>{tag}</span>
                    ))}
                    <span className="tag tag-guide">Guide</span>
                  </div>
                  <div className="card-desc">{blog.subtitle}</div>
                  <div className="card-meta">
                    <span className="card-read-time">{blog.readTime} read</span>
                    <span className="card-arrow">Read →</span>
                  </div>
                </div>
              </TrackingLink>
            )
          })}
        </div>
      </div>
    </>
  )
}
