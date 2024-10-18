import React, { useContext, useEffect, useRef, useState } from "react";
import Input from "../../reusable/Input";
import Button from "../../reusable/Button";
import { UserContext } from "../../context/useInfoUser";
import "../User/userProfile.css";
import UserAddress from "./UserAddress";
import axiosInstance from "../../utils/axiosinstance";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import axios from "axios";

const UserPage = () => {
  const { userInfo } = useContext(UserContext);
  const navigate = useNavigate();
  const photoUpload = useRef(null);
  const [changeProfile, setChangeProfile] = useState();
  const [photo, setPhoto] = useState(null);
  const [previewPic, setPreviewPic] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));
  console.log("User from profile: ", user);
  // const removeUser = localStorage.removeItem("user")
  // console.log(removeUser)
  useEffect(() => {
    if (photo) {
      console.log(photo);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewPic(reader.result);
      };
      reader.readAsDataURL(photo);
    }
  }, [photo]);
  console.log(typeof previewPic);
  const picsUpload = (e) => {
    e.preventDefault();

    const file = e.target.files[0];
    setPhoto(file);

    console.log(file);
    console.log(photo);
  };

  const handleUploadPics = (event) => {
    console.log("hello weorld");
    console.log(event);
    picsUpload(event);
  };

  // for logout fun
  const refresh = JSON.parse(localStorage.getItem('refresh'))
  
  const handleLogout = async() => {
     const res = await axiosInstance.post('/auth/logout/',{'refresh_token':refresh})
     console.log('Res from logout',res)
     if(res === 200){
       localStorage.removeItem('access')
       localStorage.removeItem('refresh')
       localStorage.removeItem('user')
       navigate('/login')
       toast('Logout successful!')
     }
  };
  
  // const handleLogout = ()=>{
  //   localStorage.removeItem("user")
  //   navigate("/login")
  // }
  return (
    <div className="mx-10 font-Serif">
      <h1 className="text-center mt-4 font-Serif text-2xl mb-4">
        {user && user.names}'s Personal Details
      </h1>

      <form>
        <div className="flex justify-center">
          {/* <label className="custom-file-upload fas bg-black">
            {previewPic?<div className="img-wrap img-upload justify-center flex w-full">
              
              <img
                className="w-28 h-28 object-contain"
                src={previewPic}
                alt="photoUpload"
               
               
              />

            </div>: <div className="img-wrap img-upload justify-center flex w-full">
              
              <img
                className="w-28 h-28"
                src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" 
                alt="photoUpload"
               
               
              />

            </div>}
            <input  onChange={handleUploadPics} ref={photoUpload} type="file" alt="profile" />
            
        </label> */}
        </div>

        <div className="grid lg:grid-cols-2 gap-3 grid-cols-1 text-sm">
          <div>
            <label>USERNAME</label>
            <Input value={userInfo.names} />
            <label>EMAIL</label>
            <Input value={userInfo.email} />
            <label>PHONE</label>
            <Input value={userInfo.phone_number} />
          </div>

          <div>
            <label>CHOOSE COUNTRY</label>
            {/* <Input /> */}
            <UserAddress className="backdrop-opacity-10 bg-white/40 backdrop-blur rounded-lg focus:outline-pink-500" />
            <label>ADDRESS</label>
            <textarea className="py-8 backdrop-opacity-10 bg-white/40 backdrop-blur rounded-lg focus:outline-pink-500 w-full md:py-8 lg:py-6 tracking-wider shadow-md" />
          </div>
        </div>

        <div className="flex justify-end">
          <Button className="mt-5 rounded-md bg-yellow-200">
            Save Changes
          </Button>
        </div>
      </form>

      <div className="flex justify-end mt-3">
        <Button onClick={handleLogout} className="rounded-md bg-red-500 mx-5">
          Logout
        </Button>
      </div>
    </div>
  );
};

export default UserPage;
