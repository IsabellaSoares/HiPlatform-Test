import React, { Component } from 'react';
import Data from './data.json';
import './App.css';
import RecursiveList from './components/recursive_list/recursive.js';


class App extends Component {
  render () {
    return (
      <RecursiveList data={Data} />
    );
  }
}

export default App;
