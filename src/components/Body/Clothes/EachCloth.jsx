import Panel from "../../../reusable/Panel";
import { FaHeart } from "react-icons/fa";
import ClothModal from "./clothModal";
import ColorData from "./ColorData";
import { AddShoppingCart } from "@mui/icons-material";
import Cart from "../Shopping/Cart";
import { useState } from "react";


function EachCloth({ cloth }) {
  
  const renderedOpenModal = cloth.data.map((d) => (
    <Panel className="text-center w-fit h-full p-5 mx-3">
      <div className="overflow-hidden relative">
        <div>
        <img
          src={d.img}
          alt={d.clothName}
          
        />
        </div>
        <div className="absolute inset-0 translate-y-[85%] hover:bg-pink-400 hover:rounded-full py-3 text-white"><Cart/></div>
        
      </div>
      <div className="py-3">
      
      <div>
         <ClothModal d={d} />
         <div className="flex justify-between">
         <p className="text-blue-500 font-black">${d.value}</p>
         <p><FaHeart/></p>
         </div>
         <div className="flex justify-start">
           <ColorData colors={d.color} sizes={d.size}/>
         </div>
      </div>
      </div>
      

    </Panel>
  ));
  return <>{renderedOpenModal} 
  
  </>;
}
export default EachCloth;
