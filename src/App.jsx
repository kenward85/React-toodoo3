import { useState } from 'react';
import './App.css';
import TodoForm from './TodoForm';
import TodoLists from './TodoLists';

function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title,
    };
    setTodoList([...todoList, newTodo]);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm onAddTodo={addTodo} />
      <TodoLists todoList={todoList} />
    </div>
  );
}

export default App;














