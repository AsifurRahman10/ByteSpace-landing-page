import AvatarGroup from '@/components/shared/AvatarGroup'

const HappyStudentCard = ({ bgColor }: { bgColor?: string }) => {
  return (
    <div
      className='rounded-xl p-4 text-neutral-950 shadow'
      style={{
        backgroundColor: bgColor ?? 'var(--background)'
      }}>
      <p className='font-medium'>Happy Students</p>
      <div className='text-[10px] flex gap-1 mb-2'>
        <span className='font-medium'>4.5</span>{' '}
        <span className='text-neutral-400'>(240)</span>
        <div
          className='w-4 h-4 bg-[#D4FB20]'
          style={{
            maskImage: 'url(/images/skills/icon/star.svg)',
            WebkitMaskImage: 'url(/images/skills/icon/star.svg)',
            maskSize: 'contain',
            WebkitMaskSize: 'contain',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat'
          }}
        />
      </div>

      {/* avatar */}

      <AvatarGroup
        avatarArray={[
          '/images/feature/avatar_1.png',
          '/images/skills/avatar_1.png',
          '/images/feature/avatar_2.png',
          '/images/feature/avatar_3.png',
          '/images/feature/avatar_4.png',
          '/images/feature/avatar_5.png',
          '/images/feature/avatar_6.png'
        ]}
        count='2K+'
      />
    </div>
  )
}

export default HappyStudentCard
