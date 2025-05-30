import { Dialog, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export const QCardMcq = ({ mcqDialog,handleAddNextQuestion,updateQuestionText, setMcqDialog, questions, setQuestions }) => {
  const handleClose = () => {
    setMcqDialog(false);
  };
const updateOption = (quizIndex, optIndex, value) => {
  setQuestions((prev) => {
    const updatedQuizz = [...prev.Quizz];
    updatedQuizz[quizIndex].options[optIndex].text = value;
    return {
      ...prev,
      Quizz: updatedQuizz,
    };
  });
};


const updateAnswerId = (quizIndex, value) => {
  setQuestions((prev) => {
    const updatedQuizz = [...prev.Quizz];
    updatedQuizz[quizIndex].answerId = value;
    return {
      ...prev,
      Quizz: updatedQuizz,
    };
  });
};
  return (
    <Dialog open={mcqDialog} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogContent className="bg-[#F6F7F9] rounded-2xl p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Add Multiple Choice Questions</h2>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </div>

        {/* Question List */}
        {questions?.Quizz?.map((q, quizIndex) => (
          <div key={quizIndex} className="border-1 border-gray-300 p-6 rounded-xl bg-white shadow mb-6">
            <h3 className="text-lg font-semibold mb-4">
              Question {q.questionNo}
            </h3>

            <input
              type="text"
              className="w-full p-3 border-1 border-gray-300 rounded mb-5"
              placeholder="Enter question text"
              value={q.questionText}
              onChange={(e) => updateQuestionText(quizIndex, e.target.value)}
            />

            <h4 className="font-medium mb-2">Options:</h4>
            {q.options.map((opt, optIndex) => (
              <div key={optIndex} className="flex gap-3 items-center mb-3">
                <span className="w-8 font-semibold">{opt.id}.</span>
                <input
                  type="text"
                  className="flex-1 p-2 border-1 border-gray-300 rounded"
                  placeholder={`Option ${opt.id} text`}
                  value={opt.text}
                  onChange={(e) =>
                    updateOption(quizIndex, optIndex, e.target.value)
                  }
                />
              </div>
            ))}

            <div className="mt-4">
              <select
                className="p-2 border-1 border-gray-300 rounded w-full"
                value={q.answerId}
                onChange={(e) => updateAnswerId(quizIndex, e.target.value)}
              >
                <option value="">-- Select Correct Answer --</option>
                {q.options.map((opt) => (
                  <option key={opt.id} value={opt.id}>
                    {opt.id}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ))}

        {/* Add Next Question Button */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
            onClick={handleAddNextQuestion}
          >
            Add Next Question
          </button>

          <button
            className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
            onClick={() => {
              setMcqDialog(false);
            }}
          >
            Submit All Questions
          </button>
        </div>

      </DialogContent>
    </Dialog>
  );
};

export const QCardShortQ = ({SaDialog,setSaDialog,questions,updateQuestionText,handleAddNextQuestion}) => {
  const handleClose=()=>{
    setSaDialog(false)
  }
  return (
    <Dialog open={SaDialog} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogContent className="bg-[#F6F7F9] rounded-2xl p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Add Short Answer Questions</h2>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </div>

        {/* Question List */}
        {questions?.Quizz?.map((q, quizIndex) => (
          <div key={quizIndex} className="border-1 border-gray-300 p-6 rounded-xl bg-white shadow mb-6">
            <h3 className="text-lg font-semibold mb-4">
              Question {q.questionNo}
            </h3>

            <input
              type="text"
              className="w-full p-3 border-1 border-gray-300 rounded mb-5"
              placeholder="Enter question text"
              value={q.questionText}
              onChange={(e) => updateQuestionText(quizIndex, e.target.value)}
            />

  
          </div>
        ))}
        {/* Add Next Question Button */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={handleAddNextQuestion}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          >
            Add Next Question
          </button>

          <button
          onClick={()=>setSaDialog(false)}
            className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
          >
            Submit All Questions
          </button>
        </div>

      </DialogContent>
    </Dialog>
  )
}

export const QCardLongQ = ({LaDialog,setLaDialog,questions,updateQuestionText,handleAddNextQuestion})=>{
    const handleClose=()=>{
    setLaDialog(false)
  }

  return (
    <Dialog open={LaDialog} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogContent className="bg-[#F6F7F9] rounded-2xl p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Add Long Answer Questions</h2>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </div>

        {/* Question List */}
        {questions?.Quizz?.map((q, quizIndex) => (
          <div key={quizIndex} className="border-1 border-gray-300 p-6 rounded-xl bg-white shadow mb-6">
            <h3 className="text-lg font-semibold mb-4">
              Question {q.questionNo}
            </h3>

            <input
              type="text"
              className="w-full p-3 border-1 border-gray-300 rounded mb-5"
              placeholder="Enter question text"
              value={q.questionText}
              onChange={(e) => updateQuestionText(quizIndex, e.target.value)}
            />

  
          </div>
        ))}

        {/* Add Next Question Button */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={handleAddNextQuestion}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          >
            Add Next Question
          </button>

          <button
            onClick={handleClose}
            className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
          >
            Submit All Questions
          </button>
        </div>

      </DialogContent>
    </Dialog>
  )
}