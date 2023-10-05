import React from "react";
import Input from "../../../reusable/Input";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Questions } from "./questions";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const SupportCenter = () => {
  const [dropDown, setDropDown] = useState([]);

  const handleDrop = (index) => {
    const updateDrop = [...dropDown];
    updateDrop[index] = !updateDrop[index];
    setDropDown(updateDrop);
  };
  return (
    <div className="mx-14 mt-7">
      <div className="flex mr-44">
        <label className="w-2/4 text-4xl font-Serif font-bold">
          Help Center
        </label>

        <Input type="text" placeholder="What can we help with?" />
      </div>
      <div className="leading-9 underline underline-offset-8 mt-8 gap-2 p-4 grid grid-cols-4 text-sm backdrop-opacity-10 bg-white/40 backdrop-blur rounded-lg">
        <div className="">
          <Link>Placing & Canceling Orders</Link>
          <br></br>
          <Link>Shipping & Delivery</Link>
          <br></br>
          <Link>Returns, Exchanges & Refunds</Link>
          <br></br>
          <Link>Managing My Account</Link>
          <br></br>
        </div>
        <div>
          <Link>Staples Rewards Program</Link>
          <br></br>
          <Link>Education & Events</Link>
          <br></br>
          <Link>Customer Care & Feedback</Link>
          <br></br>
          <Link>Warranty & Recall Information</Link>
          <br></br>
        </div>
        <div>
          <Link>Most Popular Questions</Link>
          <br></br>
          <Link>Products & Services</Link>
          <br></br>
          <Link>Pricing & Promotions</Link>
          <br></br>
          <Link>Payment Information</Link>
          <br></br>
        </div>
        <div>
          <Link>Policies & Legal</Link>
          <br></br>
          <Link>Contact Us</Link>
          <br></br>
          <Link>Buy Online Pick Up In Store</Link>
          <br></br>
          <Link>Auto Restock</Link>
          <br></br>
        </div>
      </div>

      <div>
        <div className="flex flex-row mt-4">
          <span className="text-2xl font-bold">Most Popular Questions</span>
          <button className="bg-gray-500 text-white mx-3 p-2 text-sm">
            Expend Question
          </button>
        </div>

        {Questions.map((ques, index) => (
          <div className="mt-3" key={index}>
            <span className="">
              {ques.question}
              <KeyboardArrowDownIcon
                onClick={() => handleDrop(index)}
                className="cursor-pointer hover:text-blue-500"
              />
            </span>
            
            {dropDown[index] && (
              <div className="mb-4 text-blue-900">
                <span>{ques.answer}</span>
              </div>
            )}
            <hr/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupportCenter;
