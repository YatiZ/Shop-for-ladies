import Modal from "../../../reusable/Modal";
import React, { useContext } from "react";
import { useState } from "react";

import { ShopContext } from "../../../context/useShopContext";
import { Button } from "@mui/material";
import { SearchContext } from "../../../context/useGlobalSearch";
import ModelAccess from "./ModelAccess";

const EachItem = ({ thing }) => {
  const { globalSearch } = useContext(SearchContext);
  const { handleClick, cart } = useContext(ShopContext);
  const [openImg, setOpenImg] = useState({});

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
          <p className="text-center text-xs">{d.name}</p>
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
