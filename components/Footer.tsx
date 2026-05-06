'use client'

import Link from 'next/link'
import { TrackingLink } from './TrackingLink'
import { usePageName } from '@/lib/usePageName'
import { trackWillingToPay } from '@/lib/mixpanel'

const AppleLogo = () => (
  <svg width="16" height="16" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M15.69 11.37c-.02-2.03 1.66-3.01 1.73-3.06-0.94-1.38-2.41-1.57-2.93-1.59-1.25-.13-2.44.74-3.07.74-.63 0-1.61-.72-2.65-.7-1.36.02-2.62.79-3.32 2.01-1.42 2.46-.36 6.1 1.02 8.1.68.98 1.48 2.08 2.53 2.04 1.02-.04 1.4-.66 2.63-.66 1.23 0 1.57.66 2.64.64 1.09-.02 1.78-.99 2.45-1.97.78-1.13 1.1-2.23 1.12-2.29-.02-.01-2.14-.82-2.15-3.26zM13.72 5.16c.56-.68.94-1.63.84-2.58-.81.03-1.79.54-2.37 1.21-.52.6-.98 1.57-.86 2.49.9.07 1.82-.46 2.39-1.12z" fill="currentColor"/>
  </svg>
)

const GooglePlayLogo = () => (
  <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M2.114 1.037A1.25 1.25 0 0 0 1 2.25v15.5a1.25 1.25 0 0 0 1.114 1.213l8.636-8.963L2.114 1.037z" fill="#00C8FF"/>
    <path d="M14.396 7.073l-2.27-1.316-3.003 3.118 3.003 3.118 2.3-1.333a1.25 1.25 0 0 0-.03-3.587z" fill="#FFCE00"/>
    <path d="M12.126 5.757 2.114 1.037l8.636 8.963 1.376-4.243z" fill="#00E676"/>
    <path d="m2.114 18.963 10.012-4.72-1.376-4.243-8.636 8.963z" fill="#FF3D00"/>
  </svg>
)

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const page = usePageName()

  return (
    <footer id="footer">
      <div className="footer-cta">
        <p className="footer-cta-label">Coming soon — tell us which platform you want first</p>
        <div className="footer-platform-btns">
          <Link
            href="/waitlist"
            className="footer-platform-btn footer-platform-apple"
            onClick={() => trackWillingToPay('apple')}
          >
            <AppleLogo /> iOS — I&apos;d pay $4.99/mo
          </Link>
          <Link
            href="/waitlist"
            className="footer-platform-btn footer-platform-google"
            onClick={() => trackWillingToPay('google')}
          >
            <GooglePlayLogo /> Android — I&apos;d pay $4.99/mo
          </Link>
        </div>
      </div>

      <p>© {currentYear} Dadly. All rights reserved.</p>
      <ul className="footer-links">
        <li>
          <TrackingLink href="/privacy" location="footer_privacy" page={page}>
            Privacy Policy
          </TrackingLink>
        </li>
        <li>
          <TrackingLink href="/blog" location="footer_blog" page={page}>
            Blog
          </TrackingLink>
        </li>
        <li>
          <TrackingLink href="/support" location="footer_support" page={page}>
            Support
          </TrackingLink>
        </li>
      </ul>
    </footer>
  )
}
