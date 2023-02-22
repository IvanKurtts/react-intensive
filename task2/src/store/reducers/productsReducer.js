import {
  SET_LOADING,
  SET_PRODUCTS,
  GET_MORE_PRODUCTS,
  SET_PRODUCT,
} from "./constants";
import { createAction, createReducer } from "@reduxjs/toolkit";

const initState = {
  products: [],
  limit: 5,
  loading: true,
  product: "",
};

export const setProductsAction = createAction(SET_PRODUCTS);
export const getMoreProductsAction = createAction(GET_MORE_PRODUCTS);
export const setLoading = createAction(SET_LOADING);
export const setProductAction = createAction(SET_PRODUCT);

export default createReducer(initState, {
  [setProductsAction]: (state, action) => {
    state.products = [...action.payload];
  },
  [getMoreProductsAction]: (state) => {
    state.limit = state.limit + 5;
  },
  [setLoading]: (state, action) => {
    state.loading = action.payload;
  },
  [setProductAction]: (state, action) => {
    state.product = action.payload;
  },
});
