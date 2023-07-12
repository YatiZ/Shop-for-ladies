import React, { createContext, useState } from "react";

const ShopContext = createContext();

const ShopProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (products) => {
    const cartItem = {
      id: products.id,
      img: products.img,
      name: products.clothName,
      price: products.value,
      qty: 1,
    };
    let existingItem = cart.findIndex((item) => item.id === cartItem.id);

    if (existingItem !== -1) {
      const newCart = cart;
      newCart[existingItem].qty++;
      setCart(() => newCart);
      return;
    }
    setCart(() => [...cart, cartItem]);
  };

  return (
    <ShopContext.Provider value={{ cart, addToCart }}>
      {children}
    </ShopContext.Provider>
  );
};

export { ShopContext, ShopProvider };
