import React,{useState,useEffect} from 'react';
import Swiper from '../swiperPagination/swiper';
import Pagination from '../swiperPagination/pagination';
import BoldLines from './boldLines';
const HeroSection = () => {
  const slides=["/herosection_img/img3.png","/herosection_img/img4.png"]
  const [currentIndex,setCurrentIndex]=useState(0)
  let autoPlayInterval;

  const moveToSlide = (index) => {
    if (index >= 0 && index < slides.length) {
      setCurrentIndex(index);
    } else if (index >= slides.length) {
      setCurrentIndex(0);
    } else if (index < 0) {
      setCurrentIndex(slides.length - 1);
    }
  };
  useEffect(() => {
    autoPlayInterval = setInterval(() => {
      moveToSlide(currentIndex + 1);
    }, 5000);

    return () => clearInterval(autoPlayInterval);
  }, [currentIndex]);


  return (
    //using react swiper module
  <>
    <div className='carousel'>
      <Swiper slides={slides}  currentIndex={currentIndex} moveToSlide={moveToSlide} />
      <Pagination slides={slides} currentIndex={currentIndex} moveToSlide={moveToSlide} />
    </div>
    <BoldLines />
  </>
  );
}

export default HeroSection;
