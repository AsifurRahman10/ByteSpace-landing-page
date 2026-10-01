import type { Metadata } from 'next'

import AuthCard from '@/components/Auth/AuthCard'
import AuthForm, { AuthField } from '@/components/Auth/AuthForm'
import AuthShell from '@/components/Auth/AuthShell'
import SocialButtons from '@/components/Auth/SocialButtons'

export const metadata: Metadata = {
  title: 'Sign In'
}

const fields: AuthField[] = [
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'designer@example.com',
    autoComplete: 'email'
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    placeholder: '********',
    autoComplete: 'current-password'
  }
]

const LoginPage = () => {
  return (
    <AuthShell
      heading='Sign in with ease'
      description='Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.'>
      <AuthCard
        eyebrow='Sign In'
        title='Welcome Back'
        footer={{
          text: 'New user?',
          linkLabel: 'Create an account',
          href: '/register'
        }}>
        <AuthForm
          fields={fields}
          submitLabel='Sign In'
        />
        <SocialButtons />
      </AuthCard>
    </AuthShell>
  )
}

export default LoginPage
