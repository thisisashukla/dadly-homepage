# Dadly Homepage — SEO Todo List
> Cross-referenced from the May 2026 SEO audit against actual codebase state.
> Prefix key: ✅ already done in code · ❌ missing · ⚠️ partial / needs improvement

---

## 🔴 Critical (Do First)

### 1. Fix & optimize title tags and meta descriptions
**File:** `app/layout.tsx`, `app/page.tsx`

The SEO audit flagged the title as not keyword-rich. Cross-checking the code confirms two additional issues the audit missed:
- Root layout title: `"Dadly — Clear answers for new and expecting dads"`
- OG title (different!): `"Dadly — Clear answers for dads, through pregnancy and newborn life"`
- These two are inconsistent with each other and neither targets keywords

**What to change:**
- Homepage `<title>`: `"Dadly: AI App for Expecting & New Dads | Pregnancy & Newborn Guide"`
- Homepage OG title: align with `<title>` above
- Blog index title is already decent (`"Blog — Guides for Expecting & New Dads | Dadly"`) — keep
- Review and rewrite meta descriptions for homepage to include "expecting dad", "newborn", "AI"

---

### 2. Add Organization + SoftwareApplication JSON-LD to homepage
**File:** `app/page.tsx`

The audit says "no schema markup" — this is partially wrong. Blog articles **do** have Article and FAQPage JSON-LD (already implemented). But the **homepage has zero structured data**. This is the real gap.

**What to add:**
```json
// SoftwareApplication schema
{
  "@type": "SoftwareApplication",
  "name": "Dadly",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "iOS, Android",
  "description": "AI companion for expecting and new dads",
  "offers": { "@type": "Offer", "price": "4.99", "priceCurrency": "USD" }
}

// Organization schema
{
  "@type": "Organization",
  "name": "Dadly",
  "url": "https://dadlyapp.com",
  "logo": "https://dadlyapp.com/og-image.png",
  "sameAs": ["App Store URL", "Play Store URL"]
}
```

---

### 3. Add FAQ section + FAQ schema to homepage
**File:** `app/page.tsx`

Homepage currently has no FAQ block — confirmed in code. The audit recommends 6–8 Q&As at the bottom targeting exact queries. This is one of the highest-ROI actions for a low-DA domain (can get into Google's PAA boxes).

**Questions to target:**
- "Is there an app for expecting dads?"
- "What's the best pregnancy app for dads?"
- "Can dads use pregnancy apps?"
- "Is there an AI app for new dads?"
- "What should I do as a first-time dad?"
- "How can I help my pregnant partner?"
- "Is there an app that answers baby questions at 3am?"
- "How much does Dadly cost?"

**Implementation:** Add visible FAQ accordion/list at the bottom of the page + inject `FAQPage` JSON-LD into `<head>`.

---

### 4. Fix the duplicate sitemap.xml and robots.txt files
**Files:** Root `sitemap.xml` + `robots.txt` AND `public/sitemap.xml` + `public/robots.txt`

The code explorer found both files exist in two places. Next.js serves static files from `/public/` — the root-level copies are likely ignored but create confusion and potential conflicts.

**What to do:**
- Delete `sitemap.xml` from the project root (keep only `public/sitemap.xml`)
- Delete `robots.txt` from the project root (keep only `public/robots.txt`)
- Verify the public versions are correct and contain the sitemap reference

---

### 5. Submit sitemap to Google Search Console and request indexing
**No code change needed — operational task**

The audit suspects this hasn't been done. The sitemap exists at `https://dadlyapp.com/sitemap.xml` but manual indexing requests haven't been submitted.

**What to do:**
- Go to Google Search Console → Sitemaps → submit `https://dadlyapp.com/sitemap.xml`
- Go to URL Inspection → request indexing for: homepage, blog index, and each of the 6 blog posts
- Set up GSC property if not already done

---

## 🟠 High Priority

### 6. Add OG image to blog article pages
**File:** `app/blog/[slug]/page.tsx`

The homepage has an OG image correctly set (`/og-image.png`). But the dynamic blog article metadata does **not** include an `images` field in the OpenGraph block — confirmed in the code. When blog posts are shared on social media or indexed by LLMs, they appear without a preview image.

**What to do:**
- Either use a shared fallback OG image for all blog posts, or
- Generate per-article OG images (using Next.js `ImageResponse` / `next/og`)
- Add `images: [{ url: 'https://dadlyapp.com/og-image.png', width: 1200, height: 630 }]` to the article OpenGraph block at minimum

---

### 7. Expand FAQs on all existing blog articles (from 1 to 5 per article)
**File:** `lib/blogs.ts` (FAQ data), plus each `content/blogs/*.tsx` (visible FAQ rendering)

The code confirms most articles have only **1 FAQ** in the schema (except the first post which has 5). The FAQPage JSON-LD is already wired up and will automatically include more Q&As if they're added to `lib/blogs.ts`.

**Per article, add 4–5 more FAQs targeting the PAA box questions for that topic. Current state:**
- `i-asked-ai-every-question-pregnancy` — 5 FAQs ✅ (good)
- `do-dads-get-postpartum-depression` — 1 FAQ ⚠️ (add 4 more)
- `how-to-bond-with-newborn-as-a-dad` — 1 FAQ ⚠️ (add 4 more)
- `new-dad-sleep-deprivation-survival-guide` — 1 FAQ ⚠️ (add 4 more)
- `what-to-expect-in-delivery-room-first-time-dad` — 1 FAQ ⚠️ (add 4 more)
- `real-cost-of-having-a-baby-first-time-dads` — 1 FAQ ⚠️ (add 4 more)

---

### 8. Add visible author credentials and E-E-A-T signals to blog posts
**File:** `app/blog/[slug]/page.tsx`, blog article components

The code does include `author` and `authorRole` in JSON-LD schema, and the article template shows author metadata. But the audit is correct that there are no visible E-E-A-T signals like "Reviewed by [OB name]" or a credential badge.

**What to add:**
- Add a visible "About the author" block at the end of each article: Ankur's credentials as data scientist + dad who navigated high-risk pregnancy
- Add a "Medically reviewed" badge section (even a note "For medical concerns, always consult your healthcare provider")
- Add cited sources at the bottom of health-related posts (links to NHS, Mayo Clinic, etc.)
- These changes matter for YMYL (Your Money Your Life) ranking treatment

---

### 9. Improve internal linking structure
**Files:** All blog `content/blogs/*.tsx` files, `app/page.tsx`

The existing "Related articles" grid at the bottom of each article is a start, but the audit is correct that there's no cross-linking **within body content**. PageRank gets trapped in isolated pages.

**What to do:**
- In each blog article body, add 2–3 contextual inline links to other articles where topics overlap
- On the homepage, add direct links to 3–4 cornerstone articles (not just the blog index)
- Create a "topic cluster" structure: e.g., the PPD article should link to the bonding article and the delivery room article
- Ensure every blog post has a text CTA with a link back to the homepage: "Questions at 2am? Try Dadly."

---

### 10. Add `llms.txt` to the site root
**File:** Create `public/llms.txt`

The audit recommends adding an `llms.txt` file for LLM crawlers (like ChatGPT's Bing integration and Perplexity). This is a new emerging standard.

**What to include:**
```
# Dadly
> AI-powered app for expecting and new dads. Covers pregnancy, newborn care, and medical report analysis.

## App
- Platform: iOS and Android
- Price: $4.99/month
- Core features: AI chat, pregnancy week guides, newborn milestones, medical scan analysis

## About
Dadly was built by a data scientist who navigated a high-risk pregnancy. It's the only dad-specific app with conversational AI, newborn coverage, and the ability to explain medical reports in plain English.

## Blog
- https://dadlyapp.com/blog — Guides for expecting and new dads
```

---

## 🟡 Medium Priority

### 11. Rewrite blog post H1s to include target keywords
**Files:** Each `content/blogs/*.tsx`

The audit notes that blog post H1s should include the primary keyword. This needs to be verified per post, but the general fix is: each article's H1 should match (or closely mirror) the target search query, not just a creative title.

**Example:** "I Asked AI Every Question During My High-Risk Pregnancy" could be prefixed or retitled to match "What to Ask AI During High-Risk Pregnancy: One Dad's Guide."

---

### 12. Add a TL;DR / key takeaways block at the top of each blog post
**Files:** Each `content/blogs/*.tsx`, blog article template

Google in 2026 rewards pages with structured summaries near the top. Each blog post needs:
- A 3–5 bullet "Key Takeaways" or "TL;DR" block immediately after the intro paragraph
- This helps with Featured Snippet capture and keeps users on the page longer

---

### 13. Add a consistent CTA block at the bottom of every blog post
**File:** `app/blog/[slug]/page.tsx` (template level)

There should be a standardized conversion CTA at the end of every article, e.g.:
> "Questions at 2am? Dadly gives dads clear answers about pregnancy and newborn life. [Try Dadly free →]"

Check whether the current article template already includes this — if not, add it to the shared article layout so it applies to all posts automatically.

---

### 14. Update sitemap.xml when new pages are added
**File:** `public/sitemap.xml`

Currently the sitemap is a static XML file. As new blog posts are added, this file must be manually updated. Consider:
- Option A: Generate the sitemap dynamically using Next.js `app/sitemap.ts` (Next.js 15 supports this natively) and delete the static file
- Option B: Create a script that regenerates `public/sitemap.xml` from `lib/blogs.ts` as part of the build process

---

### 15. Add `hreflang` and language meta if India/multilingual content is planned
**File:** `app/layout.tsx`

The audit identifies India-specific content as a major opportunity. If any pages will be localized for Indian audiences (Hindi, different vaccine schedules, etc.), set up `hreflang` tags now before the content is built.

---

## 🟢 Content Work (SEO impact, but editorial effort)

### 16. Publish 10 new articles targeting P1 keywords (from audit list)
These are the highest-ROI articles per the audit — low KD, high volume, direct fit with Dadly's features:

| Priority | Article | KD | Why |
|----------|---------|-----|-----|
| P1 | "20-Week Anatomy Scan: A Dad's Complete Guide" | 15 | Promotes report analysis feature |
| P1 | "Baby Poop Color Chart: What Every New Dad Needs to Know" | 12 | Huge search volume |
| P1 | "Pelvic Girdle Pain at 3am: What Dads Need to Know" | 18 | Direct 2am use case match |
| P1 | "Why Is My Newborn Grunting? Normal vs. Concerning" | 10 | High mobile search intent |
| P1 | "Hospital Bag Checklist for Dad" | 14 | High volume, time-sensitive |
| P1 | "Week 28 Pregnancy — The Dad's Guide" (template) | 8 | Programmatic seed article |
| P2 | "Group B Strep (GBS) Positive: What Dads Should Know" | 16 | Late pregnancy, report feature tie-in |
| P2 | "Paternal Anxiety During Pregnancy: Why Dads Worry" | 20 | Brand positioning + E-E-A-T |
| P2 | "Best Apps for Expecting Dads in 2026 — Honest Comparison" | 11 | Comparison page, LLM citation magnet |
| P2 | "3-Month-Old Baby: What Every New Dad Should Know" | 9 | Programmatic seed article |

Each new article must include: keyword in H1, 5 FAQs with FAQ schema, author byline, TL;DR block, internal links to 2 existing articles, and a Dadly CTA at the bottom.

---

### 17. Build programmatic pregnancy week-by-week pages (40 pages)
**New route:** `app/pregnancy/week/[week]/page.tsx`

This is the single biggest long-tail SEO opportunity. No competitor has "pregnancy week X for dads" content. BabyCenter owns this for moms; nobody owns it for dads.

**Structure:**
- Route: `/pregnancy/week/1` through `/pregnancy/week/40`
- Template: What's happening with baby, what your partner feels, what dad should do, what to ask at the next appointment
- Add all 40 pages to `sitemap.xml`
- Seed with 5–10 key weeks first (6, 8, 12, 20, 28, 32, 36, 38, 40), then fill in the rest

---

### 18. Build programmatic baby month-by-month pages (12 pages)
**New route:** `app/baby/month/[month]/page.tsx`

Same play as pregnancy weeks, for the post-birth side. "3 month old baby dad's guide" etc.

---

### 19. Create a "Best Apps for Expecting Dads" comparison page
**New route:** `app/blog/best-apps-for-expecting-dads/page.tsx`

This is simultaneously: an SEO page, an LLM citation magnet, a backlink attractor, and a conversion page. Per the audit, "Best X" listicles are the most cited page type in ChatGPT responses (43.8% of all citations). Write it fairly, include all competitors from the audit table, and let Dadly win on AI + newborn coverage.

---

## 🔵 Off-Site & Distribution (No code changes)

### 20. Participate in r/predaddit and r/daddit — earn 5 genuine contributions first
Per the audit: don't promote, participate. Answer real questions with genuine help, no link. After 5–10 genuine contributions, share your authentic story. Your credibility (data scientist, high-risk pregnancy, built an app for it) is a perfect Reddit narrative.

### 21. Pitch 1 parenting journalist or blogger for a feature/mention
Target: fatherly.com, daddilife.com, or a parenting tech journalist. Even one quality backlink from a relevant domain moves DA more than 50 new pages. Your "built this because of my own high-risk pregnancy" angle is a real story.

### 22. Get listed on G2, Capterra, or a parenting app directory
Even 5–10 genuine reviews on a third-party platform are strong LLM trust signals. This is one of the fastest ways to start appearing in AI-generated recommendations.

### 23. Create 2–3 YouTube videos about Dadly
Per the audit, YouTube mentions are the single strongest predictor of AI brand visibility (Ahrefs 75K-brand study). Even a short "I built this app because..." founder story video + one product walkthrough would dramatically increase LLM citation probability.

### 24. Test Dadly visibility across LLMs monthly
Ask ChatGPT, Claude, Perplexity, and Gemini:
- "What's the best app for expecting dads?"
- "Is there an AI app for new dads?"
- "What app should I get during my wife's pregnancy?"
Document results. Gaps = content priorities.

---

## ✅ Already Done (Cross-checked against code — do NOT re-do)

- ✅ **Article and FAQPage JSON-LD on all 6 blog posts** — implemented in `app/blog/[slug]/page.tsx`
- ✅ **OpenGraph and Twitter Card meta tags** — set on all pages
- ✅ **Clean blog URL slugs** — `/blog/do-dads-get-postpartum-depression` format confirmed
- ✅ **Canonical URLs on all pages** — confirmed in all metadata exports
- ✅ **www → non-www redirect** — implemented in `middleware.ts`
- ✅ **Old URL redirects** — `/blogs/` → `/blog/` etc. in `next.config.ts`
- ✅ **Sitemap.xml with priorities** — exists at `public/sitemap.xml` with 10 URLs
- ✅ **robots.txt with sitemap reference** — exists at `public/robots.txt`
- ✅ **Published/Modified dates in article schema** — confirmed in JSON-LD blocks
- ✅ **Author attribution in schema** — confirmed (name + jobTitle)
- ✅ **Keywords array on blog articles** — confirmed in `BlogMeta` interface
- ✅ **Breadcrumb navigation on articles** — confirmed in article template
- ✅ **Related articles grid** — present in blog article pages
- ✅ **Mixpanel analytics with scroll depth tracking** — confirmed in `lib/mixpanel.ts`

---

*Generated: May 2026 · Source: dadly-seo-analysis.html audit + dadly-homepage/ codebase review*
