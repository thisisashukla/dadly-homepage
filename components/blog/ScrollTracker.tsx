'use client'

import { useEffect } from 'react'
import { trackEvent } from '@/lib/mixpanel'

interface Props {
  slug: string
}

export function ScrollTracker({ slug }: Props) {
  useEffect(() => {
    const thresholds = [25, 50, 75, 100]
    const tracked = new Set<number>()

    const handleScroll = () => {
      const articleElement = document.querySelector('.article-body')
      if (!articleElement) return

      // Absolute position of article top in the document
      const articleTop = articleElement.getBoundingClientRect().top + window.scrollY
      const articleHeight = (articleElement as HTMLElement).offsetHeight

      // How much of the article has scrolled into (or past) the viewport
      const seenHeight = Math.max(0, window.scrollY + window.innerHeight - articleTop)
      const scrollPercent = Math.min(100, Math.round((seenHeight / articleHeight) * 100))

      thresholds.forEach((threshold) => {
        if (scrollPercent >= threshold && !tracked.has(threshold)) {
          tracked.add(threshold)
          trackEvent('Blog Scroll Depth', { article: slug, percent: threshold })
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    // Fire once on mount in case article is already in view (short articles)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [slug])

  return null
}
