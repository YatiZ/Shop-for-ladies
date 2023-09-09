
import { AiOutlineHeart,AiOutlineShoppingCart } from "react-icons/ai";
import { AddShoppingCart } from "@mui/icons-material";
import Panel from "../../../reusable/Panel";
import BagSwip from "./BagSwip";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useContext } from "react";
import { ShopContext } from "../../../context/useShopContext";

function EachBag({data}){
    const {cart,handleClick} = useContext(ShopContext);
    const [heart, setHeart] = useState(false);
    const handleClickHeart= (bag)=>{
       setHeart(!heart)
    }
    
    const renderedData = data.data.map((bag)=>{

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
     {renderedData}
     </>
    
}
export default EachBag;