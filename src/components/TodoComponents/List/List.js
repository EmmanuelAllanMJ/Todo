import React from "react";
import Input from "../Input/Input";
// import App from "../App";
import "./List.css";

function List(props) {
  function deleteItem() {
    console.log(props.title);
    props.deleteItem(props.title);
  }
  return (
    <div>
      <p className="ListItem" onClick={deleteItem}>
        {props.title}
      </p>
    </div>
  );
}

export default List;
