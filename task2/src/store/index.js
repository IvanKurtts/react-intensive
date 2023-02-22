import { combineReducers } from "redux";
import productsReducer from "./reducers/productsReducer";
import loginReducer from "./reducers/loginReducer";
import cartReducer from "./reducers/cartReducer";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  products: productsReducer,
  login: loginReducer,
  cart: cartReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
