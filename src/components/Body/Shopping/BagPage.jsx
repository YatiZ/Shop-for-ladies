import React from 'react';
import { Routes,Route } from 'react-router';
import BagData from './BagData';
import Cart from './Cart';

const ShoppingBagPage = ({addItem}) => {
    console.log('Items are:',addItem)
  return (
   <div>
     <h1>The things you buy-</h1>
     {addItem === 0? (<p>cart is empty</p>):
     (<div>
        {addItem}</div>)}
   </div>
  )
}

export default ShoppingBagPage;