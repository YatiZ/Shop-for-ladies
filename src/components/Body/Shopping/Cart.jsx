import React, { useContext } from 'react';
import { AddShoppingCart } from '@mui/icons-material';
import { ShopContext } from '../../../context/useShopContext';

const Cart = ({products}) => {
  console.log(products)
  const { cart,addToCart} = useContext(ShopContext)
  const handleClick = ()=>{
    addToCart(products)
    console.log(cart)
  }
  
  return (
    <><AddShoppingCart onClick={handleClick}/>
     
    </>
  )
}

export default Cart;