const LearningCard = () => {
  return (
    <div
      className='
      absolute
      right-0
      top-40
      z-30
      rounded-xl
      bg-white
      p-4
      min-w-52
      shadow-sm
    '>
      <p className='text-sm font-medium text-neutral-950'>Learning Progress</p>

      <h4 className='mt-2 text-5xl font-semibold leading-none text-neutral-950'>
        55%
      </h4>

      <div className='mt-2 h-2 overflow-hidden rounded-full bg-[#F6F6F6]'>
        <div className='h-full w-[55%] rounded-full bg-primary' />
      </div>
    </div>
  )
}

export default LearningCard
