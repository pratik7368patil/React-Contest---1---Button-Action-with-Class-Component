import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      para: "",
    };
  }

  generatePara = () => {
    this.setState({
      para: (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy
        </p>
      ),
    });
  };

  render() {
    return (
      <div id="main">
        <button id="click" onClick={this.generatePara}>
          Click
        </button>
        {this.state.para}
      </div>
    );
  }
}

export default App;
