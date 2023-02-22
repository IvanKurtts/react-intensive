import {
  ADD_PRODUCTS,
  ADD_FILTRED_PRODUCTS,
  SET_NEW_PRODUCTS,
  SET_PRODUCT_COUNT,
  SET_PRICE_COUNT,
  RESET_CART,
} from "./constants";
import { createAction, createReducer } from "@reduxjs/toolkit";

const initState = {
  cartItems: [],
  cartFiltredItems: [],
  productCount: 0,
  priceCount: 0,
};

export const setCartItemsAction = createAction(ADD_PRODUCTS);
export const setCartFiltredItemsAction = createAction(ADD_FILTRED_PRODUCTS);
export const setNewCartItemsAction = createAction(SET_NEW_PRODUCTS);
export const setProductCountAction = createAction(SET_PRODUCT_COUNT);
export const setPriceCountAction = createAction(SET_PRICE_COUNT);
export const resetCartAction = createAction(RESET_CART);

export default createReducer(initState, {
  [setCartItemsAction]: (state, action) => {
    state.cartItems = [...state.cartItems, action.payload];
  },
  [setCartFiltredItemsAction]: (state, action) => {
    state.cartFiltredItems = action.payload;
  },
  [setNewCartItemsAction]: (state, action) => {
    state.cartItems = [...action.payload];
  },
  [setProductCountAction]: (state, action) => {
    state.productCount = action.payload;
  },
  [setPriceCountAction]: (state, action) => {
    state.priceCount = action.payload;
  },
  [resetCartAction]: () => {
    return initState;
  },
});
