import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Form from "./Components/Form";
import "./App.css";
import Todolist from "./Components/Todolist";

function App() {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [editTodos, setEditTodos] = useState(null);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodos={editTodos}
            setEditTodos={setEditTodos}
          />
        </div>
        <div>
          <Todolist
            todos={todos}
            setTodos={setTodos}
            setEditTodos={setEditTodos}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
