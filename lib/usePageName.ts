'use client'

import { usePathname } from 'next/navigation'

/**
 * Returns a human-readable page name for the current route,
 * used as the `page` attribution property in Mixpanel events.
 */
export function usePageName(): string {
  const pathname = usePathname()

  if (pathname === '/') return 'Dadly Homepage'
  if (pathname === '/blog') return 'Blog Index'
  if (pathname.startsWith('/blog/')) {
    const slug = pathname.replace('/blog/', '')
    return `article_${slug}`
  }
  if (pathname === '/privacy') return 'Privacy'
  if (pathname === '/support') return 'Support'

  return pathname
}
