import { createContext, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({
    productCount: 0,
    priceCount: 0,
  });

  const setProductCount = (value) => {
    setCart((prevState) => ({ ...prevState, productCount: value }));
  };

  const setPriceCount = (value) => {
    setCart((prevState) => ({ ...prevState, priceCount: value }));
  };

  return (
    <CartContext.Provider value={{ cart, setProductCount, setPriceCount }}>
      {children}
    </CartContext.Provider>
  );
};
