import type { Metadata } from 'next'
import { PageViewTracker } from '@/components/PageViewTracker'

export const metadata: Metadata = {
  title: 'Privacy Policy | Dadly',
  description: 'How Dadly collects, uses, and protects your personal and health information — including our use of AI language models.',
  alternates: { canonical: 'https://dadlyapp.com/privacy' },
}

export default function PrivacyPage() {
  return (
    <main className="prose-page">
      <PageViewTracker event="Privacy Page Viewed" />

      <h1>Privacy Policy</h1>

      <p style={{ color: 'var(--muted)', fontSize: '14px' }}>
        Last updated: May 13, 2025 &nbsp;·&nbsp; Effective: May 13, 2025
      </p>

      {/* ── NOT MEDICAL ADVICE BANNER ── */}
      <div style={{
        background: 'var(--gold-bg)',
        border: '1.5px solid var(--gold-border)',
        borderRadius: '12px',
        padding: '20px 24px',
        margin: '32px 0',
      }}>
        <p style={{ fontWeight: 700, marginBottom: '8px', color: 'var(--navy)' }}>
          ⚠️ Dadly does not provide medical advice.
        </p>
        <p style={{ marginBottom: 0, fontSize: '14px', color: 'var(--navy)' }}>
          Dadly provides plain-English information about pregnancy and childbirth to help
          expecting and new dads feel informed and prepared. Nothing in the app or on this
          website constitutes medical advice, diagnosis, or treatment. Always consult a
          qualified healthcare professional for any medical concerns.
        </p>
      </div>

      <h2>1. Who We Are</h2>
      <p>
        Dadly (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is a mobile application and companion service
        designed for expecting and new fathers. We help dads understand what&apos;s happening
        during pregnancy and in the newborn stage — in plain English, without jargon, at
        any hour of the day.
      </p>
      <p>
        You can reach us at <a href="mailto:support@dadlyapp.com">support@dadlyapp.com</a> with
        any privacy questions.
      </p>

      <h2>2. Information We Collect</h2>
      <p>We collect information you provide directly and information generated as you use the app.</p>

      <h3 style={{ fontSize: '1rem', fontWeight: 700, marginTop: '24px', marginBottom: '8px' }}>
        Account information
      </h3>
      <ul>
        <li>Name and email address</li>
        <li>Password (stored as a one-way hash — never in plain text)</li>
        <li>Sign-in method (email/password or third-party login such as Apple or Google)</li>
      </ul>

      <h3 style={{ fontSize: '1rem', fontWeight: 700, marginTop: '24px', marginBottom: '8px' }}>
        Pregnancy &amp; baby information
      </h3>
      <ul>
        <li>Due date or birth date</li>
        <li>Pregnancy stage or baby&apos;s current age</li>
        <li>Any additional context you choose to share (e.g. twin pregnancy, specific health conditions you mention in conversation)</li>
      </ul>

      <h3 style={{ fontSize: '1rem', fontWeight: 700, marginTop: '24px', marginBottom: '8px' }}>
        Conversations and uploads
      </h3>
      <ul>
        <li>Questions and messages you send to Dadly&apos;s AI assistant</li>
        <li>Documents or scan reports you choose to upload (e.g. ultrasound reports, blood-test results) for plain-English explanation</li>
        <li>AI-generated responses to your queries</li>
      </ul>

      <h3 style={{ fontSize: '1rem', fontWeight: 700, marginTop: '24px', marginBottom: '8px' }}>
        Usage and device data
      </h3>
      <ul>
        <li>App usage events (e.g. screens visited, features used) via Mixpanel analytics</li>
        <li>Device type, operating system version, and app version</li>
        <li>Crash logs and error reports to help us fix bugs</li>
        <li>IP address (used for fraud prevention and approximate region detection; not stored long-term)</li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <p>We use your information to:</p>
      <ul>
        <li>Provide and personalise the Dadly experience — including contextual answers tailored to your pregnancy stage or baby&apos;s age</li>
        <li>Explain documents you upload in plain English</li>
        <li>Send weekly briefs and service notifications (you can opt out at any time)</li>
        <li>Improve app quality, fix bugs, and develop new features based on aggregated, anonymised usage patterns</li>
        <li>Maintain account security and detect abuse</li>
        <li>Comply with legal obligations</li>
      </ul>
      <p>
        We do <strong>not</strong> sell your personal information to third parties.
        We do <strong>not</strong> use your data for advertising targeting or share it
        with advertising networks.
      </p>

      <h2>4. AI &amp; Language Model Providers</h2>

      <div style={{
        background: '#f0f4ff',
        border: '1.5px solid #c7d2fe',
        borderRadius: '12px',
        padding: '20px 24px',
        margin: '24px 0',
      }}>
        <p style={{ fontWeight: 700, marginBottom: '8px', color: 'var(--navy)' }}>
          Important: Your conversations are processed by third-party AI providers.
        </p>
        <p style={{ fontSize: '14px', marginBottom: 0, color: 'var(--navy)' }}>
          When you ask Dadly a question or upload a document, the content of that
          message is sent to a third-party large language model (LLM) provider to
          generate a response. We use API-level access to these services, which means
          your data is governed by their API data policies — not their consumer product policies.
        </p>
      </div>

      <p>
        Dadly currently uses AI services from providers that may include{' '}
        <a href="https://openai.com/policies/api-data-usage-policies" target="_blank" rel="noopener noreferrer">OpenAI</a>
        {' '}and/or{' '}
        <a href="https://www.anthropic.com/legal/privacy" target="_blank" rel="noopener noreferrer">Anthropic</a>.
        We will update this list if our providers change.
      </p>

      <p>What this means for you:</p>
      <ul>
        <li>
          <strong>API-only access.</strong> We access these models through their APIs,
          not through consumer products. At the API level, providers such as OpenAI and
          Anthropic contractually commit to not using your data to train their models
          by default. Please review their respective API data usage policies for the
          authoritative terms.
        </li>
        <li>
          <strong>Minimise what you share.</strong> We recommend you avoid sharing
          full names, addresses, or NHS / insurance numbers in your messages.
          Describe your situation in general terms — e.g. &quot;my partner&apos;s 20-week scan
          showed a low-lying placenta&quot; — rather than uploading unredacted documents
          if you are concerned about privacy.
        </li>
        <li>
          <strong>Conversation storage.</strong> We store your conversation history
          on our servers so the AI can provide contextual, personalised responses
          across sessions. You can request deletion at any time (see Section 9).
        </li>
        <li>
          <strong>No re-identification.</strong> We do not attempt to re-identify
          anonymised data, and we do not combine your Dadly data with external
          data sets to build marketing profiles.
        </li>
      </ul>

      <h2>5. Health Information</h2>
      <p>
        Dadly collects information that relates to health and pregnancy. We treat this
        data with the highest level of care. Specifically:
      </p>
      <ul>
        <li>Health-related data is encrypted at rest (AES-256) and in transit (TLS 1.2+)</li>
        <li>Access to health data is restricted to staff who need it to operate the service</li>
        <li>We do not share health data with insurers, employers, pharmaceutical companies, or data brokers</li>
        <li>We do not use your health data to build advertising profiles</li>
      </ul>
      <p>
        <strong>Dadly is not a covered entity under HIPAA</strong> (the U.S. Health
        Insurance Portability and Accountability Act) because we are not a healthcare
        provider, health plan, or healthcare clearinghouse. However, we voluntarily apply
        healthcare-grade data handling practices to all health-related information you share.
      </p>
      <p>
        Dadly is not regulated as a medical device by the FDA, MHRA, or any other
        regulatory body. It is an informational and educational tool only.
      </p>

      <h2>6. Data Sharing</h2>
      <p>We share your data only in these limited circumstances:</p>
      <ul>
        <li>
          <strong>AI providers</strong> — as described in Section 4, your message content
          is sent to LLM providers to generate responses.
        </li>
        <li>
          <strong>Infrastructure providers</strong> — we use cloud hosting, databases, and
          analytics services (such as Mixpanel and Vercel) to run the app. These providers
          process data only on our behalf and under strict data processing agreements.
        </li>
        <li>
          <strong>Legal requirements</strong> — we may disclose data if required by a valid
          court order, subpoena, or applicable law, or to protect the safety of users or the public.
        </li>
        <li>
          <strong>Business transfers</strong> — if Dadly is acquired or merges with another
          company, your data may be transferred as part of that transaction. We will notify
          you via email or in-app notice and give you the option to delete your account
          before the transfer takes effect.
        </li>
      </ul>
      <p>
        We <strong>do not</strong> sell, rent, or trade your personal information.
      </p>

      <h2>7. Cookies &amp; Analytics</h2>
      <p>
        Our website uses minimal cookies for session management. The app uses{' '}
        <strong>Mixpanel</strong> to collect anonymous usage events (e.g. &quot;onboarding
        completed,&quot; &quot;question asked&quot;). These events do not include the content of
        your messages. You can opt out of analytics tracking in app settings.
      </p>

      <h2>8. Data Retention</h2>
      <p>
        We retain your account data for as long as your account is active, plus a
        90-day grace period after deletion to allow account recovery. After that,
        data is permanently deleted from our systems within 30 days.
      </p>
      <p>
        Anonymised, aggregated usage statistics (which cannot identify you) may be
        retained indefinitely to help us improve the product.
      </p>
      <p>
        Uploaded documents (e.g. scan reports) are stored for 12 months and then
        automatically deleted, unless you delete them earlier.
      </p>

      <h2>9. Your Rights &amp; Choices</h2>
      <p>Depending on where you live, you may have the following rights:</p>
      <ul>
        <li><strong>Access</strong> — request a copy of the personal data we hold about you</li>
        <li><strong>Correction</strong> — ask us to correct inaccurate or incomplete data</li>
        <li><strong>Deletion</strong> — request deletion of your account and personal data</li>
        <li><strong>Portability</strong> — receive your data in a machine-readable format</li>
        <li><strong>Restriction</strong> — ask us to stop processing your data in certain ways</li>
        <li><strong>Objection</strong> — object to processing based on legitimate interests</li>
        <li>
          <strong>Opt out of analytics</strong> — disable Mixpanel tracking in app settings
          at any time
        </li>
      </ul>
      <p>
        To exercise any of these rights, email{' '}
        <a href="mailto:support@dadlyapp.com">support@dadlyapp.com</a> with the subject
        line &quot;Privacy Request.&quot; We will respond within 30 days. We may need to verify
        your identity before fulfilling a request.
      </p>
      <p>
        <strong>California residents (CCPA):</strong> You have the right to know what
        personal information we collect, the right to delete it, and the right to opt out
        of its sale (we do not sell personal information). To submit a request, email us
        or use the &quot;Delete My Account&quot; option in app settings.
      </p>
      <p>
        <strong>UK &amp; EU residents (UK GDPR / GDPR):</strong> Our lawful basis for
        processing is your consent (for health data and AI processing) and our legitimate
        interests (for analytics and security). You have the right to lodge a complaint
        with your local supervisory authority (e.g. the ICO in the UK).
      </p>

      <h2>10. Security</h2>
      <p>
        We use industry-standard safeguards including:
      </p>
      <ul>
        <li>TLS 1.2+ encryption for all data in transit</li>
        <li>AES-256 encryption for data at rest</li>
        <li>Passwords stored as bcrypt hashes — never in plain text</li>
        <li>Access controls limiting staff access to production data</li>
        <li>Regular security reviews and dependency updates</li>
      </ul>
      <p>
        No system is perfectly secure. If you believe your account has been compromised,
        please contact us immediately at{' '}
        <a href="mailto:support@dadlyapp.com">support@dadlyapp.com</a>.
      </p>

      <h2>11. Children&apos;s Privacy</h2>
      <p>
        Dadly is intended for adults (18 years and older). We do not knowingly collect
        personal information from anyone under the age of 13. If we learn that a child
        under 13 has provided us with personal data, we will delete it promptly.
        If you believe a child has created a Dadly account, please contact us.
      </p>

      <h2>12. International Data Transfers</h2>
      <p>
        Dadly is based in the United Kingdom. If you use our service from the EU or
        other regions, your data may be transferred to and processed in the UK and the
        United States (where our AI providers and cloud infrastructure are based).
        Where required, we rely on Standard Contractual Clauses or equivalent transfer
        mechanisms to protect your data during international transfers.
      </p>

      <h2>13. Third-Party Links</h2>
      <p>
        The app or website may link to third-party sites (e.g. NHS information pages,
        parenting resources). We are not responsible for the privacy practices of those
        sites. We encourage you to read their privacy policies before providing
        any personal information.
      </p>

      <h2>14. Changes to This Policy</h2>
      <p>
        We may update this privacy policy from time to time. When we make material
        changes, we will notify you via email (to the address on your account) and
        by posting a notice in the app at least 14 days before the changes take effect.
        Your continued use of Dadly after that date constitutes acceptance of the
        updated policy. If you do not agree, you can delete your account before the
        changes take effect.
      </p>

      <h2>15. Contact Us</h2>
      <p>
        For any privacy questions, requests, or concerns, please contact us:
      </p>
      <p>
        <strong>Email:</strong>{' '}
        <a href="mailto:support@dadlyapp.com">support@dadlyapp.com</a>
        <br />
        <strong>Subject line:</strong> Privacy Request
      </p>
      <p>
        We aim to respond to all privacy enquiries within 5 business days and to
        fulfil verified requests within 30 days.
      </p>
    </main>
  )
}
