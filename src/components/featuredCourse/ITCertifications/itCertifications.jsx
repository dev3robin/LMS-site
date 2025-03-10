import React from 'react'
import CourseCard from '../courseCard'
const ItCertifications = () => {
  return (
    <div className="ITcertifications">
      <div className='Nav'>
          <ul className='navBtn'>
            <li>Amazon AWS</li>
            <li>AWS Certified Cloud Practitioner</li>
            <li>AZ-900: Microsoft Azure Fundamentals</li>
            <li>AWS Certified Developer - Associate</li>
            <li>Cisco Certified Network Associate (CCNA)</li>
            <li>Artificial Intelligence (AI)</li>
            <li>CompTIA Security+</li>
          </ul>
      </div>
      <CourseCard />
    </div>
  )
}

export default ItCertifications