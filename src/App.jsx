import React, { useState } from "react";
import Input from './Input';
import ToDoItem from './ToDoItem';

function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
        <Input onAdd = {addItem} />
      <div>
        <ul>
          {items.map((todoitem,index) => (
            <ToDoItem
            key  = {index}
            id = {index}
            text = {todoitem}
            onChecked = {deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
