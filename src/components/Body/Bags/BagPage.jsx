import Panel from "../../../reusable/Panel";
import { BagData } from "./BagData";
import { useState } from "react";
import EachBag from "./EachBag";


function BagPage(){
    

    // const filterBag = (brandName)=>{
    //     setBagProducts(BagData.filter((bag)=>bag.brandName === brandName))
    //     console.log(bagProducts)
    // }
    const bagData = BagData.map((data)=>(
       <div key={data.id}>
         <p>{data.brandName}</p>
         <div className="grid grid-cols-2 p-10">
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