import React from "react";
// import "../header/Header.css";
import Navigation from "./Navigation";
import { useState } from "react";


function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = ()=>{
    setOpenMenu(!openMenu);
  }
  
  return (
    <div className="flex ml-0 justify-between bg-yellow-200 h-14 text-xs md:text-sm sticky border-b-red-600 border">
      <div className=" py-4">
        <h1>LOGO</h1>
      </div>
      
      <nav className="">
          <Navigation />
        </nav>
      <div className="md:hidden">
      <button  onClick={handleOpenMenu}>Menu</button>
      {openMenu && <div>Hello</div>}
      </div>
      
    </div>
  );
}
export default Header;
