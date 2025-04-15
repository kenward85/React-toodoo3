import { useState } from 'react';
import './App.css';
import TodoForm from './TodoForm';
import TodoList from './todolist';

function App() { 
  const [newTodo, setNewTodo] = useState("Write a new todo");

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm newTodo={newTodo} setNewTodo={setNewTodo} />
      <p>{newTodo}</p>
      <TodoList />
    </div>
  );
}

export default App;










