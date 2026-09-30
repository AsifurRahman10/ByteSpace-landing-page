import AuthCard from '@/components/Auth/AuthCard'
import AuthForm, { AuthField } from '@/components/Auth/AuthForm'
import AuthShell from '@/components/Auth/AuthShell'

const fields: AuthField[] = [
  {
    name: 'name',
    label: 'Full Name',
    type: 'text',
    placeholder: 'Jamie Davis',
    autoComplete: 'name'
  },
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
    autoComplete: 'new-password'
  }
]

const RegisterPage = () => {
  return (
    <AuthShell
      heading='Sign up and come in'
      description='The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost'>
      <AuthCard
        eyebrow='Create an Account'
        title='Welcome to ByteSpace'
        footer={{
          text: 'Already have an account?',
          linkLabel: 'Login',
          href: '/login'
        }}>
        <AuthForm
          fields={fields}
          submitLabel='Continue'
        />
      </AuthCard>
    </AuthShell>
  )
}

export default RegisterPage
