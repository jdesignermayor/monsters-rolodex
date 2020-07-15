import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component.jsx";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        <input
          type="search"
          onChange={(e) => this.setState({ searchField: e.target.value })}
          placeholder="find your monster"
        />
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
