import React, { useState, useRef } from 'react';
import DoneIcon from '@mui/icons-material/Done';
import { Link } from 'react-router-dom';
import AddedToCartDialog from '../cart/cartPop';

const CourseCard = ({ course, activeBranch, activeCategory, selectedCourses }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoverPosition, setHoverPosition] = useState({ left: '100%', right: 'auto' });

  const cardRef = useRef(null);
  const hoverRef = useRef(null);
  const handleMouseEnter = () => {
    const cardRect = cardRef.current?.getBoundingClientRect();
    const hoverRect = hoverRef.current?.getBoundingClientRect();

    if (!cardRect || !hoverRect) return;

    const spaceRight = window.innerWidth - cardRect.right;
    const spaceLeft = cardRect.left;

    if (spaceRight >= hoverRect.width) {
      // Show on the right
      setHoverPosition({ left: 'calc(100% + 10px)', right: 'auto' });
    } 
    else if (spaceLeft >= hoverRect.width) {
      // Show on the left
      setHoverPosition({ right: 'calc(100% + 10px)', left: 'auto' });
    } 
    else {
      // Not enough space on either side → show over the card
      setHoverPosition({ left: 0, right: 'auto' });
    }
  };


  const handleMouseLeave = () => {
    setHoverPosition({ left: 'calc(100% + 10px)', right: 'auto' }); // reset
  };

  const handleAdd = () => {
    setIsOpen(true);
  };

  return (
    <div
      className="courseCard relative"
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to="/courseDetails" state={{ course, activeBranch, activeCategory }}>
        <div className="courseProfile">
          <div className="max-h-[250px] max-w-[300px] overflow-hidden">
            <img src={course.thumbnail} className="thumlineImg" alt="thumbnail" />
          </div>
          <div className="courseDetails">
            <h1>{course.title}</h1>
            <p className="creatorDetails">By {course.creator}</p>
            <p className="ratings">Rating: ⭐ {course.rating}</p>
            <p className="pricing">{course.price}</p>
          </div>
        </div>
      </Link>

      {/* Hover Content */}
      <div
        className="courseDetailsHover absolute top-0 z-10 w-[300px] bg-white shadow-lg p-4 rounded-md transition-all duration-300"
        ref={hoverRef}
        style={hoverPosition}
      >
        <div className="title font-bold text-lg">{course.title}</div>
        <div className="updateinfo text-sm text-gray-500">
          <span className="text-green-600 font-semibold">Bestseller</span> • Updated March 2025
        </div>
        <div className="details text-sm mt-2">32.5 total hours • All Levels • Subtitles, CC</div>
        <div className="feature text-sm mt-2">
          <p>
            25+ Generative AI Tools to 10x Business, Productivity, Creativity | Prompt Engineering,
            ChatGPT, Custom GPTs, Midjourney
          </p>
        </div>
        <div className="describtion mt-2">
          <ul className="text-sm space-y-2">
            <li className="flex gap-2">
              <DoneIcon fontSize="small" />
              <p>
                ChatGPT: Create content, synthesize information, and learn faster than ever with
                effective prompt engineering!
              </p>
            </li>
            <li className="flex gap-2">
              <DoneIcon fontSize="small" />
              <p>
                ChatGPT: Turn your creativity into paid work, generate fresh ideas, reach new
                audiences, and scale your projects!
              </p>
            </li>
            <li className="flex gap-2">
              <DoneIcon fontSize="small" />
              <p>
                Productivity: Achieve your goals faster with ChatGPT, manage your time, prioritize
                tasks, and create an optimized daily schedule!
              </p>
            </li>
          </ul>
        </div>
        <div className="btnDiv mt-4">
          <button
            onClick={handleAdd}
            className="w-full bg-purple-600 text-white rounded py-2.5 hover:bg-purple-500 active:bg-purple-800"
          >
            Add to cart
          </button>
        </div>
      </div>

      <AddedToCartDialog
        isOpen={isOpen}
        course={course}
        selectedCourses={selectedCourses}
        activeBranch={activeBranch}
        setIsOpen={setIsOpen}
      />
    </div>
  );
};

export default CourseCard;
