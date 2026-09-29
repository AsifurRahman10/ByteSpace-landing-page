import { Navbar } from '../layout/Navbar'
import searchImage from '../../../public/images/hero/icon/search.svg'
import Image from 'next/image'
import Button from '@/components/shared/Button'

const HeroPage = () => {
  return (
    <div
      className='min-h-screen
    bg-brand-blue hero-grid'>
      <Navbar />

      {/* banner content */}

      <div>
        <h1 className='text-background text-7xl font-semibold text-center max-w-4xl mx-auto mt-12'>
          Get Access to Hundreds Courses Available
        </h1>

        <p className='text-neutral-100 text-center mt-10 text-lg'>
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        {/* search */}
        <div className='mx-auto mt-10 flex w-1/2 items-stretch gap-6'>
          {/* Search input */}
          <div className='flex flex-1 items-center rounded-3xl bg-white px-6 py-3'>
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
              className='w-full bg-transparent text-neutral-400 text-lg outline-none placeholder:text-[#858993]'
            />
          </div>

          {/* Search button */}
          <Button text='Search  ' />
        </div>
      </div>
    </div>
  )
}

export default HeroPage
