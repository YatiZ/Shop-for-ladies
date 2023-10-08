import React, { useContext } from 'react';
import Modal from '../../reusable/Modal';
import { ShopContext } from '../../context/useShopContext';
import { IoClose } from 'react-icons/io5';

const ItemsDetails = ({fav,handleOpenModal}) => {
  const {cart, handleClick} = useContext(ShopContext);
  
  const productInCart = cart.find((item)=> item.id === fav.id);
  const quantityInCart = productInCart ? productInCart.qty :0;

  return (
    <Modal>
        <div className="flex justify-end px-4">
          <IoClose onClick={() => handleOpenModal(fav.id)} />
        </div>
        <div className="px-0 mx-5">
          <div className="flex lg:flex-row flex-col">
            <div className="w-32 h-32 ">
              <img
                src={fav.img}
                alt="thing"
                className="w-full h-full object-cover "
              />
            </div>
            <div className="md:text-base text-xs px-5">
              <h1 className="flex md:justify-start justify-center">
                {fav.name}
              </h1>
              <b>${fav.price}</b>
              
              <p>Qty: {quantityInCart} </p>
            </div>
            <div className='text-xs w-80 overflow-y-auto max-h-[100px]'>{fav.description}</div>
          </div>
          <div className="flex justify-center">
            {/* To add items into cart */}
            <button
              className="bg-slate-900 mt-3 p-1 px-2 text-white w-full "
              onClick={() => handleClick(fav)}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </Modal>
  )
}

export default ItemsDetails