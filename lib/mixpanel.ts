import mixpanel from 'mixpanel-browser'

const TOKEN = '802bb71daed425d8fb73c567a4014b14'
let initialised = false

export function initMixpanel() {
  if (initialised || typeof window === 'undefined') return
  mixpanel.init(TOKEN, {
    track_pageview: false,
    persistence: 'localStorage',
    ignore_dnt: true,
  })
  initialised = true
}

export function trackEvent(event: string, props?: Record<string, unknown>) {
  if (typeof window === 'undefined') return
  initMixpanel()
  try {
    mixpanel.track(event, props)
  } catch {
    // noop
  }
}

export function trackPageViewed(page: string, path?: string) {
  trackEvent('Page Viewed', {
    page,
    path: path ?? (typeof window !== 'undefined' ? window.location.pathname : undefined),
  })
}

/**
 * Used for CTA buttons ("Try Dadly Free", "Get Started", "Download on the App Store").
 * Uses sendBeacon transport so the event survives same-tab navigation.
 */
export function trackCTAClick(page: string, location: string, href: string) {
  if (typeof window === 'undefined') return
  initMixpanel()
  try {
    mixpanel.track(
      'CTA Clicked',
      { page, location, href },
      { transport: 'sendBeacon' }
    )
  } catch {
    // noop
  }
}

export { mixpanel }
