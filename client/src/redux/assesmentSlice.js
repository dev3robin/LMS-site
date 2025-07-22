import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  answer: {}
};

const assessmentSlice = createSlice({
  name: 'Assessment',
  initialState,
  reducers: {
    setAnswer: (state, action) => {
      const { questionId, optionId } = action.payload;
      state.answer[questionId] = optionId;
    }
  }
});

export const { setAnswer } = assessmentSlice.actions;
export default assessmentSlice.reducer;
