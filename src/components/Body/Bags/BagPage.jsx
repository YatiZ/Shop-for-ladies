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
      <h1 className="font-bold mb-3">{data.brandName}</h1>
      <div className="grid md:grid-cols-3 grid-cols-1 place-items-center gap-x-2 gap-y-4">
        <EachBag data={data} />
      </div>
    </div>
  ));
  return (
    <div className="mt-8">
      {bagData}
    </div>
  );
}
export default BagPage;
