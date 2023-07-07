import React from "react";
// import "../header/Header.css";
import Navigation from "./Navigation";
import { useState } from "react";
import {FcMenu} from "react-icons/fc";
import {IoMdClose} from "react-icons/io";


function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = ()=>{
    setOpenMenu(!openMenu);
  }
  
  return (
    <div className="w-full top-0 left-0 h-14 ">
      <div className="md:flex bg-yellow-200 py-2 md:px-8 md:text-l text-sm px-7 md:justify-around">
      <div className="font-bold md:text-xl cursor-pointer flex items-center md:mt-0 mt-4">
        <a href="/">LOGO</a>
      </div>
      <div className="absolute right-8 top-5 text-xl cursor-pointer md:hidden" onClick={handleOpenMenu}>
        {openMenu? <IoMdClose/> :<FcMenu/> }
      </div>
      
      <div className={`z-20 block absolute bg-yellow-200 w-full md:w-auto md:pl-0 pl-9 left-0 md:ml-10 xl:justify-items-end xl:flex md:static transition-all duration-500 ease-in ${openMenu? 'top-19':'top-[-420px]'}`}>
      <Navigation openMenu={openMenu}/>
      </div>
    </div>
    </div>
    
  );
}
export default Header;
