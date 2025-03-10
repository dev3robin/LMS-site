import React from 'react'

const Pagination = ({slides,currentIndex,moveToSlide}) => {
  return (
    <div className='pagi-container'>
      {slides.map((_,index)=>(
        <div className={`w-2.5 h-2.5 rounded-full cursor-pointer ${index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
        key={index}onClick={() => moveToSlide(index)}></div>
      ))}
    </div>
  )
}

export default Pagination