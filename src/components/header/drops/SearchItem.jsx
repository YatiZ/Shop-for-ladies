import React, { useContext, useState } from 'react';
import Input from '../../../reusable/Input';
import { clothes } from '../../Body/Clothes/clothData';
import { SearchContext } from '../../../context/useGlobalSearch';


const SearchItem = () => {
  const {handleSearchValue,globalSearch} = useContext(SearchContext);
    
  return (
    <div className="mx-28 mt-20">
      <h1 className="mb-10 font-bold">You can search anything you want!</h1>
         <Input className='focus:outline-none' type="search" placeholder="search items..." onChange={(e)=>handleSearchValue(e.target.value)} value={globalSearch}/>
        
    </div>
  )
}

export default SearchItem