import { LoginModal } from "./LoginModal";
import { useDispatch, useSelector } from "react-redux";
import { setLoginAction } from "../store/reducers/loginReducer";
import {
  setUsernameAction,
  setPasswordAction,
  setErrorAction,
  setModalAction,
} from "../store/reducers/loginModalReducer";
import { resetCartItemsAction } from "../store/reducers/cartContentReducer";

export const Login = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn.isLoggedIn);

  const handleLogout = () => {
    dispatch(setModalAction(false));
    dispatch(setUsernameAction(""));
    dispatch(setPasswordAction(""));
    dispatch(setErrorAction(false));
    dispatch(setLoginAction(!isLoggedIn));
    dispatch(resetCartItemsAction());
  };

  if (!isLoggedIn) {
    return (
      <>
        <div className="login-btn">
          <button onClick={() => dispatch(setModalAction(true))}>Войти</button>
        </div>
        <LoginModal />
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
