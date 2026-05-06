'use client'

import { TrackingLink } from './TrackingLink'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <p>© {currentYear} Dadly. All rights reserved.</p>
      <ul className="footer-links">
        <li>
          <TrackingLink href="/privacy" location="footer_privacy" page="all">
            Privacy Policy
          </TrackingLink>
        </li>
        <li>
          <TrackingLink href="/blog" location="footer_blog" page="all">
            Blog
          </TrackingLink>
        </li>
        <li>
          <TrackingLink href="/support" location="footer_support" page="all">
            Support
          </TrackingLink>
        </li>
      </ul>
    </footer>
  )
}
