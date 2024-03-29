import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { ecomContext } from "./Main";

function Header() {
  const { cart } = useContext(ecomContext);

  return (
    <nav>
      <a className="logo" href="/">
        Ecommerce
      </a>
      <ul>
        <li>
          <a href="">About Us</a>
        </li>
        <li>
          <a href="">For Men</a>
        </li>
        <li>
          <a href="">For Women</a>
        </li>
        <li>
          <a href="" className="blue btn">
            Login
          </a>
        </li>
        <li>
          <a href="/cart" className="cartIcon">
            <ShoppingCartIcon /> <span>{cart.length}</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
