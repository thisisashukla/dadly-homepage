'use client'

import mixpanel from 'mixpanel-browser'
import Link from 'next/link'

interface Props {
  href: string
  location: string
  page: string
  className?: string
  onClick?: () => void
  'data-mp-article'?: string
  style?: React.CSSProperties
  children: React.ReactNode
}

export function TrackingLink({
  href, location, page, className, onClick, style, children,
  'data-mp-article': dataMpArticle,
}: Props) {
  const handleClick = () => {
    try {
      mixpanel.track('CTA Clicked', { location, page, href })
    } catch {
      // silently fail if Mixpanel not yet ready
    }
    onClick?.()
  }

  return (
    <Link
      href={href}
      className={className}
      style={style}
      data-mp-article={dataMpArticle}
      onClick={handleClick}
    >
      {children}
    </Link>
  )
}
