import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function Section() {
  const [input, setInput] = useState("");
  const [value, setValue] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  function addvalue() {
    if (!isEditing) setValue([...value, input]);
    // setInput(value[isEditing]);
    else {
      value[isEditing] = input;
      console.log(input);
      setInput(value);
      setIsEditing(false);
    }
  }

  function remove(del) {
    console.log(del);
    setValue(
      value.filter((value, ind) => {
        return ind !== del;
      })
    );
    //   console.log(value);}
  }
  function edit(edt) {
    setInput(value[edt]);
    setIsEditing(edt);
  }

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={addvalue}>add</button>
      <ul>
        {value.map((data, index) => {
          return (
            <li key={index}>
              {data}{" "}
              <span
                onClick={() => {
                  remove(index);
                }}
              >
                <DeleteIcon />
              </span>{" "}
              <EditIcon
                onClick={() => {
                  edit(index);
                }}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Section;
