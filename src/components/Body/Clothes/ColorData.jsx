import React, { useState } from "react";

const ColorData = ({ colors, sizes }) => {
  const [pickedColor, setPickedColor] = useState("bg-blue-500");
  const handleSelectedColor = (color) => {
    setPickedColor(color);
  };
  console.log(pickedColor);
  return (
    <div className="flex justify-start gap-x-10">
      <div className="flex gap-x-1">
        {Array.isArray(colors) &&
          colors.map((color, index) => (
            <button
              key={index}
              className={`${color} w-6 h-6 rounded-full`}
              onClick={() => handleSelectedColor(color)}
            ></button>
          ))}
      </div>
      <div className="flex justify-center">
        {Array.isArray(sizes) &&
          sizes.map((size, index) => (
            <div
              key={index}
              className="border bg-slate-300 rounded-full px-2 mx-1"
            >
              {size}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ColorData;
