import { Dialog } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CloseIcon from '@mui/icons-material/Close'
import { setIsComplete } from '../../redux/assesmentSlice'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
const Resultcard = ({assesment}) => {
  const dispatch=useDispatch()
  const {isComplete,answer}=useSelector((state)=>state.Assesment)
  const question=assesment.quizz
  const courseId=String(assesment.courseId)
  

  // counting for percent
  let count = 0;

  question.forEach((q) => {
    const userAnswer = answer[courseId]?.[q.id];
    if (userAnswer && userAnswer === q.correctAnswer) {
      count++;
    }
  });
  
  
  
  return (
    <Dialog open={isComplete}>
      <div className="fixed inset-0 bg-black/20" aria-hidden="true" />
      <div className="fixed inset-0 flex flex-col items-center justify-center px-4">
        <div
          className=" w-[70%] max-w-[720px] bg-[#F6F7F9] rounded-2xl"
          role="dialog"
          aria-modal="true"
          aria-labelledby="added-to-cart-title"
        >
          <div className='p-6'>
            {/* Header */}
            <div className="flex items-center justify-between mb-10">
              <div className='flex flex-col'>
                <h2 id="added-to-cart-title" className="text-lg font-bold">
                  {assesment.title}
                </h2>
                <h3>{assesment.courseName}</h3>
              </div>
              <div className='flex align-top place-items-start'>
                <button onClick={()=>dispatch(setIsComplete(false))} className='hover:bg-red-500 rounded-4xl'>
                <CloseIcon />
                </button>
              </div>
            </div>
            {/* achivement */}
            <div className='flex flex-col items-center'>
              <div className='bg-green-200 p-2 rounded-b-full w-fit'><WorkspacePremiumIcon sx={{fontSize:"80px",color:"green"}} /></div>
              <div><h1>Assessment Complete</h1></div>

              <div>You've scored <span>{count *20}%</span></div>
            </div>
            {/* asnwer checking */}
            <div className='flex flex-col gap-4 mt-4'>
              {question.map((q,index)=>
                <div key={q.id}className='border-1 border-gray-300 rounded-2xl p-3 '> 
                  <div className='flex justify-between '>
                    <h3>Question {index+1} : {q.question}</h3>
                    <div>
                      {/* checking answer is correct */}
                      {answer[courseId]?.[q.id]
                        ? (q.correctAnswer === answer[courseId][q.id]
                            ? <CheckCircleOutlineIcon sx={{ color: 'green' }} />
                            : <CloseIcon sx={{ color: 'red' }} />)
                        : <HelpOutlineIcon sx={{ color: 'gray' }} />}
                    </div>
                  </div>
                  {/* showing selected ans  */}
                  <div className='text-gray-500 text-sm'>
                    Your answer : {q.options.find(opt => opt.id === answer[courseId]?.[q.id])?.text || "Not answered"}
                  </div>
                  {/* showing correcta ans only when user ans is wrong */}
                  {answer[courseId]?.[q.id] && answer[courseId][q.id] !== q.correctAnswer && (
                    <div className='text-green-500'>
                      Correct answer: {q.options.find(opt => opt.id === q.correctAnswer)?.text}
                    </div>
                  )}

                  
                </div>)
              }
            </div>
          </div>
        </div>
      </div>

    </Dialog>
  )
}

export default Resultcard