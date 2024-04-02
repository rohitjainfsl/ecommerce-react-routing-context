import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { ecomContext } from "./Main";
import { NavLink } from "react-router-dom";

function Header() {
  const { cart } = useContext(ecomContext);

  return (
    <nav>
      <NavLink className="logo" to="/">
        Ecommerce
      </NavLink>
      <ul>
        <li>
          <NavLink to="">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/category/men">For Men</NavLink>
        </li>
        <li>
          <NavLink to="/category/women">For Women</NavLink>
        </li>
        <li>
          <NavLink to="" className="blue btn">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" className="cartIcon">
            <ShoppingCartIcon /> <span>{cart.length}</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
