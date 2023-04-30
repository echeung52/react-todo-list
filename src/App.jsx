import "./styles.css";
import { useState, useEffect } from "react";
import { TodoForm } from "./components/TodoForm";
import { Todo } from "./components/Todo";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./components/EditTodoForm";
uuidv4();

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(savedTodos);
  }, []);

  const addTodo = (todo) => {
    const newTodos = [
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ];
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const toggleComplete = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id == id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id != id);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id == id) {
          return { ...todo, isEditing: !todo.isEditing };
        } else {
          return todo;
        }
      })
    );
  };

  const editTask = (task, id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id == id) {
        return { ...todo, task, isEditing: !todo.isEditing };
      } else {
        return todo;
      }
    });
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };
  return (
    <div className="todoContainer">
      <h1>What is on the Agenda Today?</h1>
      <TodoForm className="todoForm" addTodo={addTodo} />
      {todos.map((todo) => {
        if (todo.isEditing) {
          return <EditTodoForm editTodo={editTask} task={todo} />;
        } else {
          return (
            <Todo
              todo={todo}
              key={todo.id}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          );
        }
      })}
    </div>
  );
}
