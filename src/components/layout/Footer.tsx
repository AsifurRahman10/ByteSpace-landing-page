import Image from 'next/image'
import Link from 'next/link'
import logoBlack from '../../../public/images/hero/logo_black.png'
import Button from '@/components/shared/Button'

const linkColumns = [
  [
    { label: 'Featured Courses', href: '/' },
    { label: 'Featured Categories', href: '/' },
    { label: 'Business', href: '/' },
    { label: 'IT', href: '/' },
    { label: 'Design', href: '/' }
  ],
  [
    { label: 'Development', href: '/' },
    { label: 'Marketing', href: '/' },
    { label: 'Photography', href: '/' },
    { label: 'Finance', href: '/' },
    { label: 'Sport', href: '/' }
  ],
  [
    { label: 'Become a Creator', href: '/' },
    { label: 'Affiliate Program', href: '/' },
    { label: 'Contact', href: '/' },
    { label: 'Help', href: '/' },
    { label: 'About', href: '/' }
  ]
]

const legalLinks = [
  { label: 'Privacy Policy', href: '/' },
  { label: 'Terms of Service', href: '/' },
  { label: 'Cookies Settings', href: '/' }
]

const Footer = () => {
  return (
    <footer className=' bg-white'>
      <div className='container-page flex flex-col text-neutral-900'>
        {/* TOP */}
        <div className='flex flex-col justify-between gap-6 pb-6 pt-12 sm:gap-16 sm:pb-24 sm:pt-17.5 xl:flex-row xl:pb-32'>
          {/* LEFT — BRAND + NEWSLETTER */}
          <div className='flex w-full max-w-126 flex-col'>
            <Image
              src={logoBlack}
              alt='ByteSpace'
              width={172}
              height={36}
              className='h-9 w-auto self-start'
            />

            <p className='mt-4 text-sm'>
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            <form className='mt-4 flex gap-2  sm:mt-11  items-center sm:gap-6'>
              <input
                type='email'
                placeholder='Enter your email'
                aria-label='Email address'
                className='h-13 w-full rounded-full border border-neutral-300 bg-transparent px-6 text-base outline-none placeholder:text-neutral-700 focus:border-secondary sm:w-94'
              />

              <Button text='Search' />
            </form>

            <p className='mt-4 max-w-117.5 text-xs leading-4.75 '>
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          {/* RIGHT — LINKS */}
          <nav
            aria-label='Footer'
            className='grid w-full grid-cols-2 gap-x-6 gap-y-8 pt-0 sm:grid-cols-3 sm:gap-x-8 xl:w-145 xl:shrink-0 xl:grid-cols-[207px_207px_auto] xl:gap-x-0 xl:pt-12.5'>
            {linkColumns.map((column, idx) => (
              <ul
                key={idx}
                className='flex flex-col gap-2 sm:gap-4'>
                {column.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className='text-sm leading-5  transition-colors hover:text-secondary'>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </div>

        {/* BOTTOM BAR */}
        <div className='flex flex-col items-start justify-between gap-4 border-t border-neutral-200 py-6 sm:flex-row sm:items-center'>
          <p className='text-xs '>@ 2023 ByteSpace. All rights reserved.</p>

          <ul className='flex flex-wrap items-center gap-x-6 gap-y-2'>
            {legalLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className='text-xs  transition-colors hover:text-secondary'>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
