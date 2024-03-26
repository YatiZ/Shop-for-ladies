import React, { useState } from "react";
import Form from "../../../reusable/Form";
import Input from "../../../reusable/Input";
import Button from "../../../reusable/Button";
import { FIELDS } from "./InputField";
import { Radio, RadioGroup } from "@mui/material";
import useForm from "../../../hooks/useForm";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const UserRegister = () => {
  //   const history = useHistory();
  const [values, handleChange, resetForm] = useForm({});
  const [formSubmit, setFormSubmit] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/auth/register/",
        values
      );
      const response = res.data;
      console.log(response.message)
      if(res.status === 201){
        navigate("/otp/verify");
        toast.success(response.message, {
          position: "top-right",
          autoClose: 3000,
        });
        // window.location.href = "/otp/verify";
        
      }
      
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col justify-center pb-5 md:px-24 px-8 m-5 md:m-10 text-xs md:text-base tracking-wider font-Serif">
      <div>
        <Form className=" gap-y-4 flex-col flex pb-5" onSubmit={handleSubmit}>
          <h1 className="mt-10 flex justify-center font-bold text-3xl">
            Registration Form
          </h1>

          <div className="h-1 bg-yellow-400"></div>
          <div className="md:px-12 px-3 py-2 flex flex-col gap-y-2">
            {FIELDS.map((field) => {
              return (
                <div key={field.name}>
                  <label htmlFor={field.name}>{field.label}</label>
                  <Input
                    onChange={handleChange}
                    type={field.type}
                    placeholder={field.placeholder}
                    name={field.name}
                    value={values[field.name] || ""}
                    required
                  />
                  {/* {field.name === "username" && !values.username && <div className="text-red-600 text-xs font-bold tracking-widest">
            Username is required
          </div>} */}
                  {formSubmit && !values.username && (
                    <div className="text-red-600 text-xs font-bold tracking-widest">
                      {field.label} is required!
                    </div>
                  )}
                  {formSubmit &&
                    field.name === "password" &&
                    values.password.length !== 8 && (
                      <div className="text-red-600 text-xs font-bold tracking-widest">
                        You need to enter a password with exactly 8 characters
                      </div>
                    )}
                  {formSubmit &&
                    field.name === "password2" &&
                    values.password !== values.password2 && (
                      <p className="text-red-600 text-xs font-bold tracking-widest">
                        Must match the previous password
                      </p>
                    )}
                </div>
              );
            })}
          </div>
          {/* <div className="w-full flex flex-col gap-y-2">
          <h1 className="md:px-12 px-3">Gender</h1>

          <RadioGroup
            defaultValue="Female"
            name1="controlled-radio-buttons-group"
            name="gender"
            sx={{ display: "inline", ml: 5 }}
            onChange={handleChange}
            value={values.gender || ""}
          >
            <Radio value="Female" label="Female" />
            <label>Female</label>
            <Radio value="Male" label="Male" />
            <label>Male</label>
            <Radio value="Other" label="Other" />
            <label>Other</label>
          </RadioGroup>
        </div> */}
          <div className="grid place-items-center md:px-12 px-3">
            <Button
              type="submit"
              className="w-fit bg-yellow-200 rounded-full px-3 py-2 hover:bg-pink-300"
            >
              Create Account
            </Button>
          </div>
        </Form>
      </div>
      <h3 className="font-bold text-center m-5 text-2xl">Or</h3>
      <div className="flex flex-col justify-center items-center ">
        <div>
          <Button className=" bg-yellow-200 rounded-full px-14 py-2 hover:bg-pink-300">
            Sign up with Google
            <svg
              width="25.6"
              height="22"
              viewBox="0 0 186.69 190.5"
              className="ml-2"
            >
              <g transform="translate(1184.583 765.171)">
                <path
                  clipPath="none"
                  mask="none"
                  d="M-1089.333-687.239v36.888h51.262c-2.251 11.863-9.006 21.908-19.137 28.662l30.913 23.986c18.011-16.625 28.402-41.044 28.402-70.052 0-6.754-.606-13.249-1.732-19.483z"
                  fill="#4285f4"
                />
                <path
                  clipPath="none"
                  mask="none"
                  d="M-1142.714-651.791l-6.972 5.337-24.679 19.223h0c15.673 31.086 47.796 52.561 85.03 52.561 25.717 0 47.278-8.486 63.038-23.033l-30.913-23.986c-8.486 5.715-19.31 9.179-32.125 9.179-24.765 0-45.806-16.712-53.34-39.226z"
                  fill="#34a853"
                />
                <path
                  clipPath="none"
                  mask="none"
                  d="M-1174.365-712.61c-6.494 12.815-10.217 27.276-10.217 42.689s3.723 29.874 10.217 42.689c0 .086 31.693-24.592 31.693-24.592-1.905-5.715-3.031-11.776-3.031-18.098s1.126-12.383 3.031-18.098z"
                  fill="#fbbc05"
                />
                <path
                  d="M-1089.333-727.244c14.028 0 26.497 4.849 36.455 14.201l27.276-27.276c-16.539-15.413-38.013-24.852-63.731-24.852-37.234 0-69.359 21.388-85.032 52.561l31.692 24.592c7.533-22.514 28.575-39.226 53.34-39.226z"
                  fill="#ea4335"
                  clipPath="none"
                  mask="none"
                />
              </g>
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;
