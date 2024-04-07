import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from "./TodoListState";

export default configureStore({
  reducer: {
    todoList: todoListReducer,
  },
});
