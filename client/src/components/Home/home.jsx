import React from 'react'
import HeroSection from '../qoutes/herosection'
import FeaturedCourses from '../featuredCourse/featuredCourses'

const Home = () => {
  return (
    <div className='mainContent'>
      <HeroSection />
      <FeaturedCourses />
    </div>
  )
}

export default Home