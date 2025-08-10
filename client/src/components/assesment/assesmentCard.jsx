import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import QuizzBox from './quiz';
import { useEffect, useState } from 'react';
import { getAllFromStore } from '../../idbHelper';
import { useSelector } from 'react-redux';
import {Resulting} from './resulting';

// export const CompletedCard = () => {
//   const [isResult, setIsResult] = useState(false);
//   const [allAssesment, setAllassessments] = useState([]);
//   const [allSub, setAllsub] = useState([]);
//   const loggedUD = useSelector((state) => state.user.loggedUD);
//   const userId = loggedUD.userId;

//   const resultStat = () => {
//     setIsResult((prev) => !prev);
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       const allSubmissions = await getAllFromStore('submissions');
//       const allAssessments = await getAllFromStore('assessments');
//       setAllassessments(allAssessments);
//       setAllsub(allSubmissions);
//     };

//     fetchData();
//   }, []);
//     const userSubmissions = allSub.filter(
//       (sub) => sub.UserId === userId
//     );

//     const assIds = userSubmissions.map((e) => e.AssesmentId);
//     console.log(assIds)

//     const matchedAssessments = allAssesment.filter((assessment) =>
//       assIds.includes(assessment.AssesmentId)
//     );
//   return (
//     <>
//       {matchedAssessments.map((assessment) => {
//         const matchingSubmission = userSubmissions.find(
//           (sub) => sub.AssesmentId === assessment.AssesmentId
//         );

//         return (
//             <div key={assessment.AssesmentId}>
//               <Resulting
//                 assesment={assessment}
//                 submission={matchingSubmission}
//               />
//             </div>
//         );
//       })}
//     </>
//   );
// };
export const CompletedCard=({assesment})=>{
  return(
    <h1>{assesment.CourseTitle}</h1>

  )
}


export const InProgress = ({assesment}) => {

  const [isOpen, setIsOpen]=useState(false)
  const loggedUD=useSelector((state)=>state.user.loggedUD) 

  const handleOpenClick=()=>{
    if(loggedUD.userRole ==='student'){
      setIsOpen(true)
    }else{
      alert("You are not allowed for this process")
    }
  }
  const handleQuizzboxOpen=()=>{
    setIsOpen((prev)=> !prev)
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
      
      {isOpen && <QuizzBox isOpen={isOpen} handleQuizzboxOpen={handleQuizzboxOpen} assesment={assesment} />}
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