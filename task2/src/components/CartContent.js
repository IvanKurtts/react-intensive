import { useDispatch, useSelector } from "react-redux";
import {
  setProductCountAction,
  setPriceCountAction,
} from "../store/reducers/headerCartReducer";
import {
  setCartItemsAction,
  setNewCartItemsAction,
} from "../store/reducers/cartContentReducer";
import { resetCartItemsAction } from "../store/reducers/cartContentReducer";

export const CartContent = ({ id, title, price, itemCount }) => {
  const cartItems = useSelector((state) => state.cartItems.cartItems);
  const dispatch = useDispatch();

  const onIncrement = () => {
    dispatch(setCartItemsAction([id, title, price, 1]));
  };
  const onDecrement = () => {
    if (itemCount > 1) {
      dispatch(setCartItemsAction([id, title, price, -1]));
    }
  };

  const removeItem = (id) => {
    const newItems = cartItems.filter((item) => item[0] !== id);
    dispatch(setNewCartItemsAction(newItems));
    if (newItems.length === 0) {
      dispatch(setProductCountAction(0));
      dispatch(setPriceCountAction(0));
      dispatch(resetCartItemsAction());
    }
  };

  return (
    <div className="cart-products" key={id}>
      <table>
        <tbody>
          <tr>
            <td className="td-id">{id}</td>
            <td className="td-title">{title}</td>
            <td className="td-price">{price} $</td>
            <td className="td-btn">
              <button onClick={onDecrement}>-</button>
              <span>{itemCount}</span>
              <button onClick={onIncrement}>+</button>
            </td>
            <td className="td-sum">{+(itemCount * price).toFixed(2)}$</td>
            <td className="td-x">
              <button onClick={() => removeItem(id)}>X</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
