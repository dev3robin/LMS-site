import React from 'react';
const CourseCard = ({ course }) => {
  return (
    <div className='courseCard'>
      <div className="courseProfile">
        <img src={course.thumbnail}  className="thumlineImg" />
        <div className="courseDetails">
          <h1 className="heading">{course.title}</h1>
          <p className="creatorDetails">By {course.creator}</p>
          <p className="ratings">Rating: ⭐ {course.rating}</p>
          <p className="pricing">{course.price}</p>
        </div>
      </div>
      <div  className='courseDetailsHover'>
        <div className="title">ChatGPT Complete Guide: Learn Generative AI, ChatGPT & More</div>
        <div className="updateinfo"><span>Bestseller</span>Updated March 2025</div>
        <div className="details">32.5 total hoursAll LevelsSubtitles, CC</div>
        <div className="feature"><p>
        25+ Generative AI Tools to 10x Business, Productivity,
        Creativity | Prompt Engineering, ChatGPT, Custom GPTs,
          Midjourney
        </p></div>
        <div><ul>
          <li>ChatGPT: Create content, synthesize information, and learn faster than ever with effective prompt engineering!
          </li>
          <li>ChatGPT: Turn your creativity into paid work, generate fresh ideas, reach new audiences, and scale your projects!
          </li>
          <li>Productivity: Achieve your goals faster with ChatGPT, manage your time, prioritize tasks, and create an optimized daily schedule!
          </li>
        </ul></div>
        <div className='btnDiv'><button>Add to cart</button></div>
      </div>
    </div>
  );
};

export default CourseCard;
