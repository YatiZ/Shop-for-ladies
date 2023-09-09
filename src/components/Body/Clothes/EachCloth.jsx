import Panel from "../../../reusable/Panel";
import { FaHeart } from "react-icons/fa";
import ClothModal from "./clothModal";
import ColorData from "./ColorData";
import { AddShoppingCart } from "@mui/icons-material";
import Cart from "../Shopping/Cart";
import { useContext, useState } from "react";
import { ShopContext } from "../../../context/useShopContext";


function EachCloth({ cloth }) {
  const {cart,handleClick } = useContext(ShopContext);
  const [order, setOrder] = useState(0);
  const orderArray = []

  

  const renderedOpenModal = cloth.data.map((d) =>{
  //   const [count, setCount] = useState(0);
  //   const handleClick = (d)=>{
  //     setCount(count+1)
  // }

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
         <p><FaHeart/></p>
         </div>
         <div className="flex justify-start">
           <ColorData colors={d.color} sizes={d.size}/>
         </div>
      </div>
      </div>
      

    </Panel>
    )
  });
  return <>{renderedOpenModal} 
  
  </>;
  
}
export default EachCloth;
