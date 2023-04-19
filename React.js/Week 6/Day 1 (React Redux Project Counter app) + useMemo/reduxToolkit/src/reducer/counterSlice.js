import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export default CounterSlice.reducer

export const { increment, decrement } = CounterSlice.actions;