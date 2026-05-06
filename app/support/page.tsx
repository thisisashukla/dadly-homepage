import type { Metadata } from 'next'
import { PageViewTracker } from '@/components/PageViewTracker'

export const metadata: Metadata = {
  title: 'Support & FAQ | Dadly',
  description: 'Get help with Dadly — cancellation, privacy, AI accuracy, and how to contact support.',
  alternates: { canonical: 'https://dadlyapp.com/support' },
}

export default function SupportPage() {
  return (
    <main className="prose-page">
      <PageViewTracker event="Support Page Viewed" />

      <h1>Support &amp; FAQ</h1>

      <h2>How to Cancel Your Subscription</h2>
      <p>
        You can cancel anytime from your account settings. No questions asked, no hidden fees.
        If you have any issues cancelling, reach out to{' '}
        <a href="mailto:support@dadlyapp.com">support@dadlyapp.com</a>.
      </p>

      <h2>Is Dadly a Substitute for Medical Advice?</h2>
      <p>
        No. Dadly provides educational information and contextual guidance, but is not a substitute
        for professional medical advice, diagnosis, or treatment. Always consult with your healthcare
        provider for medical concerns.
      </p>

      <h2>How Accurate Is the AI?</h2>
      <p>
        Our AI is trained on medical literature and common questions from expecting and new dads.
        It&apos;s designed to be contextual and accurate, but like all AI, it can make mistakes.
        Always verify important health information with your doctor.
      </p>

      <h2>Can I Export My Data?</h2>
      <p>
        Yes. You can request a copy of your data at any time by emailing{' '}
        <a href="mailto:support@dadlyapp.com">support@dadlyapp.com</a>.
        We&apos;ll provide your information in a standard format within 30 days.
      </p>

      <h2>What if I Have a Question Not Listed Here?</h2>
      <p>
        Email us at{' '}
        <a href="mailto:support@dadlyapp.com">support@dadlyapp.com</a>{' '}
        or contact us through the app. We typically respond within 24 hours.
      </p>

      <h2>Is My Information Secure?</h2>
      <p>
        Yes. We use industry-standard encryption (SSL/TLS) for all data in transit.
        Your password is hashed and never stored in plain text. Your health information is treated
        with the same care as medical records.
      </p>

      <h2>Get in Touch</h2>
      <p>
        For all support inquiries: <strong>support@dadlyapp.com</strong>
      </p>
    </main>
  )
}
