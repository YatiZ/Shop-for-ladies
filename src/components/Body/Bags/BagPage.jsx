import Panel from "../../../reusable/Panel";
import { BagData } from "./BagData";
import { useState } from "react";
import EachBag from "./EachBag";
import { useLocation } from "react-router";

function BagPage() {
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  const filteredBag = BagData.filter(
    (bag) => bag.brandName === query.get("bagbrand")
  );
  
  const bags = query.get("bagbrand") ? filteredBag : BagData;

  const bagData = bags.map((data) => (
    <div key={data.id}>
      
        <EachBag data={data} />
     
    </div>
  ));
  return (
    <div className="mt-20">
      {bagData}
    </div>
  );
}
export default BagPage;
