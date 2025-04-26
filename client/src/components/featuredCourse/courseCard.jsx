import React, { useState } from 'react';
import DoneIcon from '@mui/icons-material/Done';
import { Link } from 'react-router-dom';
import AddedToCartDialog from '../cart/cartPop';
const CourseCard = ({ course,activeBranch,activeCategory,selectedCourses }) => {  
  const [isOpen, setIsOpen] = useState(false)
  const handleAdd = () => {
    setIsOpen(true);
  };

  return (
    <div className='courseCard'>
      <Link to="/courseDetails"state={{ course ,activeBranch,activeCategory }}>
        <div className="courseProfile">
          <div className='max-h-[250px] max-w-[350px] overflow-hidden'><img src={course.thumbnail}  className="thumlineImg " /></div>
          <div className="courseDetails">
            <h1>{course.title}</h1>
            <p className="creatorDetails">By {course.creator}</p>
            <p className="ratings">Rating: ⭐ {course.rating}</p>
            <p className="pricing">{course.price}</p>
          </div>
        </div>
      </Link>
      <div  className='courseDetailsHover'>
        <div className="title">{course.title}</div>
        <div className="updateinfo"><span>Bestseller</span>Updated March 2025</div>
        <div className="details">32.5 total hoursAll LevelsSubtitles, CC</div>
        <div className="feature"><p>
          25+ Generative AI Tools to 10x Business, Productivity,
          Creativity | Prompt Engineering, ChatGPT, Custom GPTs,
          Midjourney
        </p></div>
        <div className='describtion'>
          <ul>
            <li>
              <span><DoneIcon /></span>
              <p>ChatGPT: Create content, synthesize information, 
                and learn faster than ever with effective prompt engineering!</p>
            </li>
            <li>
              <span><DoneIcon /></span>
              <p>ChatGPT: Turn your creativity into paid work, generate fresh ideas, 
                reach new audiences, and scale your projects!</p>
            </li>
            <li>
              <span><DoneIcon /></span>
              <p>Productivity: Achieve your goals faster with ChatGPT, 
                manage your time, prioritize tasks, and create an optimized daily schedule!</p>
            </li>
          </ul>
        </div>
        <div className='btnDiv'>
          <button 
            onClick={handleAdd}
            className='w-full bg-purple-600 rounded py-2.5 hover:bg-purple-500 active:bg-purple-800'
            >
              Add to cart</button>
        </div>
      </div>
      <AddedToCartDialog isOpen={isOpen} course={course} selectedCourses={selectedCourses} activeBranch={activeBranch} setIsOpen={setIsOpen}/>
    </div>
  );
};

export default CourseCard;

