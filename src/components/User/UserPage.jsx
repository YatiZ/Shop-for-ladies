import React, { useContext } from "react";
import { Routes } from "react-router";
import { Link } from "react-router-dom";
import Input from "../../reusable/Input";
import Button from "../../reusable/Button";
import { UserContext } from "../../context/useInfoUser";
import '../User/userProfile.css';

const UserPage = () => {
  const {userInfo} = useContext(UserContext);
  return (
    <div className="mx-10">
     <h1 className="text-center">Personal Details</h1>
     <form className="grid lg:grid-cols-2 gap-3 grid-cols-1">
       <div>
          <label className="custom-file-upload fas">
          <div className="img-wrap img-upload">
          <img className="" src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" alt="photoUpload"/> 
          </div>
          <input id="photo-upload" type="file" alt="profile" />
          </label>

          <br></br>
          <label>USERNAME</label>
          <Input value={userInfo.username}/>
          <label>EMAIL</label>
          <Input value={userInfo.email}/>
          
       </div>
       <div>
          
          <label>PHONE</label>
          <Input value={userInfo.phone_number}/>
          <label>CHOOSE COUNTRY</label>
          <Input/>
          <label>ADDRESS</label>
          <Input />
       </div>
       <div className="flex justify-center">
       <Button className="">Save Changes</Button>
       </div>
      
     </form>
    </div>
  );
};

export default UserPage;
