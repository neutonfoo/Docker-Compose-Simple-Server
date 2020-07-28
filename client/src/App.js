import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    text: "",
  };

  async componentDidMount() {
    const v = await axios.get("/api/value");

    this.setState({
      text: v.data,
    });
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.text}</h1>
      </div>
    );
  }
}

export default App;
