import React, { useState } from "react";
import Task from "./Task";

function Nav() {
  //tasks = [{id:0, name: 'Test'}]
  const [tasks, setTasks] = useState([]);
  // ДОДАЮ ЩЕ ОДИН СТЕЙТ ДЛЯ ЗБЕРЕЖЕННЯ ПОТОЧНОГО ЗНАЧЕННЯ З ІНПУТУ
  const [inputValue, setInputValue] = useState("");

  const addTask = () => {
    setTasks([...tasks, { id: tasks.length, name: inputValue, done: false }]);
    setInputValue("");
  };

  // Функція для видалення завдання за ID
  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId)); // Фільтрування завдань, виключаючи те, яке потрібно видалити
  };

  // фунція що змінює доне на перечеркнутий текст
  const markTaskAsDone = (taskId) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          // Перемикання стану done безпосередньо
          return { ...task, done: !task.done };
        } else {
          return task;
        }
      })
    );
  };

  // 4. Add here <Task> and add props you will make up
  const tasksRender = () =>
    tasks.map((el) => (
      <Task
        key={el.id}
        id={el.id}
        name={el.name}
        done={el.done}
        doneElement={markTaskAsDone}
        removeElement={removeTask}
      />
    ));

  return (
    <>
      {/* 1. Input component with the 'Add' button in order to add a new data from the input  in the state to render the <Task> component */}
      <div>
        {/* 2. Add onclick callback function */}
        <div>
          <input
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            placeholder="введіть сюди"
          />
          <p></p>
          <button onClick={addTask}>Add</button>
        </div>
        {tasksRender()}
      </div>
      {/* 3. Task component, in order to render tasks from the state you have to create -> [].map or other kind of loop  */}
      {/* tasksRender() */}
    </>
  );
}

export default Nav;
