import Image from 'next/image'
import logo from '../../../../public/images/auth/logo_sm.png'
import { courses } from '../../../../public/dummyData/skillsData'
import CourseCard from '@/components/shared/Card'
import Link from 'next/link'
import triangle from '../../../../public/images/hero/triangle.svg'
import HappyStudentCard from '@/components/shared/HappyStudentCard'
import frame_2 from '../../../../public/images/hero/Frame_2.svg'
import coneYellow from '../../../../public/images/hero/Cone_yellow.svg'

const socials = [
  {
    label: 'Continue with Facebook',
    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'
  },
  {
    label: 'Continue with Google',
    path: 'M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z'
  }
]

const inputClass =
  'h-[52px] w-full rounded-xl border border-neutral-100 px-6 text-lg text-neutral-500 outline-none transition-colors placeholder:text-neutral-400 focus:border-secondary'

const page = () => {
  const [backCourse, frontCourse] = [courses[1], courses[2]]
  return (
    <div className='hero-grid min-h-screen overflow-x-hidden bg-brand-blue'>
      <div className='container-page flex min-h-screen flex-col text-neutral-50'>
        <Image
          src={logo}
          alt='logo'
          width={30}
          height={30}
          className='absolute top-6'
        />

        <div className='my-auto flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-16'>
          {/* LEFT SECTION */}
          <div className='hidden w-full flex-col lg:flex'>
            <h4 className='text-xl font-semibold'>Sign in with ease</h4>

            <p className='mt-4 text-lg leading-7.25'>
              Experience a seamless and efficient sign-in process that grants
              you instant access to a world of knowledge.
            </p>

            {/* Cards */}
            <div className='relative mt-[clamp(32px,8vh,84px)] h-140 w-121.25'>
              {/* back card */}
              <div className='absolute left-0 top-22.5 z-10 w-93.25'>
                <CourseCard {...backCourse} />
              </div>
              {/* front card */}
              <div className='absolute left-27.75 top-0 z-20 w-93.25'>
                <CourseCard {...frontCourse} />
              </div>
              <div
                aria-hidden='true'
                className='
            pointer-events-none
            absolute
            z-50
            bottom-0
            hidden
            h-47.25
            w-47.5
            -left-2
            bg-[#D4FB20]
            sm:block
  '
                style={{
                  maskImage: `url(${triangle.src})`,
                  WebkitMaskImage: `url(${triangle.src})`,
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                  maskPosition: 'center',
                  WebkitMaskPosition: 'center',
                  maskSize: 'contain',
                  WebkitMaskSize: 'contain'
                }}
              />
              <div className='hidden sm:block absolute bottom-8 right-0 z-50'>
                <HappyStudentCard bgColor='#D4FB20' />
              </div>

              <Image
                src={coneYellow}
                alt=''
                aria-hidden='true'
                width={145}
                height={145}
                className='absolute z-50 top-5 left-8 hidden md:block'
              />
              <Image
                src={frame_2}
                alt=''
                aria-hidden='true'
                width={175}
                height={175}
                className='absolute z-50 bottom-20 -right-10 hidden md:block'
              />
            </div>
          </div>

          {/* FORM CARD */}
          <div className='w-full rounded-[40px] bg-white px-6 py-[clamp(28px,5.5vh,56px)] text-neutral-950 sm:px-14'>
            <div>
              <p className='text-lg text-secondary'>Sign In</p>
              <h1 className='text-[44px] text-neutral-950 font-semibold leading-tight'>
                Welcome Back
              </h1>
            </div>

            <form className='mt-[clamp(20px,4vh,40px)] flex flex-col gap-4'>
              <div className='flex flex-col gap-2'>
                <label
                  htmlFor='email'
                  className='text-sm font-medium'>
                  Email
                </label>
                <input
                  id='email'
                  type='email'
                  placeholder='designer@example.com'
                  className={inputClass}
                />
              </div>

              <div className='flex flex-col gap-2'>
                <label
                  htmlFor='password'
                  className='text-sm font-medium'>
                  Password
                </label>
                <input
                  id='password'
                  type='password'
                  placeholder='********'
                  className={inputClass}
                />
              </div>

              <button
                type='submit'
                className='mt-4 h-11.5 cursor-pointer self-end rounded-full bg-primary px-6 text-lg font-medium text-neutral-950 transition-opacity hover:opacity-80'>
                Sign In
              </button>
            </form>

            {/* Divider */}
            <div className='mt-[clamp(24px,6vh,62px)] flex items-center gap-3'>
              <span className='h-px flex-1 bg-neutral-200' />
              <span className='text-neutral-500'>or</span>
              <span className='h-px flex-1 bg-neutral-200' />
            </div>

            {/* Socials */}
            <div className='mt-[clamp(20px,4vh,40px)] flex justify-center gap-4'>
              {socials.map((item) => (
                <button
                  key={item.label}
                  type='button'
                  aria-label={item.label}
                  className='flex p-4 cursor-pointer items-center justify-center rounded-3xl border border-neutral-200 transition-colors hover:bg-neutral-50'>
                  <svg
                    viewBox='0 0 24 24'
                    className='size-8 fill-neutral-950'
                    aria-hidden='true'>
                    <path d={item.path} />
                  </svg>
                </button>
              ))}
            </div>

            <p className='mt-[clamp(28px,7vh,72px)] text-center text-neutral-400'>
              New user?{' '}
              <Link
                href='/register'
                className='text-secondary hover:underline'>
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
