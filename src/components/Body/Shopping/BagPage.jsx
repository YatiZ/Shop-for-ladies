import React, { useContext, useState } from "react";
import Panel from "../../../reusable/Panel";
import { ShopContext } from "../../../context/useShopContext";
import { IoClose } from "react-icons/io5";
import OrderSummary from "./OrderSummary";

const ShoppingBagPage = () => {
  const { cart,handleDecrement,handleClick,handleRemove } = useContext(ShopContext);
 
  
  
  return (
    <div>
      <h1 className="flex justify-center mt-5">My Shopping Bag</h1>
      {cart.length ? (
        <div className="flex flex-col md:flex-row justify-center md:mr-5">
          <div className="overflow-y-auto max-h-[400px] w-full mt-4">
          {cart.map((item) => (
           
            <Panel className="flex px-2 mx-6 mt-4" key={item.id}>
              <div className="flex justify-end pt-3">
                <div>
                  <IoClose onClick={()=>handleRemove(item)}/>
                </div>
              </div>
              <hr/>
              <div className="flex flex-row gap-2">
                  <div className=" py-8">
                    <img className="rounded-full w-32" src={item.img} alt="item" />
                  </div>
                  <div className="px-10">
                  <div className="font-bold mt-8">{item.name}</div>
                  
                  <div className="mt-5"><span>Each: </span> <b>${item.price}</b></div>

                    <div className="flex flex-row mt-2"> <span>Quantity: </span>
                    <div className="mx-3 flex gap-3">
                    <button className="rounded-md w-5 bg-slate-400" onClick={()=>handleDecrement(item)}>-</button>
                    <span className="">{item.qty} </span>
                    <button className=" rounded-md w-5 bg-slate-400" onClick={()=>handleClick(item)}>+</button>
                    
                    </div>
                   
                    </div>
                  
                    <div className="mt-2 grid grid-cols-2 gap-5">
                     <div>Size: {cart.size}</div>
                     <div>Color: {Array.isArray(cart.color) && cart.color.map((i,index)=>(
                      <div className="border bg-slate-300 rounded-full px-2 mx-1">{i}</div>
                     ))}</div>
                    </div>
                    </div>
              
              </div>
            </Panel>
  
          ))}
         </div>
         
          <div className="mt-5 w-full">
            <OrderSummary cart={cart}/>
          </div>

        </div>
      ) : (
        <>Cart is empty</>
      )}
    </div>
  );
};

export default ShoppingBagPage;
