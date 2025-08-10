import { Dialog } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import TimerIcon from '@mui/icons-material/Timer';
import Countdown from '../LoSignUp/timer';
import { setAnswer} from '../../redux/assesmentSlice';
import { saveToStore, updateAssessmentStatus } from '../../idbHelper';
const QuizzBox = ({assesment,isOpen,handleQuizzboxOpen}) => {
  const dispatch=useDispatch()
  const {answer} =useSelector((state)=>state.Assesment)
  const loggedUser=useSelector((state)=>state.user.loggedUD)

  const [currentIndex, setCurrentIndex] = useState(0);
  const questions = assesment.Quizz;
  const currentQuestion = questions[currentIndex];

  const subId=loggedUser.userId + assesment.AssesmentId

  const currentDate = new Date();

  const formattedDate = currentDate.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });


  const submissionData={
    SubmissionId:subId,
    UserId:loggedUser.userId,
    AssesmentId:assesment.AssesmentId,
    SubmitDate: formattedDate,
    Answers:answer,
  }

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

  const handleSub = async () => {
    saveToStore("submissions",submissionData)
    updateAssessmentStatus(assesment.AssesmentId,'completed')
    handleQuizzboxOpen()


  };

  return (
    <Dialog open={isOpen}className="relative z-50">
      <div className="fixed inset-0 bg-black/20" aria-hidden="true" />
      <div className="fixed inset-0 flex flex-col items-center justify-center px-2">
        <div
          className=" w-full sm:w-[70%] text-[16px] min-w-[320px] bg-[#F6F7F9] rounded-2xl"
          role="dialog"
          aria-modal="true"
          aria-labelledby="added-to-cart-title"

        >
          <div className='p-6'>
          {/* Header */}
            <div className="flex items-center justify-between mb-10">
              <div className='flex flex-col'>
                <h2 id="added-to-cart-title" className="text-[2rem] font-bold">
                  {assesment.CourseTitle}
                </h2>
                <h3>{assesment.RelatedCourse}</h3>
              </div>
              <div className='flex align-top place-items-start'>
                <span className='bg-green-200 px-2 py-1 mt-5 rounded-2xl flex '><TimerIcon /><Countdown time={assesment.Duration}/></span>
                <button className='hover:bg-red-500 rounded-4xl' onClick={handleQuizzboxOpen}>
                <CloseIcon />
                </button>
              </div>
            </div>
            <div>
              <div className='flex justify-between'>
                <div>Question <span>{currentIndex + 1}</span> of <span>{questions.length}</span></div>
                <div><span>{(currentIndex + 1) * 100/questions.length}%</span> Complete</div>
              </div>
              <div className='mt-2 mb-3 w-full bg-[#F3F5F7] h-2 rounded-2xl'>
                <div   style={{ width: `${(currentIndex + 1) * 100/questions.length}%` }}className=' h-2 rounded-2xl bg-blue-600'></div>
              </div>
            </div>
            <div>
              <h1>{currentQuestion.questionText}</h1>
              {assesment.QType === 'MCQ' && (
                <ul className="flex flex-col mt-5 gap-4">
                  {currentQuestion.options?.map((q) => (
                    <div
                      key={q.id}
                      className="flex flex-row gap-1.5 items-center p-3.5 border border-gray-300 rounded-2xl"
                    >
                      <input
                        type="radio"
                        checked={
                          answer?.[currentQuestion.questionNo] === q.id
                        }
                        onChange={() =>
                          dispatch(
                            setAnswer({
                              questionId: currentQuestion.questionNo,
                              optionId: q.id,
                            })
                          )
                        }
                      />
                      <p>{q.text}</p>
                    </div>
                  ))}
                </ul>
              )}
              {assesment.QType === 'Short Answer' && (
                <div className="mt-5">
                  <textarea
                    className="w-full p-3 border border-gray-300 rounded-2xl"
                    placeholder="Write your answer here..."
                    rows={2}

                    value={
                      answer?.[currentQuestion.questionNo] || ''
                    }
                    onChange={(e) =>
                      dispatch(
                        setAnswer({
                          questionId: currentQuestion.questionNo,
                          optionId: e.target.value,
                        })
                      )
                    }
                  />
                </div>
              )}
              {assesment.QType === 'Long Answer' && (
                <div className="mt-5">
                  <textarea
                    className="w-full p-3 border border-gray-300 rounded-2xl"
                    placeholder="Write your answer here..."
                    rows={4}
                    value={
                      answer?.[currentQuestion.questionNo] || ''
                    }
                    onChange={(e) =>
                      dispatch(
                        setAnswer({
                          questionId: currentQuestion.questionNo,
                          optionId: e.target.value,
                        })
                      )
                    }
                  />
                </div>
              )}

              <div className='flex justify-between align-center mt-5'>
                <button onClick={handlePrev} className='p-2 bg-gray-100 border-1 border-gray-200 rounded-xl'>Previous</button>
                {currentIndex+1 == questions.length ?
                  <button className='px-3 bg-blue-500 border-1 border-gray-200 rounded-xl'onClick={handleSub}>Submit assesment</button>
                  :
                  <button onClick={handleNext} className='px-3 bg-blue-500 border-1 border-gray-200 rounded-xl'>Next</button>}
              </div>
            </div> 
          </div>
          <div className='flex justify-end p-5 rounded-b-2xl bg-gray-100'>
            <button onClick={handleQuizzboxOpen}className='p-2 bg-white border-1 border-gray-200 rounded-xl'>Close</button>
          </div>
        </div>
      </div>
    </Dialog>
  )
}

export default QuizzBox