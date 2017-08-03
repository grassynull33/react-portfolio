import React, { Component } from 'react';
import './QuadrantOne.css';
import Header from './Header';

class QuadrantOne extends Component {
  render() {
    return (
      <div className="QuadrantOne quad">
        <Header header={this.props.header} />
      </div>
    );
  }
}

export default QuadrantOne;
