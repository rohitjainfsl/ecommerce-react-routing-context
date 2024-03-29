/* eslint-disable react/jsx-no-target-blank */
import React from "react";

function Main() {
  return (
    <>
      <h1>Welcome to Our Ecommerce App</h1>
      <h3>
        The concepts used here are{" "}
        <a target="_blank" href="https://react.dev/learn/passing-props-to-a-component">props</a>
        , <a target="_blank" href="https://reactrouter.com/en/main">react routing</a> &{" "}
        <a target="_blank" href="https://react.dev/learn/passing-data-deeply-with-context">
          react context API
        </a>
      </h3>
      <p>Go to our <a href="/shop">SHOP</a> page to get started</p>
    </>
  );
}

export default Main;
