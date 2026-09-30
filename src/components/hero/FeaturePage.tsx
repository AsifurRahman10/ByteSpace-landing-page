import CourseCard from '@/components/shared/Card'
import { courses } from '../../../public/dummyData/skillsData'
import Image from 'next/image'
import humanImage from '../../../public/images/hero/human.png'
import LearningCard from '@/components/shared/LearningCard'
import girlImage from '../../../public/images/feature/girl.png'
import HappyStudentCard from '@/components/shared/HappyStudentCard'
import checkCircle from '../../../public/images/feature/icon/check.svg'

const FeaturePage = () => {
  return (
    <div className='container-page py-16 flex flex-col gap-12'>
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

      {/* 2st card */}
      <div className='flex flex-row-reverse gap-10 '>
        {/* text section */}
        <div className='flex flex-col gap-10 flex-1 my-auto'>
          <h1 className='text-neutral-950 text-[44px] font-semibold'>
            Create & Manage Courses Easily.
          </h1>
          <p className='text-neutral-700'>
            <span className='font-medium text-neutral-950'>ByteSpace</span>{' '}
            supports individuals or entities in the creation, publication, and
            administration of educational courses.
          </p>

          <ul>
            {[
              'Share Your Expertise',
              'Monetize Your Passion',
              'Flexibility and Autonomy',
              'Build a Community'
            ].map((item, idx) => (
              <li
                key={idx}
                className='flex items-center gap-2'>
                <Image
                  alt='check'
                  src={checkCircle}
                  width={18}
                  height={18}
                />
                <span className='text-lg font-medium'>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* image section */}
        <div className='relative shrink-0  flex-1 '>
          <Image
            src={girlImage}
            alt='girl-image'
            width={435}
            priority
            className='relative z-40 object-contain left-20'
          />

          {/* Revenue card */}
          <div className='absolute left-0 top-8 z-30'>
            <div className='w-60 rounded-xl bg-secondary p-4 text-neutral-50'>
              <p className='font-medium'>Total Revenue</p>
              <p className='text-[10px]'>Total Revenue</p>
              <h5 className='mt-2 text-2xl font-semibold'>$120.29</h5>

              <div className='mt-2 h-2 overflow-hidden rounded-full bg-[#F6F6F6]'>
                <div className='h-full w-[55%] rounded-full bg-primary' />
              </div>
            </div>
          </div>

          {/* Year to Date */}
          <div className='absolute top-45 left-0 z-30'>
            <div className='rounded-xl bg-secondary p-4 text-neutral-50'>
              <p className='whitespace-nowrap font-medium'>Year to Date</p>
              <p className='text-[10px]'>2023</p>
              <h5 className='mt-2 text-2xl font-semibold'>$1,200.38</h5>

              <p className='mt-2 w-fit rounded-3xl bg-primary px-2 py-1 text-[10px] font-medium text-neutral-950'>
                +12$
              </p>
            </div>
          </div>

          {/* Happy students */}
          <div className='absolute bottom-30 right-0 z-40'>
            <HappyStudentCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturePage
