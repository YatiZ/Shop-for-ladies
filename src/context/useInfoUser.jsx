import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({children}) => {
  const [userInfo, setUserInfo] = useState(()=>{
    const user = JSON.parse(localStorage.getItem('user'))
    return user;
  });


  console.log(userInfo)


  return (
    <UserContext.Provider value={{userInfo, setUserInfo}}>
        {children}
    </UserContext.Provider>
  )
}

export {UserProvider,UserContext}