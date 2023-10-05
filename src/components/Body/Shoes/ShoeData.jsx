import Panel from "../../../reusable/Panel";
import React, { useContext, useEffect, useState } from "react";
import cornerBanner from '../Shoes/images/582248-removebg-preview.png';
import { AddShoppingCart } from "@mui/icons-material";
import { ShopContext } from "../../../context/useShopContext";
import { Badge } from "@mui/material";

const ShoeData = ({ shoe }) => {
  const {cart, handleClick} = useContext(ShopContext)
  const renderedItems = shoe.data.map((d, index) => {

    const productInCart = cart.find((item)=>item.id === d.id);
    const quantityInCart = productInCart? productInCart.qty:0;
    const qtyAmount = quantityInCart >0?quantityInCart:0;
    
    return (
      <Panel key={index} className='w-fit container mx-2 pb-4'>
        <div className="">
        <img src={cornerBanner} alt="saleBanner" className="w-24 absolute"/>   
        <img className="w-fit" src={d.img} alt="img"/>
        </div>
       
        <div className="mt-3 px-3">
          <div className="flex justify-center mb-4">

            <Badge badgeContent={qtyAmount} color="primary">
            <div className=" p-3 bg-slate-400 hover:bg-blue-500 cursor-pointer">
            
            <AddShoppingCart onClick={()=>handleClick(d)} />
            </div>
            </Badge>
          
          
         
          </div>
      
           <p className="underline text-blue-400">${d.price}.00</p>
           <h1 className="font-Serif font-bold">{d.name}</h1>
          </div>
          
        
      
      </Panel>
    );
  });

  return <div className="grid grid-cols-3 gap-4 px-10">
    {renderedItems}</div>;
};

export default ShoeData;
