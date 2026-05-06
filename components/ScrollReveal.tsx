'use client'

import { useEffect } from 'react'

/**
 * Runs the scroll-reveal IntersectionObserver on every mount — including
 * client-side navigation. The inline <script> approach only fires on hard
 * loads (SSR), not on Next.js soft navigation, so this must be a React
 * client component using useEffect.
 */
export function ScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -32px 0px' }
    )

    const reveal = (sel: string, stagger: boolean) => {
      document.querySelectorAll<HTMLElement>(sel).forEach((el, idx) => {
        el.classList.add('reveal')
        if (stagger) el.style.setProperty('--d', `${idx * 85}ms`)
        observer.observe(el)
      })
    }

    reveal('.eyebrow,.heading,.subtext,.quote-block,.pricing-card,.proof-item', false)
    reveal('.prob-card,.feat-card,.testi-card,.step', true)
    reveal('.split-text,.split-phone', false)

    // Immediately mark visible any element that is in or above the current
    // viewport. Covers two cases:
    // 1. Normal load at top — hero-area elements visible without waiting for scroll
    // 2. Hash navigation (e.g. /#footer from another page) — everything above the
    //    footer is scrolled past and would otherwise stay opacity:0 forever
    const revealScrolledPast = () => {
      document.querySelectorAll<HTMLElement>('.reveal:not(.visible)').forEach((el) => {
        if (el.getBoundingClientRect().bottom <= window.innerHeight) {
          el.classList.add('visible')
        }
      })
    }

    revealScrolledPast()
    // Run again after a frame — browser may finish scroll-to-hash after first paint
    requestAnimationFrame(revealScrolledPast)

    return () => observer.disconnect()
  }, [])

  return null
}
