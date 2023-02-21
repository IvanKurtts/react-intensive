import { SET_LOGIN } from "./constants";
import { createAction, createReducer } from "@reduxjs/toolkit";

const initState = {
  isLoggedIn: false,
};

export const setLoginAction = createAction(SET_LOGIN);

export default createReducer(initState, {
  [setLoginAction]: (state, action) => {
    state.isLoggedIn = action.payload;
  },
});
