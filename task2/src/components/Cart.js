import { useDispatch, useSelector } from "react-redux";
import { setCartAction } from "../store/reducers/cartReducer";
import { CartContent } from "./CartContent";
import { resetCartItemsAction } from "../store/reducers/cartContentReducer";

export const Cart = () => {
  const cartActive = useSelector((state) => state.cart.cartActive);
  const priceCount = useSelector((state) => state.headerCart.priceCount);
  const cartFiltredItems = useSelector(
    (state) => state.cartItems.cartFiltredItems
  );
  const dispatch = useDispatch();

  const clearCart = () => {
    dispatch(setCartAction(false));
    dispatch(resetCartItemsAction());
  };

  const closeCart = () => {
    dispatch(setCartAction(false));
  };

  return (
    <div className={cartActive ? "modal active" : "modal"}>
      <div className="cart-content">
        <div className="x-btn">
          <button onClick={closeCart}>X</button>
        </div>
        <div className="products-cart">
          {cartFiltredItems.map((item) => {
            return (
              <CartContent
                id={item.id}
                title={item.title}
                price={item.price}
                itemCount={item.count}
              />
            );
          })}
        </div>
        <div>
          Сумма: <span id="sumValue">{priceCount}</span>
          <span>$</span>
        </div>
        <div className="login-btns">
          <button>Оплатить</button>
          <button onClick={clearCart}>Очистить корзину</button>
        </div>
      </div>
    </div>
  );
};
