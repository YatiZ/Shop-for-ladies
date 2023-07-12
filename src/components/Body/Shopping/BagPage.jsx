import React, { useContext } from 'react';
import { Routes,Route } from 'react-router';
import BagData from './BagData';
import Cart from './Cart';
import { ShopContext } from '../../../context/useShopContext';

const ShoppingBagPage = () => {
   const {cart} = useContext(ShopContext)
  return (
   <div>
     <h1>The things you buy-</h1>
     {JSON.stringify(cart)}
     {cart.map((item)=>(
       <div>{item.name} - {item.qty}</div>
       
     ))}
   </div>
  )
}

export default ShoppingBagPage;