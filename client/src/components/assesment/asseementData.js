const mockQuestions = [
  {
    id: 'q1',
    question: 'What does HTML stand for?',
    options: [
      { id: 'o1', text: 'Hyper Text Markup Language' },
      { id: 'o2', text: 'Hyper Transfer Markup Language' },
      { id: 'o3', text: 'High Tech Modern Language' },
      { id: 'o4', text: 'Hybrid Text Manipulation Language' }
    ],
    correctAnswer: 'o1'
  },
  {
    id: 'q2',
    question: 'Which CSS property is used to control the spacing between elements?',
    options: [
      { id: 'o1', text: 'spacing' },
      { id: 'o2', text: 'margin' },
      { id: 'o3', text: 'gap' },
      { id: 'o4', text: 'padding' }
    ],
    correctAnswer: 'o2'
  },
  {
    id: 'q3',
    question: 'Which of the following is NOT a JavaScript data type?',
    options: [
      { id: 'o1', text: 'String' },
      { id: 'o2', text: 'Boolean' },
      { id: 'o3', text: 'Float' },
      { id: 'o4', text: 'Symbol' }
    ],
    correctAnswer: 'o3'
  },
  {
    id: 'q4',
    question: 'What method would you use to add an element to the end of an array in JavaScript?',
    options: [
      { id: 'o1', text: 'append()' },
      { id: 'o2', text: 'push()' },
      { id: 'o3', text: 'insert()' },
      { id: 'o4', text: 'add()' }
    ],
    correctAnswer: 'o2'
  },
  {
    id: 'q5',
    question: 'Which HTML element is used to define an unordered list?',
    options: [
      { id: 'o1', text: '<list>' },
      { id: 'o2', text: '<ol>' },
      { id: 'o3', text: '<ul>' },
      { id: 'o4', text: '<li>' }
    ],
    correctAnswer: 'o3'
  }
];
export const assessmentsCard= [
  {
    id: '1',
    title: 'HTML & CSS Fundamentals Quiz',
    courseId: '1',
    courseName: 'Introduction to Web Development',
    description: 'Test your knowledge of basic HTML elements and CSS properties covered in the first two modules.',
    timeLimit: 30,
    totalQuestions: 20,
    dueDate: '2023-09-30T23:59:59Z',
    status: 'completed',
    score: 85,
    quizz:mockQuestions
  },
  {
    id: '2',
    title: 'Data Science Mid-term Assessment',
    courseId: '2',
    courseName: 'Data Science Fundamentals',
    description: 'Comprehensive assessment covering statistical concepts, data cleaning, and basic visualization techniques.',
    timeLimit: 90,
    totalQuestions: 35,
    dueDate: '2023-10-15T23:59:59Z',
    status: 'not-started',
    quizz:mockQuestions
  },
  {
    id: '3',
    title: 'UX Research Methods Quiz',
    courseId: '3',
    courseName: 'UX/UI Design Principles',
    description: 'Test your understanding of different user research methodologies and when to apply them.',
    timeLimit: 45,
    totalQuestions: 25,
    dueDate: '2023-09-28T23:59:59Z',
    status: 'in-progress',
    quizz:mockQuestions
  },
  {
    id: '4',
    title: 'Machine Learning Algorithms Test',
    courseId: '4',
    courseName: 'Machine Learning for Beginners',
    description: 'Assessment on fundamental machine learning algorithms, including classification and regression techniques.',
    timeLimit: 60,
    totalQuestions: 30,
    dueDate: '2023-11-05T23:59:59Z',
    status: 'not-started',
    quizz:mockQuestions
  }
];
