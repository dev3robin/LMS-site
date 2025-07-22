import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import Resultcard from './result';
import QuizzBox from './quiz';
import { useEffect, useState } from 'react';
import { getAllFromStore } from '../../idbHelper';

export const CompletedCard = ({ assesment }) => {
  const [isResult, setIsResult] = useState(false);
  const [matchedSub, setMatchedSub] = useState(null);
  const [answer, setAnswer] = useState({});
  const [count, setCount] = useState(0);

  const assId = assesment.AssesmentId;
  const userId = localStorage.getItem("userId");
  const question = assesment.Quizz || [];

  const resultStat = () => {
    setIsResult((prev) => !prev);
  };

  useEffect(() => {
    const fetchSubmissions = async () => {
      const allSubmissions = await getAllFromStore('submissions');
      const submission = allSubmissions.find(
        (sub) => sub.AssesmentId === assId && sub.UserId === userId
      );
      if (submission) {
        if(assesment.QType === "MCQ"){
          setMatchedSub(submission);
          const answers = submission.Answers || {};
          setAnswer(answers);
          
          let tempCount = 0;
          question.forEach((q) => {
            const userAnswer = answers[q.questionNo];
            if (userAnswer && userAnswer === q.answerId) {
              tempCount++;
            }
          });
          setCount(tempCount);
        }else {
          //need to add some  logic
          console.log(("skip"))
        }
      }
    };
    fetchSubmissions();
  }, [assId]);

  const percentage = question.length > 0 ? Math.round((count / question.length) * 100) : 0;
  const finalResult= percentage > 40? "Passed":"Fail"
  return (
    <div className='grid grid-cols-4 grid-rows-5 min-w-[310px] w-[310px] min-h-[350px] border-1 border-green-200 p-4 rounded'>
      <div className='col-span-4 row-span-4 grid gap-1'>
        <div className='flex justify-between'>
          <h1 className='leading-7'>{assesment.CourseTitle}</h1>
          <button className='text-green-400 bg-green-100 px-2 py-1 rounded-xl'>Completed</button>
        </div>

        <p className='text-sm text-gray-400 mt-2 mb-5 w-full text-nowrap'>{assesment.RelatedCourse}</p>

        <div className='flex flex-col'>
          <div className='flex justify-between'>
            <div>Your Score</div>
            <div>{percentage}%</div>
          </div>
          <div className='w-full bg-gray-100 h-2 rounded-2xl mb-3 mt-1'>
            <div className='bg-blue-600 h-2 rounded-2xl' style={{ width: `${percentage}%` }}></div>
          </div>
        </div>

        <p className='flex items-center text-sm break-words'>
          <CalendarMonthIcon sx={{ fontSize: '15px' }} />
          Completed on : {matchedSub?.SubmitDate}
        </p>

        <p className={finalResult === "Passed" ? "text-green-600" : "text-red-600"}>
          <WorkspacePremiumIcon sx={{ fontSize: "16px", color: finalResult === "Passed" ? "green" : "red" }} />
          {finalResult}
        </p>

      </div>

      <div className="col-span-4 row-start-5 ">
        <button
          onClick={resultStat}
          className='bg-gray-200 border-1 border-green-100 mt-5 w-full py-1.5 rounded-md text-black hover:bg-gray-300'
        >
          View Result
        </button>
      </div>

      {isResult && <Resultcard resultStat={resultStat} answer={answer} percentage={percentage} isResult={isResult} assesment={assesment} />}
    </div>
  );
};


export const InProgress = ({assesment}) => {

  const [isOpen, setIsOpen]=useState(false)

  const handleOpenClick=()=>{
    setIsOpen(true)
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