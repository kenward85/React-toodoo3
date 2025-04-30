import React, { useRef } from 'react';

function TodoForm({ onAddTodo }) {
  const todoTitleInput = useRef(null);

  const handleAddTodo = (event) => {
    event.preventDefault(); 
    const title = event.target.title.value; 
    onAddTodo(title); 
    event.target.reset(); 
    todoTitleInput.current.focus();
  };

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Todo</label>
      <input
        type="text"
        id="todoTitle"
        name="title"
        ref={todoTitleInput} // Step 3: attach ref to input
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;


