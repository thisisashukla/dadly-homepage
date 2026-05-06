'use client'

import { useEffect } from 'react'
import mixpanel from 'mixpanel-browser'

interface Props {
  slug: string
  title: string
  category: string
}

export function ArticleViewTracker({ slug, title, category }: Props) {
  useEffect(() => {
    try {
      mixpanel.track('Article Viewed', { slug, title, category })
    } catch {
      // silently fail if Mixpanel not yet ready
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return null
}
