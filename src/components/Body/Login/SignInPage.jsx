import React, { useContext, useState } from "react";
import Form from "../../../reusable/Form";
import Square from "../../../reusable/Square";
import Input from "../../../reusable/Input";
import Button from "../../../reusable/Button";
import { Link, useRoutes, useNavigate } from "react-router-dom";
import axios from "axios";
import useForm from "../../../hooks/useForm";
import { UserContext } from "../../../context/useInfoUser";
import { toast } from "react-toastify";

const SignInPage = () => {
  // const { userInfo, setUserInfo } = useContext(UserContext);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
    // setLoginData(...loginData, e.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = loginData;
    if (!email || !password) {
      setError("All fields are required!");
    } else {
      setIsLoading(true);
      try {
        const res = await axios.post(
          "http://localhost:8000/api/v1/auth/login/",
          loginData
        );
        const response = res.data;
        const user ={
          "email":response.email,
          "names":response.full_name
        }
        console.log(res);
        console.log("User: ",user)
        setIsLoading(false);

        
        // if (response.status === 200) {
        const storedUserInfo = localStorage.setItem("user",JSON.stringify(user))
        console.log('Stored user info',storedUserInfo)
        localStorage.setItem("access",JSON.stringify(response.access_token))
        localStorage.setItem("refresh",JSON.stringify(response.refresh_token))
    
        navigate("/profile");
        toast.success("Login successful", {
          position: "bottom-right",
          autoClose: 3000,
        });
        // }
      } catch (error) {
        setIsLoading(false);
        if (error.response && error.response.status === 401) {
          toast.error(error.response.data.detail);
        } else {
          console.error("An error occurred:", error);
        }
      }
    }

    // navigate("/");
  };

  return (
    <div className="my-20 block mt-28 ">
      {/* <div className="flex justify-center"></div>
      <div className="">
        <Square className="top-32 right-24 w-20 h-20 z-10" />
        <Square className="top-52 left-24 w-32 h-32" />
        <Square className="-bottom-2 right-32 w-20 h-20" />
        <Square className="top-64 right-20 w-14 h-14" />
        <Square className="-bottom-5 left-32 w-16 h-16 z-10" />
        <Square className="top-24 left-96 w-24 h-24 z-10" />
        <Square className="-bottom-20 right-96 w-32 h-32" />
      </div> */}
      {error ? { error } : ""}
      <div className="flex justify-center">
        <Form
          className="w-fit p-10 md:w-2/3 flex justify-center"
          type="submit"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col w-full justify-center gap-y-8 tracking-wider">
            <h1>Login Form</h1>

            <Input
              placeholder="Your email"
              className=""
              name="email"
              onChange={handleChange}
              value={loginData.email}
              required
            />
            <Input
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={loginData.password}
              required
            />
            <Button className="flex justify-center rounded-md backdrop-opacity-10 backdrop-blur bg-pink-400 border-none hover:bg-yellow-200">
              Login
            </Button>
            {isLoading && <p>Loading...</p>}
            <div>
              <p>
                Forgot Password?{" "}
                <Link to="/forget-password" className="underline">
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
