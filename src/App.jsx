import './App.css'
import NavBar from './components/nav/nav'
import './components/nav/nav.css'
import './components/qoutes/home.css'
import './components/featuredCourse/featuredCourse.css'
import Footer from './components/footer/footer'
import AppRoutes from './routing/appRouting';

function App() {
  return (
    <>
      <NavBar />
      <AppRoutes />
      <Footer />
    </>
  )
}

export default App
