import Image from 'next/image'

type AvatarGroupProps = {
  avatarArray: string[]
  count: string
}

const AvatarGroup = ({ avatarArray, count }: AvatarGroupProps) => {
  return (
    <div className='flex shrink-0 items-center'>
      <div className='flex -space-x-2'>
        {avatarArray.map((avatar, index) => (
          <div
            key={index}
            className='relative size-8 shrink-0 overflow-hidden rounded-full border-2 border-white'>
            <Image
              src={avatar}
              alt='Student avatar'
              fill
              sizes='32px'
              className='object-cover'
            />
          </div>
        ))}

        <div className='relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full bg-[#D4FB20] text-xs font-medium text-neutral-950'>
          {count}
        </div>
      </div>
    </div>
  )
}

export default AvatarGroup
