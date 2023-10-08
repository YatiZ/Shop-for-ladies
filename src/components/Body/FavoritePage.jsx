import React, { useContext, useState } from 'react'
import { FavoriteContext } from '../../context/useFavorite'
import { Link } from 'react-router-dom';
import Modal from '../../reusable/Modal';
import ItemsDetails from './ItemsDetails';

const FavoritePage = () => {
  
  const {favorites} = useContext(FavoriteContext);
  const [showDetail, setShowDetail] = useState({});
  const handleClick =(favId)=>{
     
     setShowDetail((prevOpenImg)=>(
        {...prevOpenImg,
        [favId]:!prevOpenImg[favId]
        }
     ))
  }
 

  return (
    <div className=' mt-6 mx-3 '>
        <h1 className='text-center font-Serif text-2xl underline underline-offset-8'>YOUR FAVORITE ITEMS</h1>
    <div className='my-5 grid grid-cols-3 pl-0 lg:grid-cols-4 items-center lg:gap-0 gap-5 lg:px-32 lg:ml-6 lg:text-sm text-xs'>
    {favorites.map((fav,index)=>
        (<div key={index} className=' border lg:h-60 h-44 py-8 flex flex-col items-center'>
            <div className='w-24 h-24 lg:w-36 lg:h-36'>
            
            <img onClick={()=>handleClick(fav.id)} src={fav.img} alt='favImg' className='bg-white w-full h-full object-cover rounded-full lg:rounded-none'/>
           
            {showDetail[fav.id] && <ItemsDetails fav={fav} handleOpenModal={handleClick}/>}
            </div>
            <div className='mt-1 text-center'>
            <p className='overflow-hidden'>{fav.name}</p>
            </div>
            
            </div>)
            
        )}
    </div>
        
    </div>
  )
}

export default FavoritePage