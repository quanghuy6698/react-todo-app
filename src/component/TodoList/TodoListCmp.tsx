import "./TodoListCmp.css";
import todoListStore from "../../state/TodoListState";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, editItem } from "../../state/TodoListState";
import { useState } from "react";

function TodoListCmp() {
  const todoList = useSelector((state: any) => state.todoList.value);
  const todoListItem: any[] = [];

  todoList.forEach((todo: any) => {
    todoListItem.push(
      <div className="item-wrapper" key={todo.id}>
        <div className="item">
          <div className="item__title">{todo.title}</div>
          <div className="item__date">{todo.date}</div>
          <div className="item__descr">{todo.descr}</div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="todo-list">{todoListItem}</div>
    </>
  );
}

export default TodoListCmp;
