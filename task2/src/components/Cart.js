import { useDispatch, useSelector } from "react-redux";
import { CartContent } from "./CartContent";
import { resetCartAction } from "../store/reducers/cartReducer";
import { cartSelector } from "../store/selectors/selectors";

export const Cart = ({ cartActive, setCartActive }) => {
  const { cartFiltredItems, priceCount } = useSelector(cartSelector);
  const dispatch = useDispatch();

  const clearCart = () => {
    setCartActive(false);
    dispatch(resetCartAction());
  };

  return (
    <div className={cartActive ? "modal active" : "modal"}>
      <div className="cart-content">
        <div className="x-btn">
          <button onClick={() => setCartActive(false)}>X</button>
        </div>
        <div className="products-cart">
          {cartFiltredItems.map((item) => {
            return (
              <CartContent
                key={item.id}
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
