import React from 'react';
import { Link } from 'react-router-dom';
export const drops = [
    {label:"Account Info",element:"<UserAccount/>"},
    {label:"Forgot Password",element:"<UserAccount/>"},
    {label:"Cart History",element:"<UserAccount/>"},
]



const UserDrops = () => {
  const dropData = drops.map((d,index)=>(
    <Link>
       <p className="py-1 px-3 hover:bg-yellow-300 hover:rounded-md m-0 hover:text-pink-600">{d.label}</p>
    </Link>
  ))
  return (
    <div className="lg:ml-0 ml-0 lg:mt-1 lg:fixed mt-0 bg-pink-300 rounded-md mx-10">
    {dropData}
</div>
  )
}

export default UserDrops