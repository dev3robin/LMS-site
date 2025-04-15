import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './palette/palette.css'
import './components/swiperPagination/swiperpagination.css'
import './components/featuredCourse/courses.css'
import './components/footer/footer.css'
import './components/LoSignUp/signUp.css'
import './components/courseDetails/courseDetails.css'
import { BrowserRouter } from 'react-router-dom';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
