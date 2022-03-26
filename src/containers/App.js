import React, { Component } from "react";
import Form from "../components/Form";
import Dices from "../components/Dices";

class App extends Component {
  render() {
    return (
      <div>
        <Form />
        <Dices />
      </div>
    );
  }
}

export default App;
