import { createSlice } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
  name: "pagination",
  initialState: 1,
  reducers: {
    selectPage(_, action) {
      return action.payload;
    },
  },
});

export default paginationSlice.reducer;

export const { selectPage } = paginationSlice.actions;
