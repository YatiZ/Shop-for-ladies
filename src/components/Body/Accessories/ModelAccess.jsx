import React from 'react';
import Modal from '../../../reusable/Modal';
import { IoClose } from 'react-icons/io5';


const ModelAccess = ({quantityInCart,handleOpenImg,thing,handleClick}) => {
  return (
    <div>
<Modal>
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
                    </Modal>
    </div>
  )
}

export default ModelAccess