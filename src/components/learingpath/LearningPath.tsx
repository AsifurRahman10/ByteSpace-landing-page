import designIcon from '../../../public/images/learning/design.svg'
import developmentIcon from '../../../public/images/learning/development.svg'
import softwareIcon from '../../../public/images/learning/computer.svg'
import businessIcon from '../../../public/images/learning/business.svg'
import marketingIcon from '../../../public/images/learning/marketing.svg'
import photographyIcon from '../../../public/images/learning/photography.svg'
import Image, { StaticImageData } from 'next/image'

export const LearningPath = () => {
  const categories = [
    {
      title: 'Design',
      icon: designIcon
    },
    {
      title: 'Development',
      icon: developmentIcon
    },
    {
      title: 'IT & Software',
      icon: softwareIcon
    },
    {
      title: 'Business',
      icon: businessIcon
    },
    {
      title: 'Marketing',
      icon: marketingIcon
    },
    {
      title: 'Photography',
      icon: photographyIcon
    }
  ]
  return (
    <div className='text-center container-page mt-10 sm:mt-0'>
      <h1 className='text-4xl font-semibold'>
        Explore Diverse Learning Paths at Bytespace
      </h1>

      <p className='text-neutral-400 text-lg mt-4'>
        At Bytespace, we believe in empowering individuals through knowledge.
        Our diverse range of courses spans various <br /> fields, ensuring
        there&apos;s something for everyone. Unleash your potential and explore
        our carefully curated categories.
      </p>

      {/* card  */}
      <div className='flex flex-col sm:flex-row my-8 sm:my-16 gap-8 justify-center items-center'>
        {categories.map((cat, idx) => (
          <CategoryCard
            title={cat.title}
            icon={cat.icon}
            key={idx}
          />
        ))}
      </div>
    </div>
  )
}

interface CategoryCardProps {
  title: string
  icon: StaticImageData
}

const CategoryCard = ({ title, icon }: CategoryCardProps) => {
  return (
    <article
      className='
        flex
        sm:aspect-square
        w-full
        flex-col
        items-center
        justify-center
        rounded-xl
        border
        border-[#D9D9D9]
        bg-white
        px-3
        py-6
        sm:py-3
        transition-all
        duration-200
        hover:-translate-y-1
        hover:border-primary
        hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]
      '>
      {/* Icon */}
      <div
        className='
          flex
          size-11
          items-center
          justify-center
          rounded-full
          bg-primary
        '>
        <Image
          src={icon}
          alt='icon'
          width={24}
          height={24}
          className='size-6'
        />
      </div>

      {/* Title */}
      <h3 className='mt-3 text-center text-xl font-medium whitespace-nowrap text-neutral-950'>
        {title}
      </h3>
    </article>
  )
}
