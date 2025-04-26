import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  isComplete: false,
  answer:{}
};
const assessmentSlice=createSlice({
  name:'Assesment',
  initialState,
  reducers:{
    setIsOpen(state,action){
      state.isOpen =action.payload;
    },
    setIsComplete(state,action){
      state.isComplete=action.payload;
    },
    setAnswer: (state, action) => {
      const { courseId, questionId, optionId } = action.payload;
      if (!state.answer[courseId]) {
        state.answer[courseId] = {};
      }
      state.answer[courseId][questionId] = optionId;
    }
    
  }
})

export const { setIsOpen, setIsComplete, setAnswer } = assessmentSlice.actions;

export default assessmentSlice.reducer;