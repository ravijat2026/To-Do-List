import React from "react";

function ToDoItem(props) {
  return (
    // <div
    //   onClick={() => {
    //     props.onChecked(props.id);
    //   }}
    // >
    //   <li>{props.text}</li>
    // </div>
    <div className="todolist">
      <li>
        {props.text}
        <button className="del" onClick={() => props.onChecked(props.id)}><i class="fa-solid fa-trash"></i></button>
      </li>
    </div>
  );
}

export default ToDoItem;