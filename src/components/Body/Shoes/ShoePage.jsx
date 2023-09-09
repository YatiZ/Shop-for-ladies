import React from 'react'
import ShoeData from './ShoeData'
import { useLocation } from 'react-router'
import { Shoes } from './Shoes';

const ShoePage = () => {
  
  const {search} = useLocation();
  const query = new URLSearchParams(search);
   
  const filteredShoes = Shoes.filter((shoe)=>shoe.type === query.get("shoes"));
  const newShoes = (query.get("shoes")?filteredShoes: Shoes);
  const shoeData = newShoes.map((shoe,index)=>(
    <div>
        <h1>{shoe.type}</h1>
        <ShoeData shoe={shoe}/>
    </div>
  ))

  return (

    <div>ShoePage
        {shoeData}
    </div>
  )
}

export default ShoePage