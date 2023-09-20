import Modal from '../../../reusable/Modal';
import React, { useContext } from 'react';
import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { ShopContext } from '../../../context/useShopContext';
import { Button } from '@mui/material';


const EachItem = ({thing}) => {
    const {handleClick, handleDecrement, cart} = useContext(ShopContext);
    const [openImg, setOpenImg] = useState(false);

    const handleOpenImg=()=>{
        setOpenImg(!openImg)
       }
    
    // To show itemQty 
    const productInCart = cart.find((item)=>item.id=== thing.id);
    const quantityInCart = productInCart? productInCart.qty:0;
  return (
    <div>
        <div>
                    {/* <p className="text-center text-xs">{thing.name}</p> */}
                    <img src={thing.img} alt="thing" className="w-56 h-full" onClick={()=>handleOpenImg(thing)}/>
                    {openImg? <Modal>
                        <div className='flex justify-end px-4'>
                        <IoClose onClick={()=>handleOpenImg(thing)} />
                        </div>
                        <div className='px-0 md:px-10'>
                        <div className='flex md:flex-row flex-col'>
                        <div className='flex justify-center'>
                        <img src={thing.img} alt="thing" className="w-28 md:w-96 mt-6 md:m-0 md:h-36 " />
                        </div>
                        <div className='md:text-base text-xs md:mx-4'>
                            <h1 className='flex md:justify-start justify-center'>{thing.name}</h1>
                            <b>${thing.price}</b>
                            <p>{thing.description}</p>
                            <p>Qty: {quantityInCart} </p> 
                        </div>
                        </div>
                        <div className='flex justify-center'>
                            {/* To add items into cart */}
                            <button className='bg-slate-900 p-1 px-2 text-white w-full ' onClick={()=>handleClick(thing)}>Add To Cart</button> 
                            </div>
                    </div>
                    </Modal>:<p>
                   
                        </p>}
                </div>
    </div>
  )
}

export default EachItem