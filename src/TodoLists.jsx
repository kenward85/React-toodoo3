import TodoListItem from './TodoListItem';

function TodoList({ todoList }) {
  return (
    //testing
    <ul>
      {todoList.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;






