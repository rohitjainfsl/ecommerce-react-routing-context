import React, { useContext } from "react";
import { ecomContext } from "./Main";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

function Cart() {
  const { cart, setCart } = useContext(ecomContext);

  function removeFromCart(e, item){
    e.preventDefault()
  }

  return (
    <>
      <div className="display-cart">
        {cart.map((item, index) => {
          return (
            <div key={index} className="cart-item">
              <div className="left">
                <img src={item.image} alt="" />
              </div>
              <div className="right">
                <h4>{item.title}</h4>
                <p className="price">
                  <CurrencyRupeeIcon /> <span>{item.price}</span>
                </p>
                <a
                  href=""
                  className="cart"
                  onClick={(e) => removeFromCart(e, item)}
                >
                  Remove From <RemoveShoppingCartIcon />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Cart;
