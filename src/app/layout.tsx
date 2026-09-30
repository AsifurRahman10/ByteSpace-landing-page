import type { Viewport } from 'next'
import { Poppins } from 'next/font/google'

import './globals.css'
import Footer from '@/components/layout/Footer'

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

        <main
          id='main-content'
          className='flex-1'>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}
