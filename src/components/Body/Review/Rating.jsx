import React from 'react';

import { useState } from 'react';
import {FaStar} from 'react-icons/fa';

const Rating = () => {
    const [rating, setRating] = useState(null);
    const [hover,setHover] = useState(null);

  return (
    <div className='flex justify-center'>
        {[...Array(5)].map((star,index) =>{
            const currentRate = index + 1;
            return(
                <label>
                   <input type='radio' className='hidden'
                    value={currentRate}
                    onClick={()=>setRating(currentRate)}
                   />
                   <FaStar className='cursor-pointer text-2xl'
                     color={currentRate <= (hover || rating)? "#ffc107": "e4e5e9"}
                     onMouseEnter={()=>setHover(currentRate)}
                     onMouseLeave={()=>setHover(null)}
                   />
                </label>
            )
        })}
    </div>
  )
}

export default Rating;