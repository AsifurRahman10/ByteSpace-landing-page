import CourseCard from '@/components/shared/Card'
import { courses } from '../../../public/dummyData/skillsData'
import Image from 'next/image'
import humanImage from '../../../public/images/hero/human.png'
import LearningCard from '@/components/shared/LearningCard'
import girlImage from '../../../public/images/feature/girl.png'
import HappyStudentCard from '@/components/shared/HappyStudentCard'
import checkCircle from '../../../public/images/feature/icon/check.svg'
import frame_1 from '../../../public/images/feature/frame_1.png'
// import frame_2 from '../../../public/images/feature/frame_2.png'

import frame_2 from '../../../public/images/feature/Frame.svg'

const FeaturePage = () => {
  return (
    <section className='relative isolate overflow-hidden bg-[#FAFAFA]'>
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0 -z-10 overflow-hidden'>
        {/* TOP LEFT — GREEN */}
        <div className='absolute left-[8%] top-[-12%] h-155 w-155 rounded-full bg-[#CBFC01] opacity-40 blur-[140px]' />

        {/* TOP RIGHT — BLUE  */}
        <div className='absolute right-[-15%] top-[-10%] h-155 w-155 rounded-full bg-[#003BE2] opacity-[0.08] blur-[140px]' />

        {/* MIDDLE LEFT — BLUE */}
        <div className='absolute left-[-18%] top-[25%] h-155 w-155 rounded-full bg-[#003BE2] opacity-[0.14] blur-[140px]' />

        {/* BOTTOM LEFT — GREEN */}
        <div className='absolute bottom-[-12%] left-[-18%] h-105 w-170 rounded-full bg-[#CBFC01] opacity-50 blur-[140px]' />

        {/* BOTTOM RIGHT — BLUE */}
        <div className='absolute bottom-[-12%] right-[-18%] h-170 w-170 rounded-full bg-[#003BE2] opacity-[0.22] blur-[140px]' />
      </div>

      <div className='container-page relative z-10 flex flex-col gap-12 py-12 sm:py-16'>
        {/* 1st card */}
        <div className='flex flex-col gap-8 lg:flex-row lg:gap-16'>
          {/* TEXT SECTION */}
          <div className='flex flex-1 flex-col gap-6 sm:gap-10'>
            <h1 className='text-[clamp(2rem,4vw,2.75rem)] font-semibold text-neutral-950'>
              <span className='lg:whitespace-nowrap'>
                Your Path to Professional
              </span>{' '}
              <br />
              Growth Starts Here!
            </h1>

            <p>
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>

            <div className='flex flex-wrap gap-x-6 gap-y-4 sm:gap-x-10 lg:gap-14'>
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
                  <h3 className='text-4xl font-medium text-secondary'>
                    {item.value}
                  </h3>

                  <p className='text-lg text-neutral-700'>{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* IMAGE SECTION */}
          <div className='relative min-h-88 flex-1 sm:min-h-104 lg:min-h-0'>
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
            <Image
              src={frame_1}
              alt='shape_1'
              width={170}
              height={170}
              className='absolute right-0 top-6 z-50 sm:right-0 sm:top-10 lg:-right-9'
            />

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
                w-full
                max-w-137.5
                object-contain
              '
            />

            {/* Learning progress - FRONT */}
            <LearningCard />
          </div>
        </div>

        {/* 2nd card */}
        <div className='flex flex-col gap-8 lg:flex-row-reverse lg:gap-10'>
          {/* TEXT SECTION */}
          <div className='my-auto flex flex-1 flex-col gap-6 sm:gap-10'>
            <h1 className='text-[clamp(2rem,4vw,2.75rem)] font-semibold text-neutral-950'>
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

          {/* IMAGE SECTION */}
          <div className='relative flex-1 shrink-0'>
            {/* Girl */}
            <Image
              src={girlImage}
              alt='girl-image'
              width={435}
              priority
              className='relative left-0 z-40 -mb-18 block max-w-full object-contain sm:left-8 lg:left-20'
            />

            <Image
              src={frame_2}
              alt='shape_2'
              className='absolute right-4 top-16 z-50 sm:right-10 sm:top-22 lg:right-20'
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
            <div className='absolute left-0 top-45 z-30'>
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
            <div className='absolute bottom-15 right-0 z-40'>
              <HappyStudentCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturePage
