import { createSlice } from "@reduxjs/toolkit";

export const todoListSlice = createSlice({
  name: "todoList",
  initialState: {
    value: [
      {
        id: "abc",
        title: "Item 1",
        descr: "Descr 1",
        date: "22/12/2023",
      },
      {
        id: "abcd",
        title: "Item 2",
        descr: "Descr 2",
        date: "24/12/2023",
      },
    ],
  },
  reducers: {
    addItem: (state, action) => {
      state.value.push(action.payload);
    },
    removeItem: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
    },
    editItem: (state, action) => {
      state.value.forEach((item) => {
        if (item.id == action.payload.id) {
          item.title = action.payload.title;
          item.descr = action.payload.descr;
          item.date = action.payload.date;
        }
      });
    },
  },
});

export const { addItem, removeItem, editItem } = todoListSlice.actions;

export default todoListSlice.reducer;
