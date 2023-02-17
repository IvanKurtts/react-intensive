import { useContext, useState } from "react";
import { LoginContext } from "../hoc/LoginProvider";
import { LoginModal } from "./LoginModal";
import { cartReset } from "../utils/addCounter";
import { CartContext } from "../hoc/CartProvider";

export const Login = () => {
  const { isLoggedIn, changeLoggedInStatus } = useContext(LoginContext);
  const { setProductCount, setPriceCount } = useContext(CartContext);

  const handleLogout = () => {
    setProductCount(0);
    setPriceCount(0);
    setModalActive(false);
    changeLoggedInStatus(!isLoggedIn);
    cartReset();
  };

  const [modalActive, setModalActive] = useState(false);

  if (!isLoggedIn) {
    return (
      <>
        <div className="login-btn">
          <button onClick={() => setModalActive(true)}>Войти</button>
        </div>
        <LoginModal active={modalActive} setActive={setModalActive} />
      </>
    );
  } else {
    return (
      <div className="login-btn">
        <button onClick={handleLogout}>Выйти</button>
      </div>
    );
  }
};
