import React, { useContext } from 'react';
import { AddShoppingCart } from '@mui/icons-material';
import { ShopContext } from '../../../context/useShopContext';

const Cart = ({products}) => {
  let qty = [];
  const { addToCart} = useContext(ShopContext)
  const handleClick = ()=>{
    addToCart(products)
    
    
  }
  
  return (
    <><AddShoppingCart onClick={handleClick}/>
    
    </>
  )
}

export default Cart;