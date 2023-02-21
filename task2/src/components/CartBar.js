import cartIcon from "../icons/cartIcon.svg";
import { useDispatch, useSelector } from "react-redux";
import { Cart } from "./Cart";
import { setCartAction } from "../store/reducers/cartReducer";

export const CartBar = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn.isLoggedIn);
  const productCount = useSelector((state) => state.headerCart.productCount);
  const priceCount = useSelector((state) => state.headerCart.priceCount);

  if (isLoggedIn) {
    return (
      <>
        <div className="filledCart">
          <div>
            <img
              src={cartIcon}
              alt=""
              className="cartIcon"
              onClick={() => dispatch(setCartAction(true))}
            />
            <span> В корзине </span>
            <span id="sum">{productCount}</span>
            <span> товаров на сумму </span>
            <span id="sumValue">{priceCount}</span>
            <span>$</span>
          </div>
        </div>
        <Cart />
      </>
    );
  }
};
