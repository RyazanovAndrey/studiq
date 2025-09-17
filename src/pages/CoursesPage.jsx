import React from 'react'
import SectionTitle from '../components/SectionTitle'
import CoursesList from '../sections/CoursesList'
import Girl from '../sections/Girl'

const CoursesPage = () => {
  return (
    <>
      <SectionTitle>Courses</SectionTitle>
      <div className="container mx-auto px-3 mt-10 mb-30">
        <div className="">Showing <span className='text-accent'>8</span> of <span className='text-amber-500'>25</span> Results</div>
        <CoursesList count='12' />
      </div>
      <Girl />
    </>
  )
}

export default CoursesPage