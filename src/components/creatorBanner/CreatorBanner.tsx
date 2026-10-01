import Image from 'next/image'
import Button from '../shared/Button'

const CreatorBanner = () => {
  return (
    <section className='hero-grid relative isolate flex items-center justify-center overflow-hidden bg-brand-blue text-center py-8 sm:py-20 text-neutral-50 px-6 sm:px-2'>
      <Image
        src='/images/feature/Frame.svg'
        alt=''
        aria-hidden='true'
        width={300}
        height={300}
        className='pointer-events-none absolute -top-30 -left-20 hidden lg:block'
      />
      <Image
        src='/images/hero/Frame_2.svg'
        alt=''
        width={175}
        height={175}
        aria-hidden='true'
        className='pointer-events-none absolute left-1/6 top-6 hidden select-none lg:block'
      />
      <Image
        src='/images/creator/funnel.png'
        alt=''
        aria-hidden='true'
        width={150}
        height={150}
        className='pointer-events-none absolute bottom-1/5 left-0 hidden select-none lg:block'
      />
      <Image
        src='/images/hero/Cone.svg'
        alt=''
        aria-hidden='true'
        width={200}
        height={200}
        className='pointer-events-none absolute right-0 top-8 hidden  select-none lg:block'
      />
      <div
        aria-hidden='true'
        className='
            pointer-events-none
            absolute
            right-[14%]
            top-5
            hidden
            h-47.25
            w-47.5
            bg-[#D4FB20]
            lg:block
  '
        style={{
          maskImage: 'url(/images/hero/triangle.svg)',
          WebkitMaskImage: 'url(/images/hero/triangle.svg)',
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
        width={340}
        height={340}
        aria-hidden='true'
        className='pointer-events-none absolute -bottom-28 left-[5%]  select-none lg:-bottom-40'
      />
      <Image
        src='/images/feature/frame_1.png'
        alt=''
        aria-hidden='true'
        className='pointer-events-none absolute -bottom-35 right-[4%] hidden select-none lg:block'
        width='330'
        height='330'
      />

      <div className='relative z-50 mx-auto w-full max-w-250  '>
        <h1 className='mx-auto max-w-170 text-[34px] leading-[1.2] font-bold sm:text-[40px] lg:text-[44px]'>
          Unlock Your Potential as a Creator with ByteSpace
        </h1>
        <p className='mx-auto mt-7 max-w-245  leading-[1.75] font-normal sm:mt-10 sm:text-lg'>
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>
        <div className='mt-7 flex justify-center sm:mt-10'>
          <Button text='Join as Creator' />
        </div>
      </div>
    </section>
  )
}

export default CreatorBanner
