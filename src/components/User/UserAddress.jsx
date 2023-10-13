import { Select } from '@mui/material';
import React, { useState } from 'react'

const UserAddress = () => {
    const [myData, setMyData] = useState([]);
   
  return (
    <Select data={myData} label="Countries"/>
  )
}

export default UserAddress