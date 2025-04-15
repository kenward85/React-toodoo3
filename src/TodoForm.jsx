import React from 'react';

function TodoForm({ onAddTodo }) {
  const handleAddTodo = (event) => {
    event.preventDefault(); 
    const title = event.target.title.value; 
    onAddTodo(title); 
    event.target.reset(); 
  };

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Todo</label>
      <input type="text" id="todoTitle" name="title" />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;

