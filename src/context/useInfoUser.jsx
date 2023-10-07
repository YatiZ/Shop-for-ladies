import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({children}) => {
  const [userInfo, setUserInfo] = useState(null);
  
  useEffect(()=>{
    axios.get("http://127.0.0.1:8000/accounts/")
    .then((response)=>setUserInfo(response.data))
    .catch((error)=>{
        console.log(error)
        setUserInfo(null)
    })
    
  },[]);


  return (
    <UserContext.Provider value={userInfo}>
        {children}
    </UserContext.Provider>
  )
}

export {UserProvider,UserContext}