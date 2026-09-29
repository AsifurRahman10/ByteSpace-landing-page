'use client'

import { useState } from 'react'
import Link from 'next/link'

import { Logo } from '@/components/layout/logo'
import Image from 'next/image'
import bagIcon from '../../../public/images/hero/icon/shopping_bag.svg'

const focusRing =
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const mainNav = [
    {
      label: 'Home',
      href: '/'
    },
    {
      label: 'Courses',
      href: '/courses'
    },
    {
      label: 'Creators',
      href: '/creators'
    }
  ]

  const cta = [
    {
      label: 'Sign In',
      href: '/signin'
    },
    {
      label: 'Join Us',
      href: '/signup'
    }
  ]

  return (
    <header className='relative top-0 z-50 font-sans'>
      <div className='container-page flex h-16 items-center justify-between gap-4 lg:h-20'>
        <Logo className={focusRing} />

        <nav
          aria-label='Main'
          className='hidden lg:block'>
          <ul className='flex items-center gap-6'>
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`rounded-full text-neutral-50 py-2 text-md  transition-colors  hover:text-primary/90 ${focusRing}`}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className='hidden lg:flex justify-center items-center gap-6'>
          {cta.map((c) => {
            return (
              <Link
                href={c.href}
                key={c.href}
                className={`inline-flex items-center justify-center text-md text-neutral-50  transition-colors hover:text-primary/90 ${focusRing}`}>
                {c.label}
              </Link>
            )
          })}

          <Image
            src={bagIcon}
            alt='Shopping bag'
            width={24}
            height={24}
          />
        </div>

        <button
          type='button'
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls='mobile-nav'
          aria-label={
            isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
          }
          className={`inline-flex size-10 items-center justify-center text-neutral-50 transition-colors hover:bg-neutral-50 lg:hidden ${focusRing}`}>
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {isMenuOpen && (
        <div
          id='mobile-nav'
          className='border-t border-border/70 bg-background lg:hidden'>
          <nav
            aria-label='Mobile'
            className='container-page flex flex-col gap-1 py-4'>
            {/* Main navigation */}
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-neutral-50 ${focusRing}`}>
                {item.label}
              </Link>
            ))}

            {/* CTA links */}
            {cta.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                onClick={() => setIsMenuOpen(false)}
                className={`rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-neutral-50 ${focusRing}`}>
                {c.label}
              </Link>
            ))}

            {/* Shopping bag */}
            <Link
              href='/cart'
              onClick={() => setIsMenuOpen(false)}
              className={`flex items-center gap-3 rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-neutral-50 ${focusRing}`}>
              <Image
                src={bagIcon}
                alt='Shopping bag'
                width={24}
                height={24}
              />
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

function MenuIcon() {
  return (
    <svg
      viewBox='0 0 24 24'
      className='size-5'
      aria-hidden='true'
      focusable='false'>
      <path
        d='M4 7h16M4 12h16M4 17h16'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.75'
        strokeLinecap='round'
      />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg
      viewBox='0 0 24 24'
      className='size-5'
      aria-hidden='true'
      focusable='false'>
      <path
        d='M6 6l12 12M18 6 6 18'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.75'
        strokeLinecap='round'
      />
    </svg>
  )
}
