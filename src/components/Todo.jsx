import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faSquareCheck,
} from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export function Todo({ todo, toggleComplete, deleteTodo, editTodo }) {
  return (
    <div className="todo">
      <p
        className={`${todo.completed ? "completed" : ""}`}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.task}
      </p>
      <div>
        <FontAwesomeIcon
          className="icons"
          icon={faSquareCheck}
          onClick={() => toggleComplete(todo.id)}
        />
        <FontAwesomeIcon
          className="icons"
          icon={faPenToSquare}
          onClick={() => editTodo(todo.id)}
        />
        <FontAwesomeIcon
          className="icons"
          icon={faTrash}
          onClick={() => deleteTodo(todo.id)}
        />
      </div>
    </div>
  );
}
