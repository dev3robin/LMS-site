import React, { useRef,useEffect, useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const Swiper = ({slides,moveToSlide,currentIndex}) => {
  const swiperRef=useRef(null)
  const [slideWidth,setSlideWidth]=useState(null)
  useEffect(() => {
    if (swiperRef.current) {
      setSlideWidth(swiperRef.current.offsetWidth);
    }
  }, [slides]);

  return (
    <div className='swiper-container' >
      <div className="swiperContent" ref={swiperRef}>
        {slides.map((slide,index)=>(
          <div key={index} className="slides"style={{ transform: `translateX(-${currentIndex * slideWidth}px)` }}>
            <img className="w-full aspect-[6/2]"src={slide} alt="" />
          </div>
        ))}
      </div>
        <button className='prev' onClick={()=>moveToSlide(currentIndex-1)}><ArrowBackIosIcon style={{ fontSize: '50px' }} /></button>
        <button className='next' onClick={()=>moveToSlide(currentIndex+1)}><ArrowForwardIosIcon style={{ fontSize: '50px' }} /></button>
    </div>
  )
}

export default Swiper