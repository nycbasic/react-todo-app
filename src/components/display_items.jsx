import React from "react";
import Items from "./items";

const DisplayItems = props => {
  return (
    <div className="main">
      <h2>To-Do List</h2>
      <div className="container">
        <div class="alert alert-warning" role="alert" />
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <button
              className="btn btn-outline-primary"
              type="button"
              onClick={props.onSubmit}
            >
              Submit
            </button>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder=""
            aria-label="Example text with two button addons"
            aria-describedby="button-addon3"
            value={props.inputValue}
            onChange={props.onInputChange}
          />
        </div>
        <ul className="list-group">
          <Items items={props.items} onDelete={props.onDelete} />
        </ul>
        <button
          className="btn btn-danger"
          type="button"
          onClick={props.onClear}
        >
          Clear List
        </button>
      </div>
    </div>
  );
};

export default DisplayItems;
