import Panel from "../../../reusable/Panel";
import { FaHeart } from "react-icons/fa";
import ClothModal from "./clothModal";
import ColorData from "./ColorData";
import { AddShoppingCart } from "@mui/icons-material";
import Cart from "../Shopping/Cart";
import { useContext, useState } from "react";
import { ShopContext } from "../../../context/useShopContext";
import { SearchContext } from "../../../context/useGlobalSearch";
import { FavoriteContext } from "../../../context/useFavorite";
import { AiOutlineHeart } from "react-icons/ai";


function EachCloth({ cloth }) {
  const {globalSearch} = useContext(SearchContext)
  const {cart,handleClick } = useContext(ShopContext);
  const {favorites, addToFav, removeFav} = useContext(FavoriteContext);
  
  const isFavorite = (d)=>favorites.includes(d);

  const toggleFavorite =(itemId)=>{
     if(isFavorite(itemId)){
      // console.log(`Removing item ${itemId}`)
      removeFav(itemId)
     }else{
      addToFav(itemId)
     }
  }

  const searchItem = cloth.data.filter((item)=>(
    item.name.toLowerCase().includes(globalSearch.toLowerCase())
  ))


  const renderedOpenModal = searchItem.map((d) =>{


    const productInCart = cart.find((item)=> item.id === d.id );
    
    const quantityInCart = productInCart? productInCart.qty : 0;
    
    return(
      <Panel key={d.id} className="text-center w-fit h-full p-5 mx-3">
    <div className="overflow-hidden relative">
        <div>
       <img
          src={d.img}
          alt={d.name}
        />
        </div>
        <div className="absolute inset-0 translate-y-[85%] hover:bg-pink-400 hover:rounded-full py-3 text-black"
        
        >
          <AddShoppingCart onClick={()=>handleClick(d)}/>
          {/* <Cart products={d}/> */}
          
        {quantityInCart > 0? <span>{quantityInCart}</span>:0}
        </div>
        
      </div>
      <div className="py-3">
      
      <div>
         <ClothModal d={d} />
         <div className="flex justify-between">
         <p className="text-blue-500 font-black">${d.price}</p>
         <button onClick={()=>toggleFavorite(d.id)} className="text-xl">
          {isFavorite(d.id)? <FaHeart className="text-red-500"/> : <AiOutlineHeart/>}
         </button>
         </div>
         <div className="flex justify-start">
           <ColorData colors={d.color} sizes={d.size}/>
         </div>
      </div>
      </div>
      

    </Panel>
    )
  });
  return <>
  {!!(searchItem.length)&& <h1 className="font-bold mt-10">{cloth.type}</h1>}
  <div className="grid md:grid-cols-3 grid-cols-1 place-items-center mx-10 mt-4 gap-y-5">
        
  {renderedOpenModal} 
      </div>
  
  
  </>;
  
}
export default EachCloth;
