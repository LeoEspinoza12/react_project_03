import React, { Component } from 'react';
import Backdrop from './components/UI/Backdrop/Backdrop'
import List from './components/List/List'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Backdrop />
        <List />
      </div>

      
    );
  }
}

export default App;
