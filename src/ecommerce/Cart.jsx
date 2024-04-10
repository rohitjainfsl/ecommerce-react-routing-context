import { useContext, useEffect } from "react";
import { ecomContext } from "./Main";
import CartItem from "./CartItem";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

function Cart() {
  const { cart, cartTotal, setCartTotal } = useContext(ecomContext);

  useEffect(() => {
    if (localStorage.getItem("storedCart")) {
      let cartFromLS = JSON.parse(localStorage.getItem("storedCart"));
      cartFromLS = [...cart];
      localStorage.setItem("storedCart", JSON.stringify(cartFromLS));
    } else if (cart.length > 0) {
      localStorage.setItem("storedCart", JSON.stringify(cart));
    }
  }, [cart]);

  useEffect(() => {
    let total = 0;
    cart.forEach((cartItem) => (total += cartItem.price * cartItem.quantity));
    setCartTotal(total);
  }, [cart, setCartTotal]);

  return (
    <>
      <div className="display-cart">
        {cart.map((item, index) => {
          return <CartItem className="cart-item" key={index} item={item} />;
        })}
        <div className="cart-total">
          <div className="left">
            <h3>Total</h3>
          </div>
          <div className="right">
            <h4>
              <CurrencyRupeeIcon /> <span>{cartTotal}</span>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
