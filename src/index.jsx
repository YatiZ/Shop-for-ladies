import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ShopProvider } from "./context/useShopContext";
import { SearchProvider } from "./context/useGlobalSearch";
import { UserProvider } from "./context/useInfoUser";
import { FavoriteProvider } from "./context/useFavorite";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <BrowserRouter>
    <ShopProvider>
      <SearchProvider>
        <UserProvider>
          <FavoriteProvider>
            <App />
          </FavoriteProvider>
        </UserProvider>
      </SearchProvider>
    </ShopProvider>
  </BrowserRouter>
);
