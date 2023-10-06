import { useSelector } from "react-redux";

import { ThemeToggle } from "./components/ThemeToggle";
import { CountTasks } from "./components/CountTasks";
import { AddingTasks } from "./components/AddingTasks";
import { FiltersTask } from "./components/FiltersTask";
import { TodoList } from "./components/TodoList";
import { PaginationTodos } from "./components/Pagination";

function App() {
  const { status, error } = useSelector((state) => state.todos);

  if (status == "loading") return <>loading</>;
  if (status == "failed") return <>{error}</>;
  return (
    <>
      <div className="header">
        <ThemeToggle />
        <CountTasks />
      </div>
      <AddingTasks />
      <FiltersTask />
      <TodoList />
      <PaginationTodos />
    </>
  );
}

export default App;
