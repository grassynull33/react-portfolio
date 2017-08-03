import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import QuadrantOne from './QuadrantOne';
import QuadrantTwo from './QuadrantTwo';
import QuadrantThree from './QuadrantThree';
import QuadrantFour from './QuadrantFour';

class App extends Component {
  render() {
    return (
      <div className="App">
        <QuadrantOne />
        <QuadrantTwo />
        <QuadrantThree />
        <QuadrantFour />
      </div>
    );
  }
}

export default App;
