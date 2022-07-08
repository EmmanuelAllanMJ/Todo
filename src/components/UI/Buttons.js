import React from "react";
import "./Buttons.css";

function Buttons(props) {
  function addItem() {
    console.log("object");
  }
  return (
    <div className="button-div">
      <button type="submit" className="btn btn--full">
        Add Goal
      </button>
    </div>
  );
}

export default Buttons;
