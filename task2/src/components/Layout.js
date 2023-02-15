import { Outlet, NavLink } from "react-router-dom";
import { CartBar } from "./CartBar";
import { Login } from "./Login";

const activeStyles = {
  background: "teal",
};

export const Layout = () => {
  return (
    <>
      <header className="app-header">
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyles : undefined)}
        >
          Главная страница
        </NavLink>
        <NavLink
          to="about"
          style={({ isActive }) => (isActive ? activeStyles : undefined)}
        >
          О магазине
        </NavLink>
        <Login />
        <CartBar />
      </header>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};
