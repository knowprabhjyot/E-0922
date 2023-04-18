import { createSlice } from "@reduxjs/toolkit";

// const INITIAL_STATE = {
//   value: 0,
// };

const INITIAL_VALUE = 0;

const CounterSlice = createSlice({
  name: "counter",
  INITIAL_VALUE,
  reducers: {
    increment: (state) => {
      state += 1;
    },
    decrement: (state) => {
      state -= 1;
    },
    incementByAmount: (state, action) => {
      state += action.payload;
    },
  },
});

export default CounterSlice.reducer

export const { increment, decrement } = CounterSlice.actions;