import React from "react";
import Title from "./components/Logo";
import Nav from "./components/NavComponent";
// import { useState } from "react";

// import InputComponent from "./components/Input";

function App() {
  // Значення з інпуту
  // const [todo, setTodo] = useState(" ");
  // //список старих задач
  // const [tasks, setTasks] = useState([]);

  // const addTask = () => {
  //   //створюю об"єкт для таски
  //   const taskToDo = {
  //     id: Math.random(),
  //     // Валью беру з хука input
  //     value: todo,
  //     status: false,
  //   };
  // в цей массив будуть додаватися нові задачі, і будуть відмальовуватися всі
  //старі задачі P.S якщо помііняти тасктуду і ...таскс
  //- наша задача буде додаватись знизу, а якщо ні - то зверху
  // let newTask = [taskToDo, ...tasks];
  // setTasks(newTask);
  // const deleteTask = () => {};
  // const toggleTask = () => {};
  return (
    <div>
      <Title />
      {/* Через пропси передаємо функцію яка зберігає весь список задач */}
      <Nav />
    </div>
  );
}

export default App;
