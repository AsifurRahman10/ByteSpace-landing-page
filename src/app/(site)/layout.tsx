import Footer from '@/components/layout/Footer'

export default function SiteLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <main
        id='main-content'
        className='flex-1'>
        {children}
      </main>
      <Footer />
    </>
  )
}
