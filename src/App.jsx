import { useState } from 'react';
import './App.css';
import TodoForm from './TodoForm';
import TodoList from './todolist';

function App() {
 week-04-hooks
  const [todoList, setTodoList] = useState([]);

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title,
    };
    setTodoList([...todoList, newTodo]);
  };


 week-02-components
//commiting app
  const todos = [
    {id: 1, title: "review resources"},
    {id: 2, title: "take notes"},
    {id: 3, title: "code in app"},
  ]
 week-01-setup
 week-01-setup
  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;













