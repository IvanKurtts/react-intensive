import React, { useEffect, useState } from "react";
import { addCounter, priceCounter } from "../utils/addCounter";
import { useDispatch, useSelector } from "react-redux";
import {
  setCartItemsAction,
  setCartFiltredItemsAction,
  setProductCountAction,
  setPriceCountAction,
} from "../store/reducers/cartReducer";
import { uniqItems } from "../utils/cartItemsConversion";
import { cartSelector, loginSelector } from "../store/selectors/selectors";

export const AddButton = ({ id, title, price }) => {
  const { isLoggedIn } = useSelector(loginSelector);
  const { cartItems, cartFiltredItems } = useSelector(cartSelector);
  const [counter, setCounter] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCartFiltredItemsAction(uniqItems(cartItems)));
  }, [cartItems]);
  useEffect(() => {
    dispatch(setProductCountAction(addCounter(cartFiltredItems)));
    dispatch(setPriceCountAction(priceCounter(cartFiltredItems)));
  }, [cartFiltredItems]);
  const onAdd = () => {
    dispatch(setCartItemsAction({ id, title, price, counter }));
    setCounter(1);
  };

  if (isLoggedIn) {
    return (
      <div className="addButton">
        <div>
          <button onClick={onAdd}>Добавить в корзину</button>
          <button
            className="change-btn"
            onClick={() =>
              counter > 1 ? setCounter(counter - 1) : setCounter(1)
            }
          >
            -
          </button>
          <span>{counter}</span>
          <button
            className="change-btn"
            onClick={() => setCounter(counter + 1)}
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
