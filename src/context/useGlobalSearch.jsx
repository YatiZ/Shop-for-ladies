import { createContext, useState } from "react";

const SearchContext = createContext();

const SearchProvider =({children})=>{
  const [globalSearch, setGlobalSearch] = useState('');
   
  const handleSearchValue =(value)=>{
    setGlobalSearch(value)
  }

  return(
    <SearchContext.Provider value={{handleSearchValue,globalSearch}}>
        {children}
    </SearchContext.Provider>
  )

}

export {SearchProvider, SearchContext}