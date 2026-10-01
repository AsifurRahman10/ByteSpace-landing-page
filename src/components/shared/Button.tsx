import Link from 'next/link'
import type { ComponentProps, ReactNode } from 'react'

const base =
  'inline-flex items-center justify-center rounded-full px-8 py-3 text-lg font-medium text-neutral-950 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 disabled:pointer-events-none disabled:opacity-50'

const variants = {
  primary: 'bg-primary',
  secondary: 'bg-secondary text-neutral-50'
} as const

type ButtonVariant = keyof typeof variants

type ButtonOwnProps = {
  variant?: ButtonVariant
  className?: string
  children: ReactNode
}

type LinkButtonProps = { href: string } & Omit<
  ComponentProps<typeof Link>,
  keyof ButtonOwnProps | 'href'
>

type NativeButtonProps = { href?: undefined } & Omit<
  ComponentProps<'button'>,
  keyof ButtonOwnProps
>

type ButtonProps = ButtonOwnProps & (LinkButtonProps | NativeButtonProps)

const Button = ({
  variant = 'primary',
  className,
  children,
  ...props
}: ButtonProps) => {
  const classes = `${base} ${variants[variant]}${className ? ` ${className}` : ''}`

  if (typeof props.href === 'string') {
    const { href, ...linkProps } = props

    return (
      <Link
        href={href}
        className={classes}
        {...linkProps}>
        {children}
      </Link>
    )
  }

  return (
    <button
      {...props}
      type={props.type ?? 'button'}
      className={classes}>
      {children}
    </button>
  )
}

export default Button
