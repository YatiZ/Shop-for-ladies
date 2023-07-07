import React from "react";
import Rating from "./Rating";
import Panel from "../../../reusable/Panel";

const DetailReview = () => {
  return (
    <div className="grid grid-cols-3 m-3 gap-5 group">
    <Panel className="w-full group-hover:blur-md hover:!blur-none">
      <div className="flex justify-center items-center flex-col w-full tracking-wide">
        <h1 className="text-3xl font-medium">Customers say</h1>
        <Rating />
      </div>
    </Panel>
    <Panel className="w-full group-hover:blur-md hover:!blur-none">
      <div className="flex justify-center items-center flex-col w-full tracking-wide">
        <h1 className="text-3xl font-medium">Customers say</h1>
        <Rating />
      </div>
    </Panel>
    <Panel className="w-full group-hover:blur-md hover:!blur-none">
      <div className="flex justify-center items-center flex-col w-full tracking-wide">
        <h1 className="text-3xl font-medium">Customers say</h1>
        <Rating />
      </div>
    </Panel>
    </div>
  );
};

export default DetailReview;
