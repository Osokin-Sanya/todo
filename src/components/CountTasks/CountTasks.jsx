import { useSelector } from "react-redux";

import { selectTodosByFilter } from "../../store/selectors";

function CountTasks() {
  const allTodos = useSelector(selectTodosByFilter);

  return <div>Total todos: {allTodos.length}</div>;
}
export { CountTasks };
