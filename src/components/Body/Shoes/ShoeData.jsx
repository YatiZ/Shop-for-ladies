import React, { useEffect, useState } from 'react';

const ShoeData =  ({shoe}) => {
    
      
  return (
    <div>
            {shoe.data.map((d)=>(
                <div>
                    <p>{d.name}</p>
                    <img className='w-60' src={d.img} alt='img'/>
                </div>
            ))}
    </div>
  )
}

export default ShoeData


