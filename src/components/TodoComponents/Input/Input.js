import React, { useState } from "react";

import "./Input.css";
import Buttons from "../../UI/Buttons";
import List from "../List/List";

function Input(props) {
  const [enteredItem, setEnteredItem] = useState("");

  function inputChangeHandler(event) {
    setEnteredItem(event.target.value);
  }
  function onSubmitHandler(event) {
    event.preventDefault();
    const newItem = { title: enteredItem, id: Math.random() };
    props.addTodoItem(newItem);
    setEnteredItem("");
  }
  return (
    <div className="container">
      <form onSubmit={onSubmitHandler}>
        <div className="input-box ">
          <h2>Today's Goal</h2>

          <input
            className="text-box"
            value={enteredItem}
            onChange={inputChangeHandler}
          ></input>
          <Buttons onAddHandler={props.addItem} />
        </div>
      </form>
      <div className=" ">
        {props.items.map((item) => (
          <List key={item.id} title={item.title} />
        ))}
      </div>
    </div>
  );
}

export default Input;
