import React, { Component } from "react";
import Form from "./components/Form";
import Message from "./components/Message";

class App extends Component {
  constructor() {
    super();
    this.state = {
      errorData: ""
    };
  }

  handleFormError = params => {
    this.setState({
      errorData: params
    });
  };

  render() {
    return (
      <div>
        <Form raiseFormError={this.handleFormError} />
        <Message errorMessage={this.state.errorData} />
      </div>
    );
  }
}

export default App;
