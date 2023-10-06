import { createSelector } from "@reduxjs/toolkit";

const selectAllTodos = (state) => state.todos.listTodo;
const selectFilterTodos = (state) => state.todos.filter;
const selectPage = (state) => state.pagination;
const selectTheme = (state) => state.theme;

export const selectTodosByFilter = createSelector(
  [selectAllTodos, selectFilterTodos],

  (allTodos, activeFilter) => {
    if (activeFilter === "ALL") {
      return allTodos;
    }
    if (activeFilter === "COMPLETED") {
      return allTodos.filter((todo) => todo.completed);
    }
    if (activeFilter === "ACTIVE") {
      return allTodos.filter((todo) => !todo.completed);
    }
  }
);

export const selectPaginationTodos = createSelector(
  [selectTodosByFilter, selectPage],
  (allTodos, page) => {
    const itemsPerPage = 5;
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return allTodos.slice(startIndex, endIndex);
  }
);
export const selectCurrentPage = createSelector([selectPage], (currentPage) => {
  return currentPage;
});
export const selectCurrentFilter = createSelector(
  [selectFilterTodos],
  (currentFilter) => {
    return currentFilter;
  }
);
export const selectCurrentTheme = createSelector([selectTheme], (theme) => {
  return theme;
});
