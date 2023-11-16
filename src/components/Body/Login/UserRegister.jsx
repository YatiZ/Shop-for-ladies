import React, { useState } from "react";
import Form from "../../../reusable/Form";
import Input from "../../../reusable/Input";
import { FIELDS } from "./InputField";
import { Radio, RadioGroup } from "@mui/material";
import useForm from "../../../hooks/useForm";
import axios from "axios";
import { ToastContainer,toast } from "react-toastify";

const UserRegister = () => {
  
  
  //   const history = useHistory();
  const [values, handleChange, resetForm] = useForm({});
  const [formSubmit, setFormSubmit] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();


    
    try {
      await axios
        .post("http://127.0.0.1:8000/register/", values)
        .then((response) => console.log(response.data));
        
        toast.success('Your account successfully created!',{
          position:'bottom-right',
          autoClose:3000
        });
      window.location.href = "/login";
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center md:px-24 px-8 md:m-10 text-xs md:text-base tracking-wider">
      <Form className="w-screen  gap-y-4 flex-col flex" onSubmit={handleSubmit}>
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
                />
                {/* {field.name === "username" && !values.username && <div className="text-red-600 text-xs font-bold tracking-widest">
            Username is required
          </div>} */}
                {formSubmit && !values.username && <div className="text-red-600 text-xs font-bold tracking-widest">{field.label} is required!</div>}
                {field.name === "password" && values.password.length !== 8 && (
                  <div className="text-red-600 text-xs font-bold tracking-widest">
                    You need to enter a password with exactly 8 characters
                  </div>
                )}
                {field.name === "password2" &&
                  values.password !== values.password2 && (
                    <p className="text-red-600 text-xs font-bold tracking-widest">
                      Must match the previous password
                    </p>
                  )}
              </div>
            );
          })}
        </div>
        <div className="w-full flex flex-col gap-y-2">
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
        </div>
        <div className="grid place-items-end md:px-12 px-3 pb-10">
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

export default UserRegister;
