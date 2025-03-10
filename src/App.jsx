import './App.css'
import NavBar from './components/nav/nav'
import './components/nav/nav.css'
import './components/home/home.css'
import HeroSection from './components/home/herosection'
import FeaturedCourses from './components/featuredCourse/featuredCourses'
import './components/featuredCourse/featuredCourse.css'
import Footer from './components/footer/footer'
// import AppRoutes from './routing/appRouting';

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <FeaturedCourses />
      {/* <AppRoutes /> */}
      <Footer />
    </>
  )
}

export default App
