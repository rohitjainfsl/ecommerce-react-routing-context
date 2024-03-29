import React, { useState } from "react";
import Box from "./Box";
import "./style.css";

function Main() {
  const [data, setData] = useState({
    box1: true,
    box2: true,
    box3: true,
    box4: true,
  });

  return (
    <>
      <Box name="Box 1" id="box1" data={data} setData={setData} />
      <Box name="Box 2" id="box2" data={data} setData={setData} />
      <Box name="Box 3" id="box3" data={data} setData={setData} />
      <Box name="Box 4" id="box4" data={data} setData={setData} />
    </>
  );
}

export default Main;
