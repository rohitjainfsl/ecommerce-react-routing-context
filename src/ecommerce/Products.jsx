import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./Product";

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((result) => {
      console.log(result.data);
      setProducts(result.data);
    });
  }, []);

  return (
    <>
      <div className="products">
        {products.map((product, index) => {
          return <Product key={index} product={product} />;
        })}
      </div>
    </>
  );
}

export default Products;
