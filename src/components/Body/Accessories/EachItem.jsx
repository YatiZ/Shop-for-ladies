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
  const [openImg, setOpenImg] = useState(false);

  const searchItem = thing.things.filter((item) =>
    item.name.toLowerCase().includes(globalSearch.toLowerCase())
  );
  const handleOpenImg = () => {
    setOpenImg(!openImg);
  };

  // To show itemQty
  const renderedData = searchItem.map((thing) => {
    const productInCart = cart.find((item) => item.id === thing.id);
    const quantityInCart = productInCart ? productInCart.qty : 0;
    return (
      <div>
        <div>
          <p className="text-center text-xs">{thing.name}</p>
          <img
            src={thing.img}
            alt="thing"
            className="w-56 h-full cursor-pointer hover:ring"
            onClick={() => handleOpenImg(thing)}
          />

          {openImg && (
            <ModelAccess
              quantityInCart={quantityInCart}
              handleOpenImg={handleOpenImg}
              thing={thing}
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
