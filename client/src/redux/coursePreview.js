import { createSlice } from "@reduxjs/toolkit";
const initialState={
  isPreview:false
}
const previwSlice=createSlice({
  name:"preveiw",
  initialState,
  reducers:{
    setIsPreview(state,action){
      state.isPreview=action.payload
    }
  }

})

export const { setIsPreview} = previwSlice.actions;

export default previwSlice.reducer;