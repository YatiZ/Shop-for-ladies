import React, { useContext, useState } from 'react';
import Input from '../../../reusable/Input';
import { clothes } from '../../Body/Clothes/clothData';
import { SearchContext } from '../../../context/useGlobalSearch';


const SearchItem = () => {
  const {handleSearchValue,globalSearch} = useContext(SearchContext);
    
  return (
    <div className="text-center mt-20">
      <h1 className="mb-10 font-bold">You can search anything you want!</h1>
      <div className='lg:mx-60 md:mx-60 mx-20'>
      <Input className='focus:outline-rose-500 focus-within:' type="search" placeholder="search items..." onChange={(e)=>handleSearchValue(e.target.value)} value={globalSearch}/>
      </div>
         
        
    </div>
  )
}

export default SearchItem