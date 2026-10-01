import Link from 'next/link'

import Image from 'next/image'

type LogoProps = {
  href?: string
  className?: string
}

export function Logo({ href = '/', className }: LogoProps) {
  return (
    <Link
      href={href}
      aria-label={`ByteSpace — home`}
      className={`group inline-flex items-center gap-2.5 rounded-md ${className ?? ''}`}>
      <Image
        src='/images/hero/Header_Logo.png'
        alt='Brand logo'
        width={171}
        height={37}
        className='h-auto w-[140px] lg:w-[171px]'
      />
    </Link>
  )
}
