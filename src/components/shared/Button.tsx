const Button = ({ text }: { text: string }) => {
  return (
    <button
      type='button'
      className='inline-flex self-stretch items-center rounded-full bg-primary px-8 py-3 text-lg font-medium text-neutral-950'>
      {text}
    </button>
  )
}

export default Button
