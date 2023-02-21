import { SET_LOADING, SET_PRODUCTS, GET_MORE_PRODUCTS } from "./constants";
import { createAction, createReducer } from "@reduxjs/toolkit";

const initState = {
  products: [],
  limit: 5,
  loading: true,
};

export const setProductsAction = createAction(SET_PRODUCTS);
export const getMoreProductsAction = createAction(GET_MORE_PRODUCTS);
export const setLoading = createAction(SET_LOADING);

export default createReducer(initState, {
  [setProductsAction]: (state, action) => {
    state.products = [...action.payload];
  },
  [getMoreProductsAction]: (state) => {
    state.limit = state.limit + 5;
  },
  [setLoading]: (state) => {
    state.loading = false;
  },
});
