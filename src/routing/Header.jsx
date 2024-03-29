import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ecommerceContext } from "./Home";

function Header() {
  const { cart } = useContext(ecommerceContext);

  const data = [
    {
      country: "India",
      states: ["MP", "UP"]
    },
    {
      country: "Australia",
      states: ["Victoria", "NSW", "Canberra"]
    },
    {
      country: "UK",
      states: ["Leeds", "Manchester"]
    },
  ]
  return (
  <table>
    <tbody>
      <td>{data.country}</td>
      <tr></tr>
    </tbody>
  </table>
  )




  // return (
  //   <header>
  //     <h1>Logo</h1>
  //     <nav>
  //       <ul>
  //         <li>
  //           <NavLink to="/">Home</NavLink>
  //         </li>
  //         <li>
  //           <NavLink to="/about">About</NavLink>
  //         </li>
  //         <li>
  //           <NavLink to="/services">Services</NavLink>
  //         </li>
  //         <li>
  //           <NavLink to="/shop">Shop</NavLink>
  //         </li>
  //         <li>
  //           <NavLink to="/contact">Contact Us</NavLink>
  //         </li>
  //         <li>
  //           <NavLink to="/cart">
  //             <ShoppingCartIcon /> <span>{cart.length}</span>
  //           </NavLink>
  //         </li>
  //       </ul>
  //     </nav>
  //   </header>
  // );
}

export default Header;
