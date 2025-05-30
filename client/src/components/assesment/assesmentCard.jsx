import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import QuizzBox from './quiz';
import Resultcard from './result';
import { useState } from 'react';

export const CompletedCard = ({assesment}) => {
  const [isResult,setIsResult]=useState(false)
  const resultStat = () => {
    setIsResult((prev) => !prev);
  };

  return (
    <div 
      className='grid grid-cols-4 grid-rows-5 min-w-[310px] w-[310px] min-h-[350px] border-1 border-green-200 p-4 rounded ' >
      <div className='col-span-4 row-span-4 grid gap-1'>
        <div className='flex items-baseline'>
          <h1 className='leading-7'>{assesment.CourseTitle}</h1>
          <button className='text-green-400 bg-green-100 px-2 py-1 rounded-xl'>completed</button>
        </div>
        <p className='text-sm text-gray-400 mt-2 mb-5 w-full text-nowrap'>{assesment.RelatedCourse}</p>
        <div className='flex flex-col'>
          <div className='flex justify-between'>
            <div>Your Score</div>
            <div>85%</div>
          </div>
          <div className='w-full bg-gray-100 h-2 rounded-2xl mb-3 mt-1'>
            <div className='w-[85%] bg-blue-600 h-2 rounded-2xl'></div>
          </div>
        </div>
        <p className='flex items-center  text-sm break-words'><CalendarMonthIcon sx={{fontSize:'15px'}} /> 
          Completed on :474 </p>
        <p className='text-green-600'><WorkspacePremiumIcon sx={{fontSize:"16px", color:"green"}}/>Passed</p>
      </div>
      <div className="col-span-4 row-start-5 ">
      <button onClick={resultStat}
        className='bg-gray-200 border-1 border-green-100
         mt-5 w-full py-1.5 rounded-md text-black
         hover:bg-gray-300'>
            View Result
      </button>
      </div>
      {isResult && <Resultcard resultStat={resultStat} isResult={isResult}assesment={assesment}/>}            
    </div>
  )
}

export const InProgress = ({assesment,handleStatus}) => {

  const [isOpen, setIsOpen]=useState(false)
  const [isComplete,setIsComplete]=useState(false)
  
  const handleOpenClick=()=>{
    setIsOpen(true)
  }
  const handleQuizzboxOpen=()=>{
    setIsOpen((prev)=> !prev)
  }
  const handleResultOpen=()=>{
    setIsComplete((prev)=> !prev)
  }
  return (
    <div className='grid grid-cols-4 grid-rows-5 border-1 border-amber-400 min-w-[310px] w-[310px] min-h-[350px] p-4 rounded ' >
      <div className="grid gap-1 col-span-4 row-span-4">
        <div className='flex items-baseline justify-between'>
          <h1 className='leading-7'>{assesment.CourseTitle}</h1>
          <button className='text-amber-600 bg-amber-100 px-2 py-1 rounded-xl'>In progress</button>
        </div>
        <p className='text-sm text-gray-400 mt-2 mb-5 w-full text-nowrap'>{assesment.RelatedCourse}</p>
        <p className='text-sm  text-gray-400 leading-4.5 mb-5'>{assesment.Describtion}</p>
        <p className='flex items-center  text-sm break-words'><CalendarMonthIcon sx={{fontSize:'15px'}} /> Ends In : {assesment.EndsIn} </p>
        <p className='flex items-center text-sm text-amber-500'><HelpOutlineIcon sx={{fontSize:'15px'}}/>Continue where you left off</p>
      </div>
      <div className="col-span-4 row-start-5">
        <button onClick={handleOpenClick} className='bg-yellow-500 hover:bg-yellow-600 mt-5 w-full py-1.5 rounded-md text-white'>
          Continue Assesment
        </button>
      </div>
      
      {isOpen && <QuizzBox isOpen={isOpen} handleStatus={handleStatus} handleQuizzboxOpen={handleQuizzboxOpen} handleResultOpen={handleResultOpen} assesment={assesment} />}
      {isComplete && <Resultcard isComplete={isComplete} assesment={assesment} handleResultOpen={handleResultOpen} />}
    </div>
  )
}

export const UpcommingCard = ({assesment}) => {
  return (
    <div className='grid grid-cols-4 grid-rows-5 min-w-[310px]  w-[310px] min-h-[350px] border-1 border-gray-200 p-4 rounded ' >
      <div className="grid gap-1 col-span-4 row-span-4">
        <h1 className='leading-7'>{assesment.CourseTitle}</h1>
        <p className='text-sm text-gray-400 mt-2 mb-5 w-full text-nowrap'>{assesment.AssesmentId}</p>
        <p className='text-sm  text-gray-400 break-words leading-4.5 break-all mb-5'>{assesment.Describtion}</p>
        <p className='flex items-center  text-sm break-words'><CalendarMonthIcon sx={{fontSize:'15px'}} /> Due : {assesment.Starting} </p>
        <p className='flex items-center text-sm'><AccessTimeIcon sx={{fontSize:'15px'}}/> TimeLimit : {assesment.Duration} minutes</p>
        <p className='flex items-center text-sm'><HelpOutlineIcon sx={{fontSize:'15px'}}/> Questions : {assesment.Quizz.length}</p>
      </div>
      <div className="col-span-4 row-start-5">
        <button className='bg-purple-600 mt-5 w-full py-1.5 rounded-md text-white'>
          Start Assesment
        </button>
      </div>
    </div>
  )
}