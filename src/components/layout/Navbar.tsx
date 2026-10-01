'use client'

import { useState } from 'react'
import Link from 'next/link'

import { Logo } from '@/components/layout/logo'
import Image from 'next/image'

const focusRing =
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue'

const mainNav = [
  { label: 'Home', href: '/' },
  { label: 'Courses', href: '/courses' },
  { label: 'Creators', href: '/creators' }
]

const cta = [
  { label: 'Sign In', href: '/login' },
  { label: 'Join Us', href: '/register' }
]

const mobileNav = [...mainNav, ...cta]

const desktopNavLink =
  'rounded-full py-2 text-md text-neutral-50 transition-colors hover:text-primary/90'
const desktopCtaLink =
  'inline-flex items-center justify-center text-md text-neutral-50 transition-colors hover:text-primary/90'
const mobileLink =
  'rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-neutral-50'

type NavLinkProps = {
  href: string
  className?: string
  onClick?: () => void
  children: React.ReactNode
}

function NavLink({ href, className, onClick, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${className ?? ''} ${focusRing}`}>
      {children}
    </Link>
  )
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

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
                <NavLink
                  href={item.href}
                  className={desktopNavLink}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className='hidden lg:flex justify-center items-center gap-6'>
          {cta.map((c) => (
            <NavLink
              key={c.href}
              href={c.href}
              className={desktopCtaLink}>
              {c.label}
            </NavLink>
          ))}

          <Image
            src='/images/hero/icon/shopping_bag.svg'
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
            {/* Main navigation + CTA links */}
            {mobileNav.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={mobileLink}>
                {item.label}
              </NavLink>
            ))}

            {/* Shopping bag */}
            <NavLink
              href='/cart'
              onClick={closeMenu}
              className={`flex items-center gap-1${mobileLink}`}>
              <Image
                src='/images/hero/icon/shopping_bag.svg'
                alt='Shopping bag'
                width={24}
                height={24}
                className='brightness-30'
              />
            </NavLink>
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
