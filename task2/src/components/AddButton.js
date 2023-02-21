import React, { useEffect } from "react";
import { addCounter, priceCounter } from "../utils/addCounter";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementAction,
  decrementAction,
  resetCounterAction,
} from "../store/reducers/counterReducer";
import {
  setProductCountAction,
  setPriceCountAction,
} from "../store/reducers/headerCartReducer";
import {
  setCartItemsAction,
  setCartFiltredItemsAction,
} from "../store/reducers/cartContentReducer";
import { uniqItems } from "../utils/cartItemsConversion";

export const AddButton = ({ id, title, price }) => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn.isLoggedIn);
  const counter = useSelector((state) => state.counter.counter);
  const cartItems = useSelector((state) => state.cartItems.cartItems);
  const cartFiltredItems = useSelector(
    (state) => state.cartItems.cartFiltredItems
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCartFiltredItemsAction(uniqItems(cartItems)));
  }, [cartItems]);
  useEffect(() => {
    dispatch(setProductCountAction(addCounter(cartFiltredItems)));
    dispatch(setPriceCountAction(priceCounter(cartFiltredItems)));
  });

  const onAdd = () => {
    dispatch(setCartItemsAction([id, title, price, counter]));
    dispatch(resetCounterAction());
  };

  if (isLoggedIn) {
    return (
      <div className="addButton">
        <div>
          <button onClick={onAdd}>Добавить в корзину</button>
          <button
            className="change-btn"
            onClick={() =>
              counter > 1
                ? dispatch(decrementAction())
                : dispatch(resetCounterAction())
            }
          >
            -
          </button>
          <span>{counter}</span>
          <button
            className="change-btn"
            onClick={() => dispatch(incrementAction())}
          >
            +
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="loginMessage">
        Чтобы добавить товар в корзину, необходимо войти
      </div>
    );
  }
};
