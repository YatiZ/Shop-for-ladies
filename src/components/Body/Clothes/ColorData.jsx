import React from "react";

const ColorData = ({ colors,sizes}) => {
  return (
    <div className="flex justify-start gap-x-10">
      <div className="flex gap-x-1">
      {Array.isArray(colors) && colors.map((color, index) => (
        <div key={index} className={color}></div>
      ))} 
      </div>
      <div className="flex justify-center">
      {Array.isArray(sizes) && sizes.map((size,index)=>(
        <div key={index} className="border bg-slate-300 rounded-full px-2 mx-1">{size}</div>
      ))}
      </div>
    </div>
  );
};

export default ColorData;
