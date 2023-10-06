import { Button } from "antd";

import { changeFilter } from "../../store/todoSlice";
import { useDispatch } from "react-redux";
import { filters } from "../../consts";

import styles from "./FiltersTask.module.scss";

function FiltersTask() {
  const dispatch = useDispatch();

  const filterSelection = (filter) => {
    dispatch(changeFilter(filter));
  };

  return (
    <div className={styles.filter_button}>
      {filters.map((filter) => (
        <Button
          key={filter}
          onClick={() => filterSelection(filter)}
          type="primary"
          size="small"
        >
          {filter}
        </Button>
      ))}
    </div>
  );
}
export { FiltersTask };
