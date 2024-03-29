import React, { createContext, useState } from "react";
import Main from "./Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Contact";
import About from "./About";
import Services from "./Services";
import Header from "./Header";
import Shop from "./Shop";
import ShopParent from "./ShopParent";
import Cart from "./Cart";
import "./style.css";
import ShopDetails from "./ShopDetails";
export const ecommerceContext = createContext({});

function Home() {
  const [cart, setCart] = useState(
    localStorage.getItem("cartItems") === null
      ? []
      : JSON.parse(localStorage.getItem("cartItems"))
  );
  return (
    <>
      <ecommerceContext.Provider value={{ cart, setCart }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/shop" element={<ShopParent />}>
              <Route index element={<Shop />} />
              <Route path=":id" element={<ShopDetails />} />
            </Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </BrowserRouter>
      </ecommerceContext.Provider>
    </>
  );
}

export default Home;
