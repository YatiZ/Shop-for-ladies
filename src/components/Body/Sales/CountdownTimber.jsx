import React, { useEffect } from 'react';
import { useState } from 'react';
import Panel from '../../../reusable/Panel';

const CountdownTimber = ({promotionEndTime}) => {
    // const promotionEndTime = '2023-10-11T23:59:59'
    const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());

    useEffect(()=>{
        const movingTime = setInterval(()=>{
            setTimeRemaining(getTimeRemaining())
        },1000);

        return ()=> clearInterval(movingTime)
    })
    
    
    function getTimeRemaining(){
     const currentTime = new Date().getTime()
     const expiredTime = new Date(promotionEndTime).getTime();
     if(currentTime < expiredTime){
        const remainingTime = expiredTime - currentTime;

         const days = Math.floor(remainingTime /(1000*60*60*24));
         const hours = Math.floor((remainingTime %(1000*60*60*24))/(1000*60*60));
         const minutes = Math.floor((remainingTime % (1000*60*60))/(1000*60));
         const seconds = Math.floor((remainingTime % (1000*60))/1000);
         return{
            days,hours,minutes,seconds
        }
     }else{
        return {days:0, hours:0, minutes: 0,seconds:0}
     }
     
     
  }
  return (
    <div className='grid grid-cols-4 lg:gap-2 gap-2 pt-6 lg:pt-0 bg-fixed lg:font-Serif font-bold'>
        
       <Panel className='lg:py-10 lg:p-6 lg:w-28 text-xs'>
       <b className='lg:text-5xl'>{timeRemaining.days < 10? '0'+timeRemaining.days : timeRemaining.days}</b>
       <p>Days</p>
       </Panel>
       <Panel className=' lg:py-10 lg:p-6 lg:w-28 text-xs'>
       <b className='lg:text-5xl'>{timeRemaining.hours < 10? '0'+timeRemaining.hours: timeRemaining.hours}</b>
       <p>Hrs</p>
       </Panel>
       <Panel className=' lg:py-10 lg:p-7 lg:w-28 text-xs'>
       <b className='lg:text-5xl'>{timeRemaining.minutes < 10? '0'+timeRemaining.minutes: timeRemaining.minutes}</b>
       <p>Min</p>
       </Panel>
       <Panel className=' lg:py-10 lg:p-6 lg:w-28 text-xs'>
       <b className='lg:text-5xl'>{timeRemaining.seconds < 10? '0'+timeRemaining.seconds: timeRemaining.seconds}</b>
       <p>Sec</p>
       </Panel>
    </div>
  )
}

export default CountdownTimber