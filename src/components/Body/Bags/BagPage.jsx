import Panel from "../../../reusable/Panel";
import { BagData } from "./BagData";
import { useState } from "react";
import EachBag from "./EachBag";
import { useLocation } from "react-router";


function BagPage(){
    
    const {search} = useLocation();
    const query = new URLSearchParams(search);

    const filteredBag = BagData.filter((bag)=> bag.brandName === query.get("bagbrand"));
    console.log(filteredBag)
    const bags = query.get("bagbrand")? filteredBag: BagData;

    const bagData = bags.map((data)=>(
       <div key={data.id}>
         <p>{data.brandName}</p>
         <div className="grid md:grid-cols-2 grid-cols-1 place-items-center m-14">
            <EachBag data={data}/>
         </div>
       </div>
    ))
    return (
        <div>This is Bag Page
            {bagData}
        </div>
    )
}
export default BagPage;