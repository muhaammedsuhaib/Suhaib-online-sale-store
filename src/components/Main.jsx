import React, { createContext, useState } from "react";
import Navbar from "./Navbar";
import Allproducts from "./Allproducts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Jackets from "./Jackets";
import { Products } from "./Products";
import Shirts from "./Shirts";
import Blazers from "./Blazers";
import Home from "./Home";
import Profil from "./Profil";
import Cart from "./Cart";
import Wishlist from "./Wishlist";

export const passingProduct = createContext();

const Main = () => {
  const [product, setProdct] = useState(Products);
  const [login, setLogin] = useState(null);
  const [user, setUser] = useState([]);
  const [register, setRegister] = useState(false);
  const [account, setAccount] = useState(false);
  const [paystate, setpaystate] = useState(false);
  const [auth,setAuth]=useState(false);
  const [addressstate, setAddressstate] = useState(false);
  return (
    <div>
      <BrowserRouter>
        <passingProduct.Provider
          value={{ product, setProdct, user, setUser, login, setLogin ,register, setRegister,account, setAccount,auth,setAuth,paystate, setpaystate,addressstate, setAddressstate}}
        >
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/all" element={<Allproducts />} />
            <Route path="/jackets" element={<Jackets />} />
            <Route path="/shirts" element={<Shirts />} />
            <Route path="/blazer" element={<Blazers />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Routes>
        </passingProduct.Provider>
      </BrowserRouter>
    </div>
  );
};

export default Main;
