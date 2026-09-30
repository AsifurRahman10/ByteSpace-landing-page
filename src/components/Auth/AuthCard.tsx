import Link from 'next/link'

type AuthCardProps = {
  eyebrow: string
  title: string
  footer: { text: string; linkLabel: string; href: string }
  children: React.ReactNode
}

const AuthCard = ({ eyebrow, title, footer, children }: AuthCardProps) => {
  return (
    <div className='flex w-full flex-col rounded-[40px] bg-white px-6 py-[clamp(28px,5.5vh,56px)] text-neutral-950 sm:px-14 lg:min-h-[min(784px,calc(100vh-120px))]'>
      <header>
        <p className='text-lg text-secondary'>{eyebrow}</p>
        <h1 className='text-[44px] font-semibold leading-tight'>{title}</h1>
      </header>

      <div className='mt-[clamp(20px,4vh,40px)]'>{children}</div>

      <p className='mt-auto pt-[clamp(28px,7vh,72px)] text-center text-neutral-400'>
        {footer.text}{' '}
        <Link
          href={footer.href}
          className='text-secondary hover:underline'>
          {footer.linkLabel}
        </Link>
      </p>
    </div>
  )
}

export default AuthCard
