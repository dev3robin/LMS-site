import React from 'react'
import CourseCard from '../courseCard'
const BusinessAnalytic = () => {
  return (
  <div className="BusinesAnalytic">
    <div className='Nav'>
        <ul className='navBtn'>
          <li>Microsoft Excel</li>
          <li>SQL</li>
          <li>Microsoft Power BI</li>
          <li>Data Analysis</li>
          <li>Business Analysis</li>
          <li>Tableau</li>
          <li>Data Visualization</li>
          <li>Data Modeling</li>
        </ul>
    </div>
    <CourseCard />
  </div>
  )
}

export default BusinessAnalytic