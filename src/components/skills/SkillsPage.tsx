'use client'
import { useState } from 'react'

import CourseCard from '@/components/shared/Card'
import { courses } from '../../../public/dummyData/skillsData'

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

  const [activeCategory, setActiveCategory] = useState('Featured')
  return (
    <div className='my-4 sm:my-16'>
      <h1 className='px-5 text-center text-[clamp(2rem,5vw,2.75rem)] font-semibold'>
        Discover Your Passion, <br className='hidden sm:block' /> Build Your
        Skills
      </h1>
      <p className='text-neutral-400 text-lg mt-4 text-center'>
        At Bytespace Courses, we bring you closer to life-changing knowledge.
        Explore a variety of courses across different{' '}
        <br className='hidden sm:block' /> fields, from technology to the arts,
        and make a difference in your career and life.
      </p>

      {/* skill selection */}

      <section className='px-4 py-4 sm:py-11'>
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

      <section className='px-5 oy-6 sm:py-16 container-page'>
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
