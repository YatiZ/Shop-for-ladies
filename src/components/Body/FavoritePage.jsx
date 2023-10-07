import React, { useContext } from 'react'
import { FavoriteContext } from '../../context/useFavorite'

const FavoritePage = () => {
  
  const {favorites} = useContext(FavoriteContext);

  return (
    <div>FavoritePage
        {favorites.map((fav)=>
        (<p>{fav.name}</p>)
            
        )}
    </div>
  )
}

export default FavoritePage