import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ShopProvider } from './context/useShopContext';


const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <BrowserRouter>
  <ShopProvider>
  <App />
  </ShopProvider>
  </BrowserRouter>
);



