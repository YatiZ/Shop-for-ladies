import { Link } from "react-router-dom";
// import "./App.css";
import ClothesPage from "./components/Body/ClothesPage";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import BodyPage from "./components/Body/BodyPage";
import BagPage from "./components/Body/Bags/BagPage";
import AccessoriesPage from "./components/Body/Accessories/AccessoriesPage";
import DiscountPage from "./components/Body/Sales/DiscountPage";
import { NotFound } from "./NotFound";

import SignInPage from "./components/Body/Login/SignInPage";
import ShoppingBagPage from "./components/Body/Shopping/BagPage";
import UserRegister from "./components/Body/Login/UserRegister";
import ShoePage from "./components/Body/Shoes/ShoePage";
import SupportCenter from "./components/Body/Help/SupportCenter";
import FooterPage from "./components/Footer/FooterPage";
import Testing from "./components/Body/Help/testing";
import ContactAdmin from "./components/Body/Help/contactAdmin";
import ReviewPage from "./components/Body/Review/ReviewPage";
import FavoritePage from "./components/Body/FavoritePage";
import UserPage from "./components/User/UserPage";

import LogoutPage from "./components/Body/Login/LogoutPage";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { googleLogout } from "@react-oauth/google";
import { useState } from "react";
import VerifyEmail from "./components/Body/Login/VerifyEmail";
import ForgetPassword from "./components/Body/Login/ForgetPassword";
import { ToastContainer } from "react-toastify";
import MatchPage from "./components/Body/Matching/matchPage";

googleLogout();

function App() {
  // const [isLogin, setIsLogin] = useState('')
  return (
    <>
      <Header />
      {/* <GoogleLogin
        onSuccess={credentialResponse => {
          console.log('credentialResponse',credentialResponse)
          const decoded = jwtDecode(credentialResponse.credential);
          setIsLogin(decoded)
          console.log(decoded);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
   
      />

      <p>{isLogin.name}</p> */}
      <ToastContainer />

      <Routes>
        <Route path="/matching" element={<MatchPage/>}></Route>
        <Route path="/favorite-collections" element={<FavoritePage />}></Route>
        <Route path="/testing" element={<Testing />}></Route>
        <Route path="/account" element={<UserPage />}></Route>
        <Route path="/" element={<BodyPage />}></Route>

        <Route path="/clothes" element={<ClothesPage />}></Route>

        <Route path="/bags" element={<BagPage />}></Route>
        <Route path="/accessories" element={<AccessoriesPage />}></Route>
        <Route path="/shoes" element={<ShoePage />} />
        <Route path="/sales" element={<DiscountPage />}></Route>

        <Route path="/help-center" element={<SupportCenter />}></Route>
        <Route
          path="/help-center/contact-us"
          element={<ContactAdmin />}
        ></Route>
        <Route path="/help-center/reviews" element={<ReviewPage />}></Route>

        <Route path="/login" element={<SignInPage />} />
        {/* <Route path="/logout" element={<LogoutPage />} /> */}
        <Route path="/shopping-bag" element={<ShoppingBagPage />} />

        <Route path="/sign-up" element={<UserRegister />} />
        <Route path="/otp/verify" element={<VerifyEmail />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/profile" element={<UserPage/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <FooterPage />
    </>
  );
}

export default App;
