import axios from "axios";
import React, { useEffect, useState } from "react";

function CategoryMenu(props) {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setData(response.data);
    });
  }, []);

  useEffect(() => {
    if (data.length > 0) extractCategories();
  }, [data]);

  function extractCategories() {
    const arr = [];
    for (let i = 0; i < data.length; i++) {
      if (!arr.includes(data[i].category)) arr.push(data[i].category);
    }
    setCategories(arr);
  }

  function filterByCat(e) {
    e.preventDefault();
    const cat = e.target.innerHTML;
    const filteredProducts = data.filter((obj) => {
      return obj.category === cat;
    });
    console.log(filteredProducts)
  }

  return (
    <nav className="menu2">
      <ul>
        {categories.map((cat, index) => {
          return (
            <li key={index}>
              <a href="" onClick={filterByCat}>
                {cat}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default CategoryMenu;
