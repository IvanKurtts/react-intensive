import {
  SET_MODAL_ACTIVE,
  SET_ERROR_ACTIVE,
  SET_USERNAME,
  SET_PASSWORD,
} from "./constants";
import { createAction, createReducer } from "@reduxjs/toolkit";

const initState = {
  modalActive: false,
  username: "",
  password: "",
  errorActive: false,
};

export const setModalAction = createAction(SET_MODAL_ACTIVE);
export const setErrorAction = createAction(SET_ERROR_ACTIVE);
export const setUsernameAction = createAction(SET_USERNAME);
export const setPasswordAction = createAction(SET_PASSWORD);

export default createReducer(initState, {
  [setModalAction]: (state, action) => {
    state.modalActive = action.payload;
  },
  [setErrorAction]: (state, action) => {
    state.errorActive = action.payload;
  },
  [setUsernameAction]: (state, action) => {
    state.username = action.payload;
  },
  [setPasswordAction]: (state, action) => {
    state.password = action.payload;
  },
});
