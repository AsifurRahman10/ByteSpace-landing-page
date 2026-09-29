import Image, { StaticImageData } from 'next/image'

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
              className='rounded-full bg-white/60 px-2.5 py-1 text-[12px] font-medium text-neutral-700 backdrop-blur-sm'>
              {item}
            </span>
          ))}

          {/* <span className='rounded-full bg-white/60 px-2.5 py-1 text-[10px] text-neutral-700 backdrop-blur-sm'>
            {duration}
          </span>

          <span className='rounded-full bg-white/60 px-2.5 py-1 text-[10px] text-neutral-700 backdrop-blur-sm'>
            {comments}
          </span> */}
        </div>
      </div>

      {/* Course information */}
      <div className='pt-3'>
        {/* Title + rating */}
        <div className='flex items-center justify-between gap-2'>
          <h3 className='min-w-0 truncate text-[16px] font-semibold text-neutral-950'>
            {title}
          </h3>

          <div className='flex shrink-0 items-center gap-1 text-sm text-neutral-500'>
            <span>{rating}</span>
            <span className='text-[#C8C8C8]'>★</span>
          </div>
        </div>

        {/* Creator */}
        <p className='mt-0.5 text-[11px] text-neutral-500'>
          by <span className='text-blue-600'>{creator}</span>
        </p>

        {/* Bottom metadata */}
        <div className='mt-3 flex items-center justify-between gap-2'>
          {/* Level */}
          <div className='flex items-center gap-1.5 rounded-full bg-[#F5F5F5] px-3 py-1.5 text-[11px] text-neutral-600'>
            <span className='flex items-end gap-[2px]'>
              <span className='h-2 w-[2px] bg-neutral-500' />
              <span className='h-3 w-[2px] bg-neutral-500' />
              <span className='h-4 w-[2px] bg-neutral-500' />
            </span>

            <span>{level}</span>
          </div>

          {/* Students */}
          <div className='flex items-center'>
            <div className='flex -space-x-2'>
              {['1', '2', '3', '4'].map((avatar) => (
                <div
                  key={avatar}
                  className='size-7 rounded-full border-2 border-white bg-neutral-300'
                />
              ))}
            </div>

            <span className='relative z-10 -ml-1 flex size-7 items-center justify-center rounded-full border-2 border-white bg-lime-300 text-[10px] font-medium text-neutral-900'>
              26+
            </span>
          </div>
        </div>

        {/* Price */}
        <div className='mt-3'>
          <span className='text-xl font-semibold text-blue-600'>{price}</span>
          <span className='text-[10px] text-neutral-500'>/lifetime</span>
        </div>
      </div>
    </article>
  )
}

export default CourseCard
