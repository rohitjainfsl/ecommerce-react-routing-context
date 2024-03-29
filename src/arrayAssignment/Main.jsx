import React, { useState } from "react";

function Main() {
  const [inputValue, setInputValue] = useState("");
  const [names, setNames] = useState([]);
  const [output, setOutput] = useState("");

  function handleAddition() {
    setNames([...names, inputValue]);
    setInputValue("");
  }

  function handlePrint() {
    setOutput(names.join(","));
  }

  function handlePrintReverse() {
    const namesReverse = names;
    setOutput(namesReverse.reverse().join(","));
  }

  console.log(names);

  return (
    <>
      <input
        type="text"
        placeholder="Enter your friend's name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddition}>Add to Array</button>
      <button onClick={handlePrint}>Print</button>
      <button onClick={handlePrintReverse}>Print in Reverse</button>

      <p>{output}</p>
    </>
  );
}

export default Main;
