import { Link } from "react-router-dom";
import "./App.css";
import ClothesPage from "./components/Body/ClothesPage";
import Content from "./components/Body/Content";
import SliderPage from "./components/Body/SliderPage";
import FooterPage from "./components/Footer/FooterPage";
import SummerSales from "./components/Body/Sales/SumerSales";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import BodyPage from "./components/Body/BodyPage";
import BagPage from "./components/Body/Bags/BagPage";
import AccessoriesPage from "./components/Body/Accessories/AccessoriesPage";
import DiscountPage from "./components/Body/Sales/DiscountPage";
import { NotFound } from "./NotFound";
import HelpCenter from "./components/Body/Help/helpCenter";
import DelieverIssues from "./components/Body/Help/deliever";
import WinterSales from "./components/Body/Sales/WinterSales";
import ProductIssues from "./components/Body/Help/productIssues";
import ContactAdmin from "./components/Body/Help/contactAdmin";

function App() {
  return (
    <>
      <Header />
      <Routes>

      <Route path="/" element = {<BodyPage/> }></Route>

      <Route path="/clothes" element={<ClothesPage />}>
        <Route path=":office-fashion" element={<ClothesPage/>}></Route>
        <Route path=":causual-fashion" element={<ClothesPage/>}></Route>
        <Route path=":evening-wear" element={<ClothesPage/>}></Route>
        <Route path=":cosplay" element={<ClothesPage/>}></Route>
        <Route path=":swimsuit" element={<ClothesPage/>}></Route>
        <Route path=":pants & skirts" element={<ClothesPage/>}></Route>
      </Route>

      <Route path="/bags" element={<BagPage />}>
        
      </Route>
      <Route path="/accessories" element={<AccessoriesPage/>}></Route>
      
      <Route path="/sales" element = {<DiscountPage/>}>

      </Route>
      
      <Route path="/help-center" element ={<HelpCenter />}>
        <Route path= ":deliever-issues" element={<DelieverIssues />}></Route>
        <Route path=":product-issues" element={<ProductIssues/>}></Route>
        <Route path=":contact-admin" element={<ContactAdmin/>}></Route>
      </Route>

      <Route path="*" element={<NotFound/>} />
      </Routes>
      
    </>
  );
}

export default App;
