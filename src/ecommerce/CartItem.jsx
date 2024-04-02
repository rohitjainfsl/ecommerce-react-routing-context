/* eslint-disable react/prop-types */
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { useContext } from "react";
import { ecomContext } from "./Main";

function CartItem({ item }) {
  const { removeFromCart } = useContext(ecomContext);
  return (
    <div className="cart-item">
      <div className="left">
        <img src={item.image} alt="" />
      </div>
      <div className="right">
        <h4>{item.title}</h4>
        <p className="price">
          <CurrencyRupeeIcon /> <span>{item.price}</span>
        </p>
        <a href="" className="cart" onClick={(e) => removeFromCart(e, item)}>
          Remove From <RemoveShoppingCartIcon />
        </a>
      </div>
    </div>
  );
}
export default CartItem;
