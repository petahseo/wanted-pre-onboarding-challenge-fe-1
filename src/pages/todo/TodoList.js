import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState("");

  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "todo") {
      setTodos(value);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="todo"
          placeholder="todo"
          value={todos}
          required
          onChange={onChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
