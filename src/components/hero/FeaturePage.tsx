import CourseCard from '@/components/shared/Card'
import { courses } from '../../../public/dummyData/skillsData'
import Image from 'next/image'
import humanImage from '../../../public/images/hero/human.png'
import LearningCard from '@/components/shared/LearningCard'

const FeaturePage = () => {
  return (
    <div className='container-page py-16'>
      {/* 1st card */}
      <div className='flex gap-16'>
        {/* text section */}
        <div className='flex flex-col gap-10 flex-1'>
          <h1 className='text-neutral-950 text-[44px] font-semibold'>
            Your Path to Professional <br /> Growth Starts Here!
          </h1>
          <p>
            Explore our curated selection of courses tailored to enhance your
            capabilities and accelerate your career journey. Whether you are
            looking to sharpen specific skills, gain industry expertise, or
            embark on a new career path entirely, we have the resources you
            need.
          </p>

          <div className='flex gap-14'>
            {[
              {
                value: '12K',
                label: 'Students'
              },
              {
                value: '70+',
                label: 'Courses'
              },
              {
                value: '16',
                label: 'Creators'
              }
            ].map((item) => (
              <div key={item.label}>
                <h3 className='text-secondary text-4xl font-medium'>
                  {item.value}
                </h3>
                <p className='text-neutral-700 text-lg'>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        {/* image section */}
        <div className='relative flex-1'>
          {/* Course card - BACK */}
          <div
            className='
      absolute
      left-0
      top-0
      z-10
      w-3/5
      
    '>
            <CourseCard {...courses[0]} />
          </div>

          {/* Human - MIDDLE */}
          <Image
            src={humanImage}
            alt='human-image'
            width={550}
            height={510}
            priority
            className='
      absolute
      
      bottom-0
      z-20
      
      max-w-none
      object-contain
    '
          />

          {/* Learning progress - FRONT */}
          <LearningCard />
        </div>
      </div>
    </div>
  )
}

export default FeaturePage
