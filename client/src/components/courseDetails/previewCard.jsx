import React from 'react'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { useDispatch, useSelector } from 'react-redux';
import { setIsPreview } from '../../redux/coursePreview';
import VideoPlayer from './videoPlayer';
const PreviewCard = ({course}) => {
  const {isPreview}=useSelector((state)=>state.preview)
  const dispatch=useDispatch()

  
  return (
    <>
      <div className="card">
        <div className="thumbnail">
          <img src={course.thumbnail}/>
          <div className="preview-btn" onClick={()=>dispatch(setIsPreview(true))}><span><PlayCircleIcon sx={{fontSize:"80px"}} /></span><span className='px-3 py-1 rounded-sm bg-black/50'>Preview this course</span></div>
        </div>

        <div className="card-tabs">
          <div className="active">Personal</div>
          <div>Teams</div>
        </div>

        <div className="card-content">
          <div className="price">$10.99 <span className="original-price">{course.price}</span> 85% off</div>
          <div className="offer">⏰ 1 day left at this price!</div>

          <button className="btn add-to-cart">Add to cart</button>
          <button className="btn buy-now">Buy now</button>

          <div className="guarantee">
            30-Day Money-Back Guarantee<br/>
            Full Lifetime Access
          </div>

          <div className="actions">
            <span>Share</span>
            <span>Gift this course</span>
            <span>Apply Coupon</span>
          </div>

          <div className="coupon-box">
            <label>Udemy coupon</label>
            <div className="coupon-input">
              <input type="text" placeholder="Enter Coupon"/>
              <button>Apply</button>
            </div>
          </div>

          <div className="or-divider">or</div>

          <div className="subscribe-box">
            <div>
              Subscribe to Udemy’s top courses
            </div>
            <div className="mt-2 text-amber-50">
              Get this course, plus 12,000+ of our top-rated courses, with Personal Plan.
              <a href="#">Learn more</a>
            </div>
            <button className="try-plan">Try Personal Plan for free</button>
          </div>
        </div>
      </div>
      {isPreview && <VideoPlayer course={course}/>}
    </>
  )
}

export default PreviewCard