import React, { useState } from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import QuizzBox from './quiz';
import { useDispatch, useSelector } from 'react-redux';
import { setIsOpen } from '../../redux/assesmentSlice';
import Resultcard from './result';

export const CompletedCard = ({assesment}) => {
  const dispatch=useDispatch()
  const {isOpen,isComplete}=useSelector((state)=>state.Assesment)
  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };
  const handleOpenClick=()=>{
    dispatch(setIsOpen(true))
  }
  return (
    <div 
      className='grid grid-cols-4 grid-rows-5 min-w-[310px] w-[310px] min-h-[350px] border-1 border-green-200 p-4 rounded ' >
      <div className='col-span-4 row-span-4 grid gap-1'>
        <div className='flex items-baseline'>
          <h1 className='leading-7'>{assesment.title}</h1>
          <button className='text-green-400 bg-green-100 px-2 py-1 rounded-xl'>completed</button>
        </div>
        <p className='text-sm text-gray-400 mt-2 mb-5 w-full text-nowrap'>{assesment.courseName}</p>
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
          Completed on : {formatDate(assesment.dueDate)} </p>
        <p className='text-green-600'><WorkspacePremiumIcon sx={{fontSize:"16px", color:"green"}}/>Passed</p>
      </div>
      <div className="col-span-4 row-start-5 ">
      <button onClick={()=>handleOpenClick()}
        className='bg-gray-200 border-1 border-green-100
         mt-5 w-full py-1.5 rounded-md text-black
         hover:bg-gray-300'>
            View Result
      </button>
      </div>
      {isOpen && <QuizzBox assesment={assesment}/>}
      {isComplete && <Resultcard isComplete={isComplete}assesment={assesment}/>}            
    </div>
  )
}

export const InProgress = ({assesment}) => {
  const dispatch=useDispatch()
  const {isOpen,isComplete}=useSelector((state)=>state.Assesment)
  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };
  const handleOpenClick=()=>{
    dispatch(setIsOpen(true))
  }
  return (
    <div className='grid grid-cols-4 grid-rows-5 border-1 border-amber-400 min-w-[310px] w-[310px] min-h-[350px] p-4 rounded ' >
      <div className="grid gap-1 col-span-4 row-span-4">
        <div className='flex items-baseline'>
          <h1 className='leading-7'>{assesment.title}</h1>
          <button className='text-amber-600 bg-amber-100 px-2 py-1 rounded-xl'>In progress</button>
        </div>
        <p className='text-sm text-gray-400 mt-2 mb-5 w-full text-nowrap'>{assesment.courseName}</p>
        <p className='text-sm  text-gray-400 leading-4.5 mb-5'>{assesment.description}</p>
        <p className='flex items-center  text-sm break-words'><CalendarMonthIcon sx={{fontSize:'15px'}} /> Due : {formatDate(assesment.dueDate)} </p>
        <p className='flex items-center text-sm text-amber-500'><HelpOutlineIcon sx={{fontSize:'15px'}}/>Continue where you left off</p>
      </div>
      <div className="col-span-4 row-start-5">
        <button onClick={()=>handleOpenClick()} className='bg-yellow-500 hover:bg-yellow-600 mt-5 w-full py-1.5 rounded-md text-white'>
          Continue Assesment
        </button>
      </div>
      
      {isOpen && <QuizzBox isOpen={isOpen} setIsOpen={setIsOpen}assesment={assesment}/>}
      {isComplete && <Resultcard isComplete={isComplete}assesment={assesment}/>}
    </div>
  )
}

export const UpcommingCard = ({assesment}) => {
  const dispatch=useDispatch()
  const {isOpen,isComplete}=useSelector((state)=>state.Assesment)
  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };
  const handleOpenClick=()=>{
    dispatch(setIsOpen(true))
  }
  return (
    <div className='grid grid-cols-4 grid-rows-5 min-w-[310px] w-[310px] min-h-[350px] border-1 border-gray-200 p-4 rounded ' >
      <div className="grid gap-1 col-span-4 row-span-4">
        <h1 className='leading-7'>{assesment.title}</h1>
        <p className='text-sm text-gray-400 mt-2 mb-5 w-full text-nowrap'>{assesment.courseName}</p>
        <p className='text-sm  text-gray-400 leading-4.5 mb-5'>{assesment.description}</p>
        <p className='flex items-center  text-sm break-words'><CalendarMonthIcon sx={{fontSize:'15px'}} /> Due : {formatDate(assesment.dueDate)} </p>
        <p className='flex items-center text-sm'><AccessTimeIcon sx={{fontSize:'15px'}}/> TimeLimit : {assesment.timeLimit} minutes</p>
        <p className='flex items-center text-sm'><HelpOutlineIcon sx={{fontSize:'15px'}}/> Questions : {assesment.totalQuestions}</p>
      </div>
      <div className="col-span-4 row-start-5">
        <button onClick={()=>handleOpenClick()} className='bg-purple-600 mt-5 w-full py-1.5 rounded-md text-white'>
          Start Assesment
        </button>
      </div>
      {isOpen && <QuizzBox isOpen={isOpen} setIsOpen={setIsOpen}assesment={assesment}/>}
      {isComplete && <Resultcard isComplete={isComplete} assesment={assesment}/>}
    </div>
  )
}
