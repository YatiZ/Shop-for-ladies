
import { AiOutlineHeart,AiOutlineShoppingCart } from "react-icons/ai";
import { AddShoppingCart } from "@mui/icons-material";
import Panel from "../../../reusable/Panel";
import BagSwip from "./BagSwip";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useContext } from "react";
import { ShopContext } from "../../../context/useShopContext";
import { SearchContext } from "../../../context/useGlobalSearch";

function EachBag({data}){
    const {globalSearch} = useContext(SearchContext);
    const {cart,handleClick} = useContext(ShopContext);
    const [heart, setHeart] = useState(false);
    
    // Global Search fun using context 
    const searchItem = data.data.filter((item)=>(
        item.name.toLowerCase().includes(globalSearch.toLowerCase())
    ))

    const handleClickHeart= (bag)=>{
       setHeart(!heart)
    }
    
    const renderedData = searchItem.map((bag)=>{

        const productInCart = cart.find((item)=>item.id === bag.id);
        
        const quantityInCart = productInCart?productInCart.qty: 0;
        
    return(
        <Panel className='text-center' key={bag.id}>
        <div className="flex flex-row justify-center">
        <p className="mt-2">{bag.name}</p>
        <button className="text-xl px-1 mt-2" onClick={()=>handleClickHeart(bag)}>
        {!heart? <AiOutlineHeart/>: <FaHeart color="red"/> }
        </button>
        </div>
    
        <BagSwip bag={bag}/>
        <div className="flex px-5 gap-x-5 justify-center">
        <h1 className="mb-3 font-bold text-blue-500">${bag.price}</h1>
        
        <div className="p-0">
        <AddShoppingCart onClick={()=>handleClick(bag)}/>
        {quantityInCart >0? <span>{quantityInCart}</span>:0}
        </div>

        </div>
        </Panel>
     )});
     return<>
     {!!(searchItem.length) && <h1 className="font-bold mb-3">{data.brandName}</h1>}
      <div className="grid md:grid-cols-3 grid-cols-1 place-items-center gap-x-2 gap-y-4">
      {renderedData}
      </div>
   
     </>
    
}
export default EachBag;