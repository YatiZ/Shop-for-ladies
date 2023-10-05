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
import HelpCenter from "./components/Body/Help/helpCenter";
import SignInPage from "./components/Body/Login/SignInPage";
import ShoppingBagPage from "./components/Body/Shopping/BagPage";
import UserRegister from "./components/Body/Login/UserRegister";
import ShoePage from "./components/Body/Shoes/ShoePage";
import ShopPage from "./components/Body/Shopping/ShopPage";
import SupportCenter from "./components/Body/Help/SupportCenter";
import FooterPage from "./components/Footer/FooterPage";


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<BodyPage />}></Route>

        <Route path="/clothes" element={<ClothesPage />}></Route>

        <Route path="/bags" element={<BagPage />}></Route>
        <Route path="/accessories" element={<AccessoriesPage />}></Route>
        <Route path="/shoes" element={<ShoePage/>}/>
        <Route path="/sales" element={<DiscountPage />}></Route>

        {/* <Route path="/help-center" element={<HelpCenter />}> */}
        <Route path="/help-center" element={<SupportCenter />}>
        </Route>
        <Route path="/login" element={<SignInPage />} />
        <Route path="/shopping-bag" element={<ShoppingBagPage />} />
        <Route path="/shop-page" element={<ShopPage/>} />
        <Route path="/sign-up" element={<UserRegister />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <FooterPage/>
    </>
  );
}

export default App;
