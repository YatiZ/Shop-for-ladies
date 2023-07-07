import React from 'react';
import { AddShoppingCart } from '@mui/icons-material';
import { useState } from 'react';

const Cart = () => {
  const [addItem, setAddItem] = useState(0)
  const handleClick = ()=>{
     setAddItem(addItem+1)
  }
  console.log(addItem)
  return (
    <><AddShoppingCart onClick={handleClick}/>
     {addItem}
    </>
  )
}

export default Cart;