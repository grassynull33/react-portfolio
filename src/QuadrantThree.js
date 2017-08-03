import React, { Component } from 'react';
import './QuadrantThree.css';
import Header from './Header';

class QuadrantThree extends Component {
  render() {
    return (
      <div className="QuadrantThree quad">
        <Header header={this.props.header} />
      </div>
    );
  }
}

export default QuadrantThree;
