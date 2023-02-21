import { SET_PRODUCT_COUNT, SET_PRICE_COUNT } from "./constants";
import { createAction, createReducer } from "@reduxjs/toolkit";

const initState = {
  productCount: 0,
  priceCount: 0,
};

export const setProductCountAction = createAction(SET_PRODUCT_COUNT);
export const setPriceCountAction = createAction(SET_PRICE_COUNT);

export default createReducer(initState, {
  [setProductCountAction]: (state, action) => {
    state.productCount = action.payload;
  },
  [setPriceCountAction]: (state, action) => {
    state.priceCount = action.payload;
  },
});
