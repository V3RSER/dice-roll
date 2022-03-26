import React, { Component } from "react";
import Form from "./components/Form";
import Result from "./components/Result";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h3 className="text-center my-4">Lanza los dados</h3>
          </div>
        </div>
        <div className="row justify-content-center ">
          <Form />
        </div>
        <div className="row justify-content-center align-items-center">
          <Result />
        </div>
      </div>
    );
  }
}

export default App;
