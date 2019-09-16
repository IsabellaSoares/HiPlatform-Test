import React, { Component } from 'react';
import Data from './data.json';
import DataTest from './data_test.json';
import './App.css';
import RecursiveList from './components/recursive_list/recursive.js';

class App extends Component {
  render () {
    {console.log(Object.entries(DataTest));}
    return (      
      <RecursiveList data={Data} />
    );
  }
}

export default App;
