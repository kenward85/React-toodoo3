import './App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoLists'

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;