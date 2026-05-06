'use client'

import { useEffect } from 'react'
import mixpanel from 'mixpanel-browser'

interface Props {
  event: string
  properties?: Record<string, unknown>
}

export function PageViewTracker({ event, properties }: Props) {
  useEffect(() => {
    try {
      mixpanel.track(event, properties ?? {})
    } catch {
      // silently fail if Mixpanel not yet initialised
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return null
}
