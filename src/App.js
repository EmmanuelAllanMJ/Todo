import React, { useState } from "react";
import Input from "./components/TodoComponents/Input/Input";
import List from "./components/TodoComponents/List/List";

const DUMMY_TodoItems = [
  { id: "t1", title: "Do all exercises" },
  { id: "t2", title: "Finish my Assignments" },
];

function App() {
  const [todoItem, setTodoItem] = useState(DUMMY_TodoItems);

  function addItem(item) {
    setTodoItem((prevItem) => [item, ...prevItem]);
    console.log(todoItem);
  }

  return (
    <div>
      <Input items={todoItem} addTodoItem={addItem} />
    </div>
  );
}

export default App;
