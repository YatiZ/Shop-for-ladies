import Panel from "../../../reusable/Panel";
import React, { useContext, useEffect, useState } from "react";
import cornerBanner from "../Shoes/images/582248-removebg-preview.png";
import { AddShoppingCart } from "@mui/icons-material";
import { ShopContext } from "../../../context/useShopContext";
import { Badge } from "@mui/material";
import { FavoriteContext } from "../../../context/useFavorite";
import { FaHeart } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";

const ShoeData = ({ shoe }) => {
  const { cart, handleClick } = useContext(ShopContext);
  const {favorites, addToFav, removeFav} = useContext(FavoriteContext);
  
  //for favoirte click


  const renderedItems = shoe.data.map((d, index) => {
    const productInCart = cart.find((item) => item.id === d.id);
    const quantityInCart = productInCart ? productInCart.qty : 0;
    const qtyAmount = quantityInCart > 0 ? quantityInCart : 0;
    
    const isFavorite = (d)=>favorites.some((favItem)=> favItem.id === d.id);
    const toggleClick =(d)=>{
       if(isFavorite(d)){
         removeFav(d);
       }else{
         addToFav(d);
       }
    }
    return (
      <Panel key={index} className="w-fit container mx-2 pb-2 mb-5">
        <div className="w-fit">
          <img
            src={cornerBanner}
            alt="saleBanner"
            className="w-32 object-cover absolute"
          />
          <img className="w-full h-full object-cover" src={d.img} alt="img" />
        </div>

        <div className="mt-3 px-3">
          <div className="flex justify-center mb-4">
            <Badge badgeContent={qtyAmount} color="primary">
              <div className=" p-3 bg-slate-400 hover:bg-blue-500 cursor-pointer">
                <AddShoppingCart onClick={() => handleClick(d)} />
              </div>
            </Badge>
          </div>

          <p className="underline text-blue-400">${d.price}.00</p>

          <div className="flex flex-row">
            <h1 className="font-Serif font-bold">{d.name}</h1>
            <button onClick={()=>toggleClick(d)} className="text-xl">
              {isFavorite(d)? <FaHeart color="red"/> : <AiOutlineHeart/>}
            </button>
          </div>
        </div>
      </Panel>
    );
  });

  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 p-10 lg:gap-4 lg:px-10 ">
      {renderedItems}
    </div>
  );
};

export default ShoeData;
