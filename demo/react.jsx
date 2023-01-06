import React from "react";
import calculate from "../logic/calculate";
import "./App.css";
import ButtonPanel from "./ButtonPanel";
import Display from "./Display";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = (buttonName) => {
    this.setState(calculate(this.state, buttonName));
  };

  render() {
    return (
      <div className="component-app">
        Tacos
        <Display value={this.state.next || this.state.total || "0"} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

const AnotherComponent = (first, second, onClick, third) => {
  // This is a fake comment

  const myTest = false;

  console.log("This is a test", { myTest });

  return (
    <div className="another-component">
      {first}

      <button
        className="another-component"
        data-fake="of course"
        onClick={onClick}
      >
        {third ? third : second}
      </button>
    </div>
  );
};

export default App;

export { AnotherComponent };
