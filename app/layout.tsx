import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  metadataBase: new URL('https://jefferyjohn.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  title: 'Jeffery John | Portfolio',
  description: 'Meet Jeffery John - a developer and designer @ CMU!',
  openGraph: {
    title: 'Jeffery John | Portfolio',
    description: 'Meet Jeffery John - a developer, designer, and hacker @ CMU!',
    url: 'https://jefferyjohn.com',
    siteName: 'Jeffery John',
    images: [
      {
        url: 'https://i.imgur.com/zwMN9dg.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://i.imgur.com/jBdBcvT.png',
        width: 630,
        height: 1200,
        alt: 'Jeffery John | Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
