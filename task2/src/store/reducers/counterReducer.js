import { DECREMENT, INCREMENT, RESET_COUNTER, } from "./constants";
import { createAction, createReducer } from "@reduxjs/toolkit";

const initState = {
  counter: 1,
};

export const incrementAction = createAction(INCREMENT);
export const decrementAction = createAction(DECREMENT);
export const resetCounterAction = createAction(RESET_COUNTER);

export default createReducer(initState, {
  [incrementAction]: (state) => {
    state.counter = state.counter + 1;
  },
  [decrementAction]: (state) => {
    state.counter = state.counter - 1;
  },
  [resetCounterAction]: (state) => {
    state.counter = 1;
  },
});
