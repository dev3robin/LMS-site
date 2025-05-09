import { Dialog } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import TimerIcon from '@mui/icons-material/Timer';
import Countdown from '../LoSignUp/timer';
import { setIsOpen ,setIsComplete,setAnswer} from '../../redux/assesmentSlice';
const QuizzBox = ({assesment}) => {
  const dispatch=useDispatch()
  const {isOpen,answer} =useSelector((state)=>state.Assesment)

  const [currentIndex, setCurrentIndex] = useState(0);

  const questions = assesment.quizz;
  const currentQuestion = questions[currentIndex];
  
  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleSub=()=>{
      dispatch(setIsComplete(true));
      dispatch(setIsOpen(false));
  }
  
  return (
    <Dialog open={isOpen}className="relative z-50">
      <div className="fixed inset-0 bg-black/20" aria-hidden="true" />
      <div className="fixed inset-0 flex flex-col items-center justify-center px-4">
        <div
          className=" w-[60%] text-[16px] bg-[#F6F7F9] rounded-2xl"
          role="dialog"
          aria-modal="true"
          aria-labelledby="added-to-cart-title"

        >
          {/* Header */}
          <div className='p-6'>
            <div className="flex items-center justify-between mb-10">
              <div className='flex flex-col'>
                <h2 id="added-to-cart-title" className="text-[2rem] font-bold">
                  {assesment.title}
                </h2>
                <h3>{assesment.courseName}</h3>
              </div>
              <div className='flex align-top place-items-start'>
                <span className='bg-green-200 px-2 py-1 mt-5 rounded-2xl flex '><TimerIcon /><Countdown time={30}/></span>
                <button className='hover:bg-red-500 rounded-4xl' onClick={() => dispatch(setIsOpen(false))}>
                <CloseIcon />
                </button>
              </div>
            </div>
            <div>
              <div className='flex justify-between'>
                <div>Question <span>{currentIndex + 1}</span> of <span>{questions.length}</span></div>
                <div><span>{(currentIndex + 1) *20}%</span> Complete</div>
              </div>
              <div className='mt-2 mb-3 w-full bg-[#F3F5F7] h-2 rounded-2xl'>
                <div   style={{ width: `${(currentIndex + 1) * 20}%` }}className=' h-2 rounded-2xl bg-blue-600'></div>
              </div>
            </div>
            <div>
              <h1>{currentQuestion.question}</h1>
              <ul className='flex flex-col mt-5 gap-4'>
                {currentQuestion.options.map((q)=>
                  <div className='flex flex-row gap-1.5 items-center
                    p-3.5 border border-gray-300 rounded-2xl'key={q.id}>
                    <input 
                     checked={answer?.[assesment.courseId]?.[currentQuestion.id] === q.id}
                      onChange={() =>
                        dispatch(setAnswer({
                          courseId: assesment.courseId,
                          questionId: currentQuestion.id,
                          optionId: q.id
                        }))
                      }
                      
                      type="radio"name={currentQuestion.id}/>
                      <p>{q.text}</p>
                  </div>
                )}
              </ul>
              <div className='flex justify-between align-center mt-5'>
                <button onClick={()=>handlePrev()} className='p-2 bg-gray-100 border-1 border-gray-200 rounded-xl'>Previous</button>
                {currentIndex+1 == 5 ?
                  <button className='px-3 bg-blue-500 border-1 border-gray-200 rounded-xl'onClick={()=>handleSub()}>Submit assesment</button>
                  :
                  <button onClick={()=>handleNext()} className='px-3 bg-blue-500 border-1 border-gray-200 rounded-xl'>Next</button>}
              </div>
            </div> 
          </div>
          <div className='flex justify-end p-5 rounded-b-2xl bg-gray-100'>
            <button onClick={() => dispatch(setIsOpen(false))} className='p-2 bg-white border-1 border-gray-200 rounded-xl'>Close</button>
          </div>
        </div>
      </div>
    </Dialog>
  )
}

export default QuizzBox