// import React from 'react';
// import Header from '../header/Header';
// import { Route,Routes } from 'react-router';
// import BagPage from "./components/Body/Bags/BagPage";
// import AccessoriesPage from "./components/Body/Accessories/AccessoriesPage";
// import DiscountPage from "./components/Body/Sales/DiscountPage";
// import { NotFound } from "./NotFound";
// import HelpCenter from "./components/Body/Help/helpCenter";
// import DelieverIssues from "./components/Body/Help/deliever";
// import WinterSales from "./components/Body/Sales/WinterSales";
// import ProductIssues from "./components/Body/Help/productIssues";
// import ContactAdmin from "./components/Body/Help/contactAdmin";


// const ItemsList = () => {
//   return (
//     <div>
//       <Header/>
//       <Routes>
//       <Route path="/clothes" element={<ClothesPage />}>
//       </Route>

//       <Route path="/bags" element={<BagPage />}>
        
//       </Route>
//       <Route path="/accessories" element={<AccessoriesPage/>}></Route>
      
//       <Route path="/sales" element = {<DiscountPage/>}>

//       </Route>
      
//       <Route path="/help-center" element ={<HelpCenter />}>
//         <Route path= ":deliever-issues" element={<DelieverIssues />}></Route>
//         <Route path=":product-issues" element={<ProductIssues/>}></Route>
//         <Route path=":contact-admin" element={<ContactAdmin/>}></Route>
//       </Route>

//       <Route path="*" element={<NotFound/>} />
//       </Routes>
//     </div>
//   )
// }

// export default ItemsList