import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || ''

  // Redirect www.dadlyapp.com → dadlyapp.com (non-www canonical)
  if (host.startsWith('www.')) {
    const url = request.nextUrl.clone()
    url.host = host.replace(/^www\./, '')
    url.port = '' // strip port if any
    return NextResponse.redirect(url, { status: 301 })
  }
}

export const config = {
  // Run on all paths except static files and Next.js internals
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:ico|png|jpg|jpeg|svg|webp|gif|woff|woff2|ttf|eot)).*)',
  ],
}
