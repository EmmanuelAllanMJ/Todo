import React from "react";
import Input from "../Input/Input";
import "./List.css";

function List(props) {
  return (
    <div>
      <p className="ListItem">{props.title}</p>
    </div>
  );
}

export default List;
