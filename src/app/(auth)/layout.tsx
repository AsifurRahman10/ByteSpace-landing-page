import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  description:
    'Sign in to ByteSpace to keep learning, or create a free account to start exploring hundreds of courses.'
}

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='hero-grid min-h-screen overflow-x-hidden bg-brand-blue'>
      <div className='container-page relative flex min-h-screen flex-col text-neutral-50'>
        <Link
          href='/'
          aria-label='Home'
          className='absolute top-6'>
          <Image
            src='/images/auth/logo_sm.png'
            alt='ByteSpace'
            width={30}
            height={30}
            priority
          />
        </Link>

        {children}
      </div>
    </div>
  )
}

export default AuthLayout
