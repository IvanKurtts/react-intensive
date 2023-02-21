import { SET_CART_ACTIVE } from "./constants";
import { createAction, createReducer } from "@reduxjs/toolkit";

const initState = {
  cartActive: false,
};

export const setCartAction = createAction(SET_CART_ACTIVE);

export default createReducer(initState, {
  [setCartAction]: (state, action) => {
    state.cartActive = action.payload;
  },
});
