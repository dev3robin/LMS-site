import { useRef, useEffect } from 'react';
import HeroSection from '../qoutes/herosection'
import FeaturedCourses from '../featuredCourse/featuredCourses'
import { gsap } from 'gsap';
import { useSelector } from 'react-redux';
const Home = () => {
  const homeRef = useRef(null);
  const isloggedIn=useSelector((state)=>state.user.isLoggedIn) 
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
      {isloggedIn &&
        <FeaturedCourses 
      />}
    </div>
  )
}

export default Home