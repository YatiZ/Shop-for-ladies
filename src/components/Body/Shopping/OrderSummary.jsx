import React, { useEffect, useState } from "react";
import Panel from "../../../reusable/Panel";
import helpImg from "../Shopping/cloud-black-clouds-message.png";
import { Link } from "react-router-dom";
import LockIcon from "@mui/icons-material/Lock";
import PaymentsIcon from "@mui/icons-material/Payments";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OrderSummary = ({ cart }) => {
  const [codeValue, setCodeValue] = useState("");
  const [discount, setDiscount] = useState(0);
  const [codeInvalidMessage, setCodeInvalidMessage] = useState("");

//for total shopping cost
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.qty, 0);
  };

//for tax-7%
  const calculateTax = () => {
    const total = calculateTotal();
    return total * 0.07;
  };

//for estimatedTotalPrice including (shopping cost+tax) if discount, reduce price based on the percentage 
  const estimatedTotal = () => {
    const total = calculateTotal();
    const discountAmount = total * discount;
    const tax = calculateTax();
    return total - discountAmount + tax;

  };

  function handleApplyPromoCode(event) {
    event.preventDefault();
    axios
      .post("http://127.0.0.1:8000/promo_code/", { code: codeValue })
      .then((response) => {
        if (response.status === 200) {
          const data = response.data;
          if (data.valid) {
            const discountAmount = data.discount_amount;
            
            setDiscount(discountAmount);
            setCodeInvalidMessage(null);
            setCodeValue('')
          } else {
            const message = data.message;
            setDiscount(null);
            setCodeInvalidMessage(message);
            toast.error(message,{
              position:'bottom-right',
              autoClose:2000
            });
            setCodeValue('')
          }
        } else {
          console.log("Invalid response status", response.status);
        }
      })

      .catch((err) => console.log(err));
  }

  return (
    <Panel className="p-4 tracking-wide fixed">
      
      <h1 className="text-center font-Serif font-bold text-xl">
        Order Summary
      </h1>
      <hr />
      <div className="px-2 mt-3">
        <label for="code">ENTER PROMO CODE</label>

        <div className="flex">
          <input
            type="text"
            placeholder="Promo Code"
            className="p-1 w-full"
            value={codeValue}
            onChange={(e) => setCodeValue(e.target.value.toLocaleUpperCase())}
          />
          <button
            className="bg-black text-white p-1 px-7 w-44"
            type="button"
            onClick={handleApplyPromoCode}
          >
            Submit
          </button>
        </div>
      </div>
      
      {codeInvalidMessage && <ToastContainer />}
      <div className="grid grid-cols-2 mt-7 gap-y-2 px-2">
        <div>Shopping cost</div>
        <div className="text-end">${calculateTotal().toFixed(2)}</div>
        <div>Discount</div>
        <div className="text-end">{(discount*100)}%</div>
        <div>Tax</div>
        <div className="text-end">${calculateTax().toFixed(2)}</div>
        <div className="text-lg font-bold">Estimated Total</div>
        <div className="text-lg font-bold text-end">
          ${estimatedTotal().toFixed(2)}
        </div>
      </div>
      <div className="mt-4 px-2">
        <p className="text-sm">
          or 4 interest-free payments of $10.00 with
          <button className="border rounded-xl font-bold px-2 py-1 bg-teal-200 mx-2">
            <PaymentsIcon />
            otherpay
          </button>
        </p>
      </div>

      <div className="flex flex-row  justify-center">
        <p className="mt-12">
          You're <b className="text-red-500 ">$10.01</b> away from free
          shipping!
        </p>
        <Link to="/help-center">
          <img src={helpImg} alt="help" className="w-20" />
        </Link>
      </div>
      <div className="flex justify-center mt-3 ">
        <button className="bg-yellow-300 px-32 py-1">
          <LockIcon className="py-0.5" />
          Checkout
        </button>
      </div>
      {/* {cart.map((item) => (
                <div key={item.id}>
                  {item.qty}*{item.price}
                </div>
              ))} */}
    </Panel>
  );
};

export default OrderSummary;
