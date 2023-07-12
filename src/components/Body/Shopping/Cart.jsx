import React, { useContext } from 'react';
import { AddShoppingCart } from '@mui/icons-material';
import { ShopContext } from '../../../context/useShopContext';

const Cart = ({products}) => {
  
  const { cart,addToCart} = useContext(ShopContext)
  const handleClick = ()=>{
    addToCart(products)
    
  }
  
  return (
    <><AddShoppingCart onClick={handleClick}/>
     
    </>
  )
}

export default Cart;