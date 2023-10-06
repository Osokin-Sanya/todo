import { useEffect } from "react";
import { Pagination } from "antd";
import { useDispatch, useSelector } from "react-redux";

import {
  selectCurrentFilter,
  selectCurrentPage,
  selectTodosByFilter,
} from "../../store/selectors";
import { selectPage } from "../../store/paginationSlice";

function PaginationTodos() {
  const dispatch = useDispatch();

  const currentPage = useSelector(selectCurrentPage);
  const allTodos = useSelector(selectTodosByFilter);
  const currentFilter = useSelector(selectCurrentFilter);

  useEffect(() => {
    if (currentPage !== 1) {
      dispatch(selectPage(1));
    }
  }, [currentFilter]);

  const onPageChange = (page) => {
    dispatch(selectPage(page));
  };
  return (
    <div className="pagination">
      <Pagination
        current={currentPage}
        showSizeChanger={false}
        onChange={onPageChange}
        total={allTodos.length * 2}
      />
    </div>
  );
}
export { PaginationTodos };
