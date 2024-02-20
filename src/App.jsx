import { Link } from "react-router-dom";
import "./App.css";
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
import MatchingPage from "./components/Body/Matching/matchingPage";
import LogoutPage from "./components/Body/Login/LogoutPage";


function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Routes>
        <Route path="/matching" element={<MatchingPage/>}></Route>
      <Route path="/favorite-collections" element={<FavoritePage/>}></Route>
      <Route path="/testing" element={<Testing />}></Route>
      <Route path="/account" element={<UserPage/>}></Route>
        <Route path="/" element={<BodyPage />}></Route>

        <Route path="/clothes" element={<ClothesPage />}></Route>

        <Route path="/bags" element={<BagPage />}></Route>
        <Route path="/accessories" element={<AccessoriesPage />}></Route>
        <Route path="/shoes" element={<ShoePage />} />
        <Route path="/sales" element={<DiscountPage />}></Route>

        <Route path="/help-center" element={<SupportCenter />}></Route>
        <Route path="/help-center/contact-us" element={<ContactAdmin/>}></Route>
        <Route path="/help-center/reviews" element={<ReviewPage/>}></Route>
        

        <Route path="/login" element={<SignInPage />} />
        <Route path="/logout" element={<LogoutPage/>}/>
        <Route path="/shopping-bag" element={<ShoppingBagPage />} />
       
        <Route path="/sign-up" element={<UserRegister />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <FooterPage />
    </div>
  );
}

export default App;
