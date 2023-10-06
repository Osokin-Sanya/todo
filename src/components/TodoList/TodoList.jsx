import { useSelector } from "react-redux";

import { TodoItem } from "../TodoItem";
import { selectPaginationTodos } from "../../store/selectors";

const TodoList = () => {
  const listTodo = useSelector(selectPaginationTodos);

  return (
    <ul style={{ height: 152 }} className="list-all_todo">
      {listTodo.map((todo) => {
        return <TodoItem key={todo.id} {...todo} />;
      })}
    </ul>
  );
};
export { TodoList };
