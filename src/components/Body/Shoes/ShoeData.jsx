import Panel from "../../../reusable/Panel";
import React, { useEffect, useState } from "react";

const ShoeData = ({ shoe }) => {
  const renderedItems = shoe.data.map((d, index) => {
    return (
      <Panel key={index} className='w-fit'>
        <p>{d.name}</p>
        <img className="w-60" src={d.img} alt="img" />
      </Panel>
    );
  });

  return <div className="grid grid-cols-3 gap-4 px-10">
    {renderedItems}</div>;
};

export default ShoeData;
