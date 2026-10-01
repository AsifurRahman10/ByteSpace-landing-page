import Image from 'next/image'
import Link from 'next/link'

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
