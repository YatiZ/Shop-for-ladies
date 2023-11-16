import React, { useState } from 'react'
import { MatchBottomData, MatchTopData } from './Match-Data'

const MatchingPage = () => {
  const [topImgSrc, setTopImgSrc] = useState('');
  const [ bottomImgSrc, setBottomImgSrc] = useState('');
  const changeDress = (layerId, dressImg)=>{
    if(layerId === 'top-image'){
        setTopImgSrc(dressImg)
    }else if(layerId === 'bottom-image'){
        setBottomImgSrc(dressImg)
    }
  }

  return (
    <div className='mt-24'>
      <h1 className='text-center'>Let's match the best fashion</h1>
      <div className='grid md:grid-cols-3 grid-cols-1 mt-3'>
      <div className='overflow-y-scroll h-64 mt-8'>
         {MatchTopData.map((d,index)=>(
            <div className='px-20' key={index}>
                <img className='w-full object-contain' src={d.img} alt="" onClick={()=>changeDress('top-image',d.img)}/>
            </div>
         ))}
      </div>
      <div className='show-fashion flex flex-col justify-center items-center py-0 border border-collapse'>
          <div className='w-32 absolute bottom-56'>
            <img src={topImgSrc} alt=""/>
          </div>
          <div className='w-32 top-14 relative'>
            <img src={bottomImgSrc} alt="" />
          </div>
      </div>

      <div className='overflow-y-scroll h-64 mt-8'>
         {MatchBottomData.map((b,index)=>(
            <div className='px-20' key={index}>
               <img src={b.img} alt="" onClick={()=>changeDress('bottom-image',b.img)} />
            </div>
         ))}
      </div>
      
      </div>
      
    </div>
  )
}

export default MatchingPage