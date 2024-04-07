import { useState } from "react";
import "./ItemInputCmp.css";
import { useFormik } from "formik";

function ItemInputCmp() {
  const addTodoItem = () => {
    const values = {
      title: itemInputForm.values.title,
      descr: itemInputForm.values.descr,
      date: itemInputForm.values.date,
    };
    console.log(values);
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
  });

  return (
    <>
      <div className="form-wrapper">
        <div className="title">Input a Todo item</div>
        <form className="form">
          <div className="input">
            <label className="input__label">Title</label>
            <input
              className="input__input"
              id="title"
              name="title"
              type="text"
              onChange={itemInputForm.handleChange}
              value={itemInputForm.values.title}
            />
          </div>
          <div className="input">
            <label className="input__label">Description</label>
            <textarea
              className="input__textarea"
              id="descr"
              name="descr"
              rows="6"
              onChange={itemInputForm.handleChange}
              value={itemInputForm.values.descr}
            ></textarea>
          </div>
          <div className="input">
            <label className="input__label">Date</label>
            <input
              className="input__input"
              id="date"
              name="date"
              type="text"
              onChange={itemInputForm.handleChange}
              value={itemInputForm.values.date}
            />
          </div>
          <div className="button-gr">
            <button
              type="button"
              className="button-gr__btn-add"
              onClick={addTodoItem}
            >
              Add
            </button>
            <button
              type="button"
              className="button-gr__btn-reset"
              onClick={resetItemInputForm}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ItemInputCmp;
