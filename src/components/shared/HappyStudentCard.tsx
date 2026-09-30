import starIcon from '../../../public/images/skills/icon/star.svg'
import AvatarGroup from '@/components/shared/AvatarGroup'
import avatar_1 from '../../../public/images/feature/avatar_1.png'
import avatar_2 from '../../../public/images/skills/avatar_1.png'
import avatar_3 from '../../../public/images/feature/avatar_2.png'
import avatar_4 from '../../../public/images/feature/avatar_3.png'
import avatar_5 from '../../../public/images/feature/avatar_4.png'
import avatar_6 from '../../../public/images/feature/avatar_5.png'
import avatar_7 from '../../../public/images/feature/avatar_6.png'

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
            maskImage: `url(${starIcon.src})`,
            WebkitMaskImage: `url(${starIcon.src})`,
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
          avatar_1,
          avatar_2,
          avatar_3,
          avatar_4,
          avatar_5,
          avatar_6,
          avatar_7
        ]}
        count='2K+'
      />
    </div>
  )
}

export default HappyStudentCard
