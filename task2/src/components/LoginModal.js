import React from "react";
import { validation } from "../utils/validation";
import { useContext, useState } from "react";
import { LoginContext } from "../hoc/LoginProvider";

export const LoginModal = ({ active, setActive }) => {
  const { isLoggedIn, changeLoggedInStatus } = useContext(LoginContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errorActive, setErrorActive] = useState(false);

  const usernameChange = (event) => {
    setUsername(event.target.value);
  };
  const passwordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    if (validation(username, password)) {
      changeLoggedInStatus(!isLoggedIn);
    } else {
      setErrorActive(true);
    }
  };

  const resetLoginModal = () => {
    setActive(false);
    setUsername("");
    setPassword("");
    setErrorActive(false);
  };

  return (
    <div className={active ? "modal active" : "modal"}>
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
              onChange={usernameChange}
            />
          </label>
          <label>
            Пароль{" "}
            <input
              id="password"
              type="password"
              value={password}
              onChange={passwordChange}
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
