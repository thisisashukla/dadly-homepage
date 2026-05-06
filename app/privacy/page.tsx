import type { Metadata } from 'next'
import { PageViewTracker } from '@/components/PageViewTracker'

export const metadata: Metadata = {
  title: 'Privacy Policy | Dadly',
  description: 'How Dadly collects, uses, and protects your personal information.',
  alternates: { canonical: 'https://dadlyapp.com/privacy' },
}

export default function PrivacyPage() {
  return (
    <main className="prose-page">
      <PageViewTracker event="Privacy Page Viewed" />

      <h1>Privacy Policy</h1>

      <h2>Privacy</h2>
      <p>
        We take your privacy seriously. This privacy policy explains how Dadly collects,
        uses, and protects your personal information when you use our service.
      </p>

      <h2>Information We Collect</h2>
      <p>
        When you sign up for Dadly, we collect your email address, name, and information
        about your pregnancy or newborn stage. When you upload scan reports or ask questions,
        we store that data to provide you with better answers.
      </p>

      <h2>How We Use Your Information</h2>
      <p>We use your information to:</p>
      <ul>
        <li>Provide you with personalised briefs and answers</li>
        <li>Improve our service based on how you use it</li>
        <li>Send you weekly briefs and service updates</li>
        <li>Ensure the security of your account</li>
      </ul>

      <h2>Data Protection</h2>
      <p>
        Your data is stored securely and is never sold to third parties.
        We do not share your health information with advertisers or marketing partners.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this privacy policy from time to time.
        We will notify you of any significant changes via email or by posting the new policy on our site.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have questions about this privacy policy, please contact us at{' '}
        <a href="mailto:support@dadlyapp.com">support@dadlyapp.com</a>.
      </p>
    </main>
  )
}
