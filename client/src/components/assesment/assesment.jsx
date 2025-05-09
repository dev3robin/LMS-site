import React, { useState } from 'react'
import { assessmentsCard } from './asseementData'
import { CompletedCard, InProgress, UpcommingCard } from './assesmentCard'

const Assesment = () => {
  const tabs = ["Upcomming", "In progress", "Completed"]
  const [activeIndex, setActiveIndex] = useState(0)
  const handleClick = (index) => {
    setActiveIndex(index)
  }

  return (
    <div className='flex flex-col gap-2.5 w-[90%] pt-8 max-w-[1260px]'>
      <header className='text-2xl'>Assessments</header>
      <p>Complete quizzes and tests to evaluate your understanding of course material.</p>
      
    <ul className="flex gap-[.625rem] text-[.8rem] sm:text-[.8rem] md:text-[.9rem] lg:text-[1rem] bg-gray-200 rounded-sm w-fit">
      {tabs.map((item, index) => (
          <li
            className={`px-5 py-1 hover:bg-amber-50 flex items-center cursor-pointer rounded m-1 ${activeIndex === index ? 'bg-amber-100' : ''}`}
            key={index}
            onClick={() => handleClick(index)}
          >
            {item}
          </li>
        ))}
      </ul>

      <div className='flex gap-[.625rem] text-[1rem] mt-2.5 mb-5 flex-wrap'>
        {assessmentsCard
          .filter((asse) => {
            if (activeIndex === 0) return asse.status === "not-started"
            if (activeIndex === 1) return asse.status === "in-progress"
            if (activeIndex === 2) return asse.status === "completed"
            return false
          })
          .map((asse) =>
            asse.status === "completed" ? (
              <CompletedCard key={asse.id} assesment={asse} />
            ) : asse.status === "in-progress" ? (
              <InProgress key={asse.id} assesment={asse}/>
            ) : (
              <UpcommingCard key={asse.id} assesment={asse}/>
            )
          )}
      </div>
    </div>
  )
}

export default Assesment
