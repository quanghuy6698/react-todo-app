import "./TodoListCmp.css";
import todoListStore from "../../state/TodoListState";
import { useState } from "react";

function TodoListCmp() {
  const [displayTodoList, setDisplayTodoList] = useState([]);

  return (
    <>
      <div className="todo-list">
        <div className="item">
          <div className="item__title">Title</div>
          <div className="item__descr">Descr</div>
          <div className="item__date">Date</div>
        </div>
      </div>
    </>
  );
}

export default TodoListCmp;
