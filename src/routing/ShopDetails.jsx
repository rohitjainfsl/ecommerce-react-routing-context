import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import CategoryMenu from "./CategoryMenu";

function ShopDetails() {
  const params = useParams();
  const [product, setProduct] = useState({});
  

  useEffect(() => {
    const { id } = params;

    axios.get("https://fakestoreapi.com/products/" + id).then((response) => {
      // console.log(response.data);
      setProduct(response.data);
    });
  });

  return (
    <>
      <div className="product-detail">
        <div className="left">
          <img src={product.image} alt="Single Product" />
        </div>
        <div className="right">
          <h3>{product.title}</h3>
          <p>
            <strong>Category</strong>: <span>{product.category}</span>
          </p>
          <p>{product.description}</p>
          <p>
            <CurrencyRupeeIcon /> <span>{product.price}</span>
          </p>
          <button>Add To Cart</button>
        </div>
      </div>
    </>
  );
}

export default ShopDetails;
