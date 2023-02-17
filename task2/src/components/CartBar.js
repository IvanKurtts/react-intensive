import { useContext } from "react";
import { CartContext } from "../hoc/CartProvider";
import { LoginContext } from "../hoc/LoginProvider";
import cartIcon from "../icons/cartIcon.svg";

export const CartBar = () => {
  const { isLoggedIn } = useContext(LoginContext);
  const { cart } = useContext(CartContext);

  if (isLoggedIn) {
    return (
      <>
        <div className="filledCart">
          <div>
            <img src={cartIcon} alt="" />
            <span> В корзине </span>
            <span id="sum">{cart.productCount}</span>
            <span> товаров на сумму </span>
            <span id="sumValue">{cart.priceCount}</span>
            <span>$</span>
          </div>
        </div>
      </>
    );
  }
};
