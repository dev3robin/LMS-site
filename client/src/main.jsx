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
import { Provider } from 'react-redux'
import {store} from "../src/redux/store.js"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
