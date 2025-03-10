import React from 'react'
import CourseCard from '../courseCard'
const WebDev = () => {
  return (
    <div className="webDev">
    <div className='Nav'>
        <ul className='navBtn'>
          <li>Web Development</li>
          <li>JavaScript</li>
          <li>React JS</li>
          <li>Angular</li>
          <li>Java</li>
          <li>Android Development</li>
          <li>iOS Development</li>
          <li>
          CSS</li>
        </ul>
    </div>
    <CourseCard />
  </div>
  )
}

export default WebDev