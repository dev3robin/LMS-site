import React, { useState, useEffect, useRef } from 'react';
import CourseCard from '../courseCard';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import useHorizontalScroll from '../../utils/ScrollingFunction';


const CoursesDiv = ({ courseData,activeBranch }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCourses, setSelectedCourses] = useState([]);

  const [activeCategory,setActiveCategory]=useState('')

  const CourseNavScroll =useRef(null)
  const CourseCardScroll =useRef(null)
  const { scroll: scroll1, showLeftBtn: showLeft1, showRightBtn: showRight1 } = useHorizontalScroll(CourseNavScroll);
  const { scroll: scroll2, showLeftBtn: showLeft2, showRightBtn: showRight2 } = useHorizontalScroll(CourseCardScroll);  


  useEffect(() => {
    if (courseData.length > 0) {
      setSelectedCourses(courseData[0].courses);
      setActiveIndex(0);
      setActiveCategory(courseData[0].category);
    }
  }, [courseData]);

  const handleCategoryClick = (item, index) => {
    setSelectedCourses(item.courses);
    setActiveIndex(index); // Update active index when a category is clicked
    setActiveCategory(item.category);
  };

  return (
    <div className="coursesDivTemp">
      <div className="Nav" >
        {showLeft1 && (
          <button onClick={() => scroll1('left')} className="scrollBtn left">
            <ArrowBackIosIcon sx={{ color: '#6D28D2' }} />
          </button>
        )}
        <ul className="coursesBtn" ref={CourseNavScroll}>
          {courseData.map((item, index) => (
            <li
              key={index}
              className={activeIndex === index ? 'active' : ''}
              onClick={() => handleCategoryClick(item, index)}
            >
              {item.category}
            </li>
          ))}
        </ul>
        {showRight1 && (
          <button onClick={() => scroll1('right')} className="scrollBtn right">
            <ArrowForwardIosIcon sx={{ color: '#6D28D2' }} />
          </button>
        )}
      </div>
      <div className="coursesDivContainer">
        {showLeft2 && (
          <button onClick={() => scroll2('left')} className="scrollBtn left">
            <ArrowBackIosIcon sx={{ color: '#6D28D2' }} />
          </button>
        )}
        <ul className="coursesDiv" ref={CourseCardScroll}>
          {selectedCourses.length > 0 &&
            selectedCourses.map((course, index) => (
                <li key={index}>
                  <CourseCard course={course} activeBranch={activeBranch} activeCategory={activeCategory} />
                </li>

            ))}
        </ul>
        {showRight2 && (
          <button onClick={() => scroll2('right')} className="scrollBtn right">
            <ArrowForwardIosIcon sx={{ color: '#6D28D2' }} />
          </button>
        )}
    </div>
      <div className="courselink"><button>Sell all Data science course</button></div>
    </div>
  );
};

export default CoursesDiv;
