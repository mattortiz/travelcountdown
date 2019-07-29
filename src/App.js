import React, { Component } from "react";
import "./App.css";
import Clock from "./Clock";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: "August 6, 2019 19:45:00",
      destCity: "Salt Lake City, UT",
      homeCity: "Anthem, AZ"
    };
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">{this.state.destCity}</div>
        <div className="App-date">{this.state.deadline}</div>
        <Clock deadline={this.state.deadline} />
      </div>
    );
  }
}

export default App;
