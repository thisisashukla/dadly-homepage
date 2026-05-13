import type { Metadata } from 'next'
import { PageViewTracker } from '@/components/PageViewTracker'
import { TrackingLink } from '@/components/TrackingLink'
import { ScrollReveal } from '@/components/ScrollReveal'
import Image from 'next/image'
import { getAllBlogSlugs, getBlogBySlug } from '@/lib/blogs'

const homepageFaqs = [
  {
    q: 'Is there an app specifically for expecting dads?',
    a: 'Yes — Dadly is built specifically for dads. Unlike most pregnancy apps designed for the person who\'s pregnant, Dadly helps the partner: understanding symptoms, reading scan reports, preparing for doctor visits, and getting calm answers at 3am when something feels off.',
  },
  {
    q: 'What\'s the best pregnancy app for dads?',
    a: 'Dadly is the only pregnancy and newborn app with context-aware AI chat, medical report analysis, and full coverage from pregnancy through the newborn stage — all built for dads. It gives you clear, calm answers to the questions you\'d normally have to Google at 2am.',
  },
  {
    q: 'Can dads use regular pregnancy apps?',
    a: 'Most pregnancy apps are built for the person who\'s pregnant. Dadly is built for the partner\'s role: what you need to know, what questions to ask, and how to stay calm and useful across pregnancy and the newborn stage.',
  },
  {
    q: 'Is there an AI app for new dads?',
    a: 'Dadly is an AI-powered app for both expecting and new dads. Ask about your partner\'s pregnancy symptoms, upload a scan or test result for a plain-English explanation, or ask about your newborn\'s behaviour. It responds to your specific situation — not generic advice.',
  },
  {
    q: 'What can I ask Dadly at 3am?',
    a: 'Anything: Is this symptom normal at 30 weeks? What does this ultrasound result mean? The baby won\'t stop crying — what should I check? The baby\'s poop colour changed — is that okay? Why is my newborn grunting? Dadly is built for these exact moments, when it\'s too late to call anyone and Google is making things worse.',
  },
  {
    q: 'How much does Dadly cost?',
    a: 'Dadly is $4.99 per month, with a 7-day free trial. Cancel anytime. Available on iOS and Android.',
  },
]

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Dadly',
  url: 'https://dadlyapp.com',
  logo: 'https://dadlyapp.com/og-image.png',
  description: 'AI-powered companion app for expecting and new dads — pregnancy symptoms, scan analysis, newborn guidance.',
}

const softwareAppJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Dadly',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'iOS, Android',
  description: 'AI companion for expecting and new dads. Ask about pregnancy symptoms, upload scan reports, get newborn guidance — available at 3am.',
  offers: {
    '@type': 'Offer',
    price: '4.99',
    priceCurrency: 'USD',
    priceValidUntil: '2027-01-01',
  },
  author: {
    '@type': 'Person',
    name: 'Ankur',
    jobTitle: 'Founder, Dadly',
  },
}

const homepageFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: homepageFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
}

export const metadata: Metadata = {
  title: 'Dadly: AI App for Expecting & New Dads | Pregnancy & Newborn Guide',
  description:
    'Dadly is the AI companion for expecting and new dads. Ask about pregnancy symptoms, upload scan reports for plain-English explanations, and get calm answers at 3am. iOS & Android.',
  alternates: {
    canonical: 'https://dadlyapp.com',
  },
  openGraph: {
    type: 'website',
    url: 'https://dadlyapp.com',
    title: 'Dadly: AI App for Expecting & New Dads | Pregnancy & Newborn Guide',
    description:
      'Dadly is the AI companion for expecting and new dads. Ask about pregnancy symptoms, upload scan reports for plain-English explanations, and get calm answers at 3am.',
    images: [{ url: 'https://dadlyapp.com/og-image.png', width: 1200, height: 630 }],
    siteName: 'Dadly',
  },
}

const CheckIcon = () => (
  <span className="ck">
    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
      <path d="M1 4l3 3 5-6" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
)

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function HomePage() {
  const featuredSlugs = [
    'i-asked-ai-every-question-pregnancy',
    'do-dads-get-postpartum-depression',
    'what-to-expect-in-delivery-room-first-time-dad',
    'new-dad-sleep-deprivation-survival-guide',
  ]
  const featuredBlogs = featuredSlugs.map((s) => getBlogBySlug(s)).filter(Boolean)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageFaqJsonLd) }}
      />
      <PageViewTracker event="Dadly Homepage Viewed" />

      {/* ─── HERO ─── */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-eyebrow">For expecting and new dads</div>

          <h1>
            Clear answers for <em>dads</em>
            <br />— through pregnancy, newborn chaos, and everything after.
          </h1>

          <p className="hero-sub">
            From your partner&apos;s symptoms and reports during pregnancy to feeding, sleep, poop,
            crying, and health concerns after birth — Dadly helps you know what matters and what to
            do next.
          </p>

          <div className="store-badges" style={{ marginBottom: '8px' }}>
            <TrackingLink href="/waitlist" location="hero_cta" page="Dadly Homepage" className="btn-dark" style={{ display: 'inline-flex', fontSize: '16px', padding: '15px 32px' }}>
              Get Dadly — $4.99/mo <ArrowIcon />
            </TrackingLink>
          </div>
          <p className="hero-note">7-day free trial · Cancel anytime · iOS &amp; Android</p>
        </div>

        {/* phone fan */}
        <div className="hero-phones" style={{ marginTop: '24px' }}>
          <div className="phones-fan">
            <div className="fan-phone fan-left">
              <div className="iphone-mock">
                <div className="iphone-island" />
                <div className="iphone-screen">
                  <Image src="/assets/dadly-brief.webp" alt="Dadly weekly brief" width={603} height={1311} priority />
                </div>
              </div>
            </div>
            <div className="fan-phone fan-center">
              <div className="iphone-mock">
                <div className="iphone-island" />
                <div className="iphone-screen">
                  <Image src="/assets/dadly-chat.webp" alt="Dadly smart chat" width={603} height={1311} priority />
                </div>
              </div>
            </div>
            <div className="fan-phone fan-right">
              <div className="iphone-mock">
                <div className="iphone-island" />
                <div className="iphone-screen">
                  <Image src="/assets/dadly-analysis.webp" alt="Dadly report analysis" width={603} height={1311} priority />
                </div>
              </div>
            </div>
          </div>
          <div className="phones-floor" />
        </div>
      </section>

      {/* ─── PROOF BAR ─── */}
      <div className="proof-bar">
        <div className="proof-inner">
          <div className="proof-item">Tells you <strong>when to call</strong> and when to wait</div>
          <div className="proof-item">Knows <strong>your situation</strong> — not just the category</div>
          <div className="proof-item">Available at <strong>1am, 3am, 5am</strong> — whenever it happens</div>
          <div className="proof-item">Helps you decide <strong>what matters</strong> before you spiral</div>
        </div>
      </div>

      {/* ─── POSITIONING ─── */}
      <section className="section-warm">
        <div className="quote-block" style={{ maxWidth: '720px' }}>
          <p className="eyebrow" style={{ textAlign: 'center', marginBottom: '20px' }}>What Dadly does</p>
          <p className="quote-text" style={{ fontSize: 'clamp(20px, 2.2vw, 26px)' }}>
            Dadly helps you show up calm, informed, and useful.
          </p>
          <p style={{ fontSize: '16px', color: 'var(--muted)', fontStyle: 'normal', lineHeight: 1.75, marginTop: '16px', fontWeight: 400 }}>
            It gives you clear, practical guidance across both phases:<br />
            <strong style={{ color: 'var(--navy)' }}>Before birth</strong> — understand pregnancy symptoms, scans, tests, and appointments.<br />
            <strong style={{ color: 'var(--navy)' }}>After birth</strong> — understand baby behaviour, common concerns, and when something needs attention.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* ─── PROBLEM ─── */}
      <section className="section">
        <div className="wrap t-center">
          <div className="eyebrow">The problem</div>
          <h2 className="heading" style={{ maxWidth: '600px', margin: '0 auto 14px' }}>
            Nobody really prepares dads<br />for the in-between moments.
          </h2>
          <p className="subtext" style={{ maxWidth: '540px', margin: '0 auto' }}>
            Not the emergencies. The moments where you&apos;re stuck asking:<br />
            <em>Is this normal? Should we wait or call? What does this report mean? Is the baby okay? Am I overreacting or missing something?</em>
          </p>

          <div className="problem-grid">
            <div className="prob-card reveal">
              <div className="prob-icon">🤰</div>
              <h3>During pregnancy</h3>
              <p>Your partner has a symptom, pain, report, or scan result — and you don&apos;t know what it means or how concerned to be.</p>
            </div>
            <div className="prob-card reveal">
              <div className="prob-icon">👶</div>
              <h3>After birth</h3>
              <p>The baby is crying, feeding oddly, pooping strangely, sleeping weirdly, or just seems off — and Google makes it worse.</p>
            </div>
            <div className="prob-card reveal">
              <div className="prob-icon">🩺</div>
              <h3>At appointments</h3>
              <p>You want to ask the right questions, understand the answers, and actually be useful — not just nod along.</p>
            </div>
            <div className="prob-card reveal">
              <div className="prob-icon">👨</div>
              <h3>As a dad</h3>
              <p>Most advice isn&apos;t written for your role — what to notice, what to ask, what to track, and how to help.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="section section-alt" id="how-it-works">
        <div className="wrap t-center">
          <div className="eyebrow">How it works</div>
          <h2 className="heading" style={{ maxWidth: '560px', margin: '0 auto 14px' }}>
            Open the app. Ask what&apos;s happening.<br />Know what to do next.
          </h2>

          <div className="steps">
            <div className="step reveal">
              <div className="step-num">1</div>
              <h3>Set your stage</h3>
              <p>Tell Dadly whether you&apos;re expecting or already have the baby, plus your week, baby age, and any relevant context. One minute.</p>
            </div>
            <div className="step reveal">
              <div className="step-num">2</div>
              <h3>Ask about mom or baby</h3>
              <p>Chat about a symptom, upload a report, check your weekly brief, or prepare for a doctor visit.</p>
            </div>
            <div className="step reveal">
              <div className="step-num">3</div>
              <h3>Get calm, practical guidance</h3>
              <p>Understand what may be normal, what to watch for, and when to seek medical help — without the spiral.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURES GRID ─── */}
      <section className="section" id="features">
        <div className="wrap t-center">
          <div className="eyebrow">What Dadly does</div>
          <h2 className="heading" style={{ maxWidth: '600px', margin: '0 auto 14px' }}>
            Built for both sides of the journey —<br />pregnancy and newborn life.
          </h2>
          <p className="subtext" style={{ maxWidth: '520px', margin: '0 auto' }}>
            Dadly is not just a pregnancy app and not just a baby app. It helps dads across the full transition into fatherhood.
          </p>

          <div className="feat-grid">
            {[
              { icon: '💬', title: 'Ask about symptoms', desc: 'Get clear answers when your partner feels off during pregnancy or when your baby seems unwell after birth.' },
              { icon: '🧾', title: 'Understand reports and scans', desc: 'Upload ultrasounds, blood tests, stool tests, prescriptions, and notes. Dadly explains them in plain English.' },
              { icon: '📅', title: 'Get weekly guidance', desc: 'Know what\'s happening this week in pregnancy or this month with your baby — and what matters right now.' },
              { icon: '🩺', title: 'Prepare for doctor visits', desc: 'Walk in knowing what to ask, what to mention, and what not to forget.' },
              { icon: '🧠', title: 'Advice that remembers your context', desc: 'Dadly uses your pregnancy stage, baby age, and past context so answers feel relevant, not generic.' },
              { icon: '🌙', title: 'Made for 2am moments', desc: 'When you can\'t think clearly, can\'t reach someone, or don\'t want to spiral online — Dadly helps you steady yourself.' },
            ].map((f) => (
              <div key={f.title} className="feat-card reveal">
                <div className="feat-icon-wrap">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SPLIT: CHAT ─── */}
      <section className="section section-alt">
        <div className="wrap">
          <div className="split">
            <div className="split-text reveal">
              <span className="pill">2am Companion</span>
              <h2>When something feels off,<br />ask Dadly first.</h2>
              <p>Whether it&apos;s your partner&apos;s pain during pregnancy, a confusing symptom, or your baby acting differently than usual, Dadly helps you understand what may be going on and what deserves attention.</p>
              <ul className="check-list">
                <li><CheckIcon /> Ask about mom during pregnancy</li>
                <li><CheckIcon /> Ask about baby after birth</li>
                <li><CheckIcon /> Understand what may be normal vs concerning</li>
                <li><CheckIcon /> Fast follow-up questions that narrow things down</li>
              </ul>
            </div>
            <div className="split-phone reveal">
              <div className="split-phone-frame">
                <Image src="/assets/dadly-chat.webp" alt="Dadly Smart Chat interface" width={603} height={1311} loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SPLIT: BRIEF ─── */}
      <section className="section">
        <div className="wrap">
          <div className="split flip">
            <div className="split-text reveal">
              <span className="pill">Weekly Guidance</span>
              <h2>Know what matters this week —<br />before and after birth.</h2>
              <p>Dadly gives you a personalised brief based on where you are in the journey. During pregnancy, it helps you understand what&apos;s happening with mom and baby this week. After birth, it helps you understand what&apos;s changing in your baby&apos;s development.</p>
              <ul className="check-list">
                <li><CheckIcon /> Personalised by pregnancy week or baby age</li>
                <li><CheckIcon /> Clear priorities, not information overload</li>
                <li><CheckIcon /> Helps you stay ahead instead of reacting late</li>
                <li><CheckIcon /> Makes you more useful day to day</li>
              </ul>
            </div>
            <div className="split-phone reveal">
              <div className="split-phone-frame">
                <Image src="/assets/dadly-brief.webp" alt="Dadly weekly brief showing Week 9 guidance" width={603} height={1311} loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SPLIT: REPORTS ─── */}
      <section className="section section-alt">
        <div className="wrap">
          <div className="split">
            <div className="split-text reveal">
              <span className="pill">Reports &amp; Scans</span>
              <h2>Medical language,<br />translated for dads.</h2>
              <p>Scans, blood tests, prescriptions, and doctor notes can be hard to interpret when you&apos;re stressed. Dadly explains what the document is for, what it seems to say, what looks reassuring, and what may need follow-up.</p>
              <ul className="check-list">
                <li><CheckIcon /> Understand reports for mom during pregnancy</li>
                <li><CheckIcon /> Understand reports for baby after birth</li>
                <li><CheckIcon /> Clear summary in plain English</li>
                <li><CheckIcon /> Suggested follow-up questions for your doctor</li>
              </ul>
            </div>
            <div className="split-phone reveal">
              <div className="split-phone-frame">
                <Image src="/assets/dadly-analysis.webp" alt="Dadly medical report analysis" width={603} height={1311} loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SPLIT: CUSTOMISE ─── */}
      <section className="section">
        <div className="wrap">
          <div className="split flip">
            <div className="split-text reveal">
              <span className="pill">Your Situation</span>
              <h2>Advice that fits your family,<br />not just a generic scenario.</h2>
              <p>Pregnancy history, monitored conditions, baby age, and prior reports all change what advice is helpful. Dadly keeps that context in mind so answers feel grounded in your reality.</p>
              <ul className="check-list">
                <li><CheckIcon /> Pregnancy context for mom</li>
                <li><CheckIcon /> Baby-age-aware guidance after birth</li>
                <li><CheckIcon /> Uses prior history and earlier reports</li>
                <li><CheckIcon /> More relevant answers, less noise</li>
              </ul>
            </div>
            <div className="split-phone reveal">
              <div className="split-phone-frame">
                <Image src="/assets/dadly-customise.webp" alt="Dadly situation customisation screen" width={603} height={1311} loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="section section-alt">
        <div className="wrap t-center">
          <div className="eyebrow">What dads are saying</div>
          <h2 className="heading" style={{ maxWidth: '440px', margin: '0 auto' }}>From the dads who use it at 2am.</h2>

          <div className="testi-grid">
            {[
              {
                initial: 'M', name: 'Marcus T.', role: 'Expecting dad, week 28',
                quote: '"At 1:30am my wife had sudden tightness and I didn\'t know whether to panic or let her rest. Dadly helped me understand what to watch and what would make it worth calling the doctor."',
              },
              {
                initial: 'J', name: 'James K.', role: 'Expecting dad, week 14',
                quote: '"We got a report back and I was lost reading the numbers. Dadly broke it down in simple words and gave me good questions for the next appointment."',
              },
              {
                initial: 'R', name: 'Rahul S.', role: 'Dad of a 2-month-old',
                quote: '"Our baby\'s poop changed and I had no clue if it was normal. Dadly helped me think clearly instead of doom-searching."',
              },
            ].map((t) => (
              <div key={t.name} className="testi-card reveal">
                <div className="testi-stars">★★★★★</div>
                <blockquote>{t.quote}</blockquote>
                <div className="testi-author">
                  <div className="testi-avatar">{t.initial}</div>
                  <div>
                    <div className="testi-name">{t.name}</div>
                    <div className="testi-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FROM THE BLOG ─── */}
      <section className="section">
        <div className="wrap t-center">
          <div className="eyebrow">From the Dadly blog</div>
          <h2 className="heading" style={{ maxWidth: '520px', margin: '0 auto 14px' }}>
            Guides written for dads,<br />not the couple.
          </h2>
          <p className="subtext" style={{ maxWidth: '460px', margin: '0 auto 32px' }}>
            Practical articles on pregnancy symptoms, newborn life, mental health, and the delivery room — written from the dad&apos;s perspective.
          </p>
          <div className="feat-grid" style={{ textAlign: 'left' }}>
            {featuredBlogs.map((blog) => (
              <TrackingLink
                key={blog!.slug}
                href={`/blog/${blog!.slug}`}
                location={`homepage_blog_${blog!.slug}`}
                page="Dadly Homepage"
                className="feat-card reveal"
                style={{ textDecoration: 'none', display: 'block' }}
              >
                <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '8px' }}>{blog!.category}</div>
                <h3 style={{ fontSize: '15px', lineHeight: 1.4, marginBottom: '8px' }}>{blog!.title}</h3>
                <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0 }}>{blog!.readTime} read →</p>
              </TrackingLink>
            ))}
          </div>
          <div style={{ marginTop: '28px' }}>
            <TrackingLink href="/blog" location="homepage_blog_all" page="Dadly Homepage" className="btn-dark" style={{ display: 'inline-flex', fontSize: '15px', padding: '13px 28px' }}>
              Read all guides →
            </TrackingLink>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="section section-alt" id="faq">
        <div className="wrap">
          <div className="eyebrow" style={{ textAlign: 'center' }}>Common questions</div>
          <h2 className="heading" style={{ maxWidth: '540px', margin: '0 auto 36px', textAlign: 'center' }}>
            Questions dads ask about Dadly
          </h2>
          <div style={{ maxWidth: '680px', margin: '0 auto' }}>
            {homepageFaqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: '1px solid var(--rule)', padding: '20px 0' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '10px', lineHeight: 1.4 }}>{faq.q}</h3>
                <p style={{ fontSize: '15px', color: 'var(--muted)', margin: 0, lineHeight: 1.7 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section className="section" id="pricing">
        <div className="wrap t-center">
          <div className="eyebrow">Pricing</div>
          <h2 className="heading" style={{ maxWidth: '520px', margin: '0 auto 12px' }}>
            A small monthly cost for<br />a much steadier dad.
          </h2>
          <p className="subtext" style={{ maxWidth: '460px', margin: '0 auto' }}>
            For less than the cost of one impulsive online order, Dadly helps you handle pregnancy and newborn uncertainty with more clarity and less panic.
          </p>

          <div className="pricing-wrap">
            <div className="pricing-card reveal">
              <div className="pricing-badge">Everything included</div>
              <div className="pricing-price"><sup>$</sup>4.99</div>
              <div className="pricing-period">per month · cancel anytime</div>
              <ul className="p-list">
                <li>Unlimited chat for pregnancy and newborn questions</li>
                <li>Weekly brief based on your stage</li>
                <li>Report and scan analysis</li>
                <li>Doctor visit prep</li>
                <li>Context-aware answers across mom and baby</li>
                <li>Always there for late-night questions</li>
              </ul>
              <TrackingLink href="/waitlist" location="pricing_card" page="Dadly Homepage" className="btn-gold">
                Start your free trial
              </TrackingLink>
              <p className="pricing-note">7-day free trial · Cancel anytime</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <div className="divider" />
      <section className="final-cta">
        <div className="wrap">
          <h2>Be the dad who stays calm<br />when things feel uncertain.</h2>
          <p>From pregnancy symptoms to newborn worries, Dadly helps you understand what&apos;s happening and what to do next.</p>
          <div className="store-badges">
            <TrackingLink href="/waitlist" location="final_cta" page="Dadly Homepage" className="btn-dark" style={{ display: 'inline-flex', fontSize: '16px', padding: '15px 32px' }}>
              Try Dadly free <ArrowIcon />
            </TrackingLink>
          </div>
        </div>
      </section>

      {/* ─── SCROLL REVEAL ─── */}
      <ScrollReveal />
    </>
  )
}
