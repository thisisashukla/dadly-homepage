'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { TrackingLink } from './TrackingLink'
import { usePageName } from '@/lib/usePageName'

export function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const page = usePageName()
  const pathname = usePathname()

  // On the home page, scroll to the footer (which has the platform buttons).
  // On any other page, go to /waitlist directly — avoids loading home page
  // scrolled to the bottom, which breaks the scroll-reveal animations.
  const ctaHref = pathname === '/' ? '#footer' : '/waitlist'

  const toggle = useCallback(() => setIsOpen((o) => !o), [])
  const close = useCallback(() => setIsOpen(false), [])

  return (
    <>
      <nav>
        <div className="nav-inner">
          <Link href="/" className="logo">
            Dad<em>ly</em>
          </Link>
          <ul className="nav-links">
            <li>
              <TrackingLink href="/#features" location="nav_features" page={page}>
                Features
              </TrackingLink>
            </li>
            <li>
              <TrackingLink href="/#how-it-works" location="nav_how_it_works" page={page}>
                How it works
              </TrackingLink>
            </li>
            <li>
              <TrackingLink href="/#pricing" location="nav_pricing" page={page}>
                Pricing
              </TrackingLink>
            </li>
            <li>
              <TrackingLink href="/blog" location="nav_blog" page={page}>
                Blog
              </TrackingLink>
            </li>
            <li>
              <TrackingLink href={ctaHref} location="nav_cta" page={page} className="btn-nav">
                Get started
              </TrackingLink>
            </li>
          </ul>
          <button
            className={`hamburger${isOpen ? ' open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            onClick={toggle}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${isOpen ? ' open' : ''}`}>
        <ul>
          <li>
            <TrackingLink href="/#features" location="nav_features" page={page} onClick={close}>
              Features
            </TrackingLink>
          </li>
          <li>
            <TrackingLink href="/#how-it-works" location="nav_how_it_works" page={page} onClick={close}>
              How it works
            </TrackingLink>
          </li>
          <li>
            <TrackingLink href="/#pricing" location="nav_pricing" page={page} onClick={close}>
              Pricing
            </TrackingLink>
          </li>
          <li>
            <TrackingLink href="/blog" location="nav_blog" page={page} onClick={close}>
              Blog
            </TrackingLink>
          </li>
        </ul>
        <TrackingLink href={ctaHref} location="nav_cta" page={page} className="btn-nav-mobile" onClick={close}>
          Get started
        </TrackingLink>
      </div>
    </>
  )
}
