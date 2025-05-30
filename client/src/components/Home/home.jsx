import { useRef, useEffect } from 'react';
import HeroSection from '../qoutes/herosection'
import FeaturedCourses from '../featuredCourse/featuredCourses'
import { gsap } from 'gsap';
const Home = () => {
  const homeRef = useRef(null);

  useEffect(() => {
    if (homeRef.current) {
      gsap.fromTo(
        homeRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
      );
    }
  }, []);
  return (
    <div className='mainContent'ref={homeRef}>
      <HeroSection />
      <FeaturedCourses />
    </div>
  )
}

export default Home