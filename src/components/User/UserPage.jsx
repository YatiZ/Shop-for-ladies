import React, { useContext, useEffect, useRef, useState } from "react";
import { Routes } from "react-router";
import { Link } from "react-router-dom";
import Input from "../../reusable/Input";
import Button from "../../reusable/Button";
import { UserContext } from "../../context/useInfoUser";
import "../User/userProfile.css";
import UserAddress from "./UserAddress";

const UserPage = () => {
  const { userInfo } = useContext(UserContext);
  const photoUpload = useRef(null);
  const [changeProfile, setChangeProfile] = useState();
  const [photo, setPhoto] = useState(null);
  const [previewPic, setPreviewPic] = useState(null);
  
  useEffect(()=>{
    if(photo){
      console.log(photo)
      const reader = new FileReader();
      reader.onloadend = () => {
       
        setPreviewPic(reader.result)
      }
      reader.readAsDataURL(photo);
    }
  },[photo])
console.log(typeof previewPic)
  const picsUpload = e =>{
    e.preventDefault();
    
    const file = e.target.files[0];
    setPhoto(file);
    
    
   
    console.log(file)
    console.log(photo)
  }

  const handleUploadPics = (event)=>{
    console.log(event)
      picsUpload(event)
    
      
  }
  
  return (
    <div className="mx-10">
      <h1 className="text-center mt-4 font-Serif text-2xl mb-4">Personal Details</h1>
      <form >
        <div className="flex justify-center">
        <label className="custom-file-upload fas  bg-black">
            {previewPic?<div className="img-wrap img-upload justify-center flex w-full">
              
              <img
                className=""
                src={previewPic}
                alt="photoUpload"
               
               
              />

            </div>: <div className="img-wrap img-upload justify-center flex w-full">
              
              <img
                className=""
                src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" 
                alt="photoUpload"
               
               
              />

            </div>}
            <input  onChange={handleUploadPics} ref={photoUpload} type="file" alt="profile" />
            
          </label>
           </div>
           
        <div className="grid lg:grid-cols-2 gap-3 grid-cols-1 text-sm">
          
         <div>
         <label>USERNAME</label>
          <Input value={userInfo.username} />
          <label>EMAIL</label>
          <Input value={userInfo.email} />
          <label>PHONE</label>
          <Input value={userInfo.phone_number} />
         </div>
         <div>
          
          
          <label>CHOOSE COUNTRY</label>
          {/* <Input /> */}
          <UserAddress/>
          <label>ADDRESS</label>
          <Input />
          <div className="flex justify-center">
          <Button className="mt-5 rounded-md bg-yellow-200">Save Changes</Button>
        </div>
          
        </div>
        
        </div>
        
      </form>
    </div>
  );
};

export default UserPage;
