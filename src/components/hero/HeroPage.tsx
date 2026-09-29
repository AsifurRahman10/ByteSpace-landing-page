import { Navbar } from '../layout/Navbar'
import searchImage from '../../../public/images/hero/icon/search.svg'
import humanImage from '../../../public/images/hero/human.png'
import Image from 'next/image'
import Button from '@/components/shared/Button'
import ellipse7 from '../../../public/images/hero/Ellipse_7.png'
import frame from '../../../public/images/hero/Frame.png'
import frame2 from '../../../public/images/hero/Frame_2.png'
import frame3 from '../../../public/images/hero/Frame_3.png'
import cone from '../../../public/images/hero/Cone.png'
import coneWhite from '../../../public/images/hero/Cone_white.png'

const HeroPage = () => {
  return (
    <div className='relative isolate flex h-dvh flex-col overflow-hidden bg-brand-blue hero-grid'>
      <Navbar />

      {/* banner content */}

      <section className='relative flex-1'>
        <div className='relative z-10 px-5 pt-[clamp(1rem,5vh,2.5rem)]  '>
          <h1 className='mx-auto mt-0 max-w-4xl text-center text-[clamp(2.5rem,5.2vw,4.5rem)] leading-[1.05] font-semibold text-background'>
            Get Access to Hundreds Courses Available
          </h1>

          <p className='mt-[clamp(1rem,3vh,1.5rem)] text-center text-lg text-neutral-100'>
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>

          {/* search */}
          <div className='mx-auto mt-[clamp(1.25rem,4vh,2.5rem)] flex w-[min(90%,44rem)] items-stretch gap-3 sm:gap-4'>
            {/* Search input */}
            <div className='flex min-w-0 flex-1 items-center rounded-3xl bg-white px-4 py-[clamp(0.65rem,1.5vh,0.9rem)] sm:px-6'>
              <Image
                src={searchImage}
                alt='Search'
                width={22}
                height={22}
                className='mr-1'
              />

              <input
                type='text'
                placeholder='Course, topic, creator'
                className='w-full min-w-0 bg-transparent text-lg text-neutral-400 outline-none placeholder:text-[#858993]'
              />
            </div>

            {/* Search button */}
            <Button text='Search  ' />
          </div>
        </div>

        <Image
          src={frame}
          alt=''
          aria-hidden='true'
          width={267}
          height={387}
          className='pointer-events-none absolute left-[-1.5vw] top-[18%] z-0 hidden h-auto w-[clamp(7.5rem,15vw,17rem)] max-w-none select-none md:block'
        />
        <Image
          src={frame2}
          alt=''
          aria-hidden='true'
          width={177}
          height={176}
          className='pointer-events-none absolute left-[14%] top-[43%] z-0 hidden h-auto w-[clamp(5rem,8vw,9rem)] max-w-none select-none md:block'
        />
        <Image
          src={frame3}
          alt=''
          aria-hidden='true'
          width={317}
          height={332}
          className='pointer-events-none absolute right-[3%] bottom-[7%] z-0 hidden h-auto w-[clamp(8rem,14vw,18rem)] max-w-none select-none md:block'
        />
        <Image
          src={cone}
          alt=''
          aria-hidden='true'
          width={213}
          height={372}
          className='pointer-events-none absolute right-[-2%] top-[16%] z-0 hidden h-auto w-[clamp(8rem,12vw,15rem)] max-w-none select-none md:block'
        />
        <Image
          src={coneWhite}
          alt=''
          aria-hidden='true'
          width={346}
          height={343}
          className='pointer-events-none absolute left-[4%] bottom-[6%] z-0 hidden h-auto w-[clamp(9rem,18vw,22rem)] max-w-none select-none md:block'
        />

        <div className='pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[min(42vh,24rem)]'>
          {/* Green background ellipse */}
          <Image
            src={ellipse7}
            alt=''
            width={1149}
            height={442}
            className='absolute bottom-0 left-1/2 h-auto w-[min(80vw,115.5vh)] max-w-none -translate-x-1/2'
          />

          {/* Human */}
          <Image
            src={humanImage}
            width={722}
            height={515}
            alt='smiling human'
            className='absolute bottom-[-3vh] left-1/2 h-auto w-[min(56vw,75vh)] max-w-none -translate-x-1/2'
          />
        </div>
      </section>
    </div>
  )
}

export default HeroPage
