import { useContext, useState } from "react";
import { LoginContext } from "../hoc/LoginProvider";
import { LoginModal } from "./LoginModal";
import { cartReset } from "../utils/addCounter";

export const Login = () => {
  const { isLoggedIn, changeLoggedInStatus } = useContext(LoginContext);

  const handleLogout = () => {
    document.getElementById("sum").value = "0";
    document.getElementById("sumValue").value = "0";
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
