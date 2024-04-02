import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Cart from "./Cart";
import "./ecommerce.css";
import { createContext, useState } from "react";
export const ecomContext = createContext({});

function Main() {
  const [cart, setCart] = useState(
    localStorage
      ? localStorage.getItem("storedCart")
        ? JSON.parse(localStorage.getItem("storedCart"))
        : []
      : []
  );

  function removeFromCart(e, item) {
    e.preventDefault();
    setCart(
      cart.filter((cartItem) => {
        return cartItem.id !== item.id;
      })
    );
  }

  return (
    <ecomContext.Provider value={{ cart, setCart, removeFromCart }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </ecomContext.Provider>
  );
}

export default Main;
