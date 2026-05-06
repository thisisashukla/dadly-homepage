'use client'

import Link from 'next/link'
import { trackCTAClick } from '@/lib/mixpanel'

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
    // sendBeacon transport inside trackCTAClick survives same-tab navigation
    trackCTAClick(page, location, href)
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
