import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/CardList/CardList.component";
import { SearchBox } from "./components/SearchBox/SearchBox.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField:"",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }));
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="App">
      <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder={"search monster"}
          handleChange={(e) => {
            this.setState({searchField : e.target.value});
          }}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
