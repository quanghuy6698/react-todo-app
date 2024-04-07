import "./HomePage.css";
import ItemInputCmp from "../../component/ItemInput/ItemInputCmp";
import NavCmp from "../../component/Nav/NavCmp";
import TodoListCmp from "../../component/TodoList/TodoListCmp";

function HomePage() {
  return (
    <>
      <NavCmp />
      <div className="view-grid">
        <TodoListCmp />
        <ItemInputCmp />
      </div>
    </>
  );
}

export default HomePage;
