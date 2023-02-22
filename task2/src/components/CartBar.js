import cartIcon from "../icons/cartIcon.svg";
import { useSelector } from "react-redux";
import { Cart } from "./Cart";
import { useState } from "react";
import { cartSelector } from "../store/selectors/selectors";

export const CartBar = () => {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const { productCount, priceCount } = useSelector(cartSelector);
  const [cartActive, setCartActive] = useState(false);

  if (isLoggedIn) {
    return (
      <>
        <div className="filledCart">
          <div>
            <img
              src={cartIcon}
              alt=""
              className="cartIcon"
              onClick={() => setCartActive(true)}
            />
            <span> В корзине </span>
            <span id="sum">{productCount}</span>
            <span> товаров на сумму </span>
            <span id="sumValue">{priceCount}</span>
            <span>$</span>
          </div>
        </div>
        <Cart cartActive={cartActive} setCartActive={setCartActive} />
      </>
    );
  }
};
