import { useDispatch, useSelector } from "react-redux";
import {
  setCartItemsAction,
  setNewCartItemsAction,
  resetCartAction,
} from "../store/reducers/cartReducer";
import { cartSelector } from "../store/selectors/selectors";

export const CartContent = ({ id, title, price, itemCount }) => {
  const { cartItems } = useSelector(cartSelector);
  const dispatch = useDispatch();

  const onIncrement = () => {
    dispatch(setCartItemsAction({ id, title, price, counter: 1 }));
  };
  const onDecrement = () => {
    if (itemCount > 1) {
      dispatch(setCartItemsAction({ id, title, price, counter: -1 }));
    }
  };
  const removeItem = (id) => {
    const newItems = cartItems.filter((item) => item.id !== id);
    dispatch(setNewCartItemsAction(newItems));
    if (newItems.length === 0) {
      dispatch(resetCartAction());
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
