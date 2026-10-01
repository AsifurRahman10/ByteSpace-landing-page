import Image from 'next/image'
import CourseCard from '@/components/shared/Card'
import HappyStudentCard from '@/components/shared/HappyStudentCard'
import { courses } from '../../dummyData/skillsData'

const [backCourse, frontCourse] = [courses[1], courses[2]]

const triangleMask = {
  maskImage: `url(/images/hero/triangle.svg)`,
  WebkitMaskImage: `url(/images/hero/triangle.svg)`,
  maskRepeat: 'no-repeat',
  WebkitMaskRepeat: 'no-repeat',
  maskPosition: 'center',
  WebkitMaskPosition: 'center',
  maskSize: 'contain',
  WebkitMaskSize: 'contain'
} as const

const AuthShowcase = () => {
  return (
    <div
      aria-hidden='true'
      className='relative mt-[clamp(32px,8vh,84px)] h-140 w-121.25'>
      {/* back card */}
      <div className='absolute left-0 top-22.5 z-10 w-93.25'>
        <CourseCard {...backCourse} />
      </div>

      {/* front card */}
      <div className='absolute left-27.75 top-0 z-20 w-93.25'>
        <CourseCard {...frontCourse} />
      </div>

      {/* decorations */}
      <div
        className='pointer-events-none absolute -left-2 bottom-0 z-50 h-47.25 w-47.5 bg-[#D4FB20]'
        style={triangleMask}
      />

      <div className='absolute bottom-8 right-0 z-50'>
        <HappyStudentCard bgColor='#D4FB20' />
      </div>

      <Image
        src='/images/hero/Cone_yellow.svg'
        alt=''
        width={145}
        height={145}
        className='absolute left-8 top-5 z-50'
      />

      <Image
        src='/images/hero/Frame_2.svg'
        alt=''
        width={175}
        height={175}
        className='absolute -right-10 bottom-20 z-50'
      />
    </div>
  )
}

export default AuthShowcase
