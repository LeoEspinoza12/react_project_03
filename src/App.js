import React, { Component } from 'react';
import Backdrop from './components/UI/Backdrop/Backdrop'
import Main from './components/Main'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Backdrop />
        <Main />
      </div>

      
    );
  }
}

export default App;
