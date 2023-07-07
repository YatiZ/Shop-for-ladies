import React from 'react';
import DetailReview from './DetailReview';
import Button from '../../../reusable/Button';
import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import Rating from './Rating';

const ReviewPage = () => {
  const [openPage, setOpenPage] = useState(false)
  const handleClick = ()=>{
    setOpenPage(!openPage)
  }
  return (
    
    // <Routes>
    //   <Route path="help-center?issues=Reviews" element={<div className="flex justify-center items-center flex-col">
    //     <Button onClick={handleClick}>Open Review Page</Button>
    //     {openPage && <DetailReview />} <h1>Hello</h1>
    //   </div>} />
    // </Routes>
    <div>
      <DetailReview/>
    </div>
  
  )
}

export default ReviewPage