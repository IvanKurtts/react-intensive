import React from "react";
import { validation } from "../utils/validation";
import { useContext, useState } from "react";
import { LoginContext } from "../hoc/LoginProvider";

export const LoginModal = ({ active, setActive }) => {
  const { isLoggedIn, changeLoggedInStatus } = useContext(LoginContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
      document.querySelector(".loginError").classList.add("active");
    }
  };

  const resetLoginModal = () => {
    setActive(false);
    setUsername("");
    setPassword("");
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.querySelector(".loginError").classList.remove("active");
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
            <input id="username" type="text" onChange={usernameChange}></input>
          </label>
          <label>
            Пароль{" "}
            <input
              id="password"
              type="password"
              onChange={passwordChange}
            ></input>
          </label>
          <div className="loginError">Неверные логин и/или пароль</div>
        </div>
        <div className="login-btns">
          <button onClick={() => handleLogin()}>Войти</button>
          <button onClick={resetLoginModal}>Отмена</button>
        </div>
      </div>
    </div>
  );
};
