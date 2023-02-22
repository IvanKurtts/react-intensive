import { useState } from "react";
import { LoginModal } from "./LoginModal";
import { useDispatch, useSelector } from "react-redux";
import { setLogoutAction } from "../store/reducers/loginReducer";
import { resetCartAction } from "../store/reducers/cartReducer";
import { loginSelector } from "../store/selectors/selectors";

export const Login = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector(loginSelector);
  const [modalActive, setModalActive] = useState(false);

  const handleLogout = () => {
    setModalActive(false);
    dispatch(setLogoutAction());
    dispatch(resetCartAction());
  };

  if (!isLoggedIn) {
    return (
      <>
        <div className="login-btn">
          <button onClick={() => setModalActive(true)}>Войти</button>
        </div>
        <LoginModal modalActive={modalActive} setModalActive={setModalActive} />
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
