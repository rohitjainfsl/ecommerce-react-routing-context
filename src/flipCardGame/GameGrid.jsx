import React, { useState } from "react";
import actualPhotos from "./photos";
import Component from "./Component";

function GameGrid() {
  return (
    <>
    <div className="parent">

    
      <div id="firstdiv">
        <Component />
        <Component />
        <Component />
        <Component />
      </div>

      <div id="firstdiv">
        <Component />
        <Component />
        <Component />
        <Component />
      </div>

      <div id="firstdiv">
        <Component />
        <Component />
        <Component />
        <Component />
      </div>
      </div>
    </>
  );
}

export default GameGrid;
