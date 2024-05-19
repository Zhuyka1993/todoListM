//<p>props.name</p><Button>Remove</Button><Button>Done</Button>
import React from "react";

function Task(props) {
  const taskStyle = {
    textDecoration: props.done ? "line-through" : "none",
  };

  return (
    <div>
      <p style={taskStyle}>
        {props.name} - {props.id}
      </p>
      <button onClick={() => props.removeElement(props.id)}>Видалити</button>
      <button onClick={() => props.doneElement(props.id)}>
        {props.done ? "Не виконано" : "Виконано"}
      </button>
    </div>
  );
}

export default Task;
