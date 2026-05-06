'use client'

import { useEffect } from 'react'
import { trackEvent } from '@/lib/mixpanel'

/**
 * Attaches click-tracking to every <a data-mp-article="…"> on the blog index.
 * Mirrors the original `mixpanel.track_links('a[data-mp-article]', …)` pattern.
 */
export function ArticleCardTracker() {
  useEffect(() => {
    const links = document.querySelectorAll<HTMLAnchorElement>('a[data-mp-article]')
    const handlers: Array<{ el: HTMLAnchorElement; fn: () => void }> = []

    links.forEach((el) => {
      const fn = () => {
        trackEvent('Article Card Clicked', {
          article: el.getAttribute('data-mp-article'),
          page: 'Blog Index',
        })
      }
      el.addEventListener('click', fn)
      handlers.push({ el, fn })
    })

    return () => handlers.forEach(({ el, fn }) => el.removeEventListener('click', fn))
  }, [])

  return null
}
