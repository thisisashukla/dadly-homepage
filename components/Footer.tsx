'use client'

import { TrackingLink } from './TrackingLink'
import { usePageName } from '@/lib/usePageName'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const page = usePageName()

  return (
    <footer>
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
