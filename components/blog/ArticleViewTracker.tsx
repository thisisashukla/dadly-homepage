'use client'

import { useEffect } from 'react'
import { trackEvent } from '@/lib/mixpanel'

interface Props {
  slug: string
  title: string
  category: string
}

export function ArticleViewTracker({ slug, title, category }: Props) {
  useEffect(() => {
    trackEvent('Article Viewed', { slug, title, category })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return null
}
