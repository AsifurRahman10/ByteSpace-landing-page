import Image, { StaticImageData } from 'next/image'
import starIcon from '../../../public/images/skills/icon/star.svg'
import signalIcon from '../../../public/images/skills/icon/signal.svg'
import avatar_1 from '../../../public/images/skills/avatar_1.png'
import avatar_2 from '../../../public/images/skills/avatar_2.png'
import avatar_3 from '../../../public/images/skills/avatar_3.png'
import avatar_4 from '../../../public/images/skills/avatar_4.png'
interface CourseCardProps {
  title: string
  creator: string
  image: StaticImageData
  rating: number
  lessons: string
  duration: string
  comments: string
  level: string
  price: string
}

const CourseCard = ({
  title,
  creator,
  image,
  rating,
  lessons,
  duration,
  comments,
  level,
  price
}: CourseCardProps) => {
  return (
    <article className='group w-full rounded-3xl  border border-neutral-200 p-4 transition-shadow duration-200 hover:shadow-lg'>
      {/* Image */}
      <div className='relative aspect-[1.7/1] overflow-hidden rounded-[14px]'>
        <Image
          src={image}
          alt={title}
          fill
          className='object-cover transition-transform duration-300 group-hover:scale-105'
        />

        {/* Image information */}
        <div className='absolute inset-x-2 bottom-2 flex items-center justify-between gap-1'>
          {[lessons, duration, comments].map((item) => (
            <span
              key={item}
              className='rounded-full bg-white/60 px-2.5 py-1 text-[12px] font-medium text-neutral-700 backdrop-blur-sm whitespace-nowrap'>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Course information */}
      <div className='pt-3'>
        {/* Title + rating */}
        <div className='flex items-center justify-between gap-2'>
          <h3 className='min-w-0 truncate text-xl font-semibold text-neutral-950'>
            {title}
          </h3>

          <div className='flex shrink-0 items-center gap-1 text-lg text-neutral-700'>
            <span>{rating}</span>
            <Image
              src={starIcon}
              alt='icon'
            />
          </div>
        </div>

        {/* Creator */}
        <p className='mt-0.5 text-[12px] text-neutral-700'>
          by <span className='text-secondary'>{creator}</span>
        </p>

        {/* Bottom metadata */}
        <div className='mt-3 flex items-center gap-4'>
          {/* Level */}
          <div className='flex items-center font-medium rounded-3xl bg-neutral-50 px-3 py-1.5 text-xs text-neutral-600'>
            <Image
              src={signalIcon}
              alt='signal'
            />

            <span>{level}</span>
          </div>

          {/* Students */}
          <div className='flex items-center'>
            <div className='flex -space-x-2'>
              {/* {[].map((avatar) => (
                <div
                  key={avatar}
                  className='size-7 rounded-full border-2 border-white bg-neutral-300'
                />
              ))} */}

              <div className='flex shrink-0 items-center'>
                <div className='flex -space-x-2'>
                  {[avatar_1, avatar_2, avatar_3, avatar_4].map(
                    (avatar, index) => (
                      <div
                        key={index}
                        className='relative size-8 shrink-0 overflow-hidden rounded-full border-2 border-white'>
                        <Image
                          src={avatar}
                          alt='Student avatar'
                          fill
                          sizes='32px'
                          className='object-cover'
                        />
                      </div>
                    )
                  )}

                  <div className='relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full bg-[#D4FB20] text-xs font-medium text-neutral-950'>
                    26+
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Price */}
        <div className='mt-3'>
          <span className='text-xl font-semibold text-secondary'>{price}</span>
          <span className='text-xs text-neutral-700'>/lifetime</span>
        </div>
      </div>
    </article>
  )
}

export default CourseCard
