import Image from 'next/image'
import Link from 'next/link'
import logoBlack from '../../../public/images/hero/logo_black.png'

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
    <footer className='border-t border-neutral-300 bg-white'>
      <div className='container-page flex flex-col'>
        {/* TOP */}
        <div className='flex justify-between gap-16 pb-32 pt-[70px]'>
          {/* LEFT — BRAND + NEWSLETTER */}
          <div className='flex w-full max-w-126 flex-col'>
            <Image
              src={logoBlack}
              alt='ByteSpace'
              width={172}
              height={36}
              className='h-9 w-auto self-start'
            />

            <p className='mt-4 text-sm text-neutral-900'>
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            <form className='mt-14 flex items-center gap-6'>
              <input
                type='email'
                placeholder='Enter your email'
                aria-label='Email address'
                className='h-[52px] w-[376px] rounded-full border border-neutral-300 bg-transparent px-6 text-base text-neutral-900 outline-none placeholder:text-neutral-700 focus:border-secondary'
              />

              <button
                type='submit'
                className='h-[46px] cursor-pointer rounded-full bg-primary px-6 text-base font-medium text-neutral-950 transition-opacity hover:opacity-80'>
                Search
              </button>
            </form>

            <p className='mt-8 max-w-[470px] text-xs leading-[19px] text-neutral-900'>
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          {/* RIGHT — LINKS */}
          <nav
            aria-label='Footer'
            className='grid w-[580px] shrink-0 grid-cols-[207px_207px_auto] pt-[50px]'>
            {linkColumns.map((column, idx) => (
              <ul
                key={idx}
                className='flex flex-col gap-[18px]'>
                {column.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className='text-sm leading-5 text-neutral-900 transition-colors hover:text-secondary'>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </div>

        {/* BOTTOM BAR */}
        <div className='flex items-center justify-between border-t border-neutral-200 py-6'>
          <p className='text-xs text-neutral-900'>
            @ 2023 ByteSpace. All rights reserved.
          </p>

          <ul className='flex items-center gap-6'>
            {legalLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className='text-xs text-neutral-900 transition-colors hover:text-secondary'>
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
