function TodoForm({ newTodo, setNewTodo, handleAddTodo }) {
  return (
    <form onSubmit={handleAddTodo}>
      <input
        type="text"
        placeholder="Enter a todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;






