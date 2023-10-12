import React, { useContext } from "react";
import Form from "../../../reusable/Form";
import Square from "../../../reusable/Square";
import Input from "../../../reusable/Input";
import Button from "../../../reusable/Button";
import { Link, useRoutes, useNavigate } from "react-router-dom";
import axios from "axios";
import useForm from "../../../hooks/useForm";
import { UserContext } from "../../../context/useInfoUser";

const SignInPage = () => {
  const initialValue = {};
  const [values, handleChange] = useForm(initialValue);
  const {userInfo, setUserInfo} = useContext(UserContext);

  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    
    event.preventDefault();
    setUserInfo(values)
    
    navigate('/');
    // try {
    //   const response = await axios.get(
    //     "http://127.0.0.1:8000/accounts/",
    //     values
    //   );
    //   // .then((response)=> console.log(response.data));
    //   const filteredData = response.data.filter((data) => {
    //     return data.password === values.password && data.email === values.email;
    //   });
    //   if (filteredData.length > 0) {
    //     window.location.href = "/";
    //   } else {
    //     console.log("No matching data found");
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };
  return (
    <div className="my-20 block">
      <div className="flex justify-center"></div>
      <div className="">
        <Square className="top-32 right-24 w-20 h-20 z-10" />
        <Square className="top-52 left-24 w-32 h-32" />
        <Square className="-bottom-2 right-32 w-20 h-20" />
        <Square className="top-64 right-20 w-14 h-14" />
        <Square className="-bottom-5 left-32 w-16 h-16 z-10" />
        <Square className="top-24 left-96 w-24 h-24 z-10" />
        <Square className="-bottom-20 right-96 w-32 h-32" />
      </div>
      <div className="flex justify-center">
        <Form
          className="w-fit p-10 md:w-2/3 flex justify-center"
          type="submit"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col w-full justify-center gap-y-8 tracking-wider">
            <h1>Login Form</h1>
            <Input
              placeholder="Your Email"
              className=""
              name="email"
              onChange={handleChange}
              value={values.name}
            />
            <Input
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={values.name}
            />
            <Button className="flex justify-center rounded-md backdrop-opacity-10 backdrop-blur bg-pink-400 border-none hover:bg-yellow-200">
              Login
            </Button>
            <div>
              <p>
                Forgot Password ?
                <Link to="/forgot-pw" className="underline">
                  Click Here
                </Link>
              </p>
              <p>
                Don't have an account?{" "}
                <Link to="/sign-up" className="underline">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignInPage;
