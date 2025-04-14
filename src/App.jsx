import './App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {
week-03-props-and-components

  const todos = [
    {id: 1, title: "review resources"},
    {id: 2, title: "take notes"},
    {id: 3, title: "code in app"},
  ]
week-01-setup
  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;



