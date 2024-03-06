import { configureStore } from "@reduxjs/toolkit";
import exampleReducer from "./example/exampleSlice";

export const store = configureStore({
  reducer: { example: exampleReducer }, //all our reducer functions will go here
});
