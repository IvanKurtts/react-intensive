import { createContext, useState } from "react";

export const LoginContext = createContext(null);

export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const changeLoggedInStatus = (value) => {
    setIsLoggedIn(value);
  };

  return (
    <LoginContext.Provider value={{ isLoggedIn, changeLoggedInStatus }}>
      {children}
    </LoginContext.Provider>
  );
};
