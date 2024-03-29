/* eslint-disable react/prop-types */
import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Box(props) {
  function handleToggling() {
    props.setData({ ...props.data, [props.id]: !props.data[props.id] });
  }

  return (
    <div className="box">
      <h2>
        {props.name}
        <ArrowDropDownIcon onClick={(e) => handleToggling(e, props.id)} />
      </h2>
      <div className={props.data[props.id] ? "content shown" : "content"}>
        <img src="https://placehold.co/300x150" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          possimus quisquam vero, incidunt unde rem ullam adipisci, amet soluta
          fugiat ad vitae corrupti, voluptas veritatis officiis labore repellat
          ipsum aliquam!
        </p>
      </div>
    </div>
  );
}

export default Box;
