import { combineReducers } from "redux";
import counterReducer from "./reducers/counterReducer";
import productsReducer from "./reducers/productsReducer";
import productReducer from "./reducers/productReducer";
import loginModalReducer from "./reducers/loginModalReducer";
import loginReducer from "./reducers/loginReducer";
import headerCartReducer from "./reducers/headerCartReducer";
import cartReducer from "./reducers/cartReducer";
import cartContentReducer from "./reducers/cartContentReducer";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  counter: counterReducer,
  products: productsReducer,
  product: productReducer,
  login: loginModalReducer,
  isLoggedIn: loginReducer,
  headerCart: headerCartReducer,
  cart: cartReducer,
  cartItems: cartContentReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
