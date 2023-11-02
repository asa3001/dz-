import React from "react";
import "./App.css";
import { useState } from "react";
import Input from "./components/input";
import Button from "./components/Button";
import Switcher from "./components/switcher";
import Todoitem from "./components/todoitem";


function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [Todos, setTodos] = useState([]);  //[] - для данных 

  const addTask = () => {
    console.log("Добавление задачи");
    console.log("title:", title);
    console.log("description:", description);
  
    if (title.trim() !== "") {
      const newTask = { title, description };
      setTodos([...Todos, newTask]);
      setTitle("");
      setDescription("");
    }
  }

  return (
    <div className="App">
      <h1>My Todos</h1>

      <div className="todo-wrapper">
        <div className="todo-input"> 
        
        <Input
          title={title}
          description={description}
          onTitleChange={setTitle}
          onDescriptionChange={setDescription}
        />

        <Button addtask={addTask} />

        </div>

        <Switcher />
        <div className="todo-list">

        {Todos.map((todo, index) => (
          <Todoitem key={index} title={todo.title} description={todo.description} />
        ))}

        </div>
      </div>
    </div>
  );
}

export default App;
