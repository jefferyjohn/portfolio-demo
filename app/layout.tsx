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
    title: 'Next.js',
    description: 'The React Framework for the Web',
    url: 'https://jefferyjohn.com',
    siteName: 'Next.js',
    images: [
      {
        url: '../public/og-image.png',
        width: 800,
        height: 600,
      },
      {
        url: '../public/og-image.png',
        width: 1800,
        height: 1600,
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
