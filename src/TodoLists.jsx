import React from 'react';
import TodoListItem from './TodoListItem';

function TodoLists({ todoList }) {
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoListItem key={todo.id} title={todo.title} />
      ))}
    </ul>
  );
}

export default TodoLists;








