import { useDispatch } from "react-redux";
import { CloseOutlined } from "@ant-design/icons";

import { removeTodo, toggleTodoCompleted } from "../../store/todoSlice";

import styles from "./TodoItem.module.scss";

const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  const handleToggleCompleted = () => {
    dispatch(toggleTodoCompleted(id));
  };

  const handleRemoveTodo = () => {
    dispatch(removeTodo(id));
  };

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={handleToggleCompleted}
      />
      <span className={styles.text_task}>{text}</span>
      <span className={styles.delete} onClick={handleRemoveTodo}>
        <CloseOutlined
          style={{
            color: "#3498db",
            fontSize: "15px",
          }}
        />
      </span>
    </li>
  );
};

export { TodoItem };
