import React from 'react'
import { motion } from 'framer-motion'
import { MatchTopData, MatchBottomData } from './Match-Data'


const MatchPage = () => {
  return (
    <div className='m-10'>
        <h1 className='text-center mb-5'>MatchPage</h1>
        <div className="grid grid-cols-6">
            <div className="col-span-2">
               <div className="">
               {MatchTopData.map((d,index)=>(
            <div className='px-20' key={index}>
                <motion.img drag className='w-full object-contain' src={d.img} alt=""/> 
            </div>
         ))}

{MatchBottomData.map((b,index)=>(
            <div className='px-20 w-[300px]' key={index}>
               <motion.img drag className='w-full object-contain' src={b.img} alt="" />
            </div>
         ))}
               </div>
            </div>

            <div className="col-span-4 flex items-center justify-center">
               <div className="w-96">
                <img className='w-full object-contain' src="src/components/Body/Matching/images/body.png" alt="" />
               </div>
            </div>
        </div>
    </div>
  )
}

export default MatchPage