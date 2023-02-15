import { useContext } from "react";
import { LoginContext } from "../hoc/LoginProvider";
import cart from "../icons/cart.svg";

export const CartBar = () => {
  const { isLoggedIn } = useContext(LoginContext);
  if (isLoggedIn) {
    return (
      <>
        <div className="filledCart">
          <div>
            <img src={cart} alt="" />
            <span> В корзине </span>
            <span id="sum">0</span>
            <span> товаров на сумму </span>
            <span id="sumValue">0</span>
            <span>$</span>
          </div>
        </div>
      </>
    );
  }
};
