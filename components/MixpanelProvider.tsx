'use client'

import { useEffect, useRef } from 'react'
import mixpanel from 'mixpanel-browser'

export function MixpanelProvider({ children }: { children: React.ReactNode }) {
  const initialized = useRef(false)

  useEffect(() => {
    if (!initialized.current) {
      mixpanel.init('802bb71daed425d8fb73c567a4014b14', {
        autocapture: true,
        record_sessions_percent: 100,
      })
      initialized.current = true
    }
  }, [])

  return <>{children}</>
}
