import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ecommerceContext } from "./Home";
import CloseIcon from "@mui/icons-material/Close";

function Shop() {
  const { cart, setCart } = useContext(ecommerceContext);
  const [data, setData] = useState([]);
  const [cats, setCats] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      // console.log(response.data)
      setData(response.data);
    });
  }, []);

  useEffect(() => {
    const categories = [];
    data.forEach((obj) => {
      if (categories.includes(obj.category) === false)
        categories.push(obj.category);
    });
    setCats(categories);
  }, [data]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cart));
  }, [cart]);

  function truncate(text, length = 50) {
    return text.length <= 50 ? text : text.slice(0, length) + "...";
  }

  function handleAddToCart(e, product) {
    e.preventDefault();
    setCart([...cart, product.id]);
    // localStorage.setItem("cartItems", JSON.stringify(cart));
    //local storage seems to be lagging behind, that is because state is updated in batches in react, i.e. state changes are asynchronous
  }

  function handleRemoveFromCart(e, product) {
    e.preventDefault();
    setCart(
      cart.filter((id) => {
        return id !== product.id;
      })
    );
  }

  console.log("cart: " + cart);

  return (
    <>
      <main>
        <nav>
          <ul className="category-menu">
            {cats.map((cat, index) => {
              return (
                <li key={index}>
                  <a href="">{cat}</a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="product-wrapper">
          {data.map((dt, index) => {
            return (
              <>
                <div className="product" key={index}>
                  <a className="product-image" href={`/shop/${dt.id}`}>
                    <img src={dt.image} alt="" />
                  </a>
                  <div className="product-content">
                    <h3 className="product-title">
                      <a href={`/shop/${dt.id}`}>{truncate(dt.title)}</a>
                    </h3>
                    <p>
                      {cart.includes(dt.id) ? (
                        <a
                          href=""
                          className="cartBtn addedToCart"
                          onClick={(e) => handleRemoveFromCart(e, dt)}
                        >
                          Remove <CloseIcon />
                        </a>
                      ) : (
                        <a
                          href=""
                          className="cartBtn addToCart"
                          onClick={(e) => handleAddToCart(e, dt)}
                        >
                          Add To Cart
                        </a>
                      )}
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </main>
    </>
  );
}

export default Shop;
