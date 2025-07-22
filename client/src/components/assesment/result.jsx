import { Dialog } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
const Resultcard = ({assesment,resultStat,isResult,percentage,answer}) => {
  const question=assesment.Quizz
  return (
    <Dialog open={isResult}>
      <div className="fixed inset-0 bg-black/20" aria-hidden="true" />
      <div className="fixed inset-0 flex flex-col items-center justify-center px-4">
        <div
          className=" w-full sm:w-[70%] max-w-[720px] bg-[#F6F7F9] rounded-2xl"
          role="dialog"
          aria-modal="true"
          aria-labelledby="added-to-cart-title"
        >
          <div className='p-6'>
            {/* Header */}
            <div className="flex items-center justify-between mb-10">
              <div className='flex flex-col'>
                <h2 id="added-to-cart-title" className="text-lg font-bold">
                  {assesment.CourseTitle}
                </h2>
                <h3>{assesment.RelatedCourse}</h3>
              </div>
              <div className='flex align-top place-items-start'>
                <button onClick={resultStat} className='hover:bg-red-500 rounded-4xl'>
                <CloseIcon />
                </button>
              </div>
            </div>
            {/* achivement */}
            <div className='flex flex-col items-center'>
              <div className='bg-green-200 p-2 rounded-b-full w-fit'><WorkspacePremiumIcon sx={{fontSize:"80px",color:"green"}} /></div>
              <div><h1>Assessment Complete</h1></div>

              <div>You've scored {percentage}%</div>
            </div>
            {/* asnwer checking */}
            <div className='flex flex-col gap-4 mt-4'>
              {question.map((q)=>
                <div key={q.questionNo}className='border-1 border-gray-300 rounded-2xl p-3 '> 
                  <div className='flex justify-between '>
                    <h3>Question {q.questionNo} : {q.questionText}</h3>
                    <div>
                      {/* checking answer is correct */}
                      {answer[q.questionNo]
                        ? (q.answerId === answer [q.questionNo]
                            ? <CheckCircleOutlineIcon sx={{ color: 'green' }} />
                            : <CloseIcon sx={{ color: 'red' }} />)
                        : <HelpOutlineIcon sx={{ color: 'gray' }} />}
                    </div>
                  </div>
                  {/* showing selected ans  */}
                  <div className='text-gray-500 text-sm'>
                    Your answer : {q.options?.find(opt => opt.id === answer?.[q.questionNo])?.text || "Not answered"}
                  </div>
                  {/* showing correct aans only when user ans is wrong */}
                  {answer [q.questionNo] && answer [q.questionNo] !== q.answerId && (
                    <div className='text-green-500'>
                      Correct answer: {q.options.find(opt => opt.id === q.answerId)?.text}
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