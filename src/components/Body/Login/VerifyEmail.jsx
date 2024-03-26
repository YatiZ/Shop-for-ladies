import React, { useState } from "react";
import Form from "../../../reusable/Form";
import Input from "../../../reusable/Input";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const [otpCode, setOtpCode] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (otpCode) {
      try {
        const res = await axios.post(
          "http://localhost:8000/api/v1/auth/verify-email/",
          { otp: otpCode }
        );
        console.log(res);
        toast.success("Email verified successfully!", {
          position: "bottom-right",
          autoClose: 3000,
        });
        navigate("/login");
      } catch (error) {
        // Handle errors
        console.error("Error:", error);
        toast.error("Failed to verify email. Please try again.");
      }
    }
  };
  return (
    <div className="flex flex-col justify-center pb-14 md:px-24 px-8 m-5 md:m-10 text-xs md:text-base tracking-wider">
      <Form className=" gap-y-4 flex-col flex" onSubmit={handleSubmit}>
        <h1 className="mt-10 flex justify-center font-bold text-3xl">
          Enter OTP Code
        </h1>

        <div className="h-1 bg-yellow-400"></div>
        <div className="md:px-12 px-3 py-2 flex flex-col gap-y-2">
          <Input
            placeholder="enter your otp code"
            name="otp"
            value={otpCode}
            onChange={(e) => setOtpCode(e.target.value)}
          />
        </div>
        <div className="grid place-items-center md:px-12 px-3 mb-5">
          <button
            type="submit"
            className="w-fit bg-yellow-200 rounded-full px-3 py-2 hover:bg-pink-300"
          >
            Create Account
          </button>
        </div>
      </Form>
    </div>
  );
};

export default VerifyEmail;
