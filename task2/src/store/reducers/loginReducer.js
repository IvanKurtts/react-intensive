import {
  SET_ERROR_ACTIVE,
  SET_USERNAME,
  SET_PASSWORD,
  SET_LOGIN,
  SET_LOGOUT
} from "./constants";
import { createAction, createReducer } from "@reduxjs/toolkit";

const initState = {
  username: "",
  password: "",
  errorActive: false,
  isLoggedIn: false,
};

export const setErrorAction = createAction(SET_ERROR_ACTIVE);
export const setUsernameAction = createAction(SET_USERNAME);
export const setPasswordAction = createAction(SET_PASSWORD);
export const setLoginAction = createAction(SET_LOGIN);
export const setLogoutAction = createAction(SET_LOGOUT);

export default createReducer(initState, {
  [setErrorAction]: (state, action) => {
    state.errorActive = action.payload;
  },
  [setUsernameAction]: (state, action) => {
    state.username = action.payload;
  },
  [setPasswordAction]: (state, action) => {
    state.password = action.payload;
  },
  [setLoginAction]: (state, action) => {
    state.isLoggedIn = action.payload;
  },
  [setLogoutAction]: () => {
    return initState;
  },
});
