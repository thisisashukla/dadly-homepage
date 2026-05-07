import type { Metadata } from 'next'
import { MixpanelProvider } from '@/components/MixpanelProvider'
import { Nav } from '@/components/Nav'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://dadlyapp.com'),
  title: 'Dadly — Clear answers for new and expecting dads',
  description: 'From pregnancy symptoms and scans to newborn feeding, sleep, and health concerns — Dadly helps dads know what matters and what to do next.',
  alternates: {
    canonical: 'https://dadlyapp.com',
  },
  openGraph: {
    type: 'website',
    url: 'https://dadlyapp.com',
    title: 'Dadly — Clear answers for dads, through pregnancy and newborn life',
    description: 'From pregnancy symptoms and scans to newborn feeding, sleep, and health concerns — Dadly helps dads know what matters and what to do next.',
    images: [
      {
        url: 'https://dadlyapp.com/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    siteName: 'Dadly',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Non-blocking font load */}
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Inter:wght@300;400;500;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Inter:wght@300;400;500;600;700&display=swap"
          media="print"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Inter:wght@300;400;500;600;700&display=swap"
          />
        </noscript>
        <script defer src="/_vercel/insights/script.js" />
      </head>
      <body>
        <MixpanelProvider>
          <Nav />
          {children}
          <Footer />
        </MixpanelProvider>
      </body>
    </html>
  )
}
