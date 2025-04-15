import React, { useEffect, useRef, useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import courseData from './courseData';
import CoursesDiv from './courseDivTemp/CoursesBranch';
import useHorizontalScroll from '../utils/ScrollingFunction';

const FeaturedCourses = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeBranch,setActiveBranch]=useState('')
  const scrollContainer = useRef(null);
  const { scroll: scroll1, showLeftBtn: showLeft1, showRightBtn: showRight1 } = useHorizontalScroll(scrollContainer);

  const handleClick = (index) => {
    setActiveIndex(index);
  };
  const activeCourse = courseData[activeIndex];
  useEffect(()=>{
    setActiveBranch(courseData[activeIndex].Branch)
  },[activeIndex])
  return (
    <div className="fc_container">
      <div className="courseNav">
        {showLeft1 && (
          <button onClick={() => scroll1('left')} className="scrollBtn left">
            <ArrowBackIosIcon sx={{ color: '#6D28D2' }} />
          </button>
        )}
        <ul className="itemsContainer" ref={scrollContainer}>
          {courseData.map((course, index) => (
            <li
              key={index}
              onClick={() => handleClick(index)}
              className={activeIndex === index ? 'active' : ''}
            >
              {course.Branch}
            </li>
          ))}
        </ul>
        {showRight1 && (
          <button onClick={() => scroll1('right')} className="scrollBtn right">
            <ArrowForwardIosIcon sx={{ color: '#6D28D2' }} />
          </button>
        )}
      </div>
      <CoursesDiv courseData={activeCourse.courseBranch} activeBranch={activeBranch}/>
    </div>
  );
};

export default FeaturedCourses;
