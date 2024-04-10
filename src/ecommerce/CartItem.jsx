/* eslint-disable react/prop-types */
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { useContext, useEffect, useState } from "react";
import { ecomContext } from "./Main";

function CartItem({ item }) {
  const { removeFromCart, cart, setCartTotal } = useContext(ecomContext);
  const [quantity, setQuantity] = useState(item.quantity);

  useEffect(() => {
    let total = 0;
    cart.forEach((cartItem) => (total += cartItem.price * cartItem.quantity));
    setCartTotal(total);
  }, [cart, setCartTotal]);

  useEffect(() => {
    item.quantity = quantity;
  }, [item, quantity]);

  return (
    <div className="cart-item">
      <div className="left">
        <img src={item.image} alt="" />
      </div>
      <div className="right">
        <h4>{item.title}</h4>
        <div className="quantity">
          <button
            onClick={() => (quantity < 10 ? setQuantity(quantity + 1) : "")}
          >
            +
          </button>
          <input type="number" min="1" max="10" value={quantity} readOnly />
          <button
            onClick={() => (quantity > 1 ? setQuantity(quantity - 1) : "")}
          >
            -
          </button>
        </div>
        <p className="price">
          <CurrencyRupeeIcon /> <span>{item.price * quantity}</span>
        </p>
        <a href="" className="cart" onClick={(e) => removeFromCart(e, item)}>
          Remove From <RemoveShoppingCartIcon />
        </a>
      </div>
    </div>
  );
}
export default CartItem;
