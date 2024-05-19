import React from "react";

function InputComponent(props) {
  return (
    <div>
      <input value={props.todo} />
      <button onClick={() => props.addTask()}> Додати </button>
    </div>
  );
}

export default InputComponent;
