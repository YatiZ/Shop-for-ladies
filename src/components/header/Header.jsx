import React from "react";
// import "../header/Header.css";
import Navigation from "./Navigation";
import { useState } from "react";
import {FcMenu} from "react-icons/fc";
import {IoMdClose} from "react-icons/io";
import { Link } from "react-router-dom";
import logoImg from "../Images/shopping-low-resolution-color-logo-removebg-preview.png"


function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = ()=>{
    setOpenMenu(!openMenu);
  }
  
  return (
    <div className="w-full top-0 left-0 h-14">
      <div className="md:flex bg-yellow-200 md:px-8 md:text-l text-sm px-7 md:justify-around">
      <div className="font-bold md:text-xl cursor-pointer flex items-center md:mt-0 mt-4">
        <Link to="/" className="App-logo-spin w-24">
          <img src={logoImg} alt="logo" className="w-full h-full"/>
        </Link>
      </div>
      <div className="pt-5 absolute right-8 top-5 text-xl cursor-pointer md:hidden" onClick={handleOpenMenu}>
        {openMenu? <IoMdClose/> :<FcMenu/> }
      </div>
      
      <div className={`z-20 block absolute bg-yellow-200 w-full md:w-auto md:pl-0 pl-9 left-0 md:ml-10 xl:justify-items-end xl:flex md:static transition-all duration-500 ease-in pt-2 ${openMenu? 'top-19':'top-[-420px]'}`}>
      <Navigation openMenu={openMenu}/>
      </div>
    </div>
    </div>
    
  );
}
export default Header;
