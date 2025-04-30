import { useState } from 'react';
import './App.css';
import TodoForm from './TodoForm';
import TodoLists from './TodoLists';

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleAddTodo = (e) => {
    e.preventDefault(); // prevent page reload
    if (!newTodo.trim()) return;

    const newTodoItem = {
      id: Date.now(), // unique ID
      title: newTodo,
    };

    setTodoList([...todoList, newTodoItem]); // add to list
    setNewTodo(""); // clear input
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm 
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        handleAddTodo={handleAddTodo}
      />
      <p>{newTodo}</p>
      <TodoLists todoList={todoList} />
    </div>
  );
}

export default App;