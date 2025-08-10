import React, { useState,useRef,useEffect } from 'react'
import {InProgress, UpcommingCard } from './assesmentCard'
import gsap from 'gsap'
import { getAllFromStore,updateAssessmentStatus } from '../../idbHelper'
import { useSelector } from 'react-redux'
import { Resulting } from './resulting'
const Assesment = () => {
  const tabs = ["Upcomming", "In progress", "Completed"]
  const [activeIndex, setActiveIndex] = useState(0)
  const asseRef =useRef()
  const [allAssements,setAllAssesments]=useState([])
  const loggedUser=useSelector((state)=>state.user.loggedUD) 
  const userId=loggedUser.userId
  const [allSub,setAllsub]=useState([])

  const parseStartingDate = (dateString) => {
    const cleaned = dateString.replace(/(\d+)(st|nd|rd|th)/, '$1');
    return new Date(cleaned);
  };

  useEffect(() => {
    const fetchAndUpdateAssessments = async () => {
      const all = await getAllFromStore('assessments');
      setAllAssesments(all)
      const allSub=await getAllFromStore("submissions")
      setAllsub(allSub)
      const today = new Date();
      const updatedAssessments = await Promise.all(
        all.map(async (assessment) => {
          const startDate = parseStartingDate(assessment.Starting);
          if (startDate <= today && assessment.Status == 'not-started') {
            await updateAssessmentStatus(assessment.AssesmentId, 'in-progress');
            return { ...assessment, Status: 'in-progress' };
          }
          return assessment;
        })
      );
      setAllAssesments(updatedAssessments);
    };
    fetchAndUpdateAssessments();
  }, [activeIndex]);

  useEffect(() => {
    if (asseRef.current) {
      gsap.fromTo(
        asseRef.current.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
        }
      );
    }
  }, [activeIndex]);

  const handleClick = (index) => {
    setActiveIndex(index)
  }
  
const userSubmissions = allSub.filter(sub => sub.UserId === userId);
const submissionMap = new Map();
userSubmissions.forEach(sub => {
  submissionMap.set(sub.AssesmentId, sub); // key = AssesmentId, value = submission
});


// 👇 Apply filter based on activeIndex (not-started, in-progress, completed)
const filteredAssessments = allAssements.filter((asses) => {
  if (activeIndex === 0) return asses.Status === "not-started";
  if (activeIndex === 1) return asses.Status === "in-progress";
  if (activeIndex === 2) return asses.Status === "completed";
  return false;
});



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

      <div 
        ref={asseRef}
        className='flex gap-[.625rem] text-[1rem] mt-2.5 mb-5 flex-wrap'>
        {allAssements.length ===0 ?
          (
          <h1>No Assesments Found</h1>
          )
          :
          (
            filteredAssessments.map((asses) => {
              if (asses.Status === "not-started") {
                return <UpcommingCard key={asses.AssesmentId} assesment={asses} />;
              }

              if (asses.Status === "in-progress") {
                return <InProgress key={asses.AssesmentId} assesment={asses} />;
              }

              if (asses.Status === "completed") {
                const submission = submissionMap.get(asses.AssesmentId);
                if (submission) {
                  return (
                    <Resulting
                      key={asses.AssesmentId}
                      assesment={asses}
                      submission={submission}
                    />
                  );
                }
              }

              return null;
            })

          )
          }
      </div>
    </div>
  )
}

export default Assesment