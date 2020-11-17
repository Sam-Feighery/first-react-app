import React, { Component } from 'react';
import './App.css';

import { CardList } from './components/card-list/card-list.component.jsx';

import { SearchBox } from './components/search-box/search-box.component.jsx';


class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }));
  }

  render() {
    const { monsters,searchField } = this.state;
    const filterMonsters = monsters.filter(monster => 
    monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
      );

    return (
      <div className="App">
      <SearchBox 
      placeholder='search monsters'
      handleChange = {
        e => this.setState({ searchField: e.target.value })}
      /> 
      <CardList monsters={filterMonsters}>
      </CardList>
    </div>
  );
  }
}

export default App;
