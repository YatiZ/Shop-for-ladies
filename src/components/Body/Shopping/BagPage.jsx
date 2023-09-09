import React, { useContext, useState } from "react";
import Panel from "../../../reusable/Panel";
import { ShopContext } from "../../../context/useShopContext";
import { IoClose } from "react-icons/io5";
import OrderSummary from "./OrderSummary";

const ShoppingBagPage = () => {
  const { cart,handleDecrement,handleClick,handleRemove } = useContext(ShopContext);
 
  
  
  return (
    <div>
      {cart.length ? (
        <>
          <h1 className="flex justify-center mt-5">Shopping Bag</h1>

          
          {cart.map((item) => (
           
            <Panel className="mt-5 mx-8" key={item.id}>
              <div className="flex justify-end p-3">
                <div>
                  <IoClose onClick={()=>handleRemove(item)}/>
                </div>
              </div>
              <hr />
              <div>
                <div className="flex">
                  <div className="md:px-20 md:w-96 w-40 p-3">
                    <img className="rounded-full" src={item.img} alt="item" />
                  </div>
                  <div className="">
                    <div className="">{item.name}</div>
                    <div className="">${item.price}</div>

                    <div>{item.qty} 
                    <button onClick={()=>handleClick(item)}>+</button>
                    <button onClick={()=>handleDecrement(item)}>-</button>
                    </div>
                  
                    <div>size</div>
                  </div>
                </div>
              </div>
            </Panel>
  
          ))}
         
         
          <div className="mt-5">
            <OrderSummary cart={cart}/>
          </div>
        </>
      ) : (
        <>Cart is empty</>
      )}
    </div>
  );
};

export default ShoppingBagPage;
