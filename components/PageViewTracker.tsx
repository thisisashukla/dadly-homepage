'use client'

import { useEffect } from 'react'
import { trackEvent } from '@/lib/mixpanel'

interface Props {
  event: string
  properties?: Record<string, unknown>
}

export function PageViewTracker({ event, properties }: Props) {
  useEffect(() => {
    trackEvent(event, properties ?? {})
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return null
}
