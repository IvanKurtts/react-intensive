import React, { useState } from "react";
import { addCounter, priceCounter } from "../utils/addCounter";
import { useContext } from "react";
import { LoginContext } from "../hoc/LoginProvider";

export const AddButton = (product) => {
  const [counter, setCounter] = useState(1);
  const { isLoggedIn } = useContext(LoginContext);
  const Counter = () => {
    addCounter(counter);
    priceCounter(product.product.price * counter);
    setCounter(1);
  };
  if (isLoggedIn) {
    return (
      <div className="addButton">
        <div>
          <button onClick={Counter}>Добавить в корзину</button>
          <button
            className="change-btn"
            onClick={() => setCounter(counter > 1 ? counter - 1 : counter)}
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
