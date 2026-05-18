import type { Metadata } from 'next'
import { PageViewTracker } from '@/components/PageViewTracker'
import { TrackingLink } from '@/components/TrackingLink'

export const metadata: Metadata = {
  title: 'About Ankur Shukla — Founder of Dadly | iOS Developer',
  description:
    'Ankur Shukla is an iOS developer, engineer, and the founder of Dadly — an AI companion built for expecting and new dads. He also makes Wisdom Quotes. Every Dadly article is written from lived experience.',
  alternates: { canonical: 'https://dadlyapp.com/about' },
  openGraph: {
    type: 'profile',
    url: 'https://dadlyapp.com/about',
    title: 'About Ankur Shukla — Founder of Dadly',
    description:
      'iOS developer and founder of Dadly. Built Dadly after navigating a high-risk pregnancy and realising no app spoke to dads.',
    siteName: 'Dadly',
    images: [{ url: 'https://dadlyapp.com/og-image.png', width: 1200, height: 630 }],
  },
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://dadlyapp.com/about#person',
  name: 'Ankur Shukla',
  givenName: 'Ankur',
  familyName: 'Shukla',
  url: 'https://dadlyapp.com/about',
  image: 'https://dadlyapp.com/og-image.png',
  jobTitle: 'Founder, Dadly',
  description:
    'iOS developer and engineer. Founder of Dadly, an AI companion app for expecting and new dads. Also builds Wisdom Quotes.',
  sameAs: [
    'https://www.linkedin.com/in/thisisashukla/',
    'https://x.com/thisisashukla',
    'https://wisdomquotes.in/',
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'Dadly',
    url: 'https://dadlyapp.com',
  },
  knowsAbout: [
    'iOS development',
    'Swift',
    'AI applications',
    'Pregnancy and newborn health for dads',
    'Mobile product design',
  ],
}

const aboutPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  url: 'https://dadlyapp.com/about',
  mainEntity: { '@id': 'https://dadlyapp.com/about#person' },
  publisher: {
    '@type': 'Organization',
    name: 'Dadly',
    url: 'https://dadlyapp.com',
  },
}

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0z"/>
  </svg>
)

const TwitterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

const ExternalIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M6 3H3v10h10V10M9 3h4v4M13 3 7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function AboutPage() {
  return (
    <main className="prose-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageJsonLd) }}
      />
      <PageViewTracker event="About Page Viewed" />

      {/* Breadcrumb */}
      <nav className="breadcrumb" aria-label="Breadcrumb" style={{ marginBottom: '24px' }}>
        <TrackingLink href="/" location="breadcrumb_home" page="about">Dadly</TrackingLink>
        <span className="sep">›</span>
        <span>About</span>
      </nav>

      {/* Header */}
      <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', marginBottom: '28px' }}>
        <div
          aria-hidden="true"
          style={{
            width: '72px',
            height: '72px',
            borderRadius: '50%',
            background: 'var(--navy, #1a2744)',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '28px',
            fontWeight: 700,
            flexShrink: 0,
          }}
        >
          A
        </div>
        <div>
          <h1 style={{ marginBottom: '6px' }}>Ankur Shukla</h1>
          <p style={{ fontSize: '15px', color: 'var(--muted)', margin: 0 }}>
            iOS developer, engineer, and founder of Dadly.
          </p>
        </div>
      </div>

      {/* Social links */}
      <div
        style={{
          display: 'flex',
          gap: '10px',
          flexWrap: 'wrap',
          marginBottom: '36px',
        }}
      >
        <a
          href="https://www.linkedin.com/in/thisisashukla/"
          target="_blank"
          rel="me noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '9px 14px',
            background: 'var(--card, #fff)',
            border: '1px solid var(--rule)',
            borderRadius: '10px',
            fontSize: '14px',
            fontWeight: 600,
            textDecoration: 'none',
            color: 'var(--navy)',
          }}
        >
          <LinkedInIcon /> LinkedIn
        </a>
        <a
          href="https://x.com/thisisashukla"
          target="_blank"
          rel="me noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '9px 14px',
            background: 'var(--card, #fff)',
            border: '1px solid var(--rule)',
            borderRadius: '10px',
            fontSize: '14px',
            fontWeight: 600,
            textDecoration: 'none',
            color: 'var(--navy)',
          }}
        >
          <TwitterIcon /> Twitter / X
        </a>
        <a
          href="mailto:hello@dadlyapp.com"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '9px 14px',
            background: 'var(--card, #fff)',
            border: '1px solid var(--rule)',
            borderRadius: '10px',
            fontSize: '14px',
            fontWeight: 600,
            textDecoration: 'none',
            color: 'var(--navy)',
          }}
        >
          Email
        </a>
      </div>

      {/* Bio */}
      <p style={{ fontSize: '17px', lineHeight: 1.75 }}>
        I&apos;m Ankur — an iOS developer and engineer building apps for the moments most people don&apos;t talk about out loud. I&apos;m the founder of <strong>Dadly</strong>, an AI companion for expecting and new dads, and the maker of{' '}
        <a href="https://wisdomquotes.in/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)' }}>
          Wisdom Quotes <ExternalIcon />
        </a>
        , an iOS app of curated quotes for clearer thinking.
      </p>

      <h2>Why I built Dadly</h2>
      <p>
        Dadly started in a hospital waiting room. My wife had a high-risk pregnancy and I spent nine months Googling scan results at 2am, decoding blood work I didn&apos;t understand, and trying to figure out which symptoms were normal and which ones meant I should wake her up. The pregnancy apps we tried were all written for the person carrying the baby — none of them spoke to the partner standing next to her.
      </p>
      <p>
        So I built the thing I needed. Dadly is an AI companion for dads — built specifically for the partner role. It explains scans and reports in plain English, gives you a short weekly brief, helps you prep for doctor visits, and answers the 3am questions you&apos;d otherwise type into Google with shaking hands. Every article on this blog is written from lived experience, then checked against medical sources before it goes out.
      </p>

      <h2>What I make</h2>
      <p>
        I build iOS apps, end-to-end — from product idea to Swift code to AI backend. My focus is on apps that solve real, specific human problems rather than another generic tracker.
      </p>
      <ul>
        <li>
          <strong>Dadly</strong> — AI companion for expecting and new dads. iOS &amp; Android. (<TrackingLink href="/" location="about_dadly" page="about">dadlyapp.com</TrackingLink>)
        </li>
        <li>
          <strong>Wisdom Quotes</strong> — iOS app of hand-curated quotes for clearer thinking. (<a href="https://wisdomquotes.in/" target="_blank" rel="noopener noreferrer">wisdomquotes.in <ExternalIcon /></a>)
        </li>
      </ul>

      <h2>How Dadly&apos;s articles get written</h2>
      <p>
        Articles on the Dadly blog come from a real pregnancy and a real newborn — the questions I asked, the moments I panicked, the things that turned out to be fine, and the things I wish I&apos;d known sooner. They aren&apos;t generic listicles spun from an SEO brief.
      </p>
      <p>
        Before anything is published it&apos;s cross-checked against medical sources (NHS, ACOG, AAP, peer-reviewed journals where relevant) and reviewed for accuracy. Anything time-sensitive is dated and revisited. If you ever spot something that looks off, please{' '}
        <a href="mailto:hello@dadlyapp.com">email me</a> — I&apos;ll fix it.
      </p>

      <div
        style={{
          background: 'var(--bg-warm, #f7f4ef)',
          border: '1px solid var(--rule)',
          borderRadius: '12px',
          padding: '18px 22px',
          margin: '28px 0',
          fontSize: '14px',
          lineHeight: 1.65,
          color: 'var(--muted)',
        }}
      >
        <strong style={{ color: 'var(--navy)' }}>Health content note:</strong> Articles on Dadly are for informational purposes and are not a substitute for professional medical advice. Always consult your doctor, midwife, or healthcare provider for guidance specific to your situation.
      </div>

      <h2>Get in touch</h2>
      <p>
        The fastest way to reach me is{' '}
        <a href="https://x.com/thisisashukla" target="_blank" rel="me noopener noreferrer">Twitter / X</a> or{' '}
        <a href="https://www.linkedin.com/in/thisisashukla/" target="_blank" rel="me noopener noreferrer">LinkedIn</a>. For product feedback, bug reports, or anything Dadly-related, email{' '}
        <a href="mailto:hello@dadlyapp.com">hello@dadlyapp.com</a>.
      </p>

      <p style={{ marginTop: '32px' }}>
        <TrackingLink href="/blog" location="about_to_blog" page="about" className="btn-dark" style={{ display: 'inline-flex', fontSize: '15px', padding: '13px 26px' }}>
          Read the Dadly blog →
        </TrackingLink>
      </p>
    </main>
  )
}
