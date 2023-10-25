import React from 'react'
import ShoeData from './ShoeData'
import { useLocation } from 'react-router'
import { Shoes } from './Shoes';
import ShoeSliderPage from './ShoeSliderPage';

const ShoePage = () => {
  
  const {search} = useLocation();
  const query = new URLSearchParams(search);
   
  const filteredShoes = Shoes.filter((shoe)=>shoe.type === query.get("shoes"));
  const newShoes = (query.get("shoes")?filteredShoes: Shoes);
  const shoeData = newShoes.map((shoe,index)=>(
    <div key={index}>
        <h1 className='font-bold text-2xl'>{shoe.type}</h1>
        <ShoeData shoe={shoe}/>
    </div>
  ))

  return (

    <div className='mt-4'>
      <div>
        <ShoeSliderPage/>
      </div>
        {shoeData}
    </div>
  )
}

export default ShoePage