
import React, { useEffect, useState } from 'react'

const CountUpNumber = ({duration, endValue}) => {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    let startTime;
    let animationFrameId;
    const updateCount = (timeStamp)=>{
      if(!startTime) startTime = timeStamp;
      const progress= timeStamp-startTime;

      if(progress < duration){
        setCount(Math.min(endValue, (progress/duration) * endValue));
        animationFrameId = requestAnimationFrame(updateCount);
      }else{
        setCount(endValue);
      }
    };

    animationFrameId = requestAnimationFrame(updateCount);

    return()=> cancelAnimationFrame(animationFrameId);
  },[endValue, duration])

  return (
    <p className='font-medium text-lg lg:text-lg'>
      {Math.round(count)}+
    </p>
  )
}

export default CountUpNumber