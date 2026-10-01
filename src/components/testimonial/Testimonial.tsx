import Image from 'next/image'

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Enthusiastic Learner',
    image: '/images/skills/avatar_3.png',
    quote:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."'
  },
  {
    name: 'James L.',
    role: 'Lifelong Learner',
    image: '/images/testimonials/avatar_2.png',
    quote:
      '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."'
  },
  {
    name: 'Alex B.',
    role: 'Inspired Creator',
    image: '/images/testimonials/avatar_3.png',
    quote:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."'
  }
]

const TestimonialSection = () => {
  return (
    <section className='relative isolate overflow-hidden bg-[#FAFAFA]'>
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0 -z-10 overflow-hidden'>
        <div className='absolute left-[42%] top-[-18%] h-155 w-190 rounded-full bg-[#CBFC01] opacity-45 blur-[140px]' />

        <div className='absolute right-[-12%] top-[22%] h-105 w-105 rounded-full bg-[#CBFC01] opacity-40 blur-[120px]' />

        <div className='absolute bottom-[-22%] left-[-12%] h-140 w-140 rounded-full bg-[#003BE2] opacity-[0.22] blur-[140px]' />
      </div>

      <div className='container-page relative z-10 flex flex-col gap-6 sm:gap-16 py-10 sm:py-20'>
        <div className='flex flex-col sm:flex-row items-end justify-between gap-4 sm:gap-16'>
          <h2 className='w-full text-3xl sm:text-[44px] font-semibold leading-[1.2] text-neutral-950'>
            Discover What Our Community Is Saying
          </h2>

          <p className='w-full  text-neutral-700'>
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* CARDS */}
        <div className='grid grid-cols-1 items-stretch gap-10 sm:grid-cols-2 md:grid-cols-3'>
          {testimonials.map((item, index) => (
            <div
              key={item.name}
              className={`
        flex h-full flex-col rounded-3xl bg-white p-6
        ${
          index === testimonials.length - 1
            ? 'sm:col-span-2 sm:mx-auto sm:w-1/2 md:col-span-1 md:mx-0 md:w-full'
            : ''
        }
      `}>
              <Image
                src={item.image}
                alt={item.name}
                width={80}
                height={80}
                className='size-20 rounded-full object-cover'
              />

              <div className='mt-6 flex flex-col gap-1'>
                <h4 className='text-lg font-semibold text-neutral-950'>
                  {item.name}
                </h4>

                <p className='text-secondary'>{item.role}</p>
              </div>

              <p className='mt-6 leading-7 text-neutral-700'>{item.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection
