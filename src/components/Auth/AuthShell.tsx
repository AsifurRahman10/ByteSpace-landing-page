import AuthShowcase from '@/components/Auth/AuthShowcase'

type AuthShellProps = {
  heading: string
  description: string
  children: React.ReactNode
}

const AuthShell = ({ heading, description, children }: AuthShellProps) => {
  return (
    <div className='my-auto flex flex-col items-center gap-12 py-24 lg:flex-row lg:items-start lg:justify-between lg:gap-16 lg:py-0'>
      <div className='hidden w-full flex-col lg:flex'>
        <h4 className='text-xl font-semibold'>{heading}</h4>

        <p className='mt-4 max-w-120 text-lg leading-7.25'>{description}</p>

        <AuthShowcase />
      </div>

      <div className='w-full'>{children}</div>
    </div>
  )
}

export default AuthShell
