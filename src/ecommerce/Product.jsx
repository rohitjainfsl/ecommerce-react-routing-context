/* eslint-disable react/prop-types */
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { useContext, useEffect } from "react";
import { ecomContext } from "./Main";

function Product({ product }) {
  const { cart, setCart } = useContext(ecomContext);

  function removeFromCart(e, item) {
    e.preventDefault();
    setCart(
      cart.filter((cartItem) => {
        return cartItem.id !== item.id;
      })
    );
  }

  useEffect(() => {
    if (localStorage.getItem("storedCart")) {
      let cartFromLS = JSON.parse(localStorage.getItem("storedCart"));
      cartFromLS = [...cart];
      localStorage.setItem("storedCart", JSON.stringify(cartFromLS));
    } else if (cart.length > 0) {
      localStorage.setItem("storedCart", JSON.stringify(cart));
    }
  }, [cart]);

  function addToCart(e, product) {
    e.preventDefault();
    setCart([...cart, product]);
  }

  function isProductAdded(product) {
    const productFound = cart.find((cartItem) => {
      return cartItem.id === product.id;
    });
    if (productFound === undefined) return false;
    else return true;
  }

  return (
    <div className="product">
      <a href="">
        <img src={product.image} alt="" />
      </a>
      <h3>
        <a href="">{product.title}</a>
      </h3>

      {isProductAdded(product) ? (
        <a href="" className="cart" onClick={(e) => removeFromCart(e, product)}>
          Remove From <RemoveShoppingCartIcon />
        </a>
      ) : (
        <a href="" className="cart" onClick={(e) => addToCart(e, product)}>
          Add To <ShoppingCartCheckoutIcon />
        </a>
      )}
    </div>
  );
}

export default Product;
