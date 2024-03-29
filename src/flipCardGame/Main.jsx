import React, { useState } from "react";
import GameGrid from "./GameGrid";
import "./flipCardGame.css";

function Main() {
  const [start, setStart] = useState(false);

  return (
    <>
      {start ? (
        <GameGrid />
      ) : (
        <button onClick={() => setStart(true)}>Start Game</button>
      )}
    </>
  );
}

export default Main;
