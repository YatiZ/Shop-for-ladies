import React from "react";
import Form from "../../../reusable/Form";
import Input from "../../../reusable/Input";
import { Radio, RadioGroup } from "@mui/material";
import Button from "../../../reusable/Button";
import { useState, useEffect } from "react";
import axios from "axios";


const ResgisterPage = () => {
  const [data, setData] = useState({
    username:'',
    phone_number:'',
    email:'',
    gender:'',
    birth_date:'',
    password:'',
  });
  const handleClick=()=>{
    alert('You added')
  }
  const handleInput = (event)=>{
    setData({...data,[event.target.name]:event.target.value})
   
  }
  
  function handleSubmit(event){
    event.preventDefault()
    axios.post('http://127.0.0.1:8000/register/',{data})
    .then(response=>console.log(response.data))
        

    .catch(err=>console.log(err))
    
  };
  
  return (
    <div className="flex justify-center md:px-24 px-8 md:m-10 mt-10 text-xs md:text-base">
      <Form className="w-screen  gap-y-4 flex-col flex" onSubmit={handleSubmit}>
        <h1 className="mt-10 flex justify-center font-bold text-3xl">
          Registration Form
        </h1>
        <div className="h-1 bg-yellow-400"></div>
        <div className="md:px-12 px-3 py-2 flex flex-col gap-y-2">
          <label className="">Full Name</label>
          <Input className="" type="text" placeholder="Enter your name" name="username" onChange={handleInput}/>
        </div>
        <div className="md:px-12 px-3 flex flex-col gap-y-2">
          <label className="">Email Address</label>
          <Input className="" type="text" placeholder="XXX@email.com" name="email" onChange={handleInput}/>
        </div>
        <div className="flex flex-row md:px-12 px-3 gap-x-5">
          <div className=" w-full flex flex-col gap-y-2">
            <label className="">Phone Number</label>
            <Input className="" type="tel" placeholder="XXX XXX XXX" name="phone_number" onChange={handleInput}/>
          </div>
          <div className="w-full flex flex-col gap-y-2">
            <label className="">Birth Date</label>
            <Input className="" type="date" placeholder="Enter email address" name="birth_date" onChange={handleInput}/>
          </div>
        </div>
        <div className="flex flex-row md:px-12 px-3 gap-x-5">
          <div className=" w-full flex flex-col gap-y-2">
            <label className="">Password</label>
            <Input className="" type="password" placeholder="Enter Password" name="password" onChange={handleInput}/>
          </div>
          <div className="w-full flex flex-col gap-y-2">
            <label className="">Confirm Password</label>
            <Input className="" type="password" placeholder="Enter Confirm Password" name="password2"/>
          </div>
        </div>
        <div className="w-full flex flex-col gap-y-2">
          <h1 className="md:px-12 px-3">Gender</h1>
         
            <RadioGroup
              defaultValue="female"
              name1="controlled-radio-buttons-group"
              name="gender"
              onChange={handleInput}
              sx={{ display: "inline",ml:5}}
              
            >
              <Radio value="female" label="Female"/>
              <label>Female</label>
              <Radio value="male" label="Male" />
              <label>Male</label>
              <Radio value="other" label="Other" />
              <label>Other</label>
            </RadioGroup>
        </div>
        <div className="grid place-items-end md:px-12 px-3 pb-10">
        <button onClick={handleClick} type="submit" className="w-fit bg-yellow-200 rounded-full px-3 py-2 hover:bg-pink-300">Create Account</button>
        </div>
      </Form>
      {/* <div>
        <h1>{data.username}</h1>
        <p>{data.email} / {data.phone_number} /{data.gender}</p>
      </div> */}
    </div>
  );
};

export default ResgisterPage;
