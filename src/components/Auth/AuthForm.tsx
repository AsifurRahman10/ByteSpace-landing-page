export type AuthField = {
  name: string
  label: string
  type: 'text' | 'email' | 'password'
  placeholder: string
  autoComplete?: string
}

type AuthFormProps = {
  fields: AuthField[]
  submitLabel: string
  action?: (formData: FormData) => void | Promise<void>
}

const inputClass =
  'h-[52px] w-full rounded-xl border border-neutral-100 px-6 text-lg text-neutral-500 outline-none transition-colors placeholder:text-neutral-400 focus:border-secondary'

const AuthForm = ({ fields, submitLabel, action }: AuthFormProps) => {
  return (
    <form
      action={action}
      className='flex flex-col gap-4'>
      {fields.map((field) => (
        <div
          key={field.name}
          className='flex flex-col gap-2'>
          <label
            htmlFor={field.name}
            className='text-sm font-medium'>
            {field.label}
          </label>

          <input
            id={field.name}
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
            autoComplete={field.autoComplete}
            required
            className={inputClass}
          />
        </div>
      ))}

      <button
        type='submit'
        className='mt-4 h-11.5 cursor-pointer self-end rounded-full bg-primary px-6 text-lg font-medium text-neutral-950 transition-opacity hover:opacity-80'>
        {submitLabel}
      </button>
    </form>
  )
}

export default AuthForm
