import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'

import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins'
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light',
  themeColor: '#ffffff'
}

export const metadata: Metadata = {
  title: 'Home | ByteSpace',
  icons: {
    icon: '/images/auth/logo_sm.png'
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang='en'
      data-scroll-behavior='smooth'
      className={poppins.variable}>
      <body className='flex min-h-dvh flex-col bg-background font-sans text-foreground antialiased'>
        <a
          href='#main-content'
          className='sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-secondary focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-secondary-foreground'>
          Skip to content
        </a>

        {children}
      </body>
    </html>
  )
}
