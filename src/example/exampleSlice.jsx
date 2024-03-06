import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  exampleText: "Default Text",
};

export const exampleSlice = createSlice({
  name: "example",
  initialState,
  reducers: {
    exampleActionOne: (state) => {
      state.exampleText = "Example 1";
    },
    exampleActionTwo: (state) => {
      state.exampleText = "Example 2";
    },
    exampleActionWithPayload: (state, action) => {
      state.exampleText = action.payload;
    },
  },
});

export const { exampleActionOne, exampleActionTwo, exampleActionWithPayload } =
  exampleSlice.actions;

export default exampleSlice.reducer;
