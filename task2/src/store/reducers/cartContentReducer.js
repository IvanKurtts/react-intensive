import {
  ADD_PRODUCTS,
  ADD_FILTRED_PRODUCTS,
  RESET_PRODUCTS,
  SET_NEW_PRODUCTS,
} from "./constants";
import { createAction, createReducer } from "@reduxjs/toolkit";

const initState = {
  cartItems: [],
  cartFiltredItems: [],
};

export const setCartItemsAction = createAction(ADD_PRODUCTS);
export const setCartFiltredItemsAction = createAction(ADD_FILTRED_PRODUCTS);
export const resetCartItemsAction = createAction(RESET_PRODUCTS);
export const setNewCartItemsAction = createAction(SET_NEW_PRODUCTS);

export default createReducer(initState, {
  [setCartItemsAction]: (state, action) => {
    state.cartItems = [...state.cartItems, [...action.payload]];
  },
  [setCartFiltredItemsAction]: (state, action) => {
    state.cartFiltredItems = action.payload;
  },
  [resetCartItemsAction]: (state) => {
    state.cartItems = [];
  },
  [setNewCartItemsAction]: (state, action) => {
    state.cartItems = [...action.payload];
  },
});
