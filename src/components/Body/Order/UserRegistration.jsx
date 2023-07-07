import React from 'react'

const UserRegistration = () => {
  return (
    <div>UserRegistration
        <div className="md:px-12 px-3 py-2 flex flex-col gap-y-2">
          <label>Address</label>
          <textarea placeholder="Enter your address"
             className="backdrop-opacity-10 bg-white/40 backdrop-blur rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 md:p-2 tracking-wider shadow-md"
          />
        </div>
    </div>
  )
}

export default UserRegistration