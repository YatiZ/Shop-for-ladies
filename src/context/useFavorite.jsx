import React, { createContext, useState } from 'react';

const FavoriteContext = createContext();

const FavoriteProvider = ({children}) => {
  const [favorites, setFavorites] = useState([]);
  const addToFav = (itemId)=>{
     setFavorites((prevFav)=>[...prevFav,itemId]);
  }
  const removeFav = (itemId)=>{
    setFavorites((prevFav)=>prevFav.filter((favItem)=>favItem.id!== itemId))
  }
  return (
    <FavoriteContext.Provider value={{removeFav,addToFav,favorites}}>
        {children}
    </FavoriteContext.Provider>
  )
}

export {FavoriteContext, FavoriteProvider}