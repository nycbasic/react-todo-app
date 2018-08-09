import React, { Component } from "react";
import "../App.css";
import DisplayItems from "./display_items";
import Navbar from "./navbar";

class App extends Component {
  state = {
    input: "",
    items: ["Pick up eggs", "Haircut appointment", "Finish To do app"]
  };

  handleChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  submitItem = () => {
    if (this.state.input === "") {
      alert("You cannot leave the text field blank");
    } else {
      this.setState({
        items: this.state.items.concat(this.state.input),
        input: ""
      });
    }
  };

  clearItem = () => {
    this.setState({
      items: []
    });
  };

  deleteItem = item => {
    const newMsgs = this.state.items.filter(val => {
      return item !== val;
    });
    this.setState({
      items: newMsgs
    });
  };

  render() {
    const { handleChange, submitItem, clearItem, deleteItem } = this;
    const { input, items } = this.state;
    return (
      <React.Fragment>
        <Navbar />
        <DisplayItems
          onInputChange={handleChange}
          onSubmit={submitItem}
          onClear={clearItem}
          onDelete={deleteItem}
          inputValue={input}
          items={items}
        />
      </React.Fragment>
    );
  }
}

export default App;
