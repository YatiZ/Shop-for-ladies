import React, { createContext } from 'react';

export const ShopContext = createContext(null);


const ShopContextProvider = () => {
  return (
    <div>shop-context</div>
  )
}

export default ShopContextProvider;