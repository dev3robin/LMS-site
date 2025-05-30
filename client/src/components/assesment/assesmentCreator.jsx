import React, { useState,useEffect } from 'react';
import { Dialog } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { QCardMcq, QCardShortQ, QCardLongQ } from './QuestionsCard';
import { addAssessment } from '../../idbHelper';

const AsseCreator = ({ assCreate, setAssCreate }) => {
  const courseBranch = ["DataScience", "Webdevelopment", "Bussiness"];
  const [activeIndex, setActiveIndex] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);

  const [asseType, setAsseType] = useState('MCQ');

  const [mcqDialog, setMcqDialog] = useState(false);
  const [SaDialog, setSaDialog] = useState(false);
  const [LaDialog, setLaDialog] = useState(false);

  const getDefaultQuestion = (type) => {
    if (type === 'MCQ') {
      return {
        questionNo: 1,
        questionText: "",
        options: [
          { id: "A", text: "" },
          { id: "B", text: "" },
          { id: "C", text: "" },
          { id: "D", text: "" },
        ],
        answerId: "",
      };
    } else {

      return {
        questionNo: 1,
        questionText: "",
      };
    }
  };
const [questions, setQuestions] = useState(
  {
    AssesmentId: "",
    QType: asseType,
    CourseTitle: "",
    Describtion:"",
    RelatedCourse: courseBranch[0],
    Starting: "",
    EndsIn:"",
    Duration: "",
    Status: "not-started",
    Quizz: []
  }
);
useEffect(() => {
  setQuestions((prev) => ({
    ...prev,
    QType: asseType,
    Quizz: [getDefaultQuestion(asseType)],
  }));
}, [asseType]);


const handleInputChange = (e) => {
  const { name, value } = e.target;
  setQuestions((prev) => ({
    ...prev,
    [name]: value,
  }));
};

const handleIndex = (index) => {
  setActiveIndex(index);
  setQuestions((prev) => ({
    ...prev,
    RelatedCourse: courseBranch[index],
  }));
};


  const handleChange = (event) => {
    setAsseType(event.target.value);
  };

  const handleClose = () => {
    setAssCreate(false);
  };

  const handleAddQ = () => {
    if (asseType === 'MCQ') setMcqDialog(true);
    if (asseType === 'Short Answer') setSaDialog(true);
    if (asseType === 'Long Answer') setLaDialog(true);
  };

const handleAssesmentSubmit = () => {
  if (questions.Quizz.length === 1) return;

  addAssessment(questions); // Assuming `addAssessment` expects an array
  setQuestions({
    AssesmentId: "",
    QType: asseType,
    CourseTitle: "",
    Describtion: "",
    RelatedCourse: courseBranch[0],
    Starting: "",
    EndsIn: "",
    Duration: "",
    Status: "not-started",
    Quizz: [getDefaultQuestion(asseType)],
  });
};

const handleAddNextQuestion = () => {
  const currentQuizList = questions.Quizz;
  const lastQuestion = currentQuizList[currentQuizList.length - 1];

  if (asseType === "MCQ") {
    if (
      !lastQuestion?.questionText?.trim() ||
      lastQuestion?.options?.some((opt) => !opt.text.trim()) ||
      !lastQuestion?.answerId
    ) return;

    const newQuestion = getDefaultQuestion("MCQ");
    newQuestion.questionNo = currentQuizList.length + 1;

    setQuestions((prev) => ({
      ...prev,
      Quizz: [...currentQuizList, newQuestion],
    }));
  } else {
    if (!lastQuestion?.questionText?.trim()) return;

    const newQuestion = {
      questionNo: currentQuizList.length + 1,
      questionText: "",
    };

    setQuestions((prev) => ({
      ...prev,
      Quizz: [...currentQuizList, newQuestion],
    }));
  }
};

const updateQuestionText = (quizIndex, value) => {
  const updatedQuizz = [...questions.Quizz];
  updatedQuizz[quizIndex].questionText = value;
  setQuestions((prev) => ({
    ...prev,
    Quizz: updatedQuizz,
  }));
};

  return (
    <Dialog open={assCreate}>
      <div className="fixed inset-0 bg-black/20" aria-hidden="true" />
      <div className="fixed inset-0 flex flex-col items-center justify-center px-4">
        <div className="flex flex-col w-full max-w-[660px] px-7 gap-2.5 bg-white rounded-xl">
          <div className='flex items-center justify-between gap-5 '>
            <div className='flex flex-col gap-2 mt-4'>
              <h1 id="added-to-cart-title">Create an Assessment</h1>
            </div>
            <div className='flex align-top place-items-start'>
              <button onClick={handleClose} className='hover:bg-red-500 rounded-4xl'>
                <CloseIcon />
              </button>
            </div>
          </div>

          <div>
            <p>Question Type</p>
            <select
              id="language"
              className='outline-0 border-1 border-gray-300 p-1 rounded-md'
              value={asseType}
              onChange={handleChange}
            >
              <option value="MCQ">MCQ</option>
              <option value="Short Answer">Short Answer</option>
              <option value="Long Answer">Long Answer</option>
            </select>
          </div>

          <div className='qtype'>
            <h2>Assessment Id</h2>
            <div className="p-[2px] rounded-2xl border-2 border-transparent focus-within:border-gray-300">
              <input
                name="AssesmentId"
                value={questions.AssesmentId}
                onChange={handleInputChange}
                className='w-full outline-0 border-1 border-gray-300 p-2 rounded-xl'
                type="text"
                placeholder='Assessment ID'
              />
            </div>

            <h2>Course Title</h2>
            <div className="p-[2px] rounded-2xl border-2 border-transparent focus-within:border-gray-300">
              <input
                name="CourseTitle"
                value={questions.CourseTitle}
                onChange={handleInputChange}
                className='w-full outline-0 border-1 border-gray-300 p-2 rounded-xl'
                type="text"
                placeholder='Course Title'
              />
            </div>

            <h2>Related Course</h2>
            <div className='w-full relative'>
              <div
                tabIndex={0}
                className="p-[2px] rounded-2xl border-2 border-transparent focus-within:border-gray-300"
              >
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className='w-full flex justify-between items-center border-1 border-gray-300 p-2 rounded-xl'
                >
                  <span>{courseBranch[activeIndex]}</span>
                  <span><KeyboardArrowDownIcon /></span>
                </button>
              </div>
              {showDropdown && (
                <ul className='absolute bg-white border-1 border-gray-200 w-[300px] p-2 shadow-md mt-2 rounded-[10px] z-10'>
                  {courseBranch.map((item, index) => (
                    <li
                      className='p-2 hover:bg-blue-100 rounded-xl cursor-pointer'
                      key={index}
                      onClick={() => {
                        handleIndex(index);
                        setShowDropdown(false);
                      }}
                    >
                      <DoneIcon
                        style={{
                          opacity: activeIndex === index ? 1 : 0,
                          transition: 'opacity 0.3s ease',
                          paddingRight: '5px',
                        }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div>Describtion</div>
            <div className="p-[2px] rounded-2xl flex items-center border-2 border-transparent focus-within:border-gray-300">
              <textarea
                name="Describtion"
                value={questions.Describtion}
                rows={2}
                
                onChange={handleInputChange}
                className='w-full outline-0 border-1 border-gray-300 p-2 rounded-xl'
                type="text"
                placeholder='Describe Assesment'
              />
            </div>
            
            <div>Starts in</div>
            <div className="p-[2px] rounded-2xl border-2 border-transparent focus-within:border-gray-300">
              <input
                name="Starting"
                value={questions.Starting}
                onChange={handleInputChange}
                className='w-full outline-0 border-1 border-gray-300 p-2 rounded-xl'
                type="text"
                placeholder='Assesment starting date'
              />
            </div>
            <div>Ends In</div>
            <div className="p-[2px] rounded-2xl border-2 border-transparent focus-within:border-gray-300">
              <input
                name="EndsIn"
                value={questions.EndsIn}
                onChange={handleInputChange}
                className='w-full outline-0 border-1 border-gray-300 p-2 rounded-xl'
                type="text"
                placeholder='Last date to submit'
              />
            </div>

            <div>Duration</div>
            <div className="p-[2px] rounded-2xl border-2 border-transparent focus-within:border-gray-300">
              <input
                name="Duration"
                value={questions.Duration}
                onChange={handleInputChange}
                className='w-full outline-0 border-1 border-gray-300 p-2 rounded-xl'
                type="text"
                placeholder='Assessment duration'
              />
            </div>

            <button onClick={handleAddQ} className='p-2 bg-blue-300 rounded-xl mt-5'>Add Questions</button>
          </div>

          <div className='w-full flex justify-end gap-5 mb-7'>
            <button onClick={handleClose} className='p-2 border-1 rounded-xl border-gray-300'>Cancel</button>
            <button onClick={handleAssesmentSubmit} className='p-2 border-1 rounded-xl text-white border-gray-300 bg-[#0080FF]'>Create Assessment</button>
          </div>
        </div>

        {mcqDialog && (
          <QCardMcq
            mcqDialog={mcqDialog}
            setMcqDialog={setMcqDialog}
            questions={questions}
            setQuestions={setQuestions}
            handleAddNextQuestion={handleAddNextQuestion}
            updateQuestionText={updateQuestionText}

          />
        )}
        {SaDialog && (
          <QCardShortQ
            SaDialog={SaDialog}
            setSaDialog={setSaDialog}
            questions={questions}
            setQuestions={setQuestions}
            handleAddNextQuestion={handleAddNextQuestion}
            updateQuestionText={updateQuestionText}
          />
        )}
        {LaDialog && (
          <QCardLongQ
            LaDialog={LaDialog}
            setLaDialog={setLaDialog}
            questions={questions}
            setQuestions={setQuestions}
            handleAddNextQuestion={handleAddNextQuestion}
            updateQuestionText={updateQuestionText}
          />
        )}
      </div>
    </Dialog>
  );
};

export default AsseCreator;
