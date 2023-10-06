import React, { useContext, useState } from 'react';
import Input from '../../../reusable/Input';
import { clothes } from '../../Body/Clothes/clothData';
import { SearchContext } from '../../../context/useGlobalSearch';


const SearchItem = () => {
  const {handleSearchValue,globalSearch} = useContext(SearchContext);
    
  return (
    <div>
         <Input type="text" placeholder="search items..." onChange={(e)=>handleSearchValue(e.target.value)} value={globalSearch}/>
        
    </div>
  )
}

export default SearchItem