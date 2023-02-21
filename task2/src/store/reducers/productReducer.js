import { SET_PRODUCT } from "./constants";
import { createAction, createReducer } from "@reduxjs/toolkit";

const initState = {
  product: null,
};

export const setProductAction = createAction(SET_PRODUCT);

export default createReducer(initState, {
  [setProductAction]: (state, action) => {
    state.product = action.payload;
  },
});
