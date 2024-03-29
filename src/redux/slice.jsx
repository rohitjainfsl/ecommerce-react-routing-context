import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counterSl",
  initialState: { counter: 0 },
  reducers: {
    incrementCounter: function (state) {
      state.counter++;
    },
    decrementCounter: function (state) {
      state.counter--;
    },
  },
});

export const { incrementCounter, decrementCounter } = counterSlice.actions;

const counterReducer = counterSlice.reducer;
export default counterReducer;
