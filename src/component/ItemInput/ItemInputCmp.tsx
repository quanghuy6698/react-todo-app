import "./ItemInputCmp.css";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, editItem } from "../../state/TodoListState";

function ItemInputCmp() {
  const dispatch = useDispatch();
  const addTodoItem = () => {
    const itemId = Date.now().toString();
    const values = {
      id: itemId,
      title: itemInputForm.values.title,
      descr: itemInputForm.values.descr,
      date: itemInputForm.values.date,
    };
    dispatch(addItem(values));
  };

  const resetItemInputForm = () => {
    itemInputForm.setFieldValue("title", "");
    itemInputForm.setFieldValue("descr", "");
    itemInputForm.setFieldValue("date", "");
  };

  const itemInputForm = useFormik({
    initialValues: {
      title: "",
      descr: "",
      date: "",
    },
    onSubmit: () => {},
  });

  return (
    <>
      <div className="form-wrapper">
        <form className="form">
          <div className="title">Input a Todo item</div>
          <div className="input">
            <label className="input__label">Title</label>
            <input className="input__input" id="title" name="title" type="text" onChange={itemInputForm.handleChange} value={itemInputForm.values.title} />
          </div>
          <div className="input">
            <label className="input__label">Description</label>
            <textarea
              className="input__textarea"
              id="descr"
              name="descr"
              rows={6}
              onChange={itemInputForm.handleChange}
              value={itemInputForm.values.descr}
            ></textarea>
          </div>
          <div className="input">
            <label className="input__label">Date</label>
            <input className="input__input" id="date" name="date" type="text" onChange={itemInputForm.handleChange} value={itemInputForm.values.date} />
          </div>
          <div className="button-gr">
            <button type="button" className="button-gr__btn-add" onClick={addTodoItem}>
              Add
            </button>
            <button type="button" className="button-gr__btn-reset" onClick={resetItemInputForm}>
              Reset
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ItemInputCmp;
