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
        <div className="flex-row">
          <QuadrantOne header="Yoon Lee" />
          <QuadrantTwo header="Expertise" />
        </div>
        <div className="flex-row">
          <QuadrantThree header="Portfolio" />
          <QuadrantFour header="You" />
        </div>
      </div>
    );
  }
}

export default App;
