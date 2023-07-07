import React from 'react'
import { useState, useEffect } from 'react'

const User = () => {
  const [users, setUser] = useState([])

  useEffect(()=>{
    getUsers()
  },[])

  const getUsers = async() =>{
    try{
        const response = await fetch('http://127.0.0.1:8000/accounts/');
        if(!response.ok){
            throw new Error('Failed to fetch user data');
        }
    const data = await response.json()
    console.log(data)
    setUser(data);
    } catch(error){
        console.log(error)
    }
  }
  return (
    <div>User List 
        
        {users.map((user)=>(
            <div key={user.id}>
            <h1>{user.username}</h1>
            <p>{user.gender}</p>
            </div>
        ))}
    </div>
  )
}

export default User