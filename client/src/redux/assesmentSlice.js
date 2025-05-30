import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  answer:{}
};
const assessmentSlice=createSlice({
  name:'Assesment',
  initialState,
  reducers:{
    setAnswer: (state, action) => {
      const { courseId, questionId, optionId } = action.payload;
      if (!state.answer[courseId]) {
        state.answer[courseId] = {};
      }
      state.answer[courseId][questionId] = optionId;
    }
    
  }
})

export const {setAnswer } = assessmentSlice.actions;

export default assessmentSlice.reducer;