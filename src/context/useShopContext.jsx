import React, { createContext, useReducer, useState } from "react";

const ShopContext = createContext();

const ShopProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  
  
  const handleDecrement=(item)=>{
   

    const newCart = cart.map((cartItem) => {
      if (item.id === cartItem.id) {
        cartItem.qty--;
      }
      if(cartItem.qty === 0){
        return null;
      }
      
      return cartItem;

    })

    const updatedCart = newCart.filter(i=>i);
  
    setCart(() => updatedCart);
    console.log(newCart)
  }

  const handleRemove=(item)=>{
    const updatedCart=cart.filter((i)=>i.id !== item.id);
    setCart(()=>updatedCart)
    
  }


  const handleClick = (item) => {
    const itemExists = cart.findIndex((c) => c.id == item.id);

    if (itemExists == -1) {
      setCart(() => [...cart, item]);
      return;
    }

    const newCart = cart.map((cartItem) => {
      if (item.id === cartItem.id) {
        cartItem.qty++;
      }

      return cartItem;
    });

    setCart(() => newCart);
  };



  return (
    <ShopContext.Provider value={{ cart, handleClick,handleDecrement,handleRemove }}>
      {children}
    </ShopContext.Provider>
  );
};

export { ShopContext, ShopProvider };
