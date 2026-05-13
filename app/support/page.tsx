import type { Metadata } from 'next'
import { PageViewTracker } from '@/components/PageViewTracker'

export const metadata: Metadata = {
  title: 'Support & FAQ | Dadly',
  description: 'Get help with Dadly — what we are and aren\'t, AI accuracy, data privacy, subscriptions, and how to reach us.',
  alternates: { canonical: 'https://dadlyapp.com/support' },
}

export default function SupportPage() {
  return (
    <main className="prose-page">
      <PageViewTracker event="Support Page Viewed" />

      <h1>Support &amp; FAQ</h1>

      <p style={{ color: 'var(--muted)', fontSize: '14px', marginBottom: '32px' }}>
        Can&apos;t find what you&apos;re looking for?{' '}
        <a href="mailto:support@dadlyapp.com">Email us</a> — we typically reply within 24 hours.
      </p>

      {/* ── MEDICAL DISCLAIMER BANNER ── */}
      <div style={{
        background: 'var(--gold-bg)',
        border: '1.5px solid var(--gold-border)',
        borderRadius: '12px',
        padding: '20px 24px',
        marginBottom: '40px',
      }}>
        <p style={{ fontWeight: 700, marginBottom: '8px', color: 'var(--navy)' }}>
          ⚠️ Dadly does not provide medical advice.
        </p>
        <p style={{ marginBottom: 0, fontSize: '14px', color: 'var(--navy)' }}>
          Dadly is an informational companion — not a doctor, midwife, or medical service.
          If you or your partner have a medical concern, please contact your healthcare
          provider, call your local maternity unit, or in an emergency dial 999 (UK) / 911 (US).
        </p>
      </div>

      {/* ──────────────────────────────────────
          ABOUT DADLY
      ────────────────────────────────────── */}
      <h2>What is Dadly?</h2>
      <p>
        Dadly is a 24/7 AI companion built specifically for expecting and new dads.
        It answers your questions about pregnancy and newborn care in plain English —
        no jargon, no judgment — whether it&apos;s 2pm or 2am.
      </p>
      <p>
        You can ask Dadly things like &quot;What does a 20-week scan actually look for?&quot; or
        &quot;My partner is 34 weeks and says the baby is moving less — what should we do?&quot; and
        get a calm, clear explanation drawn from established medical literature and
        parenting guidance.
      </p>

      <h2>What Dadly is NOT</h2>
      <p>
        Dadly is <strong>not</strong> a substitute for professional medical care. Specifically:
      </p>
      <ul>
        <li>Dadly does not diagnose medical conditions.</li>
        <li>Dadly does not prescribe or recommend treatments or medications.</li>
        <li>Dadly is not staffed by doctors, midwives, or registered nurses.</li>
        <li>Dadly is not regulated as a medical device.</li>
        <li>
          Dadly is not an emergency service. If you have a medical emergency, call
          999 (UK), 112 (EU), or 911 (US) immediately.
        </li>
      </ul>
      <p>
        When something sounds urgent — reduced fetal movement, bleeding, severe pain,
        or anything that worries you — Dadly will always tell you to contact your
        healthcare team. Please do.
      </p>

      {/* ──────────────────────────────────────
          AI & ACCURACY
      ────────────────────────────────────── */}
      <h2>How does the AI work?</h2>
      <p>
        When you ask Dadly a question, your message is sent to a large language model
        (LLM) — an AI system trained on a large body of text including medical literature,
        parenting guides, and general knowledge. The AI generates a response that Dadly
        presents to you.
      </p>
      <p>
        Dadly uses commercial AI API services. We currently work with providers such as
        OpenAI and Anthropic. Your message content is processed by these providers to
        generate your answer. Please see our{' '}
        <a href="/privacy">Privacy Policy — Section 4</a> for full details on what this
        means for your data.
      </p>

      <h2>How accurate is the AI?</h2>
      <p>
        Dadly&apos;s AI draws on well-established pregnancy and newborn guidance and is
        designed to give clear, balanced, and up-to-date information. However, like all
        AI systems, it can make mistakes. It may:
      </p>
      <ul>
        <li>Occasionally produce information that is outdated or imprecise</li>
        <li>Miss context specific to your partner&apos;s individual health situation</li>
        <li>Misinterpret an ambiguous question</li>
      </ul>
      <p>
        Always verify important health information with your midwife, obstetrician,
        GP, or other qualified healthcare provider. Dadly is a starting point for
        understanding — not the final word.
      </p>

      <h2>Does my data get used to train AI models?</h2>
      <p>
        We access AI models through their APIs (not consumer products). At the API level,
        providers such as OpenAI and Anthropic commit by default not to use your data to
        train or improve their models. We do not use your conversations to train any AI
        models ourselves.
      </p>
      <p>
        For full details, please read our{' '}
        <a href="/privacy">Privacy Policy</a> and the data usage policies of our
        AI providers:
      </p>
      <ul>
        <li>
          <a href="https://openai.com/policies/api-data-usage-policies" target="_blank" rel="noopener noreferrer">
            OpenAI API Data Usage Policy ↗
          </a>
        </li>
        <li>
          <a href="https://www.anthropic.com/legal/privacy" target="_blank" rel="noopener noreferrer">
            Anthropic Privacy Policy ↗
          </a>
        </li>
      </ul>

      <h2>Should I upload my scan reports?</h2>
      <p>
        You can upload scan reports or medical letters and Dadly will explain them in
        plain English. A few things to keep in mind:
      </p>
      <ul>
        <li>
          The content of uploads is sent to our AI provider to generate an explanation.
          If you&apos;re concerned about privacy, consider summarising the key findings
          in your own words instead of uploading the full document.
        </li>
        <li>
          Dadly&apos;s explanation is for general understanding only. It is not a clinical
          interpretation. Discuss the results with your healthcare team.
        </li>
        <li>
          Uploaded documents are automatically deleted after 12 months. You can also
          delete them manually at any time from your account settings.
        </li>
      </ul>

      {/* ──────────────────────────────────────
          ACCOUNT & SUBSCRIPTION
      ────────────────────────────────────── */}
      <h2>How do I cancel my subscription?</h2>
      <p>
        You can cancel at any time — no fees, no questions asked.
      </p>
      <ul>
        <li>
          <strong>iOS:</strong> Go to your iPhone Settings → Apple ID → Subscriptions →
          Dadly → Cancel Subscription.
        </li>
        <li>
          <strong>Android:</strong> Open the Google Play Store → tap your profile icon →
          Payments &amp; subscriptions → Subscriptions → Dadly → Cancel.
        </li>
      </ul>
      <p>
        Your access continues until the end of your current billing period. If you have
        any trouble cancelling, email{' '}
        <a href="mailto:support@dadlyapp.com">support@dadlyapp.com</a> and we&apos;ll sort
        it out for you.
      </p>

      <h2>Can I get a refund?</h2>
      <p>
        Refunds for in-app purchases are handled by Apple or Google, depending on where
        you subscribed. You can request a refund through:
      </p>
      <ul>
        <li>
          <strong>Apple:</strong>{' '}
          <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">
            reportaproblem.apple.com ↗
          </a>
        </li>
        <li>
          <strong>Google:</strong> Google Play Store → Order history → request a refund
        </li>
      </ul>
      <p>
        If you believe you were charged in error, contact us at{' '}
        <a href="mailto:support@dadlyapp.com">support@dadlyapp.com</a> and we will
        do everything we can to help.
      </p>

      <h2>How do I delete my account?</h2>
      <p>
        Go to <strong>Settings → Account → Delete Account</strong> inside the Dadly app.
        This permanently deletes your account, conversations, and uploaded documents.
        This action cannot be undone after the 90-day recovery window expires.
      </p>
      <p>
        Alternatively, email <a href="mailto:support@dadlyapp.com">support@dadlyapp.com</a>{' '}
        with the subject line &quot;Delete My Account&quot; and we will process the deletion
        within 5 business days.
      </p>

      <h2>Can I export or download my data?</h2>
      <p>
        Yes. Email <a href="mailto:support@dadlyapp.com">support@dadlyapp.com</a> with
        the subject line &quot;Data Export Request.&quot; We will provide your data in a
        standard, machine-readable format within 30 days. This includes your conversation
        history, account information, and any uploaded documents still within the retention
        period.
      </p>

      {/* ──────────────────────────────────────
          TROUBLESHOOTING
      ────────────────────────────────────── */}
      <h2>The app isn&apos;t working — what should I do?</h2>
      <p>
        Try these steps first:
      </p>
      <ul>
        <li>Force-close the app and reopen it</li>
        <li>Check you have a stable internet connection</li>
        <li>Update to the latest version of Dadly from the App Store or Google Play</li>
        <li>Restart your phone</li>
      </ul>
      <p>
        If the problem persists, email <a href="mailto:support@dadlyapp.com">support@dadlyapp.com</a>{' '}
        and include your device model, OS version, and a description of what&apos;s happening.
        Screenshots or screen recordings are very helpful.
      </p>

      <h2>I forgot my password — how do I reset it?</h2>
      <p>
        On the login screen, tap <strong>&quot;Forgot password?&quot;</strong> and enter your
        email address. We&apos;ll send you a reset link within a few minutes. Check your spam
        folder if it doesn&apos;t arrive. If you signed up with Apple or Google, use that
        login method instead — there is no separate password to reset.
      </p>

      {/* ──────────────────────────────────────
          CONTACT
      ────────────────────────────────────── */}
      <h2>Get in touch</h2>
      <p>
        For all support enquiries, email us at{' '}
        <a href="mailto:support@dadlyapp.com">
          <strong>support@dadlyapp.com</strong>
        </a>
        . We aim to respond within 24 hours on weekdays.
      </p>
      <p>
        For privacy-specific requests (data access, deletion, correction), use the
        subject line <strong>&quot;Privacy Request&quot;</strong> and we will handle your
        request within 30 days as required by applicable law.
      </p>
    </main>
  )
}
