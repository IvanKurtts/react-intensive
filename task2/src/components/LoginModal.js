import React from "react";
import { validation } from "../utils/validation";
import {
  setUsernameAction,
  setPasswordAction,
  setErrorAction,
  setModalAction,
} from "../store/reducers/loginModalReducer";
import { setLoginAction } from "../store/reducers/loginReducer";
import { useDispatch, useSelector } from "react-redux";

export const LoginModal = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn.isLoggedIn);
  const modalActive = useSelector((state) => state.login.modalActive);
  const username = useSelector((state) => state.login.username);
  const password = useSelector((state) => state.login.password);
  const errorActive = useSelector((state) => state.login.errorActive);

  const handleLogin = () => {
    if (validation(username, password)) {
      dispatch(setLoginAction(!isLoggedIn));
    } else {
      dispatch(setErrorAction(true));
    }
  };

  const resetLoginModal = () => {
    dispatch(setModalAction(false));
    dispatch(setUsernameAction(""));
    dispatch(setPasswordAction(""));
    dispatch(setErrorAction(false));
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
