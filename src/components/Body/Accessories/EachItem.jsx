import Modal from "../../../reusable/Modal";
import React, { useContext } from "react";
import { useState } from "react";

import { ShopContext } from "../../../context/useShopContext";
import { Button } from "@mui/material";
import { SearchContext } from "../../../context/useGlobalSearch";
import ModelAccess from "./ModelAccess";
import { AiOutlineHeart } from "react-icons/ai";
import { FavoriteContext } from "../../../context/useFavorite";
import { FaHeart } from "react-icons/fa";

const EachItem = ({ thing }) => {
  const {favorites, addToFav, removeFav} = useContext(FavoriteContext);
  const { globalSearch } = useContext(SearchContext);
  const { handleClick, cart } = useContext(ShopContext);
  const [openImg, setOpenImg] = useState({});

  //for favorites toggle
  const isFavorite =(d)=> favorites.some((favItem)=>favItem.id ===d.id )
  const toggleClick =(d)=>{
    
    if(isFavorite(d)){
      removeFav(d)
    }else{
      addToFav(d)
      console.log(d)
    }
  }

  const searchItem = thing.things.filter((item) =>
    item.name.toLowerCase().includes(globalSearch.toLowerCase())
  );
  const handleOpenImg = (itemId) => {
    setOpenImg((prevOpenImg)=>({
      ...prevOpenImg,
      [itemId]: !prevOpenImg[itemId],
    }))
  
  };

  // To show itemQty
  const renderedData = searchItem.map((d,index) => {
    const productInCart = cart.find((item) => item.id === d.id);
    const quantityInCart = productInCart ? productInCart.qty : 0;
    return (
      <div key={index}>
        <div>
          <div className="flex flex-row justify-evenly">
          <p className="text-center text-xs">{d.name}</p>
          <button onClick={()=>toggleClick(d)} className="text-xl">
          {isFavorite(d)? <FaHeart color="red"/> : <AiOutlineHeart/>}
          </button>
          
          </div>
          
          <img
            src={d.img}
            alt="thing"
            className="w-56 h-full cursor-pointer hover:ring"
            onClick={() => handleOpenImg(d.id)}
          />

          {openImg[d.id] && (
            <ModelAccess
              quantityInCart={quantityInCart}
              handleOpenImg={handleOpenImg}
              thing={d}
              handleClick={handleClick}
            />
          )}
        </div>
      </div>
    );
  });

  return (
    <>
      {!!searchItem.length && <div className="font-bold">{thing.type}</div>}
      <div className="grid md:grid-cols-4 grid-cols-2 p-3 mx-2 gap-2">
        {renderedData}
      </div>
    </>
  );
};

export default EachItem;
