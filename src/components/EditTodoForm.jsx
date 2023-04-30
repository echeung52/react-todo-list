import { useState } from "react";

export function EditTodoForm({ editTodo, task }) {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("");
  };
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Update Task"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="todo-btn" type="submit">
          Update
        </button>
      </form>
    </>
  );
}
