'use client'
import { useState } from 'react'
import skill1 from '../../../public/images/skills/skill1.jpg'
import skill2 from '../../../public/images/skills/skill2.jpg'
import skill3 from '../../../public/images/skills/skill3.jpg'
import skill4 from '../../../public/images/skills/skill4.jpg'
import skill5 from '../../../public/images/skills/skill5.jpg'
import skill6 from '../../../public/images/skills/skill6.jpg'
import CourseCard from '@/components/shared/Card'

const SkillsPage = () => {
  const categories = [
    'Featured',
    'Music',
    'Drawing & Painting',
    'Marketing',
    'Animation',
    'Social Media',
    'UI/UX Design',
    'Creative Marketing',
    'Digital Illustration',
    'Film & Video',
    'Crafts',
    'Freelance & Entrepreneurship',
    'Graphic Design',
    'Photography',
    'Productivity',
    'Web Development',
    'Data Science',
    'Cooking'
  ]

  const courses = [
    {
      id: 1,
      title: 'Learn Figma from Basic',
      creator: 'purepearl studio',
      image: skill1,
      rating: 4.5,
      lessons: '17 Lessons',
      duration: '2 hours 16 mins',
      comments: '59 Comments',
      level: 'Beginner',
      price: '$25'
    },
    {
      id: 2,
      title: 'Build Digital Asset',
      creator: 'purepearl studio',
      image: skill2,
      rating: 4.5,
      lessons: '17 Lessons',
      duration: '2 hours 16 mins',
      comments: '59 Comments',
      level: 'Beginner',
      price: '$25'
    },
    {
      id: 3,
      title: 'the Power of Big Data',
      creator: 'purepearl studio',
      image: skill3,
      rating: 4.5,
      lessons: '17 Lessons',
      duration: '2 hours 16 mins',
      comments: '59 Comments',
      level: 'Beginner',
      price: '$25'
    },
    {
      id: 4,
      title: 'Balancing Productivity and Self-Care',
      creator: 'purepearl studio',
      image: skill4,
      rating: 4.5,
      lessons: '17 Lessons',
      duration: '2 hours 16 mins',
      comments: '59 Comments',
      level: 'Beginner',
      price: '$25'
    },
    {
      id: 5,
      title: 'Mastering Money Management',
      creator: 'purepearl studio',
      image: skill5,
      rating: 4.5,
      lessons: '17 Lessons',
      duration: '2 hours 16 mins',
      comments: '59 Comments',
      level: 'Beginner',
      price: '$25'
    },
    {
      id: 6,
      title: 'From Idea to Startup Success',
      creator: 'purepearl studio',
      image: skill6,
      rating: 4.5,
      lessons: '17 Lessons',
      duration: '2 hours 16 mins',
      comments: '59 Comments',
      level: 'Beginner',
      price: '$25'
    }
  ]

  const [activeCategory, setActiveCategory] = useState('Featured')
  return (
    <div className='my-16'>
      <h1 className='text font-semibold text-[44px] text-center'>
        Discover Your Passion, <br /> Build Your Skills
      </h1>
      <p className='text-neutral-400 text-lg mt-4 text-center'>
        At Bytespace Courses, we bring you closer to life-changing knowledge.
        Explore a variety of courses across different <br /> fields, from
        technology to the arts, and make a difference in your career and life.
      </p>

      {/* skill selection */}

      <section className='px-4 py-11'>
        <div className='mx-auto flex max-w-6xl flex-wrap justify-center gap-3'>
          {categories.map((category) => {
            const isActive = activeCategory === category

            return (
              <button
                key={category}
                type='button'
                onClick={() => setActiveCategory(category)}
                className={`
                rounded-3xl px-4 py-3
                text-[16px] font-medium
                whitespace-nowrap
                transition-colors
                ${
                  isActive
                    ? 'bg-primary text-neutral-950'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }
              `}>
                {category}
              </button>
            )
          })}

          <button
            type='button'
            className='rounded-full px-1 py-2 text-sm font-medium text-blue-600 hover:text-blue-700'>
            + More
          </button>
        </div>
      </section>

      {/* card section */}

      <section className='px-5 py-16 container-page'>
        <div className='grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3'>
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              {...course}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default SkillsPage
