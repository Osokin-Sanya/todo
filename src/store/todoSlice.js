import { createSlice } from "@reduxjs/toolkit";

import { startingFilter } from "../consts";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    listTodo: [],
    filter: startingFilter,
  },
  reducers: {
    addTodo(state, action) {
      state.listTodo.unshift({
        id: new Date().getTime().toString(),
        text: action.payload,
        completed: false,
      });
    },
    removeTodo(state, action) {
      state.listTodo = state.listTodo.filter(
        (todo) => todo.id !== action.payload
      );
    },

    toggleTodoCompleted(state, action) {
      const { payload } = action;
      const toggleTodo = state.listTodo.find((todo) => todo.id === payload);
      if (toggleTodo) {
        toggleTodo.completed = !toggleTodo.completed;
      }
    },
    changeFilter(state, action) {
      const { payload } = action;
      state.filter = payload;
    },
  },
});

export default todoSlice.reducer;

export const { addTodo, removeTodo, toggleTodoCompleted, changeFilter } =
  todoSlice.actions;
