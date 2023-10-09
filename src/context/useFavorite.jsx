import React, { createContext, useState } from 'react';

const FavoriteContext = createContext();

const FavoriteProvider = ({children}) => {
  const [favorites, setFavorites] = useState([]);
  const addToFav = (itemId)=>{
     setFavorites((prevFav)=>[...prevFav,itemId]);
  }
  console.log(favorites)
  const removeFav = (itemId)=>{
    // console.log(itemId)
    setFavorites((prevFav)=>prevFav.filter((favItem)=>favItem !== itemId))
    
  }
  return (
    <FavoriteContext.Provider value={{removeFav,addToFav,favorites}}>
        {children}
    </FavoriteContext.Provider>
  )
}

export {FavoriteContext, FavoriteProvider}