import { Navbar } from '../layout/Navbar'
import Image from 'next/image'
import Button from '@/components/shared/Button'
import HappyStudentCard from '@/components/shared/HappyStudentCard'
import LearningCard from '@/components/shared/LearningCard'

const HeroPage = () => {
  return (
    <div className='relative isolate flex h-fit md:h-[60vh] lg:h-dvh flex-col overflow-hidden bg-brand-blue hero-grid'>
      <Navbar />

      {/* banner content */}

      <section className='relative flex-none md:flex-1'>
        <div className='relative z-10 px-5 sm:pt-[clamp(1rem,5vh,2.5rem)]  '>
          <h1 className='mx-auto mt-6 sm:pt-8 sm:max-w-4xl text-center text-3xl sm:text-[clamp(2.5rem,5.2vw,4.5rem)] leading-[1.05] font-semibold text-background'>
            Get Access to Hundreds Courses Available
          </h1>

          <p className='sm:mt-[clamp(1rem,3vh,1.5rem)] text-center sm:text-lg text-neutral-100'>
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>

          {/* search */}
          <div className='mx-auto mt-4 sm:mt-[clamp(1.25rem,4vh,2.5rem)] flex sm:w-[min(90%,44rem)] items-stretch gap-1 sm:gap-4'>
            {/* Search input */}
            <div className='flex min-w-0 flex-1 items-center rounded-3xl bg-white px-4 py-[clamp(0.65rem,1.5vh,0.9rem)] sm:px-6'>
              <Image
                src='/images/hero/icon/search.svg'
                alt='Search'
                width={22}
                height={22}
                className='mr-1'
              />

              <input
                type='text'
                placeholder='Course, topic, creator'
                className='w-full min-w-0 bg-transparent text-sm sm:text-lg text-neutral-400 outline-none placeholder:text-[#858993]'
              />
            </div>

            {/* Search button */}
            <Button className='self-stretch'>Search</Button>
          </div>
        </div>

        <Image
          src='/images/hero/Frame.png'
          alt=''
          aria-hidden='true'
          width={267}
          height={387}
          className='pointer-events-none absolute left-[-1.5vw] top-[18%] z-0 hidden h-auto w-[clamp(7.5rem,15vw,17rem)] max-w-none select-none md:block'
        />
        <Image
          src='/images/hero/Frame_2.svg'
          alt=''
          aria-hidden='true'
          width={177}
          height={176}
          className='pointer-events-none absolute left-[14%] top-[43%] z-0 hidden h-auto w-[clamp(5rem,8vw,9rem)] max-w-none select-none md:block'
        />
        <Image
          src='/images/hero/triangle.svg'
          alt=''
          aria-hidden='true'
          width={180}
          height={180}
          className='pointer-events-none absolute right-[10%] z-0 hidden h-auto  max-w-none select-none md:block'
        />
        <Image
          src='/images/hero/Frame_3.png'
          alt=''
          aria-hidden='true'
          width={317}
          height={332}
          className='pointer-events-none absolute right-[3%] bottom-[7%] z-0 hidden h-auto w-[clamp(8rem,14vw,18rem)] max-w-none select-none md:block'
        />

        <div
          aria-hidden='true'
          className='
              pointer-events-none
              absolute
              right-[-2%]
              top-[16%]
              z-0
              hidden
              h-93
              w-53.25
              bg-[#CBFC01]
              select-none
              md:block
  '
          style={{
            maskImage: "url('/images/hero/Cone.svg')",
            WebkitMaskImage: "url('/images/hero/Cone.svg')",
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
            maskPosition: 'center',
            WebkitMaskPosition: 'center',
            maskSize: 'contain',
            WebkitMaskSize: 'contain'
          }}
        />
        <Image
          src='/images/hero/Cone_white.png'
          alt=''
          aria-hidden='true'
          width={346}
          height={343}
          className='pointer-events-none absolute left-[4%] bottom-[6%] z-0 hidden h-auto w-[clamp(9rem,18vw,22rem)] max-w-none select-none md:block'
        />

        <div className='pointer-events-none relative sm:mt-8 h-40 w-full md:absolute md:inset-x-0 md:bottom-0 md:mt-0 md:h-[min(42vh,24rem)]'>
          {/* Green background ellipse */}
          <Image
            src='/images/hero/Ellipse_7.png'
            alt=''
            width={1149}
            height={442}
            className='absolute bottom-0 left-1/2 h-auto w-[min(80vw,115.5vh)] max-w-none -translate-x-1/2'
          />
          <div className='bg-background absolute w-fit p-4 left-1/3 rounded-xl hidden lg:block'>
            <p className='font-medium'>UI/UX Design</p>
            <p className='text-neutral-950 text-xs'>
              200 Courses • 1000+ Students
            </p>
          </div>

          <div className='absolute left-2/6 z-50 bottom-12 hidden lg:block'>
            <HappyStudentCard />
          </div>
          <div className='absolute right-[32%] -top-20 hidden lg:block'>
            <LearningCard />
          </div>

          {/* Human */}
          <Image
            src='/images/hero/human.png'
            width={722}
            height={515}
            alt='smiling human'
            className='absolute bottom-[-3vh] left-[52%] h-auto w-[min(56vw,75vh)] max-w-none -translate-x-1/2'
          />
        </div>
      </section>
    </div>
  )
}

export default HeroPage
