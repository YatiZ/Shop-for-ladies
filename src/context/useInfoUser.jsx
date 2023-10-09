import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({children}) => {
  const [userInfo, setUserInfo] = useState(null);
  



  return (
    <UserContext.Provider value={{userInfo, setUserInfo}}>
        {children}
    </UserContext.Provider>
  )
}

export {UserProvider,UserContext}