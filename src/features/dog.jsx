import { createSlice } from '@reduxjs/toolkit';


export const dogSlice = createSlice({
  name: "dog",
  initialState: { value: { name: "", age: 0 }},
  reducers: {
    humanAge: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { humanAge } = dogSlice.actions;
 
export default dogSlice.reducer;