import { useContext, useState } from "react";
import EachCloth from "./Clothes/EachCloth";
import { clothes } from "./Clothes/clothData";
import { useLocation } from "react-router-dom";
import SearchItem from "../header/drops/SearchItem";

function ClothesPage() {
  const { search } = useLocation();

  const query = new URLSearchParams(search);

  const filteredClothes = clothes.filter(
    (cloth) => cloth.type === query.get("category")
  );
  const newCloth = query.get("category") ? filteredClothes : clothes;

  const clothData = newCloth.map((cloth, index) => (
    <div key={index}>
      <EachCloth cloth={cloth} />
    </div>
  ));
  return (
    <div className=" font-Serif text-center ">
  
      
      <SearchItem/>

      <div>{clothData}</div>
    </div>
  );
}

export default ClothesPage;
