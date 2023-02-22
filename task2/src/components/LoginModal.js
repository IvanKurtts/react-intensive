import React from "react";
import { validation } from "../utils/validation";
import {
  setUsernameAction,
  setPasswordAction,
  setErrorAction,
  setLoginAction,
  setLogoutAction
} from "../store/reducers/loginReducer";
import { useDispatch, useSelector } from "react-redux";
import { loginSelector } from "../store/selectors/selectors";

export const LoginModal = ({modalActive, setModalActive}) => {
  const dispatch = useDispatch();
  const { username, password, errorActive, isLoggedIn } = useSelector(loginSelector);

  const handleLogin = () => {
    if (validation(username, password)) {
      dispatch(setLoginAction(!isLoggedIn));
    } else {
      dispatch(setErrorAction(true));
    }
  };

  const resetLoginModal = () => {
    setModalActive(false);
    dispatch(setLogoutAction());
  };

  return (
    <div className={modalActive ? "modal active" : "modal"}>
      <div
        className="modal-content"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="x-btn">
          <button onClick={resetLoginModal}>X</button>
        </div>
        <div className="login-inputs">
          <label>
            Логин{" "}
            <input
              id="username"
              type="text"
              value={username}
              onChange={(event) =>
                dispatch(setUsernameAction(event.target.value))
              }
            />
          </label>
          <label>
            Пароль{" "}
            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) =>
                dispatch(setPasswordAction(event.target.value))
              }
            />
          </label>
          <div className={errorActive ? "loginError active" : "loginError"}>
            Неверные логин и/или пароль
          </div>
        </div>
        <div className="login-btns">
          <button onClick={handleLogin}>Войти</button>
          <button onClick={resetLoginModal}>Отмена</button>
        </div>
      </div>
    </div>
  );
};
